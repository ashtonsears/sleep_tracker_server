const express = require("express");
const cors = require('cors');
const app = express();
const Joi = require("joi");
app.use(express.static("public"));
app.use("/uploads", express.static("uploads"));
app.use(express.json());
app.use(cors());

app.get("/api/disorders", (req, res) => {
    const disorders = [
        {
            _id: 1,
            name: "Sleep Apnea",
            image: "images/sleep_apnea_disorder_img.jpg",
            description: "Sleep apnea is a sleep-wake disorder characterized by pauses in breathing while asleep. These pauses cause people with this condition to briefly wake up, preventing them from getting a restful, healthy sleep. There are three main types of sleep apnea: obstructive sleep apnea, which occurs when the throat muscles relax and block the flow of air into the lungs; central sleep apnea, which occurs when the brain does not send proper siganls to the muscles that control breathing; and treatment-emergent central sleep apnea, which happens when someone with obstructive sleep apnea converts to central sleep apnea when receiving therapy for obstructive sleep apnea.",
            symptoms: [
                "Loud snoring",
                "Pauses in breathing during sleep",
                "Gasping for air during sleep",
                "Dry mouth",
                "Morning headaches",
                "Insomnia",
                "Excessive daytime sleepiness",
                "Issues with concentration and mood"
            ],
            diagnostic_tests: [
                "Sleep records",
                "Sleep partner questionnaire",
                "Polysomnography",
                "Home sleep tests"
            ],
            prevalence: "It is estimated that 26 percent of adults between the ages of 30 and 70 have sleep apnea. Older populations and men are generally more likely to have either central or obstructive sleep apnea",
            treatment : [
                "Continuous positive airway pressure (CPAP)",
                "Other airway pressure devices",
                "Oral Appliances",
                "Surgery"
            ]
        },
        {
            _id: 2,
            name: "Insomnia",
            image: "images/insomnia_disorder_img.jpg",
            description: "Insomnia is a common sleep disorder characterized by difficulty falling or staying asleep. Many adults can have short-term insomnia, but some people have chronic insomnia that can last for three months or more.",
            symptoms: [
                "Difficulty falling asleep",
                "Interrupted sleep",
                "Waking too early",
                "Daytime sleepiness",
                "Memory and mood problems"
            ],
            diagnostic_tests: [
                "Physical exam",
                "Sleep records",
                "Polysomnography"
            ],
            prevalence: "It is estimated that 10% of the general population suffers from chronic insomnia and 20% of the population experiences occasional insomnia symptoms. Women, older adults, and people with a socioeconomic hardship are more vulnerable to insomnia.",
            treatment : [
                "Stimulus control therapy",
                "Relaxation methods",
                "Sleep restriction",
                "Remaining passively awake",
                "Light therapy",
                "Prescription sleeping pills",
                "Sleep aids available without prescription"
            ]
        },
        {
            _id: 3,
            name: "Narcolepsy",
            image: "images/narcolepsy_disorder_img.jpg",
            description: "Narcolepsy is a sleep-wake disorder characterized by excessive daytime sleepiness, sudden muscle weakness (cataplexy), sleep-related hallucinations, and sleep paralysis. There are two types of narcolepsy. Type 1 narcolepsy involves cataplexy, while type 2 narcolepsy does not.",
            symptoms: [
                "Excessive daytime sleepiness",
                "Automatic behaviors",
                "Cataplexy",
                "Sleep paralysis",
                "Sleep-related hallucinations",
                "Insomnia",
                "Changes in rapid eye movement sleep (REM)"
            ],
            diagnostic_tests: [
                "Epiworth Sleepiness Scale",
                "Sleep records",
                "Polysomnography",
                "Multiple sleep latency test",
                "Lumbar puncture"
            ],
            prevalence: "Narcolepsy affects an estimated 1 in every 2,000 people in the United States. It is estimated that 50% of people with narcolepsy are undiagnosed.",
            treatment : [
                "Stimulants",
                "Serotonin and norepinephrine reuptake inhibitors (SNRIs) or selective serotonin reuptake inhibitors (SSRIs)",
                "Tricyclic antidepressants",
                "Sodium oxybate and oxybate salts",
                "Lifestyle and home remedies"
            ]
        },
        {
            _id: 4,
            name: "Restless Legs Syndrome",
            image: "images/restless_leg_disorder_img.jpg",
            description: "Restless legs syndrome (RLS) is a movement disorder characterized by a strong urge to move the legs when asleep or resting.",
            symptoms: [
                "Uncomfortable sensations that begin while resting",
                "Relief with movement",
                "Worsening of symptoms in the evening",
                "Nighttime leg twitching"
            ],
            diagnostic_tests: [
                "Have a strong, often irresistible urge to move the legs, often occuring with uncomfortable feelings in the legs",
                "Have symptoms that get worse when resting",
                "Have symptoms that are partially or temporarily relieved by leg movement",
                "Have symptoms that get worse at night",
                "Symptoms cannot be explained solely by another medical or behavioral condition"
            ],
            prevalence: "It is estimated that between 5 and 10 percent of adults and 2 to 4 percent of children have RLS. This disorder affects women more than men.",
            treatment : [
                "Medicines affecting calcium channels",
                "Medicines that increase dopamine in the brain",
                "Opioids"
            ]
        },
        {
            _id: 5,
            name: "Shift Work Sleep Disorder",
            image: "images/shift_work_disorder_img.jpg",
            description: "Shift work sleep disorder (SWSD) is a circadian rhythm sleep disorder characterized by an abnormal sleep/wake schedule. This disorder commonly affects people who work nontraditional hours, like overnight shifts.",
            symptoms: [
                "Insomnia",
                "Excessive sleepiness",
                "Headaches",
                "Issues with concentration and mood"
            ],
            diagnostic_tests: [
                "Sleep records",
                "Polysomnography"
            ],
            prevalence: "It is estimated that one in five shift workers experience SWSD.",
            treatment : [
                "Changes to work routine or schedule",
                "Changes to sleep routine at home",
                "Bright light therapy",
                "Melatonin supplement",
                "Sleep medications",
                "Wake promoting medications"
            ]
        },
        {
            _id: 6,
            name: "Delayed Sleep Phase Syndrome",
            image: "images/delayed_sleep_disorder_img.jpg",
            description: "Delayed sleep phase syndrome is a circadian rhythm disorder that is characterized by a delay of two hours or more from usual sleep patterns. This means that people with this disorder fall asleep later and wake up later than normal. There are two types of delayed sleep phase syndrome: circadian aligned, meaning the onset of melatonin is less than two hours before falling asleep, and circadian misaligned, meaning the onset of melatonin happens more than two hours before falling asleep.",
            symptoms: [
                "Insomnia",
                "Severe sleep inertia",
                "Excessive daytime sleepiness"
            ],
            diagnostic_tests: [
                "Actigraphy",
                "Sleep records",
                "Polysomnography"
            ],
            prevalence: "An estimated 3.3 to 4.6 percent of adolescents and young adults suffer from delayed sleep phase disorder. The prevalence of this disorder is decreased in adults, with only an estimated 0.2 to 1.7 percent of the adult population having delayed sleep phase syndrome.",
            treatment : [
                "Changing sleeping habits",
                "Adjusting bedtime schedule",
                "Light therapy",
                "Taking medications"
            ]
        },
        {
            _id: 7,
            name: "REM Sleep Behavior Disorder",
            image: "images/rem_disorder_img.jpg",
            description: "REM sleep behavior disorder (RBD) is a conditioned characterized by physically acting out dreams with sounds and movements during REM sleep. This disorder may be associated with other neurological conditions like Lewy body dementia or Parkinson's disease.",
            symptoms: [
                "Excessive movement when sleeping",
                "Abnormal noises when sleeping",
                "Remembering dreams vividly"
            ],
            diagnostic_tests: [
                "Physical and neurological exam",
                "Sleep partner questionnaire",
                "Polysomnography"
            ],
            prevalence: "It is estimated that 0.5 to 1.5 percent of the general population has RBD.",
            treatment : [
                "Physical safeguards",
                "Melatonin",
                "Clonazepam"
            ]
        },
        {
            _id: 8,
            name: "Idiopathic Hypersomnia",
            image: "images/idiopathic_hypersomnia_disorder_img.jpeg",
            description: "Idiopathic hypersomnia is a condition that is characterized by extreme sleepiness during the day, no matter how much sleep someone gets. People with this condition often have trouble waking up from sleep and do not feel refreshed by naps.",
            symptoms: [
                "Excessive daytime sleepiness",
                "Long sleep times",
                "Severe sleep inertia",
                "Confusion upon waking",
                "Difficulty thinking or concentrating",
                "Long naps"
            ],
            diagnostic_tests: [
                "Epiworth Sleepiness Scale",
                "Sleep records",
                "Polysomnography",
                "Multiple sleep latency test"
            ],
            prevalence: "It is estimated that only 0.002 to 0.010 percent of the population suffers from idiopathic hypersomnia. This disorder is more frequently found in women.",
            treatment : [
                "Stimulants",
                "Lifestyle and home remedies"
            ]
        },
        {
            _id: 9,
            name: "Parasomnias",
            image: "images/parasomnias_disorder_img.jpg",
            description: "Parasomnias are disruptive behaviors or events that affect a person's sleep. There are three groupings of parasomnias based on the stage of sleep in which they happen: non-rapid eye movement (non-REM) sleep parasomnias, rapid eye movement (REM) sleep parasomnias, and other parasomnias.",
            symptoms: [
                "Sleep terrors",
                "Somnambulism",
                "Confusional arousals",
                "Nightmare disorder",
                "Sleep paralysis",
                "REM sleep behavior disorder",
                "Sleep enuresis",
                "Catathrenia",
                "Exploding head syndrome",
                "Sleep-related hallucinations",
                "Sleep-related eating disorder",
                "Sexsomnia"
            ],
            diagnostic_tests: [
                "Polysomnography",
                "Video electroencephalogram or sleep electroencephalogram"
            ],
            prevalence: "It is estimated that 4 to 67% of adults experience some type of parasomnia.",
            treatment : [
                "Changing sleeping habits",
                "Follow a regular sleep-wake schedule",
                "Limit alcohol and drug intake",
                "Cognitive behavorial therapy",
                "Benzodiazepines",
                "Selective serotonin reuptake inhibitors (SSRIs)",
                "Tricyclic antidepressants",
                "Clonazepam",
                "Melatonin"
            ]
        }
    ]
    res.send(disorders);
});

