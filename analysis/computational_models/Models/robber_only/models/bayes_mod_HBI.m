function [loglik] = bayes_mod_HBI(parameters, subj)

%Bayesian learner model with a beta distributed prior.
%This model is for the robber task.
%
%parameters:
%mu = mu of the beta distribution that make up the prior
%sigma_rel = relative sigma of the beta distrubution that make up the prior
%z = invT parameter used in the softmax choice function.   
%
%subj:
%act = participants choices (1 = active, 2 = passive)
%success = outcome of particpants choices (0 = fail/passive, 1 = success)
%task = task on each trial (1 = robber, 2 = factory)
%offer = raw offer (robber tip, factory machine loss cost) on each trial
%cost = raw cost of performing the active choice
%noActValue = raw value of choosing the passive choice (for the robber = 0)
%stimTrialList = number of trials with each stimulus before switching

%parameters
mu = 1/(1+exp(-parameters(1)));
sigma_rel = 1/(1+exp(-parameters(2)));
z =  0.01 * exp(parameters(3));

% unpack data
act = subj.act;
success = subj.success;
%task = subj.task; %not used in this model
offer = subj.offer;
cost = subj.cost;
noActValue = subj.noActValue;
stimTrialList = subj.stimTrialList;

% Taskgeneral constants
N_stims_tot = length(stimTrialList);

% initialize
l=0;

k=1; % trial counter
for i=1:N_stims_tot
    a=mu*((1/sigma_rel)-1);
    b=(1-mu)*((1/sigma_rel)-1);
    for t=1:stimTrialList(i)
        
        mu_subj = a./(a+b);
        
        Q_NA = noActValue(k); % value of passive
        Q_A = -cost(k) + mu_subj.* offer(k); % value of active
        
        q_net=z*[Q_A Q_NA];
        l0 = max(q_net);
        la = q_net(act(k)) - l0 - log(sum(exp(q_net-l0)));
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
