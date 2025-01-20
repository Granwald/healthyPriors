%% Setup
clear all;
WD = pwd;

%add CMB toolbox to matlab path
addpath(fullfile('PATH_TO_CBM_TOOLBOX/cbm-master', 'codes'));

cd(WD)

%copy models
copyfile 'PATH_TO_COMPUTATIONAL_MODELS/Models/factory_only/models/*' models/

%load data
fdata = load('all_data_F1.mat');
data = fdata.data;


%% Set priors
v = 6.25; %variance for priors for the laplace approx

prior_softMaxMod = struct('mean', zeros(1,1), 'variance',v);
prior_winLoseMod = struct('mean', zeros(3,1), 'variance',v);
prior_staticMod = struct('mean', zeros(2,1), 'variance', v);
prior_bayesMod = struct('mean', zeros(3,1), 'variance',v);

prior_staticMod2ActionBias = struct('mean', zeros(3,1), 'variance', v);

%% Select output names for each model
fname_softMaxMod = 'lap_softMaxMod';
fname_winLoseMod = 'lap_winLoseMod.mat';
fname_staticMod = 'lap_staticMod.mat';
fname_bayesMod = 'lap_bayesMod.mat';

fname_staticMod2ActionBias = 'lap_staticMod2ActionBias.mat';


%% Clustering Laplace approximations
%% Softmax Model
mkdir('lap_softMaxMod_subjects');

fname_subjs = cell(length(data), 1);
for n = 1:length(data)
   fname_subjs{n} = fullfile('lap_softMaxMod_subjects',['lap_softMaxMod_' num2str(n) '.mat']); 
end

%get model
copyfile 'models/softmax_mod_HBI.m'

parfor(n=1:length(data))
   fname_i = fname_subjs{n};
   data_subjs = data(n);
   
   cbm_lap(data_subjs, @softmax_mod_HBI, prior_softMaxMod, fname_i);
end

cbm_lap_aggregate(fname_subjs, fname_softMaxMod);

% clean up
delete 'softmax_mod_HBI.m'


%% Win-stay Lose-shift Model
mkdir('lap_winLoseMod_subjects');

fname_subjs = cell(length(data), 1);
for n = 1:length(data)
   fname_subjs{n} = fullfile('lap_winLoseMod_subjects',['lap_winLoseMod_' num2str(n) '.mat']); 
end

%get the model
copyfile 'models/winStayLoseShift_mod_HBI.m'

parfor(n=1:length(data))
   fname_i = fname_subjs{n};
   data_subjs = data(n);
   
   cbm_lap(data_subjs, @winStayLoseShift_mod_HBI, prior_winLoseMod, fname_i);
end

cbm_lap_aggregate(fname_subjs, fname_winLoseMod);

%clean up
delete 'winStayLoseShift_mod_HBI.m'


%% Static Probability Model

mkdir('lap_staticMod_subjects');

fname_subjs = cell(length(data), 1);
for n = 1:length(data)
   fname_subjs{n} = fullfile('lap_staticMod_subjects',['lap_staticMod_' num2str(n) '.mat']); 
end

%get the model
copyfile 'models/staticProb_mod_HBI.m'

parfor(n=1:length(data))
   fname_i = fname_subjs{n};
   data_subjs = data(n);
   
   cbm_lap(data_subjs, @staticProb_mod_HBI, prior_staticMod, fname_i);
end

cbm_lap_aggregate(fname_subjs, fname_staticMod);

%clean up
delete 'staticProb_mod_HBI.m'


%% Bayesian Learner Model
mkdir('lap_bayesMod_subjects');

fname_subjs = cell(length(data), 1);
for n = 1:length(data)
   fname_subjs{n} = fullfile('lap_bayesMod_subjects',['lap_bayesMod_' num2str(n) '.mat']); 
end

%get the model
copyfile 'models/bayes_mod_HBI.m'

parfor(n=1:length(data))
   fname_i = fname_subjs{n};
   data_subjs = data(n);
   
   cbm_lap(data_subjs, @bayes_mod_HBI, prior_bayesMod, fname_i);
end

cbm_lap_aggregate(fname_subjs, fname_bayesMod);


%clean up
delete 'bayes_mod_HBI.m'


%% Static Probability + Bias Model

mkdir('lap_staticMod2ActionBias_subjects');

fname_subjs = cell(length(data), 1);
for n = 1:length(data)
   fname_subjs{n} = fullfile('lap_staticMod2ActionBias_subjects',['lap_staticMod2ActionBias_' num2str(n) '.mat']); 
end

%get the model
copyfile 'models/staticProb_2Bias_mod_HBI.m'

parfor(n=1:length(data))
   fname_i = fname_subjs{n};
   data_subjs = data(n);
   
   cbm_lap(data_subjs, @staticProb_2Bias_mod_HBI, prior_staticMod2ActionBias, fname_i);
end

cbm_lap_aggregate(fname_subjs, fname_staticMod2ActionBias);


%clean up
delete 'staticProb_2Bias_mod_HBI.m'

%% Clean up

mkdir 'lap_subjectLevel'

movefile lap_softMaxMod_subjects/ lap_subjectLevel
movefile lap_winLoseMod_subjects/ lap_subjectLevel
movefile lap_staticMod_subjects/ lap_subjectLevel
movefile lap_bayesMod_subjects/ lap_subjectLevel
movefile lap_staticMod2ActionBias_subjects/ lap_subjectLevel
