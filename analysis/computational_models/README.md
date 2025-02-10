# Computational models 

Author: Tobias Granwald (orcid: 0009-0002-0208-6891)

The current folder contains code to run the computational models associated with the manuscript "Bayesian priors in active avoidance" (Granwald et al., 2024). 

The current folder includes the following folders:
- /HBI_factory1 (analysis for the first block of the factory task, session 1; 4 files)
- /HBI_factory2 (analysis for the second block of the factory task, session 1; 4 files)
- /HBI_full1 (analysis for the first block of both the robber task and factory task, session 1; 4 files)
- /HBI_full2 (analysis for the second block of both the robber task and factory task, session 1; 4 files)
- /HBI_robber1 (analysis for the first block of the robber task, session 1; 4 files)
- /HBI_robber2 (analysis for the second block of the robber task, session 1; 4 files)
- /HBI_testRetest (analysis to extract the parameters for the test-retest reliability, participants that participated in the follow-up has been selected and fitted separately in first block (/Full1; 3 files) and second block (/Full2; 3 files) as well as the follow-up (/Full_FU; 4 files))
- /Models (contains the code for the computational models fitted to the factory task (/factory_only/models; 8 files), robber task (/robber_only/models; 7 files), and across both tasks (/full/models; 2 files))


To run the computational models you need to follow these steps:
1) Run the script "extractDataForHBI.Rmd" in the main analysis folder to extract the relevant data for each task and block. 
2) Download the Computational and Brain/Behavior Modeling toolbox (CBM; Piray et al., 2019) at https://github.com/payampiray/cbm 
3) Update the "run_HBI.m" and "run_lapApprox" scripts so "PATH_TO_CBM_TOOLBOX" instead gives the path to the cbm toolbox. 
4) Update the "run_HBI.m" and "run_lapApprox" scripts so "PATH_TO_COMPUTATIONAL_MODELS" instead gives the path to the "Models" folder.

Next to run the analysis for each block, task, and combination of tasks run the following scripts in MATLAB:
1) Run "prep_data_hbi.m"
2) Run "run_lapApprox.m"
3) Run "run_HBI.m"
4) (Run "extract_pseudoR.m")


## References
Granwald, T., Dayan, P., Lengyel, M., & Guitart-Masip, M. (2024, August 8). Bayesian Priors in Active Avoidance. https://doi.org/10.31234/osf.io/2zcjh

Piray P., Dezfouli A., Heskes T., Frank MJ., & Daw ND. (2019). Hierarchical Bayesian inference for concurrent model fitting and comparison for group studies. PLoS Computational Biology, 15(6): e1007043. https://doi.org/10.1371/journal.pcbi.1007043 