/**
 * @file robberTask.js
 * 
 * This script loads two functions that creates jsPsych timelines to run the Robber task.
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


function robberTaskInfo(minValue, maxValue, minCost, maxCost, isFirstTime){
    /**
     * [Function for the complete timeline of the instructions provided before the start of a block of the robber task]
     * 
     * @minValue {number} maximum size of the offer
     * @maxValue {number} minimum size of the offer
     * @minCost {number} maximum size of the cost
     * @maxCost {number} minimum size of the cost
     * @isFirstTime {boolean} distinguish instructions for the first time or second time the task is performed
     * @returns {variable} jsPsych formatted timeline which is added to the general timeline
     */	

    let robberTaskInfoVariableCost = {
        type: jsPsychHtmlKeyboardResponse,
        choices: ` `,
        data: {
            category: `instructions`,
        },
        timeline: [
            {
                stimulus: `<div class ='robberInfoLeftBlock'></div>
                    <div class ='textDivGen'>
                        <p><b>The Robber Task</b> 
                        <br/><br/>
                        In this game we ask you to imagine that you are working as a server at a bar and have collect cash tips throughout the night. 
                        Some nights you get a lot of tips some nights you get less. 
                        At the end of the night, you collect your cash but to get home you must walk through a part of town where muggings are common. 
                        On your way home you encounter a robber. 
                        <br/>
                        In this scenario you have two options: 
                        <br/><br/>
                        1) hand over the money <br/> 
                        2) try to fight of the robber 
                        <br/><br/>
                        If you hand over the money the robber is satisfied and leaves you alone, but you lose all the cash you collected that night. 
                        If you instead try to fight of the robber, 
                        it will cost you a varying cost (your shirt might get ripped or phone broken in the fight) but if you succeed you keep your cash. 
                        However, if you fail to fight the robber, you lose both the cash and the cost of fighting. 
                        <br/>
                        Press the spacebar to continue.</p>
                    </div>
                    <div class ='robberInfoRightBlock'></div>`,
            },
            {
                stimulus: `<div class ='robberInfoLeftBlock'></div>
                    <div class ='textDivGen'>
                        <p>You will encounter the same robber several times before the robber stops bothering you, 
                        then later on in the game you will encounter another robber. 
                        The probability of winning the fight depends on which robber you encounter.
                        As such, to gain the highest amount of money, you need to consider which robbers has been easy to overpower and which are more difficult to win over.
                        <br/><br/>
                        Press the spacebar to continue.</p>
                    </div>
                    <div class ='robberInfoRightBlock'></div>`,
            },
            {
                stimulus: `<div class ='robberInfoLeftBlock'></div>
                    <div class ='textDivGen'>
                        <p>When you are playing the robber task the sides of your screen will be grey, 
                        and the options shown will be either to fight the robber or hand over the money. 
                        You will use the arrow keys to choose what you want to do. 
                        Please pay attention as the choices may change sides. 
                        In the middle of the screen, you will see an image of the robber you are facing and the amount of money you have collected in tips that night.
                        You will also see the cost of fighting under that option.
                        The highest tip you can get is ${maxValue}, and the lowest is ${minValue}.
                        The costs associated with fighting range from ${minCost} to ${maxCost}.
                        <br/><br/>
                        Press the spacebar to see how the screen will look when you make the choices in the task.</p>
                    </div>
                    <div class ='robberInfoRightBlock'></div>`,
            }
        ]
    };

    let robberTaskInfoVariableCostSecondTime = {
        type: jsPsychHtmlKeyboardResponse,
        choices: ` `,
        data: {
            category: `instructions`,
        },
        timeline: [
            {
                stimulus: `<div class ='robberInfoLeftBlock'></div>
                    <div class ='textDivGen'>
                        <p><b>The Robber Task</b> 
                        <br/><br/>
                        You will now play the robber task again, we ask you to once again read through the instructions to make sure you remember the structure.
                        In this game we ask you to imagine that you are working as a server at a bar and have collect cash tips throughout the night. 
                        Some nights you get a lot of tips some nights you get less. 
                        At the end of the night, you collect your cash but to get home you must walk through a part of town where muggings are common. 
                        On your way home you encounter a robber. 
                        <br/>
                        In this scenario you have two options: 
                        <br/><br/>
                        1) hand over the money <br/> 
                        2) try to fight of the robber 
                        <br/><br/>
                        If you hand over the money the robber is satisfied and leaves you alone, but you lose all the cash you collected that night. 
                        If you instead try to fight of the robber, 
                        it will cost you a varying cost (your shirt might get ripped or phone broken in the fight) but if you succeed you keep your cash. 
                        However, if you fail to fight the robber, you lose both the cash and the cost of fighting. 
                        <br/>
                        Press the spacebar to continue.</p>
                    </div>
                    <div class ='robberInfoRightBlock'></div>`,
            },
            {
                stimulus: `<div class ='robberInfoLeftBlock'></div>
                    <div class ='textDivGen'>
                        <p>You will encounter the same robber several times before the robber stops bothering you, 
                        then later on in the game you will encounter another robber. 
                        The probability of winning the fight depends on which robber you encounter.
                        As such, to gain the highest amount of money, you need to consider which robbers has been easy to overpower and which are more difficult to win over.
                        <br/><br/>
                        Press the spacebar to continue.</p>
                    </div>
                    <div class ='robberInfoRightBlock'></div>`,
            },
            {
                stimulus: `<div class ='robberInfoLeftBlock'></div>
                    <div class ='textDivGen'>
                        <p>When you are playing the robber task the sides of your screen will be grey, 
                        and the options shown will be either to fight the robber or hand over the money. 
                        You will use the arrow keys to choose what you want to do. 
                        Please pay attention as the choices may change sides. 
                        In the middle of the screen, you will see an image of the robber you are facing and the amount of money you have collected in tips that night.
                        You will also see the cost of fighting under that option.
                        The highest tip you can get is ${maxValue}, and the lowest is ${minValue}.
                        The costs associated with fighting range from ${minCost} to ${maxCost}.
                        <br/><br/>
                        Press the spacebar to continue.</p>
                    </div>
                    <div class ='robberInfoRightBlock'></div>`,
            }
        ]
    };

    if(isFirstTime){
        return robberTaskInfoVariableCost
    } else {
        return robberTaskInfoVariableCostSecondTime
    }

};



