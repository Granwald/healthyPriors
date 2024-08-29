function AMI(includeAttentionChecks){
    let questionsAMI = []; 

    if(includeAttentionChecks == 1) {
        questionsAMI = [
            {
                prompt: `1. I feel sad or upset when I hear bad news.`,
                name: `1`,
                options: [`4. Completely Untrue`,`3. Mostly Untrue`,`2. Neither True Nor Untrue `,`1. Quite True`, `0. Completely True`],
                required:true
            },
            {
                prompt: `2. I start conversations with random people.`,
                name: `2`,
                options: [`4. Completely Untrue`,`3. Mostly Untrue`,`2. Neither True Nor Untrue `,`1. Quite True`, `0. Completely True`],
                required:true
            },
            {
                prompt: `3. I enjoy doing things with people I have just met.`,
                name: `3`,
                options: [`4. Completely Untrue`,`3. Mostly Untrue`,`2. Neither True Nor Untrue `,`1. Quite True`, `0. Completely True`],
                required:true
            },
            {
                prompt: `4. I suggest activities for me and my friends to do`,
                name: `4`,
                options: [`4. Completely Untrue`,`3. Mostly Untrue`,`2. Neither True Nor Untrue `,`1. Quite True`, `0. Completely True`],
                required:true
            },
            {
                prompt: `5. I make decisions firmly and without hesitation.`,
                name: `5`,
                options: [`4. Completely Untrue`,`3. Mostly Untrue`,`2. Neither True Nor Untrue `,`1. Quite True`, `0. Completely True`],
                required:true
            },
            {
                prompt: `6. After making a decision, I will wonder if I have made the wrong choice.`,
                name: `6`,
                options: [`4. Completely Untrue`,`3. Mostly Untrue`,`2. Neither True Nor Untrue `,`1. Quite True`, `0. Completely True`],
                required:true
            },
            {
                prompt: `7. Based on the last two weeks, I would say I care deeply about how my loved ones think of me.`,
                name: `7`,
                options: [`4. Completely Untrue`,`3. Mostly Untrue`,`2. Neither True Nor Untrue `,`1. Quite True`, `0. Completely True`],
                required:true
            },
            {
                prompt: `8. I go out with friends on a weekly basis.`,
                name: `8`,
                options: [`4. Completely Untrue`,`3. Mostly Untrue`,`2. Neither True Nor Untrue `,`1. Quite True`, `0. Completely True`],
                required:true
            },
            {
                prompt: `9. When I decide to do something, I am able to make an effort easily.`,
                name: `9`,
                options: [`4. Completely Untrue`,`3. Mostly Untrue`,`2. Neither True Nor Untrue `,`1. Quite True`, `0. Completely True`],
                required:true
            },
            {
                prompt: `10. I don't like to laze around.`,
                name: `10`,
                options: [`4. Completely Untrue`,`3. Mostly Untrue`,`2. Neither True Nor Untrue `,`1. Quite True`, `0. Completely True`],
                required:true
            },
            {
                prompt: `11. I get things done when they need to be done, without requiring reminders from others.`,
                name: `11`,
                options: [`4. Completely Untrue`,`3. Mostly Untrue`,`2. Neither True Nor Untrue `,`1. Quite True`, `0. Completely True`],
                required:true
            },
            {
                prompt: `Attention check: Select the option "3. Monstly Untrue" to indicate that you payed attention here.`,
                name: `AC`,
                options: [`4. Completely Untrue`,`3. Mostly Untrue`,`2. Neither True Nor Untrue `,`1. Quite True`, `0. Completely True`],
                required:true
            },
            {
                prompt: `12. When I decide to do something, I am motivated to see it through to the end.`,
                name: `12`,
                options: [`4. Completely Untrue`,`3. Mostly Untrue`,`2. Neither True Nor Untrue `,`1. Quite True`, `0. Completely True`],
                required:true
            },
            {
                prompt: `13. I feel awful if I say something insensitive.`,
                name: `13`,
                options: [`4. Completely Untrue`,`3. Mostly Untrue`,`2. Neither True Nor Untrue `,`1. Quite True`, `0. Completely True`],
                required:true
            },
            {
                prompt: `14. I start conversations without being prompted.`,
                name: `14`,
                options: [`4. Completely Untrue`,`3. Mostly Untrue`,`2. Neither True Nor Untrue `,`1. Quite True`, `0. Completely True`],
                required:true
            },
            {
                prompt: `15. When I have something I need to do, I do it straightaway so it is out of the way.`,
                name: `15`,
                options: [`4. Completely Untrue`,`3. Mostly Untrue`,`2. Neither True Nor Untrue `,`1. Quite True`, `0. Completely True`],
                required:true
            },
            {
                prompt: `16. I feel bad when I hear an acquaintance has an accident or illness.`,
                name: `16`,
                options: [`4. Completely Untrue`,`3. Mostly Untrue`,`2. Neither True Nor Untrue `,`1. Quite True`, `0. Completely True`],
                required:true
            },
            {
                prompt: `17. I enjoy choosing what to do from a range of activities.`,
                name: `17`,
                options: [`4. Completely Untrue`,`3. Mostly Untrue`,`2. Neither True Nor Untrue `,`1. Quite True`, `0. Completely True`],
                required:true
            },
            {
                prompt: `18. If I realise I have been unpleasant to someone, I will feel terribly guilty afterwards.`,
                name: `18`,
                options: [`4. Completely Untrue`,`3. Mostly Untrue`,`2. Neither True Nor Untrue `,`1. Quite True`, `0. Completely True`],
                required:true
            },
        ]
    } else {
        questionsAMI = [
            {
                prompt: `1. I feel sad or upset when I hear bad news.`,
                name: `1`,
                options: [`4. Completely Untrue`,`3. Mostly Untrue`,`2. Neither True Nor Untrue `,`1. Quite True`, `0. Completely True`],
                required:true
            },
            {
                prompt: `2. I start conversations with random people.`,
                name: `2`,
                options: [`4. Completely Untrue`,`3. Mostly Untrue`,`2. Neither True Nor Untrue `,`1. Quite True`, `0. Completely True`],
                required:true
            },
            {
                prompt: `3. I enjoy doing things with people I have just met.`,
                name: `3`,
                options: [`4. Completely Untrue`,`3. Mostly Untrue`,`2. Neither True Nor Untrue `,`1. Quite True`, `0. Completely True`],
                required:true
            },
            {
                prompt: `4. I suggest activities for me and my friends to do`,
                name: `4`,
                options: [`4. Completely Untrue`,`3. Mostly Untrue`,`2. Neither True Nor Untrue `,`1. Quite True`, `0. Completely True`],
                required:true
            },
            {
                prompt: `5. I make decisions firmly and without hesitation.`,
                name: `5`,
                options: [`4. Completely Untrue`,`3. Mostly Untrue`,`2. Neither True Nor Untrue `,`1. Quite True`, `0. Completely True`],
                required:true
            },
            {
                prompt: `6. After making a decision, I will wonder if I have made the wrong choice.`,
                name: `6`,
                options: [`4. Completely Untrue`,`3. Mostly Untrue`,`2. Neither True Nor Untrue `,`1. Quite True`, `0. Completely True`],
                required:true
            },
            {
                prompt: `7. Based on the last two weeks, I would say I care deeply about how my loved ones think of me.`,
                name: `7`,
                options: [`4. Completely Untrue`,`3. Mostly Untrue`,`2. Neither True Nor Untrue `,`1. Quite True`, `0. Completely True`],
                required:true
            },
            {
                prompt: `8. I go out with friends on a weekly basis.`,
                name: `8`,
                options: [`4. Completely Untrue`,`3. Mostly Untrue`,`2. Neither True Nor Untrue `,`1. Quite True`, `0. Completely True`],
                required:true
            },
            {
                prompt: `9. When I decide to do something, I am able to make an effort easily.`,
                name: `9`,
                options: [`4. Completely Untrue`,`3. Mostly Untrue`,`2. Neither True Nor Untrue `,`1. Quite True`, `0. Completely True`],
                required:true
            },
            {
                prompt: `10. I don't like to laze around.`,
                name: `10`,
                options: [`4. Completely Untrue`,`3. Mostly Untrue`,`2. Neither True Nor Untrue `,`1. Quite True`, `0. Completely True`],
                required:true
            },
            {
                prompt: `11. I get things done when they need to be done, without requiring reminders from others.`,
                name: `11`,
                options: [`4. Completely Untrue`,`3. Mostly Untrue`,`2. Neither True Nor Untrue `,`1. Quite True`, `0. Completely True`],
                required:true
            },
            {
                prompt: `12. When I decide to do something, I am motivated to see it through to the end.`,
                name: `12`,
                options: [`4. Completely Untrue`,`3. Mostly Untrue`,`2. Neither True Nor Untrue `,`1. Quite True`, `0. Completely True`],
                required:true
            },
            {
                prompt: `13. I feel awful if I say something insensitive.`,
                name: `13`,
                options: [`4. Completely Untrue`,`3. Mostly Untrue`,`2. Neither True Nor Untrue `,`1. Quite True`, `0. Completely True`],
                required:true
            },
            {
                prompt: `14. I start conversations without being prompted.`,
                name: `14`,
                options: [`4. Completely Untrue`,`3. Mostly Untrue`,`2. Neither True Nor Untrue `,`1. Quite True`, `0. Completely True`],
                required:true
            },
            {
                prompt: `15. When I have something I need to do, I do it straightaway so it is out of the way.`,
                name: `15`,
                options: [`4. Completely Untrue`,`3. Mostly Untrue`,`2. Neither True Nor Untrue `,`1. Quite True`, `0. Completely True`],
                required:true
            },
            {
                prompt: `16. I feel bad when I hear an acquaintance has an accident or illness.`,
                name: `16`,
                options: [`4. Completely Untrue`,`3. Mostly Untrue`,`2. Neither True Nor Untrue `,`1. Quite True`, `0. Completely True`],
                required:true
            },
            {
                prompt: `17. I enjoy choosing what to do from a range of activities.`,
                name: `17`,
                options: [`4. Completely Untrue`,`3. Mostly Untrue`,`2. Neither True Nor Untrue `,`1. Quite True`, `0. Completely True`],
                required:true
            },
            {
                prompt: `18. If I realise I have been unpleasant to someone, I will feel terribly guilty afterwards.`,
                name: `18`,
                options: [`4. Completely Untrue`,`3. Mostly Untrue`,`2. Neither True Nor Untrue `,`1. Quite True`, `0. Completely True`],
                required:true
            },
        ]
    }

    let AMI = {
        type: jsPsychSurveyMultiChoice,
        preamble:`Based on the last two weeks how true is each these statements for you?`,
        questions: questionsAMI,
        data:{
            category: "AMI",
        }

    }
    return AMI
}