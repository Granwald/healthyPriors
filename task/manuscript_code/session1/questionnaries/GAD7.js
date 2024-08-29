function GAD7(includeAttentionChecks){
    let questionsGAD7 = []; 

    if(includeAttentionChecks == 1) {
        questionsGAD7 = [
            {
                prompt: `1. Feeling nervous, anxious or on edge.`,
                name: `1`,
                options: [`0. Not at all`,`1. Several days`,`2. More than half the days`,`3. Nearly every day`],
                required:true
            },
            {
                prompt: `2. Not being able to stop or control worrying.`,
                name: `2`,
                options: [`0. Not at all`,`1. Several days`,`2. More than half the days`,`3. Nearly every day`],
                required:true
            },
            {
                prompt: `3. Worrying too much about different things.`,
                name: `3`,
                options: [`0. Not at all`,`1. Several days`,`2. More than half the days`,`3. Nearly every day`],
                required:true
            },
            {
                prompt: `4. Trouble relaxing.`,
                name: `4`,
                options: [`0. Not at all`,`1. Several days`,`2. More than half the days`,`3. Nearly every day`],
                required:true
            },
            {
                prompt: `5. Being so restless that it is hard to sit still.`,
                name: `5`,
                options: [`0. Not at all`,`1. Several days`,`2. More than half the days`,`3. Nearly every day`],
                required:true
            },
            {
                prompt: `Attention Check: Choose "3 Nearly every day" to indicate you payed attention`,
                name: `AC`,
                options: [`0. Not at all`,`1. Several days`,`2. More than half the days`,`3. Nearly every day`],
                required:true
            },
            {
                prompt: `6. Becoming easily annoyed or irritable.`,
                name: `6`,
                options: [`0. Not at all`,`1. Several days`,`2. More than half the days`,`3. Nearly every day`],
                required:true
            },
            {
                prompt: `7. Feeling afraid as if something awful might happen.`,
                name: `7`,
                options: [`0. Not at all`,`1. Several days`,`2. More than half the days`,`3. Nearly every day`],
                required:true
            },
        ]
    } else {
        questionsGAD7 = [
            {
                prompt: `1. Feeling nervous, anxious or on edge.`,
                name: `1`,
                options: [`0. Not at all`,`1. Several days`,`2. More than half the days`,`3. Nearly every day`],
                required:true
            },
            {
                prompt: `2. Not being able to stop or control worrying.`,
                name: `2`,
                options: [`0. Not at all`,`1. Several days`,`2. More than half the days`,`3. Nearly every day`],
                required:true
            },
            {
                prompt: `3. Worrying too much about different things.`,
                name: `3`,
                options: [`0. Not at all`,`1. Several days`,`2. More than half the days`,`3. Nearly every day`],
                required:true
            },
            {
                prompt: `4. Trouble relaxing.`,
                name: `4`,
                options: [`0. Not at all`,`1. Several days`,`2. More than half the days`,`3. Nearly every day`],
                required:true
            },
            {
                prompt: `5. Being so restless that it is hard to sit still.`,
                name: `5`,
                options: [`0. Not at all`,`1. Several days`,`2. More than half the days`,`3. Nearly every day`],
                required:true
            },
            {
                prompt: `6. Becoming easily annoyed or irritable.`,
                name: `6`,
                options: [`0. Not at all`,`1. Several days`,`2. More than half the days`,`3. Nearly every day`],
                required:true
            },
            {
                prompt: `7. Feeling afraid as if something awful might happen.`,
                name: `7`,
                options: [`0. Not at all`,`1. Several days`,`2. More than half the days`,`3. Nearly every day`],
                required:true
            },
        ]
    }

    let GAD7 = {
        type: jsPsychSurveyMultiChoice,
        preamble:`GAD-7 Anxiety <br/> <br/> 
        Over the last two weeks, how often have you been bothered by the following problems? `,
        questions:questionsGAD7,
        data:{
            category: "GAD7",
        }

    }
    return GAD7
}