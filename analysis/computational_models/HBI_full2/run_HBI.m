%% Setup
clear all;
WD = pwd;

%add CMB to matlab path
addpath(fullfile('PATH_TO_CBM_TOOLBOX/cbm-master', 'codes'));

%return to working directory
cd(WD)

%copy models
copyfile 'PATH_TO_COMPUTATIONAL_MODELS/Models/full/models/*' models/

%load data
fdata = load('all_data_full2.mat');
data = fdata.data;


%% Hierarchical Bayesian inference
%% 1-Prior Model + Bias in Factory Task vs 2-Priors Model + Bias in Factory Task

%Get models
copyfile models/prior1_MS_2invT_F_actBias_mod_HBI.m 
copyfile models/prior2_MS_2invT_F_actBias_mod_HBI.m 

%Set up HBI
models = {@prior1_MS_2invT_F_actBias_mod_HBI, @prior2_MS_2invT_F_actBias_mod_HBI};
fcb_maps = {'lap_prior1MSMod2InvTFActBias.mat','lap_prior2MSMod2InvTFActBias.mat'};
fname_hbi = 'hbi_1prior_2prior.mat';

%Run
cbm_hbi(data, models, fcb_maps, fname_hbi);

%Run null model for PXP
cbm_hbi_null(data, fname_hbi)

%Show results
fname_hbi = load('hbi_1prior_2prior.mat');
cbm = fname_hbi.cbm;
cbm.output
cbm.output.model_frequency
cbm.output.protected_exceedance_prob


%% Set up for simulations
%% 1 Prior Model

%Get model
copyfile models/prior1_MS_2invT_F_actBias_mod_HBI.m 

%Set up HBI
models = {@prior1_MS_2invT_F_actBias_mod_HBI};
fcb_maps = {'lap_prior1MSMod2InvTFActBias.mat'};
fname_hbi = 'hbi_fitSim_1prior_full2.mat';

%Run
cbm_hbi(data, models, fcb_maps, fname_hbi);


%% 2 Prior Model

%Get model
copyfile models/prior2_MS_2invT_F_actBias_mod_HBI.m 

%Set up HBI
models = {@prior2_MS_2invT_F_actBias_mod_HBI};
fcb_maps = {'lap_prior2MSMod2InvTFActBias.mat'};
fname_hbi = 'hbi_fitSim_2prior_full2.mat';

%Run
cbm_hbi(data, models, fcb_maps, fname_hbi);