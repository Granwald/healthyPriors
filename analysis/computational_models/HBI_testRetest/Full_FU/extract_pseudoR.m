clear all

%load data
fdata = load('all_data_full_FU.mat');

%load model fit 
cbm = load('hbi_fitSim_1prior_full_FU.mat');

params = cbm.cbm.output.parameters{1};

copyfile models/prior1_MS_2invT_F_actBias_mod_HBI.m
logLike = zeros(length(fdata.data), 1);

for s = 1:length(fdata.data)
    logLike(s,:) = prior1_MS_2invT_F_actBias_mod_HBI(params(s,:),fdata.data{s});
end

R_chance = length(fdata.data{1}.act)*log(.5);

pseudoR2 = zeros(length(fdata.data), 1);

for l = 1:length(logLike)
    pseudoR2(l,:) = 1-(logLike(l,1)/R_chance);
end

%quantile(logLike, .25)
%quantile(logLike, .5)
%quantile(logLike, .75)

% reported in the manuscript
quantile(pseudoR2, .25)
quantile(pseudoR2, .5)
quantile(pseudoR2, .75)