function robberTrial(robber, offer, winProbAct, costFight, noActValue, trial, ITI, IET, maxChoiceT, delibT, outcomeT, isPractice) {
	/**
     * [Function for the complete timeline of a robber task trial, includes practice trial version]
     * 
     * @robber {string} The filename of the stimulus
     * @offer {number} The offer shown on in the trial
     * @winProbAct {number} The probability of success when active action is chosen
     * @costFight {number} cost of the active action
     * @noActValue {number} value the passive action (0, in this case. Is only used to save in data)
     * @ITI {number} length of inter trial interval in ms
     * @IET {number} time the offer is shown before choice time starts in ms
     * @maxChoiceT {number} maximum response time before in ms
     * @delibT {number} time the post decision screen is shown in ms
     * @outcomeT {number} time outcome screen is shown in ms 
     * @isPractice {boolean} true or false, if the practice trial should be shown or not
     * @returns {variable} jsPsych formatted timeline for one trial
     */	

    let robberImg = `<div class='choiceStimDiv'><img src ='${robber}' class='robberChoiceStim'></div>`;
    let offerPrompt = `<div class='robberChoiceIE'> <p><b>You have:</p> <h1> ${offer} $$ </h1> <p>on your person</b></p></div>`;
    let leftBlock = `<div class='robberLeftBlock'></div>`;
    let rightBlock = `<div class='robberRightBlock'></div>`;
    let arrowLeft = `<div class='robberLeftArrowDiv'> <img src='${arrowLeftImg}' class='leftArrowStim'> </div>`;
    let arrowRight = `<div class='robberRightArrowDiv'> <img src='${arrowRightImg}' class='rightArrowStim'> </div>`;
    let costPromptL = `<div class='robberCostPromptLeft'><h1>(cost - ${costFight} $$)</h1></div>`;
    let costPromptR = `<div class='robberCostPromptRight'><h1>(cost - ${costFight} $$)</h1></div>`;
    let fightPromtL = `<div class='robberLeftChoicePrompt'><h1>Fight</h1> <h1>the</h1><h1> robber</h1></div>`;
    let fightPromtR = `<div class='robberRightChoicePrompt'><h1>Fight</h1> <h1>the</h1><h1> robber</h1></div>`;
    let noFightPromtL = `<div class='robberLeftChoicePrompt'><h1>Hand</h1> <h1>over</h1><h1>money</h1></div>`;
    let noFightPromtR = `<div class='robberRightChoicePrompt'><h1>Hand</h1> <h1>over</h1><h1>money</h1></div>`;
    let fightChoiceIsLeft = jsPsych.randomization.sampleBernoulli(0.5);



    let practiceRobberTask = {
        timeline: [
            {
                type:jsPsychHtmlKeyboardResponse,
                stimulus: `${leftBlock}
                    <h1>+<h1> 
                    ${rightBlock}`,
                choices: `NO_KEYS`,
                trial_duration: ITI,
                data: {
                    category: `practiceITI`,
                    trial: trial,
                    task: `robber`,
                },
                on_finish: function(data){
                    let lastTrialData = jsPsych.data.get().last(2).values()[0];
                    data.robberTotPoints = lastTrialData.robberTotPoints;
                    data.factoryTotPoints = lastTrialData.factoryTotPoints;
                }
            },
            {
                type:jsPsychHtmlKeyboardResponse,
                stimulus: `${leftBlock}
                        <div class='IEStimDiv'>
                        <img src ='${robberIEStim}' class='robberIEStim'>
                    </div>
                    <div class='IETxt'>
                        <p>You collected </p> <h1>${offer} $$</h1> <p>of tips from tonight's work <br/> Press the spacebar to show the choice screen.</p>  
                    </div> 
                    ${rightBlock}`,
                choices: ` `, 
                data: {
                    category: `practiceIE`,
                    offers: offer,
                    cost: costFight,
                    noActValue: noActValue,
                    stimNo: robber,
                    probWin: winProbAct,
                    trial: trial,
                    task: `robber`,
                },
                on_finish: function(data){
                    let lastTrialData = jsPsych.data.get().last(2).values()[0];
                    data.robberTotPoints = lastTrialData.robberTotPoints;
                    data.factoryTotPoints = lastTrialData.factoryTotPoints;
                }
            },
            {
                type: jsPsychHtmlKeyboardResponse,
                stimulus:function(){
                    if(fightChoiceIsLeft){
                        return `<div class='robberLeftBlock'>
                                ${fightPromtL}
                                ${arrowLeft}
                                ${costPromptL}
                            </div>
                            ${robberImg}
                            ${offerPrompt}
                            <div class='taskInfoPrompt'> 
                                <p>Use the arrow-keys to choose what to do</p>
                            </div>
                            <div class='robberRightBlock'> 
                                ${arrowRight}
                                ${noFightPromtR}
                            </div>`;
                    } else {
                        return `<div class='robberLeftBlock'>
                            ${noFightPromtL}
                            ${arrowLeft}
                            </div>
                            ${robberImg}
                            ${offerPrompt}
                            <div class='taskInfoPrompt'> 
                                <p>Use the arrow-keys to choose what to do</p>
                            </div>
                            <div class='robberRightBlock'> 
                                ${arrowRight}
                                ${fightPromtR}
                                ${costPromptR}
                            </div>`;
                    }	
                },
                choices: [`ArrowLeft`,`ArrowRight`],
                data:{
                    category:`practiceChoice`,
                    offers: offer,
                    cost: costFight,
                    noActValue: noActValue,
                    stimNo: robber,
                    probWin: winProbAct,
                    trial: trial,
                    task: `robber`,
                },
                on_finish: function(data){
                    // Check which response was given and if it was successfull
                    if((jsPsych.pluginAPI.compareKeys(data.response, `ArrowLeft`) & fightChoiceIsLeft) || (jsPsych.pluginAPI.compareKeys(data.response, `ArrowRight`) & !fightChoiceIsLeft)){
                        data.act = 1;
                        data.success = jsPsych.randomization.sampleBernoulli(winProbAct)
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
                    let lastTrialIsFight = jsPsych.data.get().last(1).values()[0].act;
                    if(lastTrialIsFight & fightChoiceIsLeft){
                        return `<div class='robberLeftBlock'>
                                ${fightPromtL}
                                ${arrowLeft}
                                ${costPromptL}
                            </div>
                            ${robberImg}
                            ${offerPrompt}
                            <div class='taskInfoPrompt'> 
                                <p>You chose to fight...</p>
                            </div>
                            ${rightBlock}`
                    } else if(lastTrialIsFight & !fightChoiceIsLeft){
                        return `${leftBlock}
                            ${robberImg}
                            ${offerPrompt}
                            <div class='taskInfoPrompt'> 
                                <p>You chose to fight...</p>
                            </div>
                            <div class='robberRightBlock'>
                                ${arrowRight}
                                ${fightPromtR}
                                ${costPromptR}
                            </div>`
                    } else if(!lastTrialIsFight & fightChoiceIsLeft){
                        return `${leftBlock}
                            ${robberImg}
                            ${offerPrompt}
                            <div class='taskInfoPrompt'> 
                                <p>You chose not to fight...</p>
                            </div>
                            <div class='robberRightBlock'>
                                ${arrowRight}
                                ${noFightPromtR}
                            </div>`
                    } else {
                        return `<div class='robberLeftBlock'>
                                ${noFightPromtL}
                                ${arrowLeft}
                            </div>
                            ${robberImg}
                            ${offerPrompt}
                            <div class='taskInfoPrompt'> 
                                <p>You chose not to fight...</p>
                            </div>
                            ${rightBlock}`
                    }
                },
                choices: `NO_KEYS`,
                trial_duration: delibT,
                data: {
                    category: `practiceDelib`,
                    offers: offer,
                    cost: costFight,
                    noActValue: noActValue,
                    stimNo: robber,
                    probWin: winProbAct,
                    trial: trial, 
                    task: `robber`,
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
                            if((offer-costFight)<0){
                                return `${leftBlock}
                                    ${robberImg}
                                    <div class='taskInfoPrompt'> 
                                        <p class='outcomeP'>You <u><b>WON</b></u> the fight.</p> <p>You only lost </p><h1><span class='winP'><b>-${costFight - offer} $$</b></span></h1> <p> Press the spacebar to continue </p>
                                    </div>
                                    ${rightBlock}`
                            } else {
                                return `${leftBlock}
                                    ${robberImg}
                                    <div class='taskInfoPrompt'> 
                                        <p class='outcomeP'>You <u><b>WON</u></b> the fight.</p> <p>You get to keep </p><h1><span class='winP'><b>${offer - costFight} $$</b></span></h1> <p> Press the spacebar to continue </p>
                                    </div>
                                    ${rightBlock}`
                            }
                        } else {
                            return `${leftBlock}
                                ${robberImg}
                                <div class='taskInfoPrompt'>
                                    <p class='outcomeP'>You <u><b>LOST</u></b> the fight.</p> <p>You lost your money and lost </p><h1><span class='lossP'><b>-${costFight} $$</b></span></h1> <p> Press the spacebar to continue </p>
                                </div>
                                ${rightBlock}`
                        }
                    } else {
                        return `${leftBlock}
                            ${robberImg}
                            <div class='taskInfoPrompt'>
                                <p>You did not fight.</p> <p>You lost your money and gained</p><h1><span class='lossP'><b>0 $$</b></span></h1> <p> Press the spacebar to continue </p>
                            </div>
                            ${rightBlock}`
                    }
                },
                choices: ` `,
                data:{
                    category: `PracticeOutcome`,
                    offers: offer,
                    cost: costFight,
                    noActValue: noActValue,
                    stimNo: robber,
                    probWin: winProbAct,
                    trial: trial,
                    task: `robber`, 
                },
                on_finish: function(data){
                    let lastTrialData = jsPsych.data.get().last(2).values()[0];
                    data.robberTotPoints = lastTrialData.robberTotPoints;
                    data.factoryTotPoints = lastTrialData.factoryTotPoints;
                }
            }
        ]
    };

    let robberTask = {
        timeline: [
            {
                type:jsPsychHtmlKeyboardResponse,
                stimulus: `${leftBlock}
                    <h1>+<h1> 
                    ${rightBlock}`,
                choices: `NO_KEYS`,
                trial_duration: ITI,
                data: {
                    category: `ITI`,
                    trial: trial,
                    task: `robber`,
                },
                on_finish: function(data){
                    let lastTrialData = jsPsych.data.get().last(2).values()[0];
                    data.robberTotPoints = lastTrialData.robberTotPoints;
                    data.factoryTotPoints = lastTrialData.factoryTotPoints;
                }
            },
            {
                type:jsPsychHtmlKeyboardResponse,
                stimulus: `${leftBlock}
                        <div class='IEStimDiv'>
                        <img src ='${robberIEStim}' class='robberIEStim'>
                    </div>
                    <div class='IETxt'>
                        <p>You collected </p> <h1>${offer} $$</h1> <p>of tips from tonights work</p>  
                    </div> 
                    ${rightBlock}`,
                choices: `NO_KEYS`,
                trial_duration: IET,
                data: {
                    category: `IE`,
                    offers: offer,
                    cost: costFight,
                    noActValue: noActValue,
                    stimNo: robber,
                    probWin: winProbAct,
                    trial: trial,
                    task: `robber`,
                },
                on_finish: function(data){
                    let lastTrialData = jsPsych.data.get().last(2).values()[0];
                    data.robberTotPoints = lastTrialData.robberTotPoints;
                    data.factoryTotPoints = lastTrialData.factoryTotPoints;
                }
            },
            {
                type: jsPsychHtmlKeyboardResponse,
                stimulus:function(){
                    if(fightChoiceIsLeft){
                        return `<div class='robberLeftBlock'>
                                ${fightPromtL}
                                ${arrowLeft}
                                ${costPromptL}
                            </div>
                            ${robberImg}
                            ${offerPrompt}
                            <div class='taskInfoPrompt'> 
                                <p>Use the arrow-keys to choose what to do</p>
                            </div>
                            <div class='robberRightBlock'> 
                                ${arrowRight}
                                ${noFightPromtR}
                            </div>`;
                    } else {
                        return `<div class='robberLeftBlock'>
                            ${noFightPromtL}
                            ${arrowLeft}
                            </div>
                            ${robberImg}
                            ${offerPrompt}
                            <div class='taskInfoPrompt'> 
                                <p>Use the arrow-keys to choose what to do</p>
                            </div>
                            <div class='robberRightBlock'> 
                                ${arrowRight}
                                ${fightPromtR}
                                ${costPromptR}
                            </div>`;
                    }	
                },
                trial_duration: maxChoiceT,
                choices: [`ArrowLeft`,`ArrowRight`],
                data:{
                    category:`choice`,
                    offers: offer,
                    cost: costFight,
                    noActValue: noActValue,
                    stimNo: robber,
                    probWin: winProbAct,
                    trial: trial,
                    task: `robber`,
                },
                on_finish: function(data){
                    if((jsPsych.pluginAPI.compareKeys(data.response, `ArrowLeft`) & fightChoiceIsLeft) || (jsPsych.pluginAPI.compareKeys(data.response, `ArrowRight`) & !fightChoiceIsLeft)){
                        data.act = 1;
                        data.success = jsPsych.randomization.sampleBernoulli(winProbAct)
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
                    let lastTrialIsFight = jsPsych.data.get().last(1).values()[0].act;
                    if(lastTrialIsFight & fightChoiceIsLeft){
                        return `<div class='robberLeftBlock'>
                                ${fightPromtL}
                                ${arrowLeft}
                                ${costPromptL}
                            </div>
                            ${robberImg}
                            ${offerPrompt}
                            <div class='taskInfoPrompt'> 
                                <p>You chose to fight...</p>
                            </div>
                            ${rightBlock}`
                    } else if(lastTrialIsFight & !fightChoiceIsLeft){
                        return `${leftBlock}
                            ${robberImg}
                            ${offerPrompt}
                            <div class='taskInfoPrompt'> 
                                <p>You chose to fight...</p>
                            </div>
                            <div class='robberRightBlock'>
                                ${arrowRight}
                                ${fightPromtR}
                                ${costPromptR}
                            </div>`
                    } else if(lastTrialIsFight=='noResponse'){
                        return `${leftBlock}
                            <div class='missedTrialPrompt'> 
                                <p>You did not respond in time, please try again.</p>
                            </div>
                            ${rightBlock}`
                    } else if(!lastTrialIsFight & fightChoiceIsLeft){
                        return `${leftBlock}
                            ${robberImg}
                            ${offerPrompt}
                            <div class='taskInfoPrompt'> 
                                <p>You chose not to fight...</p>
                            </div>
                            <div class='robberRightBlock'>
                                ${arrowRight}
                                ${noFightPromtR}
                            </div>`
                    } else {
                        return `<div class='robberLeftBlock'>
                                ${noFightPromtL}
                                ${arrowLeft}
                            </div>
                            ${robberImg}
                            ${offerPrompt}
                            <div class='taskInfoPrompt'> 
                                <p>You chose not to fight...</p>
                            </div>
                            ${rightBlock}`
                    }
                },
                choices: `NO_KEYS`,
                trial_duration: delibT,
                data: {
                    category: `delib`,
                    offers: offer,
                    cost: costFight,
                    noActValue: noActValue,
                    stimNo: robber,
                    probWin: winProbAct,
                    trial: trial, 
                    task: `robber`,
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
                            if((offer-costFight)<0){
                                return `${leftBlock}
                                    ${robberImg}
                                    <div class='taskInfoPrompt'> 
                                        <p class = 'outcomeP'>You <u><b>WON</b></u> the fight.</p> <p>You only lost </p><h1><span class='lossP'><b>${costFight - offer} $$</b></span></h1>
                                    </div>
                                    ${rightBlock}`
                            } else {
                                return `${leftBlock}
                                    ${robberImg}
                                    <div class='taskInfoPrompt'> 
                                        <p class = 'outcomeP'>You <u><b>WON</b></u> the fight.</p> <p>You get to keep </p><h1><span class='winP'><b>${offer - costFight} $$</b></span></h1>
                                    </div>
                                    ${rightBlock}`
                            }
                        } else {
                            return `${leftBlock}
                                ${robberImg}
                                <div class='taskInfoPrompt'>
                                    <p class = 'outcomeP'>You <u><b>LOST</b></u> the fight.</p> <p>You lost your money and lost </p><h1><span class='lossP'><b>${costFight} $$</b></span></h1>
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
                            ${robberImg}
                            <div class='taskInfoPrompt'>
                                <p>You did not fight.</p> <p>You lost your money and gained</p><h1><span class='lossP'><b>0 $$</b></span>
                            </div>
                            ${rightBlock}`
                    }
                },
                choices: `NO_KEYS`,
                trial_duration: outcomeT,
                data:{
                    category: `outcome`,
                    offers: offer,
                    cost: costFight,
                    noActValue: noActValue,
                    stimNo: robber,
                    probWin: winProbAct,
                    trial: trial,
                    task: `robber`, 
                },
                on_finish: function(data){
                    let lastChoiceIs = jsPsych.data.get().last(2).values()[0];
                    data.act = lastChoiceIs.act;
                    data.success = lastChoiceIs.success;
                    if (lastChoiceIs.act){
                        if(lastChoiceIs.success){
                            data.robberTotPoints = lastChoiceIs.robberTotPoints + offer - costFight;
                        } else {
                            data.robberTotPoints = lastChoiceIs.robberTotPoints - costFight;
                        }
                    } else {
                        data.robberTotPoints = lastChoiceIs.robberTotPoints;
                    }
                    data.factoryTotPoints = lastChoiceIs.factoryTotPoints;
                }
            }
        ]
    };

    if(isPractice){
        return practiceRobberTask;
    } else {
        return robberTask;
    };
};