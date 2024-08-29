function PSWQ(includeAttentionChecks){
        
    let questionsPSWQ = []; 

    if(includeAttentionChecks == 1) {
        questionsPSWQ =[
            {
                prompt: `1. If I do not have enough time to do everything, I do not worry about it.`,
                name: `1`,
                options: [`1. Not at all typical of me`,`2.`,`3.`,`4.`,`5. Very typical of me`],
                required:true
            },
            {
                prompt: `2. My worries overwhelm me.`,
                name: `2`,
                options: [`1. Not at all typical of me`,`2.`,`3.`,`4.`,`5. Very typical of me`],
                required:true
            },
            {
                prompt: `3. I do not tend to worry about things.`,
                name: `3`,
                options: [`1. Not at all typical of me`,`2.`,`3.`,`4.`,`5. Very typical of me`],
                required:true
            },
            {
                prompt: `4. Many situations make me worry.`,
                name: `4`,
                options: [`1. Not at all typical of me`,`2.`,`3.`,`4.`,`5. Very typical of me`],
                required:true
            },
            {
                prompt: `5. I know I should not worry about things, but I just cannot help it.`,
                name: `5`,
                options: [`1. Not at all typical of me`,`2.`,`3.`,`4.`,`5. Very typical of me`],
                required:true
            },
            {
                prompt: `Attention Check: pick "2." to indicate you payed attention here.`,
                name: `AC`,
                options: [`1. Not at all typical of me`,`2.`,`3.`,`4.`,`5. Very typical of me`],
                required:true
            },
            {
                prompt: `6. When I am under pressure I worry a lot. `,
                name: `6`,
                options: [`1. Not at all typical of me`,`2.`,`3.`,`4.`,`5. Very typical of me`],
                required:true
            },
            {
                prompt: `7. I am always worrying about something.`,
                name: `7`,
                options: [`1. Not at all typical of me`,`2.`,`3.`,`4.`,`5. Very typical of me`],
                required:true
            },
            {
                prompt: `8. I find it easy to dismiss worrisome thoughts.`,
                name: `8`,
                options: [`1. Not at all typical of me`,`2.`,`3.`,`4.`,`5. Very typical of me`],
                required:true
            },
            {
                prompt: `9. As soon as I finish one task, I start to worry about everything else I have to do.`,
                name: `9`,
                options: [`1. Not at all typical of me`,`2.`,`3.`,`4.`,`5. Very typical of me`],
                required:true
            },
            {
                prompt: `10. I never worry about anything.`,
                name: `10`,
                options: [`1. Not at all typical of me`,`2.`,`3.`,`4.`,`5. Very typical of me`],
                required:true
            },
            {
                prompt: `11. When there is nothing more I can do about a concern, I do not worry about it any more.`,
                name: `11`,
                options: [`1. Not at all typical of me`,`2.`,`3.`,`4.`,`5. Very typical of me`],
                required:true
            },
            {
                prompt: `12. I have been a worrier all my life`,
                name: `12`,
                options: [`1. Not at all typical of me`,`2.`,`3.`,`4.`,`5. Very typical of me`],
                required:true
            },
            {
                prompt: `13. I notice that I have been worrying about things.`,
                name: `13`,
                options: [`1. Not at all typical of me`,`2.`,`3.`,`4.`,`5. Very typical of me`],
                required:true
            },
            {
                prompt: `14. Once I start worrying, I cannot stop.`,
                name: `14`,
                options: [`1. Not at all typical of me`,`2.`,`3.`,`4.`,`5. Very typical of me`],
                required:true
            },
            {
                prompt: `15. I worry all the time. `,
                name: `15`,
                options: [`1. Not at all typical of me`,`2.`,`3.`,`4.`,`5. Very typical of me`],
                required:true
            },
            {
                prompt: `16. I worry about projects until they are all done.`,
                name: `16`,
                options: [`1. Not at all typical of me`,`2.`,`3.`,`4.`,`5. Very typical of me`],
                required:true
            },
            ]
    } else {
        questionsPSWQ = [
            {
                prompt: `1. If I do not have enough time to do everything, I do not worry about it.`,
                name: `1`,
                options: [`1. Not at all typical of me`,`2.`,`3.`,`4.`,`5. Very typical of me`],
                required:true
            },
            {
                prompt: `2. My worries overwhelm me.`,
                name: `2`,
                options: [`1. Not at all typical of me`,`2.`,`3.`,`4.`,`5. Very typical of me`],
                required:true
            },
            {
                prompt: `3. I do not tend to worry about things.`,
                name: `3`,
                options: [`1. Not at all typical of me`,`2.`,`3.`,`4.`,`5. Very typical of me`],
                required:true
            },
            {
                prompt: `4. Many situations make me worry.`,
                name: `4`,
                options: [`1. Not at all typical of me`,`2.`,`3.`,`4.`,`5. Very typical of me`],
                required:true
            },
            {
                prompt: `5. I know I should not worry about things, but I just cannot help it.`,
                name: `5`,
                options: [`1. Not at all typical of me`,`2.`,`3.`,`4.`,`5. Very typical of me`],
                required:true
            },
            {
                prompt: `6. When I am under pressure I worry a lot. `,
                name: `6`,
                options: [`1. Not at all typical of me`,`2.`,`3.`,`4.`,`5. Very typical of me`],
                required:true
            },
            {
                prompt: `7. I am always worrying about something.`,
                name: `7`,
                options: [`1. Not at all typical of me`,`2.`,`3.`,`4.`,`5. Very typical of me`],
                required:true
            },
            {
                prompt: `8. I find it easy to dismiss worrisome thoughts.`,
                name: `8`,
                options: [`1. Not at all typical of me`,`2.`,`3.`,`4.`,`5. Very typical of me`],
                required:true
            },
            {
                prompt: `9. As soon as I finish one task, I start to worry about everything else I have to do.`,
                name: `9`,
                options: [`1. Not at all typical of me`,`2.`,`3.`,`4.`,`5. Very typical of me`],
                required:true
            },
            {
                prompt: `10. I never worry about anything.`,
                name: `10`,
                options: [`1. Not at all typical of me`,`2.`,`3.`,`4.`,`5. Very typical of me`],
                required:true
            },
            {
                prompt: `11. When there is nothing more I can do about a concern, I do not worry about it any more.`,
                name: `11`,
                options: [`1. Not at all typical of me`,`2.`,`3.`,`4.`,`5. Very typical of me`],
                required:true
            },
            {
                prompt: `12. I have been a worrier all my life`,
                name: `12`,
                options: [`1. Not at all typical of me`,`2.`,`3.`,`4.`,`5. Very typical of me`],
                required:true
            },
            {
                prompt: `13. I notice that I have been worrying about things.`,
                name: `13`,
                options: [`1. Not at all typical of me`,`2.`,`3.`,`4.`,`5. Very typical of me`],
                required:true
            },
            {
                prompt: `14. Once I start worrying, I cannot stop.`,
                name: `14`,
                options: [`1. Not at all typical of me`,`2.`,`3.`,`4.`,`5. Very typical of me`],
                required:true
            },
            {
                prompt: `15. I worry all the time. `,
                name: `15`,
                options: [`1. Not at all typical of me`,`2.`,`3.`,`4.`,`5. Very typical of me`],
                required:true
            },
            {
                prompt: `16. I worry about projects until they are all done.`,
                name: `16`,
                options: [`1. Not at all typical of me`,`2.`,`3.`,`4.`,`5. Very typical of me`],
                required:true
            },
        ]
    }
    let PSWQ = {
        type: jsPsychSurveyMultiChoice,
        preamble:`The Penn State Worry Questionnaire (PSWQ) </br> </br>
        Rate each of the following statements on a scale of 1 (“not at all typical of me”) to 5 (“very typical of me”). Please do not leave any items blank.`,
        questions:questionsPSWQ,
        data:{
            category: "PSWQ",
        }

    };
    return PSWQ
};