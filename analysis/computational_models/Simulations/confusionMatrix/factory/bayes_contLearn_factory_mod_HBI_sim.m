function [act,success, Q_Act] = bayes_contLearn_factory_mod_HBI_sim(parameters, offers, costs, winprobs, stimTrialList)

%parameters
mu = 1/(1+exp(-parameters(1)));
sigma_rel = 1/(1+exp(-parameters(2)));
z = 0.01 * exp(parameters(3));

% unpack data
offer = offers;
cost = costs;

%initialize 
act = zeros(1,size(length(offer),1));
success = zeros(1,size(length(offer),1));
Q_Act = zeros(1,size(length(offer),1));
a=mu*((1/sigma_rel)-1);
b=(1-mu)*((1/sigma_rel)-1);
k=1; % trial counter for task (T)
for i=1:length(stimTrialList)

    for t=1:stimTrialList(i)
            
        mu_subj = a./(a+b);
        
        Q_NA = -offer(k); % value of not fighting (no action)
        Q_A = -cost(k) - (1- mu_subj).* offer(k); % value of fighting (action)

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
        
        if action==1 && suc==1
            a=a+1;
        elseif action==1 && suc==0
            b=b+1;
        end
        k=k+1; %update trial counter for task
    end
    
end

end

