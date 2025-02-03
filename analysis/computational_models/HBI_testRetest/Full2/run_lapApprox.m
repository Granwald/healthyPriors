%% Setup
clear all;
WD = pwd;

%add CBM to matlab path
addpath(fullfile('PATH_TO_CBM_TOOLBOX/cbm-master', 'codes'));

%return to working directory
cd(WD)

copyfile 'PATH_TO_COMPUTATIONAL_MODELS/Models/full/models/*' models/

%load data
fdata = load('all_data_full2.mat');

data = fdata.data;


%% Set priors
v = 6.25; %variance for priors for the laplace aprox

prior_prior1MSMod2InvTFActBias = struct('mean', zeros(5,1), 'variance',v);
prior_prior2MSMod2InvTFActBias = struct('mean', zeros(7,1), 'variance',v);

%% Select output names for each model
fname_prior1MSMod2InvTFActBias = 'lap_prior1MSMod2InvTFActBias.mat';
fname_prior2MSMod2InvTFActBias = 'lap_prior2MSMod2InvTFActBias.mat';


%% Clustering Laplace approximations
%% 1 Prior Model

mkdir('lap_prior1MSMod2InvTFActBias_subjects');

fname_subjs = cell(length(data), 1);
for n = 1:length(data)
   fname_subjs{n} = fullfile('lap_prior1MSMod2InvTFActBias_subjects',['lap_prior1MSMod2InvTFActBias_' num2str(n) '.mat']); 
end

%get the model
copyfile 'models/prior1_MS_2invT_F_actBias_mod_HBI.m'

parfor(n=1:length(data))
   fname_i = fname_subjs{n};
   data_subjs = data(n);
   
   cbm_lap(data_subjs, @prior1_MS_2invT_F_actBias_mod_HBI, prior_prior1MSMod2InvTFActBias, fname_i);
end

cbm_lap_aggregate(fname_subjs, fname_prior1MSMod2InvTFActBias);

%clean up
delete 'prior1_MS_2invT_F_actBias_mod_HBI.m'


%% 2 Prior

mkdir('lap_prior2MSMod2InvTFActBias_subjects');

fname_subjs = cell(length(data), 1);
for n = 1:length(data)
   fname_subjs{n} = fullfile('lap_prior2MSMod2InvTFActBias_subjects',['lap_prior2MSMod2InvTFActBias_' num2str(n) '.mat']); 
end

%get the model
copyfile 'models/prior2_MS_2invT_F_actBias_mod_HBI.m'

parfor(n=1:length(data))
   fname_i = fname_subjs{n};
   data_subjs = data(n);
   
   cbm_lap(data_subjs, @prior2_MS_2invT_F_actBias_mod_HBI, prior_prior2MSMod2InvTFActBias, fname_i);
end

cbm_lap_aggregate(fname_subjs, fname_prior2MSMod2InvTFActBias);

%clean up
delete 'prior2_MS_2invT_F_actBias_mod_HBI.m'