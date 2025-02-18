function [act,success, Q_action] = bayes_2Bias_robber_mod_HBI_sim(parameters, offers, noActValues, costs, winprobs, stimTrialList)

alpha = 100;
sigmoid=@(x) 1./(1+exp(-x));
softplus=@(x) 1/alpha*log(1+exp(alpha*x));
adjsoftplus=@(x) softplus(x)-softplus(1)+1;
softrelu=@(x) adjsoftplus(x);
softabs=@(x) adjsoftplus(x)+adjsoftplus(-x);

%parameters
mu = sigmoid(parameters(1));
sigma_rel = sigmoid(parameters(2));
z = 0.01 * exp(parameters(3));
bias = 2 * sigmoid(parameters(4))-1;

% unpack data
offer = offers;
noActValue = noActValues;
cost = costs;


%initialize 
act = zeros(1,size(length(offer),1));
success = zeros(1,size(length(offer),1));
Q_action = zeros(1,size(length(offer),1));

k=1; % trial counter for task (T)
for i=1:length(stimTrialList)
    
    a=mu*((1/sigma_rel)-1);
    b=(1-mu)*((1/sigma_rel)-1);

    for t=1:stimTrialList(i)
            
        mu_subj = a./(a+b);
        
        Q_NA = noActValue(k); % value of not fighting (no action)
        Q_A = -cost(k) + mu_subj.* offer(k); % value of fighting (action)
        
        Q_action(k) = Q_A;
                
        q_net=z*[Q_A Q_NA];

        if rand < softrelu(bias) + (1-softabs(bias))*(exp(q_net(1))/sum(exp(q_net)))
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

