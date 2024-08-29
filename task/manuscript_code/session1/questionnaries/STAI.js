function qSTAI1(includeAttentionChecks){

    let questionsSTAI1 = []; 

    if(includeAttentionChecks == 1) {
        questionsSTAI1 = [
            {
                prompt: `1. I feel calm`,
                name: `1`,
                options: [`1. Not at all`,`2. Somewhat`,`3. Moderately so`,`4. Very much so`],
                required:true
            },
            {
                prompt: `2. I feel secure`,
                name: `2`,
                options: [`1. Not at all`,`2. Somewhat`,`3. Moderately so`,`4. Very much so`],
                required:true
            },
            {
                prompt: `3. I am tense`,
                name: `3`,
                options: [`1. Not at all`,`2. Somewhat`,`3. Moderately so`,`4. Very much so`],
                required:true
            },
            {
                prompt: `4. I feel strained`,
                name: `4`,
                options: [`1. Not at all`,`2. Somewhat`,`3. Moderately so`,`4. Very much so`],
                required:true
            },
            {
                prompt: `5. I feel at ease`,
                name: `5`,
                options: [`1. Not at all`,`2. Somewhat`,`3. Moderately so`,`4. Very much so`],
                required:true
            },
            {
                prompt: `6. I feel upset`,
                name: `6`,
                options: [`1. Not at all`,`2. Somewhat`,`3. Moderately so`,`4. Very much so`],
                required:true
            },
            {
                prompt: `7. I am presently worrying over possible misfortunes`,
                name: `7`,
                options: [`1. Not at all`,`2. Somewhat`,`3. Moderately so`,`4. Very much so`],
                required:true
            },
            {
                prompt: `Attention check: Pick "2. Somewhat" to indicate that you payed attention`,
                name: `AC`,
                options: [`1. Not at all`,`2. Somewhat`,`3. Moderately so`,`4. Very much so`],
                required:true
            },
            {
                prompt: `8. I feel satisfied`,
                name: `8`,
                options: [`1. Not at all`,`2. Somewhat`,`3. Moderately so`,`4. Very much so`],
                required:true
            },
            {
                prompt: `9. I feel frightened`,
                name: `9`,
                options: [`1. Not at all`,`2. Somewhat`,`3. Moderately so`,`4. Very much so`],
                required:true
            },
            {
                prompt: `10. I feel comfortable`,
                name: `10`,
                options: [`1. Not at all`,`2. Somewhat`,`3. Moderately so`,`4. Very much so`],
                required:true
            },
            {
                prompt: `11. I feel self-confident`,
                name: `11`,
                options: [`1. Not at all`,`2. Somewhat`,`3. Moderately so`,`4. Very much so`],
                required:true
            },
            {
                prompt: `12. I feel nervous`,
                name: `12`,
                options: [`1. Not at all`,`2. Somewhat`,`3. Moderately so`,`4. Very much so`],
                required:true
            },
            {
                prompt: `13. I am jittery.`,
                name: `13`,
                options: [`1. Not at all`,`2. Somewhat`,`3. Moderately so`,`4. Very much so`],
                required:true
            },
            {
                prompt: `14. I feel indecisive`,
                name: `14`,
                options: [`1. Not at all`,`2. Somewhat`,`3. Moderately so`,`4. Very much so`],
                required:true
            },
            {
                prompt: `15. I am relaxed`,
                name: `15`,
                options: [`1. Not at all`,`2. Somewhat`,`3. Moderately so`,`4. Very much so`],
                required:true
            },
            {
                prompt: `16. I feel content`,
                name: `16`,
                options: [`1. Not at all`,`2. Somewhat`,`3. Moderately so`,`4. Very much so`],
                required:true
            },
            {
                prompt: `17. I am worried`,
                name: `17`,
                options: [`1. Not at all`,`2. Somewhat`,`3. Moderately so`,`4. Very much so`],
                required:true
            },
            {
                prompt: `18. I feel confused`,
                name: `18`,
                options: [`1. Not at all`,`2. Somewhat`,`3. Moderately so`,`4. Very much so`],
                required:true
            },
            {
                prompt: `19. I feel steady`,
                name: `19`,
                options: [`1. Not at all`,`2. Somewhat`,`3. Moderately so`,`4. Very much so`],
                required:true
            },
            {
                prompt: `20. I feel pleasant`,
                name: `20`,
                options: [`1. Not at all`,`2. Somewhat`,`3. Moderately so`,`4. Very much so`],
                required:true
            },
        ]
    } else {
        questionsSTAI1 = [
            {
                prompt: `1. I feel calm`,
                name: `1`,
                options: [`1. Not at all`,`2. Somewhat`,`3. Moderately so`,`4. Very much so`],
                required:true
            },
            {
                prompt: `2. I feel secure`,
                name: `2`,
                options: [`1. Not at all`,`2. Somewhat`,`3. Moderately so`,`4. Very much so`],
                required:true
            },
            {
                prompt: `3. I am tense`,
                name: `3`,
                options: [`1. Not at all`,`2. Somewhat`,`3. Moderately so`,`4. Very much so`],
                required:true
            },
            {
                prompt: `4. I feel strained`,
                name: `4`,
                options: [`1. Not at all`,`2. Somewhat`,`3. Moderately so`,`4. Very much so`],
                required:true
            },
            {
                prompt: `5. I feel at ease`,
                name: `5`,
                options: [`1. Not at all`,`2. Somewhat`,`3. Moderately so`,`4. Very much so`],
                required:true
            },
            {
                prompt: `6. I feel upset`,
                name: `6`,
                options: [`1. Not at all`,`2. Somewhat`,`3. Moderately so`,`4. Very much so`],
                required:true
            },
            {
                prompt: `7. I am presently worrying over possible misfortunes`,
                name: `7`,
                options: [`1. Not at all`,`2. Somewhat`,`3. Moderately so`,`4. Very much so`],
                required:true
            },
            {
                prompt: `8. I feel satisfied`,
                name: `8`,
                options: [`1. Not at all`,`2. Somewhat`,`3. Moderately so`,`4. Very much so`],
                required:true
            },
            {
                prompt: `9. I feel frightened`,
                name: `9`,
                options: [`1. Not at all`,`2. Somewhat`,`3. Moderately so`,`4. Very much so`],
                required:true
            },
            {
                prompt: `10. I feel comfortable`,
                name: `10`,
                options: [`1. Not at all`,`2. Somewhat`,`3. Moderately so`,`4. Very much so`],
                required:true
            },
            {
                prompt: `11. I feel self-confident`,
                name: `11`,
                options: [`1. Not at all`,`2. Somewhat`,`3. Moderately so`,`4. Very much so`],
                required:true
            },
            {
                prompt: `12. I feel nervous`,
                name: `12`,
                options: [`1. Not at all`,`2. Somewhat`,`3. Moderately so`,`4. Very much so`],
                required:true
            },
            {
                prompt: `13. I am jittery.`,
                name: `13`,
                options: [`1. Not at all`,`2. Somewhat`,`3. Moderately so`,`4. Very much so`],
                required:true
            },
            {
                prompt: `14. I feel indecisive`,
                name: `14`,
                options: [`1. Not at all`,`2. Somewhat`,`3. Moderately so`,`4. Very much so`],
                required:true
            },
            {
                prompt: `15. I am relaxed`,
                name: `15`,
                options: [`1. Not at all`,`2. Somewhat`,`3. Moderately so`,`4. Very much so`],
                required:true
            },
            {
                prompt: `16. I feel content`,
                name: `16`,
                options: [`1. Not at all`,`2. Somewhat`,`3. Moderately so`,`4. Very much so`],
                required:true
            },
            {
                prompt: `17. I am worried`,
                name: `17`,
                options: [`1. Not at all`,`2. Somewhat`,`3. Moderately so`,`4. Very much so`],
                required:true
            },
            {
                prompt: `18. I feel confused`,
                name: `18`,
                options: [`1. Not at all`,`2. Somewhat`,`3. Moderately so`,`4. Very much so`],
                required:true
            },
            {
                prompt: `19. I feel steady`,
                name: `19`,
                options: [`1. Not at all`,`2. Somewhat`,`3. Moderately so`,`4. Very much so`],
                required:true
            },
            {
                prompt: `20. I feel pleasant`,
                name: `20`,
                options: [`1. Not at all`,`2. Somewhat`,`3. Moderately so`,`4. Very much so`],
                required:true
            },
        ]
    }


    let qSTAI1 = {
        type: jsPsychSurveyMultiChoice,
        preamble: 
            `<h1>SELF-EVALUATION QUESTIONNAIRE  STAI Form Y-1</h1>
            <p>A number of statements which people have used to describe themselves are given below. 
            Read each statement and then blacken the appropriate circle to the right of the statement to indicate how you feel right now, that is, at this moment. 
            There are no right or wrong answers. Do not spend too much time on any one statement but give the answer which seems to describe your present feelings best.</p>`,
        questions:questionsSTAI1,
        data: {
            category: "STAI1",
        }
    };
    return qSTAI1
}

