function PANAS(includeAttentionChecks){
    let questionsPANAS = []; 

    if(includeAttentionChecks == 1) {
        questionsPANAS = [
            {
                prompt: `1. Interested`,
                name: `1`,
                options: [`1. Very Slightly or Not at All`,`2. A Little`,`3. Moderately `,`4. Quite a Bit`, `5. Extremely`],
                required:true
            },
            {
                prompt: `2. Distressed`,
                name: `2`,
                options: [`1. Very Slightly or Not at All`,`2. A Little`,`3. Moderately `,`4. Quite a Bit`, `5. Extremely`],
                required:true
            },
            {
                prompt: `3. Excited`,
                name: `3`,
                options: [`1. Very Slightly or Not at All`,`2. A Little`,`3. Moderately `,`4. Quite a Bit`, `5. Extremely`],
                required:true
            },
            {
                prompt: `4. Upset`,
                name: `4`,
                options: [`1. Very Slightly or Not at All`,`2. A Little`,`3. Moderately `,`4. Quite a Bit`, `5. Extremely`],
                required:true
            },
            {
                prompt: `5. Strong`,
                name: `5`,
                options: [`1. Very Slightly or Not at All`,`2. A Little`,`3. Moderately `,`4. Quite a Bit`, `5. Extremely`],
                required:true
            },
            {
                prompt: `6. Guilty`,
                name: `6`,
                options: [`1. Very Slightly or Not at All`,`2. A Little`,`3. Moderately `,`4. Quite a Bit`, `5. Extremely`],
                required:true
            },
            {
                prompt: `7. Scared`,
                name: `7`,
                options: [`1. Very Slightly or Not at All`,`2. A Little`,`3. Moderately `,`4. Quite a Bit`, `5. Extremely`],
                required:true
            },
            {
                prompt: `8. Hostile`,
                name: `8`,
                options: [`1. Very Slightly or Not at All`,`2. A Little`,`3. Moderately `,`4. Quite a Bit`, `5. Extremely`],
                required:true
            },
            {
                prompt: `9. Enthusiastic`,
                name: `9`,
                options: [`1. Very Slightly or Not at All`,`2. A Little`,`3. Moderately `,`4. Quite a Bit`, `5. Extremely`],
                required:true
            },
            {
                prompt: `10. Proud`,
                name: `10`,
                options: [`1. Very Slightly or Not at All`,`2. A Little`,`3. Moderately `,`4. Quite a Bit`, `5. Extremely`],
                required:true
            },
            {
                prompt: `11. Irritable`,
                name: `11`,
                options: [`1. Very Slightly or Not at All`,`2. A Little`,`3. Moderately `,`4. Quite a Bit`, `5. Extremely`],
                required:true
            },
            {
                prompt: `12. Alert`,
                name: `12`,
                options: [`1. Very Slightly or Not at All`,`2. A Little`,`3. Moderately `,`4. Quite a Bit`, `5. Extremely`],
                required:true
            },
            {
                prompt: `13. Ashamed`,
                name: `13`,
                options: [`1. Very Slightly or Not at All`,`2. A Little`,`3. Moderately `,`4. Quite a Bit`, `5. Extremely`],
                required:true
            },
            {
                prompt: `14. Inspired`,
                name: `14`,
                options: [`1. Very Slightly or Not at All`,`2. A Little`,`3. Moderately `,`4. Quite a Bit`, `5. Extremely`],
                required:true
            },
            {
                prompt: `15. Nervous`,
                name: `15`,
                options: [`1. Very Slightly or Not at All`,`2. A Little`,`3. Moderately `,`4. Quite a Bit`, `5. Extremely`],
                required:true
            },
            {
                prompt: `16. Determined`,
                name: `16`,
                options: [`1. Very Slightly or Not at All`,`2. A Little`,`3. Moderately `,`4. Quite a Bit`, `5. Extremely`],
                required:true
            },
            {
                prompt: `17. Attentive`,
                name: `17`,
                options: [`1. Very Slightly or Not at All`,`2. A Little`,`3. Moderately `,`4. Quite a Bit`, `5. Extremely`],
                required:true
            },
            {
                prompt: `18. Jittery`,
                name: `18`,
                options: [`1. Very Slightly or Not at All`,`2. A Little`,`3. Moderately `,`4. Quite a Bit`, `5. Extremely`],
                required:true
            },
            {
                prompt: `Attention Check:`,
                name: `AC`,
                options: [`1. Choose this option`,`2. Not this option`,`3. Don't pick this`,`4. Do not click this option`, `5. Not this option either`],
                required:true
            },
            {
                prompt: `19. Active`,
                name: `19`,
                options: [`1. Very Slightly or Not at All`,`2. A Little`,`3. Moderately `,`4. Quite a Bit`, `5. Extremely`],
                required:true
            },
            {
                prompt: `20. Afraid`,
                name: `20`,
                options: [`1. Very Slightly or Not at All`,`2. A Little`,`3. Moderately `,`4. Quite a Bit`, `5. Extremely`],
                required:true
            },
        ]
    } else {
        questionsPANAS =  [
            {
                prompt: `1. Interested`,
                name: `1`,
                options: [`1. Very Slightly or Not at All`,`2. A Little`,`3. Moderately `,`4. Quite a Bit`, `5. Extremely`],
                required:true
            },
            {
                prompt: `2. Distressed`,
                name: `2`,
                options: [`1. Very Slightly or Not at All`,`2. A Little`,`3. Moderately `,`4. Quite a Bit`, `5. Extremely`],
                required:true
            },
            {
                prompt: `3. Excited`,
                name: `3`,
                options: [`1. Very Slightly or Not at All`,`2. A Little`,`3. Moderately `,`4. Quite a Bit`, `5. Extremely`],
                required:true
            },
            {
                prompt: `4. Upset`,
                name: `4`,
                options: [`1. Very Slightly or Not at All`,`2. A Little`,`3. Moderately `,`4. Quite a Bit`, `5. Extremely`],
                required:true
            },
            {
                prompt: `5. Strong`,
                name: `5`,
                options: [`1. Very Slightly or Not at All`,`2. A Little`,`3. Moderately `,`4. Quite a Bit`, `5. Extremely`],
                required:true
            },
            {
                prompt: `6. Guilty`,
                name: `6`,
                options: [`1. Very Slightly or Not at All`,`2. A Little`,`3. Moderately `,`4. Quite a Bit`, `5. Extremely`],
                required:true
            },
            {
                prompt: `7. Scared`,
                name: `7`,
                options: [`1. Very Slightly or Not at All`,`2. A Little`,`3. Moderately `,`4. Quite a Bit`, `5. Extremely`],
                required:true
            },
            {
                prompt: `8. Hostile`,
                name: `8`,
                options: [`1. Very Slightly or Not at All`,`2. A Little`,`3. Moderately `,`4. Quite a Bit`, `5. Extremely`],
                required:true
            },
            {
                prompt: `9. Enthusiastic`,
                name: `9`,
                options: [`1. Very Slightly or Not at All`,`2. A Little`,`3. Moderately `,`4. Quite a Bit`, `5. Extremely`],
                required:true
            },
            {
                prompt: `10. Proud`,
                name: `10`,
                options: [`1. Very Slightly or Not at All`,`2. A Little`,`3. Moderately `,`4. Quite a Bit`, `5. Extremely`],
                required:true
            },
            {
                prompt: `11. Irritable`,
                name: `11`,
                options: [`1. Very Slightly or Not at All`,`2. A Little`,`3. Moderately `,`4. Quite a Bit`, `5. Extremely`],
                required:true
            },
            {
                prompt: `12. Alert`,
                name: `12`,
                options: [`1. Very Slightly or Not at All`,`2. A Little`,`3. Moderately `,`4. Quite a Bit`, `5. Extremely`],
                required:true
            },
            {
                prompt: `13. Ashamed`,
                name: `13`,
                options: [`1. Very Slightly or Not at All`,`2. A Little`,`3. Moderately `,`4. Quite a Bit`, `5. Extremely`],
                required:true
            },
            {
                prompt: `14. Inspired`,
                name: `14`,
                options: [`1. Very Slightly or Not at All`,`2. A Little`,`3. Moderately `,`4. Quite a Bit`, `5. Extremely`],
                required:true
            },
            {
                prompt: `15. Nervous`,
                name: `15`,
                options: [`1. Very Slightly or Not at All`,`2. A Little`,`3. Moderately `,`4. Quite a Bit`, `5. Extremely`],
                required:true
            },
            {
                prompt: `16. Determined`,
                name: `16`,
                options: [`1. Very Slightly or Not at All`,`2. A Little`,`3. Moderately `,`4. Quite a Bit`, `5. Extremely`],
                required:true
            },
            {
                prompt: `17. Attentive`,
                name: `17`,
                options: [`1. Very Slightly or Not at All`,`2. A Little`,`3. Moderately `,`4. Quite a Bit`, `5. Extremely`],
                required:true
            },
            {
                prompt: `18. Jittery`,
                name: `18`,
                options: [`1. Very Slightly or Not at All`,`2. A Little`,`3. Moderately `,`4. Quite a Bit`, `5. Extremely`],
                required:true
            },
            {
                prompt: `19. Active`,
                name: `19`,
                options: [`1. Very Slightly or Not at All`,`2. A Little`,`3. Moderately `,`4. Quite a Bit`, `5. Extremely`],
                required:true
            },
            {
                prompt: `20. Afraid`,
                name: `20`,
                options: [`1. Very Slightly or Not at All`,`2. A Little`,`3. Moderately `,`4. Quite a Bit`, `5. Extremely`],
                required:true
            },
        ]
    }

    let PANAS = {
        type: jsPsychSurveyMultiChoice,
        preamble: `<h1>PANAS Questionnaire</h1>
            <p>This scale consists of a number of words that describe different feelings and emotions. 
            Read each item and then list the number from the scale below next to each word. 
            Indicate the extent you have felt this way over the past week </p>`,
        questions:questionsPANAS,
        data: {
            category: "PANAS",
        }
    };
    return PANAS
}
