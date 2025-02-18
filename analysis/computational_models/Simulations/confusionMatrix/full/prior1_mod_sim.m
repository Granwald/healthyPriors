function [act, success, Q_act] = prior1_mod_sim(parameters, offers,noActValues,costs, tasks, winprobs, stimTrialList)

alpha = 100;
sigmoid=@(x) 1./(1+exp(-x));
softplus=@(x) 1/alpha*log(1+exp(alpha*x));
adjsoftplus=@(x) softplus(x)-softplus(1)+1;
softrelu=@(x) adjsoftplus(x);
softabs=@(x) adjsoftplus(x)+adjsoftplus(-x);

%parameters
mu = 1./(1+exp(-parameters(1)));
sigma_rel = 1./(1+exp(-parameters(2)));
z =  0.01 * exp(parameters(3:4));
bias = 2 * sigmoid(parameters(5))-1;

% unpack data
task = tasks;
offer = offers;
winprob = winprobs;
noActValue = noActValues;
cost = costs;


% Taskgeneral constants
N_stims_tot = length(stimTrialList);


act = zeros(1,size(length(offer),1));
success = zeros(1,size(length(offer),1));
Q_act = zeros(1,size(length(offer),1));

% initialize


k=1; % trial counter for task (T)
for i=1:N_stims_tot
    
    a=mu*((1/sigma_rel)-1);
    b=(1-mu)*((1/sigma_rel)-1);

    for t=1:stimTrialList(i)
        if task(k)==1
            
            mu_subj = a./(a+b);
            
            Q_NA = noActValue(k); % value of not fighting (no action)
            Q_A = -cost(k) + mu_subj.* offer(k); % value of fighting (action)
            q_net=z(task(k))*[Q_A Q_NA];
        elseif task(k)==2
            
            mu_subj = a./(a+b);
            
            Q_NA = -offer(k); % value of not repearing
            Q_A = -cost(k) -(1 - mu_subj).*offer(k) ; % value of repearing
            q_net=z(task(k))*[Q_A Q_NA];
        end
        
        Q_act(k) = Q_A;
        
        if task(k)==1
            ps1= (exp(q_net(1))/sum(exp(q_net)));
        elseif task(k)==2
            ps1= softrelu(bias) + (1-softabs(bias))*(exp(q_net(1))/sum(exp(q_net))); %add actionbias only to factory task
        end
        
        if rand < ps1
            action = 1;
        else
            action = 2;
        end

         act(k)=action;
        
        if action == 1 && rand < winprob(k)
            suc = 1;
        else
            suc = 0;
        end
        success(k)=suc;
        
        if action==1 && suc==1
            a=a+1;
        elseif action==1 && suc==0
            b=b+1;
        end
       
        k=k+1; %update trial counter for task
    end
    
end

end

