function [loglik] = prior1_MS_2invT_F_actBias_mod_HBI(parameters, subj)

%Bayesian learner model with one prior and bias in the factory task
%
%parameters:
%mu = mu of the beta distribution that make up the prior
%sigma_rel = relative sigma of the beta distrubution that make up the prior
%z = 2 invT parameters for each task (z(1) = robber, z(2) = factory)  
%bias = bidirectional bias implemented only in the factory task
%
%subj:
%act = participants choices (1 = active, 2 = passive)
%success = outcome of particpants choices (0 = fail/passive, 1 = success)
%task = task on each trial (1 = robber, 2 = factory)
%offer = raw offer (robber tip, factory machine loss cost) on each trial
%cost = raw cost of performing the active choice
%noActValue = raw value of choosing the passive choice (ex for robber = 0)
%stimTrialList = number of trials with each stimulus before switching

%functions
alpha = 100;
sigmoid=@(x) 1./(1+exp(-x));
softplus=@(x) 1/alpha*log(1+exp(alpha*x));
adjsoftplus=@(x) softplus(x)-softplus(1)+1;
softrelu=@(x) adjsoftplus(x);
softabs=@(x) adjsoftplus(x)+adjsoftplus(-x);

%parameters
mu = sigmoid(parameters(1));
sigma_rel = sigmoid(parameters(2));
z =  0.01 * exp(parameters(3:4));
bias = 2 * sigmoid(parameters(5))-1;

% unpack data
act = subj.act;
success = subj.success;
task = subj.task;
offer = subj.offer;
cost = subj.cost;
noActValue = subj.noActValue;
stimTrialList = subj.stimTrialList;

% Task general constants
N_stims_tot = length(stimTrialList);

% initialize
l=0;

k=1; % trial counter for task
for i=1:N_stims_tot
    a=mu*((1/sigma_rel)-1);
    b=(1-mu)*((1/sigma_rel)-1);
    for t=1:stimTrialList(i)
        
        mu_subj = a./(a+b);
        if task(k) == 1 %robber task
            Q_NA = noActValue(k); % value of passive
            Q_A = -cost(k) + mu_subj.* offer(k); % value of active
            q_net=z(task(k))*[Q_A Q_NA];
        elseif task(k)==2 %factory task
            Q_NA = -offer(k); % value of passive
            Q_A = -cost(k) - (1-mu_subj).* offer(k); % value of active
            q_net=z(task(k))*[Q_A Q_NA];
        end
        
        l0 = max(q_net);

        ps=exp(q_net-l0);ps=ps/sum(ps);
        if task(k)==1
            ps1= ps(1);
        elseif task(k)==2
            ps1= softrelu(bias) + (1-softabs(bias))*ps(1); %add bias only to factory task
        end
        ps=[ps1 1-ps1];
        
        la = log(1e-20+ps(act(k)));
        l = l + la;

        
        if act(k)==1 && success(k)==1
            a=a+1;
        elseif act(k)==1 && success(k)==0
            b=b+1;
        end
        k=k+1; %update trial counter for task
    end
    
end

loglik  = l;
