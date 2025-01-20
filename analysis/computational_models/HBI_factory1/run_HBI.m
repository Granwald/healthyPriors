%% Setup
clear all;
WD = pwd;
%add CMB toolbox to matlab path
addpath(fullfile('PATH_TO_CBM_TOOLBOX/cbm-master', 'codes'));

%go back to dir
cd(WD)

%copy models
copyfile 'PATH_TO_COMPUTATIONAL_MODELS/Models/factory_only/models/*' models/

%load data
fdata = load('all_data_F1.mat');

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


%% Fit 2, Bidirectional Bias vs No Act Bias

%Get models
copyfile models/staticProb_mod_HBI.m
copyfile models/staticProb_2Bias_mod_HBI.m

%Set up HBI
models = {@staticProb_mod_HBI, @staticProb_2Bias_mod_HBI};
fcb_maps = {'lap_staticMod.mat', 'lap_staticMod2ActionBias.mat'};
fname_hbi = 'hbi_fit2_staticProb_2ActBias.mat';

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
delete staticProb_mod_HBI.m
delete staticProb_2Bias_mod_HBI.m


%% Set Up for Simulations
%% Softmax Only Model

%Get model
copyfile models/softmax_mod_HBI.m

%Set up HBI
models = {@softmax_mod_HBI};
fcb_maps = {'lap_softMaxMod.mat'};
fname_hbi = 'hbi_fitSim_softMax_factory1.mat';

%Run
cbm_hbi(data, models, fcb_maps, fname_hbi);

%Clean up
delete softmax_mod_HBI.m


%% Win-stay Lose-shift model

%Get model
copyfile models/winStayLoseShift_mod_HBI.m

%Set up HBI
models = {@winStayLoseShift_mod_HBI};
fcb_maps = {'lap_winLoseMod.mat'};
fname_hbi = 'hbi_fitSim_winStay_factory1.mat';

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
fname_hbi = 'hbi_fitSim_static_factory1.mat';

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
fname_hbi = 'hbi_fitSim_bayes_factory1.mat';

%Run
cbm_hbi(data, models, fcb_maps, fname_hbi);

%Clean up
delete bayes_mod_HBI.m


%% Static Probability + Actbias Model

%Get model
copyfile models/staticProb_2Bias_mod_HBI.m

%Set up HBI
models = {@staticProb_2Bias_mod_HBI};
fcb_maps = {'lap_staticMod2ActionBias.mat'};
fname_hbi = 'hbi_fitsim_static2ActBias_factory1.mat';

%Run
cbm_hbi(data, models, fcb_maps, fname_hbi);

%Clean up
delete staticProb_2Bias_mod_HBI.m

