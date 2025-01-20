function [loglik] = winStayLoseShift_mod_HBI(parameters, subj)

%Win-stay lose-shift model. Assumes a 100% probability of success when
%choosing the active choice but adds bonuses based on the outcomes of the
%active choices. This model is for the factory task. This model is for the factory task.
%
%parameters:
%z = invT parameter used in the softmax choice function.
%winstay = bonus for successes
%loseshift = bonus for losses
%
%subj:
%act = participants choices (1 = active, 2 = passive)
%success = outcome of particpants choices (0 = fail/passive, 1 = success)
%task = task on each trial (1 = robber, 2 = factory)
%offer = raw offer (robber tip, factory machine loss cost) on each trial
%cost = raw cost of performing the active choice
%noActValue = raw value of choosing the passive choice (ex for factory = -offer)
%stimTrialList = number of trials with each stimulus before switching

z = 0.01 * exp(parameters(1));
winstay = exp(parameters(2));
loseshift = exp(parameters(3));

% unpack data
act = subj.act;
success = subj.success;
%task = subj.task; % not used in this model
offer = subj.offer;
cost = subj.cost;
%noActValue = subj.noActValue; % not used in this model
stimTrialList = subj.stimTrialList;


% Taskgeneral constants
N_stims_tot = length(stimTrialList);


% initialize
l=0;

bonus = 0;
k=1; % trial counter
for i=1:N_stims_tot    
    
    for t=1:stimTrialList(i)
        Q_NA = -offer(k); % value of passive
        Q_A = -cost(k); % value of active
        
        Q_A = Q_A + bonus;
        q_net=[Q_A Q_NA];
        q_net=z*q_net;
        l0 = max(q_net);
        la = q_net(act(k)) - l0 - log(sum(exp(q_net-l0)));
        l = l + la;
        
        bonus = 0;
        if act(k)==1 && success(k)==1
            bonus=winstay;
        elseif act(k)==1 && success(k)==0
            bonus= -loseshift;
        end
        
        k=k+1; %update trial counter for task
    end
    
end

loglik  = l;
