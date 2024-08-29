function SHPS(includeAttentionChecks){
    let questionsSHPS = []; 

    if(includeAttentionChecks == 1) {
        questionsSHPS =[ 
            {
                prompt: `1. I would enjoy my favourite television or radio programme.`,
                name: `1`,
                options: [`0. Strongly Disagree`,`1. Disagree `,`2. Agree `,`3. Strongly Agree`],
                required:true
            },
            {
                prompt: `2. I would enjoy being with my family or close friends.`,
                name: `2`,
                options: [`0. Strongly Disagree`,`1. Disagree `,`2. Agree `,`3. Strongly Agree`],
                required:true
            },
            {
                prompt: `3. I would find pleasure in my hobbies and pastimes.`,
                name: `3`,
                options: [`0. Strongly Disagree`,`1. Disagree `,`2. Agree `,`3. Strongly Agree`],
                required:true
            },
            {
                prompt: `4. I would be able to enjoy my favourite meal.`,
                name: `4`,
                options: [`0. Strongly Disagree`,`1. Disagree `,`2. Agree `,`3. Strongly Agree`],
                required:true
            },
            {
                prompt: `5. I would enjoy a warm bath or refreshing shower.`,
                name: `5`,
                options: [`0. Strongly Disagree`,`1. Disagree `,`2. Agree `,`3. Strongly Agree`],
                required:true
            },
            {
                prompt: `6. I would find pleasure in the scent of flowers or the smell of a fresh sea breeze or freshly baked bread.`,
                name: `6`,
                options: [`0. Strongly Disagree`,`1. Disagree `,`2. Agree `,`3. Strongly Agree`],
                required:true
            },
            {
                prompt: `Attention Check: Choose the option "3. Strongly Agree" to indicate that you payed attention here.`,
                name: `AC`,
                options: [`0. Strongly Disagree`,`1. Disagree `,`2. Agree `,`3. Strongly Agree`],
                required:true
            },
            {
                prompt: `7. I would enjoy seeing other people's smiling faces.`,
                name: `7`,
                options: [`0. Strongly Disagree`,`1. Disagree `,`2. Agree `,`3. Strongly Agree`],
                required:true
            },
            {
                prompt: `8. I would enjoy looking smart when I have made an effort with my appearance.`,
                name: `8`,
                options: [`0. Strongly Disagree`,`1. Disagree `,`2. Agree `,`3. Strongly Agree`],
                required:true
            },
            {
                prompt: `9. I would enjoy reading a book, magazine or newspaper.`,
                name: `9`,
                options: [`0. Strongly Disagree`,`1. Disagree `,`2. Agree `,`3. Strongly Agree`],
                required:true
            },
            {
                prompt: `10. I would enjoy a cup of tea or coffee or my favorite drink.`,
                name: `10`,
                options: [`0. Strongly Disagree`,`1. Disagree `,`2. Agree `,`3. Strongly Agree`],
                required:true
            },
            {
                prompt: `11.  I would find pleasure in small things, e.g. bright sunny day, a telephone call from a friend.`,
                name: `11`,
                options: [`0. Strongly Disagree`,`1. Disagree `,`2. Agree `,`3. Strongly Agree`],
                required:true
            },
            {
                prompt: `12. I would be able to enjoy a beautiful landscape or view.`,
                name: `12`,
                options: [`0. Strongly Disagree`,`1. Disagree `,`2. Agree `,`3. Strongly Agree`],
                required:true
            },
            {
                prompt: `13. I would get pleasure from helping others.`,
                name: `13`,
                options: [`0. Strongly Disagree`,`1. Disagree `,`2. Agree `,`3. Strongly Agree`],
                required:true
            },
            {
                prompt: `14. I would feel pleasure when I receive praise from other people.`,
                name: `14`,
                options: [`0. Strongly Disagree`,`1. Disagree `,`2. Agree `,`3. Strongly Agree`],
                required:true
            },
        ]

    } else {
        questionsSHPS =[ 
            {
                prompt: `1. I would enjoy my favourite television or radio programme.`,
                name: `1`,
                options: [`0. Strongly Disagree`,`1. Disagree `,`2. Agree `,`3. Strongly Agree`],
                required:true
            },
            {
                prompt: `2. I would enjoy being with my family or close friends.`,
                name: `2`,
                options: [`0. Strongly Disagree`,`1. Disagree `,`2. Agree `,`3. Strongly Agree`],
                required:true
            },
            {
                prompt: `3. I would find pleasure in my hobbies and pastimes.`,
                name: `3`,
                options: [`0. Strongly Disagree`,`1. Disagree `,`2. Agree `,`3. Strongly Agree`],
                required:true
            },
            {
                prompt: `4. I would be able to enjoy my favourite meal.`,
                name: `4`,
                options: [`0. Strongly Disagree`,`1. Disagree `,`2. Agree `,`3. Strongly Agree`],
                required:true
            },
            {
                prompt: `5. I would enjoy a warm bath or refreshing shower.`,
                name: `5`,
                options: [`0. Strongly Disagree`,`1. Disagree `,`2. Agree `,`3. Strongly Agree`],
                required:true
            },
            {
                prompt: `6. I would find pleasure in the scent of flowers or the smell of a fresh sea breeze or freshly baked bread.`,
                name: `6`,
                options: [`0. Strongly Disagree`,`1. Disagree `,`2. Agree `,`3. Strongly Agree`],
                required:true
            },
            {
                prompt: `7. I would enjoy seeing other people's smiling faces.`,
                name: `7`,
                options: [`0. Strongly Disagree`,`1. Disagree `,`2. Agree `,`3. Strongly Agree`],
                required:true
            },
            {
                prompt: `8. I would enjoy looking smart when I have made an effort with my appearance.`,
                name: `8`,
                options: [`0. Strongly Disagree`,`1. Disagree `,`2. Agree `,`3. Strongly Agree`],
                required:true
            },
            {
                prompt: `9. I would enjoy reading a book, magazine or newspaper.`,
                name: `9`,
                options: [`0. Strongly Disagree`,`1. Disagree `,`2. Agree `,`3. Strongly Agree`],
                required:true
            },
            {
                prompt: `10. I would enjoy a cup of tea or coffee or my favorite drink.`,
                name: `10`,
                options: [`0. Strongly Disagree`,`1. Disagree `,`2. Agree `,`3. Strongly Agree`],
                required:true
            },
            {
                prompt: `11.  I would find pleasure in small things, e.g. bright sunny day, a telephone call from a friend.`,
                name: `11`,
                options: [`0. Strongly Disagree`,`1. Disagree `,`2. Agree `,`3. Strongly Agree`],
                required:true
            },
            {
                prompt: `12. I would be able to enjoy a beautiful landscape or view.`,
                name: `12`,
                options: [`0. Strongly Disagree`,`1. Disagree `,`2. Agree `,`3. Strongly Agree`],
                required:true
            },
            {
                prompt: `13. I would get pleasure from helping others.`,
                name: `13`,
                options: [`0. Strongly Disagree`,`1. Disagree `,`2. Agree `,`3. Strongly Agree`],
                required:true
            },
            {
                prompt: `14. I would feel pleasure when I receive praise from other people.`,
                name: `14`,
                options: [`0. Strongly Disagree`,`1. Disagree `,`2. Agree `,`3. Strongly Agree`],
                required:true
            },
        ]
    }

    let SHPS = {
        type: jsPsychSurveyMultiChoice,
        preamble:`<p><b>Snaith-Hamilton Pleasure Scale (SHPS)</b></p>
        <p>This questionnaire is designed to measure your ability to experience pleasure <i>in the last few days.</i><br/>
        it is important to read each statement very carefully. Choose one of the options to indicate how much you agree or disagree with each statement</p>`,
        questions:questionsSHPS,
        data:{
            category: "SHPS",
        }

    }
    return SHPS
};