let symptoms = [
    {
        symptom: "Symptom Name",
        duration: 1,
        severity: 1,
        date: "04/14/2025",
        time: "12:00 am",
        notes: "Notes"
    }
]

app.get("/api/sleep_symptoms", (req, res) => {
    res.send(symptoms);
});

app.post("/api/sleep_symptoms", (req, res) => {
    console.log("Incoming symptom:", req.body);
    const result = validateSymptom(req.body);

    if (result.error) {
        console.error("Validation error:", result.error.details);
        return res.status(400).send(result.error.details[0].message);
    }

    const symptom = {
        symptom: req.body.symptom,
        duration: req.body.duration,
        severity: req.body.severity,
        date: req.body.date,
        time: req.body.time,
        notes: req.body.notes
    }

    symptoms.push(symptom);
    res.status(200).send(symptom);
});

const validateSymptom = (symptom) => {
    const schema = Joi.object({
        symptom: Joi.string().min(3).max(50).required(),
        duration: Joi.number().integer().min(1).max(1440).required(),
        severity: Joi.number().integer().min(1).max(10).required(),
        date: Joi.string().pattern(/^\d{4}[-/]\d{2}[-/]\d{2}$/).required(),
        time: Joi.string().pattern(/^(0?[1-9]|1[0-2]):[0-5][0-9]\s?(AM|PM)$/i).required(),
        notes: Joi.string().max(500)
    });

    return schema.validate(symptom);
};

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});