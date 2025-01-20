function [loglik] = staticProb_2Bias_mod_HBI(parameters, subj)

%Static probability model with a bidirectiona bias parameter. 
%Assumes a subjective probability of success when choosing the active 
%choice. This model is for the factory task.
%
%parameters:
%subj_prob0 = subjective probability of success when active active
%z = invT parameter used in the softmax choice function.
%bias = bidirectiona bias parameter ranging from -1 to 1
%
%subj:
%act = participants choices (1 = active, 2 = passive)
%success = outcome of particpants choices (0 = fail/passive, 1 = success)
%task = task on each trial (1 = robber, 2 = factory)
%offer = raw offer (robber tip, factory machine loss cost) on each trial
%cost = raw cost of performing the active choice
%noActValue = raw value of choosing the passive choice (ex for factory = -offer)
%stimTrialList = number of trials with each stimulus before switching

%functions
alpha = 100;
sigmoid=@(x) 1./(1+exp(-x));
softplus=@(x) 1/alpha*log(1+exp(alpha*x));
adjsoftplus=@(x) softplus(x)-softplus(1)+1;
softrelu=@(x) adjsoftplus(x);
softabs=@(x) adjsoftplus(x)+adjsoftplus(-x);

%parameters
subj_prob0=1./(1+exp(-parameters(1)));
z = 0.01 * exp(parameters(2));
bias = 2 * sigmoid(parameters(3))-1;

% unpack data
act = subj.act;
%success = subj.success;
%task = subj.task;
offer = subj.offer;
cost = subj.cost;
%noActValue = subj.noActValue;
stimTrialList = subj.stimTrialList;

% Task general constants
N_stims_tot = length(stimTrialList);

% initialize
l=0;

k=1; % trial counter
for i=1:N_stims_tot
    
    for t=1:stimTrialList(i)
        
        Q_NA = -offer(k); % value of passive
        Q_A = -cost(k) - (1-subj_prob0).*offer(k); % value of active
        
        q_net=z*[Q_A Q_NA];
        l0 = max(q_net);
        ps=exp(q_net-l0);ps=ps/sum(ps);

        ps1= softrelu(bias) + (1-softabs(bias))*ps(1);
        ps=[ps1 1-ps1];
        
        la = log(1e-20+ps(act(k)));
        l = l + la;

        k=k+1; %update trial counter for task
    end
    
end

loglik  = l;
