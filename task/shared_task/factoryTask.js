/**
 * @file factoryTask.js
 * 
 * This script loads two functions that creates jsPsych timelines to run the Factory task.
 * The outputs of these functions provide the instructions for the task and a trial of the task.
 * This version of the task is available for public use. 
 * 
 * @author Tobias Granwald
 * @version 1.0.0
 * @date September 6, 2024
 * 
 * @license CC-By Attribution 4.0 International
 * 
 * - Dependencies: jsPsych v7.1.2, experimentStyleSheet.css
 * - How to run: load the script to a html file along with jsPsych and add the output of the function to the timeline.  
 * 
*/


function factoryTaskInfo(minValue, maxValue, minCost, maxCost, isFirstTime){
    /**
     * [Function for the complete timeline of the instructions provided before the start of a block of the factory task]
     * 
     * @minValue {number} maximum size of the offer
     * @maxValue {number} minimum size of the offer
     * @minCost {number} maximum size of the cost
     * @maxCost {number} minimum size of the cost
     * @isFirstTime {boolean} distinguish instructions for the first time or second time the task is performed
     * @returns {variable} jsPsych formatted timeline which is added to the general timeline
     */	

    let factoryTaskInfoVariableCost = {
        type:jsPsychHtmlKeyboardResponse,
        choices: ` `,
        data: {
            category: `instructions`,
        },
        timeline: [
            {
                stimulus: `<div class ='factoryInfoLeftBlock'></div>
                    <div class ='textDivGen'>
                        <p><b>The Factory Task</b> 
                        <br/><br/> 
                        In this game we ask you to imagine that you are the foreperson of a factory and are responsible for the maintenance of the machines. 
                        You discover that one of the machines in the factory is breaking down and you will try to minimize the losses. 
                        For each machine that breaks down you will incur debt. 
                        Some machines are more valuable and will result in larger costs if they break down whereas other machines are cheaper. 
                        In this scenario, as a machine is breaking down you have two options:
                        <br/>
                        1) Let the machine break<br/>
                        2) Try to repair the machine 
                        <br/>
                        If you let the machine break down, you will incur the debt associated with the cost of the machine. 
                        If you instead try to repair the machine, there is a cost for the repair but if you manage to repair the machine you will not lose that machine. 
                        However, the repair may not be successful, if that is the case you incur both the cost from the repair and the machine breaking down. 
                        <br/><br/>
                        Press the spacebar to continue</p>
                    </div>
                    <div class ='factoryInfoRightBlock'></div>`,
            },
            {
                stimulus:`<div class ='factoryInfoLeftBlock'></div>
                    <div class ='textDivGen'>
                        <p>You will be dealing with several versions of the same machine before another type of machine starts breaking down. 
                        You have a different probability of successfully repairing the machines depending on which type of machine is breaking down.
                        As such, to ensure that you lose the smallest amount of money, you need to consider how easy each machine has been to repair, and which break even if you try to repair them.
                        <br/><br/>
                        Press the spacebar to continue</p>
                    </div>
                    <div class ='factoryInfoRightBlock'></div>`,
            },
            {
                stimulus:`<div class ='factoryInfoLeftBlock'></div>
                    <div class ='textDivGen'>
                        <p>When you are playing the factory task the sides of your screen will be shown in brown, 
                        and the options shown will be either to repair the machine or let it break down. 
                        You will use the arrow keys to choose what you want to do. Please pay attention as the choices may change sides. 
                        In the middle of the screen, you will see an image of the machine that is breaking down and the amount of debt you will incur if the machine breaks.
                        You will also be able to see the cost of repairing under that option. 
                        The highest cost of a machine breaking is ${maxValue}, and the lowest is ${minValue}.
                        The costs associated with repairing range from ${minCost} to ${maxCost}.
                        <br/><br/>
                        Press the spacebar to see how the screen will look when you make the choices in the task.</p>
                    </div>
                    <div class ='factoryInfoRightBlock'></div>`,
            }
        ]
    };

    let factoryTaskInfoVariableCostSecondTime = {

        type:jsPsychHtmlKeyboardResponse,
        choices: ` `,
        data: {
            category: `instructions`,
        },
        timeline: [
            {
                stimulus: `<div class ='factoryInfoLeftBlock'></div>
                    <div class ='textDivGen'>
                        <p><b>The Factory Task</b> 
                        <br/><br/> 
                        You will now play the factory task again, we ask you to once again read through the instructions to make sure you remember the structure.
                        In this game we ask you to imagine that you are the foreperson of a factory and are responsible for the maintenance of the machines. 
                        You discover that one of the machines in the factory is breaking down and you will try to minimize the losses. 
                        For each machine that breaks down you will incur debt. 
                        Some machines are more valuable and will result in larger costs if they break down whereas other machines are cheaper. 
                        In this scenario, as a machine is breaking down you have two options:
                        <br/>
                        1) Let the machine break<br/>
                        2) Try to repair the machine 
                        <br/>
                        If you let the machine break down, you will incur the debt associated with the cost of the machine. 
                        If you instead try to repair the machine, there is a cost for the repair but if you manage to repair the machine you will not lose that machine. 
                        However, the repair may not be successful, if that is the case you incur both the cost from the repair and the machine breaking down. 
                        <br/><br/>
                        Press the spacebar to continue</p>
                    </div>
                    <div class ='factoryInfoRightBlock'></div>`,
            },
            {
                stimulus:`<div class ='factoryInfoLeftBlock'></div>
                    <div class ='textDivGen'>
                        <p>You will be dealing with several versions of the same machine before another type of machine starts breaking down. 
                        You have a different probability of successfully repairing the machines depending on which type of machine is breaking down.
                        As such, to ensure that you lose the smallest amount of money, you need to consider how easy each machine has been to repair, and which break even if you try to repair them.
                        <br/><br/>
                        Press the spacebar to continue</p>
                    </div>
                    <div class ='factoryInfoRightBlock'></div>`,
            },
            {
                stimulus:`<div class ='factoryInfoLeftBlock'></div>
                    <div class ='textDivGen'>
                        <p>When you are playing the factory task the sides of your screen will be shown in brown, 
                        and the options shown will be either to repair the machine or let it break down. 
                        You will use the arrow keys to choose what you want to do. Please pay attention as the choices may change sides. 
                        In the middle of the screen, you will see an image of the machine that is breaking down and the amount of debt you will incur if the machine breaks.
                        You will also be able to see the cost of repairing under that option. 
                        The highest cost of a machine breaking is ${maxValue}, and the lowest is ${minValue}.
                        The costs associated with repairing range from ${minCost} to ${maxCost}.
                        <br/><br/>
                        Press the spacebar to continue.</p>
                    </div>
                    <div class ='factoryInfoRightBlock'></div>`,
            }
        ]
    };

   
    if(isFirstTime){
        return factoryTaskInfoVariableCost
    } else {
        return factoryTaskInfoVariableCostSecondTime
    }
};


