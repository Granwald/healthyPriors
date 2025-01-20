function [] = prep_data_hbi()
WD = pwd;
cd (strcat(WD,'/dataRaw'))

load act.mat
load success.mat
load offers.mat
load task.mat
load costs.mat
load noActValues.mat
load winProbs.mat
load stimTrialList.mat

for s=1:size(act,1)
    A = []; R = []; T = []; O = []; C = []; NA = []; STL = []; WP = [];
    
    A = double(act(s,:));
    R = success(s,:);
    T = task(s,:);
    O = double(offers(s,:));
    C = double(costs(s,:));
    NA = double(noActValues(s,:));
    STL = double(stimTrialList(s,:));
    WP = winProbs(s,:);
    
    A(A==0) = 2;
    T = T.';
    O = O.';
    C = C.';
    NA = NA.';
    STL = STL.';
    
    data(s,1) = {struct('act', A', 'success', R', 'task', T, 'offer', O, 'cost', C, 'noActValue', NA, 'stimTrialList', STL, 'winProb', WP)}
end

cd(WD)
save 'all_data_full1' data
end
