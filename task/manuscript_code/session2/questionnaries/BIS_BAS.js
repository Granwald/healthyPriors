function BIS_BAS(includeAttentionChecks){
    let questionsBISBAS = []; 

    if(includeAttentionChecks == 1) {
        questionsBISBAS = [
                {
                    prompt: `1. A person's family is the most important thing in life.`,
                    name: `1`,
                    options: [`1. very true for me`,`2. somewhat true for me`,`3. somewhat false for me`,`4. very false for me`],
                    required:true
                },
                {
                    prompt: `2. Even if something bad is about to happen to me, I rarely experience fear or nervousness.`,
                    name: `2`,
                    options: [`1. very true for me`,`2. somewhat true for me`,`3. somewhat false for me`,`4. very false for me`],
                    required:true
                },
                {
                    prompt: `3. I go out of my way to get things I want.`,
                    name: `3`,
                    options: [`1. very true for me`,`2. somewhat true for me`,`3. somewhat false for me`,`4. very false for me`],
                    required:true
                },
                {
                    prompt: `4. When I'm doing well at something I love to keep at it.`,
                    name: `4`,
                    options: [`1. very true for me`,`2. somewhat true for me`,`3. somewhat false for me`,`4. very false for me`],
                    required:true
                },
                {
                    prompt: `5. I'm always willing to try something new if I think it will be fun.`,
                    name: `5`,
                    options: [`1. very true for me`,`2. somewhat true for me`,`3. somewhat false for me`,`4. very false for me`],
                    required:true
                },
                {
                    prompt: `6. How I dress is important to me.`,
                    name: `6`,
                    options: [`1. very true for me`,`2. somewhat true for me`,`3. somewhat false for me`,`4. very false for me`],
                    required:true
                },
                {
                    prompt: `Attention check: Select the option "1. very true for me" to indicate that you payed attention here.`,
                    name: `AC`,
                    options: [`1. very true for me`,`2. somewhat true for me`,`3. somewhat false for me`,`4. very false for me`],
                    required:true
                },
                {
                    prompt: `7. When I get something I want, I feel excited and energized.`,
                    name: `7`,
                    options: [`1. very true for me`,`2. somewhat true for me`,`3. somewhat false for me`,`4. very false for me`],
                    required:true
                },
                {
                    prompt: `8. Criticism or scolding hurts me quite a bit.`,
                    name: `8`,
                    options: [`1. very true for me`,`2. somewhat true for me`,`3. somewhat false for me`,`4. very false for me`],
                    required:true
                },
                {
                    prompt: `9. When I want something I usually go all-out to get it.`,
                    name: `9`,
                    options: [`1. very true for me`,`2. somewhat true for me`,`3. somewhat false for me`,`4. very false for me`],
                    required:true
                },
                {
                    prompt: `10. I will often do things for no other reason than that they might be fun.`,
                    name: `10`,
                    options: [`1. very true for me`,`2. somewhat true for me`,`3. somewhat false for me`,`4. very false for me`],
                    required:true
                },
                {
                    prompt: `11. It's hard for me to find the time to do things such as get a haircut.`,
                    name: `11`,
                    options: [`1. very true for me`,`2. somewhat true for me`,`3. somewhat false for me`,`4. very false for me`],
                    required:true
                },
                {
                    prompt: `12. If I see a chance to get something I want I move on it right away.`,
                    name: `12`,
                    options: [`1. very true for me`,`2. somewhat true for me`,`3. somewhat false for me`,`4. very false for me`],
                    required:true
                },
                {
                    prompt: `13. I feel pretty worried or upset when I think or know somebody is angry at me.`,
                    name: `13`,
                    options: [`1. very true for me`,`2. somewhat true for me`,`3. somewhat false for me`,`4. very false for me`],
                    required:true
                },
                {
                    prompt: `14. When I see an opportunity for something I like I get excited right away.`,
                    name: `14`,
                    options: [`1. very true for me`,`2. somewhat true for me`,`3. somewhat false for me`,`4. very false for me`],
                    required:true
                },
                {
                    prompt: `15. I often act on the spur of the moment.`,
                    name: `15`,
                    options: [`1. very true for me`,`2. somewhat true for me`,`3. somewhat false for me`,`4. very false for me`],
                    required:true
                },
                {
                    prompt: `16. If I think something unpleasant is going to happen I usually get pretty "worked up."`,
                    name: `16`,
                    options: [`1. very true for me`,`2. somewhat true for me`,`3. somewhat false for me`,`4. very false for me`],
                    required:true
                },
                {
                    prompt: `17. I often wonder why people act the way they do.`,
                    name: `17`,
                    options: [`1. very true for me`,`2. somewhat true for me`,`3. somewhat false for me`,`4. very false for me`],
                    required:true
                },
                {
                    prompt: `18. When good things happen to me, it affects me strongly.`,
                    name: `18`,
                    options: [`1. very true for me`,`2. somewhat true for me`,`3. somewhat false for me`,`4. very false for me`],
                    required:true
                },
                {
                    prompt: `19. I feel worried when I think I have done poorly at something important.`,
                    name: `19`,
                    options: [`1. very true for me`,`2. somewhat true for me`,`3. somewhat false for me`,`4. very false for me`],
                    required:true
                },
                {
                    prompt: `20. I crave excitement and new sensations.`,
                    name: `20`,
                    options: [`1. very true for me`,`2. somewhat true for me`,`3. somewhat false for me`,`4. very false for me`],
                    required:true
                },
                {
                    prompt: `21. When I go after something I use a "no holds barred" approach.`,
                    name: `21`,
                    options: [`1. very true for me`,`2. somewhat true for me`,`3. somewhat false for me`,`4. very false for me`],
                    required:true
                },
                {
                    prompt: `22. I have very few fears compared to my friends.`,
                    name: `22`,
                    options: [`1. very true for me`,`2. somewhat true for me`,`3. somewhat false for me`,`4. very false for me`],
                    required:true
                },
                {
                    prompt: `23. It would excite me to win a contest.`,
                    name: `23`,
                    options: [`1. very true for me`,`2. somewhat true for me`,`3. somewhat false for me`,`4. very false for me`],
                    required:true
                },
                {
                    prompt: `24. I worry about making mistakes.`,
                    name: `24`,
                    options: [`1. very true for me`,`2. somewhat true for me`,`3. somewhat false for me`,`4. very false for me`],
                    required:true
                }
            ]
        } else {
            questionsBISBAS = [
                {
                    prompt: `1. A person's family is the most important thing in life.`,
                    name: `1`,
                    options: [`1. very true for me`,`2. somewhat true for me`,`3. somewhat false for me`,`4. very false for me`],
                    required:true
                },
                {
                    prompt: `2. Even if something bad is about to happen to me, I rarely experience fear or nervousness.`,
                    name: `2`,
                    options: [`1. very true for me`,`2. somewhat true for me`,`3. somewhat false for me`,`4. very false for me`],
                    required:true
                },
                {
                    prompt: `3. I go out of my way to get things I want.`,
                    name: `3`,
                    options: [`1. very true for me`,`2. somewhat true for me`,`3. somewhat false for me`,`4. very false for me`],
                    required:true
                },
                {
                    prompt: `4. When I'm doing well at something I love to keep at it.`,
                    name: `4`,
                    options: [`1. very true for me`,`2. somewhat true for me`,`3. somewhat false for me`,`4. very false for me`],
                    required:true
                },
                {
                    prompt: `5. I'm always willing to try something new if I think it will be fun.`,
                    name: `5`,
                    options: [`1. very true for me`,`2. somewhat true for me`,`3. somewhat false for me`,`4. very false for me`],
                    required:true
                },
                {
                    prompt: `6. How I dress is important to me.`,
                    name: `6`,
                    options: [`1. very true for me`,`2. somewhat true for me`,`3. somewhat false for me`,`4. very false for me`],
                    required:true
                },
                {
                    prompt: `7. When I get something I want, I feel excited and energized.`,
                    name: `7`,
                    options: [`1. very true for me`,`2. somewhat true for me`,`3. somewhat false for me`,`4. very false for me`],
                    required:true
                },
                {
                    prompt: `8. Criticism or scolding hurts me quite a bit.`,
                    name: `8`,
                    options: [`1. very true for me`,`2. somewhat true for me`,`3. somewhat false for me`,`4. very false for me`],
                    required:true
                },
                {
                    prompt: `9. When I want something I usually go all-out to get it.`,
                    name: `9`,
                    options: [`1. very true for me`,`2. somewhat true for me`,`3. somewhat false for me`,`4. very false for me`],
                    required:true
                },
                {
                    prompt: `10. I will often do things for no other reason than that they might be fun.`,
                    name: `10`,
                    options: [`1. very true for me`,`2. somewhat true for me`,`3. somewhat false for me`,`4. very false for me`],
                    required:true
                },
                {
                    prompt: `11. It's hard for me to find the time to do things such as get a haircut.`,
                    name: `11`,
                    options: [`1. very true for me`,`2. somewhat true for me`,`3. somewhat false for me`,`4. very false for me`],
                    required:true
                },
                {
                    prompt: `12. If I see a chance to get something I want I move on it right away.`,
                    name: `12`,
                    options: [`1. very true for me`,`2. somewhat true for me`,`3. somewhat false for me`,`4. very false for me`],
                    required:true
                },
                {
                    prompt: `13. I feel pretty worried or upset when I think or know somebody is angry at me.`,
                    name: `13`,
                    options: [`1. very true for me`,`2. somewhat true for me`,`3. somewhat false for me`,`4. very false for me`],
                    required:true
                },
                {
                    prompt: `14. When I see an opportunity for something I like I get excited right away.`,
                    name: `14`,
                    options: [`1. very true for me`,`2. somewhat true for me`,`3. somewhat false for me`,`4. very false for me`],
                    required:true
                },
                {
                    prompt: `15. I often act on the spur of the moment.`,
                    name: `15`,
                    options: [`1. very true for me`,`2. somewhat true for me`,`3. somewhat false for me`,`4. very false for me`],
                    required:true
                },
                {
                    prompt: `16. If I think something unpleasant is going to happen I usually get pretty "worked up."`,
                    name: `16`,
                    options: [`1. very true for me`,`2. somewhat true for me`,`3. somewhat false for me`,`4. very false for me`],
                    required:true
                },
                {
                    prompt: `17. I often wonder why people act the way they do.`,
                    name: `17`,
                    options: [`1. very true for me`,`2. somewhat true for me`,`3. somewhat false for me`,`4. very false for me`],
                    required:true
                },
                {
                    prompt: `18. When good things happen to me, it affects me strongly.`,
                    name: `18`,
                    options: [`1. very true for me`,`2. somewhat true for me`,`3. somewhat false for me`,`4. very false for me`],
                    required:true
                },
                {
                    prompt: `19. I feel worried when I think I have done poorly at something important.`,
                    name: `19`,
                    options: [`1. very true for me`,`2. somewhat true for me`,`3. somewhat false for me`,`4. very false for me`],
                    required:true
                },
                {
                    prompt: `20. I crave excitement and new sensations.`,
                    name: `20`,
                    options: [`1. very true for me`,`2. somewhat true for me`,`3. somewhat false for me`,`4. very false for me`],
                    required:true
                },
                {
                    prompt: `21. When I go after something I use a "no holds barred" approach.`,
                    name: `21`,
                    options: [`1. very true for me`,`2. somewhat true for me`,`3. somewhat false for me`,`4. very false for me`],
                    required:true
                },
                {
                    prompt: `22. I have very few fears compared to my friends.`,
                    name: `22`,
                    options: [`1. very true for me`,`2. somewhat true for me`,`3. somewhat false for me`,`4. very false for me`],
                    required:true
                },
                {
                    prompt: `23. It would excite me to win a contest.`,
                    name: `23`,
                    options: [`1. very true for me`,`2. somewhat true for me`,`3. somewhat false for me`,`4. very false for me`],
                    required:true
                },
                {
                    prompt: `24. I worry about making mistakes.`,
                    name: `24`,
                    options: [`1. very true for me`,`2. somewhat true for me`,`3. somewhat false for me`,`4. very false for me`],
                    required:true
                }
        
            ]
        }
    let BIS_BAS = {
        type: jsPsychSurveyMultiChoice,
        preamble:`<h1>BIS/BAS</h1>
            <p>Each item of this questionnaire is a statement that a person may either agree with or disagree with. 
            For each item, indicate how much you agree or disagree with what the item says. Please respond to all the items; do not leave any blank. 
            Choose only one response to each statement. Please be as accurate and honest as you can be. 
            Respond to each item as if it were the only item. That is, don't worry about being "consistent" in your responses.</p>`,
        questions:questionsBISBAS,
        data: {
            category: "BIS_BAS",
        }
    };

    return BIS_BAS
};