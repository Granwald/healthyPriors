function IDSSR(includeAttentionChecks){
    
    let questionsIDSSR = []; 

    if(includeAttentionChecks == 1) {
        questionsIDSSR = [ 
            {
                prompt: `1. Falling Asleep:`,
                name: `1`,
                options: [`0. I never take longer than 30 minutes to fall asleep.`,
                `1. I take at least 30 minutes to fall asleep, less than half the time.`,
                `2. I take at least 30 minutes to fall asleep, more than half the time.`,
                `3. I take more than 60 minutes to fall asleep, more than half the time.`],
                required:true
            },
            {
                prompt: `2. Sleep During the Night:`,
                name: `2`,
                options: [`0. I do not wake up at night`,
                `1. I have a restless, light sleep with a few brief awakenings each night.`,
                `2. I wake up at least once a night, but I go back to sleep easily`,
                `3. I awaken more than once a night and stay awake for 20 minutes or more, more than half the time.`],
                required:true
            },
            {
                prompt: `3. Waking Up Too Early:`,
                name: `3`,
                options: [`0. Most of the time, I awaken no more than 30 minutes before I need to get up.`,
                `1. More than half the time, I awaken more than 30 minutes before I need to get up.`,
                `2. I almost always awaken at least one hour or so before I need to, but I go back to sleep eventually.`,
                `3. I awaken at least one hour before I need to, and can't go back to sleep. `],
                required:true
            },
            {
                prompt: `4. Sleeping Too Much:`,
                name: `4`,
                options: [`0.I sleep no longer than 7-8 hours/night, without napping during the day.`,
                `1. I sleep no longer than 10 hours in a 24-hour period including naps.`,
                `2. I sleep no longer than 12 hours in a 24-hour period including naps.`,
                `3. I sleep longer than 12 hours in a 24-hour period including naps.`],
                required:true
            },
            {
                prompt: `5. Feeling Sad:`,
                name: `5`,
                options: [`0. I do not feel sad`,
                `1. I feel sad less than half the time.`,
                `2. I feel sad more than half the time.`,
                `3. I feel sad nearly all of the time`],
                required:true
            },
            {
                prompt: `6. Feeling Irritable:`,
                name: `6`,
                options: [`0. I do not feel irritable.`,
                `1. I feel irritable less than half the time`,
                `2. I feel irritable more than half the time`,
                `3. I feel extremely irritable nearly all of the time.`],
                required:true
            },
            {
                prompt: `7. Feeling Anxious or Tense:`,
                name: `7`,
                options: [`0. I do not feel anxious or tense.`,
                `1. I feel anxious (tense) less than half the time.`,
                `2. I feel anxious (tense) more than half the time.`,
                `3. I feel extremely anxious (tense) nearly all of the time.`],
                required:true
            },
            {
                prompt: `Attention Check:`,
                name: `AC`,
                options: [`0. Do not select this.`,
                `1. Do not select this option.`,
                `2. Choose this option to indicate that you payed attention.`,
                `3. Don't choose this option.`],
                required:true
            },
            {
                prompt: `8. Response of Your Mood to Good or Desired Events:`,
                name: `8`,
                options: [`0. My mood brightens to a normal level which lasts for several hours when good events occur.`,
                `1. My mood brightens but I do not feel like my normal self when good events occur.`,
                `2. My mood brightens only somewhat to a rather limited range of desired events.`,
                `3. My mood does not brighten at all, even when very good or desired events occur in my life.`],
                required:true
            },
            {
                prompt: `9. Mood in Relation to the Time of Day:`,
                name: `9`,
                options: [`0. There is no regular relationship between my mood and the time of day.`,
                `1. My mood often relates to the time of day because of environmental events (e.g., being alone, working).`,
                `2. In general, my mood is more related to the time of day than to environmental events.`,
                `3. My mood is clearly and predictably better or worse at a particular time each day.`],
                required:true
            },
            {
                prompt: `9A. Is your mood typically worse in the: morning, afternoon or night? (chose one)`,
                name: `9A`,
                options: [`morning`,
                `afternoon`,
                `night`],
                required:true
            },
            {
                prompt: `9B. Is your mood variation attributed to the environment?`,
                name: `9B`,
                options: [`Yes`,
                `No`],
                required:true
            },
            {
                prompt: `10. The Quality of Your Mood:`,
                name: `10`,
                options: [`0. The mood (internal feelings) that I experience is very much a normal mood.`,
                `1. My mood is sad, but this sadness is pretty much like the sad mood I would feel if someone close to me died or left.`,
                `2. My mood is sad, but this sadness has a rather different quality to it than the sadness I would feel if someone close to me died or left.`,
                `3. My mood is sad, but this sadness is different from the type of sadness associated with grief or loss.`],
                required:true
            },
            {
                prompt: `Please complete either 11 or 12. For the other please choose "4. Not applicable". <br/> <br/> 11. Decreased Appetite:`,
                name: `11`,
                options: [`0. There is no change in my usual appetite`,
                `1. I eat somewhat less often or lesser amounts of food than usual.`,
                `2. I eat much less than usual and only with personal effort.`,
                `3. I rarely eat within a 24-hour period, and only with extreme personal effort or when others persuade me to eat.`,
                `4. Not applicable.`],
                required:true
            },
            {
                prompt: `12. Increased Appetite:`,
                name: `12`,
                options: [`0. There is no change from my usual appetite.`,
                `1. I feel a need to eat more frequently than usual.`,
                `2. I regularly eat more often and/or greater amounts of food than usual.`,
                `3. I feel driven to overeat both at mealtime and between meals.`,
                `4. Not applicable.`],
                required:false
            },
            {
                prompt: `Please complete either 13 or 14. For the other please choose "4. Not applicable". <br/> <br/> 13. Decreased Weight (Within the Last Two Weeks):`,
                name: `13`,
                options: [`0. I have not had a change in my weight.`,
                `1. I feel as if I've had a slight weight loss.`,
                `2. I have lost 2 pounds or more.`,
                `3. I have lost 5 pounds or more.`,
                `4. Not applicable.`],
                required:false
            },
            {
                prompt: `14. Increased Weight (Within the Last Two Weeks):`,
                name: `14`,
                options: [`0. I have not had a change in my weight`,
                `1. I feel as if I've had a slight weight gain.`,
                `2. I have gained 2 pounds or more.`,
                `3. I have gained 5 pounds or more.`,
                `4. Not applicable.`],
                required:false
            },
            {
                prompt: `15. Concentration/Decision Making:`,
                name: `15`,
                options: [`0. There is no change in my usual capacity to concentrate or make decisions.`,
                `1. I occasionally feel indecisive or find that my attention wanders.`,
                `2. Most of the time, I struggle to focus my attention or to make decisions.`,
                `3. I cannot concentrate well enough to read or cannot make even minor decisions.`],
                required:true
            },
            {
                prompt: `16. View of Myself:`,
                name: `16`,
                options: [`0. I see myself as equally worthwhile and deserving as other people.`,
                `1. I am more self-blaming than usual.`,
                `2. I largely believe that I cause problems for others.`,
                `3. I think almost constantly about major and minor defects in myself.`],
                required:true
            },
            {
                prompt: `17. View of My Future:`,
                name: `17`,
                options: [`0. I have an optimistic view of my future`,
                `1. I am occasionally pessimistic about my future, but for the most part I believe things will get better.`,
                `2. I'm pretty certain that my immediate future (1-2 months) does not hold much promise of good things for me.`,
                `3. I see no hope of anything good happening to me anytime in the future.`],
                required:true
            },
            {
                prompt: `18. Thoughts of Death or Suicide:`,
                name: `18`,
                options: [`0. I do not think of suicide or death`,
                `1. I feel that life is empty or wonder if it's worth living.`,
                `2. I think of suicide or death several times a week for several minutes.`,
                `3. I think of suicide or death several times a day in some detail, or I have made specific plans for suicide or have actually tried to take my life.`],
                required:true
            },
            {
                prompt: `19. General Interest:`,
                name: `19`,
                options: [`0. There is no change from usual in how interested I am in other people or activities.`,
                `1. I notice that I am less interested in people or activities.`,
                `2. I find I have interest in only one or two of my formerly pursued activities.`,
                `3. I have virtually no interest in formerly pursued activities.`],
                required:true
            },
            {
                prompt: `20. Energy Level:`,
                name: `20`,
                options: [`0. There is no change in my usual level of energy.`,
                `1. I get tired more easily than usual.`,
                `2. I have to make a big effort to start or finish my usual daily activities (for example, shopping, homework, cooking or going to work).`,
                `3. I really cannot carry out most of my usual daily activities because I just don't have the energy.`],
                required:true
            },
            {
                prompt: `21. Capacity for Pleasure or Enjoyment (excluding sex):`,
                name: `21`,
                options: [`0. I enjoy pleasurable activities just as much as usual.`,
                `1. I do not feel my usual sense of enjoyment from pleasurable activities.`,
                `2. I rarely get a feeling of pleasure from any activity.`,
                `3. I am unable to get any pleasure or enjoyment from anything.`],
                required:true
            },
            {
                prompt: `22. Interest in Sex (Please Rate Interest, not Activity):`,
                name: `22`,
                options: [`0. I'm just as interested in sex as usual.`,
                `1. My interest in sex is somewhat less than usual or I do not get the same pleasure from sex as I used to.`,
                `2. I have little desire for or rarely derive pleasure from sex.`,
                `3. I have absolutely no interest in or derive no pleasure from sex.`],
                required:true
            },
            {
                prompt: `23. Feeling slowed down:`,
                name: `23`,
                options: [`0. I think, speak, and move at my usual rate of speed.`,
                `1. I find that my thinking is slowed down or my voice sounds dull or flat.`,
                `2. It takes me several seconds to respond to most questions and I'm sure my thinking is slowed.`,
                `3. I am often unable to respond to questions without extreme effort.`],
                required:true
            },
            {
                prompt: `24. Feeling restless:`,
                name: `24`,
                options: [`0. I do not feel restless.`,
                `1. I'm often fidgety, wring my hands, or need to shift how I am sitting.`,
                `2. I have impulses to move about and am quite restless.`,
                `3. At times, I am unable to stay seated and need to pace around.`],
                required:true
            },
            {
                prompt: `25. Aches and pains:`,
                name: `25`,
                options: [`0. I don't have any feeling of heaviness in my arms or legs and don't have any aches or pains.`,
                `1. Sometimes I get headaches or pains in my stomach, back or joints but these pains are only sometime present and they don't stop me from doing what I need to do.`,
                `2. I have these sorts of pains most of the time.`,
                `3. These pains are so bad they force me to stop what I am doing.`],
                required:true
            },
            {
                prompt: `26. Other bodily symptoms:`,
                name: `26`,
                options: [`0. I don't have any of these symptoms: heart pounding fast, blurred vision, sweating, hot and cold flashes, chest pain, heart turning over in my chest, ringing in my ears, or shaking.`,
                `1. I have some of these symptoms but they are mild and are present only sometimes.`,
                `2. I have several of these symptoms and they bother me quite a bit.`,
                `3. I have several of these symptoms and when they occur I have to stop doing whatever I am doing.`],
                required:true
            },
            {
                prompt: `27. Panic/Phobic symptoms:`,
                name: `27`,
                options: [`0. I have no spells of panic or specific fears (phobia) (such as animals or heights)`,
                `1. I have mild panic episodes or fears that do not usually change my behavior or stop me from functioning.`,
                `2. I have significant panic episodes or fears that force me to change my behavior but do not stop me from functioning.`,
                `3. I have panic episodes at least once a week or severe fears that stop me from carrying on my daily activities.`],
                required:true
            },
            {
                prompt: `28. Constipation/diarrhea:`,
                name: `28`,
                options: [`0. There is no change in my usual bowel habits.`,
                `1. I have intermittent constipation or diarrhea which is mild.`,
                `2. I have diarrhea or constipation most of the time but it does not interfere with my day-to-day functioning.`,
                `3. I have constipation or diarrhea for which I take medicine or which interferes with my day-to-day activities.`],
                required:true
            },
            {
                prompt: `29. Interpersonal Sensitivity:`,
                name: `29`,
                options: [`0. I have not felt easily rejected, slighted, criticized or hurt by others at all.`,
                `1. I have occasionally felt rejected, slighted, criticized or hurt by others.`,
                `2.I have often felt rejected, slighted, criticized or hurt by others, but these feelings have had only slight effects on my relationships or work.`,
                `3.I have often felt rejected, slighted, criticized or hurt by others and these feelings have impaired my relationships and work.`],
                required:true
            },
            {
                prompt: `30. Leaden Paralysis/Physical Energy:`,
                name: `30`,
                options: [`0. I have not experienced the physical sensation of feeling weighted down and without physical energy.`,
                `1. I have occasionally experienced periods of feeling physically weighted down and without physical energy, but without a negative effect on work, school, or activity level.`,
                `2. I feel physically weighted down (without physical energy) more than half the time.`,
                `3. I feel physically weighted down (without physical energy) most of the time, several hours per day, several days per week.`],
                required:true
            },
        ]
    } else {
        questionsIDSSR = [ 
            {
                prompt: `1. Falling Asleep:`,
                name: `1`,
                options: [`0. I never take longer than 30 minutes to fall asleep.`,
                `1. I take at least 30 minutes to fall asleep, less than half the time.`,
                `2. I take at least 30 minutes to fall asleep, more than half the time.`,
                `3. I take more than 60 minutes to fall asleep, more than half the time.`],
                required:true
            },
            {
                prompt: `2. Sleep During the Night:`,
                name: `2`,
                options: [`0. I do not wake up at night`,
                `1. I have a restless, light sleep with a few brief awakenings each night.`,
                `2. I wake up at least once a night, but I go back to sleep easily`,
                `3. I awaken more than once a night and stay awake for 20 minutes or more, more than half the time.`],
                required:true
            },
            {
                prompt: `3. Waking Up Too Early:`,
                name: `3`,
                options: [`0. Most of the time, I awaken no more than 30 minutes before I need to get up.`,
                `1. More than half the time, I awaken more than 30 minutes before I need to get up.`,
                `2. I almost always awaken at least one hour or so before I need to, but I go back to sleep eventually.`,
                `3. I awaken at least one hour before I need to, and can't go back to sleep. `],
                required:true
            },
            {
                prompt: `4. Sleeping Too Much:`,
                name: `4`,
                options: [`0.I sleep no longer than 7-8 hours/night, without napping during the day.`,
                `1. I sleep no longer than 10 hours in a 24-hour period including naps.`,
                `2. I sleep no longer than 12 hours in a 24-hour period including naps.`,
                `3. I sleep longer than 12 hours in a 24-hour period including naps.`],
                required:true
            },
            {
                prompt: `5. Feeling Sad:`,
                name: `5`,
                options: [`0. I do not feel sad`,
                `1. I feel sad less than half the time.`,
                `2. I feel sad more than half the time.`,
                `3. I feel sad nearly all of the time`],
                required:true
            },
            {
                prompt: `6. Feeling Irritable:`,
                name: `6`,
                options: [`0. I do not feel irritable.`,
                `1. I feel irritable less than half the time`,
                `2. I feel irritable more than half the time`,
                `3. I feel extremely irritable nearly all of the time.`],
                required:true
            },
            {
                prompt: `7. Feeling Anxious or Tense:`,
                name: `7`,
                options: [`0. I do not feel anxious or tense.`,
                `1. I feel anxious (tense) less than half the time.`,
                `2. I feel anxious (tense) more than half the time.`,
                `3. I feel extremely anxious (tense) nearly all of the time.`],
                required:true
            },
            {
                prompt: `8. Response of Your Mood to Good or Desired Events:`,
                name: `8`,
                options: [`0. My mood brightens to a normal level which lasts for several hours when good events occur.`,
                `1. My mood brightens but I do not feel like my normal self when good events occur.`,
                `2. My mood brightens only somewhat to a rather limited range of desired events.`,
                `3. My mood does not brighten at all, even when very good or desired events occur in my life.`],
                required:true
            },
            {
                prompt: `9. Mood in Relation to the Time of Day:`,
                name: `9`,
                options: [`0. There is no regular relationship between my mood and the time of day.`,
                `1. My mood often relates to the time of day because of environmental events (e.g., being alone, working).`,
                `2. In general, my mood is more related to the time of day than to environmental events.`,
                `3. My mood is clearly and predictably better or worse at a particular time each day.`],
                required:true
            },
            {
                prompt: `9A. Is your mood typically worse in the: morning, afternoon or night? (chose one)`,
                name: `9A`,
                options: [`morning`,
                `afternoon`,
                `night`],
                required:true
            },
            {
                prompt: `9B. Is your mood variation attributed to the environment?`,
                name: `9B`,
                options: [`Yes`,
                `No`],
                required:true
            },
            {
                prompt: `10. The Quality of Your Mood:`,
                name: `10`,
                options: [`0. The mood (internal feelings) that I experience is very much a normal mood.`,
                `1. My mood is sad, but this sadness is pretty much like the sad mood I would feel if someone close to me died or left.`,
                `2. My mood is sad, but this sadness has a rather different quality to it than the sadness I would feel if someone close to me died or left.`,
                `3. My mood is sad, but this sadness is different from the type of sadness associated with grief or loss.`],
                required:true
            },
            {
                prompt: `Please complete either 11 or 12. For the other please choose "4. Not applicable". <br/> <br/> 11. Decreased Appetite:`,
                name: `11`,
                options: [`0. There is no change in my usual appetite`,
                `1. I eat somewhat less often or lesser amounts of food than usual.`,
                `2. I eat much less than usual and only with personal effort.`,
                `3. I rarely eat within a 24-hour period, and only with extreme personal effort or when others persuade me to eat.`,
                `4. Not applicable.`],
                required:true
            },
            {
                prompt: `12. Increased Appetite:`,
                name: `12`,
                options: [`0. There is no change from my usual appetite.`,
                `1. I feel a need to eat more frequently than usual.`,
                `2. I regularly eat more often and/or greater amounts of food than usual.`,
                `3. I feel driven to overeat both at mealtime and between meals.`,
                `4. Not applicable.`],
                required:true
            },
            {
                prompt: `Please complete either 13 or 14. For the other please choose "4. Not applicable". <br/> <br/> 13. Decreased Weight (Within the Last Two Weeks):`,
                name: `13`,
                options: [`0. I have not had a change in my weight.`,
                `1. I feel as if I've had a slight weight loss.`,
                `2. I have lost 2 pounds or more.`,
                `3. I have lost 5 pounds or more.`,
                `4. Not applicable.`],
                required:true
            },
            {
                prompt: `14. Increased Weight (Within the Last Two Weeks):`,
                name: `14`,
                options: [`0. I have not had a change in my weight`,
                `1. I feel as if I've had a slight weight gain.`,
                `2. I have gained 2 pounds or more.`,
                `3. I have gained 5 pounds or more.`,
                `4. Not applicable.`],
                required:true
            },
            {
                prompt: `15. Concentration/Decision Making:`,
                name: `15`,
                options: [`0. There is no change in my usual capacity to concentrate or make decisions.`,
                `1. I occasionally feel indecisive or find that my attention wanders.`,
                `2. Most of the time, I struggle to focus my attention or to make decisions.`,
                `3. I cannot concentrate well enough to read or cannot make even minor decisions.`],
                required:true
            },
            {
                prompt: `16. View of Myself:`,
                name: `16`,
                options: [`0. I see myself as equally worthwhile and deserving as other people.`,
                `1. I am more self-blaming than usual.`,
                `2. I largely believe that I cause problems for others.`,
                `3. I think almost constantly about major and minor defects in myself.`],
                required:true
            },
            {
                prompt: `17. View of My Future:`,
                name: `17`,
                options: [`0. I have an optimistic view of my future`,
                `1. I am occasionally pessimistic about my future, but for the most part I believe things will get better.`,
                `2. I'm pretty certain that my immediate future (1-2 months) does not hold much promise of good things for me.`,
                `3. I see no hope of anything good happening to me anytime in the future.`],
                required:true
            },
            {
                prompt: `18. Thoughts of Death or Suicide:`,
                name: `18`,
                options: [`0. I do not think of suicide or death`,
                `1. I feel that life is empty or wonder if it's worth living.`,
                `2. I think of suicide or death several times a week for several minutes.`,
                `3. I think of suicide or death several times a day in some detail, or I have made specific plans for suicide or have actually tried to take my life.`],
                required:true
            },
            {
                prompt: `19. General Interest:`,
                name: `19`,
                options: [`0. There is no change from usual in how interested I am in other people or activities.`,
                `1. I notice that I am less interested in people or activities.`,
                `2. I find I have interest in only one or two of my formerly pursued activities.`,
                `3. I have virtually no interest in formerly pursued activities.`],
                required:true
            },
            {
                prompt: `20. Energy Level:`,
                name: `20`,
                options: [`0. There is no change in my usual level of energy.`,
                `1. I get tired more easily than usual.`,
                `2. I have to make a big effort to start or finish my usual daily activities (for example, shopping, homework, cooking or going to work).`,
                `3. I really cannot carry out most of my usual daily activities because I just don't have the energy.`],
                required:true
            },
            {
                prompt: `21. Capacity for Pleasure or Enjoyment (excluding sex):`,
                name: `21`,
                options: [`0. I enjoy pleasurable activities just as much as usual.`,
                `1. I do not feel my usual sense of enjoyment from pleasurable activities.`,
                `2. I rarely get a feeling of pleasure from any activity.`,
                `3. I am unable to get any pleasure or enjoyment from anything.`],
                required:true
            },
            {
                prompt: `22. Interest in Sex (Please Rate Interest, not Activity):`,
                name: `22`,
                options: [`0. I'm just as interested in sex as usual.`,
                `1. My interest in sex is somewhat less than usual or I do not get the same pleasure from sex as I used to.`,
                `2. I have little desire for or rarely derive pleasure from sex.`,
                `3. I have absolutely no interest in or derive no pleasure from sex.`],
                required:true
            },
            {
                prompt: `23. Feeling slowed down:`,
                name: `23`,
                options: [`0. I think, speak, and move at my usual rate of speed.`,
                `1. I find that my thinking is slowed down or my voice sounds dull or flat.`,
                `2. It takes me several seconds to respond to most questions and I'm sure my thinking is slowed.`,
                `3. I am often unable to respond to questions without extreme effort.`],
                required:true
            },
            {
                prompt: `24. Feeling restless:`,
                name: `24`,
                options: [`0. I do not feel restless.`,
                `1. I'm often fidgety, wring my hands, or need to shift how I am sitting.`,
                `2. I have impulses to move about and am quite restless.`,
                `3. At times, I am unable to stay seated and need to pace around.`],
                required:true
            },
            {
                prompt: `25. Aches and pains:`,
                name: `25`,
                options: [`0. I don't have any feeling of heaviness in my arms or legs and don't have any aches or pains.`,
                `1. Sometimes I get headaches or pains in my stomach, back or joints but these pains are only sometime present and they don't stop me from doing what I need to do.`,
                `2. I have these sorts of pains most of the time.`,
                `3. These pains are so bad they force me to stop what I am doing.`],
                required:true
            },
            {
                prompt: `26. Other bodily symptoms:`,
                name: `26`,
                options: [`0. I don't have any of these symptoms: heart pounding fast, blurred vision, sweating, hot and cold flashes, chest pain, heart turning over in my chest, ringing in my ears, or shaking.`,
                `1. I have some of these symptoms but they are mild and are present only sometimes.`,
                `2. I have several of these symptoms and they bother me quite a bit.`,
                `3. I have several of these symptoms and when they occur I have to stop doing whatever I am doing.`],
                required:true
            },
            {
                prompt: `27. Panic/Phobic symptoms:`,
                name: `27`,
                options: [`0. I have no spells of panic or specific fears (phobia) (such as animals or heights)`,
                `1. I have mild panic episodes or fears that do not usually change my behavior or stop me from functioning.`,
                `2. I have significant panic episodes or fears that force me to change my behavior but do not stop me from functioning.`,
                `3. I have panic episodes at least once a week or severe fears that stop me from carrying on my daily activities.`],
                required:true
            },
            {
                prompt: `28. Constipation/diarrhea:`,
                name: `28`,
                options: [`0. There is no change in my usual bowel habits.`,
                `1. I have intermittent constipation or diarrhea which is mild.`,
                `2. I have diarrhea or constipation most of the time but it does not interfere with my day-to-day functioning.`,
                `3. I have constipation or diarrhea for which I take medicine or which interferes with my day-to-day activities.`],
                required:true
            },
            {
                prompt: `29. Interpersonal Sensitivity:`,
                name: `29`,
                options: [`0. I have not felt easily rejected, slighted, criticized or hurt by others at all.`,
                `1. I have occasionally felt rejected, slighted, criticized or hurt by others.`,
                `2.I have often felt rejected, slighted, criticized or hurt by others, but these feelings have had only slight effects on my relationships or work.`,
                `3.I have often felt rejected, slighted, criticized or hurt by others and these feelings have impaired my relationships and work.`],
                required:true
            },
            {
                prompt: `30. Leaden Paralysis/Physical Energy:`,
                name: `30`,
                options: [`0. I have not experienced the physical sensation of feeling weighted down and without physical energy.`,
                `1. I have occasionally experienced periods of feeling physically weighted down and without physical energy, but without a negative effect on work, school, or activity level.`,
                `2. I feel physically weighted down (without physical energy) more than half the time.`,
                `3. I feel physically weighted down (without physical energy) most of the time, several hours per day, several days per week.`],
                required:true
            },
        ]
    }

    let IDSSR = {
        type: jsPsychSurveyMultiChoice,
        preamble:`INVENTORY OF DEPRESSIVE SYMPTOMATOLOGY (SELF-REPORT) (IDS-SR)
        <br/><br/>
        Please select the one response to each item that best describes you for the past seven days.`,
        questions: questionsIDSSR,
        data:{
            category: "IDSSR",
        }

    }
    return IDSSR
};