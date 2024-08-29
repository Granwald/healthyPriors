function PHQ9(includeAttentionChecks){
    let questionsPHQ9 = []; 

    if(includeAttentionChecks == 1) {
        questionsPHQ9 =[
            {
                prompt: `1. Little interest or pleasure in doing things`,
                name: `1`,
                options: [`0. Not at all`,`1. Several days`,`2. More than half the days`,`3. Nearly every day`],
                required:true
            },
            {
                prompt: `2. Feeling down, depressed, or hopeless `,
                name: `2`,
                options: [`0. Not at all`,`1. Several days`,`2. More than half the days`,`3. Nearly every day`],
                required:true
            },
            {
                prompt: `3. Trouble falling or staying asleep, or sleeping too much `,
                name: `3`,
                options: [`0. Not at all`,`1. Several days`,`2. More than half the days`,`3. Nearly every day`],
                required:true
            },
            {
                prompt: `4. Feeling tired or having little energy`,
                name: `4`,
                options: [`0. Not at all`,`1. Several days`,`2. More than half the days`,`3. Nearly every day`],
                required:true
            },
            {
                prompt: `This is an attention check. Pick the option "2. More than half the days" to indicate that you payed attention.`,
                name: `AC`,
                options: [`0. Not at all`,`1. Several days`,`2. More than half the days`,`3. Nearly every day`],
                required:true
            },
            {
                prompt: `5. Poor appetite or overeating `,
                name: `5`,
                options: [`0. Not at all`,`1. Several days`,`2. More than half the days`,`3. Nearly every day`],
                required:true
            },
            {
                prompt: `6. Feeling bad about yourself — or that you are a failure or have let yourself or your family down`,
                name: `6`,
                options: [`0. Not at all`,`1. Several days`,`2. More than half the days`,`3. Nearly every day`],
                required:true
            },
            {
                prompt: `7. Trouble concentrating on things, such as reading the newspaper or watching television`,
                name: `7`,
                options: [`0. Not at all`,`1. Several days`,`2. More than half the days`,`3. Nearly every day`],
                required:true
            },
            {
                prompt: `8. Moving or speaking so slowly that other people could have noticed? 
                Or the opposite — being so fidgety or restless that you have been moving around a lot more than usual`,
                name: `8`,
                options: [`0. Not at all`,`1. Several days`,`2. More than half the days`,`3. Nearly every day`],
                required:true
            },
            {
                prompt: `9. Thoughts that you would be better off dead or of hurting yourself in some way`,
                name: `9`,
                options: [`0. Not at all`,`1. Several days`,`2. More than half the days`,`3. Nearly every day`],
                required:true
            },
            {
                prompt: `If you checked off any problems, how difficult have these problems made it for you to do your work, take care of things at home, or get along with other people?`,
                name: `difficulty`,
                options: [`Not difficult at all`,`Somewhat difficult`,`Very difficult`,`Extremely difficult`],
                required:true
            },
        ]

    } else {
        questionsPHQ9 =[
            {
                prompt: `1. Little interest or pleasure in doing things`,
                name: `1`,
                options: [`0. Not at all`,`1. Several days`,`2. More than half the days`,`3. Nearly every day`],
                required:true
            },
            {
                prompt: `2. Feeling down, depressed, or hopeless `,
                name: `2`,
                options: [`0. Not at all`,`1. Several days`,`2. More than half the days`,`3. Nearly every day`],
                required:true
            },
            {
                prompt: `3. Trouble falling or staying asleep, or sleeping too much `,
                name: `3`,
                options: [`0. Not at all`,`1. Several days`,`2. More than half the days`,`3. Nearly every day`],
                required:true
            },
            {
                prompt: `4. Feeling tired or having little energy`,
                name: `4`,
                options: [`0. Not at all`,`1. Several days`,`2. More than half the days`,`3. Nearly every day`],
                required:true
            },
            {
                prompt: `5. Poor appetite or overeating `,
                name: `5`,
                options: [`0. Not at all`,`1. Several days`,`2. More than half the days`,`3. Nearly every day`],
                required:true
            },
            {
                prompt: `6. Feeling bad about yourself — or that you are a failure or have let yourself or your family down`,
                name: `6`,
                options: [`0. Not at all`,`1. Several days`,`2. More than half the days`,`3. Nearly every day`],
                required:true
            },
            {
                prompt: `7. Trouble concentrating on things, such as reading the newspaper or watching television`,
                name: `7`,
                options: [`0. Not at all`,`1. Several days`,`2. More than half the days`,`3. Nearly every day`],
                required:true
            },
            {
                prompt: `8. Moving or speaking so slowly that other people could have noticed? 
                Or the opposite — being so fidgety or restless that you have been moving around a lot more than usual`,
                name: `8`,
                options: [`0. Not at all`,`1. Several days`,`2. More than half the days`,`3. Nearly every day`],
                required:true
            },
            {
                prompt: `9. Thoughts that you would be better off dead or of hurting yourself in some way`,
                name: `9`,
                options: [`0. Not at all`,`1. Several days`,`2. More than half the days`,`3. Nearly every day`],
                required:true
            },
            {
                prompt: `If you checked off any problems, how difficult have these problems made it for you to do your work, take care of things at home, or get along with other people?`,
                name: `difficulty`,
                options: [`Not difficult at all`,`Somewhat difficult`,`Very difficult`,`Extremely difficult`],
                required:true
            },
        ]
    }

    let PHQ9 = {
        type: jsPsychSurveyMultiChoice,
        preamble: `<h1>PATIENT HEALTH QUESTIONNAIRE-9</h1>
            <p>Over the last 2 weeks, how often have you been bothered by any of the following problems?</p>`,
        questions: questionsPHQ9,
        data: {
            category: "PHQ9",
        }
    };
    return PHQ9
}