function qSTAI2(includeAttentionChecks){
        
    let questionsSTAI2 = []; 

    if(includeAttentionChecks == 1) {
        questionsSTAI2 = [
            {
                prompt: `1. I feel pleasant`,
                name: `1`,
                options: [`1. Almost never`,`2. Sometimes`,`3. Often`,`4. Almost always`],
                required:true
            },
            {
                prompt: `2. I feel nervous and restless`,
                name: `2`,
                options: [`1. Almost never`,`2. Sometimes`,`3. Often`,`4. Almost always`],
                required:true
            },
            {
                prompt: `3. I feel satisfied with myself`,
                name: `3`,
                options: [`1. Almost never`,`2. Sometimes`,`3. Often`,`4. Almost always`],
                required:true
            },
            {
                prompt: `4. I wish I could be as happy as others seem to be`,
                name: `4`,
                options: [`1. Almost never`,`2. Sometimes`,`3. Often`,`4. Almost always`],
                required:true
            },
            {
                prompt: `5. I feel like a failure`,
                name: `5`,
                options: [`1. Almost never`,`2. Sometimes`,`3. Often`,`4. Almost always`],
                required:true
            },
            {
                prompt: `6. I feel rested`,
                name: `6`,
                options: [`1. Almost never`,`2. Sometimes`,`3. Often`,`4. Almost always`],
                required:true
            },
            {
                prompt: `7. I am “calm, cool, and collected”`,
                name: `7`,
                options: [`1. Almost never`,`2. Sometimes`,`3. Often`,`4. Almost always`],
                required:true
            },
            {
                prompt: `Attention check: Pick "2. Somewhat" to indicate that you payed attention`,
                name: `AC`,
                options: [`1. Not at all`,`2. Somewhat`,`3. Moderately so`,`4. Very much so`],
                required:true
            },
            {
                prompt: `8. I feel that difficulties are piling up so that I cannot overcome them`,
                name: `8`,
                options: [`1. Almost never`,`2. Sometimes`,`3. Often`,`4. Almost always`],
                required:true
            },
            {
                prompt: `9. I worry too much over something that really doesn't matter`,
                name: `9`,
                options: [`1. Almost never`,`2. Sometimes`,`3. Often`,`4. Almost always`],
                required:true
            },
            {
                prompt: `10. I am happy`,
                name: `10`,
                options: [`1. Almost never`,`2. Sometimes`,`3. Often`,`4. Almost always`],
                required:true
            },
            {
                prompt: `11. I have disturbing thoughts`,
                name: `11`,
                options: [`1. Almost never`,`2. Sometimes`,`3. Often`,`4. Almost always`],
                required:true
            },
            {
                prompt: `12. I lack self-confidence`,
                name: `12`,
                options: [`1. Almost never`,`2. Sometimes`,`3. Often`,`4. Almost always`],
                required:true
            },
            {
                prompt: `13. I feel secure`,
                name: `13`,
                options: [`1. Almost never`,`2. Sometimes`,`3. Often`,`4. Almost always`],
                required:true
            },
            {
                prompt: `14. I make decisions easily`,
                name: `14`,
                options: [`1. Almost never`,`2. Sometimes`,`3. Often`,`4. Almost always`],
                required:true
            },
            {
                prompt: `15. I feel inadequate`,
                name: `15`,
                options: [`1. Almost never`,`2. Sometimes`,`3. Often`,`4. Almost always`],
                required:true
            },
            {
                prompt: `16. I am content`,
                name: `16`,
                options: [`1. Almost never`,`2. Sometimes`,`3. Often`,`4. Almost always`],
                required:true
            },
            {
                prompt: `17. Some unimportant thought runs through my mind and bothers me`,
                name: `17`,
                options: [`1. Almost never`,`2. Sometimes`,`3. Often`,`4. Almost always`],
                required:true
            },
            {
                prompt: `18. I take disappointments so keenly that I can't put them out of my mind`,
                name: `18`,
                options: [`1. Almost never`,`2. Sometimes`,`3. Often`,`4. Almost always`],
                required:true
            },
            {
                prompt: `19. I am a steady person`,
                name: `19`,
                options: [`1. Almost never`,`2. Sometimes`,`3. Often`,`4. Almost always`],
                required:true
            },
            {
                prompt: `20. I get in a state of tension or turmoil as I think over my recent concerns and interests`,
                name: `20`,
                options: [`1. Almost never`,`2. Sometimes`,`3. Often`,`4. Almost always`],
                required:true
            },
        ]
    } else {
        questionsSTAI2 = [
            {
                prompt: `1. I feel pleasant`,
                name: `1`,
                options: [`1. Almost never`,`2. Sometimes`,`3. Often`,`4. Almost always`],
                required:true
            },
            {
                prompt: `2. I feel nervous and restless`,
                name: `2`,
                options: [`1. Almost never`,`2. Sometimes`,`3. Often`,`4. Almost always`],
                required:true
            },
            {
                prompt: `3. I feel satisfied with myself`,
                name: `3`,
                options: [`1. Almost never`,`2. Sometimes`,`3. Often`,`4. Almost always`],
                required:true
            },
            {
                prompt: `4. I wish I could be as happy as others seem to be`,
                name: `4`,
                options: [`1. Almost never`,`2. Sometimes`,`3. Often`,`4. Almost always`],
                required:true
            },
            {
                prompt: `5. I feel like a failure`,
                name: `5`,
                options: [`1. Almost never`,`2. Sometimes`,`3. Often`,`4. Almost always`],
                required:true
            },
            {
                prompt: `6. I feel rested`,
                name: `6`,
                options: [`1. Almost never`,`2. Sometimes`,`3. Often`,`4. Almost always`],
                required:true
            },
            {
                prompt: `7. I am “calm, cool, and collected”`,
                name: `7`,
                options: [`1. Almost never`,`2. Sometimes`,`3. Often`,`4. Almost always`],
                required:true
            },
            {
                prompt: `8. I feel that difficulties are piling up so that I cannot overcome them`,
                name: `8`,
                options: [`1. Almost never`,`2. Sometimes`,`3. Often`,`4. Almost always`],
                required:true
            },
            {
                prompt: `9. I worry too much over something that really doesn't matter`,
                name: `9`,
                options: [`1. Almost never`,`2. Sometimes`,`3. Often`,`4. Almost always`],
                required:true
            },
            {
                prompt: `10. I am happy`,
                name: `10`,
                options: [`1. Almost never`,`2. Sometimes`,`3. Often`,`4. Almost always`],
                required:true
            },
            {
                prompt: `11. I have disturbing thoughts`,
                name: `11`,
                options: [`1. Almost never`,`2. Sometimes`,`3. Often`,`4. Almost always`],
                required:true
            },
            {
                prompt: `12. I lack self-confidence`,
                name: `12`,
                options: [`1. Almost never`,`2. Sometimes`,`3. Often`,`4. Almost always`],
                required:true
            },
            {
                prompt: `13. I feel secure`,
                name: `13`,
                options: [`1. Almost never`,`2. Sometimes`,`3. Often`,`4. Almost always`],
                required:true
            },
            {
                prompt: `14. I make decisions easily`,
                name: `14`,
                options: [`1. Almost never`,`2. Sometimes`,`3. Often`,`4. Almost always`],
                required:true
            },
            {
                prompt: `15. I feel inadequate`,
                name: `15`,
                options: [`1. Almost never`,`2. Sometimes`,`3. Often`,`4. Almost always`],
                required:true
            },
            {
                prompt: `16. I am content`,
                name: `16`,
                options: [`1. Almost never`,`2. Sometimes`,`3. Often`,`4. Almost always`],
                required:true
            },
            {
                prompt: `17. Some unimportant thought runs through my mind and bothers me`,
                name: `17`,
                options: [`1. Almost never`,`2. Sometimes`,`3. Often`,`4. Almost always`],
                required:true
            },
            {
                prompt: `18. I take disappointments so keenly that I can't put them out of my mind`,
                name: `18`,
                options: [`1. Almost never`,`2. Sometimes`,`3. Often`,`4. Almost always`],
                required:true
            },
            {
                prompt: `19. I am a steady person`,
                name: `19`,
                options: [`1. Almost never`,`2. Sometimes`,`3. Often`,`4. Almost always`],
                required:true
            },
            {
                prompt: `20. I get in a state of tension or turmoil as I think over my recent concerns and interests`,
                name: `20`,
                options: [`1. Almost never`,`2. Sometimes`,`3. Often`,`4. Almost always`],
                required:true
            },
        ]
    }

    let qSTAI2 = {
        type: jsPsychSurveyMultiChoice,
        preamble: 
            `<h1>SELF-EVALUATION QUESTIONNAIRE STAI Form Y-2</h1>
            <p>A number of statements which people have used to describe themselves are given below. 
            Read each statement and then blacken in the appropriate circle to the right of the statement to indicate you generally feel.</p>`,
        questions:questionsSTAI2,
        data: {
            category: "STAI2",
        }
    };
    return(qSTAI2)
};