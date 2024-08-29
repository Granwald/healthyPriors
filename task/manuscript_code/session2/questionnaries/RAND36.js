function RAND36(includeAttentionChecks) {

    let questionsRAND36 = []; 

    if(includeAttentionChecks == 1) {
        questionsRAND36 =[
            {
                prompt: `1. In general, would you say your health is:`,
                name: `1`,
                options: [`1. Excellent`,`2. Very good`,`3. Good`,`4. Fair`, `5. Poor`],
                required:true
            },
            {
                prompt: `2. Compared to one year ago, how would you rate your health in general now?`,
                name: `2`,
                options: [`1. Much better now than one year ago`,`2. Somewhat better now than one year ago`,`3. About the same`,`4. Somewhat worse now than one year ago`, `5. Much worse now than one year ago`],
                required:true
            },
            {
                prompt: `The following items are about activities you might do during a typical day. Does your
                health now limit you in these activities? If so, how much? <br/>
                
                3. Vigorous activities, such as running, lifting heavy objects, participating in strenuous sports.`,
                name: `3`,
                options: [`1. Yes, limited a lot`,`2. Yes, limited a little`,`3. No, not limited at all`],
                required:true
            },
            {
                prompt: `4. Moderate activities, such as moving a table, pushing a vacuum cleaner, bowling, or playing golf`,
                name: `4`,
                options: [`1. Yes, limited a lot`,`2. Yes, limited a little`,`3. No, not limited at all`],
                required:true
            },
            {
                prompt: `5. Lifting or carrying groceries`,
                name: `5`,
                options: [`1. Yes, limited a lot`,`2. Yes, limited a little`,`3. No, not limited at all`],
                required:true
            },
            {
                prompt: `6. Climbing several flights of stairs`,
                name: `6`,
                options: [`1. Yes, limited a lot`,`2. Yes, limited a little`,`3. No, not limited at all`],
                required:true
            },
            {
                prompt: `7. Climbing one flight of stairs`,
                name: `7`,
                options: [`1. Yes, limited a lot`,`2. Yes, limited a little`,`3. No, not limited at all`],
                required:true
            },
            {
                prompt: `8. Bending, kneeling, or stooping`,
                name: `8`,
                options: [`1. Yes, limited a lot`,`2. Yes, limited a little`,`3. No, not limited at all`],
                required:true
            },
            {
                prompt: `9. Walking more than a mile  `,
                name: `9`,
                options: [`1. Yes, limited a lot`,`2. Yes, limited a little`,`3. No, not limited at all`],
                required:true
            },
            {
                prompt: `10. Walking several blocks`,
                name: `10`,
                options: [`1. Yes, limited a lot`,`2. Yes, limited a little`,`3. No, not limited at all`],
                required:true
            },
            {
                prompt: `11. Walking one block`,
                name: `11`,
                options: [`1. Yes, limited a lot`,`2. Yes, limited a little`,`3. No, not limited at all`],
                required:true
            },
            {
                prompt: `12. Bathing or dressing yourself `,
                name: `12`,
                options: [`1. Yes, limited a lot`,`2. Yes, limited a little`,`3. No, not limited at all`],
                required:true
            },
            {
                prompt: `During the past 4 weeks, have you had any of the following problems with your work or
                other regular daily activities as a result of your physical health? <br/>
                
                13. Cut down the amount of time you spent on work or other activities `,
                name: `13`,
                options: [`1. Yes`, `2. No`],
                required:true
            },
            {
                prompt:`14. Accomplished less than you would like`,
                name: `14`,
                options: [`1. Yes`, `2. No`],
                required:true
            },
            {
                prompt:`15. Were limited in the kind of work or other activities `,
                name: `15`,
                options: [`1. Yes`, `2. No`],
                required:true
            },
            {
                prompt:`16. Had difficulty performing the work or other activities (for example, it took extra effort)`,
                name: `16`,
                options: [`1. Yes`, `2. No`],
                required:true
            },
            {
                prompt:`During the past 4 weeks, have you had any of the following problems with your work or
                other regular daily activities as a result of any emotional problems (such as feeling
                depressed or anxious)? <br>
                
                17. Cut down the amount of time you spent on work or other activities`,
                name: `17`,
                options: [`1. Yes`, `2. No`],
                required:true
            },
            {
                prompt:`18. Accomplished less than you would like `,
                name: `18`,
                options: [`1. Yes`, `2. No`],
                required:true
            },
            {
                prompt:`19. Didn't do work or other activities as carefully as usual `,
                name: `19`,
                options: [`1. Yes`, `2. No`],
                required:true
            },
            {
                prompt:`20. During the past 4 weeks, to what extent has your physical health or emotional
                problems interfered with your normal social activities with family, friends, neighbors, or
                groups?`,
                name: `20`,
                options: [`1. Not at all`, `2. Slightly`, `3. Moderately`, `4. Quite a bit`, `5. Extremely` ],
                required:true
            },
            {
                prompt:`Attention check: in order to show that you payed attention while completing this questionnaire please pick the option "4. Quite a bit" below.`,
                name: `AC`,
                options: [`1. Not at all`, `2. Slightly`, `3. Moderately`, `4. Quite a bit`, `5. Extremely` ],
                required:true
            },
            {
                prompt:`21. How much bodily pain have you had during the past 4 weeks?`,
                name: `21`,
                options: [`1. None`, `2. Very mild`, `3. Mild`, `4. Moderate`, `5. Severe`, `6. Very severe` ],
                required:true
            },
            {
                prompt:`22. During the past 4 weeks, how much did pain interfere with your normal work
                (including both work outside the home and housework)?`,
                name: `22`,
                options: [`1. Not at all`, `2. A little bit`, `3. Moderately`, `4. Quite a bit`, `5. Extremely` ],
                required:true
            },
            {
                prompt:`These questions are about how you feel and how things have been with you during the
                past 4 weeks. For each question, please give the one answer that comes closest to the way
                you have been feeling. How much of the time during the past 4 weeks... <br/> <br/>
                23. Did you feel full of pep? `,
                name: `23`,
                options: [`1. All of the time`, `2. Most of the time`, `3. A good bit of the time`, `4. Some of the time`, `5. A little of the time`, `6. None of the time` ],
                required:true
            },
            {
                prompt:`24. Have you been a very nervous person?`,
                name: `24`,
                options: [`1. All of the time`, `2. Most of the time`, `3. A good bit of the time`, `4. Some of the time`, `5. A little of the time`, `6. None of the time` ],
                required:true
            },
            {
                prompt:`25. Have you felt so down in the dumps that nothing could cheer you up?`,
                name: `25`,
                options: [`1. All of the time`, `2. Most of the time`, `3. A good bit of the time`, `4. Some of the time`, `5. A little of the time`, `6. None of the time` ],
                required:true
            },
            {
                prompt:`26. Have you felt calm and peaceful?`,
                name: `26`,
                options: [`1. All of the time`, `2. Most of the time`, `3. A good bit of the time`, `4. Some of the time`, `5. A little of the time`, `6. None of the time` ],
                required:true
            },
            {
                prompt:`27. Did you have a lot of energy`,
                name: `27`,
                options: [`1. All of the time`, `2. Most of the time`, `3. A good bit of the time`, `4. Some of the time`, `5. A little of the time`, `6. None of the time` ],
                required:true
            },
            {
                prompt:`28. Have you felt downhearted and blue?`,
                name: `28`,
                options: [`1. All of the time`, `2. Most of the time`, `3. A good bit of the time`, `4. Some of the time`, `5. A little of the time`, `6. None of the time` ],
                required:true
            },
            {
                prompt:`29. Did you feel worn out?`,
                name: `29`,
                options: [`1. All of the time`, `2. Most of the time`, `3. A good bit of the time`, `4. Some of the time`, `5. A little of the time`, `6. None of the time` ],
                required:true
            },
            {
                prompt:`30. Have you been a happy person?`,
                name: `30`,
                options: [`1. All of the time`, `2. Most of the time`, `3. A good bit of the time`, `4. Some of the time`, `5. A little of the time`, `6. None of the time` ],
                required:true
            },
            {
                prompt:`31. Did you feel tired?`,
                name: `31`,
                options: [`1. All of the time`, `2. Most of the time`, `3. A good bit of the time`, `4. Some of the time`, `5. A little of the time`, `6. None of the time` ],
                required:true
            },
            {
                prompt:`32. During the past 4 weeks, how much of the time has your physical health or emotional problems interfered with your social activities (like visiting with friends, relatives, etc.)?`,
                name: `32`,
                options: [`1. All of the time`, `2. Most of the time`, `3. Some of the time`, `4. A little of the time`, `5. None of the time` ],
                required:true
            },
            {
                prompt:`How TRUE or FALSE is each of the following statements for you. <br/> <br/>
                33. I seem to get sick a little easier than other people.`,
                name: `33`,
                options: [`1. Definitely true`, `2. Mostly true`, `3. Don't know`, `4. Mostly false`, `5. Definitely false` ],
                required:true
            },
            {
                prompt:`34. I am as healthy as anybody I know.`,
                name: `34`,
                options: [`1. Definitely true`, `2. Mostly true`, `3. Don't know`, `4. Mostly false`, `5. Definitely false` ],
                required:true
            },
            {
                prompt:`35. I expect my health to get worse`,
                name: `35`,
                options: [`1. Definitely true`, `2. Mostly true`, `3. Don't know`, `4. Mostly false`, `5. Definitely false` ],
                required:true
            },
            {
                prompt:`36. My health is excellent`,
                name: `36`,
                options: [`1. Definitely true`, `2. Mostly true`, `3. Don't know`, `4. Mostly false`, `5. Definitely false` ],
                required:true
            },
        ]
    } else {
        questionsRAND36 =[
            {
                prompt: `1. In general, would you say your health is:`,
                name: `1`,
                options: [`1. Excellent`,`2. Very good`,`3. Good`,`4. Fair`, `5. Poor`],
                required:true
            },
            {
                prompt: `2. Compared to one year ago, how would you rate your health in general now?`,
                name: `2`,
                options: [`1. Much better now than one year ago`,`2. Somewhat better now than one year ago`,`3. About the same`,`4. Somewhat worse now than one year ago`, `5. Much worse now than one year ago`],
                required:true
            },
            {
                prompt: `The following items are about activities you might do during a typical day. Does your
                health now limit you in these activities? If so, how much? <br/>
                
                3. Vigorous activities, such as running, lifting heavy objects, participating in strenuous sports.`,
                name: `3`,
                options: [`1. Yes, limited a lot`,`2. Yes, limited a little`,`3. No, not limited at all`],
                required:true
            },
            {
                prompt: `4. Moderate activities, such as moving a table, pushing a vacuum cleaner, bowling, or playing golf`,
                name: `4`,
                options: [`1. Yes, limited a lot`,`2. Yes, limited a little`,`3. No, not limited at all`],
                required:true
            },
            {
                prompt: `5. Lifting or carrying groceries`,
                name: `5`,
                options: [`1. Yes, limited a lot`,`2. Yes, limited a little`,`3. No, not limited at all`],
                required:true
            },
            {
                prompt: `6. Climbing several flights of stairs`,
                name: `6`,
                options: [`1. Yes, limited a lot`,`2. Yes, limited a little`,`3. No, not limited at all`],
                required:true
            },
            {
                prompt: `7. Climbing one flight of stairs`,
                name: `7`,
                options: [`1. Yes, limited a lot`,`2. Yes, limited a little`,`3. No, not limited at all`],
                required:true
            },
            {
                prompt: `8. Bending, kneeling, or stooping`,
                name: `8`,
                options: [`1. Yes, limited a lot`,`2. Yes, limited a little`,`3. No, not limited at all`],
                required:true
            },
            {
                prompt: `9. Walking more than a mile  `,
                name: `9`,
                options: [`1. Yes, limited a lot`,`2. Yes, limited a little`,`3. No, not limited at all`],
                required:true
            },
            {
                prompt: `10. Walking several blocks`,
                name: `10`,
                options: [`1. Yes, limited a lot`,`2. Yes, limited a little`,`3. No, not limited at all`],
                required:true
            },
            {
                prompt: `11. Walking one block`,
                name: `11`,
                options: [`1. Yes, limited a lot`,`2. Yes, limited a little`,`3. No, not limited at all`],
                required:true
            },
            {
                prompt: `12. Bathing or dressing yourself `,
                name: `12`,
                options: [`1. Yes, limited a lot`,`2. Yes, limited a little`,`3. No, not limited at all`],
                required:true
            },
            {
                prompt: `During the past 4 weeks, have you had any of the following problems with your work or
                other regular daily activities as a result of your physical health? <br/>
                
                13. Cut down the amount of time you spent on work or other activities `,
                name: `13`,
                options: [`1. Yes`, `2. No`],
                required:true
            },
            {
                prompt:`14. Accomplished less than you would like`,
                name: `14`,
                options: [`1. Yes`, `2. No`],
                required:true
            },
            {
                prompt:`15. Were limited in the kind of work or other activities `,
                name: `15`,
                options: [`1. Yes`, `2. No`],
                required:true
            },
            {
                prompt:`16. Had difficulty performing the work or other activities (for example, it took extra effort)`,
                name: `16`,
                options: [`1. Yes`, `2. No`],
                required:true
            },
            {
                prompt:`During the past 4 weeks, have you had any of the following problems with your work or
                other regular daily activities as a result of any emotional problems (such as feeling
                depressed or anxious)? <br>
                
                17. Cut down the amount of time you spent on work or other activities`,
                name: `17`,
                options: [`1. Yes`, `2. No`],
                required:true
            },
            {
                prompt:`18. Accomplished less than you would like `,
                name: `18`,
                options: [`1. Yes`, `2. No`],
                required:true
            },
            {
                prompt:`19. Didn't do work or other activities as carefully as usual `,
                name: `19`,
                options: [`1. Yes`, `2. No`],
                required:true
            },
            {
                prompt:`20. During the past 4 weeks, to what extent has your physical health or emotional
                problems interfered with your normal social activities with family, friends, neighbors, or
                groups?`,
                name: `20`,
                options: [`1. Not at all`, `2. Slightly`, `3. Moderately`, `4. Quite a bit`, `5. Extremely` ],
                required:true
            },
            {
                prompt:`21. How much bodily pain have you had during the past 4 weeks?`,
                name: `21`,
                options: [`1. None`, `2. Very mild`, `3. Mild`, `4. Moderate`, `5. Severe`, `6. Very severe` ],
                required:true
            },
            {
                prompt:`22. During the past 4 weeks, how much did pain interfere with your normal work
                (including both work outside the home and housework)?`,
                name: `22`,
                options: [`1. Not at all`, `2. A little bit`, `3. Moderately`, `4. Quite a bit`, `5. Extremely` ],
                required:true
            },
            {
                prompt:`These questions are about how you feel and how things have been with you during the
                past 4 weeks. For each question, please give the one answer that comes closest to the way
                you have been feeling. How much of the time during the past 4 weeks... <br/> <br/>
                23. Did you feel full of pep? `,
                name: `23`,
                options: [`1. All of the time`, `2. Most of the time`, `3. A good bit of the time`, `4. Some of the time`, `5. A little of the time`, `6. None of the time` ],
                required:true
            },
            {
                prompt:`24. Have you been a very nervous person?`,
                name: `24`,
                options: [`1. All of the time`, `2. Most of the time`, `3. A good bit of the time`, `4. Some of the time`, `5. A little of the time`, `6. None of the time` ],
                required:true
            },
            {
                prompt:`25. Have you felt so down in the dumps that nothing could cheer you up?`,
                name: `25`,
                options: [`1. All of the time`, `2. Most of the time`, `3. A good bit of the time`, `4. Some of the time`, `5. A little of the time`, `6. None of the time` ],
                required:true
            },
            {
                prompt:`26. Have you felt calm and peaceful?`,
                name: `26`,
                options: [`1. All of the time`, `2. Most of the time`, `3. A good bit of the time`, `4. Some of the time`, `5. A little of the time`, `6. None of the time` ],
                required:true
            },
            {
                prompt:`27. Did you have a lot of energy`,
                name: `27`,
                options: [`1. All of the time`, `2. Most of the time`, `3. A good bit of the time`, `4. Some of the time`, `5. A little of the time`, `6. None of the time` ],
                required:true
            },
            {
                prompt:`28. Have you felt downhearted and blue?`,
                name: `28`,
                options: [`1. All of the time`, `2. Most of the time`, `3. A good bit of the time`, `4. Some of the time`, `5. A little of the time`, `6. None of the time` ],
                required:true
            },
            {
                prompt:`29. Did you feel worn out?`,
                name: `29`,
                options: [`1. All of the time`, `2. Most of the time`, `3. A good bit of the time`, `4. Some of the time`, `5. A little of the time`, `6. None of the time` ],
                required:true
            },
            {
                prompt:`30. Have you been a happy person?`,
                name: `30`,
                options: [`1. All of the time`, `2. Most of the time`, `3. A good bit of the time`, `4. Some of the time`, `5. A little of the time`, `6. None of the time` ],
                required:true
            },
            {
                prompt:`31. Did you feel tired?`,
                name: `31`,
                options: [`1. All of the time`, `2. Most of the time`, `3. A good bit of the time`, `4. Some of the time`, `5. A little of the time`, `6. None of the time` ],
                required:true
            },
            {
                prompt:`32. During the past 4 weeks, how much of the time has your physical health or emotional problems interfered with your social activities (like visiting with friends, relatives, etc.)?`,
                name: `32`,
                options: [`1. All of the time`, `2. Most of the time`, `3. Some of the time`, `4. A little of the time`, `5. None of the time` ],
                required:true
            },
            {
                prompt:`How TRUE or FALSE is each of the following statements for you. <br/> <br/>
                33. I seem to get sick a little easier than other people.`,
                name: `33`,
                options: [`1. Definitely true`, `2. Mostly true`, `3. Don't know`, `4. Mostly false`, `5. Definitely false` ],
                required:true
            },
            {
                prompt:`34. I am as healthy as anybody I know.`,
                name: `34`,
                options: [`1. Definitely true`, `2. Mostly true`, `3. Don't know`, `4. Mostly false`, `5. Definitely false` ],
                required:true
            },
            {
                prompt:`35. I expect my health to get worse`,
                name: `35`,
                options: [`1. Definitely true`, `2. Mostly true`, `3. Don't know`, `4. Mostly false`, `5. Definitely false` ],
                required:true
            },
            {
                prompt:`36. My health is excellent`,
                name: `36`,
                options: [`1. Definitely true`, `2. Mostly true`, `3. Don't know`, `4. Mostly false`, `5. Definitely false` ],
                required:true
            },
        ]
    }

    let RAND36 = {
        type: jsPsychSurveyMultiChoice,
        preamble:`Choose one option for each questionnaire item.`,
        questions:questionsRAND36,
        data: {
            category: "RAND36",
        }
    };

    return RAND36
};