function SDS(includeAttentionChecks){
    let questionsSDS = []; 

    if(includeAttentionChecks == 1) {
        questionsSDS = [ 
            {
                prompt: `1. I feel down-hearted and blue.`,
                name: `1`,
                options: [`1. A little of the time`,`2. Some of the time`,`3. Good part of the time`,`4. Most of the time`],
                required:true
            },
            {
                prompt: `2. Morning is when I feel the best.`,
                name: `2`,
                options: [`1. A little of the time`,`2. Some of the time`,`3. Good part of the time`,`4. Most of the time`],
                required:true
            },
            {
                prompt: `3. I have crying spells or feel like it.`,
                name: `3`,
                options: [`1. A little of the time`,`2. Some of the time`,`3. Good part of the time`,`4. Most of the time`],
                required:true
            },
            {
                prompt: `4. I have trouble sleeping at night`,
                name: `4`,
                options: [`1. A little of the time`,`2. Some of the time`,`3. Good part of the time`,`4. Most of the time`],
                required:true
            },
            {
                prompt: `5. I eat as much as I used to.`,
                name: `5`,
                options: [`1. A little of the time`,`2. Some of the time`,`3. Good part of the time`,`4. Most of the time`],
                required:true
            },
            {
                prompt: `6. I still enjoy sex.`,
                name: `6`,
                options: [`1. A little of the time`,`2. Some of the time`,`3. Good part of the time`,`4. Most of the time`],
                required:true
            },
            {
                prompt: `7. I notice that I am losing weight.`,
                name: `7`,
                options: [`1. A little of the time`,`2. Some of the time`,`3. Good part of the time`,`4. Most of the time`],
                required:true
            },
            {
                prompt: `8. I have trouble with constipation.`,
                name: `8`,
                options: [`1. A little of the time`,`2. Some of the time`,`3. Good part of the time`,`4. Most of the time`],
                required:true
            },
            {
                prompt: `9. My heart beats faster than usual.`,
                name: `9`,
                options: [`1. A little of the time`,`2. Some of the time`,`3. Good part of the time`,`4. Most of the time`],
                required:true
            },
            {
                prompt: `10. I get tired for no reason.`,
                name: `10`,
                options: [`1. A little of the time`,`2. Some of the time`,`3. Good part of the time`,`4. Most of the time`],
                required:true
            },
            {
                prompt: `11. My mind is as clear as it used to be.`,
                name: `11`,
                options: [`1. A little of the time`,`2. Some of the time`,`3. Good part of the time`,`4. Most of the time`],
                required:true
            },
            {
                prompt: `12. I find it easy to do the things I used to`,
                name: `12`,
                options: [`1. A little of the time`,`2. Some of the time`,`3. Good part of the time`,`4. Most of the time`],
                required:true
            },
            {
                prompt: `13. I am restless and can't keep still.`,
                name: `13`,
                options: [`1. A little of the time`,`2. Some of the time`,`3. Good part of the time`,`4. Most of the time`],
                required:true
            },
            {
                prompt: `14. I feel hopeful about the future.`,
                name: `14`,
                options: [`1. A little of the time`,`2. Some of the time`,`3. Good part of the time`,`4. Most of the time`],
                required:true
            },
            {
                prompt: `15. I am more irritable than usual.`,
                name: `15`,
                options: [`1. A little of the time`,`2. Some of the time`,`3. Good part of the time`,`4. Most of the time`],
                required:true
            },
            {
                prompt: `16. I find it easy to make decisions.`,
                name: `16`,
                options: [`1. A little of the time`,`2. Some of the time`,`3. Good part of the time`,`4. Most of the time`],
                required:true
            },
            {
                prompt: `17. I feel that I am useful and needed.`,
                name: `17`,
                options: [`1. A little of the time`,`2. Some of the time`,`3. Good part of the time`,`4. Most of the time`],
                required:true
            },
            {
                prompt: `Attention Check: Select the option "2. Some of the time".`,
                name: `AC`,
                options: [`1. A little of the time`,`2. Some of the time`,`3. Good part of the time`,`4. Most of the time`],
                required:true
            },
            {
                prompt: `18. My life is pretty full.`,
                name: `18`,
                options: [`1. A little of the time`,`2. Some of the time`,`3. Good part of the time`,`4. Most of the time`],
                required:true
            },
            {
                prompt: `19. . I feel that others would be better off if I were dead.`,
                name: `19`,
                options: [`1. A little of the time`,`2. Some of the time`,`3. Good part of the time`,`4. Most of the time`],
                required:true
            },
            {
                prompt: `20. I still enjoy the things I used to do`,
                name: `20`,
                options: [`1. A little of the time`,`2. Some of the time`,`3. Good part of the time`,`4. Most of the time`],
                required:true
            },
        ]
    } else {
        questionsSDS =[ 
            {
                prompt: `1. I feel down-hearted and blue.`,
                name: `1`,
                options: [`1. A little of the time`,`2. Some of the time`,`3. Good part of the time`,`4. Most of the time`],
                required:true
            },
            {
                prompt: `2. Morning is when I feel the best.`,
                name: `2`,
                options: [`1. A little of the time`,`2. Some of the time`,`3. Good part of the time`,`4. Most of the time`],
                required:true
            },
            {
                prompt: `3. I have crying spells or feel like it.`,
                name: `3`,
                options: [`1. A little of the time`,`2. Some of the time`,`3. Good part of the time`,`4. Most of the time`],
                required:true
            },
            {
                prompt: `4. I have trouble sleeping at night`,
                name: `4`,
                options: [`1. A little of the time`,`2. Some of the time`,`3. Good part of the time`,`4. Most of the time`],
                required:true
            },
            {
                prompt: `5. I eat as much as I used to.`,
                name: `5`,
                options: [`1. A little of the time`,`2. Some of the time`,`3. Good part of the time`,`4. Most of the time`],
                required:true
            },
            {
                prompt: `6. I still enjoy sex.`,
                name: `6`,
                options: [`1. A little of the time`,`2. Some of the time`,`3. Good part of the time`,`4. Most of the time`],
                required:true
            },
            {
                prompt: `7. I notice that I am losing weight.`,
                name: `7`,
                options: [`1. A little of the time`,`2. Some of the time`,`3. Good part of the time`,`4. Most of the time`],
                required:true
            },
            {
                prompt: `8. I have trouble with constipation.`,
                name: `8`,
                options: [`1. A little of the time`,`2. Some of the time`,`3. Good part of the time`,`4. Most of the time`],
                required:true
            },
            {
                prompt: `9. My heart beats faster than usual.`,
                name: `9`,
                options: [`1. A little of the time`,`2. Some of the time`,`3. Good part of the time`,`4. Most of the time`],
                required:true
            },
            {
                prompt: `10. I get tired for no reason.`,
                name: `10`,
                options: [`1. A little of the time`,`2. Some of the time`,`3. Good part of the time`,`4. Most of the time`],
                required:true
            },
            {
                prompt: `11. My mind is as clear as it used to be.`,
                name: `11`,
                options: [`1. A little of the time`,`2. Some of the time`,`3. Good part of the time`,`4. Most of the time`],
                required:true
            },
            {
                prompt: `12. I find it easy to do the things I used to`,
                name: `12`,
                options: [`1. A little of the time`,`2. Some of the time`,`3. Good part of the time`,`4. Most of the time`],
                required:true
            },
            {
                prompt: `13. I am restless and can't keep still.`,
                name: `13`,
                options: [`1. A little of the time`,`2. Some of the time`,`3. Good part of the time`,`4. Most of the time`],
                required:true
            },
            {
                prompt: `14. I feel hopeful about the future.`,
                name: `14`,
                options: [`1. A little of the time`,`2. Some of the time`,`3. Good part of the time`,`4. Most of the time`],
                required:true
            },
            {
                prompt: `15. I am more irritable than usual.`,
                name: `15`,
                options: [`1. A little of the time`,`2. Some of the time`,`3. Good part of the time`,`4. Most of the time`],
                required:true
            },
            {
                prompt: `16. I find it easy to make decisions.`,
                name: `16`,
                options: [`1. A little of the time`,`2. Some of the time`,`3. Good part of the time`,`4. Most of the time`],
                required:true
            },
            {
                prompt: `17. I feel that I am useful and needed.`,
                name: `17`,
                options: [`1. A little of the time`,`2. Some of the time`,`3. Good part of the time`,`4. Most of the time`],
                required:true
            },
            {
                prompt: `18. My life is pretty full.`,
                name: `18`,
                options: [`1. A little of the time`,`2. Some of the time`,`3. Good part of the time`,`4. Most of the time`],
                required:true
            },
            {
                prompt: `19. . I feel that others would be better off if I were dead.`,
                name: `19`,
                options: [`1. A little of the time`,`2. Some of the time`,`3. Good part of the time`,`4. Most of the time`],
                required:true
            },
            {
                prompt: `20. I still enjoy the things I used to do`,
                name: `20`,
                options: [`1. A little of the time`,`2. Some of the time`,`3. Good part of the time`,`4. Most of the time`],
                required:true
            },
        ]
    }
    let SDS = {
        type: jsPsychSurveyMultiChoice,
        preamble:`Zung Self-Rating Depression Scale (SDS) <br/> <br/>
        For each item below, please select the option which best describes how often you felt or behaved this way during the past several days.`,
        questions:questionsSDS,
        data:{
            category: "SDS",
        }

    }
    return SDS
};