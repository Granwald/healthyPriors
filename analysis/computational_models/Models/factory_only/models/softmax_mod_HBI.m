function [loglik] = softmax_mod_HBI(parameters, subj)

%This model only calculates values and then selects action based on value
%and a softmax function. It assumes a 100 % success probability for active
%choices. This model is for the factory task.
%
%parameters:
%z = inverse temp of softmax
%
%subj:
%act = participants choices (1 = active, 2 = passive)
%success = outcome of particpants choices (0 = fail/passive, 1 = success)
%task = task on each trial (1 = robber, 2 = factory) 
%offer = raw offer (robber tip, factory machine loss cost) on each trial
%cost = raw cost of performing the active choice
%noActValue = raw value of choosing the passive choice (ex for factory = -offer)
%stimTrialList = number of trials with each stimulus before switching

%parameters
z = 0.01 * exp(parameters(1));

% unpack data
act = subj.act;
%success = subj.success; %not used in this model
%task = subj.task; %not used in this model
offer = subj.offer;
cost = subj.cost;
%noActValue = subj.noActValue; %not used in this model
stimTrialList = subj.stimTrialList;

% Taskgeneral constants
N_stims_tot = length(stimTrialList);


% initialize
l=0;

k=1; % trial counter
for i=1:N_stims_tot
    
    for t=1:stimTrialList(i)
        
        Q_NA = -offer(k); % value of passive
        Q_A = -cost(k); % value of active
        
        q_net=z*[Q_A Q_NA];
        l0 = max(q_net);
        la = q_net(act(k)) - l0 - log(sum(exp(q_net-l0)));
        l = l + la;
        
        k=k+1; %update trial counter for task
    end
    
end

loglik  = l;
