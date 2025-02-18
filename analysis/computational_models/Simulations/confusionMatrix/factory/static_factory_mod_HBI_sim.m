function [act,success, Q_Act] = static_factory_mod_HBI_sim(parameters, offers, costs, winprobs, stimTrialList)

%parameters
subj_prob0=1./(1+exp(-parameters(1)));
z = 0.01 * exp(parameters(2));

% unpack data
offer = offers;
cost = costs;


%initialize 
act = zeros(1,size(length(offer),1));
success = zeros(1,size(length(offer),1));
Q_Act = zeros(1,size(length(offer),1));

k=1; % trial counter for task (T)
for i=1:length(stimTrialList)

    for t=1:stimTrialList(i)
        
        Q_NA = -offer(k); % value of not fighting (no action)
        Q_A = -cost(k) - (1- subj_prob0).* offer(k); % value of fighting (action)
        
        Q_Act(k) = Q_A;
            
        q_net=z*[Q_A Q_NA];

        if rand < exp(q_net(1))/sum(exp(q_net))
            action = 1;
        else
            action = 2;
        end
        
        act(k) = action;
        
        if action == 1 && rand < winprobs(k)
            suc = 1;
        else
            suc = 0;
        end
        
        success(k) = suc;

        k=k+1; %update trial counter for task
    end
    
end

end

