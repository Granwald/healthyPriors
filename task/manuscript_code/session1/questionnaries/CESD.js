function CESD(includeAttentionChecks){
    
    let questionsCESD = []; 

    if(includeAttentionChecks == 1) {
        questionsCESD = [
            {
                prompt: `1. I was bothered by things that usually don't bother me.`,
                name: `1`,
                options: [`0. Rarely or none of the time (less than 1 day )`,
                `1. Some or a little of the time (1-2 days)`,
                `2. Occasionally or a moderate amount of time (3-4 days) `,
                `3. Most or all of the time (5-7 days)`],
                required:true
            },
            {
                prompt: `2. I did not feel like eating; my appetite was poor.`,
                name: `2`,
                options: [`0. Rarely or none of the time (less than 1 day )`,
                `1. Some or a little of the time (1-2 days)`,
                `2. Occasionally or a moderate amount of time (3-4 days) `,
                `3. Most or all of the time (5-7 days)`],
                required:true
            },
            {
                prompt: `3. I felt that I could not shake off the blues even with help from my family or friends.`,
                name: `3`,
                options: [`0. Rarely or none of the time (less than 1 day )`,
                `1. Some or a little of the time (1-2 days)`,
                `2. Occasionally or a moderate amount of time (3-4 days) `,
                `3. Most or all of the time (5-7 days)`],
                required:true
            },
            {
                prompt: `4. I felt I was just as good as other people.`,
                name: `4`,
                options: [`0. Rarely or none of the time (less than 1 day )`,
                `1. Some or a little of the time (1-2 days)`,
                `2. Occasionally or a moderate amount of time (3-4 days) `,
                `3. Most or all of the time (5-7 days)`],
                required:true
            },
            {
                prompt: `5. I had trouble keeping my mind on what I was doing.`,
                name: `5`,
                options: [`0. Rarely or none of the time (less than 1 day )`,
                `1. Some or a little of the time (1-2 days)`,
                `2. Occasionally or a moderate amount of time (3-4 days) `,
                `3. Most or all of the time (5-7 days)`],
                required:true
            },
            {
                prompt: `6. I felt depressed.`,
                name: `6`,
                options: [`0. Rarely or none of the time (less than 1 day )`,
                `1. Some or a little of the time (1-2 days)`,
                `2. Occasionally or a moderate amount of time (3-4 days) `,
                `3. Most or all of the time (5-7 days)`],
                required:true
            },
            {
                prompt: `7. I felt that everything I did was an effort.`,
                name: `7`,
                options: [`0. Rarely or none of the time (less than 1 day )`,
                `1. Some or a little of the time (1-2 days)`,
                `2. Occasionally or a moderate amount of time (3-4 days) `,
                `3. Most or all of the time (5-7 days)`],
                required:true
            },
            {
                prompt: `8. I felt hopeful about the future.`,
                name: `8`,
                options: [`0. Rarely or none of the time (less than 1 day )`,
                `1. Some or a little of the time (1-2 days)`,
                `2. Occasionally or a moderate amount of time (3-4 days) `,
                `3. Most or all of the time (5-7 days)`],
                required:true
            },
            {
                prompt: `9. I thought my life had been a failure.`,
                name: `9`,
                options: [`0. Rarely or none of the time (less than 1 day )`,
                `1. Some or a little of the time (1-2 days)`,
                `2. Occasionally or a moderate amount of time (3-4 days) `,
                `3. Most or all of the time (5-7 days)`],
                required:true
            },
            {
                prompt: `10. I felt fearful.`,
                name: `10`,
                options: [`0. Rarely or none of the time (less than 1 day )`,
                `1. Some or a little of the time (1-2 days)`,
                `2. Occasionally or a moderate amount of time (3-4 days) `,
                `3. Most or all of the time (5-7 days)`],
                required:true
            },
            {
                prompt: `11. My sleep was restless`,
                name: `11`,
                options: [`0. Rarely or none of the time (less than 1 day )`,
                `1. Some or a little of the time (1-2 days)`,
                `2. Occasionally or a moderate amount of time (3-4 days) `,
                `3. Most or all of the time (5-7 days)`],
                required:true
            },
            {
                prompt: `12. I was happy.`,
                name: `12`,
                options: [`0. Rarely or none of the time (less than 1 day )`,
                `1. Some or a little of the time (1-2 days)`,
                `2. Occasionally or a moderate amount of time (3-4 days) `,
                `3. Most or all of the time (5-7 days)`],
                required:true
            },
            {
                prompt: `Attention check:`,
                name: `AC`,
                options: [`0. Do not select this`,
                `1. Do not select this option`,
                `2. Choose this option to indicate that you payed attention `,
                `3. Don't choose this option`],
                required:true
            },
            {
                prompt: `13. I talked less than usual.`,
                name: `13`,
                options: [`0. Rarely or none of the time (less than 1 day )`,
                `1. Some or a little of the time (1-2 days)`,
                `2. Occasionally or a moderate amount of time (3-4 days) `,
                `3. Most or all of the time (5-7 days)`],
                required:true
            },
            {
                prompt: `14. I felt lonely.`,
                name: `14`,
                options: [`0. Rarely or none of the time (less than 1 day )`,
                `1. Some or a little of the time (1-2 days)`,
                `2. Occasionally or a moderate amount of time (3-4 days) `,
                `3. Most or all of the time (5-7 days)`],
                required:true
            },
            {
                prompt: `15. People were unfriendly.`,
                name: `15`,
                options: [`0. Rarely or none of the time (less than 1 day )`,
                `1. Some or a little of the time (1-2 days)`,
                `2. Occasionally or a moderate amount of time (3-4 days) `,
                `3. Most or all of the time (5-7 days)`],
                required:true
            },
            {
                prompt: `16. I enjoyed life.`,
                name: `16`,
                options: [`0. Rarely or none of the time (less than 1 day )`,
                `1. Some or a little of the time (1-2 days)`,
                `2. Occasionally or a moderate amount of time (3-4 days) `,
                `3. Most or all of the time (5-7 days)`],
                required:true
            },
            {
                prompt: `17. I had crying spells.`,
                name: `17`,
                options: [`0. Rarely or none of the time (less than 1 day )`,
                `1. Some or a little of the time (1-2 days)`,
                `2. Occasionally or a moderate amount of time (3-4 days) `,
                `3. Most or all of the time (5-7 days)`],
                required:true
            },
            {
                prompt: `18. I felt sad.`,
                name: `18`,
                options: [`0. Rarely or none of the time (less than 1 day )`,
                `1. Some or a little of the time (1-2 days)`,
                `2. Occasionally or a moderate amount of time (3-4 days) `,
                `3. Most or all of the time (5-7 days)`],
                required:true
            },
            {
                prompt: `19. I felt that people dislike me.`,
                name: `19`,
                options: [`0. Rarely or none of the time (less than 1 day )`,
                `1. Some or a little of the time (1-2 days)`,
                `2. Occasionally or a moderate amount of time (3-4 days) `,
                `3. Most or all of the time (5-7 days)`],
                required:true
            },
            {
                prompt: `20. I could not get “going.”`,
                name: `20`,
                options: [`0. Rarely or none of the time (less than 1 day )`,
                `1. Some or a little of the time (1-2 days)`,
                `2. Occasionally or a moderate amount of time (3-4 days) `,
                `3. Most or all of the time (5-7 days)`],
                required:true
            },
        ]
        } else {
            questionsCESD =[
                {
                    prompt: `1. I was bothered by things that usually don't bother me.`,
                    name: `1`,
                    options: [`0. Rarely or none of the time (less than 1 day )`,
                    `1. Some or a little of the time (1-2 days)`,
                    `2. Occasionally or a moderate amount of time (3-4 days) `,
                    `3. Most or all of the time (5-7 days)`],
                    required:true
                },
                {
                    prompt: `2. I did not feel like eating; my appetite was poor.`,
                    name: `2`,
                    options: [`0. Rarely or none of the time (less than 1 day )`,
                    `1. Some or a little of the time (1-2 days)`,
                    `2. Occasionally or a moderate amount of time (3-4 days) `,
                    `3. Most or all of the time (5-7 days)`],
                    required:true
                },
                {
                    prompt: `3. I felt that I could not shake off the blues even with help from my family or friends.`,
                    name: `3`,
                    options: [`0. Rarely or none of the time (less than 1 day )`,
                    `1. Some or a little of the time (1-2 days)`,
                    `2. Occasionally or a moderate amount of time (3-4 days) `,
                    `3. Most or all of the time (5-7 days)`],
                    required:true
                },
                {
                    prompt: `4. I felt I was just as good as other people.`,
                    name: `4`,
                    options: [`0. Rarely or none of the time (less than 1 day )`,
                    `1. Some or a little of the time (1-2 days)`,
                    `2. Occasionally or a moderate amount of time (3-4 days) `,
                    `3. Most or all of the time (5-7 days)`],
                    required:true
                },
                {
                    prompt: `5. I had trouble keeping my mind on what I was doing.`,
                    name: `5`,
                    options: [`0. Rarely or none of the time (less than 1 day )`,
                    `1. Some or a little of the time (1-2 days)`,
                    `2. Occasionally or a moderate amount of time (3-4 days) `,
                    `3. Most or all of the time (5-7 days)`],
                    required:true
                },
                {
                    prompt: `6. I felt depressed.`,
                    name: `6`,
                    options: [`0. Rarely or none of the time (less than 1 day )`,
                    `1. Some or a little of the time (1-2 days)`,
                    `2. Occasionally or a moderate amount of time (3-4 days) `,
                    `3. Most or all of the time (5-7 days)`],
                    required:true
                },
                {
                    prompt: `7. I felt that everything I did was an effort.`,
                    name: `7`,
                    options: [`0. Rarely or none of the time (less than 1 day )`,
                    `1. Some or a little of the time (1-2 days)`,
                    `2. Occasionally or a moderate amount of time (3-4 days) `,
                    `3. Most or all of the time (5-7 days)`],
                    required:true
                },
                {
                    prompt: `8. I felt hopeful about the future.`,
                    name: `8`,
                    options: [`0. Rarely or none of the time (less than 1 day )`,
                    `1. Some or a little of the time (1-2 days)`,
                    `2. Occasionally or a moderate amount of time (3-4 days) `,
                    `3. Most or all of the time (5-7 days)`],
                    required:true
                },
                {
                    prompt: `9. I thought my life had been a failure.`,
                    name: `9`,
                    options: [`0. Rarely or none of the time (less than 1 day )`,
                    `1. Some or a little of the time (1-2 days)`,
                    `2. Occasionally or a moderate amount of time (3-4 days) `,
                    `3. Most or all of the time (5-7 days)`],
                    required:true
                },
                {
                    prompt: `10. I felt fearful.`,
                    name: `10`,
                    options: [`0. Rarely or none of the time (less than 1 day )`,
                    `1. Some or a little of the time (1-2 days)`,
                    `2. Occasionally or a moderate amount of time (3-4 days) `,
                    `3. Most or all of the time (5-7 days)`],
                    required:true
                },
                {
                    prompt: `11. My sleep was restless`,
                    name: `11`,
                    options: [`0. Rarely or none of the time (less than 1 day )`,
                    `1. Some or a little of the time (1-2 days)`,
                    `2. Occasionally or a moderate amount of time (3-4 days) `,
                    `3. Most or all of the time (5-7 days)`],
                    required:true
                },
                {
                    prompt: `12. I was happy.`,
                    name: `12`,
                    options: [`0. Rarely or none of the time (less than 1 day )`,
                    `1. Some or a little of the time (1-2 days)`,
                    `2. Occasionally or a moderate amount of time (3-4 days) `,
                    `3. Most or all of the time (5-7 days)`],
                    required:true
                },
        
                {
                    prompt: `13. I talked less than usual.`,
                    name: `13`,
                    options: [`0. Rarely or none of the time (less than 1 day )`,
                    `1. Some or a little of the time (1-2 days)`,
                    `2. Occasionally or a moderate amount of time (3-4 days) `,
                    `3. Most or all of the time (5-7 days)`],
                    required:true
                },
                {
                    prompt: `14. I felt lonely.`,
                    name: `14`,
                    options: [`0. Rarely or none of the time (less than 1 day )`,
                    `1. Some or a little of the time (1-2 days)`,
                    `2. Occasionally or a moderate amount of time (3-4 days) `,
                    `3. Most or all of the time (5-7 days)`],
                    required:true
                },
                {
                    prompt: `15. People were unfriendly.`,
                    name: `15`,
                    options: [`0. Rarely or none of the time (less than 1 day )`,
                    `1. Some or a little of the time (1-2 days)`,
                    `2. Occasionally or a moderate amount of time (3-4 days) `,
                    `3. Most or all of the time (5-7 days)`],
                    required:true
                },
                {
                    prompt: `16. I enjoyed life.`,
                    name: `16`,
                    options: [`0. Rarely or none of the time (less than 1 day )`,
                    `1. Some or a little of the time (1-2 days)`,
                    `2. Occasionally or a moderate amount of time (3-4 days) `,
                    `3. Most or all of the time (5-7 days)`],
                    required:true
                },
                {
                    prompt: `17. I had crying spells.`,
                    name: `17`,
                    options: [`0. Rarely or none of the time (less than 1 day )`,
                    `1. Some or a little of the time (1-2 days)`,
                    `2. Occasionally or a moderate amount of time (3-4 days) `,
                    `3. Most or all of the time (5-7 days)`],
                    required:true
                },
                {
                    prompt: `18. I felt sad.`,
                    name: `18`,
                    options: [`0. Rarely or none of the time (less than 1 day )`,
                    `1. Some or a little of the time (1-2 days)`,
                    `2. Occasionally or a moderate amount of time (3-4 days) `,
                    `3. Most or all of the time (5-7 days)`],
                    required:true
                },
                {
                    prompt: `19. I felt that people dislike me.`,
                    name: `19`,
                    options: [`0. Rarely or none of the time (less than 1 day )`,
                    `1. Some or a little of the time (1-2 days)`,
                    `2. Occasionally or a moderate amount of time (3-4 days) `,
                    `3. Most or all of the time (5-7 days)`],
                    required:true
                },
                {
                    prompt: `20. I could not get “going.”`,
                    name: `20`,
                    options: [`0. Rarely or none of the time (less than 1 day )`,
                    `1. Some or a little of the time (1-2 days)`,
                    `2. Occasionally or a moderate amount of time (3-4 days) `,
                    `3. Most or all of the time (5-7 days)`],
                    required:true
                },
            ]
        }


    let CESD = {
        type: jsPsychSurveyMultiChoice,
        preamble:`Center for Epidemiological Studies Depression Scale (CES-D), NIMH <br/>
        Below is a list of the ways you might have felt or behaved. Please tell me how often you have felt this way during the past week.`,
        questions: questionsCESD,
        data:{
            category: "CESD",
        }

    }
    return CESD
}
