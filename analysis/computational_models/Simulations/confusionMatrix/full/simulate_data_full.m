%% Setup
clear all;
WD = pwd;

fname_hbi = load('PATH_TO_FITSIM_OF_CURRENT_MODEL.mat');% example: /hbi_fitSim_1prior_full1.mat'

%% Design matrix
%task general
value_index = (1:20);
cost_types = (1:3);
N_trial_per_stim_array1 = [4 4 4 5 5 8];
N_trial_per_stim_array2 = [4 4 4 5 6 7];

success_rates = repmat(linspace(0,1,12), 1,1);

probs = success_rates(randperm(numel(success_rates)));

%robber task
C_F=50; % cost of fighting.
set_C_F=[75,40,10];

C_NF=0; % cost of not fighting

offers_robber=(C_F-C_NF)./[2 1 0.95:-0.05:0.1];

cost_robber_arrays = round([0.*offers_robber+set_C_F(1) ; 0.05.*offers_robber+set_C_F(2) ; 0.15.*offers_robber+set_C_F(3)]);
offers_robber_arrays= round(offers_robber);

%factory task
set_C_A= [100,50,0];

offers_factory=50./[2 1 0.95:-0.05:0.1];
cost_factory_arrays = round([0.*offers_factory+set_C_A(1); 0.05*offers_factory+set_C_A(2); 0.1*offers_factory+set_C_A(3)]);

offers_factory_arrays= round(offers_factory);

%% Simulations

samples = 1000;
cbm = fname_hbi.cbm;

mp = cbm.output.group_mean{1,1}'; 
stdev = cbm.output.group_hierarchical_errorbar{1,1}*sqrt(length(cbm.output.responsibility));
allParameters = stdev'.*randn(length(mp),samples)+mp*ones(1,samples);
        
        
for s = 1:samples
    parameters = allParameters(:,s);
    
    N_trial_per_stim_array1 = N_trial_per_stim_array1(randperm(length(N_trial_per_stim_array1)));
    N_trial_per_stim_array2 = N_trial_per_stim_array2(randperm(length(N_trial_per_stim_array2)));
    N_trial_per_stim = cat(2,N_trial_per_stim_array1,N_trial_per_stim_array2);

    posAffect = randi([10 50]);
    value_index_matrix = [value_index(randperm(length(value_index))); value_index(randperm(length(value_index))); value_index(randperm(length(value_index)))];
    
    cost_type_value_robber = zeros(length(cost_types), length(value_index));
    for i= 1:length(value_index)
        temp =  cost_types(randperm(length(cost_types)));
        cost_type_value_robber(:,i) = temp;
    end
    
    offers_robber_matrix = zeros(length(cost_types), length(value_index));
    cost_robber_matrix = zeros(length(cost_types), length(value_index));
    for j = 1:length(value_index)
        for i = 1:length(cost_types)
            cost_robber_matrix(i,j) = cost_robber_arrays(cost_type_value_robber(i,value_index_matrix(i,j)), value_index_matrix(i,j));
            
            offers_robber_matrix(i,j) = offers_robber_arrays(value_index_matrix(i,j));
        end
    end
    offers_robber = [offers_robber_matrix(1,:), offers_robber_matrix(2,:), offers_robber_matrix(3,:)];
    cost_robber = [cost_robber_matrix(1,:), cost_robber_matrix(2,:), cost_robber_matrix(3,:)];
    value_noAct_robber= zeros(1,length(cost_robber));
    
    
    cost_type_value_factory = zeros(length(cost_types), length(value_index));
    for i= 1:length(value_index)
        temp =  cost_types(randperm(length(cost_types)));
        cost_type_value_factory(:,i) = temp;
    end
    
    offers_factory_matrix = zeros(length(cost_types), length(value_index));
    cost_factory_matrix = zeros(length(cost_types), length(value_index));
    for j = 1:length(value_index)
        for i = 1:length(cost_types)
            cost_factory_matrix(i,j) = cost_factory_arrays(cost_type_value_factory(i,value_index_matrix(i,j)), value_index_matrix(i,j));
            
            offers_factory_matrix(i,j) = offers_factory_arrays(value_index_matrix(i,j));
        end
    end
    
    offers_factory = [offers_factory_matrix(1,:), offers_factory_matrix(2,:), offers_factory_matrix(3,:)];
    cost_factory = [cost_factory_matrix(1,:), cost_factory_matrix(2,:), cost_factory_matrix(3,:)];
    value_noAct_factory = -offers_factory;
    
    
    probs_r = probs(randperm(length(probs)));
    probs_fa = probs(randperm(length(probs)));
    
    task = randperm(4);
    for i = 1:(length(N_trial_per_stim)-1)
        task = cat(2,task, randperm(4));
    end
    
    winprob_r = zeros(length(offers_robber), 1);
    winprob_fa = zeros(length(offers_factory), 1);

    t = 1;
    for w = 1:length(probs)
        for j = 1:N_trial_per_stim(w)
            winprob_r(t)  = probs_r(w);
            winprob_fa(t) = probs_fa(w);
            t = t + 1;
        end
    end
    
    if rand > 0.5 %randomize order of robber and factory task
        tasks = [ones(60, 1), 2*ones(60,1)];
        offers = [offers_robber, offers_factory];
        costs = [cost_robber, cost_factory];
        noActValues = [value_noAct_robber, value_noAct_factory];
        winprobs = [winprob_r, winprob_fa];
    else
        tasks = [2*ones(60, 1), ones(60,1)];
        offers = [offers_factory, offers_robber];
        costs = [cost_factory, cost_robber];
        noActValues = [value_noAct_factory, value_noAct_robber];
        winprobs = [winprob_fa, winprob_r];
    end

    stimTrialList = [N_trial_per_stim, N_trial_per_stim];
    
    [act, success, Q_A] = nameOfModel_mod_sim(parameters, offers, noActValues, costs, tasks, winprobs, stimTrialList);
    
    data(s,1) = {struct('act', act', 'success', success', 'task', tasks, 'offer', offers, 'cost', costs, 'noActValue', noActValues, 'stimTrialList', stimTrialList, 'parameters', parameters, 'winProb', winprobs, 'Q_act', Q_A, 'posAffect',posAffect)}
end
        
cd(WD)
save 'all_sim_data_1prior' data
