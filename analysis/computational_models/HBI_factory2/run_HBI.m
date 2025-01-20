%% Setup
clear all;
WD = pwd;

%add CMB toolbox to matlab path
addpath(fullfile('PATH_TO_CBM_TOOLBOX/cbm-master', 'codes'));

cd(WD)

%copy models
copyfile 'PATH_TO_COMPUTATIONAL_MODELS/Models/factory_only/models/*' models/

%load data
fdata = load('all_data_F2.mat');

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

%Run null model for PXP
cbm_hbi_null(data, fname_hbi)

%Show results
fname_hbi = load(fname_hbi);
cbm = fname_hbi.cbm;
cbm.output
cbm.output.model_frequency
cbm.output.protected_exceedance_prob

%Clean up
delete softmax_mod_HBI.m
delete winStayLoseShift_mod_HBI.m
delete bayes_mod_HBI.m 
delete staticProb_mod_HBI.m


%% Fit 2, Continous Updating

%Get models
copyfile models/bayes_mod_HBI.m  
copyfile models/bayes_contLearn_mod_HBI.m

%Setup HBI
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


%Clean up
delete bayes_mod_HBI.m  
delete bayes_contLearn_mod_HBI.m


%% Fit 3, Bidirectional Bias vs No Act Bias

%Get models
copyfile models/bayes_mod_HBI.m  
copyfile models/bayes_2Bias_mod_HBI.m

%Set up HBI
models = {@bayes_mod_HBI, @bayes_2Bias_mod_HBI};
fcb_maps = {'lap_bayesMod.mat','lap_bayesMod2ActionBias.mat'};
fname_hbi = 'hbi_fit3_bayes_2ActBias.mat';

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

%Clean up
delete bayes_mod_HBI.m  
delete bayes_2Bias_mod_HBI.m


%% Setup for simulations
%% SoftMax Model

%Get model
copyfile models/softmax_mod_HBI.m

%Set up HBI
models = {@softmax_mod_HBI};
fcb_maps = {'lap_softMaxMod.mat'};
fname_hbi = 'hbi_fitSim_softMax_factory2.mat';

%Run
cbm_hbi(data, models, fcb_maps, fname_hbi);

%Clean up
delete softmax_mod_HBI.m


%% Win-stay Lose-shift Model

%Get model
copyfile models/winStayLoseShift_mod_HBI.m

%Set up HBI
models = {@winStayLoseShift_mod_HBI};
fcb_maps = {'lap_winLoseMod.mat'};
fname_hbi = 'hbi_fitSim_winStay_factory2.mat';

%Run
cbm_hbi(data, models, fcb_maps, fname_hbi);

%Clean up
delete winStayLoseShift_mod_HBI.m


%% Static Probability Model 

%Get model
copyfile models/staticProb_mod_HBI.m

%Set up HBI
models = {@staticProb_mod_HBI};
fcb_maps = {'lap_staticMod.mat'};
fname_hbi = 'hbi_fitSim_nonBayes_factory2.mat';

%Run
cbm_hbi(data, models, fcb_maps, fname_hbi);

%Clean up
delete staticProb_mod_HBI.m

%% Bayesian Learner Model

%Get model
copyfile models/bayes_mod_HBI.m

%Set up HBI
models = {@bayes_mod_HBI};
fcb_maps = {'lap_bayesMod.mat'};
fname_hbi = 'hbi_fitSim_bayes_factory2.mat';

%Run
cbm_hbi(data, models, fcb_maps, fname_hbi);

%Clean up
delete bayes_mod_HBI.m


%% Bayesian Learner + Continous Updating Model

%Get model
copyfile models/bayes_contLearn_mod_HBI.m

%Set up HBI
models = {@bayes_contLearn_mod_HBI};
fcb_maps = {'lap_bayesModContLearn.mat'};
fname_hbi = 'hbi_fitSim_bayesContLearn_factory2.mat';

%Run
cbm_hbi(data, models, fcb_maps, fname_hbi);

%Clean up
delete bayes_contLearn_mod_HBI.m


%% Bayesian Learner + Action Bias Model

%Get model
copyfile models/bayes_2Bias_mod_HBI.m

%Set up HBI
models = {@bayes_2Bias_mod_HBI};
fcb_maps = {'lap_bayesMod2ActionBias.mat'};
fname_hbi = 'hbi_fitSim_bayes2ActBias_factory2.mat';

%Run
cbm_hbi(data, models, fcb_maps, fname_hbi);

%Clean up
delete bayes_2Bias_mod_HBI.m

