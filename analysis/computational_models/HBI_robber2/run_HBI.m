%% Setup
clear all;
WD = pwd;

%add CMB to matlab path
addpath(fullfile('PATH_TO_CBM_TOOLBOX/cbm-master', 'codes'));

%return to working directory
cd(WD)

%copy models
copyfile 'PATH_TO_COMPUTATIONAL_MODELS/Models/robber_only/models/*' models/

%copyfile laplace/*

%load data
fdata = load('all_data_R2.mat');

data = fdata.data;


%% Hierarchical Bayesian inference
%% Fit 1, Basic models
 
%Get models
copyfile models/softmax_mod_HBI.m
copyfile models/winStayLoseShift_mod_HBI.m
copyfile models/bayes_mod_HBI.m 
copyfile models/staticProb_mod_HBI.m

%Set up HBI
models = {@softmax_mod_HBI, @winStayLoseShift_mod_HBI, @bayes_mod_HBI, @staticProb_mod_HBI};
fcb_maps = {'lap_softMaxMod','lap_winLoseMod.mat', 'lap_bayesMod.mat','lap_staticMod.mat'};
fname_hbi = 'hbi_fit1_softmax_winLose_bayes_static.mat';

%Run
cbm_hbi(data, models, fcb_maps, fname_hbi);

%Run null model to get PXP
cbm_hbi_null(data, fname_hbi)

%Show results
fname_hbi = load(fname_hbi);
cbm = fname_hbi.cbm;
cbm.output
cbm.output.model_frequency
cbm.output.protected_exceedance_prob


%% Fit 2, between stim learning

%Get models
copyfile models/bayes_mod_HBI.m  
copyfile models/bayes_contLearn_mod_HBI.m

%Set up HBI
models = {@bayes_mod_HBI, @bayes_contLearn_mod_HBI};
fcb_maps = {'lap_bayesMod.mat','lap_bayesModContLearn.mat'};
fname_hbi = 'hbi_fit2_bayes_betweenStimLearn.mat';

%Run
cbm_hbi(data, models, fcb_maps, fname_hbi);

%Run null model for PXP
cbm_hbi_null(data, fname_hbi)

%Show results
fname_hbi = load(fname_hbi);
cbm = fname_hbi.cbm;
cbm.output
cbm.output.model_frequency
cbm.output.protected_exceedance_prob


%% Fit 3, Bidirectional bias vs No Bias

%Get models
copyfile models/bayes_mod_HBI.m  
copyfile models/bayes_2Bias_mod_HBI.m

%Set up HBI
models = {@bayes_mod_HBI, @bayes_2Bias_mod_HBI};
fcb_maps = {'lap_bayesMod.mat','lap_bayesMod2ActionBias.mat'};
fname_hbi = 'hbi_fit3_bayesMS_2ActBias.mat';

%Run
cbm_hbi(data, models, fcb_maps, fname_hbi);

%Run null model to get PXP
cbm_hbi_null(data, fname_hbi)

%Show results
fname_hbi = load(fname_hbi);
cbm = fname_hbi.cbm;
cbm.output
cbm.output.model_frequency
cbm.output.protected_exceedance_prob


%% Set up for simulations
%% Softmax Model

%Get model
copyfile models/softmax_mod_HBI.m

%Set up HBI
models = {@softmax_mod_HBI};
fcb_maps = {'lap_softMaxMod.mat'};
fname_hbi = 'hbi_fitSim_softMax_robber2.mat';

%Run
cbm_hbi(data, models, fcb_maps, fname_hbi);

delete softmax_mod_HBI.m


%% Win-stay Lose-shift Model

%Get model
copyfile models/winStayLoseShift_mod_HBI.m

%Set up HBI
models = {@winStayLoseShift_mod_HBI};
fcb_maps = {'lap_winLoseMod.mat'};
fname_hbi = 'hbi_fitSim_winStay_robber2.mat';

%Run
cbm_hbi(data, models, fcb_maps, fname_hbi);

delete winStayLoseShift_mod_HBI.m


%% Bayesian Learner Model

%Get model
copyfile models/bayes_mod_HBI.m

%Set up HBI
models = {@bayes_mod_HBI};
fcb_maps = {'lap_bayesMod.mat'};
fname_hbi = 'hbi_fitSim_bayes_robber2.mat';

%Run
cbm_hbi(data, models, fcb_maps, fname_hbi);

delete bayes_mod_HBI.m


%% Static Probability Model

%Get model
copyfile models/staticProb_mod_HBI.m

%Set up HBI
models = {@staticProb_mod_HBI};
fcb_maps = {'lap_staticMod.mat'};
fname_hbi = 'hbi_fitSim_static_robber2.mat';

%Run
cbm_hbi(data, models, fcb_maps, fname_hbi);

delete staticProb_mod_HBI.m


%% between stim learning

%Get model
copyfile models/bayes_contLearn_mod_HBI.m

models = {@bayes_contLearn_mod_HBI};
fcb_maps = {'lap_bayesModContLearn.mat'};
fname_hbi = 'hbi_fitSim_bayesContLearn_robber2.mat';

%Run
cbm_hbi(data, models, fcb_maps, fname_hbi);

delete bayes_contLearn_mod_HBI.m


%% Bidirectional Lapse

%Get model
copyfile models/bayes_2Bias_mod_HBI.m

models = {@bayes_2Bias_mod_HBI};
fcb_maps = {'lap_bayesMod2ActionBias.mat'};
fname_hbi = 'hbi_fitSim_bayes2Lapse_robber2.mat';

%Run
cbm_hbi(data, models, fcb_maps, fname_hbi);

delete bayes_2Bias_mod_HBI.m

