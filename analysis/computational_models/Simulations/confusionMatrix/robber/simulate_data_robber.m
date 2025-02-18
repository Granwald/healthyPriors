%% Setup
clear all;
WD = pwd;

fname_hbi = load('PATH_TO_FITSIM_OF_CURRENT_MODEL.mat');% example: /hbi_fitSim_bayes_robber1.mat'

%% Design matrix
%task general
value_index = (1:20);
cost_types = (1:3);

N_trial_per_stim_array1 = [4 4 4 5 5 8];
N_trial_per_stim_array2 = [4 4 4 5 6 7];

success_rates = repmat(linspace(0,1,14), 1,1);
success_rates = success_rates(2:13);
probs = success_rates(randperm(numel(success_rates)));

%robber task
C_F=50; % cost of fighting.
set_C_F=[75,40,10];

offers_robber=50./[2 1 0.95:-0.05:0.1];

cost_robber_arrays = round([0.*offers_robber+set_C_F(1) ; 0.05.*offers_robber+set_C_F(2) ; 0.15.*offers_robber+set_C_F(3)]);
offers_robber_arrays= round(offers_robber);

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
    costs_robber = [cost_robber_matrix(1,:), cost_robber_matrix(2,:), cost_robber_matrix(3,:)];
    value_noAct_robber= zeros(1,length(costs_robber));
    
    probs_r = probs(randperm(length(probs)));
    
    winprobs_r = zeros(length(offers_robber), 1);
    
    t = 1;
    for w = 1:length(probs)
        for j = 1:N_trial_per_stim(w)
            winprobs_r(t)  = probs_r(w);
            t = t + 1;
        end
    end
 
    [act, success, Q_A] = nameOfModel_robber_mod_HBI_sim(parameters, offers_robber, value_noAct_robber, costs_robber, winprobs_r, N_trial_per_stim);
    
    data(s,1) = {struct('act', act', 'success', success', 'offer', offers_robber, 'cost', costs_robber, 'noActValue', value_noAct_robber, 'stimTrialList', N_trial_per_stim, 'parameters', parameters, 'winProb', winprobs_r, 'Q_act', Q_A)}
end
        
cd(WD)
save 'all_sim_data_nonBayes' data

