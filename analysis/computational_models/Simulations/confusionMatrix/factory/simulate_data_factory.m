%% Setup
clear all
WD = pwd;

fname_hbi = load('PATH_TO_FITSIM_OF_CURRENT_MODEL.mat');% example: /hbi_fitSim_bayes_factory1.mat'

%% Design matrix
%task general
value_index = (1:20);
cost_types = (1:3);
N_trial_per_stim_array1 = [4 4 4 5 5 8];
N_trial_per_stim_array2 = [4 4 4 5 6 7];

success_rates = repmat(linspace(0,1,14), 1,1);
success_rates = success_rates(2:13);
probs = success_rates(randperm(numel(success_rates)));


%Factory task
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

    
    value_index_matrix = [value_index(randperm(length(value_index))); value_index(randperm(length(value_index))); value_index(randperm(length(value_index)))];
  
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
    costs_factory = [cost_factory_matrix(1,:), cost_factory_matrix(2,:), cost_factory_matrix(3,:)];
    value_noAct_factory = -offers_factory;
    
    probs_fa = probs(randperm(length(probs)));
    
    winprobs_fa = zeros(length(offers_factory), 1);
    t = 1;
    for w = 1:length(probs)
        for j = 1:N_trial_per_stim(w)
            winprobs_fa(t)  = probs_fa(w);
            t = t + 1;
        end
    end
    
    [act, success, Q_Act] = nameOfModel_factory_mod_HBI_sim(parameters, offers_factory, costs_factory, winprobs_fa, N_trial_per_stim);
    
    data(s,1) = {struct('act', act', 'success', success', 'offer', offers_factory, 'cost', costs_factory, 'noActValue', value_noAct_factory, 'stimTrialList', N_trial_per_stim, 'parameters', parameters, 'winProb', winprobs_fa, 'Q_act', Q_Act)}
end
        
cd(WD)
save 'all_simBayes_F1_data' data