function factoryTrial(machine, offer, winProbAct, costRepair, noActValue, trial, ITI, IET, maxChoiceT, delibT, outcomeT, isPractice){
	/**
     * [Function for the complete timeline of a factory task trial, includes practice trial version]
     * 
     * @machine {string} The filename of the stimulus
     * @offer {number} The offer shown on in the trial
     * @winProbAct {number} The probability of success when active action is chosen
     * @costRepair {number} cost of the active action
     * @noActValue {number} value the passive action (-offer, in this case. Is only used to save in data)
     * @ITI {number} length of inter trial interval in ms
     * @IET {number} time the offer is shown before choice time starts in ms
     * @maxChoiceT {number} maximum response time before in ms
     * @delibT {number} time the post decision screen is shown in ms
     * @outcomeT {number} time outcome screen is shown in ms 
     * @isPractice {boolean} true or false, if the practice trial should be shown or not
     * @returns {variable} jsPsych formatted timeline for one trial
     */		 

    let machineImg = `<div class='choiceStimDiv'><img src ='${machine}' class='factoryChoiceStim'></div>`;
    let costMachinePrompt = `<div class='factoryChoiceIE'> <p><b>You may lose</p> <h1> ${offer} $$ </h1> </b></div>`;
    let leftBlock = `<div class='factoryLeftBlock'></div>`;
    let rightBlock = `<div class='factoryRightBlock'></div>`;
    let arrowLeft = `<div class='factoryLeftArrowDiv'> <img src='${arrowLeftImg}' class='leftArrowStim'> </div>`;
    let arrowRight = `<div class='factoryRightArrowDiv'> <img src='${arrowRightImg}' class='rightArrowStim'> </div>`;
    let costPromptL = `<div class='factoryCostPromptLeft'><h1>(cost - ${costRepair} $$)</h1></div>`;
    let costPromptR = `<div class='factoryCostPromptRight'><h1>(cost - ${costRepair} $$)</h1></div>`;
    let repairPromtL = `<div class='factoryLeftChoicePrompt'><h1>Repair</h1> <h1>the</h1> <h2>machine</h2></div>`;
    let repairPromtR = `<div class='factoryRightChoicePrompt'><h1>Repair</h1> <h1>the</h1> <h2>machine</h2></div>`;
    let noRepairPromtL = `<div class='factoryLeftChoicePrompt'><h1>Let</h1> <h1>it</h1> <h1>break</h1></div>`;
    let noRepairPromtR = `<div class='factoryRightChoicePrompt'><h1>Let</h1> <h1>it</h1> <h1>break</h1></div>`;
    let repairChoiceIsLeft = jsPsych.randomization.sampleBernoulli(0.5);


    let practiceFactoryTask = {
        timeline: [
            {
                type: jsPsychHtmlKeyboardResponse,
                stimulus:`${leftBlock}
                    <h1>+<h1> 
                    ${rightBlock}`,
                choices: `NO_KEYS`,
                trial_duration: ITI,
                data: {
                    category: `practiceITI`,
                    trial: trial,
                    task: `factory`,
                },
                on_finish: function(data){
                    let lastTrialData = jsPsych.data.get().last(2).values()[0];
                    data.robberTotPoints = lastTrialData.robberTotPoints;
                    data.factoryTotPoints = lastTrialData.factoryTotPoints;
                }
            },
            {
                type: jsPsychHtmlKeyboardResponse,
                stimulus: `${leftBlock}
                    <div class='IEStimDiv'>
                        <img src ='${factoryIEStim}' class='robberIEStim'>
                    </div>
                    <div class='IETxt'>
                        <p>A machine is breaking down, it will cost you</p> <h1>${offer} $$</h1> <p>if it breaks. <br/> Press the spacebar to show the choice screen.</p>  
                    </div> 
                    ${rightBlock}`,
                choices: ` `,
                data: {
                    category: `practiceIE`,
                    offers: offer,
                    cost: costRepair,
                    noActValue: noActValue,
                    stimNo: machine,
                    probWin: winProbAct,
                    trial: trial,
                    task: `factory`,
                },
                on_finish: function(data){
                    let lastTrialData = jsPsych.data.get().last(2).values()[0];
                    data.robberTotPoints = lastTrialData.robberTotPoints;
                    data.factoryTotPoints = lastTrialData.factoryTotPoints;
                }
            },
            {
                type: jsPsychHtmlKeyboardResponse,
                stimulus: function(){
                    if(repairChoiceIsLeft){
                        return `<div class='factoryLeftBlock'>
                                ${repairPromtL}
                                ${arrowLeft}
                                ${costPromptL}
                            </div>
                            ${machineImg}
                            <div class='taskInfoPrompt'> 
                                <p>Use the arrow-keys to choose what to do</p>
                            </div>
                            ${costMachinePrompt}
                            <div class='factoryRightBlock'> 
                                ${noRepairPromtR}
                                ${arrowRight}
                            </div>`;
                    } else {
                        return `<div class='factoryLeftBlock'> 
                                ${noRepairPromtL}
                                ${arrowLeft}
                            </div>
                            ${machineImg}
                            <div class='taskInfoPrompt'> 
                                <p>Use the arrow-keys to choose what to do</p>
                            </div>
                            ${costMachinePrompt}
                            <div class='factoryRightBlock'> 
                                ${repairPromtR}
                                ${arrowRight}
                                ${costPromptR}
                            </div>`;
                    }
                },
                choices: [`ArrowLeft`,`ArrowRight`],
                data:{
                    category:`practiceChoice`,
                    offers: offer,
                    cost: costRepair,
                    noActValue: noActValue,
                    stimNo: machine,
                    probWin: winProbAct,
                    trial: trial,
                    task: `factory`,
                },
                on_finish: function(data){
                    // check participant action and save data and select outcome
                    if((jsPsych.pluginAPI.compareKeys(data.response, `ArrowLeft`) & repairChoiceIsLeft) || (jsPsych.pluginAPI.compareKeys(data.response, `ArrowRight`) & !repairChoiceIsLeft)){
                        data.act = 1;
                        data.success = jsPsych.randomization.sampleBernoulli(winProbAct); //was action successful?
                    } else if(jsPsych.pluginAPI.compareKeys(data.response, null)){
                        data.act = 'NA';
                        data.success= 'NA';
                    } else{
                        data.act = 0;
                        data.success= 0;
                    }
                    let lastTrialData = jsPsych.data.get().last(2).values()[0];
                    data.robberTotPoints = lastTrialData.robberTotPoints;
                    data.factoryTotPoints = lastTrialData.factoryTotPoints;
                }
            },
            {
                type: jsPsychHtmlKeyboardResponse,
                stimulus: function(){
                    //Get the value from the previous trial 
                    //and assign the stim chosen based on that
                    let lastTrialIsRepair = jsPsych.data.get().last(1).values()[0].act;
                    if(lastTrialIsRepair & repairChoiceIsLeft){
                        return `<div class='factoryLeftBlock'>
                                ${repairPromtL}
                                ${arrowLeft}
                                ${costPromptL}
                            </div>
                            ${machineImg}
                            ${costMachinePrompt}
                            <div class='taskInfoPrompt'> 
                                <p>You chose to repair...</p>
                            </div>
                            <div class='factoryRightBlock'></div>`
                    } else if(lastTrialIsRepair & !repairChoiceIsLeft){
                        return `<div class='factoryLeftBlock'></div>
                            ${machineImg}
                            ${costMachinePrompt}
                            <div class='taskInfoPrompt'> 
                                <p>You chose to repair...</p>
                            </div>
                            <div class='factoryRightBlock'>
                                ${arrowRight}
                                ${repairPromtR}
                                ${costPromptR}
                            </div>`
                    } else if(!lastTrialIsRepair & repairChoiceIsLeft){
                        return `${leftBlock}
                            ${machineImg}
                            ${costMachinePrompt}
                            <div class='taskInfoPrompt'> 
                                <p>You chose not to repair...</p>
                            </div>
                            <div class='factoryRightBlock'>
                                ${arrowRight}
                                ${noRepairPromtR}
                            </div>`
                    } else {
                        return `<div class='factoryLeftBlock'>
                                ${noRepairPromtL}
                                ${arrowLeft}
                            </div>
                            ${machineImg}
                            ${costMachinePrompt}
                            <div class='taskInfoPrompt'> 
                                <p>You chose not to repair...</p>
                            </div>
                            ${rightBlock}`
                        }
                },
                choices: `NO_KEYS`,
                trial_duration: delibT,
                data: {
                    category: `practiceDelib`,
                    offers: offer,
                    cost: costRepair,
                    noActValue: noActValue,
                    stimNo: machine,
                    probWin: winProbAct,
                    trial: trial,
                    task: `factory`, 
                },
                on_finish: function(data){
                    let lastChoiceIs = jsPsych.data.get().last(2).values()[0];
                    data.act = lastChoiceIs.act;
                    data.success = lastChoiceIs.success;
                    data.robberTotPoints = lastChoiceIs.robberTotPoints;
                    data.factoryTotPoints = lastChoiceIs.factoryTotPoints;
                } 
            },
            {
                type:jsPsychHtmlKeyboardResponse,
                stimulus: function(){
                    let lastChoiceIs = jsPsych.data.get().last(1).values()[0];
                    if(lastChoiceIs.act==1){
                        if(lastChoiceIs.success==1){
                            return `${leftBlock}
                                ${machineImg}
                                <div class='taskInfoPrompt'> 
                                    <p class = 'outcomeP'>You <u><b>SUCCESSFULLY</u></b> repaired the machine.</p> <p>You only lost</p><h1><span class='winP'><b>${costRepair} $$</b></span></h1> <p> Press the spacebar to continue </p>
                                </div>
                                ${rightBlock}`
                        } else {
                            return `${leftBlock}
                                ${machineImg}
                                <div class='taskInfoPrompt'>
                                    <p class = 'outcomeP'>You <u><b>FAILED</u></b> in repairing the machine.</p> <p>You lost</p><h1><span class='lossP'><b>${offer + costRepair} $$</b></span></h1> <p> Press the spacebar to continue </p>
                                </div>
                                ${rightBlock}`
                        }
                    } else {
                        return `${leftBlock}
                            ${machineImg}
                            <div class='taskInfoPrompt'>
                                <p>You did not try to repair the machine.</p> <p>You lost</p><h1><span class='lossP'><b>${offer} $$</b></span></h1> <p> Press the spacebar to continue </p>
                            </div> 
                            ${rightBlock}`
                    }
                },
                choices: ` `,
                data:{
                    category: `practiceOutcome`,
                    offers: offer,
                    cost: costRepair,
                    noActValue: noActValue,
                    stimNo: machine,
                    probWin: winProbAct,
                    trial: trial, 
                    task: `factory`,
                },
                on_finish: function(data){
                    let lastChoiceIs = jsPsych.data.get().last(2).values()[0];
                    data.act = lastChoiceIs.act;
                    data.success = lastChoiceIs.success;
                    data.robberTotPoints = lastChoiceIs.robberTotPoints;
                    data.factoryTotPoints = lastChoiceIs.factoryTotPoints;
                }
            }
        ]
    };

    let factoryTask = {
        timeline: [
            {
                type: jsPsychHtmlKeyboardResponse,
                stimulus:`${leftBlock}
                    <h1>+<h1> 
                    ${rightBlock}`,
                choices: `NO_KEYS`,
                trial_duration: ITI,
                data: {
                    category: `ITI`,
                    trial: trial,
                    task: `factory`,
                },
                on_finish: function(data){
                    let lastTrialData = jsPsych.data.get().last(2).values()[0];
                    data.robberTotPoints = lastTrialData.robberTotPoints;
                    data.factoryTotPoints = lastTrialData.factoryTotPoints;
                }
            },
            {
                type: jsPsychHtmlKeyboardResponse,
                stimulus: `${leftBlock}
                    <div class='IEStimDiv'>
                        <img src ='${factoryIEStim}' class='robberIEStim'>
                    </div>
                    <div class='IETxt'>
                        <p>A machine is breaking down, it will cost you</p> <h1>${offer} $$</h1> <p>if it breaks</p>  
                    </div> 
                    ${rightBlock}`,
                choices: `NO_KEYS`,
                trial_duration: IET,
                data: {
                    category: `IE`,
                    offers: offer,
                    cost: costRepair,
                    noActValue: noActValue,
                    stimNo: machine,
                    probWin: winProbAct,
                    trial: trial,
                    task: `factory`,
                },
                on_finish: function(data){
                    let lastTrialData = jsPsych.data.get().last(2).values()[0];
                    data.robberTotPoints = lastTrialData.robberTotPoints;
                    data.factoryTotPoints = lastTrialData.factoryTotPoints;
                }
            },
            {
                type: jsPsychHtmlKeyboardResponse,
                stimulus: function(){
                    if(repairChoiceIsLeft){
                        return `<div class='factoryLeftBlock'>
                                ${repairPromtL}
                                ${arrowLeft}
                                ${costPromptL}
                            </div>
                            ${machineImg}
                            ${costMachinePrompt}
                            <div class='taskInfoPrompt'> 
                                <p>Use the arrow-keys to choose what to do</p>
                            </div>
                            <div class='factoryRightBlock'> 
                                ${noRepairPromtR}
                                ${arrowRight}
                            </div>`;
                    } else {
                        return `<div class='factoryLeftBlock'> 
                                ${noRepairPromtL}
                                ${arrowLeft}
                            </div>
                            ${machineImg}
                            ${costMachinePrompt}
                            <div class='taskInfoPrompt'> 
                                <p>Use the arrow-keys to choose what to do</p>
                            </div>
                            <div class='factoryRightBlock'> 
                                ${repairPromtR}
                                ${arrowRight}
                                ${costPromptR}
                            </div>`;
                    }
                },
                trial_duration: maxChoiceT,
                choices: [`ArrowLeft`,`ArrowRight`],
                data:{
                    category:`choice`,
                    offers: offer,
                    cost: costRepair,
                    noActValue: noActValue,
                    stimNo: machine,
                    probWin: winProbAct,
                    trial: trial,
                    task: `factory`,
                },
                on_finish: function(data){
                    if((jsPsych.pluginAPI.compareKeys(data.response, `ArrowLeft`) & repairChoiceIsLeft) || (jsPsych.pluginAPI.compareKeys(data.response, `ArrowRight`) & !repairChoiceIsLeft)){
                        data.act = 1;
                        data.success = jsPsych.randomization.sampleBernoulli(winProbAct);
                    } else if(jsPsych.pluginAPI.compareKeys(data.response, null)){
                        data.act = 'noResponse';
                        data.success= 'noResponse';
                    } else{
                        data.act = 0;
                        data.success= 0;
                    }
                    let lastTrialData = jsPsych.data.get().last(2).values()[0];
                    data.robberTotPoints = lastTrialData.robberTotPoints;
                    data.factoryTotPoints = lastTrialData.factoryTotPoints;
                }
            },
            {
                type: jsPsychHtmlKeyboardResponse,
                stimulus: function(){
                    //Get the value from the previous trial 
                    //and assign the stim chosen based on that
                    let lastTrialIsRepair = jsPsych.data.get().last(1).values()[0].act;
                    if(lastTrialIsRepair & repairChoiceIsLeft){
                        return `<div class='factoryLeftBlock'>
                                ${repairPromtL}
                                ${arrowLeft}
                                ${costPromptL}
                            </div>
                            ${machineImg}
                            ${costMachinePrompt}
                            <div class='taskInfoPrompt'> 
                                <p>You chose to repair...</p>
                            </div>
                            <div class='factoryRightBlock'></div>`
                    } else if(lastTrialIsRepair & !repairChoiceIsLeft){
                        return `<div class='factoryLeftBlock'></div>
                            ${machineImg}
                            ${costMachinePrompt}
                            <div class='taskInfoPrompt'> 
                                <p>You chose to repair...</p>
                            </div>
                            <div class='factoryRightBlock'>
                                ${arrowRight}
                                ${repairPromtR}
                                ${costPromptR}
                            </div>`
                    } else if(lastTrialIsRepair=='noResponse'){
                        return `${leftBlock}
                            <div class='missedTrialPrompt'> 
                                <p>You did not respond in time, please try again.</p>
                            </div>
                            ${rightBlock}`
                    } else if(!lastTrialIsRepair & repairChoiceIsLeft){
                        return `${leftBlock}
                            ${machineImg}
                            ${costMachinePrompt}
                            <div class='taskInfoPrompt'> 
                                <p>You chose not to repair...</p>
                            </div>
                            <div class='factoryRightBlock'>
                                ${arrowRight}
                                ${noRepairPromtR}
                            </div>`
                    } else {
                        return `<div class='factoryLeftBlock'>
                                ${noRepairPromtL}
                                ${arrowLeft}
                            </div>
                            ${machineImg}
                            ${costMachinePrompt}
                            <div class='taskInfoPrompt'> 
                                <p>You chose not to repair...</p>
                            </div>
                            ${rightBlock}`
                        }
                },
                choices: `NO_KEYS`,
                trial_duration: delibT,
                data: {
                    category: `delib`,
                    offers: offer,
                    cost: costRepair,
                    noActValue: noActValue,
                    stimNo: machine,
                    probWin: winProbAct,
                    trial: trial,
                    task: `factory`, 
                },
                on_finish: function(data){
                    let lastChoiceIs = jsPsych.data.get().last(2).values()[0];
                    data.act = lastChoiceIs.act;
                    data.success = lastChoiceIs.success;
                    data.robberTotPoints = lastChoiceIs.robberTotPoints;
                    data.factoryTotPoints = lastChoiceIs.factoryTotPoints;
                } 
            },
            {
                type:jsPsychHtmlKeyboardResponse,
                stimulus: function(){
                    let lastChoiceIs = jsPsych.data.get().last(1).values()[0];
                    if(lastChoiceIs.act==1){
                        if(lastChoiceIs.success==1){
                            return `${leftBlock}
                                ${machineImg}
                                <div class='taskInfoPrompt'> 
                                    <p class = 'outcomeP'>You <u><b>SUCCESSFULLY</u></b> repaired the machine.</p> <p>You only lost</p><h1><span class='winP'><b>${costRepair} $$</b></span></h1>
                                </div>
                                ${rightBlock}`
                        } else {
                            return `${leftBlock}
                                ${machineImg}
                                <div class='taskInfoPrompt'>
                                    <p class = 'outcomeP'>You <u><b>FAILED</u></b> in repairing the machine.</p> <p>You lost</p><h1><span class='lossP'><b>${offer + costRepair} $$</b></span></h1>
                                </div>
                                ${rightBlock}`
                        }
                    } else if(lastChoiceIs.act=='noResponse'){
                        return `${leftBlock}
                            <div class='missedTrialPrompt'>
                                <p>You did not respond in time, please try again.</p>
                            </div>
                            ${rightBlock}`
                    } else {
                        return `${leftBlock}
                            ${machineImg}
                            <div class='taskInfoPrompt'>
                                <p>You did not try to repair the machine.</p> <p>You lost</p><h1><span class='lossP'><b>${offer} $$</b></span></h1>
                            </div>
                            ${rightBlock}`
                    }
                },
                choices: `NO_KEYS`,
                trial_duration: outcomeT,
                data:{
                    category: `outcome`,
                    offers: offer,
                    cost: costRepair,
                    noActValue: noActValue,
                    stimNo: machine,
                    probWin: winProbAct,
                    trial: trial, 
                    task: `factory`,
                },
                on_finish: function(data){
                    let lastChoiceIs = jsPsych.data.get().last(2).values()[0];
                    data.act = lastChoiceIs.act;
                    data.success = lastChoiceIs.success;
                    if (lastChoiceIs.act){
                        if(lastChoiceIs.success){
                            data.factoryTotPoints = lastChoiceIs.factoryTotPoints - costRepair;
                        } else {
                            data.factoryTotPoints = lastChoiceIs.factoryTotPoints - (costRepair + offer);
                        }
                    } else {
                        data.factoryTotPoints = lastChoiceIs.factoryTotPoints - offer;
                    }
                    data.robberTotPoints = lastChoiceIs.robberTotPoints;
                }
            }
        ]
    };

    if(isPractice){
        return practiceFactoryTask 
    } else {
        return factoryTask 
    };

};