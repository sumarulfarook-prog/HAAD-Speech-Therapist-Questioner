
"use strict";

/*
 * Speech Therapist Exam Practice — question bank
 *
 * Required format:
 * id          : unique question identifier
 * difficulty  : Easy, Moderate, or Hard
 * topic       : category displayed in the topic filter
 * question    : question stem
 * options     : exactly four answer choices
 * answer      : zero-based index of the correct choice
 * explanation : rationale for the correct answer
 *
 * Add new questions to QUESTION_BANK using the same structure.
 */

const QUESTION_BANK = [
  {
    id:"ST001",difficulty:"Easy",topic:"Anatomy and Physiology",
    question:"Which structure contains the vocal folds?",
    options:["Larynx","Pharynx","Hard palate","Nasopharynx"],
    answer:0,
    explanation:"The vocal folds are located within the larynx and vibrate as air passes through them during typical voiced phonation."
  },
  {
    id:"ST002",difficulty:"Easy",topic:"Speech Sound Disorders",
    question:"A child consistently says 'tat' for 'cat'. Which process best describes this example?",
    options:["Gliding","Final consonant deletion","Fronting","Stopping"],
    answer:2,
    explanation:"Velar /k/ is replaced by the alveolar /t/. This is a place-of-articulation change commonly described as velar fronting."
  },
  {
    id:"ST003",difficulty:"Easy",topic:"Language Development",
    question:"Which skill is an example of receptive language?",
    options:["Repeating a sentence aloud","Understanding a spoken instruction","Producing a story","Naming a pictured object"],
    answer:1,
    explanation:"Receptive language involves understanding spoken, written, or signed language. Following a spoken instruction is an example."
  },
  {
    id:"ST004",difficulty:"Easy",topic:"Fluency Disorders",
    question:"Which behaviour is most characteristic of stuttering?",
    options:["Consistent hoarseness","Reduced hearing sensitivity","Difficulty chewing solids","Sound repetitions, prolongations, or blocks"],
    answer:3,
    explanation:"Stuttering can involve repetitions, prolongations, and blocks, sometimes accompanied by physical tension or avoidance."
  },
  {
    id:"ST005",difficulty:"Easy",topic:"Voice Disorders",
    question:"Which term refers to an unusually rough or breathy voice quality?",
    options:["Dysphonia","Dysphagia","Dysarthria","Aphasia"],
    answer:0,
    explanation:"Dysphonia is a disorder or impairment of voice. Dysphagia concerns swallowing, dysarthria concerns motor speech, and aphasia concerns language."
  },
  {
    id:"ST006",difficulty:"Easy",topic:"Swallowing Disorders",
    question:"Which term means difficulty swallowing?",
    options:["Dysarthria","Dysphagia","Dysphonia","Dyslexia"],
    answer:1,
    explanation:"Dysphagia refers to difficulty with swallowing and may affect oral, pharyngeal, or oesophageal stages."
  },
  {
    id:"ST007",difficulty:"Easy",topic:"Neurogenic Communication Disorders",
    question:"A person has impaired language comprehension and expression following a stroke. Which broad disorder should be considered?",
    options:["A voice disorder","A resonance disorder","Aphasia","A fluency disorder"],
    answer:2,
    explanation:"Aphasia is an acquired language disorder commonly associated with brain injury such as stroke. Assessment is needed to establish the person's specific profile."
  },
  {
    id:"ST008",difficulty:"Easy",topic:"Assessment",
    question:"What is the primary purpose of obtaining a case history before a speech-language assessment?",
    options:["To replace direct assessment","To determine a diagnosis without testing","To avoid speaking with the client","To gather relevant developmental, medical, and communication information"],
    answer:3,
    explanation:"A case history helps the clinician understand the presenting concerns, development, medical background, languages, and everyday communication needs."
  },
  {
    id:"ST009",difficulty:"Easy",topic:"Augmentative and Alternative Communication",
    question:"What does AAC stand for?",
    options:["Augmentative and Alternative Communication","Auditory Assessment Criteria","Articulation and Accent Correction","Automatic Acoustic Calibration"],
    answer:0,
    explanation:"AAC refers to augmentative and alternative communication methods that supplement or replace speech when needed."
  },
  {
    id:"ST010",difficulty:"Easy",topic:"Hearing and Communication",
    question:"Why is hearing status relevant when assessing a child with delayed speech and language?",
    options:["Hearing determines intelligence","Reduced access to sound may affect speech and language development","A hearing test directly diagnoses autism","Hearing has no relationship to language learning"],
    answer:1,
    explanation:"Hearing difficulties can reduce access to speech sounds and spoken language. Hearing assessment is one part of a broader evaluation when indicated."
  },
  {
    id:"ST011",difficulty:"Moderate",topic:"Speech Sound Disorders",
    question:"A child produces /w/ instead of /r/ in words. Which phonological pattern best fits this substitution?",
    options:["Backing","Final consonant deletion","Gliding","Weak-syllable deletion"],
    answer:2,
    explanation:"Gliding occurs when a liquid consonant, such as /r/ or /l/, is replaced by a glide such as /w/ or /j/. Interpretation depends on the child's age, language, and speech system."
  },
  {
    id:"ST012",difficulty:"Moderate",topic:"Language Development",
    question:"A child uses short, telegraphic utterances and has difficulty combining words despite adequate opportunities to communicate. What is the most appropriate next step?",
    options:["Immediately diagnose an intellectual disability","Assume the child will outgrow the difficulty","Begin voice therapy without assessment","Conduct a comprehensive language assessment with developmental and contextual information"],
    answer:3,
    explanation:"A comprehensive assessment should examine receptive and expressive language, developmental history, functional communication, and relevant contextual factors before planning intervention."
  },
  {
    id:"ST013",difficulty:"Moderate",topic:"Neurogenic Communication Disorders",
    question:"A person speaks fluently but has poor comprehension and produces semantically unrelated words after a stroke. Which aphasia profile is most suggestive?",
    options:["Wernicke-type aphasia","Broca-type aphasia","Pure dysarthria","Isolated apraxia of speech"],
    answer:0,
    explanation:"Wernicke-type aphasia is classically associated with fluent speech, impaired auditory comprehension, and reduced meaningful content. Actual presentations vary and require comprehensive assessment."
  },
  {
    id:"ST014",difficulty:"Moderate",topic:"Motor Speech Disorders",
    question:"Which finding most strongly supports dysarthria rather than aphasia?",
    options:["Impaired naming and sentence comprehension","Imprecise articulation associated with impaired speech-motor control","Difficulty understanding word meanings","Agrammatic language formulation"],
    answer:1,
    explanation:"Dysarthria is a motor speech disorder caused by impaired neuromuscular control of speech. Aphasia primarily affects language processing."
  },
  {
    id:"ST015",difficulty:"Moderate",topic:"Motor Speech Disorders",
    question:"A patient makes inconsistent articulatory errors, struggles to sequence speech movements, and shows disrupted transitions between sounds. Which disorder should be investigated?",
    options:["Conductive hearing loss","Isolated dysphonia","Apraxia of speech","Oesophageal dysphagia"],
    answer:2,
    explanation:"Apraxia of speech is a motor-planning/programming disorder. Inconsistent errors and disrupted transitions can support this hypothesis, but differential diagnosis requires a full motor-speech assessment."
  },
  {
    id:"ST016",difficulty:"Moderate",topic:"Voice Disorders",
    question:"A teacher reports persistent hoarseness after weeks of heavy voice use. What is the most appropriate recommendation?",
    options:["Start forceful vocal exercises without assessment","Whisper throughout the working day","Ignore the symptoms if there is no pain","Arrange appropriate medical or laryngeal evaluation and provide safe interim voice-use advice"],
    answer:3,
    explanation:"Persistent dysphonia warrants appropriate evaluation, especially when it does not resolve. Management should be guided by the cause; avoid prescribing intensive voice therapy before suitable assessment."
  },
  {
    id:"ST017",difficulty:"Moderate",topic:"Swallowing Disorders",
    question:"During a meal, a patient develops repeated coughing and a wet-sounding voice after swallowing. What should the clinician do?",
    options:["Treat these as possible signs of swallowing difficulty and arrange appropriate assessment","Assume aspiration is confirmed without further assessment","Recommend unrestricted thin liquids for every patient","Ignore the symptoms if the patient finishes the meal"],
    answer:0,
    explanation:"Coughing and wet voice can be warning signs of swallowing difficulty but do not independently confirm aspiration. Follow appropriate clinical protocols and refer for swallowing assessment as indicated."
  },
  {
    id:"ST018",difficulty:"Moderate",topic:"Assessment",
    question:"Why should assessment materials and interpretation account for a client's language and cultural background?",
    options:["To ensure every client receives identical test items regardless of language","To reduce the risk of confusing language difference with disorder","To avoid obtaining a case history","To remove the need for clinical judgement"],
    answer:1,
    explanation:"Language and cultural differences can affect test performance. Clinicians should use appropriate tools, interpreters or language resources when needed, and interpret findings within the person's linguistic context."
  },
  {
    id:"ST019",difficulty:"Moderate",topic:"Augmentative and Alternative Communication",
    question:"A nonspeaking child has reliable pointing and intentional communication. What is an appropriate AAC principle?",
    options:["Delay AAC until speech therapy has failed","Use only a high-tech device in all settings","Select a system based on the child's access, communication needs, partners, and environments","Require perfect symbol recognition before introducing AAC"],
    answer:2,
    explanation:"AAC should be individualised and support functional communication. Aided and unaided options, access methods, communication partners, and everyday environments should all be considered."
  },
  {
    id:"ST020",difficulty:"Moderate",topic:"Fluency Disorders",
    question:"A school-age child who stutters begins avoiding classroom speaking. Which clinical priority is especially important?",
    options:["Focus exclusively on eliminating every disfluency","Tell the child to slow down whenever speaking","Avoid discussing the child's concerns","Assess communication impact, feelings, avoidance, and participation as well as speech behaviours"],
    answer:3,
    explanation:"A comprehensive fluency assessment considers observable speech, the child's experience, emotional responses, avoidance, and effects on participation. Intervention goals should be individualised."
  },
  {
    id:"ST021",difficulty:"Hard",topic:"Neurogenic Communication Disorders",
    question:"A patient with aphasia performs poorly on confrontation naming. Which additional assessment strategy best helps determine whether the difficulty is limited to word retrieval?",
    options:["Compare naming with comprehension, repetition, semantic knowledge, and functional communication tasks","Use naming performance alone to determine the entire language profile","Assume every naming error reflects impaired visual recognition","Assess voice quality only"],
    answer:0,
    explanation:"Naming performance can be affected by several language and cognitive processes. Comparing multiple task types helps establish a more complete profile and informs differential interpretation."
  },
  {
    id:"ST022",difficulty:"Hard",topic:"Motor Speech Disorders",
    question:"Which combination is most useful when differentiating apraxia of speech from dysarthria?",
    options:["Only the patient's age and occupation","Error consistency, prosody, transitions, strength and coordination findings, and performance across speech tasks","Only a single sustained vowel","Only a reading-comprehension score"],
    answer:1,
    explanation:"Differentiation relies on a pattern of findings. Apraxia primarily concerns speech motor planning/programming, whereas dysarthria involves impaired motor execution/control; mixed presentations can occur."
  },
  {
    id:"ST023",difficulty:"Hard",topic:"Swallowing Disorders",
    question:"A patient has suspected pharyngeal dysphagia, but the bedside examination does not establish the physiology of swallowing. What is the best next consideration?",
    options:["Prescribe thickened fluids automatically for every meal","Conclude that swallowing is normal if no cough occurs","Consider an appropriate instrumental examination, such as VFSS or FEES, when clinically indicated","Use a speech articulation test to confirm aspiration"],
    answer:2,
    explanation:"Instrumental assessment may be needed to visualise swallowing physiology and guide management. The choice of VFSS or FEES depends on the clinical question, patient factors, and local protocols."
  },
  {
    id:"ST024",difficulty:"Hard",topic:"Assessment",
    question:"A standardised language test score conflicts with caregiver reports and observations of everyday communication. What is the strongest clinical approach?",
    options:["Discard all caregiver information","Use only the single highest score","Diagnose from the standard score alone","Integrate standardised results with history, observation, language sampling, functional reports, and other relevant evidence"],
    answer:3,
    explanation:"Clinical decisions should integrate multiple sources of evidence. Differences between test performance and daily communication should be explored rather than ignored."
  },
  {
    id:"ST025",difficulty:"Hard",topic:"Augmentative and Alternative Communication",
    question:"A client with severe motor impairment understands language well but cannot reliably touch small symbols on a tablet. What should guide AAC access planning?",
    options:["Assess alternative access methods such as partner-assisted scanning, switches, or eye gaze as appropriate","Conclude that AAC is unsuitable because direct touch is unreliable","Reduce vocabulary to two choices permanently without further assessment","Require independent handwriting before AAC can be used"],
    answer:0,
    explanation:"AAC access should match motor, sensory, language, and environmental needs. Alternative access methods can improve communication opportunities and should be evaluated individually."
  },
  {
    id:"ST026",difficulty:"Hard",topic:"Voice Disorders",
    question:"A patient with suspected muscle tension dysphonia has persistent voice symptoms. Which approach best supports evidence-informed care?",
    options:["Prescribe the same exercise programme to all patients with hoarseness","Ensure appropriate differential assessment and use findings to guide individualised management","Assume a normal speaking volume rules out a voice disorder","Recommend prolonged complete silence without clinical assessment"],
    answer:1,
    explanation:"Voice symptoms can have different causes. Appropriate evaluation helps guide safe, individualised treatment and determine whether medical or laryngeal review is required."
  },
  {
    id:"ST027",difficulty:"Easy",topic:"Anatomy and Physiology",
    question:"Which structure separates the oral cavity from the nasal cavity during much of typical speech production?",
    options:["Epiglottis alone","Vocal folds","The palate, including the hard and soft palate","The trachea"],
    answer:2,
    explanation:"The palate forms the roof of the oral cavity and floor of the nasal cavity. The soft palate contributes to velopharyngeal closure during many oral speech sounds."
  },
  {
    id:"ST028",difficulty:"Moderate",topic:"Hearing and Communication",
    question:"A child responds inconsistently to spoken directions in a noisy classroom. What is the most appropriate interpretation?",
    options:["This proves the child has ADHD","This proves the child has a language disorder","This proves the child is deliberately not listening","Several factors may contribute, so gather history and assess hearing, language, attention, and listening context as indicated"],
    answer:3,
    explanation:"Inconsistent responses in noise are not specific to one diagnosis. Assessment should consider the listening environment and relevant hearing, language, attention, and developmental factors."
  },
  {
    id:"ST029",difficulty:"Moderate",topic:"Speech Sound Disorders",
    question:"When assessing a multilingual child who has speech sound differences, what is the best practice?",
    options:["Consider the child's languages, dialects, exposure, and speech patterns before identifying a disorder","Compare performance only with monolingual norms for a different language","Assume differences across languages always indicate impairment","Assess only the language spoken least often"],
    answer:0,
    explanation:"Speech development must be interpreted in relation to the child's linguistic experience. Differences expected from language or dialect should not automatically be labelled as disorders."
  },
  {
    id:"ST030",difficulty:"Hard",topic:"Language Development",
    question:"A bilingual child performs differently across the two languages. Which evidence is most informative when evaluating possible developmental language disorder?",
    options:["A single vocabulary score in the less-exposed language","Developmental history and language abilities across both languages, interpreted with appropriate tools and exposure information","The fact that the child mixes languages","The assumption that bilingualism causes language disorder"],
    answer:1,
    explanation:"Evaluation of bilingual children should account for language exposure and use, assess abilities across languages where possible, and draw on multiple sources of evidence. Bilingualism itself does not cause a language disorder."
  }
];

/*
 * Basic bank integrity checks.
 * These messages appear in the browser developer console.
 */
(() => {
  const ids = QUESTION_BANK.map(q => q.id);
  const duplicateIds = ids.filter((id, i) => ids.indexOf(id) !== i);
  const invalid = QUESTION_BANK.filter(q =>
    !q.id ||
    !["Easy","Moderate","Hard"].includes(q.difficulty) ||
    !q.topic ||
    !q.question ||
    !Array.isArray(q.options) ||
    q.options.length !== 4 ||
    !Number.isInteger(q.answer) ||
    q.answer < 0 ||
    q.answer > 3 ||
    !q.explanation
  );

  console.info("Speech Therapist question bank:", QUESTION_BANK.length, "questions");
  console.info("Difficulty totals:", {
    Easy: QUESTION_BANK.filter(q => q.difficulty === "Easy").length,
    Moderate: QUESTION_BANK.filter(q => q.difficulty === "Moderate").length,
    Hard: QUESTION_BANK.filter(q => q.difficulty === "Hard").length
  });

  if (duplicateIds.length) console.error("Duplicate question IDs:", duplicateIds);
  if (invalid.length) console.error("Invalid question entries:", invalid);
})();

  // ===== EASY: ST031–ST050 =====
  {
    id:"ST031",difficulty:"Easy",topic:"Anatomy and Physiology",
    question:"Which structure primarily carries air from the larynx toward the lungs?",
    options:["Oesophagus","Trachea","Hard palate","Tongue"],
    answer:1,
    explanation:"The trachea carries air from the larynx toward the bronchi. The oesophagus carries food and liquid toward the stomach."
  },
  {
    id:"ST032",difficulty:"Easy",topic:"Anatomy and Physiology",
    question:"Which articulator is most directly involved in producing bilabial sounds such as /p/ and /b/?",
    options:["Tongue tip and alveolar ridge","Lower lip and upper teeth","Both lips","Tongue dorsum and soft palate"],
    answer:2,
    explanation:"Bilabial sounds are produced using both lips. Examples include /p/, /b/, and /m/ in English."
  },
  {
    id:"ST033",difficulty:"Easy",topic:"Language Development",
    question:"Which behaviour is an example of expressive language?",
    options:["Following a spoken direction","Recognising a familiar voice","Understanding a question","Using words to request a toy"],
    answer:3,
    explanation:"Expressive language involves communicating ideas, needs, and messages. Using words to request a toy is an expressive language behaviour."
  },
  {
    id:"ST034",difficulty:"Easy",topic:"Speech Sound Disorders",
    question:"Which sound is typically classified as a nasal consonant in English?",
    options:["/m/","/s/","/f/","/t/"],
    answer:0,
    explanation:"For /m/, air passes through the nasal cavity while the oral passage is closed. /s/, /f/, and /t/ are oral consonants."
  },
  {
    id:"ST035",difficulty:"Easy",topic:"Voice Disorders",
    question:"Which system supplies the airflow used for typical speech?",
    options:["Visual system","Respiratory system","Digestive system","Urinary system"],
    answer:1,
    explanation:"The respiratory system provides airflow that supports speech production. Phonation and articulation modify this airflow into speech."
  },
  {
    id:"ST036",difficulty:"Easy",topic:"Assessment",
    question:"What is the main purpose of a hearing screening?",
    options:["To determine a person's complete language profile","To diagnose every type of auditory processing difficulty","To identify people who may need further hearing evaluation","To measure speech intelligibility directly"],
    answer:2,
    explanation:"A hearing screening identifies individuals who may need a more comprehensive hearing assessment. It does not diagnose every hearing condition."
  },
  {
    id:"ST037",difficulty:"Easy",topic:"Fluency Disorders",
    question:"Which response is generally supportive when speaking with a person who stutters?",
    options:["Finish every sentence for them","Tell them to stop and start again","Avoid all eye contact","Listen patiently and allow them time to finish"],
    answer:3,
    explanation:"Patient listening supports natural communication and reduces unnecessary time pressure. Responses should respect the person's preferences and communication needs."
  },
  {
    id:"ST038",difficulty:"Easy",topic:"Swallowing Disorders",
    question:"Which professional may be involved in assessing swallowing function?",
    options:["A suitably trained speech-language pathologist","A graphic designer","A travel agent","A civil surveyor"],
    answer:0,
    explanation:"Speech-language pathologists with appropriate dysphagia training may assess swallowing and coordinate care with the wider healthcare team."
  },
  {
    id:"ST039",difficulty:"Easy",topic:"Augmentative and Alternative Communication",
    question:"Which is an example of unaided AAC?",
    options:["A speech-generating tablet","A communication book","A natural gesture","A dedicated voice-output device"],
    answer:2,
    explanation:"Unaided AAC uses the person's body, such as gestures or signs, without an external communication aid. Books and electronic devices are aided AAC."
  },
  {
    id:"ST040",difficulty:"Easy",topic:"Neurogenic Communication Disorders",
    question:"Which condition primarily affects the ability to understand and use language after acquired brain injury?",
    options:["Dysphonia","Aphasia","Dysphagia","Hypernasality"],
    answer:1,
    explanation:"Aphasia affects language, including speaking, understanding, reading, or writing. Its presentation depends on the location and extent of the brain injury."
  },
  {
    id:"ST041",difficulty:"Easy",topic:"Anatomy and Physiology",
    question:"Which structure is commonly called the voice box?",
    options:["Pharynx","Trachea","Larynx","Oesophagus"],
    answer:2,
    explanation:"The larynx houses the vocal folds and plays a major role in voice production and airway protection."
  },
  {
    id:"ST042",difficulty:"Easy",topic:"Language Development",
    question:"Which activity most directly encourages a young child's vocabulary during everyday play?",
    options:["Repeatedly correcting every pronunciation error","Asking only yes-or-no questions","Withholding names until the child speaks perfectly","Naming objects and expanding on the child's communication"],
    answer:3,
    explanation:"Responsive interaction, naming objects, and expanding a child's messages can support meaningful vocabulary learning in everyday contexts."
  },
  {
    id:"ST043",difficulty:"Easy",topic:"Speech Sound Disorders",
    question:"Which term describes how understandable a person's speech is to a listener?",
    options:["Intelligibility","Resonance","Pitch","Prosody"],
    answer:0,
    explanation:"Speech intelligibility refers to how much of a speaker's message a listener can understand. It can be influenced by speech production, context, and listener familiarity."
  },
  {
    id:"ST044",difficulty:"Easy",topic:"Hearing and Communication",
    question:"Which test is commonly used to assess hearing thresholds across selected frequencies?",
    options:["Language sampling","Pure-tone audiometry","Oral-motor screening alone","A fluency rating scale"],
    answer:1,
    explanation:"Pure-tone audiometry measures hearing thresholds at selected frequencies. Other tests may be needed to assess middle-ear function or broader auditory concerns."
  },
  {
    id:"ST045",difficulty:"Easy",topic:"Voice Disorders",
    question:"What does pitch refer to in voice?",
    options:["How clearly a word is understood","The loudness of the voice only","The perceived highness or lowness of a sound","The amount of saliva in the mouth"],
    answer:2,
    explanation:"Pitch is the perceptual correlate of fundamental frequency. It differs from loudness, which relates to perceived intensity."
  },
  {
    id:"ST046",difficulty:"Easy",topic:"Swallowing Disorders",
    question:"Which is a potential warning sign of swallowing difficulty during a meal?",
    options:["Enjoying the taste of food","Requesting a preferred meal","Using a spoon independently","Repeated coughing during swallowing"],
    answer:3,
    explanation:"Repeated coughing during swallowing may indicate a swallowing problem. It does not by itself prove aspiration, so appropriate assessment is important."
  },
  {
    id:"ST047",difficulty:"Easy",topic:"Assessment",
    question:"Why should a clinician ask about a client's everyday communication goals?",
    options:["To make intervention relevant to functional needs","To avoid examining communication abilities","To ensure every client receives identical therapy","To replace all objective assessment"],
    answer:0,
    explanation:"Individual communication goals help connect assessment and intervention with activities, relationships, participation, and the client's priorities."
  },
  {
    id:"ST048",difficulty:"Easy",topic:"Neurogenic Communication Disorders",
    question:"Which disorder primarily involves weakness or impaired coordination of the muscles used for speech?",
    options:["Aphasia","Dysarthria","Dyslexia","Language difference"],
    answer:1,
    explanation:"Dysarthria results from impaired neuromuscular control of speech. It may affect articulation, voice, resonance, respiration, and prosody."
  },
  {
    id:"ST049",difficulty:"Easy",topic:"Augmentative and Alternative Communication",
    question:"What is one important goal of AAC intervention?",
    options:["Ensure every person uses the same device","Prevent gestures from being used","Increase effective functional communication","Require speech before access to AAC"],
    answer:2,
    explanation:"AAC aims to improve meaningful communication and participation. The appropriate system and intervention approach depend on the individual."
  },
  {
    id:"ST050",difficulty:"Easy",topic:"Professional Practice",
    question:"What should a clinician do with confidential client information?",
    options:["Share it casually with friends","Post identifiable details publicly","Send it to anyone who asks","Protect it and disclose it only when authorised or legally justified"],
    answer:3,
    explanation:"Client information must be protected according to applicable privacy law, professional ethics, consent requirements, and organisational policy."
  },

  // ===== MODERATE: ST051–ST070 =====
  {
    id:"ST051",difficulty:"Moderate",topic:"Speech Sound Disorders",
    question:"A child omits final consonants in many words, saying 'ca' for 'cat' and 'do' for 'dog'. Which pattern best describes this?",
    options:["Final consonant deletion","Initial consonant deletion","Gliding","Assimilation"],
    answer:0,
    explanation:"Final consonant deletion occurs when a word-final consonant is omitted. Its clinical significance depends on age, language, dialect, and frequency."
  },
  {
    id:"ST052",difficulty:"Moderate",topic:"Language Development",
    question:"Which measure can provide a useful sample of a child's spontaneous expressive language?",
    options:["A pure-tone hearing threshold alone","A language sample collected during conversation or play","A single oral-motor movement","A visual acuity chart"],
    answer:1,
    explanation:"A spontaneous language sample can reveal vocabulary, grammatical structures, utterance length, discourse, and pragmatic skills in context."
  },
  {
    id:"ST053",difficulty:"Moderate",topic:"Fluency Disorders",
    question:"A client who stutters reports substituting words to avoid anticipated stuttering. What does this most directly suggest?",
    options:["A confirmed hearing impairment","An isolated resonance disorder","Avoidance behaviour associated with stuttering","Normal speech development in every context"],
    answer:2,
    explanation:"Word substitution may be an avoidance strategy associated with anticipated stuttering. Assessment should explore the client's experience and communication impact."
  },
  {
    id:"ST054",difficulty:"Moderate",topic:"Voice Disorders",
    question:"Which voice measure represents the number of vocal-fold vibration cycles per second?",
    options:["Speech intelligibility","Maximum phonation time","Articulation rate","Fundamental frequency"],
    answer:3,
    explanation:"Fundamental frequency is measured in hertz and reflects the rate of vocal-fold vibration during periodic phonation."
  },
  {
    id:"ST055",difficulty:"Moderate",topic:"Swallowing Disorders",
    question:"Why is the absence of coughing insufficient to rule out aspiration?",
    options:["Aspiration can occur without an obvious cough response","Coughing occurs only during oral preparation","Every swallow causes coughing in healthy adults","A bedside examination visualises the entire swallow"],
    answer:0,
    explanation:"Some individuals aspirate silently without an observable cough. When clinically indicated, instrumental evaluation may be needed to assess swallowing physiology."
  },
  {
    id:"ST056",difficulty:"Moderate",topic:"Neurogenic Communication Disorders",
    question:"Which task is especially relevant when assessing a person's ability to retrieve spoken words?",
    options:["Measuring blood pressure","Confrontation naming of pictured objects","Testing visual acuity only","Measuring maximum walking speed"],
    answer:1,
    explanation:"Confrontation naming asks a person to name presented items. Performance should be interpreted alongside comprehension, semantic knowledge, repetition, and other relevant skills."
  },
  {
    id:"ST057",difficulty:"Moderate",topic:"Motor Speech Disorders",
    question:"Which speech characteristic is often associated with hypokinetic dysarthria in Parkinson's disease?",
    options:["Consistently absent language comprehension","Only isolated word-finding difficulty","Reduced loudness and reduced vocal variation","Complete loss of swallowing in every case"],
    answer:2,
    explanation:"Hypokinetic dysarthria may involve reduced loudness, restricted pitch variation, and imprecise articulation. Individual presentations vary."
  },
  {
    id:"ST058",difficulty:"Moderate",topic:"Assessment",
    question:"A child performs poorly on a test normed for a different language background. What is the most defensible interpretation?",
    options:["The result proves a disorder","The child should never be assessed again","The test score should be treated as conclusive","The score requires cautious interpretation alongside linguistic history and other evidence"],
    answer:3,
    explanation:"Norms may not be appropriate for every language background. The clinician should consider language exposure, tool validity, observation, and additional assessment evidence."
  },
  {
    id:"ST059",difficulty:"Moderate",topic:"Augmentative and Alternative Communication",
    question:"Why is partner training important when a person uses AAC?",
    options:["Communication partners can learn to model, wait, respond, and support access to communication","It ensures the AAC user never initiates messages","It removes the need to personalise vocabulary","It restricts AAC use to therapy sessions"],
    answer:0,
    explanation:"Communication partners can improve access and participation by modelling AAC, responding to messages, allowing time, and supporting use across everyday settings."
  },
  {
    id:"ST060",difficulty:"Moderate",topic:"Hearing and Communication",
    question:"A child has a history of fluctuating middle-ear problems and delayed speech development. Which action is appropriate?",
    options:["Assume the child has a permanent language disorder","Recommend appropriate hearing evaluation and assess communication development","Ignore the hearing history if the child responds sometimes","Diagnose a speech sound disorder from the history alone"],
    answer:1,
    explanation:"Fluctuating hearing may affect access to speech. Hearing evaluation and a broader communication assessment can help clarify current needs."
  },
  {
    id:"ST061",difficulty:"Moderate",topic:"Language Development",
    question:"Which finding is most relevant to pragmatic language?",
    options:["Ability to sustain a vowel","Ability to detect a pure tone","Difficulty taking conversational turns appropriately","Ability to move the tongue laterally"],
    answer:2,
    explanation:"Pragmatic language concerns the social use of communication, including turn-taking, topic management, adapting messages, and interpreting context."
  },
  {
    id:"ST062",difficulty:"Moderate",topic:"Speech Sound Disorders",
    question:"A child can produce a target consonant in isolation but not in connected speech. What is a useful next step in assessment?",
    options:["Conclude that no speech difficulty exists","Assess swallowing instead of speech","Assume the result proves hearing loss","Examine performance across syllables, words, positions, and connected speech"],
    answer:3,
    explanation:"Speech sound accuracy can vary by phonetic context and task complexity. Sampling across levels helps identify where production breaks down and informs intervention."
  },
  {
    id:"ST063",difficulty:"Moderate",topic:"Voice Disorders",
    question:"Which behaviour can contribute to vocal strain in some speakers?",
    options:["Habitual shouting over background noise","Using an individually appropriate speaking volume","Taking appropriate voice breaks","Following clinician-guided voice advice"],
    answer:0,
    explanation:"Repeated shouting or speaking forcefully over noise can increase vocal load. Advice should be individualised and should not replace evaluation of persistent symptoms."
  },
  {
    id:"ST064",difficulty:"Moderate",topic:"Swallowing Disorders",
    question:"Why should a swallowing management plan consider a patient's hydration and nutrition?",
    options:["These factors matter only in children","Swallowing changes may affect fluid intake, food intake, and overall health","Texture modification always increases fluid intake","Nutrition is unrelated to dysphagia"],
    answer:1,
    explanation:"Dysphagia can affect hydration, nutrition, enjoyment, and quality of life. Management should balance safety, adequacy, preferences, and the person's overall clinical situation."
  },
  {
    id:"ST065",difficulty:"Moderate",topic:"Neurogenic Communication Disorders",
    question:"Which feature most clearly distinguishes language impairment from an isolated articulation problem?",
    options:["Difficulty producing one consonant only","A consistently soft voice","Problems understanding or formulating linguistic messages","Reduced maximum phonation time"],
    answer:2,
    explanation:"Language impairment affects comprehension or formulation of linguistic messages. An isolated articulation problem concerns speech sound production, although disorders can coexist."
  },
  {
    id:"ST066",difficulty:"Moderate",topic:"Motor Speech Disorders",
    question:"Why is an oral-motor examination alone insufficient to diagnose a speech motor disorder?",
    options:["Oral-motor findings always reveal language ability","Speech does not use the oral structures","All oral-motor tasks are identical to speech","Findings must be interpreted with actual speech performance and a broader assessment"],
    answer:3,
    explanation:"Non-speech oral movements do not fully represent speech performance. Diagnosis should consider speech tasks, intelligibility, prosody, coordination, and relevant neurological findings."
  },
  {
    id:"ST067",difficulty:"Moderate",topic:"Assessment",
    question:"What is dynamic assessment designed to examine?",
    options:["How a person responds to teaching, support, or mediated learning","Only performance without any assistance","Only hearing thresholds","Only the person's chronological age"],
    answer:0,
    explanation:"Dynamic assessment examines learning potential and responsiveness to mediation, which can add useful information beyond a static test score."
  },
  {
    id:"ST068",difficulty:"Moderate",topic:"Fluency Disorders",
    question:"Why should a clinician ask a person who stutters about their own treatment goals?",
    options:["Because all people who stutter want identical fluency targets","Because goals should reflect individual priorities and participation needs","Because clinician assessment is unnecessary","Because treatment goals must exclude real-life communication"],
    answer:1,
    explanation:"People who stutter may prioritise ease of communication, participation, confidence, reducing struggle, or speech changes. Collaborative goal setting supports individualised care."
  },
  {
    id:"ST069",difficulty:"Moderate",topic:"Professional Practice",
    question:"A clinician identifies a concern outside their competence. What is the most appropriate response?",
    options:["Proceed without informing anyone","Give a definitive opinion despite insufficient expertise","Seek supervision, consultation, or referral as appropriate","Avoid documenting the concern"],
    answer:2,
    explanation:"Practitioners should work within their competence and seek appropriate support or referral when needed, while maintaining relevant documentation and continuity of care."
  },
  {
    id:"ST070",difficulty:"Moderate",topic:"Autism and Social Communication",
    question:"Which approach best supports communication assessment for an autistic child?",
    options:["Use eye contact alone as the diagnostic criterion","Assume every autistic child has the same language profile","Exclude the family's observations","Combine appropriate assessment methods with observation of functional communication and individual strengths and needs"],
    answer:3,
    explanation:"Autistic children have varied communication profiles. Assessment should be individualised and consider functional communication, developmental history, context, strengths, and support needs."
  },

  // ===== HARD: ST071–ST090 =====
  {
    id:"ST071",difficulty:"Hard",topic:"Swallowing Disorders",
    question:"A patient with neurological disease has recurrent chest infections and suspected aspiration, but bedside findings are inconclusive. Which reasoning is most appropriate?",
    options:["Consider instrumental swallowing assessment if indicated to clarify physiology and guide management","Assume the infections prove aspiration","Declare swallowing safe because no cough was observed","Prescribe a single diet texture without further clinical reasoning"],
    answer:0,
    explanation:"Chest infections have multiple possible causes, and aspiration may be silent. Instrumental assessment can help answer specific clinical questions when indicated and feasible."
  },
  {
    id:"ST072",difficulty:"Hard",topic:"Neurogenic Communication Disorders",
    question:"A patient with aphasia performs poorly on naming, but improves with semantic cues. What does this finding most reasonably suggest?",
    options:["A cue response proves normal language function","The naming difficulty may involve lexical retrieval, and cueing response adds useful information to the language profile","The patient must have a hearing disorder","Semantic cueing alone identifies the exact brain lesion"],
    answer:1,
    explanation:"Improvement with semantic cues can inform hypotheses about word retrieval and access to semantic information. It does not independently establish a diagnosis or lesion location."
  },
  {
    id:"ST073",difficulty:"Hard",topic:"Motor Speech Disorders",
    question:"A patient has slow speech, imprecise consonants, and reduced respiratory support after a neurological event. What is the best diagnostic approach?",
    options:["Diagnose aphasia from these features alone","Assume all symptoms arise from hearing loss","Conduct a comprehensive motor-speech and relevant neurological assessment","Use one sustained vowel to determine the full disorder"],
    answer:2,
    explanation:"These features may indicate dysarthria, but a complete assessment should examine respiration, phonation, resonance, articulation, prosody, intelligibility, and relevant neurological history."
  },
  {
    id:"ST074",difficulty:"Hard",topic:"Voice Disorders",
    question:"A professional voice user reports sudden major voice loss after intense vocal exertion. What is the safest next step?",
    options:["Begin strenuous voice exercises immediately","Force the voice to normal loudness","Assume it is a routine cold","Seek prompt medical or laryngeal evaluation and avoid further vocal strain until advised"],
    answer:3,
    explanation:"Sudden significant voice change after heavy vocal exertion can require prompt evaluation. Avoiding further strain and obtaining appropriate medical guidance is safer than self-prescribing intensive exercises."
  },
  {
    id:"ST075",difficulty:"Hard",topic:"Assessment",
    question:"A standardised assessment indicates a language delay, while naturalistic samples show stronger skills in familiar routines. How should the discrepancy be handled?",
    options:["Examine task demands, context, language exposure, and multiple sources of evidence before interpreting the profile","Discard all naturalistic observations","Report only whichever result is more severe","Assume the test must be invalid in every respect"],
    answer:0,
    explanation:"Performance can vary by context, familiarity, task demands, and linguistic experience. Integrating multiple valid sources produces a more defensible clinical interpretation."
  },
  {
    id:"ST076",difficulty:"Hard",topic:"Augmentative and Alternative Communication",
    question:"An AAC user has limited motor control and a changing vocabulary of daily needs. What should guide device and access selection?",
    options:["Choose the most expensive device available","Evaluate motor access, language, vocabulary, environments, partner support, and opportunities for future growth","Use only a fixed set of two messages for every activity","Delay communication support until motor control improves"],
    answer:1,
    explanation:"AAC planning should be person-centred and consider current access, communication functions, vocabulary growth, settings, and support needs. Trial and adjustment may be necessary."
  },
  {
    id:"ST077",difficulty:"Hard",topic:"Speech Sound Disorders",
    question:"A multilingual child shows a sound pattern that is common in one home language but uncommon in the language of school. What is the most appropriate interpretation?",
    options:["The school-language difference automatically proves a disorder","The child must stop using the home language","Compare the pattern with the child's linguistic systems and assess for evidence of impairment beyond expected language transfer","Treat every difference with the same articulation programme"],
    answer:2,
    explanation:"Cross-linguistic influence can produce expected differences. Assessment should consider both languages and determine whether the child's profile suggests a disorder rather than a language difference."
  },
  {
    id:"ST078",difficulty:"Hard",topic:"Fluency Disorders",
    question:"A teenager who stutters speaks more fluently during one structured task but reports severe avoidance in everyday conversation. Which assessment conclusion is strongest?",
    options:["The structured task proves there is no clinically relevant concern","Everyday avoidance is unrelated to communication","The clinician should assess only the task with the fewest disfluencies","Task performance alone is insufficient; assess real-life impact, avoidance, feelings, and participation"],
    answer:3,
    explanation:"Fluency can vary across speaking situations. Assessment should include speech behaviours and the individual's experience, participation, avoidance, and personal goals."
  },
  {
    id:"ST079",difficulty:"Hard",topic:"Swallowing Disorders",
    question:"A patient has poor oral intake after a prescribed texture modification. What should the team prioritise?",
    options:["Reassess whether the plan meets swallowing safety, hydration, nutrition, preferences, and quality-of-life needs","Continue the plan indefinitely without review","Assume reduced intake is always acceptable","Remove all oral intake without considering clinical context"],
    answer:0,
    explanation:"Dietary recommendations require ongoing review. The team should balance swallowing findings with hydration, nutrition, patient preferences, quality of life, and the overall clinical picture."
  },
  {
    id:"ST080",difficulty:"Hard",topic:"Neurogenic Communication Disorders",
    question:"A person with right-hemisphere brain injury has difficulty interpreting sarcasm and maintaining topic coherence, despite relatively preserved basic naming. Which area merits assessment?",
    options:["Purely peripheral hearing thresholds","Cognitive-communication and pragmatic abilities","Vocal-fold anatomy only","Isolated oral-phase swallowing"],
    answer:1,
    explanation:"Right-hemisphere injury can affect discourse, pragmatics, inference, and other cognitive-communication abilities. Assessment should examine functional communication and associated cognitive skills."
  },
  {
    id:"ST081",difficulty:"Hard",topic:"Motor Speech Disorders",
    question:"A patient has both inconsistent speech errors and signs of weakness affecting speech production. What is the best clinical interpretation?",
    options:["One sign automatically rules out all other motor-speech disorders","The findings prove an isolated language disorder","Co-occurring motor-planning and motor-execution difficulties may need consideration in a comprehensive differential assessment","A single non-speech movement can settle the diagnosis"],
    answer:2,
    explanation:"Clinical features may overlap or coexist. A differential assessment should integrate error patterns, strength and coordination, prosody, task effects, history, and other relevant findings."
  },
  {
    id:"ST082",difficulty:"Hard",topic:"Voice Disorders",
    question:"A patient presents with persistent dysphonia and suspected laryngeal pathology. Why is visualisation by an appropriate medical professional important before selecting treatment?",
    options:["It is required to measure vocabulary","It determines intelligence directly","It replaces the patient's history","It can help identify structural or medical factors that affect appropriate management"],
    answer:3,
    explanation:"Laryngeal evaluation may identify structural or medical contributors to dysphonia and help guide safe treatment. Persistent voice symptoms should not automatically be attributed to vocal habits."
  },
  {
    id:"ST083",difficulty:"Hard",topic:"Language Development",
    question:"A child shows weak performance on decontextualised vocabulary tasks but communicates effectively using familiar routines and visual supports. What is the best assessment response?",
    options:["Evaluate language across structured and functional contexts, including support needs and generalisation","Conclude that language ability is entirely normal","Ignore the structured results","Diagnose solely from the child's use of visual supports"],
    answer:0,
    explanation:"Different tasks reveal different aspects of language. Assessment should examine comprehension, expression, functional participation, cueing effects, and how skills generalise across contexts."
  },
  {
    id:"ST084",difficulty:"Hard",topic:"Professional Practice",
    question:"A family requests a guaranteed outcome from speech-language therapy. What is the most appropriate response?",
    options:["Guarantee a cure to maintain motivation","Explain realistic expectations, uncertainty, measurable goals, and the plan for monitoring progress","Avoid discussing outcomes at all","Promise the same improvement seen in another client"],
    answer:1,
    explanation:"Ethical communication includes transparent discussion of likely benefits, limitations, uncertainty, individual variability, goals, and how progress will be evaluated."
  },
  {
    id:"ST085",difficulty:"Hard",topic:"Assessment",
    question:"A screening result is positive, but the individual reports no functional concern. What should the clinician generally do next?",
    options:["Treat the screening result as a final diagnosis","Dismiss the screening result without review","Interpret the result in context and determine whether further assessment is warranted","Repeat the same screen indefinitely until it is negative"],
    answer:2,
    explanation:"Screening identifies possible risk; it is not a definitive diagnosis. The result should be considered alongside history, symptoms, functional needs, and the appropriate referral pathway."
  },
  {
    id:"ST086",difficulty:"Hard",topic:"Autism and Social Communication",
    question:"An autistic adult prefers direct language and limited eye contact but reports no difficulty understanding or expressing their needs. What is the most appropriate clinical stance?",
    options:["Assume a disorder solely from limited eye contact","Require eye contact as a therapy outcome","Treat the person's preference as proof of impaired language","Assess the person's own goals and functional communication rather than pathologising a single behaviour"],
    answer:3,
    explanation:"Communication differences should be understood in context and in relation to functional needs and the person's goals. Eye contact alone is not a sufficient measure of communication competence."
  },
  {
    id:"ST087",difficulty:"Hard",topic:"Swallowing Disorders",
    question:"A patient with dysphagia has several possible diet options. What is the most defensible basis for selecting a recommendation?",
    options:["Individual assessment findings, medical context, nutrition and hydration needs, preferences, and relevant team input","The most restrictive option in every case","The option most convenient for staff regardless of patient needs","A standard recommendation applied identically to all patients"],
    answer:0,
    explanation:"Dysphagia management should be individualised and based on assessment, risks, nutrition and hydration, preferences, quality of life, and relevant multidisciplinary input."
  },
  {
    id:"ST088",difficulty:"Hard",topic:"Augmentative and Alternative Communication",
    question:"An AAC user rarely initiates communication at school despite having a device. Which investigation is most useful?",
    options:["Remove the device until initiation improves","Examine access, vocabulary relevance, partner behaviour, opportunities, and barriers across the school day","Assume the user has no communicative intent","Limit the device to requesting food"],
    answer:1,
    explanation:"AAC use depends on access, vocabulary, partner responsiveness, opportunity, and the communication environment. Observation across activities can identify practical barriers to initiation."
  },
  {
    id:"ST089",difficulty:"Hard",topic:"Neurogenic Communication Disorders",
    question:"After a stroke, a patient follows simple commands but struggles with complex instructions. What is the best interpretation?",
    options:["Simple command following proves all language skills are intact","The patient necessarily has a hearing disorder","Performance may vary with linguistic complexity, working demands, and other factors; broader assessment is needed","The pattern alone confirms a specific aphasia subtype"],
    answer:2,
    explanation:"Command following depends on several factors, including language complexity, attention, memory, and hearing. A broader assessment is needed to characterise the impairment accurately."
  },
  {
    id:"ST090",difficulty:"Hard",topic:"Evidence-Based Practice",
    question:"A clinician is considering a therapy technique supported by a small study but not well matched to the client's profile. What is the strongest evidence-based approach?",
    options:["Apply the technique because any published study guarantees benefit","Reject all research and rely only on habit","Choose the technique based only on popularity","Integrate available evidence with clinical expertise, client values, context, and monitoring of individual outcomes"],
    answer:3,
    explanation:"Evidence-based practice integrates research evidence, clinical expertise, and client values and circumstances. Treatment selection should be individualised and outcomes monitored."
  }

  // ===== EASY: ST091–ST110 =====
  {
    id:"ST091",difficulty:"Easy",topic:"Anatomy and Physiology",
    question:"Which structure elevates and retracts the soft palate during many oral speech sounds?",
    options:["The epiglottis","The velopharyngeal mechanism, including the soft palate","The lower lip alone","The vocal folds"],
    answer:1,
    explanation:"The soft palate and surrounding pharyngeal structures contribute to velopharyngeal closure, helping direct airflow through the mouth for oral sounds."
  },
  {
    id:"ST092",difficulty:"Easy",topic:"Speech Sound Disorders",
    question:"Which pair of sounds differs mainly by voicing in English?",
    options:["/m/ and /n/","/s/ and /ʃ/","/p/ and /b/","/l/ and /r/"],
    answer:2,
    explanation:"/p/ and /b/ are both bilabial plosives; /p/ is typically voiceless and /b/ voiced in English."
  },
  {
    id:"ST093",difficulty:"Easy",topic:"Language Development",
    question:"Which is an example of a two-word combination?",
    options:["'More juice'","A single laugh","Crying without a word","Pointing without vocalisation"],
    answer:0,
    explanation:"'More juice' combines two meaningful words and can express a request. Communication development varies across children and languages."
  },
  {
    id:"ST094",difficulty:"Easy",topic:"Voice Disorders",
    question:"What is resonance in speech?",
    options:["The number of words a person knows","The speed of walking","The ability to recognise letters","The shaping of sound by the vocal tract cavities"],
    answer:3,
    explanation:"Resonance describes how sound is modified by the vocal tract, including the oral and nasal cavities and the pharynx."
  },
  {
    id:"ST095",difficulty:"Easy",topic:"Fluency Disorders",
    question:"Which is a common example of a typical disfluency?",
    options:["A sustained loss of voice","A brief revision or interjection while speaking","An inability to swallow","Persistent nasal air escape"],
    answer:1,
    explanation:"Revisions and interjections can occur in typical speech. Disfluency must be interpreted in context, including its frequency, type, and impact."
  },
  {
    id:"ST096",difficulty:"Easy",topic:"Swallowing Disorders",
    question:"Which body system is primarily responsible for moving swallowed food from the mouth toward the stomach?",
    options:["Visual system","Auditory system","Digestive system","Integumentary system"],
    answer:2,
    explanation:"Swallowing moves food and liquid through the upper digestive tract. The process involves coordinated oral, pharyngeal, and oesophageal functions."
  },
  {
    id:"ST097",difficulty:"Easy",topic:"Assessment",
    question:"What is the purpose of documenting a client's baseline communication abilities?",
    options:["To compare later performance with the initial profile","To guarantee a particular treatment result","To avoid setting goals","To replace communication with family members"],
    answer:0,
    explanation:"Baseline information helps establish priorities and evaluate change over time, alongside functional outcomes and the client's own goals."
  },
  {
    id:"ST098",difficulty:"Easy",topic:"Neurogenic Communication Disorders",
    question:"Which disorder primarily affects the ability to read and spell accurately?",
    options:["Dysphonia","Dysphagia","Dysarthria","A reading or written-language disorder such as dyslexia"],
    answer:3,
    explanation:"Dyslexia primarily concerns word reading and spelling. It differs from dysarthria, dysphonia, and dysphagia, which affect other functions."
  },
  {
    id:"ST099",difficulty:"Easy",topic:"Augmentative and Alternative Communication",
    question:"Which item is an example of aided AAC?",
    options:["A facial expression","A picture communication board","A natural head nod","A spoken word"],
    answer:1,
    explanation:"A picture communication board is an external communication aid. Facial expressions and natural gestures are unaided forms of communication."
  },
  {
    id:"ST100",difficulty:"Easy",topic:"Hearing and Communication",
    question:"What is the function of the eardrum?",
    options:["To produce speech sounds","To control tongue movement","To vibrate in response to sound and transmit mechanical energy","To close the larynx during swallowing"],
    answer:2,
    explanation:"The tympanic membrane vibrates in response to sound waves and transmits mechanical energy to the middle-ear ossicles."
  },
  {
    id:"ST101",difficulty:"Easy",topic:"Professional Practice",
    question:"What should a clinician do before sharing identifiable client information with another professional when consent is required?",
    options:["Check and obtain appropriate consent in accordance with applicable rules","Share it automatically with any colleague","Post the information in a public forum","Remove the client's opportunity to ask questions"],
    answer:0,
    explanation:"Information sharing must comply with applicable privacy law, consent requirements, professional standards, and legitimate care needs."
  },
  {
    id:"ST102",difficulty:"Easy",topic:"Autism and Social Communication",
    question:"Which is an example of supporting communication access for an autistic person?",
    options:["Insisting that every response be spoken","Removing all visual supports","Ignoring the person's preferred communication method","Offering clear language and suitable visual or AAC supports when helpful"],
    answer:3,
    explanation:"Communication support should be individualised. Clear language, visual supports, processing time, and AAC may help depending on the person's preferences and needs."
  },
  {
    id:"ST103",difficulty:"Easy",topic:"Anatomy and Physiology",
    question:"Which organ contains the primary auditory receptors?",
    options:["Larynx","Cochlea","Tongue","Soft palate"],
    answer:1,
    explanation:"The cochlea contains sensory hair cells that transduce sound-related mechanical movement into neural signals."
  },
  {
    id:"ST104",difficulty:"Easy",topic:"Language Development",
    question:"Which response best models an expanded utterance when a child says 'dog run'?",
    options:["'No, that is incorrect'","'Say it again perfectly'","'Yes, the dog is running'","Remain silent until the child repeats the phrase"],
    answer:2,
    explanation:"An expansion models a more complete grammatical form while acknowledging the child's message, supporting language learning in a natural interaction."
  },
  {
    id:"ST105",difficulty:"Easy",topic:"Speech Sound Disorders",
    question:"Which sound is typically a voiceless fricative in English?",
    options:["/s/","/m/","/b/","/d/"],
    answer:0,
    explanation:"The /s/ sound is produced with turbulent airflow and without vocal-fold voicing in typical English production."
  },
  {
    id:"ST106",difficulty:"Easy",topic:"Voice Disorders",
    question:"What does vocal intensity most closely relate to perceptually?",
    options:["Sentence grammar","Word meaning","Language comprehension","Loudness"],
    answer:3,
    explanation:"Vocal intensity is an acoustic measure associated with perceived loudness, although perception also depends on context and listener factors."
  },
  {
    id:"ST107",difficulty:"Easy",topic:"Swallowing Disorders",
    question:"Which professional team member may help assess a patient's nutritional adequacy when dysphagia affects intake?",
    options:["Architect","Dietitian","Photographer","Mechanic"],
    answer:1,
    explanation:"A dietitian can help evaluate nutrition and develop appropriate nutritional strategies in collaboration with the healthcare team."
  },
  {
    id:"ST108",difficulty:"Easy",topic:"Assessment",
    question:"Which information is particularly useful when assessing communication in a child?",
    options:["The colour of the child's shoes","The family's preferred television brand","Developmental history and communication across everyday settings","The clinician's personal assumptions"],
    answer:2,
    explanation:"Developmental history and information from relevant everyday settings help the clinician interpret assessment findings in context."
  },
  {
    id:"ST109",difficulty:"Easy",topic:"Neurogenic Communication Disorders",
    question:"Which condition can affect both communication and swallowing after neurological injury?",
    options:["A neurological disorder affecting motor or language systems","An uncomplicated skin abrasion","A change in hair colour","A minor nail injury"],
    answer:0,
    explanation:"Neurological injury can affect language, motor speech, cognition, and swallowing, depending on the systems involved."
  },
  {
    id:"ST110",difficulty:"Easy",topic:"Professional Practice",
    question:"Why should therapy goals be measurable?",
    options:["To ensure all clients have identical goals","To remove the need for clinical judgement","To guarantee recovery within a fixed period","To help track progress and determine whether support needs to change"],
    answer:3,
    explanation:"Measurable goals make it easier to monitor change, communicate progress, and review whether intervention remains appropriate."
  },

  // ===== MODERATE: ST111–ST130 =====
  {
    id:"ST111",difficulty:"Moderate",topic:"Speech Sound Disorders",
    question:"A child produces /t/ for /k/ and /d/ for /g/ across several word positions. Which pattern is most consistent with these substitutions?",
    options:["Stopping","Velar fronting","Gliding","Cluster reduction"],
    answer:1,
    explanation:"Velar fronting involves replacing velar sounds such as /k/ and /g/ with sounds produced farther forward, often /t/ and /d/. Consider developmental and linguistic context."
  },
  {
    id:"ST112",difficulty:"Moderate",topic:"Language Development",
    question:"Which assessment method is particularly useful for examining narrative organisation?",
    options:["Measuring vocal-fold vibration only","Pure-tone screening alone","Eliciting a story retell or personal narrative and analysing its structure","Measuring tongue strength without language tasks"],
    answer:2,
    explanation:"Narrative samples can reveal story grammar, cohesion, sequencing, vocabulary, grammar, and inferential language skills."
  },
  {
    id:"ST113",difficulty:"Moderate",topic:"Fluency Disorders",
    question:"A child shows increased stuttering and visible tension during speaking. What should guide the next clinical step?",
    options:["Assess the nature, frequency, impact, and context of the behaviours and plan individualised care","Tell the child that the behaviour is deliberate","Assume no intervention is ever appropriate","Evaluate only reading speed"],
    answer:0,
    explanation:"A comprehensive fluency assessment examines speech behaviours, tension, feelings, communication impact, developmental history, and the child's needs."
  },
  {
    id:"ST114",difficulty:"Moderate",topic:"Voice Disorders",
    question:"Which term describes excessive nasal resonance on sounds that would normally be oral?",
    options:["Hyponasality","Dysarthria","Aphasia","Hypernasality"],
    answer:3,
    explanation:"Hypernasality is excessive nasal resonance, often associated with inadequate velopharyngeal closure during oral speech."
  },
  {
    id:"ST115",difficulty:"Moderate",topic:"Swallowing Disorders",
    question:"Why should a clinician avoid recommending thickened liquids automatically to every patient who coughs while drinking?",
    options:["Liquid consistency never affects swallowing","Recommendations should follow individual assessment and consideration of benefits, risks, hydration, and preferences","Thickened liquids always eliminate aspiration","Coughing always indicates a behavioural issue"],
    answer:1,
    explanation:"Texture and viscosity recommendations should be individualised. Thickening may not eliminate aspiration and can affect hydration, acceptability, and quality of life."
  },
  {
    id:"ST116",difficulty:"Moderate",topic:"Neurogenic Communication Disorders",
    question:"A person with traumatic brain injury struggles to organise explanations, maintain a topic, and infer unstated meaning. Which assessment domain is particularly relevant?",
    options:["Vocal-fold anatomy only","Pure-tone thresholds only","Cognitive-communication","Isolated consonant production only"],
    answer:2,
    explanation:"Cognitive-communication assessment examines how cognitive processes affect communication, including discourse organisation, inference, attention, and executive functioning."
  },
  {
    id:"ST117",difficulty:"Moderate",topic:"Motor Speech Disorders",
    question:"Which feature is more suggestive of apraxia of speech than a straightforward phonological pattern?",
    options:["Errors and transitions that vary with articulatory complexity, alongside possible disrupted prosody","Consistent substitution of one phoneme in all contexts without other motor signs","Normal speech in every task","Difficulty understanding written paragraphs only"],
    answer:0,
    explanation:"Apraxia of speech may involve disrupted transitions, prosodic abnormalities, and greater difficulty as motor planning demands increase. No single sign is sufficient by itself."
  },
  {
    id:"ST118",difficulty:"Moderate",topic:"Assessment",
    question:"What is an important reason to assess a child's communication in more than one context?",
    options:["To make assessment results impossible to compare","To avoid observing natural communication","To ensure the child becomes tired","Communication may vary with familiarity, task demands, partners, and environmental support"],
    answer:3,
    explanation:"Communication is context-sensitive. Comparing structured tasks with natural interactions can reveal strengths, support needs, and generalisation."
  },
  {
    id:"ST119",difficulty:"Moderate",topic:"Augmentative and Alternative Communication",
    question:"A communication board contains only food requests, but the user also wants to comment and ask questions. What is the most appropriate improvement?",
    options:["Keep the board unchanged indefinitely","Expand vocabulary and functions to support a broader range of communication","Remove the board because it is incomplete","Allow use only when requesting food"],
    answer:1,
    explanation:"AAC should support a range of functions, including requesting, rejecting, commenting, asking, social interaction, and sharing information as appropriate."
  },
  {
    id:"ST120",difficulty:"Moderate",topic:"Hearing and Communication",
    question:"A client has normal pure-tone thresholds but continues to report difficulty understanding speech in complex listening situations. What is appropriate?",
    options:["Dismiss the concern because pure-tone hearing is normal","Diagnose a specific disorder from the complaint alone","Take a detailed history and consider further assessment or referral based on the reported difficulties","Assume the client is not paying attention"],
    answer:2,
    explanation:"Pure-tone thresholds do not explain every listening complaint. Further assessment may be appropriate depending on symptoms, medical history, and functional impact."
  },
  {
    id:"ST121",difficulty:"Moderate",topic:"Language Development",
    question:"Which response best supports a child's communication when the child points to a car and says 'go'?",
    options:["'The red car is going fast down the road'","'That is not a complete sentence'","'Use a longer sentence before I respond'","'I cannot understand you'"],
    answer:0,
    explanation:"A responsive expansion acknowledges the child's intended message and models additional language without making communication unnecessarily difficult."
  },
  {
    id:"ST122",difficulty:"Moderate",topic:"Speech Sound Disorders",
    question:"Why should a clinician distinguish an articulation error from a phonological pattern?",
    options:["They are always identical and need no distinction","The distinction is useful only for adults","It determines hearing thresholds directly","The underlying pattern can affect assessment interpretation and intervention planning"],
    answer:3,
    explanation:"Articulation difficulties often concern production of particular sounds, while phonological disorders involve patterns in a sound system. The distinction helps guide treatment planning."
  },
  {
    id:"ST123",difficulty:"Moderate",topic:"Voice Disorders",
    question:"A client reports vocal fatigue after long teaching sessions. Which initial recommendation is generally sensible while the cause is being evaluated?",
    options:["Speak louder to overcome fatigue","Review vocal load, reduce avoidable shouting, and consider suitable amplification and voice-care strategies","Begin maximal-effort exercises without assessment","Ignore persistent symptoms if speech remains intelligible"],
    answer:1,
    explanation:"Reducing unnecessary vocal strain, reviewing the environment, and considering amplification may help. Persistent or significant symptoms require appropriate evaluation."
  },
  {
    id:"ST124",difficulty:"Moderate",topic:"Swallowing Disorders",
    question:"A patient is prescribed an altered food texture. Which action best supports safe implementation?",
    options:["Assume every caregiver knows the prescribed texture","Use visual appearance alone without checking preparation","Ensure the relevant team and caregivers understand the specified texture and preparation requirements","Change the texture whenever the patient requests a different food without review"],
    answer:2,
    explanation:"Consistent implementation requires clear instructions, appropriate food preparation, staff or caregiver understanding, and review when the patient's needs change."
  },
  {
    id:"ST125",difficulty:"Moderate",topic:"Neurogenic Communication Disorders",
    question:"Which finding is most characteristic of a language formulation difficulty rather than an isolated voice problem?",
    options:["Frequent word-finding pauses and difficulty constructing meaningful sentences","Reduced vocal intensity with otherwise intact language","A rough voice quality only","Short maximum phonation time without language concerns"],
    answer:0,
    explanation:"Word-finding difficulty and impaired sentence formulation suggest a language concern. Voice quality and phonation measures assess different aspects of communication."
  },
  {
    id:"ST126",difficulty:"Moderate",topic:"Motor Speech Disorders",
    question:"Why should intelligibility be assessed with both familiar and unfamiliar listeners when feasible?",
    options:["Familiar listeners always understand every message correctly","Listener familiarity is unrelated to understanding","Only unfamiliar listeners provide useful information","Familiarity and context can influence understanding, so different listeners may reveal different functional effects"],
    answer:3,
    explanation:"Familiar communication partners may use contextual knowledge to interpret speech. Multiple listeners and tasks can help describe real-world intelligibility."
  },
  {
    id:"ST127",difficulty:"Moderate",topic:"Assessment",
    question:"A client has difficulty completing a long assessment because of fatigue. What is the most appropriate response?",
    options:["Continue regardless of the client's condition","Consider breaks, pacing, and the effect of fatigue on interpretation","Assume all incomplete responses are incorrect due to a disorder","Remove all clinically relevant tasks from future assessment"],
    answer:1,
    explanation:"Fatigue can influence performance. Adjusting pacing and documenting relevant factors supports a fairer and more accurate interpretation."
  },
  {
    id:"ST128",difficulty:"Moderate",topic:"Fluency Disorders",
    question:"Which outcome provides useful information beyond counting stuttering events?",
    options:["The colour of the assessment room","The clinician's preferred treatment method","The client's confidence, avoidance, and participation in communication","The number of chairs in the clinic"],
    answer:2,
    explanation:"Fluency outcomes should include the person's experience and functional impact, not only the frequency of observable disfluencies."
  },
  {
    id:"ST129",difficulty:"Moderate",topic:"Autism and Social Communication",
    question:"A child communicates well with familiar adults but rarely participates in group discussions. What is a useful next assessment step?",
    options:["Observe communication across group and individual contexts and identify environmental or interaction barriers","Assume the child has no communication ability","Judge the child only on eye contact","Stop gathering information because familiar interactions are successful"],
    answer:0,
    explanation:"Communication can vary across environments and partners. Observing group participation helps identify contextual barriers, strengths, and possible supports."
  },
  {
    id:"ST130",difficulty:"Moderate",topic:"Evidence-Based Practice",
    question:"Why should progress be reviewed regularly during intervention?",
    options:["To ensure the original plan never changes","To replace client feedback with numerical scores alone","To guarantee the same outcome for all clients","To evaluate response and adjust goals or methods when needed"],
    answer:3,
    explanation:"Ongoing review allows clinicians and clients to evaluate meaningful change and adapt intervention to progress, priorities, and emerging needs."
  },

  // ===== HARD: ST131–ST150 =====
  {
    id:"ST131",difficulty:"Hard",topic:"Neurogenic Communication Disorders",
    question:"A person with aphasia has limited spontaneous speech but performs better when completing familiar automatic sequences. What is the best interpretation?",
    options:["Automatic speech proves that all language abilities are intact","Automatic and propositional speech may differ, so this pattern should be interpreted within a comprehensive language profile","The finding confirms normal sentence formulation","The finding alone identifies a precise lesion location"],
    answer:1,
    explanation:"Automatic sequences and novel propositional speech rely on partly different demands. Performance differences provide useful descriptive information but do not establish the entire language profile."
  },
  {
    id:"ST132",difficulty:"Hard",topic:"Motor Speech Disorders",
    question:"A patient has reduced intelligibility, variable rate, and impaired prosody following neurological injury. Which approach best supports differential diagnosis?",
    options:["Diagnose from speech rate alone","Use a reading score as the only measure","Integrate motor-speech subsystems, speech tasks, history, neurological findings, and functional communication","Assume the symptoms are caused by poor motivation"],
    answer:2,
    explanation:"Motor-speech diagnosis requires a pattern of findings across speech subsystems and tasks, interpreted with relevant history and neurological information."
  },
  {
    id:"ST133",difficulty:"Hard",topic:"Swallowing Disorders",
    question:"Instrumental assessment shows aspiration with one tested consistency but not another under the observed conditions. What should guide recommendations?",
    options:["Integrate the study findings with clinical context, intake needs, patient preferences, and the limits of the examination","Assume the safer observed trial guarantees safety in every meal","Prescribe the most restrictive option without review","Ignore the instrumental findings because the patient did not cough"],
    answer:0,
    explanation:"Instrumental findings are interpreted in context. Recommendations should consider the tested conditions, overall clinical status, nutrition and hydration, preferences, and the limits of sampling."
  },
  {
    id:"ST134",difficulty:"Hard",topic:"Voice Disorders",
    question:"A patient has voice complaints despite normal conversational loudness during a brief clinic visit. What is the best clinical reasoning?",
    options:["Normal loudness proves the voice is healthy","The complaint must be psychological","Further assessment is never needed","A brief observation may not capture fatigue, vocal demand, or intermittent symptoms; history and appropriate evaluation remain important"],
    answer:3,
    explanation:"Voice symptoms can vary by task and time. A detailed history, relevant voice assessment, and appropriate medical evaluation may be needed even if brief conversational speech sounds typical."
  },
  {
    id:"ST135",difficulty:"Hard",topic:"Language Development",
    question:"A bilingual child shows low performance in one language but strong skills in the other. Which conclusion is most defensible?",
    options:["Bilingualism necessarily causes disorder","Assess language exposure, ability across languages, learning history, and functional impact before reaching a conclusion","The stronger language should never be assessed","One low score is sufficient to establish developmental language disorder"],
    answer:1,
    explanation:"Bilingual assessment must account for exposure and use in both languages. A diagnosis should be based on converging evidence rather than one score or bilingual status."
  },
  {
    id:"ST136",difficulty:"Hard",topic:"Augmentative and Alternative Communication",
    question:"An AAC user can select symbols accurately but has difficulty participating in fast group conversations. Which support is most appropriate to investigate?",
    options:["Remove AAC during group work","Restrict communication to yes-or-no responses","Consider vocabulary access, message preparation, partner strategies, positioning, and communication pacing","Assume the user has no interest in group communication"],
    answer:2,
    explanation:"Group participation can be affected by access speed, vocabulary organisation, turn-taking, partner behaviour, and environmental design. Supports should be trialled collaboratively."
  },
  {
    id:"ST137",difficulty:"Hard",topic:"Speech Sound Disorders",
    question:"A child produces a target sound accurately in single words but not in spontaneous conversation. What does this suggest about generalisation?",
    options:["The skill may not yet be generalised across contexts, so connected-speech practice and monitoring may be appropriate","The child has necessarily achieved full mastery","The original assessment must have been invalid","The difficulty must be caused by hearing loss"],
    answer:0,
    explanation:"Accuracy in structured tasks does not guarantee generalisation. Treatment and monitoring may need to address increasing linguistic complexity and everyday speaking contexts."
  },
  {
    id:"ST138",difficulty:"Hard",topic:"Assessment",
    question:"A test has excellent reliability but was normed on a population unlike the client. Which statement is most accurate?",
    options:["High reliability guarantees a valid diagnosis for every client","Norms never matter if the test is standardised","Reliability and validity mean exactly the same thing","Reliability alone does not guarantee valid interpretation for this client or context"],
    answer:3,
    explanation:"Reliability concerns consistency of measurement; validity concerns whether interpretations are justified. Normative fit and other sources of evidence affect defensible interpretation."
  },
  {
    id:"ST139",difficulty:"Hard",topic:"Fluency Disorders",
    question:"A person who stutters demonstrates reduced disfluency during clinic tasks but reports substantial workplace avoidance. What should outcome measurement include?",
    options:["Only the number of disfluencies in the clinic","Both speech-related measures and the person's real-world participation, avoidance, and goals","Only the clinician's impression of fluency","Only a timed reading passage"],
    answer:1,
    explanation:"Clinic fluency is only one aspect of outcome. Assessment should include communication participation, the person's experience, avoidance, and individual treatment priorities."
  },
  {
    id:"ST140",difficulty:"Hard",topic:"Professional Practice",
    question:"A clinician's preferred intervention differs from the client's informed choice, and more than one reasonable option exists. What is the strongest approach?",
    options:["Ignore the client's concerns","Use the same plan without discussion","Discuss options, evidence, risks, benefits, and the client's priorities to support shared decision-making","Promise that the clinician's choice will work best"],
    answer:2,
    explanation:"Shared decision-making respects client autonomy while communicating evidence, uncertainty, benefits, risks, and alternatives."
  },
  {
    id:"ST141",difficulty:"Hard",topic:"Neurogenic Communication Disorders",
    question:"A patient performs poorly on auditory comprehension tasks but also has documented hearing loss. What is the most important interpretive concern?",
    options:["Reduced auditory access may confound language-task performance, so hearing status and suitable assessment adaptations must be considered","Hearing loss proves aphasia","Language testing is always unnecessary","The patient should be diagnosed from non-response alone"],
    answer:0,
    explanation:"Auditory comprehension tasks depend on adequate access to the stimulus. Hearing loss can affect performance, so clinicians should account for hearing status and use suitable methods."
  },
  {
    id:"ST142",difficulty:"Hard",topic:"Swallowing Disorders",
    question:"A patient with dysphagia declines a recommended diet modification after discussion. What is the most appropriate professional response?",
    options:["Coerce the patient into accepting the recommendation","End all communication with the patient","Document refusal and provide no further information","Explore the patient's reasons, discuss risks and alternatives, assess decision-making and consent as applicable, and coordinate a respectful plan"],
    answer:3,
    explanation:"Care should respect autonomy and applicable consent requirements while communicating risks, benefits, and alternatives. Documentation and collaborative risk management are important."
  },
  {
    id:"ST143",difficulty:"Hard",topic:"Motor Speech Disorders",
    question:"A patient shows imprecise articulation and reduced vocal intensity, but comprehension and naming are relatively preserved. Which interpretation is most appropriate?",
    options:["The profile proves a particular aphasia subtype","A motor-speech disorder should be considered and assessed, while other coexisting impairments remain possible","Normal naming excludes every neurological disorder","Voice intensity alone establishes the diagnosis"],
    answer:1,
    explanation:"Imprecise articulation and reduced vocal intensity can indicate motor-speech involvement. A comprehensive assessment is still needed to identify the full communication profile."
  },
  {
    id:"ST144",difficulty:"Hard",topic:"Autism and Social Communication",
    question:"An autistic client communicates effectively using AAC but rarely speaks in unfamiliar settings. What should assessment prioritise?",
    options:["Count spoken words as the only valid communication outcome","Remove AAC to encourage speech","Assess communication effectiveness, access, context, client preference, and goals across settings","Assume AAC use prevents speech development"],
    answer:2,
    explanation:"Communication should be assessed across modalities and settings. AAC can support autonomy and participation, and its use should not be treated as failure."
  },
  {
    id:"ST145",difficulty:"Hard",topic:"Voice Disorders",
    question:"A singer reports intermittent voice loss that occurs only after prolonged performances. Why is task-specific history valuable?",
    options:["Symptoms may emerge under particular vocal loads and may not be evident during brief conversation","A normal brief conversation rules out a voice disorder","Singers cannot develop laryngeal disorders","The history replaces any necessary medical assessment"],
    answer:0,
    explanation:"Vocal demands, duration, environment, and symptom timing can help characterise the problem. Persistent or significant voice symptoms may require appropriate medical evaluation."
  },
  {
    id:"ST146",difficulty:"Hard",topic:"Language Development",
    question:"A child has difficulty following lengthy instructions but succeeds when instructions are shortened and supported visually. What is the best interpretation?",
    options:["The child must have normal language because visual support helps","The child necessarily has an attention disorder","The child should never receive verbal instructions","Performance is affected by task demands and support; further assessment should examine language and relevant cognitive factors"],
    answer:3,
    explanation:"Length, complexity, memory demands, language knowledge, and attention can affect performance. Further assessment is needed to determine which factors contribute."
  },
  {
    id:"ST147",difficulty:"Hard",topic:"Augmentative and Alternative Communication",
    question:"A person uses a communication device successfully at home but not at a clinic. What is the best first step?",
    options:["Assume the device no longer works","Investigate environmental differences, vocabulary relevance, access, partner familiarity, and opportunities to use it","Remove the device from all settings","Conclude that the person is refusing to communicate"],
    answer:1,
    explanation:"AAC success can vary with environment, partners, access, and vocabulary. Comparing settings helps identify barriers and guide practical adjustments."
  },
  {
    id:"ST148",difficulty:"Hard",topic:"Evidence-Based Practice",
    question:"A small study reports improvement with a therapy, but it has no comparison group and limited follow-up. How should the result be used?",
    options:["Treat it as conclusive proof of efficacy","Ignore all findings from small studies","Consider it preliminary evidence and weigh its limitations against other evidence and client circumstances","Apply the intervention to every client without monitoring"],
    answer:2,
    explanation:"Study design, sample size, comparison conditions, and follow-up affect confidence in conclusions. Preliminary findings should be considered alongside the wider evidence base."
  },
  {
    id:"ST149",difficulty:"Hard",topic:"Assessment",
    question:"A client performs inconsistently across repeated trials of a speech task. What is the most defensible next step?",
    options:["Investigate possible effects of fatigue, attention, task complexity, context, and measurement reliability before interpreting the pattern","Select the best trial and ignore all others","Assume every inconsistent response is intentional","Diagnose from one trial without further information"],
    answer:0,
    explanation:"Variability may arise from several sources. Repeated observations and relevant contextual information help determine whether the pattern is clinically meaningful."
  },
  {
    id:"ST150",difficulty:"Hard",topic:"Professional Practice",
    question:"A clinician is asked to provide a formal report based on an assessment that was incomplete. What should the clinician do?",
    options:["Present untested abilities as confirmed findings","Clearly document the assessment limits, distinguish observations from conclusions, and recommend further evaluation where appropriate","Copy another client's report","Omit the limitations to make the report appear complete"],
    answer:1,
    explanation:"Reports should accurately represent the evidence collected, identify limitations, avoid unsupported conclusions, and specify further assessment needs where appropriate."
  }

{
  id:"ST151", difficulty:"Easy", topic:"Anatomy",
  question:"Which structure primarily separates the oral cavity from the nasal cavity during swallowing?",
  options:["Hard palate and soft palate","Epiglottis alone","Vocal folds","Upper esophageal sphincter"],
  answer:0,
  explanation:"The hard and soft palate form the roof of the oral cavity. Elevation of the soft palate helps close the velopharyngeal port during swallowing."
},
{
  id:"ST152", difficulty:"Easy", topic:"Speech Anatomy",
  question:"Which articulator is most directly involved in producing the bilabial sounds /p/, /b/, and /m/?",
  options:["Tongue tip","Lower lip alone","Both lips","Soft palate alone"],
  answer:2,
  explanation:"Bilabial consonants are produced by bringing the upper and lower lips together."
},
{
  id:"ST153", difficulty:"Easy", topic:"Language Development",
  question:"Which behavior is a typical early prelinguistic communication skill?",
  options:["Producing complex subordinate clauses","Using consistent eye gaze and gestures to share attention","Reading unfamiliar words aloud","Producing adult-like consonant clusters"],
  answer:1,
  explanation:"Joint attention, eye gaze, and gestures are important foundations for later language and social communication."
},
{
  id:"ST154", difficulty:"Easy", topic:"Voice",
  question:"Which organ contains the vocal folds?",
  options:["Pharynx","Trachea","Esophagus","Larynx"],
  answer:3,
  explanation:"The vocal folds are located in the larynx and vibrate during typical voiced phonation."
},
{
  id:"ST155", difficulty:"Easy", topic:"Fluency",
  question:"Which is an example of a typical stuttering-like disfluency?",
  options:["Sound repetition, such as 'b-b-ball'","A single fluent sentence","Correct production of a vowel","A consistent substitution of /t/ for /k/"],
  answer:0,
  explanation:"Sound or syllable repetitions, prolongations, and blocks are common stuttering-like disfluencies."
},
{
  id:"ST156", difficulty:"Easy", topic:"Articulation",
  question:"A child consistently produces /t/ instead of /k/. Which phonological pattern may this represent?",
  options:["Final consonant deletion","Cluster reduction","Velar fronting","Gliding"],
  answer:2,
  explanation:"Velar fronting occurs when sounds made toward the back of the mouth, such as /k/ or /g/, are replaced by sounds made farther forward."
},
{
  id:"ST157", difficulty:"Easy", topic:"Aphasia",
  question:"Aphasia is most commonly associated with impairment in which area?",
  options:["Peripheral hearing only","Language processing following acquired brain injury","Visual acuity alone","Lung capacity"],
  answer:1,
  explanation:"Aphasia is an acquired language disorder commonly resulting from damage to language-related brain networks, often after stroke."
},
{
  id:"ST158", difficulty:"Easy", topic:"Hearing",
  question:"What does an audiologist primarily evaluate?",
  options:["Swallowing biomechanics only","Language formulation only","Facial muscle strength only","Hearing function"],
  answer:3,
  explanation:"Audiologists assess hearing and related auditory function. Speech-language therapists may collaborate with them when hearing affects communication."
},
{
  id:"ST159", difficulty:"Easy", topic:"Dysphagia",
  question:"Which symptom may indicate swallowing difficulty and warrant further assessment?",
  options:["Coughing during meals","Improved handwriting","Clearer vision","Increased reading speed"],
  answer:0,
  explanation:"Coughing during eating or drinking can be a sign of swallowing difficulty, although aspiration can also occur without coughing."
},
{
  id:"ST160", difficulty:"Easy", topic:"AAC",
  question:"What is the main purpose of augmentative and alternative communication (AAC)?",
  options:["To eliminate every form of spoken communication","To replace hearing assessment","To support communication when speech alone is insufficient","To diagnose neurological disease"],
  answer:2,
  explanation:"AAC includes unaided methods, such as gestures, and aided systems, such as communication boards or speech-generating devices."
},
{
  id:"ST161", difficulty:"Easy", topic:"Clinical Practice",
  question:"What should a clinician generally do before beginning an assessment with a new patient?",
  options:["Begin treatment without explaining it","Explain the process and obtain appropriate informed consent","Promise a specific outcome","Avoid asking about communication goals"],
  answer:1,
  explanation:"Explaining the assessment and obtaining informed consent supports autonomy, shared decision-making, and ethical practice."
},
{
  id:"ST162", difficulty:"Easy", topic:"Articulation",
  question:"Which sound is a voiced alveolar stop consonant in English?",
  options:["/s/","/m/","/k/","/d/"],
  answer:3,
  explanation:"The /d/ sound is a voiced alveolar stop. The tongue contacts the alveolar ridge and briefly blocks airflow."
},
{
  id:"ST163", difficulty:"Easy", topic:"Language",
  question:"Which language domain concerns the meanings of words and sentences?",
  options:["Semantics","Phonetics","Voice","Fluency"],
  answer:0,
  explanation:"Semantics concerns meaning, including word meanings and relationships between meanings in sentences."
},
{
  id:"ST164", difficulty:"Easy", topic:"Voice",
  question:"Which term describes the perceived highness or lowness of a voice?",
  options:["Resonance","Loudness","Pitch","Articulation"],
  answer:2,
  explanation:"Pitch is the perceptual correlate of fundamental frequency, although voice perception is influenced by more than frequency alone."
},
{
  id:"ST165", difficulty:"Easy", topic:"Dysarthria",
  question:"Dysarthria primarily involves difficulty with which function?",
  options:["Understanding written paragraphs only","Motor execution or control of speech movements","Recognizing familiar objects visually","Remembering all personal experiences"],
  answer:1,
  explanation:"Dysarthria is a motor speech disorder caused by impaired neuromuscular control of speech production."
},
{
  id:"ST166", difficulty:"Easy", topic:"Autism",
  question:"Which approach best supports communication assessment for an autistic child?",
  options:["Require eye contact throughout every task","Ignore the child's preferred communication method","Use spoken responses as the only acceptable response","Adapt the assessment to the child's communication profile and needs"],
  answer:3,
  explanation:"Individualized assessment should recognize different communication styles, sensory needs, and ways of expressing understanding."
},
{
  id:"ST167", difficulty:"Easy", topic:"Clinical Documentation",
  question:"Which entry is the most objective clinical documentation?",
  options:["Patient produced /s/ correctly in 8 of 10 structured trials","Patient was lazy today","Patient did not care about therapy","Patient will definitely recover completely"],
  answer:0,
  explanation:"Objective documentation describes observable performance and measurable results rather than judgments or unsupported predictions."
},
{
  id:"ST168", difficulty:"Easy", topic:"Phonology",
  question:"What is a minimal pair?",
  options:["Two words with completely identical pronunciations and meanings","Two sentences of equal length","Two words differing in one phoneme and having different meanings","Two speakers with similar voices"],
  answer:2,
  explanation:"Minimal pairs differ by one phoneme in the same position and have different meanings, such as 'bat' and 'pat'."
},
{
  id:"ST169", difficulty:"Easy", topic:"Swallowing Anatomy",
  question:"Which structure helps protect the lower airway during swallowing?",
  options:["Hard palate alone","Laryngeal protective mechanisms, including vocal-fold closure","The outer ear","The nasal septum alone"],
  answer:1,
  explanation:"Airway protection during swallowing involves coordinated laryngeal closure, movement of the hyoid and larynx, and other physiological mechanisms."
},
{
  id:"ST170", difficulty:"Easy", topic:"Therapy Planning",
  question:"Which is the best example of a measurable therapy goal?",
  options:["The patient will improve communication someday","The patient will try harder","The patient will speak perfectly","The patient will produce target /k/ in 8 of 10 opportunities across three sessions"],
  answer:3,
  explanation:"A measurable goal specifies the target behavior and a criterion for success. Time frames and contexts should also be appropriate to the individual."
},

{
  id:"ST171", difficulty:"Moderate", topic:"Assessment",
  question:"A child scores below the expected range on a language screening. What is the most appropriate next step?",
  options:["Diagnose a language disorder from the screening alone","Ignore the result if the child is cooperative","Conduct or refer for a comprehensive assessment as indicated","Begin an unrelated articulation program"],
  answer:2,
  explanation:"Screening identifies potential risk; it does not establish a diagnosis. Follow-up assessment should consider history, language samples, standardized and informal measures, and relevant contextual factors."
},
{
  id:"ST172", difficulty:"Moderate", topic:"Phonology",
  question:"A child reduces 'spoon' to 'poon' and 'star' to 'tar'. Which pattern is most evident?",
  options:["Cluster reduction","Final consonant deletion","Assimilation","Weak-syllable deletion"],
  answer:0,
  explanation:"Cluster reduction occurs when a consonant cluster is simplified by omitting one or more consonants."
},
{
  id:"ST173", difficulty:"Moderate", topic:"Aphasia",
  question:"An adult speaks fluently but has difficulty understanding spoken instructions and produces many semantically inappropriate words. Which aphasia profile is most consistent with these findings?",
  options:["A profile limited to dysarthria","A profile limited to apraxia of speech","A purely peripheral hearing loss diagnosis without further assessment","A receptive language impairment, potentially consistent with Wernicke-type aphasia"],
  answer:3,
  explanation:"Fluent speech with impaired comprehension and paraphasic errors may be consistent with Wernicke-type aphasia. Diagnosis requires comprehensive language and neurological assessment."
},
{
  id:"ST174", difficulty:"Moderate", topic:"Voice",
  question:"A patient reports persistent hoarseness for several weeks. What is the most appropriate clinical action?",
  options:["Start intensive loud-voice drills immediately","Recommend appropriate medical evaluation, including laryngeal visualization when indicated","Assume the cause is psychological","Advise complete voice rest indefinitely without evaluation"],
  answer:1,
  explanation:"Persistent dysphonia warrants appropriate medical evaluation. Voice therapy should be planned in coordination with medical findings when indicated."
},
{
  id:"ST175", difficulty:"Moderate", topic:"Fluency",
  question:"A school-age child who stutters avoids answering questions in class. Which treatment priority is most appropriate?",
  options:["Focus exclusively on eliminating every disfluency","Require the child to speak publicly without preparation","Address communication participation, attitudes, and individualized fluency goals","Discourage the child from speaking at school"],
  answer:2,
  explanation:"Stuttering intervention should be individualized and may address fluency, communication confidence, avoidance, participation, and the child's own priorities."
},
{
  id:"ST176", difficulty:"Moderate", topic:"Dysphagia",
  question:"A patient coughs occasionally while drinking water. Which conclusion is most appropriate?",
  options:["The patient definitely has aspiration pneumonia","The patient necessarily has a structural obstruction","The patient can safely consume all consistencies","The symptom warrants assessment, but coughing alone does not establish aspiration"],
  answer:3,
  explanation:"Coughing can signal swallowing difficulty but is not definitive proof of aspiration. A clinical swallowing evaluation and instrumental assessment may be indicated based on risk and findings."
},
{
  id:"ST177", difficulty:"Moderate", topic:"Motor Speech",
  question:"Which finding is more characteristic of apraxia of speech than of a typical phonological disorder?",
  options:["Inconsistent speech sound errors with articulatory groping and disrupted transitions","Consistent fronting of all velar consonants","A voice that is consistently too quiet without articulation difficulty","Difficulty hearing high-frequency sounds"],
  answer:0,
  explanation:"Apraxia of speech is a motor planning/programming disorder. Inconsistent errors, groping, and disrupted transitions can support the differential diagnosis, though no single sign is sufficient alone."
},
{
  id:"ST178", difficulty:"Moderate", topic:"Language Assessment",
  question:"Why might a clinician collect a spontaneous language sample in addition to standardized test scores?",
  options:["It automatically replaces all standardized testing","It reveals functional language use and discourse patterns in context","It guarantees a diagnosis without case history","It measures hearing thresholds directly"],
  answer:1,
  explanation:"Language samples can reveal grammatical structures, vocabulary, narrative organization, pragmatics, and functional communication that a single standardized score may not capture."
},
{
  id:"ST179", difficulty:"Moderate", topic:"AAC",
  question:"A nonspeaking child communicates effectively with gestures and symbols. What is the best initial AAC principle?",
  options:["Delay AAC until speech therapy has failed for several years","Use only a high-tech device regardless of access needs","Select an individualized system and provide communication opportunities across daily routines","Require the child to master all symbols before communicating"],
  answer:2,
  explanation:"AAC should be individualized, accessible, and available in meaningful daily contexts. AAC does not need to be withheld while speech skills develop."
},
{
  id:"ST180", difficulty:"Moderate", topic:"Hearing and Language",
  question:"A child has inconsistent responses to spoken directions and delayed language. What should the clinician consider?",
  options:["Assume the child is deliberately noncompliant","Diagnose intellectual disability based on these signs alone","Exclude hearing because the child responds sometimes","Recommend hearing assessment as part of the broader evaluation"],
  answer:3,
  explanation:"Hearing differences can affect access to speech and language. Hearing assessment is an important part of evaluating unexplained language delay or inconsistent auditory responses."
},
{
  id:"ST181", difficulty:"Moderate", topic:"Voice",
  question:"Which measure is commonly used as an acoustic estimate of cycle-to-cycle frequency variation in sustained phonation?",
  options:["Jitter","Word count","Mean length of utterance","Language age equivalent"],
  answer:0,
  explanation:"Jitter estimates short-term variation in fundamental frequency between successive cycles. It must be interpreted with recording conditions and other clinical information."
},
{
  id:"ST182", difficulty:"Moderate", topic:"Speech Sound Disorders",
  question:"A child produces a target sound correctly in isolation but not in connected speech. What is a reasonable next therapy step?",
  options:["Stop therapy because the sound is mastered","Progress practice gradually through syllables, words, phrases, and connected speech as appropriate","Switch immediately to an unrelated target","Assume the child cannot learn the sound"],
  answer:1,
  explanation:"Generalization often requires structured practice across increasing levels of linguistic complexity and opportunities for carryover into everyday communication."
},
{
  id:"ST183", difficulty:"Moderate", topic:"Pragmatics",
  question:"A student frequently interrupts peers and misses conversational turn-taking cues. Which area should be assessed?",
  options:["Pure-tone hearing thresholds only","Respiratory support only","Social communication and pragmatic language in context","Oral strength alone"],
  answer:2,
  explanation:"Turn-taking, conversational repair, topic management, and interpreting social cues are aspects of pragmatic and social communication."
},
{
  id:"ST184", difficulty:"Moderate", topic:"Dysarthria",
  question:"A speaker with dysarthria has reduced intelligibility because of imprecise consonants and slow rate. Which intervention may be appropriate after assessment?",
  options:["A generic language worksheet unrelated to speech","A blanket prohibition on speaking","Only passive listening exercises","Individualized speech strategies targeting rate, precision, and intelligibility"],
  answer:3,
  explanation:"Treatment may target rate, articulatory precision, breath support, prosody, and communication strategies according to the underlying dysarthria and the patient's goals."
},
{
  id:"ST185", difficulty:"Moderate", topic:"Research Literacy",
  question:"What does sensitivity indicate in a screening test?",
  options:["The proportion of people with the condition who screen positive","The proportion of healthy people who screen negative","The probability that every positive result is correct","The consistency of scores across raters"],
  answer:0,
  explanation:"Sensitivity is the true-positive rate. Specificity is the true-negative rate; neither measure alone determines the probability that an individual has a disorder."
},
{
  id:"ST186", difficulty:"Moderate", topic:"Clinical Ethics",
  question:"A family requests that the clinician share assessment results with a school. What should the clinician do?",
  options:["Send the entire record automatically to anyone who asks","Follow applicable consent, confidentiality, and information-sharing requirements","Post the report in a public group","Refuse all communication with other professionals under every circumstance"],
  answer:1,
  explanation:"Information sharing should follow applicable law, professional ethics, consent requirements, and organizational policy, with disclosure limited to what is appropriate."
},
{
  id:"ST187", difficulty:"Moderate", topic:"Swallowing",
  question:"Which instrumental procedure uses X-ray imaging to examine swallowing across selected bolus consistencies?",
  options:["Electroencephalography","Pure-tone audiometry","Videofluoroscopic swallowing study","Routine spirometry alone"],
  answer:2,
  explanation:"A videofluoroscopic swallowing study (VFSS), also called a modified barium swallow study, uses dynamic X-ray imaging to assess swallowing physiology."
},
{
  id:"ST188", difficulty:"Moderate", topic:"Language Development",
  question:"A child uses 'goed' instead of 'went'. What does this most likely illustrate?",
  options:["A hearing threshold shift","A vocal-fold lesion","A swallowing-phase impairment","Overregularization of an irregular past-tense form"],
  answer:3,
  explanation:"Overregularization occurs when a child applies a productive grammatical rule to an irregular form, such as adding -ed to 'go'."
},
{
  id:"ST189", difficulty:"Moderate", topic:"Clinical Goals",
  question:"A therapy goal states, 'The client will improve speech.' What is the main weakness?",
  options:["It does not specify an observable target or criterion for measuring change","It contains too many measurable criteria","It identifies a precise context and performance threshold","It defines the treatment outcome in objective terms"],
  answer:0,
  explanation:"Effective goals define a specific observable behavior and an appropriate criterion, context, and time frame when relevant."
},
{
  id:"ST190", difficulty:"Moderate", topic:"Autism and AAC",
  question:"An autistic student uses a speech-generating device. What should communication partners generally do?",
  options:["Keep the device away during ordinary classroom activities","Model use of the system and provide time for the student to communicate","Require spoken words before honoring device messages","Use the device only during formal therapy"],
  answer:1,
  explanation:"Aided language modeling and consistent access to AAC can support communication learning. Partners should respond meaningfully to the student's communication."
},

{
  id:"ST191", difficulty:"Hard", topic:"Differential Diagnosis",
  question:"A child has persistent speech sound errors, reduced intelligibility, and inconsistent productions across repeated attempts. Which approach best supports differential diagnosis?",
  options:["Diagnose childhood apraxia of speech from inconsistency alone","Diagnose a phonological disorder from intelligibility alone","Integrate speech sampling, repeated productions, prosody, transitions, oral-motor findings, and case history","Use a hearing screening as the only diagnostic measure"],
  answer:2,
  explanation:"Inconsistency alone is not diagnostic. Differential assessment considers the overall speech profile, including motor planning indicators, phonological patterns, prosody, transitions, stimulability, and history."
},
{
  id:"ST192", difficulty:"Hard", topic:"Aphasia",
  question:"A patient with aphasia has difficulty retrieving nouns but demonstrates relatively preserved comprehension and grammatical structure. Which impairment is most directly suggested?",
  options:["Severe bilateral hearing loss","A primary respiratory disorder","A pure voice disorder","Anomia"],
  answer:3,
  explanation:"Anomia is difficulty retrieving words, especially names of objects or concepts. Its cause and broader language profile require comprehensive assessment."
},
{
  id:"ST193", difficulty:"Hard", topic:"Dysphagia",
  question:"A patient with suspected pharyngeal dysphagia has a bedside examination without overt coughing. What is the most defensible interpretation?",
  options:["Silent aspiration remains possible; further evaluation depends on the overall clinical picture","Aspiration is definitively excluded","All food textures are proven safe","Instrumental assessment is never appropriate without coughing"],
  answer:0,
  explanation:"Bedside findings cannot reliably exclude silent aspiration. Instrumental assessment such as VFSS or FEES may be indicated based on the patient's presentation and clinical judgment."
},
{
  id:"ST194", difficulty:"Hard", topic:"Voice Assessment",
  question:"Why should acoustic measures such as jitter and shimmer not be interpreted in isolation when evaluating dysphonia?",
  options:["They directly establish the anatomical cause of every voice disorder","Their values can be influenced by signal quality, phonation type, analysis methods, and clinical context","They measure receptive vocabulary","They are interchangeable with laryngeal visualization"],
  answer:1,
  explanation:"Acoustic measures provide selected information about voice signal characteristics but do not independently establish diagnosis. Perceptual, medical, and instrumental findings may also be needed."
},
{
  id:"ST195", difficulty:"Hard", topic:"Stuttering",
  question:"An adult who stutters reports substantial avoidance despite relatively few observable stutters during the clinic session. What is the best clinical response?",
  options:["Discharge because the session contains few stutters","Conclude the client is exaggerating the problem","Assess impact, avoidance, experiences, and participation alongside observable fluency","Require more severe stuttering before offering intervention"],
  answer:2,
  explanation:"Stuttering severity cannot be judged solely by the number of observable events during one session. Assessment should include the person's experience, avoidance, and participation."
},
{
  id:"ST196", difficulty:"Hard", topic:"Evidence-Based Practice",
  question:"Which approach best represents evidence-based speech-language pathology practice?",
  options:["Follow a single research article regardless of relevance","Use only personal preference without evaluating outcomes","Choose whichever intervention is newest","Integrate best available evidence, clinical expertise, and the client's values and circumstances"],
  answer:3,
  explanation:"Evidence-based practice combines relevant research evidence with clinical expertise and the individual's needs, preferences, and context."
},
{
  id:"ST197", difficulty:"Hard", topic:"Assessment Statistics",
  question:"A test has high specificity but modest sensitivity. What is the most accurate interpretation?",
  options:["A negative result may fail to identify some people who have the condition","Every negative result definitively excludes the condition","The test has no false positives under every circumstance","The test necessarily has perfect reliability"],
  answer:0,
  explanation:"High specificity means a relatively high true-negative rate. Modest sensitivity means some people with the condition may test negative."
},
{
  id:"ST198", difficulty:"Hard", topic:"Motor Speech",
  question:"A patient presents with slow, effortful speech, visible articulatory groping, and inconsistent sound errors, while language formulation is relatively preserved. Which diagnosis should be considered in the differential?",
  options:["A receptive language disorder alone","Apraxia of speech","A pure resonance disorder","An isolated hearing threshold problem"],
  answer:1,
  explanation:"These findings can be consistent with apraxia of speech, a motor planning/programming disorder. Dysarthria and co-occurring language disorders should also be considered."
},
{
  id:"ST199", difficulty:"Hard", topic:"Dysphagia Instrumentation",
  question:"Which statement best distinguishes FEES from VFSS?",
  options:["FEES uses continuous X-ray imaging of the whole swallow","VFSS requires no radiation under any protocol","FEES uses a transnasal endoscope to view pharyngeal and laryngeal structures, while VFSS uses fluoroscopic X-ray imaging","Both procedures directly visualize every stage of swallowing identically"],
  answer:2,
  explanation:"FEES provides endoscopic visualization of pharyngeal and laryngeal structures, with a brief white-out during the swallow. VFSS uses fluoroscopy to visualize bolus movement and swallowing biomechanics."
},
{
  id:"ST200", difficulty:"Hard", topic:"Clinical Reasoning",
  question:"A patient with a progressive neurological condition reports new swallowing difficulty and weight loss. What is the most appropriate response?",
  options:["Continue the same diet without reassessment","Offer unsupervised exercises selected from the internet","Wait until severe choking occurs","Arrange prompt medical and swallowing reassessment and coordinate appropriate care"],
  answer:3,
  explanation:"New swallowing difficulty and weight loss can indicate significant risk. Prompt evaluation and coordinated management are warranted; urgency depends on the patient's overall condition."
},
{
  id:"ST201", difficulty:"Hard", topic:"Language Assessment",
  question:"A bilingual child performs poorly on a monolingual standardized language test. Which interpretation is most appropriate?",
  options:["The score alone cannot distinguish language disorder from differences related to language exposure and test norms","Bilingualism itself establishes a language disorder","The result proves the child's first language is impaired","The child should be assessed only in the weaker language"],
  answer:0,
  explanation:"Assessment of multilingual children should consider language exposure and proficiency across languages, cultural and linguistic factors, and appropriate tools. A monolingual score alone may be insufficient."
},
{
  id:"ST202", difficulty:"Hard", topic:"Phonological Intervention",
  question:"A child has several phonological error patterns that substantially reduce intelligibility. Which factor is important when selecting initial targets?",
  options:["Choose targets only because they are easiest for the clinician","Consider stimulability, developmental and functional impact, pattern interactions, and the child's communication needs","Always target the same phoneme for every child","Avoid involving caregivers in generalization planning"],
  answer:1,
  explanation:"Target selection should be individualized. Stimulability, functional impact, developmental considerations, and the relationship among error patterns may guide intervention planning."
},
{
  id:"ST203", difficulty:"Hard", topic:"Neurogenic Communication",
  question:"Following a right-hemisphere stroke, a patient speaks in grammatically correct sentences but misses sarcasm, implied meaning, and conversational cues. Which area merits assessment?",
  options:["Articulation placement alone","Pure-tone hearing alone","Cognitive-communication and pragmatic skills","Only oral strength"],
  answer:2,
  explanation:"Right-hemisphere injury can affect inference, discourse, prosody, and pragmatic communication even when basic sentence grammar appears relatively intact."
},
{
  id:"ST204", difficulty:"Hard", topic:"Voice Therapy",
  question:"A patient has vocal-fold pathology confirmed by an otolaryngologist. What should guide the speech-language pathologist's voice treatment plan?",
  options:["A universal program used for all laryngeal conditions","The acoustic score alone","An assumption that surgery is always required","Medical findings, functional voice assessment, patient goals, and coordination with the treating team"],
  answer:3,
  explanation:"Voice intervention should reflect the underlying laryngeal condition, functional findings, patient priorities, and medical recommendations."
},
{
  id:"ST205", difficulty:"Hard", topic:"AAC Assessment",
  question:"An adult with severe motor impairment understands language but cannot reliably touch a communication screen. What should an AAC assessment prioritize?",
  options:["Access methods, positioning, vision, language, communication needs, and trial of suitable systems","A requirement to use direct touch regardless of ability","Speech drills as the only intervention","A device chosen solely by its price"],
  answer:0,
  explanation:"AAC assessment should identify a reliable access method and consider positioning, motor and sensory abilities, language, environments, communication goals, and device trials."
},
{
  id:"ST206", difficulty:"Hard", topic:"Clinical Measurement",
  question:"A client improves from 40% to 60% accuracy on a speech target after intervention. What is the strongest conclusion from these figures alone?",
  options:["The intervention caused all of the improvement","Observed accuracy increased by 20 percentage points, but further evidence is needed to establish cause and generalization","The client is now fully intelligible in all contexts","The measure is automatically reliable and valid"],
  answer:1,
  explanation:"The observed change is 20 percentage points. Causal attribution, clinical significance, reliability, and generalization require additional context and appropriate measurement."
},
{
  id:"ST207", difficulty:"Hard", topic:"Dysarthria Assessment",
  question:"A patient has strained voice, slow rate, reduced pitch variation, and imprecise consonants. Why should the clinician assess multiple speech subsystems?",
  options:["One symptom always identifies a unique dysarthria subtype","Speech subsystems never influence one another","A combination of findings across respiration, phonation, resonance, articulation, and prosody supports differential diagnosis and planning","Subsystem assessment is needed only for children"],
  answer:2,
  explanation:"Dysarthria classification and management rely on the pattern of findings across speech subsystems, neurological signs, functional impact, and the patient's medical history."
},
{
  id:"ST208", difficulty:"Hard", topic:"Research Design",
  question:"A small uncontrolled case series reports improvement after a new therapy. What is the main limitation?",
  options:["It can never provide clinically useful information","It automatically proves the treatment is ineffective","It establishes generalizability to every patient","Without an appropriate comparison and stronger design, causal conclusions are limited"],
  answer:3,
  explanation:"An uncontrolled case series may generate useful preliminary observations, but it cannot confidently isolate treatment effects from other explanations such as maturation, practice, or concurrent care."
},
{
  id:"ST209", difficulty:"Hard", topic:"Ethics and Scope",
  question:"A family asks a speech-language pathologist to interpret an unexplained brain MRI finding beyond the clinician's expertise. What is the best response?",
  options:["Explain the limits of the clinician's role and refer the family to the appropriate medical professional","Provide a definitive neurological diagnosis to reassure the family","Ignore the question and document nothing","Change the MRI interpretation to match the family's preferred explanation"],
  answer:0,
  explanation:"Clinicians should work within their competence, communicate limitations clearly, and refer medical interpretation to appropriately qualified professionals."
},
{
  id:"ST210", difficulty:"Hard", topic:"Functional Outcomes",
  question:"A client demonstrates accurate target-sound production in structured drills but continues to be difficult to understand in daily conversation. What should the clinician do next?",
  options:["Discharge immediately because drill accuracy is sufficient","Assess connected speech and functional communication, then adjust treatment to support generalization","Repeat isolated-sound drills indefinitely without reviewing outcomes","Conclude the client has no remaining communication needs"],
  answer:1,
  explanation:"Accuracy in structured drills does not guarantee generalization. Assessment and intervention should include connected speech, functional contexts, communication-partner input, and meaningful outcome measures."
},

{
  id:"ST211",difficulty:"Easy",topic:"Anatomy",
  question:"Which structure moves to help close the velopharyngeal port during speech?",
  options:["Tongue tip","Soft palate","Lower lip","Vocal folds"],
  answer:1,
  explanation:"The soft palate elevates toward the pharyngeal walls to help direct oral airflow during most oral speech sounds."
},
{
  id:"ST212",difficulty:"Easy",topic:"Language",
  question:"Which example best demonstrates expressive language?",
  options:["Hearing a doorbell","Following a pointing gesture","Recognizing a familiar face","Asking for a drink using words"],
  answer:3,
  explanation:"Expressive language involves communicating thoughts, needs, and ideas through spoken, written, signed, or other language forms."
},
{
  id:"ST213",difficulty:"Easy",topic:"Speech Sounds",
  question:"Which sound is a voiceless labiodental fricative in English?",
  options:["/f/","/v/","/b/","/m/"],
  answer:0,
  explanation:"The /f/ sound is produced by directing airflow between the lower lip and upper teeth without vocal-fold vibration."
},
{
  id:"ST214",difficulty:"Easy",topic:"Voice",
  question:"Which feature is most closely associated with vocal loudness?",
  options:["Word meaning","Sentence grammar","Perceived intensity","Tongue placement"],
  answer:2,
  explanation:"Loudness is the perceptual quality related to sound intensity, though voice production and perception involve several factors."
},
{
  id:"ST215",difficulty:"Easy",topic:"Fluency",
  question:"Which response is generally supportive when speaking with a person who stutters?",
  options:["Finish every sentence for them","Listen patiently and allow them time to finish","Tell them to stop and start again every time","Avoid all conversation with them"],
  answer:1,
  explanation:"Patient listening and natural turn-taking support communication. Avoid pressuring the speaker to rush or repeatedly restart."
},
{
  id:"ST216",difficulty:"Easy",topic:"Language Development",
  question:"What is a common function of a child's first meaningful words?",
  options:["Producing complex academic arguments","Demonstrating adult-like grammar","Replacing all gestures immediately","Naming people or requesting familiar objects"],
  answer:3,
  explanation:"Early words often serve functions such as requesting, labeling, greeting, and attracting another person's attention."
},
{
  id:"ST217",difficulty:"Easy",topic:"Hearing",
  question:"Which professional typically performs diagnostic hearing tests?",
  options:["Audiologist","Dietitian","Radiographer in every case","Occupational therapist"],
  answer:0,
  explanation:"Audiologists are trained to evaluate hearing and related auditory functions using appropriate diagnostic procedures."
},
{
  id:"ST218",difficulty:"Easy",topic:"AAC",
  question:"Which is an example of unaided AAC?",
  options:["A tablet with text-to-speech","A printed communication board","A manual gesture","A dedicated speech-generating device"],
  answer:2,
  explanation:"Unaided AAC uses the person's body, such as gestures, facial expressions, or manual signs, without an external communication aid."
},
{
  id:"ST219",difficulty:"Easy",topic:"Anatomy",
  question:"Which structure is primarily responsible for separating the lower airway from the digestive tract during normal breathing and swallowing coordination?",
  options:["Hard palate","Laryngeal airway-protection mechanisms","Outer ear","Nasal bone"],
  answer:1,
  explanation:"Laryngeal structures and coordinated swallowing movements help protect the airway while food and liquid pass toward the esophagus."
},
{
  id:"ST220",difficulty:"Easy",topic:"Clinical Practice",
  question:"What should a therapist do if a patient does not understand an instruction?",
  options:["Assume the patient is refusing treatment","Repeat it louder regardless of hearing status","End the session immediately","Rephrase it and use appropriate visual or contextual support"],
  answer:3,
  explanation:"Rephrasing, demonstrating, and providing suitable visual or contextual cues can improve understanding while respecting the patient's communication needs."
},
{
  id:"ST221",difficulty:"Easy",topic:"Articulation",
  question:"Which sound is a voiced bilabial nasal?",
  options:["/m/","/p/","/s/","/t/"],
  answer:0,
  explanation:"The /m/ sound is produced with the lips closed, vocal-fold vibration, and airflow through the nasal cavity."
},
{
  id:"ST222",difficulty:"Easy",topic:"Language",
  question:"Which language domain includes word order and sentence structure?",
  options:["Semantics","Phonetics","Syntax","Voice"],
  answer:2,
  explanation:"Syntax concerns how words and phrases are organized to form grammatical sentences."
},
{
  id:"ST223",difficulty:"Easy",topic:"Swallowing",
  question:"Which symptom during eating should be reported for swallowing assessment?",
  options:["Finishing a meal comfortably","Repeated coughing or choking during meals","Enjoying a preferred food","Using a napkin"],
  answer:1,
  explanation:"Repeated coughing or choking during meals may indicate swallowing difficulty and should be evaluated in context."
},
{
  id:"ST224",difficulty:"Easy",topic:"Clinical Documentation",
  question:"Which item belongs in a therapy progress note?",
  options:["An unsupported prediction about future recovery","A personal criticism of the patient","An unrelated rumor","The target addressed and the patient's observed performance"],
  answer:3,
  explanation:"Clinical documentation should record relevant treatment activities, objective performance, response to intervention, and plans."
},
{
  id:"ST225",difficulty:"Easy",topic:"Speech Anatomy",
  question:"Which articulator is most involved in producing the English /l/ sound?",
  options:["Tongue tip or blade near the alveolar ridge","Vocal folds alone","Lower airway only","Eardrum"],
  answer:0,
  explanation:"English /l/ is generally an alveolar lateral approximant, made with the tongue tip or blade near the alveolar ridge."
},
{
  id:"ST226",difficulty:"Easy",topic:"Autism and Communication",
  question:"What is a useful way to support an individual's communication during an unfamiliar activity?",
  options:["Remove all communication supports","Insist on one communication method for everyone","Use clear language, visual supports, and adequate processing time as appropriate","Prevent the individual from asking questions"],
  answer:2,
  explanation:"Predictable language, visual supports, and processing time may improve access and participation when tailored to individual needs."
},
{
  id:"ST227",difficulty:"Easy",topic:"Voice",
  question:"Which term describes the quality of sound produced by the vocal folds vibrating?",
  options:["Semantics","Phonation","Syntax","Auditory memory"],
  answer:1,
  explanation:"Phonation is the production of voice through vibration of the vocal folds."
},
{
  id:"ST228",difficulty:"Easy",topic:"Aphasia",
  question:"Which statement about aphasia is correct?",
  options:["It always means a person cannot understand anything","It is simply another term for hearing loss","It affects only vocal volume","It can affect speaking, understanding, reading, and writing to varying degrees"],
  answer:3,
  explanation:"Aphasia can affect different language modalities and domains. The pattern and severity vary with the person and neurological injury."
},
{
  id:"ST229",difficulty:"Easy",topic:"Therapy Planning",
  question:"Why should therapy goals reflect a patient's daily communication needs?",
  options:["To make treatment more functional and meaningful","To avoid measuring progress","To eliminate the need for assessment","To ensure every patient has identical goals"],
  answer:0,
  explanation:"Functional goals connect intervention to participation and outcomes that matter to the patient and their communication partners."
},
{
  id:"ST230",difficulty:"Easy",topic:"Speech Disorders",
  question:"What does intelligibility describe?",
  options:["How loud a voice is in every situation","The person's hearing threshold","How much of a speaker's message a listener can understand","The number of words in a dictionary"],
  answer:2,
  explanation:"Speech intelligibility refers to how understandable a speaker's speech is to a listener in a particular context."

},
{
  id:"ST231",difficulty:"Moderate",topic:"Language Assessment",
  question:"A child follows familiar routines but struggles to understand novel multi-step directions. What should the clinician examine?",
  options:["Only the child's voice quality","Receptive language under varied linguistic and contextual demands","Only lip strength","Only the child's handwriting"],
  answer:1,
  explanation:"Assessment should examine comprehension across levels of complexity and consider vocabulary, syntax, memory demands, context, attention, and hearing."
},
{
  id:"ST232",difficulty:"Moderate",topic:"Phonology",
  question:"A child produces 'nana' for 'banana'. Which pattern may explain the omission of an unstressed syllable?",
  options:["Final consonant deletion","Stopping","Backing","Weak-syllable deletion"],
  answer:3,
  explanation:"Weak-syllable deletion occurs when an unstressed syllable is omitted from a multisyllabic word."
},
{
  id:"ST233",difficulty:"Moderate",topic:"Aphasia",
  question:"A person with aphasia struggles to retrieve words during conversation. Which strategy may support communication?",
  options:["Allow time, use semantic cues, and encourage multimodal communication","Correct every error immediately and interrupt frequently","Avoid discussing meaningful topics","Require rapid naming without support in every activity"],
  answer:0,
  explanation:"Extra response time, semantic or phonological cues, writing, gestures, and communication-partner strategies may support successful word retrieval and participation."
},
{
  id:"ST234",difficulty:"Moderate",topic:"Voice",
  question:"Which voice symptom is commonly described as breathiness?",
  options:["Unusually rapid word retrieval","Difficulty understanding written language","An audible escape of air during phonation","A consistent inability to hear high pitches"],
  answer:2,
  explanation:"Breathy voice quality can result from incomplete or inefficient vocal-fold closure, although the cause requires appropriate assessment."
},
{
  id:"ST235",difficulty:"Moderate",topic:"Fluency",
  question:"Which feature can help distinguish typical disfluency from stuttering-like disfluency?",
  options:["Whether the speaker is a child or adult alone","The nature, frequency, tension, and impact of the disfluencies","Whether the speaker uses long words","Whether the speaker speaks in a quiet room"],
  answer:1,
  explanation:"Differentiation considers the type and pattern of disfluency, tension, secondary behaviors, impact, history, and the person's experience."
},
{
  id:"ST236",difficulty:"Moderate",topic:"Dysarthria",
  question:"A patient has a weak, breathy voice and reduced respiratory support following neurological injury. Which subsystem deserves particular attention?",
  options:["Semantics alone","Reading comprehension alone","Spelling alone","Respiration and phonation, within a full motor-speech assessment"],
  answer:3,
  explanation:"Respiratory support and phonatory function may contribute to reduced vocal intensity and breathiness. A comprehensive assessment examines all relevant speech subsystems."
},
{
  id:"ST237",difficulty:"Moderate",topic:"Dysphagia",
  question:"Why is a bedside swallowing examination not always sufficient to determine swallowing physiology?",
  options:["It cannot directly visualize all internal swallowing events","It always causes aspiration","It measures language comprehension instead of swallowing","It replaces all medical history-taking"],
  answer:0,
  explanation:"A bedside examination provides valuable clinical information but cannot directly show every physiological event or reliably rule out silent aspiration."
},
{
  id:"ST238",difficulty:"Moderate",topic:"AAC",
  question:"What does aided language modeling involve?",
  options:["Removing symbols while speaking","Using only spoken instructions","Pointing to or selecting symbols on an AAC system while communicating","Requiring the learner to imitate every message"],
  answer:2,
  explanation:"Communication partners model meaningful language on the AAC system while speaking naturally, without requiring immediate imitation."
},
{
  id:"ST239",difficulty:"Moderate",topic:"Pragmatics",
  question:"A client frequently misunderstands indirect requests such as 'It's cold in here.' Which skill may need assessment?",
  options:["Vocal-fold vibration only","Pragmatic inference and interpretation of implied meaning","Tongue strength alone","Pure-tone hearing alone"],
  answer:1,
  explanation:"Understanding indirect requests can involve pragmatic inference, context integration, and recognizing a speaker's intended meaning."
},
{
  id:"ST240",difficulty:"Moderate",topic:"Assessment Statistics",
  question:"What does test-retest reliability evaluate?",
  options:["Whether a test measures every possible skill","Whether the test is free of cultural bias","Whether the treatment works","The consistency of scores when the same measure is repeated under suitable conditions"],
  answer:3,
  explanation:"Test-retest reliability evaluates score consistency across repeated administrations when the construct is expected to remain stable and conditions are appropriate."
},
{
  id:"ST241",difficulty:"Moderate",topic:"Speech Sound Disorders",
  question:"A child can produce /r/ correctly after a model but rarely uses it independently. What is the most useful interpretation?",
  options:["Stimulability is present, but independent production and generalization need assessment and practice","The child has automatically mastered /r/ in all contexts","The child must have aphasia","No further assessment is necessary"],
  answer:0,
  explanation:"Producing a sound with a model suggests stimulability, but independent use across words, contexts, and everyday communication still needs to be evaluated."
},
{
  id:"ST242",difficulty:"Moderate",topic:"Language Development",
  question:"Why is caregiver interviewing valuable during a pediatric language assessment?",
  options:["It replaces direct observation in all cases","It provides a definitive diagnosis by itself","It adds information about communication across routines and environments","It measures hearing thresholds directly"],
  answer:2,
  explanation:"Caregivers can describe developmental history, everyday communication, strengths, concerns, language exposure, and performance in natural environments."
},
{
  id:"ST243",difficulty:"Moderate",topic:"Clinical Ethics",
  question:"A patient declines a proposed therapy activity after receiving an explanation. What is an appropriate response?",
  options:["Threaten to discontinue all future care","Explore the patient's concerns and discuss alternatives while respecting autonomy","Proceed without consent because the clinician recommends it","Record a diagnosis of noncompliance without discussion"],
  answer:1,
  explanation:"Clinicians should respect informed choices, explore barriers and preferences, and consider appropriate alternatives within professional and legal requirements."
},
{
  id:"ST244",difficulty:"Moderate",topic:"Voice",
  question:"Which practice is generally more appropriate for a person with vocal fatigue than repeatedly forcing a loud voice?",
  options:["Increase shouting throughout the day","Ignore persistent symptoms indefinitely","Practice forceful phonation without assessment","Use appropriate vocal hygiene and seek assessment for persistent symptoms"],
  answer:3,
  explanation:"Vocal fatigue warrants attention to voice use and possible underlying causes. Persistent or concerning symptoms should be medically evaluated rather than managed by forceful practice."
},
{
  id:"ST245",difficulty:"Moderate",topic:"Motor Speech",
  question:"Which finding is more suggestive of dysarthria than isolated aphasia?",
  options:["Consistent evidence of impaired motor control affecting speech production","Difficulty selecting written vocabulary only","Difficulty understanding word meanings only","An inability to read unfamiliar words with otherwise normal speech"],
  answer:0,
  explanation:"Dysarthria affects motor execution or control of speech. Aphasia affects language processing; both can co-occur after neurological injury."
},
{
  id:"ST246",difficulty:"Moderate",topic:"Dysphagia",
  question:"What is an important reason to consider the patient's preferences when planning dysphagia management?",
  options:["Preferences remove the need to assess risk","Preferences guarantee that aspiration cannot occur","Management should balance swallowing safety, nutrition, hydration, quality of life, and informed choice","Preferences require all recommendations to remain unchanged"],
  answer:2,
  explanation:"Dysphagia care involves shared decision-making and individualized consideration of risks, benefits, nutrition, hydration, function, and quality of life."
},
{
  id:"ST247",difficulty:"Moderate",topic:"Phonological Awareness",
  question:"Which task assesses phonemic awareness rather than general vocabulary knowledge?",
  options:["Naming a picture of a dog","Identifying the first sound in 'sun'","Explaining the meaning of 'enormous'","Describing a familiar story character"],
  answer:1,
  explanation:"Identifying the initial phoneme in a word is a phonemic-awareness task involving conscious attention to speech sounds."
},
{
  id:"ST248",difficulty:"Moderate",topic:"Clinical Outcomes",
  question:"Why should treatment outcomes be reviewed at regular intervals?",
  options:["To guarantee improvement regardless of intervention","To avoid changing a plan that is not helping","To replace patient feedback with clinician opinion","To determine whether progress supports continuing or modifying the intervention"],
  answer:3,
  explanation:"Regular outcome review helps determine whether treatment is effective, whether goals remain relevant, and whether modifications are needed."
},
{
  id:"ST249",difficulty:"Moderate",topic:"Hearing and Communication",
  question:"A patient has difficulty following conversation in a noisy group despite adequate performance in a quiet room. What is a reasonable next step?",
  options:["Explore listening demands and consider appropriate audiological and functional assessment","Conclude that language ability is normal in all environments","Assume intentional refusal to listen","Diagnose a voice disorder based only on the complaint"],
  answer:0,
  explanation:"Communication difficulties can vary by listening environment. Assessment may examine hearing, speech-in-noise demands, language, attention, and functional participation."
},
{
  id:"ST250",difficulty:"Moderate",topic:"Autism and Communication",
  question:"An autistic child uses echolalic phrases to communicate. What should the clinician do?",
  options:["Treat every repeated phrase as meaningless","Forbid repetition in all settings","Examine the phrase's context and possible communicative function, then support functional communication","Require immediate replacement of every phrase with a novel sentence"],
  answer:2,
  explanation:"Echolalia can serve different functions. Assessment should consider context, communicative intent, and the individual's language profile before choosing intervention strategies."
},

{
  id:"ST251",difficulty:"Hard",topic:"Differential Diagnosis",
  question:"A child has inconsistent consonant errors, disrupted transitions, and abnormal stress patterns. Which conclusion is most appropriate?",
  options:["These findings prove a single diagnosis without further assessment","The profile raises concern for a motor-planning disorder and warrants comprehensive differential assessment","The child necessarily has a hearing disorder","The findings establish a receptive language disorder"],
  answer:1,
  explanation:"Inconsistency, disrupted transitions, and prosodic abnormalities may be associated with childhood apraxia of speech, but diagnosis requires a comprehensive assessment and consideration of alternatives."
},
{
  id:"ST252",difficulty:"Hard",topic:"Aphasia",
  question:"A patient speaks fluently but produces circumlocutions and semantic paraphasias while comprehension is relatively preserved. Which impairment should be explored?",
  options:["Isolated respiratory weakness","A pure swallowing disorder","A primary pitch-control disorder","Lexical-semantic retrieval impairment within the broader aphasia profile"],
  answer:3,
  explanation:"Circumlocutions and semantic paraphasias may reflect word-retrieval and lexical-semantic difficulties. The full language profile determines diagnostic interpretation."
},
{
  id:"ST253",difficulty:"Hard",topic:"Dysphagia Instrumentation",
  question:"During VFSS, a patient demonstrates aspiration after the swallow associated with pharyngeal residue. Which interpretation is most appropriate?",
  options:["Residue may enter the airway after the swallow; management should be guided by the full physiological findings","Aspiration after the swallow always proves an esophageal obstruction","The finding means the patient has no pharyngeal impairment","A single observation determines the safest diet in every context"],
  answer:0,
  explanation:"Post-swallow aspiration can occur when retained material enters the airway. Clinical decisions require consideration of residue location, timing, physiology, response, and the patient's overall condition."
},
{
  id:"ST254",difficulty:"Hard",topic:"Voice Assessment",
  question:"A patient has persistent dysphonia, and perceptual ratings differ substantially between clinicians. What is the best response?",
  options:["Discard all perceptual assessment","Select the more severe rating without review","Use defined rating procedures, consider reliability, and integrate other relevant findings","Diagnose a neurological disorder from disagreement alone"],
  answer:2,
  explanation:"Clear rating protocols and clinician calibration can improve reliability. Perceptual findings should be interpreted alongside case history, functional impact, and appropriate instrumental or medical findings."
},
{
  id:"ST255",difficulty:"Hard",topic:"Fluency",
  question:"A client reports that stuttering is much worse at work than in therapy. Which approach best investigates the difference?",
  options:["Assume the client is mistaken because therapy speech is fluent","Collect information about contexts, demands, avoidance, communication partners, and the client's experience","Use only a single word-repetition task","Exclude work participation from treatment planning"],
  answer:1,
  explanation:"Stuttering can vary by context. Assessment should include real-world communication demands, the speaker's experience, and participation rather than relying on a single clinic sample."
},
{
  id:"ST256",difficulty:"Hard",topic:"Evidence-Based Practice",
  question:"Several studies support an intervention, but their participants differ from the patient being treated. What should the clinician do?",
  options:["Apply the intervention without considering individual differences","Reject all research evidence automatically","Use only anecdotal experience","Evaluate study quality, applicability, patient preferences, and clinical circumstances before deciding"],
  answer:3,
  explanation:"Evidence-based practice requires critical appraisal and thoughtful application. Study populations, outcomes, risks, feasibility, and individual goals all matter."
},
{
  id:"ST257",difficulty:"Hard",topic:"Assessment Statistics",
  question:"A screening test has a high false-negative rate. What is the main concern?",
  options:["Some people who have the condition may be incorrectly classified as screen-negative","Every positive result is certainly correct","The test has perfect sensitivity","The test necessarily measures a different construct"],
  answer:0,
  explanation:"A high false-negative rate indicates limited sensitivity and a risk of missing people who have the condition."
},
{
  id:"ST258",difficulty:"Hard",topic:"Motor Speech",
  question:"A patient with Parkinsonian features speaks rapidly in short rushes, with reduced loudness and reduced prosodic variation. Which intervention focus may be considered after assessment?",
  options:["Vocabulary expansion as the only treatment","Elimination of all spontaneous conversation","Individualized strategies for speech rate, vocal intensity, and prosodic clarity","Swallowing exercises without evidence of swallowing impairment"],
  answer:2,
  explanation:"Parkinsonian dysarthria can affect loudness, rate, and prosody. Treatment should be tailored to the individual's speech profile, medical status, goals, and response."
},
{
  id:"ST259",difficulty:"Hard",topic:"AAC Access",
  question:"A person with severe motor impairment can reliably control eye movements but not hand movements. What is the most appropriate AAC consideration?",
  options:["Require direct touch because it is simpler to teach","Evaluate eye-gaze access and other reliable methods within a comprehensive AAC assessment","Provide only a paper board that cannot be accessed","Assume the person cannot make communication choices"],
  answer:1,
  explanation:"Eye-gaze access may be suitable when visual and motor abilities permit. Assessment should include access reliability, positioning, fatigue, vision, language, and communication goals."
},
{
  id:"ST260",difficulty:"Hard",topic:"Clinical Reasoning",
  question:"A patient with a neurological diagnosis shows sudden new difficulty speaking and facial weakness. What should the clinician prioritize?",
  options:["Continue routine articulation drills","Schedule a standard follow-up several weeks later","Assume the symptoms reflect fatigue","Activate urgent medical evaluation according to emergency protocol"],
  answer:3,
  explanation:"Sudden speech difficulty with facial weakness may indicate an acute neurological emergency such as stroke. Immediate emergency assessment is required."
},
{
  id:"ST261",difficulty:"Hard",topic:"Language Assessment",
  question:"A bilingual child has difficulty with a grammatical structure in one language but not the other. What is the best interpretation?",
  options:["Consider cross-linguistic differences, exposure, proficiency, and evidence across languages before determining whether a disorder is present","A disorder is established whenever languages differ","The stronger language should never be assessed","The child should stop using the home language"],
  answer:0,
  explanation:"Multilingual development varies by language exposure and structure. Assessment should distinguish language difference from disorder using culturally and linguistically appropriate evidence."
},
{
  id:"ST262",difficulty:"Hard",topic:"Phonological Intervention",
  question:"A child has multiple sound errors and a low percentage of consonants correct in connected speech. Why might a broad phonological approach be considered?",
  options:["It guarantees rapid correction in every child","It removes the need to measure outcomes","It may address system-wide patterns when the error profile and clinical goals support that approach","It is appropriate only for isolated voice disorders"],
  answer:2,
  explanation:"Broader phonological approaches may be useful for children with multiple interacting sound-pattern errors. Treatment choice should be based on the child's profile and response."
},
{
  id:"ST263",difficulty:"Hard",topic:"Neurogenic Communication",
  question:"After a traumatic brain injury, a patient has difficulty organizing narratives, maintaining topics, and remembering conversational details. Which assessment focus is most appropriate?",
  options:["Articulation accuracy in isolation only","Cognitive-communication skills across discourse and everyday tasks","Vocal-fold structure only","Pure-tone hearing alone"],
  answer:1,
  explanation:"Traumatic brain injury can affect attention, memory, executive function, and discourse. Assessment should examine functional communication and relevant cognitive-communication demands."
},
{
  id:"ST264",difficulty:"Hard",topic:"Voice Therapy",
  question:"A patient with muscle tension dysphonia demonstrates excessive laryngeal effort. Which principle should guide intervention?",
  options:["Use maximum vocal effort in every exercise","Avoid all assessment of voice use","Assume the condition is always caused by psychological stress","Select appropriate evidence-informed techniques based on assessment and medical findings"],
  answer:3,
  explanation:"Intervention may target efficient voice production and reduced excessive tension, but it should be individualized and informed by appropriate laryngeal evaluation."
},
{
  id:"ST265",difficulty:"Hard",topic:"AAC Outcomes",
  question:"An AAC user produces more messages during therapy but rarely communicates at home. Which next step is most useful?",
  options:["Assess partner support, device availability, communication opportunities, and barriers across environments","Conclude that the device has failed without investigation","Increase clinic drills without consulting the family","Remove the AAC system at home"],
  answer:0,
  explanation:"Generalization depends on access, partner skills, communication opportunities, vocabulary relevance, and environmental factors. Intervention should address barriers across settings."
},
{
  id:"ST266",difficulty:"Hard",topic:"Clinical Measurement",
  question:"A patient's score improves on a language test, but the change is smaller than the test's reported measurement error. What conclusion is most defensible?",
  options:["The patient has certainly made a clinically meaningful change","The treatment has conclusively caused improvement","The observed difference may not exceed measurement variability and needs cautious interpretation","The test should be considered invalid in all cases"],
  answer:2,
  explanation:"Observed score changes should be interpreted relative to measurement error, reliability, practice effects, functional outcomes, and other clinical information."
},
{
  id:"ST267",difficulty:"Hard",topic:"Dysarthria",
  question:"A patient has hypernasal speech and audible nasal emission on pressure consonants. Which subsystem warrants focused assessment?",
  options:["Word semantics only","Velopharyngeal function and resonance, alongside the broader speech examination","Handwriting speed","Visual recognition of objects"],
  answer:1,
  explanation:"Hypernasality and nasal emission may indicate velopharyngeal dysfunction. Assessment should distinguish structural, neuromotor, and learned contributors when possible."
},
{
  id:"ST268",difficulty:"Hard",topic:"Research Literacy",
  question:"A randomized controlled trial reports a statistically significant but very small treatment effect. What should the clinician consider?",
  options:["Statistical significance proves the effect is clinically important","A small effect means the study is fraudulent","The finding automatically applies to all patients","Effect size, confidence intervals, clinical importance, study quality, and patient goals"],
  answer:3,
  explanation:"Statistical significance does not necessarily indicate meaningful benefit. Clinicians should examine effect size, uncertainty, relevance, and applicability to the individual."
},
{
  id:"ST269",difficulty:"Hard",topic:"Ethics and Confidentiality",
  question:"A clinician receives a request to disclose a patient's assessment report, but the legal basis and authorization are unclear. What is the best action?",
  options:["Verify authorization and applicable requirements before disclosing information","Send the report to avoid delays","Share the report through a public messaging group","Ask an unrelated patient for permission"],
  answer:0,
  explanation:"Confidential information should be disclosed only through appropriate, authorized processes consistent with applicable law, professional obligations, and organizational policy."
},
{
  id:"ST270",difficulty:"Hard",topic:"Functional Outcomes",
  question:"A patient achieves a high score on a structured naming task but continues to struggle to communicate needs in daily life. What should guide further management?",
  options:["Discharge solely on the basis of the naming score","Repeat the same test indefinitely without further inquiry","Assess real-world communication, participation barriers, and personally meaningful goals","Conclude that the patient's reported difficulty is irrelevant"],
  answer:2,
  explanation:"Structured test performance may not reflect everyday communication. Functional assessment and patient-centered goals help identify barriers and guide intervention."
}

{
  id:"ST271",difficulty:"Easy",topic:"Anatomy",
  question:"Which muscle group is primarily responsible for moving the tongue?",
  options:["Extraocular muscles","Tongue muscles","Intercostal muscles","Middle-ear muscles"],
  answer:1,
  explanation:"Intrinsic and extrinsic tongue muscles shape and move the tongue for speech, swallowing, and other oral functions."
},
{
  id:"ST272",difficulty:"Easy",topic:"Language",
  question:"Which example best demonstrates receptive language?",
  options:["Saying 'hello' to a visitor","Writing a short story","Naming a picture","Following the instruction 'Close the door'"],
  answer:3,
  explanation:"Receptive language involves understanding spoken, signed, or written messages."
},
{
  id:"ST273",difficulty:"Easy",topic:"Speech Sounds",
  question:"Which sound is a voiceless velar stop in English?",
  options:["/k/","/g/","/d/","/v/"],
  answer:0,
  explanation:"The /k/ sound is a voiceless stop produced with the back of the tongue near the velum."
},
{
  id:"ST274",difficulty:"Easy",topic:"Voice",
  question:"What is the main source of typical voiced sound production?",
  options:["The eardrum vibrating","The tongue moving without airflow","Vocal-fold vibration driven by airflow","The lips producing saliva"],
  answer:2,
  explanation:"Typical voiced phonation occurs when airflow from the lungs sets the vocal folds into vibration."
},
{
  id:"ST275",difficulty:"Easy",topic:"Fluency",
  question:"Which response is least helpful when talking with someone who stutters?",
  options:["Maintaining natural eye contact when comfortable","Telling the person to hurry up and speak properly","Listening to the message","Allowing the person time to finish"],
  answer:1,
  explanation:"Pressuring a person to hurry may increase communication stress. A patient, respectful conversational style is preferable."
},
{
  id:"ST276",difficulty:"Easy",topic:"Language Development",
  question:"Which behavior is an example of joint attention?",
  options:["Looking away from every shared activity","Repeating a sound without a social partner","Sorting objects alone without sharing attention","Pointing at a plane and looking toward a caregiver to share interest"],
  answer:3,
  explanation:"Joint attention involves coordinating attention between another person and an object or event."
},
{
  id:"ST277",difficulty:"Easy",topic:"Hearing",
  question:"What does a hearing screening primarily determine?",
  options:["Whether further hearing evaluation may be needed","The exact neurological cause of hearing loss","A complete diagnosis of every auditory disorder","The severity of a language disorder"],
  answer:0,
  explanation:"A screening identifies possible hearing concerns. A failed screen generally warrants appropriate follow-up, not an automatic diagnosis."
},
{
  id:"ST278",difficulty:"Easy",topic:"AAC",
  question:"Which is an example of aided AAC?",
  options:["A natural facial expression","A head nod","A picture communication board","An unaided hand gesture"],
  answer:2,
  explanation:"Aided AAC uses an external tool, such as a communication board, book, or speech-generating device."
},
{
  id:"ST279",difficulty:"Easy",topic:"Swallowing",
  question:"Which professional may collaborate with a speech-language pathologist when a patient has complex swallowing difficulties?",
  options:["Travel agent","Physician","Architect","Driving instructor"],
  answer:1,
  explanation:"Physicians and other relevant healthcare professionals may collaborate in diagnosing underlying conditions and coordinating dysphagia management."
},
{
  id:"ST280",difficulty:"Easy",topic:"Clinical Practice",
  question:"What is an appropriate response if a patient reports pain during an assessment activity?",
  options:["Continue regardless of the pain","Tell the patient that pain is imaginary","Ignore the report and change nothing","Pause or modify the activity and assess whether medical review is needed"],
  answer:3,
  explanation:"Patient comfort and safety matter. The clinician should respond appropriately to pain and seek medical input when indicated."
},
{
  id:"ST281",difficulty:"Easy",topic:"Articulation",
  question:"Which sound is a voiced labiodental fricative?",
  options:["/v/","/f/","/p/","/t/"],
  answer:0,
  explanation:"The /v/ sound is produced with airflow between the lower lip and upper teeth, accompanied by vocal-fold vibration."
},
{
  id:"ST282",difficulty:"Easy",topic:"Language",
  question:"Which language domain concerns the rules for forming meaningful word parts, such as plural endings?",
  options:["Prosody","Resonance","Morphology","Respiration"],
  answer:2,
  explanation:"Morphology concerns meaningful word parts, including prefixes, suffixes, tense markers, and plural markers."
},
{
  id:"ST283",difficulty:"Easy",topic:"Voice",
  question:"What does hoarseness generally describe?",
  options:["Difficulty understanding sentences","A rough, strained, or otherwise altered voice quality","A complete loss of reading ability","Difficulty identifying colors"],
  answer:1,
  explanation:"Hoarseness is a general description of altered voice quality and may have several causes."
},
{
  id:"ST284",difficulty:"Easy",topic:"Speech Anatomy",
  question:"Which structure is commonly called the voice box?",
  options:["Pharynx","Esophagus","Hard palate","Larynx"],
  answer:3,
  explanation:"The larynx contains the vocal folds and contributes to phonation and airway protection."
},
{
  id:"ST285",difficulty:"Easy",topic:"Clinical Documentation",
  question:"Which statement is most suitable for an objective progress note?",
  options:["The client answered 7 of 10 comprehension questions correctly","The client was terrible at listening","The client did not try at all","The client will definitely recover next week"],
  answer:0,
  explanation:"Recording observable performance and measurable outcomes supports clear and defensible clinical documentation."
},
{
  id:"ST286",difficulty:"Easy",topic:"Phonology",
  question:"Which pair differs by the initial consonant while the remaining sounds are the same?",
  options:["Cat and cats","Book and books","Fan and van","Go and going"],
  answer:2,
  explanation:"Fan and van differ in the initial phoneme /f/ versus /v/, making them a minimal pair in English."
},
{
  id:"ST287",difficulty:"Easy",topic:"Aphasia",
  question:"Which event commonly causes acquired aphasia?",
  options:["A routine change in bedtime","A stroke affecting language networks","A temporary dislike of reading","A minor change in room lighting"],
  answer:1,
  explanation:"Stroke is a common cause of acquired aphasia, although traumatic brain injury, tumors, and other neurological conditions can also cause it."
},
{
  id:"ST288",difficulty:"Easy",topic:"Therapy Planning",
  question:"Why should a therapist explain the purpose of a therapy activity?",
  options:["To guarantee immediate success","To avoid obtaining patient feedback","To make the session longer without benefit","To help the patient understand and participate in treatment"],
  answer:3,
  explanation:"Clear explanations support engagement, shared decision-making, and understanding of how activities relate to communication goals."
},
{
  id:"ST289",difficulty:"Easy",topic:"Dysarthria",
  question:"Which description best fits dysarthria?",
  options:["A motor speech disorder involving impaired control or execution of speech movements","A disorder limited to written spelling","A condition that always eliminates language comprehension","A disorder of the outer ear only"],
  answer:0,
  explanation:"Dysarthria results from impaired neuromuscular control of speech and can affect articulation, phonation, resonance, respiration, or prosody."
},
{
  id:"ST290",difficulty:"Easy",topic:"Autism and Communication",
  question:"What is an appropriate principle when communicating with an autistic person?",
  options:["Assume all autistic people have identical needs","Require eye contact before responding","Respect individual communication preferences and provide suitable supports","Ignore all nonspoken communication"],
  answer:2,
  explanation:"Communication should be individualized, respectful, and accessible, recognizing that autistic people have different strengths and support needs."
},

{
  id:"ST291",difficulty:"Moderate",topic:"Language Assessment",
  question:"A child uses age-appropriate vocabulary but frequently produces grammatically incomplete sentences. Which area should be examined closely?",
  options:["Voice quality only","Morphology and syntax","Hearing thresholds only","Swallowing reflexes only"],
  answer:1,
  explanation:"Morphology and syntax concern grammatical markers and sentence structure. Assessment should also consider language exposure and performance across contexts."
},
{
  id:"ST292",difficulty:"Moderate",topic:"Phonology",
  question:"A child says 'doe' for 'go'. Which error pattern is most consistent with replacing a velar sound with an alveolar sound?",
  options:["Stopping","Gliding","Final consonant deletion","Velar fronting"],
  answer:3,
  explanation:"Velar fronting involves replacing a sound produced toward the back of the mouth, such as /g/, with a sound produced farther forward."
},
{
  id:"ST293",difficulty:"Moderate",topic:"Aphasia",
  question:"A patient understands simple conversation but struggles with long, syntactically complex instructions. What should the clinician consider?",
  options:["Sentence complexity and processing demands during receptive-language assessment","A definitive diagnosis based only on one failed instruction","A primary voice disorder without further evaluation","An assumption that the patient is deliberately refusing"],
  answer:0,
  explanation:"Comprehension may vary with syntactic complexity, working-memory demands, attention, and context. Assessment should examine these factors systematically."
},
{
  id:"ST294",difficulty:"Moderate",topic:"Voice",
  question:"Why is laryngeal visualization important for selected patients with persistent voice symptoms?",
  options:["It directly measures receptive vocabulary","It determines reading comprehension","It helps identify laryngeal structures and possible pathology","It measures hearing thresholds"],
  answer:2,
  explanation:"Laryngeal visualization can help identify structural or functional abnormalities that cannot be diagnosed reliably from listening to the voice alone."
},
{
  id:"ST295",difficulty:"Moderate",topic:"Fluency",
  question:"A child who stutters shows facial tension and avoids certain words. What should an assessment include?",
  options:["Only a single reading passage","Observable disfluencies, tension, avoidance, impact, and the child's perspective","Only a hearing screen","Only a vocabulary test"],
  answer:1,
  explanation:"A comprehensive fluency assessment examines observable features and the emotional, behavioral, and participation effects of stuttering."
},
{
  id:"ST296",difficulty:"Moderate",topic:"Dysarthria",
  question:"A patient has imprecise consonants and reduced speech intelligibility after a neurological event. What should guide intervention selection?",
  options:["A standard exercise routine regardless of presentation","Only the patient's age","A prediction based solely on the diagnosis label","The specific speech deficits, functional impact, medical status, and goals"],
  answer:3,
  explanation:"Intervention should reflect the individual's motor-speech profile, functional needs, underlying condition, and response to treatment."
},
{
  id:"ST297",difficulty:"Moderate",topic:"Dysphagia",
  question:"A patient with suspected dysphagia has recurrent chest infections and no obvious coughing during meals. What is an appropriate consideration?",
  options:["Possible swallowing impairment, including silent aspiration, requiring clinical review","Aspiration is excluded because there is no cough","The patient should independently thicken every drink","Swallowing assessment is unnecessary"],
  answer:0,
  explanation:"Some patients aspirate without an overt cough. Recurrent chest infections and other clinical factors may warrant medical and swallowing evaluation."
},
{
  id:"ST298",difficulty:"Moderate",topic:"AAC",
  question:"A child has a communication board but rarely uses it outside therapy. Which intervention is most appropriate?",
  options:["Remove the board until spontaneous use appears","Ask the child to memorize every symbol before use","Train communication partners and integrate the board into meaningful routines","Limit access to scheduled therapy sessions"],
  answer:2,
  explanation:"Consistent availability, partner modeling, relevant vocabulary, and opportunities to communicate across settings can support AAC use."
},
{
  id:"ST299",difficulty:"Moderate",topic:"Pragmatics",
  question:"A student gives lengthy answers that do not address the question asked. Which skill may need further assessment?",
  options:["Laryngeal closure","Topic relevance and conversational discourse organization","Oral sensory thresholds only","Pure-tone audiometry alone"],
  answer:1,
  explanation:"Relevant responses, topic maintenance, concise expression, and discourse organization are important aspects of pragmatic communication."
},
{
  id:"ST300",difficulty:"Moderate",topic:"Assessment Statistics",
  question:"What does inter-rater reliability refer to?",
  options:["Whether treatment improves language","Whether a test is inexpensive","Whether a patient enjoys the task","The degree of agreement between different raters using a measure"],
  answer:3,
  explanation:"Inter-rater reliability describes consistency or agreement between different raters evaluating the same material or performance."
},
{
  id:"ST301",difficulty:"Moderate",topic:"Speech Sound Disorders",
  question:"A child produces a target consonant in single words but not in spontaneous conversation. What does this most clearly indicate?",
  options:["Generalization to connected speech remains limited","The sound is necessarily mastered in every context","The child must have a voice disorder","The child cannot understand language"],
  answer:0,
  explanation:"Successful production in single words does not guarantee carryover. Connected-speech practice and functional monitoring may be needed."
},
{
  id:"ST302",difficulty:"Moderate",topic:"Language Development",
  question:"Why should a clinician consider a child's exposure to different languages when evaluating language skills?",
  options:["Language exposure makes assessment unnecessary","Every multilingual child has a disorder","Exposure and proficiency can differ across languages and affect observed performance","The home language should always be excluded"],
  answer:2,
  explanation:"Language exposure, opportunities to use each language, and proficiency should be considered when distinguishing typical multilingual development from disorder."
},
{
  id:"ST303",difficulty:"Moderate",topic:"Clinical Ethics",
  question:"A patient requests a copy of their own clinical report. What should the clinician do?",
  options:["Refuse all requests automatically","Follow applicable access procedures, privacy requirements, and organizational policy","Post the report publicly","Send it to an unrelated person instead"],
  answer:1,
  explanation:"Patient access to records is governed by applicable law and organizational processes. The clinician should follow the correct procedure and protect confidentiality."
},
{
  id:"ST304",difficulty:"Moderate",topic:"Voice",
  question:"Which behavior may contribute to vocal strain when performed repeatedly?",
  options:["Using a comfortable conversational voice","Taking appropriate voice breaks","Seeking assessment for persistent hoarseness","Frequent forceful shouting over loud background noise"],
  answer:3,
  explanation:"Repeated forceful shouting can increase vocal load and contribute to voice symptoms. Persistent symptoms should be assessed rather than assumed to have one cause."
},
{
  id:"ST305",difficulty:"Moderate",topic:"Motor Speech",
  question:"Which feature can occur in both apraxia of speech and dysarthria, making differential assessment important?",
  options:["Reduced speech intelligibility","An identical underlying mechanism in every case","A guaranteed absence of neurological involvement","A complete inability to communicate through any method"],
  answer:0,
  explanation:"Both disorders can reduce intelligibility, but apraxia primarily involves motor planning/programming while dysarthria involves neuromuscular execution or control."
},
{
  id:"ST306",difficulty:"Moderate",topic:"Dysphagia",
  question:"Why should diet recommendations for dysphagia be individualized?",
  options:["Every patient has identical swallowing physiology","Diet changes always eliminate aspiration","Swallowing physiology, nutritional needs, risks, preferences, and context vary between patients","Texture recommendations do not affect patient experience"],
  answer:2,
  explanation:"Management should be based on assessment findings and the person's medical status, nutrition, hydration, preferences, and quality of life."
},
{
  id:"ST307",difficulty:"Moderate",topic:"Phonological Awareness",
  question:"Which task specifically assesses blending phonemes?",
  options:["Naming the color of a pictured object","Combining /s/, /u/, and /n/ to say 'sun'","Explaining the meaning of 'sun'","Counting the letters in 'sun'"],
  answer:1,
  explanation:"Phoneme blending requires combining individual speech sounds to form a word."
},
{
  id:"ST308",difficulty:"Moderate",topic:"Clinical Outcomes",
  question:"A patient meets a structured therapy goal but reports no improvement in everyday communication. What should the clinician do?",
  options:["Ignore the patient's report","End all treatment automatically","Assume the patient misunderstood the goal","Reassess functional outcomes and consider revising goals or treatment"],
  answer:3,
  explanation:"Structured task success may not transfer to daily life. Treatment should be reviewed in relation to meaningful functional outcomes and patient priorities."
},
{
  id:"ST309",difficulty:"Moderate",topic:"Hearing and Communication",
  question:"A child frequently asks for repetition in a noisy classroom. Which response is most appropriate?",
  options:["Consider hearing assessment and evaluate the classroom listening environment","Assume the child is inattentive without investigation","Recommend avoiding all classroom interaction","Diagnose aphasia based on the behavior alone"],
  answer:0,
  explanation:"Difficulty in noise may relate to hearing, listening demands, language, attention, or environmental acoustics. Appropriate assessment can help clarify contributing factors."
},
{
  id:"ST310",difficulty:"Moderate",topic:"Autism and Communication",
  question:"A child uses repeated phrases and a communication device. What is the best way to assess communication competence?",
  options:["Count only spontaneous spoken sentences","Ignore messages produced with the device","Consider all meaningful communication modes and their functions across contexts","Require the child to stop using repeated phrases before assessment"],
  answer:2,
  explanation:"Communication assessment should recognize spoken language, AAC, gestures, and other meaningful forms while considering communicative function and context."
},

{
  id:"ST311",difficulty:"Hard",topic:"Differential Diagnosis",
  question:"A child has inconsistent consonant and vowel errors, disrupted transitions, and atypical lexical stress. What is the most appropriate next step?",
  options:["Diagnose a phonological disorder based on one feature","Conduct a comprehensive motor-speech and differential assessment","Assume hearing loss explains every feature","Begin treatment without collecting a speech sample"],
  answer:1,
  explanation:"The combination raises concern for a motor planning/programming disorder, but assessment must consider the full profile, developmental history, and alternative explanations."
},
{
  id:"ST312",difficulty:"Hard",topic:"Aphasia",
  question:"A person with aphasia performs well on naming pictures but struggles to retrieve words in conversation. What is a likely reason to assess further?",
  options:["Picture naming always measures every language skill","Conversation cannot reveal language impairment","The patient necessarily has dysarthria","Structured tasks and connected discourse place different demands on language retrieval"],
  answer:3,
  explanation:"Structured naming and conversation differ in context, discourse demands, self-monitoring, and lexical access. Functional language assessment may reveal difficulties missed by isolated tasks."
},
{
  id:"ST313",difficulty:"Hard",topic:"Dysphagia",
  question:"A VFSS shows reduced hyolaryngeal excursion and substantial pharyngeal residue. Which interpretation is most appropriate?",
  options:["These findings may affect swallowing efficiency and airway protection; management should follow the complete assessment","They prove that every oral consistency is unsafe","They establish a single cause without further information","They mean swallowing function is normal"],
  answer:0,
  explanation:"Reduced hyolaryngeal excursion and residue may have implications for bolus clearance and airway protection. Interpretation depends on the complete instrumental study and clinical context."
},
{
  id:"ST314",difficulty:"Hard",topic:"Voice Assessment",
  question:"A patient has normal-sounding voice during a short assessment but reports progressive hoarseness after prolonged speaking. What is a reasonable approach?",
  options:["Dismiss the concern because the brief sample sounds normal","Diagnose a voice disorder solely from the report","Investigate voice demands, fatigue patterns, case history, and need for medical assessment","Recommend maximal vocal effort without evaluation"],
  answer:2,
  explanation:"Voice symptoms can vary with duration and context. Case history, functional voice sampling, and appropriate medical assessment may be necessary."
},
{
  id:"ST315",difficulty:"Hard",topic:"Fluency",
  question:"A teenager reports severe stuttering-related anxiety but demonstrates few stutters in a brief clinic sample. What should guide the assessment?",
  options:["Only the count of stuttering events in that sample","Multiple sources, including self-report, avoidance, participation, communication situations, and observed speech","A decision to discharge because the sample is fluent","A requirement that anxiety be ignored until stuttering increases"],
  answer:1,
  explanation:"A brief sample may not reflect the person's experience across settings. A comprehensive assessment includes the impact of stuttering, avoidance, and the person's own goals."
},
{
  id:"ST316",difficulty:"Hard",topic:"Evidence-Based Practice",
  question:"A clinician finds a treatment study with a large effect but serious methodological limitations. What is the best response?",
  options:["Adopt the treatment because the effect is large","Ignore methodological quality if the treatment is popular","Assume every participant will achieve the same result","Critically appraise the methods, uncertainty, applicability, and balance of benefits and risks"],
  answer:3,
  explanation:"Large reported effects do not remove the need to evaluate bias, sample size, design, precision, relevance, and patient-specific considerations."
},
{
  id:"ST317",difficulty:"Hard",topic:"Assessment Statistics",
  question:"A diagnostic measure has high sensitivity but low specificity. Which interpretation is most accurate?",
  options:["It may identify many people with the condition but also produce more false positives","It necessarily produces no false negatives","It confirms every positive result","It has perfect agreement between raters"],
  answer:0,
  explanation:"High sensitivity supports identifying true cases, while low specificity means more people without the condition may screen or test positive."
},
{
  id:"ST318",difficulty:"Hard",topic:"Motor Speech",
  question:"A patient with dysarthria has reduced intelligibility that worsens as utterances become longer. Which assessment approach is most useful?",
  options:["Assess only isolated vowels","Use only a written spelling test","Compare performance across speech tasks and examine respiratory, phonatory, articulatory, and prosodic demands","Assume the impairment is exclusively linguistic"],
  answer:2,
  explanation:"Speech demands change with utterance length and complexity. A comprehensive motor-speech assessment can identify subsystem limitations and guide individualized intervention."
},
{
  id:"ST319",difficulty:"Hard",topic:"AAC Access",
  question:"A communication-device user has accurate symbol selection initially but increasing errors during longer sessions. What should the clinician investigate?",
  options:["Whether the user should lose access to the device","Fatigue, positioning, access settings, visual demands, and session length","Whether communication should be limited to speech","Whether the person understands nothing at all"],
  answer:1,
  explanation:"Performance changes may relate to fatigue, motor access, vision, positioning, or interface demands. Assessment should identify barriers and optimize reliable access."
},
{
  id:"ST320",difficulty:"Hard",topic:"Clinical Reasoning",
  question:"A patient with a known neurological condition develops sudden new confusion and slurred speech. What is the priority?",
  options:["Begin routine language exercises","Arrange an appointment in several months","Assume the symptoms are part of the established condition","Seek urgent emergency medical evaluation"],
  answer:3,
  explanation:"Sudden new neurological symptoms can indicate a medical emergency. Prompt emergency evaluation takes priority over routine therapy."
},
{
  id:"ST321",difficulty:"Hard",topic:"Language Assessment",
  question:"A multilingual child performs poorly on an English grammar test but communicates effectively in the home language. What should the clinician do?",
  options:["Assess language history and skills across languages using culturally and linguistically appropriate methods","Diagnose a disorder based on the English score alone","Tell the family to stop using the home language","Assume that competence in one language excludes every possible disorder"],
  answer:0,
  explanation:"Language differences and uneven exposure can affect performance on monolingual tests. Assessment should consider the child's full linguistic profile and use appropriate procedures."
},
{
  id:"ST322",difficulty:"Hard",topic:"Phonological Intervention",
  question:"A child has several persistent phonological patterns and poor generalization after isolated sound practice. Which treatment-planning step is most appropriate?",
  options:["Repeat the same drills indefinitely without measurement","Select a more difficult target randomly","Reassess the error system and consider a pattern-based approach with monitored outcomes","Discontinue all speech assessment"],
  answer:2,
  explanation:"Limited generalization may indicate a need to reassess targets and intervention approach. Pattern-based treatment may be appropriate depending on the child's error system and needs."
},
{
  id:"ST323",difficulty:"Hard",topic:"Neurogenic Communication",
  question:"After brain injury, a patient speaks in grammatically complete sentences but has difficulty planning, monitoring, and repairing conversations. Which area should be assessed?",
  options:["Articulation placement alone","Cognitive-communication and executive-function demands in everyday interaction","Laryngeal anatomy alone","Swallowing reflexes only"],
  answer:1,
  explanation:"Conversation relies on planning, monitoring, attention, memory, and self-repair. These cognitive-communication skills may be affected after acquired brain injury."
},
{
  id:"ST324",difficulty:"Hard",topic:"Voice Therapy",
  question:"A patient with a diagnosed voice disorder reports pain when phonating. What should the clinician prioritize?",
  options:["Intensive vocal loading to build endurance immediately","Ignore pain if the voice sounds clear","Prescribe identical exercises without reviewing the diagnosis","Review symptoms and medical guidance, modify activity, and coordinate further evaluation when indicated"],
  answer:3,
  explanation:"Pain during phonation warrants careful consideration. Intervention should be guided by diagnosis, medical recommendations, symptom response, and patient safety."
},
{
  id:"ST325",difficulty:"Hard",topic:"AAC Outcomes",
  question:"A child uses AAC to request objects but rarely comments, rejects, or asks questions. Which plan may broaden communication?",
  options:["Model varied communicative functions and make relevant vocabulary available throughout daily routines","Restrict the system to requesting only","Remove all social communication opportunities","Require spoken words before accepting AAC messages"],
  answer:0,
  explanation:"AAC intervention should support a broad range of functions, including commenting, rejecting, asking questions, sharing information, and social interaction."
},
{
  id:"ST326",difficulty:"Hard",topic:"Clinical Measurement",
  question:"A patient improves on a repeated assessment after extensive practice with the same items. Which factor should be considered when interpreting the result?",
  options:["The score automatically proves treatment effectiveness","Repeated testing cannot affect performance","Practice effects may contribute to the observed score change","The assessment is necessarily measuring hearing"],
  answer:2,
  explanation:"Practice effects may improve scores independently of the treatment effect. Alternate forms, functional measures, and appropriate study or monitoring designs can help interpretation."
},
{
  id:"ST327",difficulty:"Hard",topic:"Resonance",
  question:"A patient has hypernasality on vowels and nasal emission on oral pressure consonants. What should the clinician consider?",
  options:["A diagnosis of aphasia from resonance alone","Assessment of velopharyngeal function and possible structural or neuromotor contributors","A primary vocabulary disorder only","A definitive hearing-loss diagnosis"],
  answer:1,
  explanation:"Hypernasality and nasal emission may reflect velopharyngeal dysfunction. Assessment and referral should help distinguish structural, neuromotor, and learned causes."
},
{
  id:"ST328",difficulty:"Hard",topic:"Research Literacy",
  question:"A study reports a treatment benefit with a confidence interval that includes no effect. What is the most appropriate interpretation?",
  options:["The treatment has definitively been proven effective","The treatment has definitively been proven harmful","The result proves that every participant was unchanged","The estimate is uncertain and the data do not rule out no effect at the stated confidence level"],
  answer:3,
  explanation:"A confidence interval including the null value indicates that no effect remains compatible with the data at that confidence level. The estimate and its uncertainty should be considered."
},
{
  id:"ST329",difficulty:"Hard",topic:"Ethics and Referral",
  question:"A clinician identifies needs that are outside their competence. What is the most appropriate action?",
  options:["Seek supervision or consultation and arrange appropriate referral while supporting continuity of care","Provide a definitive diagnosis regardless of training","Avoid documenting the concern","Continue treatment without reviewing the patient's needs"],
  answer:0,
  explanation:"Practitioners should work within their competence, seek appropriate consultation, and refer when necessary while following professional and local requirements."
},
{
  id:"ST330",difficulty:"Hard",topic:"Functional Outcomes",
  question:"A patient demonstrates improved performance on a structured speech task but reports no change in work communication. Which next step is most useful?",
  options:["Discharge solely because the structured score improved","Assume work communication is unrelated to speech therapy","Examine workplace communication demands and develop relevant functional goals with the patient","Repeat the identical task without discussing daily needs"],
  answer:2,
  explanation:"Improvement on structured tasks may not generalize to the workplace. Functional assessment and patient-centered planning help target real-world communication barriers."
}

{
  id:"ST331",difficulty:"Easy",topic:"Anatomy",
  question:"Which structure separates the oral cavity from the nasal cavity?",
  options:["Hard palate","Epiglottis","Vocal folds","Thyroid cartilage"],
  answer:0,
  explanation:"The hard palate forms the bony anterior roof of the mouth and separates the oral and nasal cavities."
},
{
  id:"ST332",difficulty:"Easy",topic:"Speech Anatomy",
  question:"Which cranial nerve primarily controls the muscles of facial expression?",
  options:["Trigeminal nerve (V)","Facial nerve (VII)","Vagus nerve (X)","Hypoglossal nerve (XII)"],
  answer:1,
  explanation:"The facial nerve supplies the muscles of facial expression, which contribute to lip movements during speech."
},
{
  id:"ST333",difficulty:"Easy",topic:"Language Development",
  question:"Which behavior is a typical example of joint attention in an infant?",
  options:["Repeating a syllable without looking at anyone","Crying when hungry","Looking where an adult points and then looking back at the adult","Producing an isolated reflexive sneeze"],
  answer:2,
  explanation:"Joint attention involves coordinating attention between another person and an object or event."
},
{
  id:"ST334",difficulty:"Easy",topic:"Articulation",
  question:"Which sound is typically classified as a bilabial stop?",
  options:["/s/","/f/","/k/","/p/"],
  answer:3,
  explanation:"The /p/ sound is produced by closing both lips and releasing the built-up air pressure."
},
{
  id:"ST335",difficulty:"Easy",topic:"Voice",
  question:"What is the primary function of the vocal folds during voiced speech?",
  options:["They vibrate as air passes through the larynx","They move the tongue tip","They close the nasal cavity permanently","They produce saliva"],
  answer:0,
  explanation:"Vocal-fold vibration creates the periodic sound source used for voiced speech."
},
{
  id:"ST336",difficulty:"Easy",topic:"Fluency",
  question:"Which is an example of a typical stuttering-like disfluency?",
  options:["A single, fluent sentence","Repeating a sound, such as 'b-b-ball'","A normal breath before speaking","Changing a topic during conversation"],
  answer:1,
  explanation:"Sound or syllable repetitions can be stuttering-like disfluencies, especially when frequent or accompanied by tension."
},
{
  id:"ST337",difficulty:"Easy",topic:"Aphasia",
  question:"Aphasia is most directly associated with impairment in which area?",
  options:["Peripheral hearing sensitivity only","Balance and coordination only","Language processing","Visual acuity only"],
  answer:2,
  explanation:"Aphasia is an acquired language disorder that can affect speaking, understanding, reading, and writing."
},
{
  id:"ST338",difficulty:"Easy",topic:"Hearing",
  question:"Which unit is commonly used to express the frequency of a sound?",
  options:["Decibel","Milliliter","Second","Hertz"],
  answer:3,
  explanation:"Hertz (Hz) measures frequency, or the number of sound-wave cycles per second."
},
{
  id:"ST339",difficulty:"Easy",topic:"Assessment",
  question:"What is the main purpose of obtaining a case history before a speech-language assessment?",
  options:["To understand the client's background, concerns, and relevant history","To replace all direct assessment","To determine a diagnosis without further evidence","To avoid speaking with caregivers"],
  answer:0,
  explanation:"A case history provides contextual information that helps guide assessment, interpretation, and planning."
},
{
  id:"ST340",difficulty:"Easy",topic:"AAC",
  question:"What does AAC stand for in speech-language pathology?",
  options:["Auditory Assessment Criteria","Augmentative and Alternative Communication","Automatic Articulation Control","Applied Acoustic Calibration"],
  answer:1,
  explanation:"AAC includes methods and tools that supplement or replace spoken communication."
},
{
  id:"ST341",difficulty:"Easy",topic:"Dysphagia",
  question:"Which professional is commonly responsible for evaluating swallowing function within their scope of practice?",
  options:["Optometrist","Dermatologist","Speech-language pathologist with dysphagia training","Orthodontic laboratory technician"],
  answer:2,
  explanation:"Speech-language pathologists with appropriate training assess swallowing and recommend management within their professional scope."
},
{
  id:"ST342",difficulty:"Easy",topic:"Voice Anatomy",
  question:"Where are the vocal folds located?",
  options:["In the stomach","In the middle ear","In the nasal cavity","In the larynx"],
  answer:3,
  explanation:"The vocal folds are located inside the larynx, also known as the voice box."
},
{
  id:"ST343",difficulty:"Easy",topic:"Phonology",
  question:"A child says 'tat' for 'cat.' Which phonological pattern does this most likely illustrate?",
  options:["Fronting","Backing","Gliding","Final consonant deletion"],
  answer:0,
  explanation:"Fronting occurs when a sound made farther back in the mouth, such as /k/, is replaced by a more forward sound, such as /t/."
},
{
  id:"ST344",difficulty:"Easy",topic:"Receptive Language",
  question:"Which task best assesses a child's understanding of a simple spoken instruction?",
  options:["Asking the child to repeat a word","Asking the child to give a named object","Asking the child to draw from memory","Asking the child to sustain a vowel"],
  answer:1,
  explanation:"Following an instruction involving a named object provides evidence about understanding spoken language."
},
{
  id:"ST345",difficulty:"Easy",topic:"Clinical Ethics",
  question:"What should a clinician generally do before beginning a non-emergency assessment?",
  options:["Promise a specific treatment outcome","Share the client's results publicly","Explain the procedure and obtain appropriate consent","Begin without explaining the purpose"],
  answer:2,
  explanation:"Informed consent requires appropriate explanation and voluntary agreement, consistent with applicable law and policy."
},
{
  id:"ST346",difficulty:"Easy",topic:"Motor Speech",
  question:"Dysarthria primarily involves impaired speech caused by difficulties with what?",
  options:["Word meaning alone","Reading comprehension alone","Hearing thresholds alone","Neuromuscular control of speech"],
  answer:3,
  explanation:"Dysarthria results from neurological impairment affecting the strength, speed, range, coordination, or precision of speech movements."
},
{
  id:"ST347",difficulty:"Easy",topic:"Autism",
  question:"Which approach best supports communication with an autistic child during assessment?",
  options:["Adapt the environment and communication demands to the child's needs","Require eye contact before every response","Ignore all nonspoken communication","Use only rapid verbal questioning"],
  answer:0,
  explanation:"Individualized accommodations can reduce barriers and allow the clinician to obtain a more representative picture of communication."
},
{
  id:"ST348",difficulty:"Easy",topic:"Voice Assessment",
  question:"Which parameter describes how high or low a person's voice sounds?",
  options:["Loudness","Pitch","Resonance","Articulation rate"],
  answer:1,
  explanation:"Pitch is the perceptual correlate of fundamental frequency and describes how high or low a voice sounds."
},
{
  id:"ST349",difficulty:"Easy",topic:"Language",
  question:"Which of the following is an example of expressive language?",
  options:["Recognizing a familiar voice","Following the instruction 'sit down'","Telling someone what happened at school","Pointing to a picture after hearing its name"],
  answer:2,
  explanation:"Expressive language involves communicating messages through speech, signs, writing, or other language forms."
},
{
  id:"ST350",difficulty:"Easy",topic:"Clinical Documentation",
  question:"Which entry is most appropriate for a clinical progress note?",
  options:["The client was lazy today","The session was pointless","The client will definitely recover next week","The client produced /s/ correctly in 8 of 10 structured trials with verbal cues"],
  answer:3,
  explanation:"Objective documentation records observable performance, measurable outcomes, and relevant support provided."
},
{
  id:"ST351",difficulty:"Moderate",topic:"Aphasia",
  question:"A client speaks fluently with normal phrase length but produces many empty phrases and has poor auditory comprehension. Which aphasia profile is most consistent with these findings?",
  options:["Broca's aphasia","Wernicke's aphasia","Global aphasia","Transcortical motor aphasia"],
  answer:1,
  explanation:"Wernicke's aphasia commonly features fluent speech with impaired comprehension and reduced meaningful content. Diagnosis requires a comprehensive assessment."
},
{
  id:"ST352",difficulty:"Moderate",topic:"Motor Speech",
  question:"Which finding most strongly favors apraxia of speech over dysarthria?",
  options:["Consistent weakness of the lips","Persistently breathy phonation","Inconsistent speech sound errors with articulatory groping","Reduced respiratory support alone"],
  answer:2,
  explanation:"Apraxia of speech is a motor-planning/programming disorder often associated with inconsistent errors, disrupted transitions, and articulatory groping."
},
{
  id:"ST353",difficulty:"Moderate",topic:"Dysphagia",
  question:"A patient coughs repeatedly during oral intake after a recent stroke. What is the most appropriate next step?",
  options:["Continue all food and liquid without assessment","Assume the cough proves aspiration","Prescribe thickened liquids without evaluation","Arrange prompt swallowing assessment and follow local safety procedures"],
  answer:3,
  explanation:"Coughing may indicate swallowing difficulty but does not prove or exclude aspiration. Prompt assessment and appropriate precautions are needed."
},
{
  id:"ST354",difficulty:"Moderate",topic:"Phonological Disorders",
  question:"A child produces 'do' for 'go' and 'den' for 'gen' in a pattern of replacing velar sounds with alveolar sounds. Which process is illustrated?",
  options:["Fronting","Stopping","Deaffrication","Cluster reduction"],
  answer:0,
  explanation:"Fronting replaces a sound made farther back in the mouth with one made farther forward, such as /g/ becoming /d/."
},
{
  id:"ST355",difficulty:"Moderate",topic:"Voice Disorders",
  question:"Which voice quality is most characteristically associated with excessive air escaping through the glottis during phonation?",
  options:["Pressed voice","Breathy voice","Strained voice without air leakage","Typical modal voice"],
  answer:1,
  explanation:"Breathy voice quality is associated with audible air escape during phonation, although the underlying cause requires evaluation."
},
{
  id:"ST356",difficulty:"Moderate",topic:"Language Assessment",
  question:"A standardized language test gives a score substantially below the normative mean. What is the best interpretation?",
  options:["The score alone establishes every aspect of diagnosis","The child must have an intellectual disability","The score is evidence to interpret alongside history, observation, and other assessment findings","The child cannot benefit from intervention"],
  answer:2,
  explanation:"Standardized scores contribute useful evidence, but diagnosis and treatment planning require multiple sources of information and consideration of test limitations."
},
{
  id:"ST357",difficulty:"Moderate",topic:"Fluency",
  question:"Which response is generally most appropriate when a child stutters during conversation?",
  options:["Finish every sentence for the child","Tell the child to speak correctly","Demand that the child repeat every disfluent word","Maintain natural turn-taking and listen to the message without pressuring the child"],
  answer:3,
  explanation:"A supportive communication environment avoids unnecessary time pressure and prioritizes the speaker's message."
},
{
  id:"ST358",difficulty:"Moderate",topic:"Audiology",
  question:"An air-conduction hearing threshold is elevated while bone-conduction thresholds are within expected limits, producing an air-bone gap. Which type of hearing loss does this pattern suggest?",
  options:["Conductive hearing loss","Sensorineural hearing loss","Central language disorder","Isolated expressive language disorder"],
  answer:0,
  explanation:"An air-bone gap with relatively preserved bone-conduction thresholds suggests a conductive component, subject to complete audiological interpretation."
},
{
  id:"ST359",difficulty:"Moderate",topic:"AAC",
  question:"A nonspeaking client uses a communication board. What is the best way for a communication partner to support language development?",
  options:["Keep the board out of reach to encourage speech","Model meaningful selections on the board while speaking naturally","Require accurate pointing before responding to any message","Use the board only during formal testing"],
  answer:1,
  explanation:"Aided language modeling demonstrates how symbols can be used meaningfully without requiring the client to imitate every model."
},
{
  id:"ST360",difficulty:"Moderate",topic:"Autism",
  question:"Which goal is most consistent with a functional, individualized communication intervention for an autistic child?",
  options:["Eliminate harmless repetitive movements regardless of function","Require eye contact in every conversation","Teach the child an effective way to request a break using an accessible communication method","Prevent the child from using visual supports"],
  answer:2,
  explanation:"Functional goals should increase meaningful communication and autonomy while respecting individual needs and communication preferences."
},
{
  id:"ST361",difficulty:"Moderate",topic:"Cleft Palate",
  question:"Which speech feature is commonly associated with velopharyngeal dysfunction?",
  options:["Consistently excessive oral pressure with no nasal air escape","A reduced ability to understand spoken words only","Hearing loss in every case","Hypernasality and possible nasal emission on pressure consonants"],
  answer:3,
  explanation:"Incomplete velopharyngeal closure can cause excessive nasal resonance and nasal air emission, particularly on pressure consonants."
},
{
  id:"ST362",difficulty:"Moderate",topic:"Cognitive-Communication",
  question:"After a traumatic brain injury, a client speaks in complete sentences but frequently misses conversational turns and fails to infer implied meaning. Which area should be assessed closely?",
  options:["Pragmatic and cognitive-communication skills","Pure-tone hearing thresholds only","Isolated tongue strength only","Vocal-fold anatomy only"],
  answer:0,
  explanation:"Pragmatic and cognitive-communication assessment may examine inference, topic management, turn-taking, attention, and executive functioning."
},
{
  id:"ST363",difficulty:"Moderate",topic:"Clinical Research",
  question:"In an assessment report, what does sensitivity generally describe?",
  options:["The proportion of healthy individuals correctly identified as negative","The proportion of people with the condition correctly identified as positive","The reliability of repeating the same test score","The average difference between two measurements"],
  answer:1,
  explanation:"Sensitivity is the proportion of people who have the condition and test positive: true positives divided by all people who have the condition."
},
{
  id:"ST364",difficulty:"Moderate",topic:"Voice Therapy",
  question:"Which technique is commonly used in resonant voice therapy to encourage efficient voice production?",
  options:["Repeated shouting at maximum loudness","Prolonged whispering throughout the day","Producing easy, forward-focused voice with reduced unnecessary effort","Holding the breath while speaking"],
  answer:2,
  explanation:"Resonant voice approaches aim to facilitate efficient phonation and oral resonance with reduced vocal effort."
},
{
  id:"ST365",difficulty:"Moderate",topic:"Dysarthria",
  question:"Which combination is particularly suggestive of flaccid dysarthria?",
  options:["Only inconsistent sound errors and groping","Only impaired understanding of word meanings","Only rapid rate with irregular articulatory breakdowns","Weakness, reduced tone, and possibly breathy or hypernasal speech"],
  answer:3,
  explanation:"Flaccid dysarthria is associated with lower motor neuron or peripheral motor involvement and may feature weakness, hypotonia, breathiness, and hypernasality."
},
{
  id:"ST366",difficulty:"Moderate",topic:"Language Development",
  question:"A preschool child uses a few single words but rarely combines them. Which assessment approach is most informative?",
  options:["Combine language sampling, caregiver report, play observation, and appropriate standardized measures","Use articulation testing alone","Measure voice pitch alone","Assess only the child's ability to repeat isolated vowels"],
  answer:0,
  explanation:"Multiple methods provide a broader view of expressive and receptive language, communication in context, and everyday functioning."
},
{
  id:"ST367",difficulty:"Moderate",topic:"Cochlear Implants",
  question:"After cochlear implantation, which factor is especially important when planning auditory rehabilitation?",
  options:["Assuming hearing is immediately typical for all users","Individualized listening goals, device use, and ongoing assessment of auditory access","Avoiding all spoken input until school age","Replacing audiological follow-up with speech testing alone"],
  answer:1,
  explanation:"Rehabilitation should reflect the person's auditory access, device programming and use, communication needs, and progress over time."
},
{
  id:"ST368",difficulty:"Moderate",topic:"Dysphagia",
  question:"Which statement about a bedside clinical swallowing examination is most accurate?",
  options:["It identifies every episode of silent aspiration with certainty","It always replaces instrumental assessment","It helps characterize swallowing and risk but cannot reliably rule out silent aspiration","It determines the exact anatomy of all pharyngeal movements"],
  answer:2,
  explanation:"A clinical examination provides important information, but silent aspiration may occur without observable signs and may require instrumental assessment."
},
{
  id:"ST369",difficulty:"Moderate",topic:"Articulation Therapy",
  question:"A child can produce /r/ correctly in isolation but not in conversation. Which next step is generally appropriate?",
  options:["Return permanently to nonspeech oral exercises","Discontinue treatment because generalization is impossible","Practice only the isolated sound indefinitely","Progress through suitable syllables, words, phrases, and connected speech while monitoring accuracy"],
  answer:3,
  explanation:"Treatment can build from an established production toward increasingly complex linguistic contexts and spontaneous use."
},
{
  id:"ST370",difficulty:"Moderate",topic:"Clinical Ethics",
  question:"A caregiver asks the clinician to disclose another client's diagnosis because the families know each other. What should the clinician do?",
  options:["Protect the other client's confidentiality and decline to disclose the information","Share the diagnosis if the caregiver promises secrecy","Provide the details without the client's name","Discuss the diagnosis in a public waiting area"],
  answer:0,
  explanation:"Confidential clinical information must not be disclosed to an unauthorized person except where a lawful basis or applicable exception permits it."
},
{
  id:"ST371",difficulty:"Hard",topic:"Aphasia",
  question:"A client has fluent speech, relatively preserved auditory comprehension, markedly impaired repetition, and frequent phonemic paraphasias. Which aphasia syndrome is most consistent with this profile?",
  options:["Broca's aphasia","Conduction aphasia","Wernicke's aphasia","Global aphasia"],
  answer:1,
  explanation:"Conduction aphasia classically involves disproportionate repetition impairment with fluent output and relatively better comprehension, although real presentations vary."
},
{
  id:"ST372",difficulty:"Hard",topic:"Motor Speech",
  question:"A speaker demonstrates slow speech, equalized stress, imprecise consonants, and reduced articulatory range. Which dysarthria type is classically associated with this combination?",
  options:["Flaccid dysarthria","Hyperkinetic dysarthria","Hypokinetic dysarthria","Ataxic dysarthria"],
  answer:3,
  explanation:"Ataxic dysarthria commonly features irregular articulatory breakdowns, excess or equal stress, and impaired timing and coordination."
},
{
  id:"ST373",difficulty:"Hard",topic:"Dysphagia",
  question:"A patient with suspected pharyngeal dysphagia has recurrent respiratory complications, but bedside observations are inconclusive. Which assessment can directly visualize swallowing physiology?",
  options:["Videofluoroscopic swallowing study or fiberoptic endoscopic evaluation of swallowing, as clinically appropriate","A conversational language sample alone","A pure-tone screening alone","A sustained-vowel voice test alone"],
  answer:0,
  explanation:"VFSS and FEES are instrumental swallowing assessments that provide complementary information about swallowing physiology and airway protection."
},
{
  id:"ST374",difficulty:"Hard",topic:"Phonological Analysis",
  question:"A child consistently replaces /s/ and /z/ with /t/ and /d/, respectively, across words. Which process best explains the pattern?",
  options:["Velar fronting","Gliding","Stopping","Weak-syllable deletion"],
  answer:2,
  explanation:"Stopping replaces a fricative or affricate with a stop consonant, such as /s/ becoming /t/."
},
{
  id:"ST375",difficulty:"Hard",topic:"Voice Disorders",
  question:"A professional voice user reports persistent hoarseness for several weeks. What is the most appropriate clinical action?",
  options:["Begin high-intensity vocal exercises without examination","Recommend whispering for the entire day as definitive treatment","Assume the cause is muscle tension based only on the symptom","Arrange appropriate medical evaluation of the larynx, with voice assessment as indicated"],
  answer:3,
  explanation:"Persistent dysphonia warrants appropriate laryngeal evaluation. Voice therapy planning should consider medical findings and the individual's presentation."
},
{
  id:"ST376",difficulty:"Hard",topic:"Language Disorders",
  question:"A child performs poorly on a language test administered only in English, although the child regularly uses another language at home. Which interpretation is most defensible?",
  options:["The English score alone cannot distinguish language difference from disorder; assess across languages and contexts using appropriate methods","The result proves a developmental language disorder","Bilingual exposure should be stopped before reassessment","Language assessment is unnecessary because the child uses two languages"],
  answer:0,
  explanation:"Assessment should consider language exposure, proficiency, cultural context, and performance across the child's languages to reduce diagnostic bias."
},
{
  id:"ST377",difficulty:"Hard",topic:"AAC Assessment",
  question:"A client with severe motor impairment understands language but cannot reliably point to symbols. Which AAC assessment consideration is most important?",
  options:["Exclude AAC because direct pointing is not possible","Evaluate alternative access methods, such as eye gaze or switch scanning, and confirm reliability","Require spoken responses for every selection","Choose a device based only on its appearance"],
  answer:1,
  explanation:"AAC selection should consider motor, sensory, linguistic, and environmental factors, including reliable access methods."
},
{
  id:"ST378",difficulty:"Hard",topic:"Clinical Research",
  question:"A screening tool has high sensitivity but modest specificity. What is the most likely implication?",
  options:["It will produce no false negatives or false positives","A negative result always proves the condition is present","It may detect many people who have the condition but also flag some people who do not","It measures inter-rater reliability rather than diagnostic accuracy"],
  answer:2,
  explanation:"High sensitivity supports identifying affected individuals, while modest specificity means a proportion of unaffected individuals may screen positive."
},
{
  id:"ST379",difficulty:"Hard",topic:"Neurogenic Communication",
  question:"A client has difficulty organizing discourse, understanding sarcasm, and adapting messages to listeners after a right-hemisphere stroke. Which impairment is most relevant to investigate?",
  options:["Isolated phonemic discrimination only","Purely peripheral hearing loss","An isolated structural articulation error","Cognitive-communication and pragmatic impairment"],
  answer:3,
  explanation:"Right-hemisphere injury may affect inference, discourse organization, prosody, and pragmatic communication, warranting targeted assessment."
},
{
  id:"ST380",difficulty:"Hard",topic:"Fluency",
  question:"A person who stutters avoids telephone calls and reports substantial anxiety despite relatively few observable disfluencies in clinic. Which assessment approach is best?",
  options:["Assess observable fluency together with avoidance, impact, attitudes, and participation","Base severity entirely on the number of repetitions in one sample","Conclude there is no clinically meaningful difficulty because disfluencies are infrequent","Focus only on tongue strength"],
  answer:0,
  explanation:"Stuttering assessment should consider observable speech, the speaker's experience, avoidance, emotional impact, and participation across contexts."
},
{
  id:"ST381",difficulty:"Hard",topic:"Cleft Palate",
  question:"A child with repaired cleft palate shows persistent glottal stops for pressure consonants and reduced oral pressure. What should guide management?",
  options:["Treat all errors as developmental and wait without assessment","Assess for compensatory articulation and possible structural velopharyngeal dysfunction with the cleft/craniofacial team","Use blowing exercises as the sole treatment for all speech errors","Focus exclusively on expressive vocabulary"],
  answer:1,
  explanation:"Glottal stops may be compensatory articulations, while reduced pressure can also reflect velopharyngeal dysfunction. Assessment guides behavioral and medical management."
},
{
  id:"ST382",difficulty:"Hard",topic:"Dysarthria",
  question:"A patient with Parkinson's disease speaks softly, with reduced pitch variation and a rapid, sometimes accelerating rate. Which pattern is most consistent with this presentation?",
  options:["Spastic dysarthria","Flaccid dysarthria","Hypokinetic dysarthria","Ataxic dysarthria"],
  answer:2,
  explanation:"Hypokinetic dysarthria is commonly associated with Parkinsonian syndromes and may involve reduced loudness, monopitch, monoloudness, and rate abnormalities."
},
{
  id:"ST383",difficulty:"Hard",topic:"Dysphagia Management",
  question:"An instrumental swallowing study indicates that a specific compensatory posture improves airway protection for a particular bolus. How should this finding be used?",
  options:["Prescribe the posture to every patient with dysphagia","Assume it will work for all consistencies without testing","Use it indefinitely without reassessment","Apply it only when appropriate to the individual's findings, bolus conditions, and overall plan"],
  answer:3,
  explanation:"Compensatory strategies are patient- and condition-specific; instrumental findings and clinical context should guide recommendations."
},
{
  id:"ST384",difficulty:"Hard",topic:"Assessment Statistics",
  question:"Two clinicians independently score the same speech samples and obtain highly similar results. Which measurement property does this most directly support?",
  options:["Inter-rater reliability","Construct validity","Sensitivity","Predictive value"],
  answer:0,
  explanation:"Inter-rater reliability describes the consistency of scores or judgments made by different raters."
},
{
  id:"ST385",difficulty:"Hard",topic:"Child Language",
  question:"A child has age-appropriate vocabulary but difficulty producing grammatically complex sentences and understanding embedded clauses. Which area most warrants further assessment?",
  options:["Voice intensity only","Morphosyntax and complex sentence comprehension","Pure-tone hearing thresholds only","Oral resting posture alone"],
  answer:1,
  explanation:"Morphosyntax concerns grammatical structure, while embedded clauses increase syntactic processing demands."
},
{
  id:"ST386",difficulty:"Hard",topic:"Aphasia Rehabilitation",
  question:"A person with aphasia has difficulty ordering meals in restaurants despite improved naming during structured drills. Which intervention principle is most relevant?",
  options:["Stop all functional practice until naming is perfect","Use only decontextualized repetition exercises","Incorporate meaningful, context-based practice and communication-partner strategies","Avoid communication aids so the client must speak"],
  answer:2,
  explanation:"Functional, personally relevant practice and communication-partner support can help address participation needs beyond structured test performance."
},
{
  id:"ST387",difficulty:"Hard",topic:"Voice Assessment",
  question:"A client demonstrates persistent roughness and vocal fatigue. Which statement about acoustic voice measures is most accurate?",
  options:["One acoustic measure can establish the exact laryngeal diagnosis","Acoustic analysis makes perceptual assessment unnecessary","A normal acoustic value rules out every voice disorder","Acoustic measures can quantify selected properties but should be interpreted alongside history, perceptual assessment, and medical findings"],
  answer:3,
  explanation:"Acoustic measures provide useful quantitative information but do not independently establish etiology or replace comprehensive voice evaluation."
},
{
  id:"ST388",difficulty:"Hard",topic:"AAC and Literacy",
  question:"A school-age AAC user is beginning literacy instruction. Which approach is generally most appropriate?",
  options:["Provide ongoing access to robust communication and meaningful literacy activities matched to the learner's needs","Restrict the AAC system to requesting snacks","Delay literacy until independent speech develops","Use only pictures without opportunities to learn written language"],
  answer:0,
  explanation:"AAC users should have access to meaningful language and literacy learning; spoken language is not a prerequisite for literacy instruction."
},
{
  id:"ST389",difficulty:"Hard",topic:"Clinical Reasoning",
  question:"A patient reports choking episodes, but the initial clinical swallowing examination shows no overt signs of aspiration. What conclusion is best supported?",
  options:["Aspiration has been definitively excluded","The findings do not rule out swallowing impairment; further assessment should be guided by history, risk, and clinical judgment","The symptoms must be psychological","The patient should immediately resume any previously restricted diet without review"],
  answer:1,
  explanation:"Absence of overt signs during a clinical examination does not exclude silent aspiration or intermittent swallowing impairment."
},
{
  id:"ST390",difficulty:"Hard",topic:"Evidence-Based Practice",
  question:"A clinician is choosing between two intervention approaches with similar research support. Which decision process best reflects evidence-based practice?",
  options:["Select the newest approach regardless of suitability","Choose the approach that requires the least assessment in every case","Integrate relevant research evidence, clinical expertise, and the client's goals, preferences, and context","Use whichever approach is easiest to document, irrespective of outcomes"],
  answer:2,
  explanation:"Evidence-based practice integrates the best available research with clinical expertise and the individual's values, preferences, and circumstances."
},

{
  id:"ST391",difficulty:"Easy",topic:"Anatomy",
  question:"Which muscle is primarily responsible for protruding the tongue?",
  options:["Masseter","Temporalis","Genioglossus","Buccinator"],
  answer:2,
  explanation:"The genioglossus is a major tongue muscle that helps protrude the tongue."
},
{
  id:"ST392",difficulty:"Easy",topic:"Speech Sounds",
  question:"Which sound is a voiced alveolar stop in English?",
  options:["/t/","/d/","/k/","/p/"],
  answer:1,
  explanation:"The /d/ sound is produced with the tongue at the alveolar ridge and vocal-fold vibration."
},
{
  id:"ST393",difficulty:"Easy",topic:"Language Development",
  question:"Which skill is an example of receptive language?",
  options:["Naming a pictured animal","Telling a story about a holiday","Asking a question aloud","Following the instruction 'put the cup on the table'"],
  answer:3,
  explanation:"Receptive language involves understanding spoken or signed messages, including instructions."
},
{
  id:"ST394",difficulty:"Easy",topic:"Voice",
  question:"What is the main function of the larynx in voice production?",
  options:["It houses the vocal folds, which can vibrate to produce voice","It processes visual information","It produces digestive enzymes","It controls the movement of the fingers"],
  answer:0,
  explanation:"The larynx contains the vocal folds and plays a central role in phonation and airway protection."
},
{
  id:"ST395",difficulty:"Easy",topic:"Fluency",
  question:"Which behavior is commonly associated with stuttering?",
  options:["A consistent inability to hear high-pitched sounds","Sound or syllable repetitions during speech","Loss of all word comprehension","Weakness of the chewing muscles"],
  answer:1,
  explanation:"Stuttering may include repetitions, prolongations, and blocks that interrupt speech flow."
},
{
  id:"ST396",difficulty:"Easy",topic:"Hearing",
  question:"Which structure transmits vibrations from the eardrum toward the inner ear?",
  options:["Auditory cortex","Epiglottis","Middle-ear ossicles","Vocal folds"],
  answer:2,
  explanation:"The malleus, incus, and stapes transmit vibrations through the middle ear toward the inner ear."
},
{
  id:"ST397",difficulty:"Easy",topic:"Aphasia",
  question:"Aphasia most commonly results from damage to which system?",
  options:["The visual muscles alone","The digestive tract","The peripheral joints","Brain networks responsible for language"],
  answer:3,
  explanation:"Aphasia is an acquired language disorder associated with damage to brain networks supporting language."
},
{
  id:"ST398",difficulty:"Easy",topic:"Articulation",
  question:"Which sound is a voiceless labiodental fricative?",
  options:["/f/","/v/","/b/","/m/"],
  answer:0,
  explanation:"The /f/ sound is produced by airflow between the lower lip and upper teeth without vocal-fold vibration."
},
{
  id:"ST399",difficulty:"Easy",topic:"AAC",
  question:"What is the primary purpose of an augmentative and alternative communication system?",
  options:["To replace all educational activities","To support communication when natural speech alone is insufficient","To diagnose hearing loss automatically","To strengthen every oral muscle"],
  answer:1,
  explanation:"AAC supports or supplements communication through methods such as symbols, communication boards, signs, or speech-generating devices."
},
{
  id:"ST400",difficulty:"Easy",topic:"Clinical Practice",
  question:"What should a speech-language pathologist do when a task appears too difficult for a child during assessment?",
  options:["Assume the child is unwilling to cooperate","Continue with identical demands regardless of distress","Adjust support or task demands while preserving the assessment purpose","Record a diagnosis immediately"],
  answer:2,
  explanation:"Clinicians should adapt appropriately to the child's needs and document factors that may affect the validity of assessment results."
},
{
  id:"ST401",difficulty:"Easy",topic:"Swallowing",
  question:"Which structure helps protect the airway during swallowing?",
  options:["The pinna","The retina","The cochlea","The laryngeal vestibule and its protective mechanisms"],
  answer:3,
  explanation:"Airway protection during swallowing involves coordinated laryngeal closure and other physiological mechanisms."
},
{
  id:"ST402",difficulty:"Easy",topic:"Voice Assessment",
  question:"Which term describes how loud or soft a voice sounds?",
  options:["Loudness","Pitch","Syntax","Resonance"],
  answer:0,
  explanation:"Loudness is the perceptual impression of vocal intensity."
},
{
  id:"ST403",difficulty:"Easy",topic:"Phonology",
  question:"A child says 'ca' instead of 'cat.' Which pattern is illustrated?",
  options:["Initial consonant deletion","Final consonant deletion","Backing","Assimilation"],
  answer:1,
  explanation:"Final consonant deletion occurs when the final consonant of a word is omitted."
},
{
  id:"ST404",difficulty:"Easy",topic:"Language",
  question:"Which is an example of expressive language?",
  options:["Pointing to the named picture","Following a two-step direction","Describing what happened during a game","Identifying a familiar voice"],
  answer:2,
  explanation:"Expressive language involves formulating and communicating messages."
},
{
  id:"ST405",difficulty:"Easy",topic:"Professional Ethics",
  question:"Where should confidential client records generally be stored?",
  options:["On a public website","In a shared public chat group","On an unattended public computer","In an appropriately secured, authorized record system"],
  answer:3,
  explanation:"Client information should be protected through secure storage and access limited to authorized individuals."
},
{
  id:"ST406",difficulty:"Easy",topic:"Motor Speech",
  question:"Which statement best describes dysarthria?",
  options:["A motor speech disorder associated with impaired neuromuscular control","A disorder affecting only written spelling","A condition that always causes complete language loss","A hearing disorder involving only the outer ear"],
  answer:0,
  explanation:"Dysarthria affects speech execution through abnormalities in the neuromuscular control of speech."
},
{
  id:"ST407",difficulty:"Easy",topic:"Autism",
  question:"Which communication support may help an autistic child understand a predictable daily routine?",
  options:["Removing all visual information","A visual schedule with clear, meaningful symbols","Requiring spoken answers to every instruction","Changing the routine without warning whenever possible"],
  answer:1,
  explanation:"Visual schedules can make routines more predictable and accessible for some autistic children."
},
{
  id:"ST408",difficulty:"Easy",topic:"Assessment",
  question:"Why is hearing screening often relevant when evaluating a child's speech and language?",
  options:["It establishes the child's intelligence level","It measures grammar directly","Hearing differences may affect access to speech sounds and spoken language","It replaces a speech-language assessment"],
  answer:2,
  explanation:"Hearing screening can help identify possible hearing difficulties that may affect speech and language development."
},
{
  id:"ST409",difficulty:"Easy",topic:"Language Development",
  question:"Which activity provides a natural opportunity to observe early communication?",
  options:["Timed silent reading only","Repeated maximal-strength lifting","A pure-tone audiogram alone","Shared play with opportunities for requesting, commenting, and turn-taking"],
  answer:3,
  explanation:"Shared play allows observation of spontaneous communication, social interaction, gestures, and emerging language."
},
{
  id:"ST410",difficulty:"Easy",topic:"Clinical Documentation",
  question:"Which statement is the most objective description of a client's performance?",
  options:["The client named 9 of 12 pictures independently","The client was excellent today","The client was not trying hard enough","The client is definitely cured"],
  answer:0,
  explanation:"An objective note describes observable performance and quantifiable results without unsupported judgments."
},
{
  id:"ST411",difficulty:"Moderate",topic:"Aphasia",
  question:"A client produces short, effortful utterances and has relatively preserved comprehension of simple spoken sentences. Which aphasia profile is most consistent with these features?",
  options:["Wernicke's aphasia","Broca's aphasia","Conduction aphasia","Anomic aphasia"],
  answer:1,
  explanation:"Broca's aphasia commonly involves nonfluent, effortful output with relatively better comprehension of simple language, though individual profiles vary."
},
{
  id:"ST412",difficulty:"Moderate",topic:"Motor Speech",
  question:"Which feature is particularly useful when differentiating apraxia of speech from a primarily phonological disorder?",
  options:["A history of late talking alone","Errors that are always identical across all contexts","Articulatory groping and disrupted transitions between speech sounds","Difficulty learning new vocabulary alone"],
  answer:2,
  explanation:"Groping, disrupted transitions, and prosodic abnormalities can support a motor-planning explanation, but diagnosis requires comprehensive assessment."
},
{
  id:"ST413",difficulty:"Moderate",topic:"Voice Disorders",
  question:"A client has vocal fatigue and increased neck tension during prolonged speaking. What is an appropriate initial clinical response?",
  options:["Recommend shouting exercises without assessment","Assume a vocal-fold lesion is present","Prescribe permanent voice rest for every activity","Take a detailed voice history and assess voice use, symptoms, and need for medical referral"],
  answer:3,
  explanation:"Voice assessment should consider symptoms, vocal demands, contributing factors, and whether laryngeal examination is indicated."
},
{
  id:"ST414",difficulty:"Moderate",topic:"Phonological Disorders",
  question:"A child produces 'wabbit' for 'rabbit.' Which phonological pattern does this most likely illustrate?",
  options:["Gliding","Stopping","Final consonant deletion","Syllable reduction"],
  answer:0,
  explanation:"Gliding occurs when a liquid sound such as /r/ or /l/ is replaced by a glide such as /w/ or /j/."
},
{
  id:"ST415",difficulty:"Moderate",topic:"Language Assessment",
  question:"Why should a clinician obtain language samples in addition to standardized test scores?",
  options:["Language samples eliminate every source of assessment bias","They show how language is used in connected communication and everyday-like contexts","They provide a direct measurement of hearing thresholds","They make case history unnecessary"],
  answer:1,
  explanation:"Language samples can reveal discourse, grammar, vocabulary, and pragmatic skills that may not be fully captured by structured tests."
},
{
  id:"ST416",difficulty:"Moderate",topic:"Dysphagia",
  question:"Which statement about silent aspiration is correct?",
  options:["It always produces a forceful cough","It occurs only in infants","Material can enter the airway without an obvious cough or other overt response","It can be diagnosed reliably by listening to the voice alone"],
  answer:2,
  explanation:"Silent aspiration occurs when airway entry does not trigger an obvious protective response and may require instrumental assessment for identification."
},
{
  id:"ST417",difficulty:"Moderate",topic:"Fluency",
  question:"A school-age child stutters and has begun avoiding classroom answers. Which assessment component is especially important in addition to speech sampling?",
  options:["Maximum tongue protrusion duration only","A hearing threshold test alone","A count of correctly named colors only","The impact of stuttering on participation, feelings, and avoidance"],
  answer:3,
  explanation:"Fluency assessment should examine communication participation, emotional impact, avoidance, and the speaker's own experience."
},
{
  id:"ST418",difficulty:"Moderate",topic:"AAC",
  question:"What is the best reason to involve communication partners when implementing AAC?",
  options:["Partners influence access, opportunities, and successful use of the system in daily contexts","Partners should make every communication choice for the user","AAC works only when a clinician is present","Partner training removes the need to individualize the system"],
  answer:0,
  explanation:"Communication partners can support access, model language, allow adequate response time, and create meaningful communication opportunities."
},
{
  id:"ST419",difficulty:"Moderate",topic:"Audiology",
  question:"A child passes a hearing screening but continues to have significant difficulty understanding speech in noisy classrooms. What is the best interpretation?",
  options:["The child must have a language disorder","Passing a screening does not rule out every hearing difficulty; further evaluation may be warranted","No further investigation can ever be appropriate","The result proves auditory processing disorder"],
  answer:1,
  explanation:"Screening is not a comprehensive diagnostic evaluation. Persistent concerns may warrant further audiological and broader assessment."
},
{
  id:"ST420",difficulty:"Moderate",topic:"Autism",
  question:"Which approach best supports a meaningful communication assessment for a child who uses echolalic language?",
  options:["Count all echolalia as meaningless without examining context","Prevent the child from repeating phrases","Examine the function and context of repeated language and assess communication across settings","Assess only eye contact"],
  answer:2,
  explanation:"Echolalic language can serve different functions. Contextual assessment helps identify communicative intent and appropriate supports."
},
{
  id:"ST421",difficulty:"Moderate",topic:"Cleft Palate",
  question:"Which finding most directly suggests possible hypernasality during speech?",
  options:["A consistently hoarse voice","Reduced vocal loudness in a noisy room","Difficulty remembering a story","Excessive nasal resonance on oral speech sounds"],
  answer:3,
  explanation:"Hypernasality is excessive nasal resonance, particularly noticeable on vowels and other voiced oral speech sounds."
},
{
  id:"ST422",difficulty:"Moderate",topic:"Clinical Reasoning",
  question:"A client's test score is low, but the assessment was completed in a language the client rarely uses. What should the clinician do?",
  options:["Interpret the score cautiously and obtain additional evidence relevant to the client's language experience","Treat the score as definitive proof of disorder","Ignore the client's language background","Repeat the same test until a normal score appears"],
  answer:0,
  explanation:"Language experience and test-language proficiency can affect performance, so multiple appropriate sources of evidence are needed."
},
{
  id:"ST423",difficulty:"Moderate",topic:"Voice Therapy",
  question:"Which statement best describes semi-occluded vocal tract exercises, such as phonation through a straw?",
  options:["They are intended to eliminate the need for all voice assessment","They can facilitate efficient voicing for some clients when appropriately selected and taught","They are suitable as the sole treatment for every laryngeal disorder","They directly strengthen hearing sensitivity"],
  answer:1,
  explanation:"Semi-occluded vocal tract exercises alter vocal tract impedance and may support efficient phonation when matched to the individual's needs."
},
{
  id:"ST424",difficulty:"Moderate",topic:"Dysarthria",
  question:"A speaker has strained-strangled voice quality, slow speech, and reduced pitch range following bilateral upper motor neuron involvement. Which dysarthria type is most consistent?",
  options:["Flaccid","Hypokinetic","Spastic","Ataxic"],
  answer:2,
  explanation:"Spastic dysarthria is associated with bilateral upper motor neuron involvement and may feature strained phonation and slow, effortful speech."
},
{
  id:"ST425",difficulty:"Moderate",topic:"Child Language",
  question:"Which measure is most useful for determining whether a child generalizes a newly learned speech sound beyond trained words?",
  options:["The number of therapy worksheets completed","A caregiver's general impression alone","Accuracy on the same practiced word list only","Accuracy on untreated words and connected speech samples"],
  answer:3,
  explanation:"Generalization is best evaluated by sampling performance in untrained words and more natural speaking contexts."
},
{
  id:"ST426",difficulty:"Moderate",topic:"Clinical Ethics",
  question:"A clinician realizes that a colleague has accidentally sent a client report to the wrong recipient. What is the most appropriate response?",
  options:["Follow the organization's privacy-incident procedures promptly and help limit further disclosure","Ignore the event if the report was sent by mistake","Share the report more widely to explain the error","Delete all documentation of the incident"],
  answer:0,
  explanation:"Potential confidentiality breaches should be managed promptly according to applicable law and organizational procedures."
},
{
  id:"ST427",difficulty:"Moderate",topic:"Cognitive-Communication",
  question:"Which task is most relevant when assessing discourse organization after a brain injury?",
  options:["Identifying a single isolated consonant only","Retelling a story while examining coherence, sequencing, and relevant detail","Measuring maximum lip strength alone","Naming colors without any language context"],
  answer:1,
  explanation:"Narrative retelling can reveal organization, sequencing, cohesion, inference, and selection of relevant information."
},
{
  id:"ST428",difficulty:"Moderate",topic:"Research Methods",
  question:"A test produces similar scores when administered twice under comparable conditions. Which property does this primarily support?",
  options:["Sensitivity","Specificity","Test-retest reliability","Content coverage"],
  answer:2,
  explanation:"Test-retest reliability concerns the stability of scores across repeated administrations when the underlying ability is expected to remain stable."
},
{
  id:"ST429",difficulty:"Moderate",topic:"Swallowing",
  question:"Why should thickened liquids not automatically be prescribed to every person who aspirates thin liquids?",
  options:["Thickened liquids always increase aspiration","Liquid thickness never affects swallowing","Consistency changes eliminate the need for hydration monitoring","Benefits, risks, preferences, hydration, and instrumental findings must be considered individually"],
  answer:3,
  explanation:"Texture modification can have trade-offs and should be individualized, with attention to swallowing findings, hydration, acceptance, and overall health."
},
{
  id:"ST430",difficulty:"Moderate",topic:"Articulation Therapy",
  question:"A child produces a target sound accurately during structured drills but rarely uses it in spontaneous conversation. What should treatment emphasize next?",
  options:["Practice in varied words and communicative contexts, with generalization monitoring","Stop all practice because the sound has been learned completely","Focus exclusively on oral-motor strength","Return to assessment of unrelated vocabulary only"],
  answer:0,
  explanation:"Practice across contexts and feedback that supports carryover can help a learned production generalize to spontaneous speech."
},
{
  id:"ST431",difficulty:"Hard",topic:"Aphasia",
  question:"A person with aphasia demonstrates relatively preserved repetition but limited spontaneous speech and difficulty initiating utterances. Which syndrome is classically associated with this profile?",
  options:["Wernicke's aphasia","Transcortical motor aphasia","Conduction aphasia","Global aphasia"],
  answer:1,
  explanation:"Transcortical motor aphasia can feature reduced spontaneous output with relatively preserved repetition, though individual presentations vary."
},
{
  id:"ST432",difficulty:"Hard",topic:"Motor Speech",
  question:"A speaker's errors vary across repeated attempts at the same multisyllabic word, with disrupted prosody and visible articulatory searching. What is the most appropriate interpretation?",
  options:["The pattern proves a purely phonological disorder","It proves that muscle weakness is the only cause","The findings raise concern for a speech motor-planning disorder and require differential assessment","It establishes a hearing disorder without further testing"],
  answer:2,
  explanation:"Inconsistent errors, disrupted prosody, and articulatory searching can suggest apraxia of speech, but differential diagnosis requires comprehensive assessment."
},
{
  id:"ST433",difficulty:"Hard",topic:"Dysphagia",
  question:"During FEES, a clinician observes material below the vocal folds after the swallow, but the recording does not show how it passed the vocal folds. Which interpretation is most accurate?",
  options:["Aspiration is impossible to identify with FEES","The finding proves oral-phase dysphagia only","The material must have entered the airway before the swallow","Aspiration is present, but the exact moment of airway entry may be obscured by the endoscopic white-out"],
  answer:3,
  explanation:"FEES has a brief white-out during the swallow, so the exact timing of aspiration may not always be directly visualized."
},
{
  id:"ST434",difficulty:"Hard",topic:"Phonological Disorders",
  question:"A child produces 'gog' for 'dog' and 'bub' for 'bus,' replacing sounds with others sharing features with nearby sounds. Which process should be investigated?",
  options:["Assimilation","Final consonant deletion","Gliding","Epenthesis"],
  answer:0,
  explanation:"Assimilation occurs when one sound becomes more like another sound in the word. The pattern should be confirmed through broader analysis."
},
{
  id:"ST435",difficulty:"Hard",topic:"Voice Disorders",
  question:"A patient develops sudden voice loss immediately after shouting, without respiratory distress. What is the safest recommendation?",
  options:["Begin forceful voice exercises immediately","Seek prompt medical evaluation and avoid straining the voice until assessed","Whisper continuously for several days as a guaranteed cure","Assume the symptom is psychological and avoid referral"],
  answer:1,
  explanation:"Sudden voice loss after vocal strain warrants prompt medical assessment because acute vocal-fold injury, including hemorrhage, is possible."
},
{
  id:"ST436",difficulty:"Hard",topic:"Language Assessment",
  question:"A bilingual child scores below the expected range on an English vocabulary test but communicates effectively in the home language. Which next step is most appropriate?",
  options:["Diagnose a language disorder from the English score alone","Recommend discontinuing the home language","Assess language abilities across languages and contexts, using suitable measures and language history","Assume the child has no communication needs in any setting"],
  answer:2,
  explanation:"A bilingual assessment should consider the child's exposure and skills across languages, rather than relying on a single language score."
},
{
  id:"ST437",difficulty:"Hard",topic:"AAC",
  question:"An AAC user can select symbols accurately but rarely initiates communication. Which intervention is most likely to help?",
  options:["Remove the device until spontaneous speech occurs","Require every message to be grammatically complete","Restrict communication to answering questions","Create meaningful opportunities, model varied communication functions, and allow adequate response time"],
  answer:3,
  explanation:"Communication opportunities, aided language modeling, and adequate wait time can support initiation across functions such as commenting, asking, and refusing."
},
{
  id:"ST438",difficulty:"Hard",topic:"Clinical Research",
  question:"A diagnostic test has high specificity. Which interpretation is most accurate?",
  options:["It correctly identifies a high proportion of people who do not have the condition","It correctly identifies every affected person","It guarantees high test-retest reliability","It proves that a positive result is always correct"],
  answer:0,
  explanation:"Specificity is the proportion of people without the condition who test negative. It does not alone determine the probability that an individual result is correct."
},
{
  id:"ST439",difficulty:"Hard",topic:"Cognitive-Communication",
  question:"A client gives accurate answers to direct questions but has difficulty inferring unstated information from stories. Which assessment task would best target this difficulty?",
  options:["Maximum phonation time","Questions requiring interpretation of implied meaning and supporting evidence from a passage","Pure-tone hearing screening alone","Repetition of isolated syllables"],
  answer:1,
  explanation:"Inference tasks assess the ability to combine explicit information with context and background knowledge to derive unstated meaning."
},
{
  id:"ST440",difficulty:"Hard",topic:"Dysarthria",
  question:"Which assessment approach best supports differential classification of a suspected dysarthria?",
  options:["Classifying the disorder from the patient's diagnosis alone","Using only maximum tongue pressure","Analyzing respiration, phonation, resonance, articulation, prosody, and relevant neurological findings","Using a vocabulary test as the sole measure"],
  answer:2,
  explanation:"Dysarthria classification relies on the pattern of speech subsystem abnormalities, neurological context, and a comprehensive motor speech examination."
},
{
  id:"ST441",difficulty:"Hard",topic:"Swallowing Rehabilitation",
  question:"A patient is prescribed a swallowing maneuver based on instrumental assessment. Which principle is most important when teaching it?",
  options:["Assume the maneuver is safe for all patients with the same diagnosis","Teach it without checking the patient's ability to perform it","Use it indefinitely without considering changes in condition","Confirm the patient can perform it correctly and monitor whether it remains appropriate"],
  answer:3,
  explanation:"A prescribed maneuver should be individualized, taught accurately, and reassessed as the patient's abilities and clinical status change."
},
{
  id:"ST442",difficulty:"Hard",topic:"Fluency",
  question:"A person who stutters reports substantial struggle and avoidance, while a brief clinic sample shows few stuttering events. What is the best clinical conclusion?",
  options:["The brief sample may not represent the full impact; assess across contexts and include the person's experience","The person cannot have a meaningful fluency disorder","The report should be ignored because the sample is short","Treatment should focus only on articulation accuracy"],
  answer:0,
  explanation:"Stuttering can vary by situation, and observable frequency alone does not capture struggle, avoidance, or participation impact."
},
{
  id:"ST443",difficulty:"Hard",topic:"Cleft Palate",
  question:"A child has nasal emission on pressure consonants and compensatory glottal productions after palate repair. Which plan best addresses the possibility of both structural and learned speech factors?",
  options:["Treat vocabulary only and assume resonance will resolve","Coordinate structural/velopharyngeal assessment with targeted speech therapy for learned compensatory productions","Use blowing activities as the only intervention","Delay all evaluation until adulthood"],
  answer:1,
  explanation:"Assessment should distinguish structural velopharyngeal problems from learned articulation patterns; management may require coordinated medical and speech intervention."
},
{
  id:"ST444",difficulty:"Hard",topic:"Voice Therapy",
  question:"A patient has a confirmed voice disorder and demonstrates excessive phonatory effort. Which outcome measure would best help monitor change during therapy?",
  options:["The number of books owned by the patient","A one-time hearing screening alone","Repeated voice measures relevant to the goals, including perceptual ratings and patient-reported impact","A vocabulary score unrelated to the presenting concern"],
  answer:2,
  explanation:"Monitoring should use repeated measures that match treatment goals and may include perceptual, acoustic, functional, and patient-reported outcomes."
},
{
  id:"ST445",difficulty:"Hard",topic:"Neurogenic Communication",
  question:"Following a right-hemisphere stroke, a client uses an unusually flat intonation pattern and misses sarcasm despite understanding literal sentence meaning. Which area should be assessed?",
  options:["Only peripheral articulation placement","Only the ability to name common objects","Only the strength of the chewing muscles","Prosodic and pragmatic aspects of communication"],
  answer:3,
  explanation:"Right-hemisphere injury can affect emotional and linguistic prosody, inference, and interpretation of nonliteral language."
},
{
  id:"ST446",difficulty:"Hard",topic:"Evidence-Based Practice",
  question:"A small study reports a statistically significant improvement, but the treatment group includes very few participants and no comparison group. How should a clinician interpret the findings?",
  options:["As preliminary evidence that must be weighed against design limitations and other research","As definitive proof that the intervention is effective for everyone","As stronger evidence than a large controlled trial by definition","As evidence that clinical expertise and client preferences are irrelevant"],
  answer:0,
  explanation:"Small uncontrolled studies may generate useful hypotheses, but they provide limited evidence for causal conclusions and generalizability."
},
{
  id:"ST447",difficulty:"Hard",topic:"Child Language",
  question:"A child uses many words but has difficulty following complex directions and producing organized narratives. Which assessment plan is most comprehensive?",
  options:["Measure expressive vocabulary only","Assess receptive language, syntax, narrative organization, and functional communication using multiple methods","Assess voice quality alone","Use a single articulation screener to determine language ability"],
  answer:1,
  explanation:"Language difficulties can affect multiple domains; comprehensive assessment combines structured measures, samples, observation, and relevant reports."
},
{
  id:"ST448",difficulty:"Hard",topic:"Hearing and Language",
  question:"A child with fluctuating conductive hearing loss has inconsistent access to speech in the classroom. What should guide speech-language intervention planning?",
  options:["Assume all language difficulties are permanent and unrelated to hearing","Stop all language intervention until hearing is completely typical","Coordinate with audiology and the educational team while addressing demonstrated communication needs","Use articulation drills only, without considering classroom access"],
  answer:2,
  explanation:"Intervention should consider hearing access, communication demands, audiological management, and the child's measured language and speech needs."
},
{
  id:"ST449",difficulty:"Hard",topic:"Clinical Ethics",
  question:"A family requests that a clinician guarantee that a child will speak fluently after a fixed number of sessions. What is the most appropriate response?",
  options:["Guarantee the outcome to improve family confidence","Promise complete recovery if attendance is perfect","Avoid discussing goals or likely outcomes","Explain realistic goals, uncertainty, and how progress will be measured while involving the family in planning"],
  answer:3,
  explanation:"Ethical counseling avoids guarantees that cannot be supported and promotes transparent, collaborative goal-setting and progress monitoring."
},
{
  id:"ST450",difficulty:"Hard",topic:"Assessment and Diagnosis",
  question:"A client has a low score on one communication measure but performs well in daily interactions and on other relevant tasks. What is the best diagnostic approach?",
  options:["Integrate test results with functional performance, history, observation, and other evidence before reaching a conclusion","Diagnose a disorder solely from the lowest score","Discard all standardized test information automatically","Assume the client is deliberately manipulating the results"],
  answer:0,
  explanation:"Sound clinical reasoning integrates multiple sources of evidence and considers measurement limits, context, and functional communication."
},

{
  id:"ST451",difficulty:"Easy",topic:"Speech Anatomy",
  question:"Which structure elevates the soft palate during normal swallowing?",
  options:["Masseter","Levator veli palatini","Genioglossus","Orbicularis oculi"],
  answer:1,
  explanation:"The levator veli palatini elevates the soft palate and contributes to velopharyngeal closure."
},
{
  id:"ST452",difficulty:"Easy",topic:"Articulation",
  question:"Which sound is a voiced bilabial nasal?",
  options:["/p/","/f/","/m/","/s/"],
  answer:2,
  explanation:"The /m/ sound is produced with both lips closed and airflow passing through the nose."
},
{
  id:"ST453",difficulty:"Easy",topic:"Language",
  question:"Which example best demonstrates a child using language to request something?",
  options:["Looking away from a toy","Repeating a cough","Remaining silent during play","Saying 'more juice, please'"],
  answer:3,
  explanation:"A request communicates a desire for an object, action, or continuation of an activity."
},
{
  id:"ST454",difficulty:"Easy",topic:"Voice",
  question:"Which term describes the quality of sound created when vocal-fold vibration begins and continues?",
  options:["Phonation","Syntax","Semantics","Olfaction"],
  answer:0,
  explanation:"Phonation is the production of voice through laryngeal activity, typically involving vocal-fold vibration."
},
{
  id:"ST455",difficulty:"Easy",topic:"Hearing",
  question:"Which part of the ear contains the sensory structures essential for hearing?",
  options:["Pinna","Cochlea","Eustachian tube","Ear canal"],
  answer:1,
  explanation:"The cochlea contains sensory hair cells that transduce sound-related mechanical movement into neural signals."
},
{
  id:"ST456",difficulty:"Easy",topic:"Fluency",
  question:"Which response is most supportive when a child takes extra time to answer a question?",
  options:["Repeat the question loudly several times","Finish the child's sentence immediately","Allow adequate time and maintain natural conversation","Tell the child to answer faster"],
  answer:2,
  explanation:"Adequate wait time supports participation and avoids creating unnecessary communication pressure."
},
{
  id:"ST457",difficulty:"Easy",topic:"Aphasia",
  question:"Which ability may be affected by aphasia?",
  options:["Knee reflexes only","Hair growth","Blood pressure regulation only","Understanding spoken language"],
  answer:3,
  explanation:"Aphasia can affect language comprehension and expression across speaking, listening, reading, and writing."
},
{
  id:"ST458",difficulty:"Easy",topic:"AAC",
  question:"Which is an example of unaided AAC?",
  options:["Using a conventional sign or gesture to communicate","Selecting a symbol on a tablet","Typing a message on a speech-generating device","Pointing to a printed communication board"],
  answer:0,
  explanation:"Unaided AAC uses the person's body, such as signs, gestures, or facial expressions, without an external communication tool."
},
{
  id:"ST459",difficulty:"Easy",topic:"Swallowing",
  question:"What is dysphagia?",
  options:["A disorder of visual recognition","Difficulty with swallowing","A disorder of spelling only","A type of hearing loss"],
  answer:1,
  explanation:"Dysphagia refers to difficulty swallowing food, liquids, saliva, or other material."
},
{
  id:"ST460",difficulty:"Easy",topic:"Assessment",
  question:"Why should an examiner use age-appropriate language when assessing a young child?",
  options:["To make every answer correct","To avoid documenting performance","To reduce unnecessary language demands that could interfere with demonstrating skills","To replace all standardized procedures"],
  answer:2,
  explanation:"Instructions should be accessible while maintaining appropriate test procedures so the child's performance can be interpreted meaningfully."
},
{
  id:"ST461",difficulty:"Easy",topic:"Phonology",
  question:"A child says 'poon' for 'spoon.' Which pattern is illustrated?",
  options:["Final consonant deletion","Backing","Stopping","Cluster reduction"],
  answer:3,
  explanation:"Cluster reduction occurs when one or more consonants in a consonant cluster are omitted."
},
{
  id:"ST462",difficulty:"Easy",topic:"Voice Anatomy",
  question:"Which structure is commonly called the voice box?",
  options:["Larynx","Pharynx","Trachea","Esophagus"],
  answer:0,
  explanation:"The larynx houses the vocal folds and contributes to voice production and airway protection."
},
{
  id:"ST463",difficulty:"Easy",topic:"Language Development",
  question:"Which behavior is an example of symbolic communication?",
  options:["An involuntary sneeze","Using the word 'dog' to refer to a dog","Blinking because of bright light","A reflexive startle response"],
  answer:1,
  explanation:"Symbolic communication uses a symbol, such as a word, sign, or picture, to represent meaning."
},
{
  id:"ST464",difficulty:"Easy",topic:"Motor Speech",
  question:"Which statement best describes apraxia of speech?",
  options:["A disorder of hearing sensitivity","A disorder affecting only vocabulary knowledge","Difficulty planning or programming the movements required for speech","A disorder affecting only visual attention"],
  answer:2,
  explanation:"Apraxia of speech is a motor-planning/programming disorder that affects the ability to sequence speech movements."
},
{
  id:"ST465",difficulty:"Easy",topic:"Clinical Practice",
  question:"What should a clinician do if a client does not understand an instruction?",
  options:["Record the client as noncompliant immediately","Increase the complexity of the instruction","Continue without checking comprehension","Clarify or appropriately rephrase the instruction when permitted by the assessment procedure"],
  answer:3,
  explanation:"Checking comprehension can help distinguish difficulty understanding the task from difficulty performing the target skill."
},
{
  id:"ST466",difficulty:"Easy",topic:"Resonance",
  question:"Which cavity is particularly important for nasal resonance?",
  options:["Nasal cavity","Stomach","Middle ear","Thoracic cavity"],
  answer:0,
  explanation:"The nasal cavity contributes to resonance when the velopharyngeal mechanism permits appropriate coupling with the oral cavity."
},
{
  id:"ST467",difficulty:"Easy",topic:"Articulation",
  question:"Where is the tongue placed to produce the English /t/ sound?",
  options:["Between the lower lip and upper teeth","At or near the alveolar ridge","Against the soft palate only","At the vocal folds"],
  answer:1,
  explanation:"English /t/ is typically an alveolar stop produced with tongue contact near the alveolar ridge."
},
{
  id:"ST468",difficulty:"Easy",topic:"Pragmatics",
  question:"Which behavior best demonstrates conversational turn-taking?",
  options:["Speaking continuously without allowing a response","Repeating the same sentence regardless of context","Taking a speaking turn and allowing the other person an opportunity to respond","Ignoring the conversational partner's contribution"],
  answer:2,
  explanation:"Turn-taking involves coordinating speaking and listening roles during interaction."
},
{
  id:"ST469",difficulty:"Easy",topic:"Hearing",
  question:"Which unit is commonly used to report hearing threshold level in clinical audiology?",
  options:["Hertz per second","Liters","Centimeters","Decibels hearing level (dB HL)"],
  answer:3,
  explanation:"Audiometric thresholds are commonly reported in dB HL, a reference scale used in hearing assessment."
},
{
  id:"ST470",difficulty:"Easy",topic:"Clinical Ethics",
  question:"What is an important part of maintaining professional boundaries?",
  options:["Keeping the therapeutic relationship focused on the client's needs and professional responsibilities","Sharing personal client details with friends","Making promises beyond professional competence","Using client information for unrelated personal purposes"],
  answer:0,
  explanation:"Professional boundaries protect client welfare, confidentiality, and the integrity of the therapeutic relationship."
},
{
  id:"ST471",difficulty:"Moderate",topic:"Aphasia",
  question:"A client produces fluent speech with frequent word-finding pauses but generally understands conversation and repeats sentences relatively well. Which profile is most consistent?",
  options:["Global aphasia","Anomic aphasia","Broca's aphasia","Severe receptive aphasia"],
  answer:1,
  explanation:"Anomic aphasia is characterized primarily by word-finding difficulty, often with relatively preserved fluency and comprehension."
},
{
  id:"ST472",difficulty:"Moderate",topic:"Motor Speech",
  question:"Which finding is most suggestive of a motor speech disorder rather than an isolated language disorder?",
  options:["Difficulty understanding complex instructions only","Limited knowledge of word meanings only","Impaired coordination and precision of speech movements","Difficulty recalling the plot of a story only"],
  answer:2,
  explanation:"Motor speech disorders affect the planning or execution of speech movements, whereas language disorders affect linguistic processing."
},
{
  id:"ST473",difficulty:"Moderate",topic:"Dysphagia",
  question:"A patient reports food sticking in the throat, but the oral examination is unremarkable. What should the clinician consider?",
  options:["That swallowing difficulty is impossible","That the complaint proves aspiration","That no further history is needed","A comprehensive swallowing assessment and referral or instrumental evaluation as indicated"],
  answer:3,
  explanation:"A normal oral examination does not rule out pharyngeal or esophageal problems; further evaluation depends on symptoms and clinical risk."
},
{
  id:"ST474",difficulty:"Moderate",topic:"Phonological Disorders",
  question:"A child says 'tun' for 'sun' and 'do' for 'zoo.' Which pattern is most consistent?",
  options:["Stopping","Gliding","Backing","Final consonant deletion"],
  answer:0,
  explanation:"Stopping replaces a fricative, such as /s/ or /z/, with a stop consonant, such as /t/ or /d/."
},
{
  id:"ST475",difficulty:"Moderate",topic:"Voice Disorders",
  question:"A patient reports hoarseness that worsens after prolonged speaking. Which measure may help document perceived voice impact from the patient's perspective?",
  options:["A pure-tone threshold alone","A validated patient-reported voice handicap questionnaire","A measure of visual acuity","A vocabulary test unrelated to voice"],
  answer:1,
  explanation:"Patient-reported measures, such as an appropriate voice handicap questionnaire, capture perceived functional and psychosocial impact."
},
{
  id:"ST476",difficulty:"Moderate",topic:"Child Language",
  question:"A child uses short sentences and omits grammatical markers. Which assessment target is most relevant?",
  options:["Auditory thresholds alone","Maximum vocal loudness alone","Morphology and syntax in structured tasks and spontaneous language","Visual tracking alone"],
  answer:2,
  explanation:"Morphology concerns word structure and grammatical markers, while syntax concerns sentence structure."
},
{
  id:"ST477",difficulty:"Moderate",topic:"Fluency",
  question:"Which feature may help distinguish a typical revision from a potentially concerning stuttering-like disfluency?",
  options:["Any pause, regardless of context","Every use of a filler word","Every sentence containing a correction","Repeated sounds or syllables, prolongations, or blocks, considered alongside frequency and impact"],
  answer:3,
  explanation:"Disfluency classification depends on the type of event, its frequency, associated tension, and the speaker's experience."
},
{
  id:"ST478",difficulty:"Moderate",topic:"AAC",
  question:"A communication device has many vocabulary options, but the user cannot reliably locate frequently needed words. What is the best next step?",
  options:["Review vocabulary organization, access method, and user-specific communication needs","Remove most vocabulary without consulting the user","Assume the user is not ready for AAC","Require the user to memorize the whole layout before use"],
  answer:0,
  explanation:"AAC systems should be individualized, accessible, and organized to support efficient communication across relevant contexts."
},
{
  id:"ST479",difficulty:"Moderate",topic:"Hearing",
  question:"Which finding on tympanometry most commonly suggests reduced mobility of the middle-ear system?",
  options:["A normal peak with expected pressure","A flat type B tympanogram, interpreted with ear-canal volume and clinical context","A high speech-language test score","A normal pure-tone threshold by itself"],
  answer:1,
  explanation:"A flat type B tympanogram may indicate middle-ear dysfunction, but interpretation depends on ear-canal volume and other clinical findings."
},
{
  id:"ST480",difficulty:"Moderate",topic:"Autism",
  question:"A child communicates effectively through gestures and pictures but uses few spoken words. Which assessment principle is most appropriate?",
  options:["Count only spoken words as communication","Remove the child's existing communication supports during every interaction","Assess total communicative ability across modalities and environments","Assume gestures do not convey meaningful language"],
  answer:2,
  explanation:"Communication assessment should include speech, gestures, symbols, AAC, comprehension, and functional participation."
},
{
  id:"ST481",difficulty:"Moderate",topic:"Cleft Palate",
  question:"Which observation is most suggestive of nasal emission rather than hypernasality?",
  options:["Excessive nasal resonance on vowels alone","Reduced loudness across all speaking tasks","Difficulty retrieving words","Audible or visible airflow through the nose during pressure consonants"],
  answer:3,
  explanation:"Nasal emission refers to nasal airflow during speech, often noticeable on pressure consonants. Hypernasality refers to excessive nasal resonance."
},
{
  id:"ST482",difficulty:"Moderate",topic:"Clinical Reasoning",
  question:"A child performs well in a quiet assessment room but struggles to follow spoken directions in a noisy classroom. What is the best response?",
  options:["Investigate listening conditions, hearing access, language demands, and functional performance in context","Conclude that the classroom report is inaccurate","Diagnose a language disorder from this difference alone","Ignore environmental factors because testing was standardized"],
  answer:0,
  explanation:"Performance can vary with noise, attention, language complexity, and listening access. Multiple sources of evidence help clarify the concern."
},
{
  id:"ST483",difficulty:"Moderate",topic:"Voice Therapy",
  question:"Which principle is important when prescribing vocal hygiene recommendations?",
  options:["Assume the same recommendation suits every voice disorder","Individualize recommendations to symptoms, vocal demands, hydration needs, and medical advice","Recommend complete silence to every person with hoarseness","Use vocal hygiene as a substitute for medical assessment when indicated"],
  answer:1,
  explanation:"Vocal hygiene should be tailored to the individual and used as one part of management, not as a universal replacement for assessment."
},
{
  id:"ST484",difficulty:"Moderate",topic:"Dysarthria",
  question:"A patient has irregular articulatory breakdowns, excess and equal stress, and impaired coordination after cerebellar injury. Which dysarthria type is most consistent?",
  options:["Flaccid dysarthria","Spastic dysarthria","Ataxic dysarthria","Hypokinetic dysarthria"],
  answer:2,
  explanation:"Ataxic dysarthria is associated with impaired coordination and timing, often producing irregular articulation and abnormal stress patterns."
},
{
  id:"ST485",difficulty:"Moderate",topic:"Assessment",
  question:"Why is dynamic assessment useful when evaluating a child with limited prior exposure to the test language?",
  options:["It guarantees a diagnosis without standardized information","It removes the need for caregiver history","It measures only hearing sensitivity","It examines learning potential and response to mediated support, alongside other evidence"],
  answer:3,
  explanation:"Dynamic assessment examines how a learner responds to teaching or mediation and can complement static assessment, particularly when language experience differs."
},
{
  id:"ST486",difficulty:"Moderate",topic:"Clinical Ethics",
  question:"A client declines a recommended communication intervention after receiving an explanation of its benefits and limitations. What should the clinician generally do?",
  options:["Respect the informed decision, explore concerns, and discuss appropriate alternatives","Threaten to end all services immediately","Provide the intervention without consent","Share the client's decision with unrelated individuals"],
  answer:0,
  explanation:"Respect for autonomy includes informed decision-making, discussion of concerns, and consideration of appropriate alternatives."
},
{
  id:"ST487",difficulty:"Moderate",topic:"Cognitive-Communication",
  question:"A client with brain injury struggles to plan a multistep task and monitor errors. Which cognitive-communication domain should be considered?",
  options:["Pure-tone hearing thresholds","Executive functioning","Vocal-fold length","Lip rounding alone"],
  answer:1,
  explanation:"Executive functioning includes planning, organization, monitoring, inhibition, and flexible adjustment of behavior."
},
{
  id:"ST488",difficulty:"Moderate",topic:"Research Methods",
  question:"Which term describes whether a test measures the construct it is intended to measure?",
  options:["Test-retest reliability","Specificity only","Validity","Inter-rater agreement only"],
  answer:2,
  explanation:"Validity concerns the degree to which evidence supports the intended interpretation and use of assessment results."
},
{
  id:"ST489",difficulty:"Moderate",topic:"Swallowing",
  question:"Which statement about the cough reflex and aspiration is most accurate?",
  options:["A cough always confirms aspiration","The absence of coughing proves safe swallowing","Cough strength alone identifies the precise swallowing phase affected","Coughing may raise concern, but its presence or absence alone cannot establish swallowing safety"],
  answer:3,
  explanation:"Clinical signs must be interpreted in context; aspiration may occur without cough, and coughing can have causes other than aspiration."
},
{
  id:"ST490",difficulty:"Moderate",topic:"Articulation Therapy",
  question:"A child produces a target sound correctly in words but loses accuracy when sentence length increases. What is the most appropriate treatment adjustment?",
  options:["Gradually increase linguistic complexity while supporting accuracy and monitoring carryover","Return exclusively to nonspeech oral exercises","Stop treatment because sentence-level speech cannot improve","Focus only on receptive vocabulary"],
  answer:0,
  explanation:"Gradual progression from simpler to more complex speaking tasks can support accurate production in connected speech."
},
{
  id:"ST491",difficulty:"Hard",topic:"Aphasia",
  question:"A client has nonfluent speech and impaired comprehension, but can repeat some phrases more accurately than expected from spontaneous output. What is the best clinical approach?",
  options:["Assign a syndrome based on repetition alone","Use a comprehensive aphasia assessment to characterize the pattern and consider differential diagnoses","Assume hearing loss is the sole explanation","Conclude that language is unaffected"],
  answer:1,
  explanation:"Aphasia syndromes overlap, and repetition alone is insufficient. Assessment should characterize fluency, comprehension, naming, repetition, and functional communication."
},
{
  id:"ST492",difficulty:"Hard",topic:"Motor Speech",
  question:"A patient with suspected dysarthria has reduced intelligibility. Which strategy is most appropriate for establishing a useful baseline?",
  options:["Record only the patient's preferred treatment technique","Measure vocabulary knowledge alone","Collect speech samples across tasks and assess intelligibility and subsystem features","Use only a maximum tongue-strength score"],
  answer:2,
  explanation:"Baseline assessment should include relevant speech tasks, intelligibility, rate, prosody, and respiratory, phonatory, resonatory, and articulatory features."
},
{
  id:"ST493",difficulty:"Hard",topic:"Dysphagia",
  question:"A patient with suspected aspiration has a complex medical history and inconsistent symptoms. How should an instrumental swallowing study be selected?",
  options:["Always select the same study for every patient","Choose based only on the patient's age","Avoid instrumental assessment whenever symptoms fluctuate","Select VFSS or FEES according to the clinical question, medical status, feasibility, and relevant risks"],
  answer:3,
  explanation:"VFSS and FEES provide complementary information. Selection should be individualized to the question, patient's condition, and practical considerations."
},
{
  id:"ST494",difficulty:"Hard",topic:"Phonological Disorders",
  question:"A child has multiple error patterns that affect several sound classes and substantially reduce intelligibility. What is the best initial clinical priority?",
  options:["Complete a broad speech sound assessment, including stimulability, error patterns, consistency, and functional impact","Treat the easiest single sound without further analysis","Assume all errors result from hearing loss","Focus only on expressive vocabulary"],
  answer:0,
  explanation:"A comprehensive assessment helps characterize the system-wide pattern and guide target selection and intervention planning."
},
{
  id:"ST495",difficulty:"Hard",topic:"Voice Disorders",
  question:"A patient with persistent dysphonia has been referred for voice therapy but has not yet had indicated laryngeal visualization. What should the clinician consider?",
  options:["Start all treatment techniques regardless of diagnosis","Coordinate appropriate medical/laryngeal evaluation before proceeding when clinically indicated","Assume the dysphonia is functional","Avoid taking a voice history"],
  answer:1,
  explanation:"Appropriate laryngeal evaluation can identify relevant pathology and help determine safe, suitable voice management."
},
{
  id:"ST496",difficulty:"Hard",topic:"Bilingual Assessment",
  question:"A bilingual child performs differently across two languages because exposure and use differ by setting. Which conclusion is most appropriate?",
  options:["The weaker language automatically indicates a disorder","Both languages must always have identical vocabulary scores","Language performance should be interpreted relative to exposure, opportunities to learn, and abilities across contexts","Only the language used at school is relevant"],
  answer:2,
  explanation:"Bilingual language development is shaped by exposure and use. Assessment should distinguish language difference from disorder using multiple relevant sources of evidence."
},
{
  id:"ST497",difficulty:"Hard",topic:"AAC",
  question:"A client uses eye gaze to select symbols but experiences increasing errors late in sessions. What should the clinician investigate?",
  options:["Assume the client has lost language comprehension","Remove all vocabulary from the device","Require faster selections to improve accuracy","Fatigue, positioning, calibration, visual access, and session demands"],
  answer:3,
  explanation:"Access performance can be affected by fatigue, positioning, visual conditions, calibration, and task demands; these should be checked before interpreting errors."
},
{
  id:"ST498",difficulty:"Hard",topic:"Research Methods",
  question:"A study finds that an intervention group improves more than a comparison group, but participants were not randomly assigned. Which issue should be considered when interpreting causality?",
  options:["Potential confounding variables and group differences","The impossibility of measuring change","The guarantee that results are free from bias","The absence of any need to examine sample characteristics"],
  answer:0,
  explanation:"Without random assignment, pre-existing group differences and confounding variables may contribute to observed outcomes."
},
{
  id:"ST499",difficulty:"Hard",topic:"Cognitive-Communication",
  question:"A client provides all key facts in a story but presents them in a confusing order and omits links between events. Which area is most relevant?",
  options:["Isolated articulation placement","Narrative organization and cohesion","Pure-tone threshold sensitivity","Maximum phonation duration"],
  answer:1,
  explanation:"Narrative organization includes sequencing events, maintaining coherence, and using cohesive links to make the message understandable."
},
{
  id:"ST500",difficulty:"Hard",topic:"Dysarthria",
  question:"A speaker with dysarthria is difficult to understand in conversation. Which intervention plan best supports functional communication?",
  options:["Focus exclusively on isolated oral strength exercises","Avoid discussing communication-partner strategies","Combine appropriate speech strategies with functional practice and partner support","Assume intelligibility cannot change"],
  answer:2,
  explanation:"Individualized management may address rate, loudness, articulatory precision, communication strategies, and partner support according to the person's needs."
},
{
  id:"ST501",difficulty:"Hard",topic:"Swallowing Management",
  question:"A person with dysphagia has poor acceptance of a prescribed modified texture and is consuming very little fluid. What should the team do?",
  options:["Insist on the texture without reassessment","Assume reduced intake is harmless","Remove all swallowing precautions without review","Reassess the plan with the relevant team, considering swallowing safety, hydration, nutrition, preferences, and alternatives"],
  answer:3,
  explanation:"Management must balance swallowing safety with hydration, nutrition, quality of life, and the individual's preferences and clinical status."
},
{
  id:"ST502",difficulty:"Hard",topic:"Fluency",
  question:"A treatment outcome study reports fewer stuttering events but no change in avoidance or communication participation. What is the best interpretation?",
  options:["The measured fluency change may not capture the full treatment outcome; additional functional measures are needed","The intervention has definitively resolved every impact of stuttering","Participation outcomes are irrelevant to fluency treatment","The event count must be incorrect"],
  answer:0,
  explanation:"Fluency outcomes may include observable speech, avoidance, confidence, participation, and quality of life; no single measure captures every domain."
},
{
  id:"ST503",difficulty:"Hard",topic:"Cleft Palate",
  question:"A patient produces compensatory pharyngeal fricatives despite adequate structural closure on assessment. Which management direction is most appropriate?",
  options:["Assume surgery is always necessary","Provide targeted speech therapy for the learned articulation pattern and monitor outcomes","Treat only receptive language","Use vocal hygiene as the sole intervention"],
  answer:1,
  explanation:"When the error is learned and structural closure is adequate, targeted speech intervention may be appropriate; management should reflect the full assessment."
},
{
  id:"ST504",difficulty:"Hard",topic:"Voice Assessment",
  question:"A clinician compares acoustic voice recordings collected before and after therapy. Which condition best supports meaningful comparison?",
  options:["Use different recording environments and microphones without documentation","Compare unrelated vowels produced at different intensities only","Standardize or document recording conditions, task, microphone setup, and analysis method","Ignore background noise and sampling differences"],
  answer:2,
  explanation:"Consistent recording and analysis procedures reduce measurement variability and support more meaningful comparison over time."
},
{
  id:"ST505",difficulty:"Hard",topic:"Child Language",
  question:"A child shows age-appropriate grammar in conversation but has difficulty understanding complex academic instructions. What should guide the next assessment step?",
  options:["Assume the child has no language needs because conversation is fluent","Assess articulation alone","Diagnose a disorder solely from classroom grades","Examine higher-level receptive language, academic language demands, and performance across contexts"],
  answer:3,
  explanation:"Conversational fluency does not guarantee age-appropriate academic language; assessment should examine complex syntax, vocabulary, inference, and context."
},
{
  id:"ST506",difficulty:"Hard",topic:"Hearing and Speech",
  question:"A child has inconsistent speech sound production and a history of recurrent middle-ear effusion. What is the most appropriate clinical response?",
  options:["Arrange appropriate hearing evaluation and assess speech sound development without assuming a single cause","Conclude that effusion definitively caused every speech error","Ignore the hearing history because the child can speak","Treat hearing loss using speech exercises alone"],
  answer:0,
  explanation:"Recurrent middle-ear problems may affect hearing access, but speech errors have multiple possible causes and require appropriate audiological and speech assessment."
},
{
  id:"ST507",difficulty:"Hard",topic:"Clinical Ethics",
  question:"A clinician is asked to perform an assessment outside their competence. What is the most appropriate action?",
  options:["Proceed and conceal any limitations","Seek supervision, training, or an appropriate referral while ensuring the client's needs are addressed","Make a diagnosis based on an online checklist alone","Refuse all future care without explanation"],
  answer:1,
  explanation:"Clinicians should work within their competence and arrange appropriate consultation, training, or referral when necessary."
},
{
  id:"ST508",difficulty:"Hard",topic:"Evidence-Based Practice",
  question:"A published intervention study has statistically significant results, but the measured improvement is very small. What should the clinician consider?",
  options:["Statistical significance guarantees clinical importance","Only the p-value matters when selecting treatment","Effect size, clinical relevance, study quality, and applicability to the client","The results automatically apply to every age group"],
  answer:2,
  explanation:"Statistical significance does not necessarily indicate a meaningful clinical benefit; effect size, design quality, and applicability must also be considered."
},
{
  id:"ST509",difficulty:"Hard",topic:"Clinical Reasoning",
  question:"A client's performance changes substantially between formal testing and natural conversation. What is the best way to interpret this discrepancy?",
  options:["Discard the natural conversation sample","Use only the highest score","Assume the client is deliberately giving incorrect answers","Investigate contextual demands, supports, fatigue, task structure, and sampling limitations"],
  answer:3,
  explanation:"Different tasks impose different demands, so contextual factors and multiple samples should inform interpretation of the client's functional abilities."
},
{
  id:"ST510",difficulty:"Hard",topic:"Treatment Planning",
  question:"A client meets a short-term goal but continues to have difficulty in everyday communication. What is the best next step?",
  options:["Review functional outcomes with the client and adjust goals or intervention to address remaining participation needs","Discharge automatically because one goal was achieved","Repeat the same goal indefinitely without reassessment","Ignore the client's communication priorities"],
  answer:0,
  explanation:"Treatment planning should respond to progress and functional priorities, using reassessment to refine goals and support meaningful participation."
},

{
  id:"ST511",difficulty:"Easy",topic:"Speech Anatomy",
  question:"Which structure separates the pharynx from the nasal cavity during appropriate oral speech?",
  options:["Tongue tip","Vocal folds","Velum (soft palate)","Epiglottis alone"],
  answer:2,
  explanation:"The velum elevates toward the pharyngeal wall to reduce nasal airflow during most oral speech sounds."
},
{
  id:"ST512",difficulty:"Easy",topic:"Articulation",
  question:"Which sound is a voiceless velar stop?",
  options:["/b/","/k/","/m/","/z/"],
  answer:1,
  explanation:"The /k/ sound is produced by contact between the back of the tongue and the velar region without vocal-fold vibration."
},
{
  id:"ST513",difficulty:"Easy",topic:"Language Development",
  question:"Which behavior is an example of a communicative gesture?",
  options:["An involuntary blink","A reflexive sneeze","A spontaneous startle response","Pointing toward a desired toy"],
  answer:3,
  explanation:"Pointing can communicate a request or direct another person's attention toward an object."
},
{
  id:"ST514",difficulty:"Easy",topic:"Voice",
  question:"Which measurement most directly represents the number of vocal-fold vibration cycles per second?",
  options:["Fundamental frequency","Speech intelligibility","Loudness rating","Language sample length"],
  answer:0,
  explanation:"Fundamental frequency (F0) is the rate of vocal-fold vibration, measured in hertz."
},
{
  id:"ST515",difficulty:"Easy",topic:"Hearing",
  question:"Which part of the auditory system converts mechanical vibrations into neural signals?",
  options:["Pinna","Sensory hair cells in the cochlea","Ear canal entrance","Eardrum alone"],
  answer:1,
  explanation:"Hair cells within the cochlea transduce mechanical movement into electrical signals that activate auditory nerve pathways."
},
{
  id:"ST516",difficulty:"Easy",topic:"Fluency",
  question:"Which is an example of a speech prolongation?",
  options:["Saying a word once clearly","Pausing between two sentences","Holding a sound unusually long, as in 'ssssun'","Changing the topic during a conversation"],
  answer:2,
  explanation:"A prolongation involves an unusually extended sound and may occur as a stuttering-like disfluency."
},
{
  id:"ST517",difficulty:"Easy",topic:"Aphasia",
  question:"Which communication ability may be affected in a person with aphasia?",
  options:["Only walking speed","Only skin sensation","Only visual acuity","Finding the intended word during conversation"],
  answer:3,
  explanation:"Word retrieval difficulties are common in aphasia, although the pattern and severity vary by individual."
},
{
  id:"ST518",difficulty:"Easy",topic:"AAC",
  question:"Which is an example of aided AAC?",
  options:["Selecting a picture on a communication board","Using a natural facial expression without a device","Waving without any external aid","Producing a conventional hand gesture without equipment"],
  answer:0,
  explanation:"Aided AAC uses an external tool, such as a communication board, picture symbols, or a speech-generating device."
},
{
  id:"ST519",difficulty:"Easy",topic:"Swallowing",
  question:"Which symptom can be a warning sign of swallowing difficulty?",
  options:["A normal blink","Coughing or choking during meals","A change in hairstyle","Occasional yawning when tired"],
  answer:1,
  explanation:"Coughing or choking during meals may indicate swallowing difficulty, though these symptoms alone cannot establish the cause."
},
{
  id:"ST520",difficulty:"Easy",topic:"Assessment",
  question:"What is the main purpose of a baseline measurement before intervention?",
  options:["To guarantee the treatment outcome","To replace ongoing assessment","To document the starting level against which progress can be compared","To determine the client's personality"],
  answer:2,
  explanation:"Baseline data help clinicians compare later performance and evaluate change over time."
},
{
  id:"ST521",difficulty:"Easy",topic:"Phonology",
  question:"A child says 'nana' for 'banana.' Which pattern may be present?",
  options:["Backing","Stopping","Final consonant deletion","Weak-syllable deletion"],
  answer:3,
  explanation:"Weak-syllable deletion occurs when an unstressed syllable is omitted from a multisyllabic word."
},
{
  id:"ST522",difficulty:"Easy",topic:"Voice Anatomy",
  question:"Which structure carries air from the larynx toward the lungs?",
  options:["Trachea","Esophagus","Soft palate","Auditory tube"],
  answer:0,
  explanation:"The trachea is the airway connecting the larynx with the lower respiratory tract."
},
{
  id:"ST523",difficulty:"Easy",topic:"Language",
  question:"Which task most directly examines a child's ability to name familiar objects?",
  options:["Following a direction without speaking","Showing pictures and asking the child to identify each one by name","Sustaining a vowel","Repeating a rhythmic beat"],
  answer:1,
  explanation:"Picture naming samples expressive lexical retrieval for familiar items."
},
{
  id:"ST524",difficulty:"Easy",topic:"Motor Speech",
  question:"Which speech feature may occur in dysarthria?",
  options:["An inability to recognize written letters only","Loss of all visual memory","Imprecise articulation related to impaired motor control","An isolated difficulty understanding metaphors"],
  answer:2,
  explanation:"Dysarthria can affect articulation, phonation, resonance, respiration, and prosody because of impaired neuromuscular speech control."
},
{
  id:"ST525",difficulty:"Easy",topic:"Pragmatics",
  question:"Which behavior is an example of repairing a communication breakdown?",
  options:["Ignoring the listener's confusion","Repeating the same unclear phrase without adjustment","Ending every conversation immediately","Rephrasing a message when the listener does not understand"],
  answer:3,
  explanation:"Communication repair involves changing or clarifying a message when the original attempt is unsuccessful."
},
{
  id:"ST526",difficulty:"Easy",topic:"Resonance",
  question:"What is hyponasality?",
  options:["Reduced nasal resonance, often noticeable on sounds that normally require nasal resonance","Excessive nasal resonance on all oral vowels","An unusually high fundamental frequency","A disorder of word meaning"],
  answer:0,
  explanation:"Hyponasality is reduced nasal resonance, which may occur with nasal obstruction or other relevant conditions."
},
{
  id:"ST527",difficulty:"Easy",topic:"Articulation",
  question:"Which sound is typically classified as a voiced labiodental fricative?",
  options:["/f/","/v/","/p/","/t/"],
  answer:1,
  explanation:"The /v/ sound is produced by airflow between the lower lip and upper teeth with vocal-fold vibration."
},
{
  id:"ST528",difficulty:"Easy",topic:"Language Development",
  question:"Which example best demonstrates understanding of a word?",
  options:["Repeating the word without understanding it","Producing a similar-sounding word","Selecting the correct picture when the word is spoken","Sustaining a vowel after a model"],
  answer:2,
  explanation:"Selecting a matching picture after hearing a word provides evidence of receptive word knowledge."
},
{
  id:"ST529",difficulty:"Easy",topic:"Clinical Practice",
  question:"What should a clinician do if a client becomes visibly distressed during an assessment?",
  options:["Continue at the same pace regardless of distress","Assume the client is intentionally refusing","Ignore the client's communication","Pause, acknowledge the concern, and adapt or discontinue as clinically appropriate"],
  answer:3,
  explanation:"Client safety, dignity, and participation should guide decisions about modifying or pausing an assessment."
},
{
  id:"ST530",difficulty:"Easy",topic:"Clinical Documentation",
  question:"Which information is most useful in a treatment progress note?",
  options:["The target skill, level of support, observed performance, and next steps","An unrelated personal opinion about the client","An unsupported guarantee of recovery","A description of another client's private information"],
  answer:0,
  explanation:"Useful documentation records relevant goals, measurable performance, cueing, response to treatment, and the plan."
},
{
  id:"ST531",difficulty:"Moderate",topic:"Aphasia",
  question:"A client understands simple instructions but struggles with complex grammatical sentences. Which assessment focus is most relevant?",
  options:["Vocal intensity alone","Sentence comprehension across increasing syntactic complexity","Maximum lip strength alone","Pure-tone screening alone"],
  answer:1,
  explanation:"Assessing sentences of varying complexity helps identify whether grammatical processing contributes to comprehension difficulty."
},
{
  id:"ST532",difficulty:"Moderate",topic:"Motor Speech",
  question:"Which finding most strongly supports investigating dysarthria rather than a purely phonological disorder?",
  options:["Difficulty learning the meaning of words only","Errors limited to spelling in written work","Consistent abnormalities across speech subsystems, such as phonation, respiration, and articulation","Difficulty following a story without speech production demands"],
  answer:2,
  explanation:"Dysarthria may affect multiple speech subsystems. A full assessment is needed to distinguish motor speech and phonological explanations."
},
{
  id:"ST533",difficulty:"Moderate",topic:"Dysphagia",
  question:"A patient reports a sensation of food sticking after swallowing, particularly with solid foods. What should the clinician consider?",
  options:["That the symptom must be caused by poor articulation","That the symptom proves aspiration occurred","That the patient only needs voice therapy","Possible pharyngeal or esophageal difficulty requiring appropriate medical and swallowing evaluation"],
  answer:3,
  explanation:"A sensation of food sticking can have several causes, including pharyngeal or esophageal problems, and warrants appropriate assessment."
},
{
  id:"ST534",difficulty:"Moderate",topic:"Phonological Disorders",
  question:"A child produces 'doe' for 'go' and 'tea' for 'key.' Which error pattern is most consistent?",
  options:["Fronting","Backing","Gliding","Final consonant deletion"],
  answer:0,
  explanation:"Fronting replaces a sound made farther back, such as /g/ or /k/, with a sound made farther forward."
},
{
  id:"ST535",difficulty:"Moderate",topic:"Voice Disorders",
  question:"Which finding is most consistent with muscle tension dysphonia?",
  options:["An isolated loss of word comprehension","Excessive laryngeal or neck effort associated with altered voice production","A hearing threshold change without voice symptoms","A reduced ability to understand visual symbols"],
  answer:1,
  explanation:"Muscle tension dysphonia can involve excessive muscular effort and altered voice quality; diagnosis requires appropriate evaluation."
},
{
  id:"ST536",difficulty:"Moderate",topic:"Child Language",
  question:"A child has difficulty retelling events in a logical sequence despite knowing many individual words. Which skill should be assessed?",
  options:["Pure-tone thresholds only","Maximum phonation time only","Narrative organization and discourse-level language","Lip closure strength alone"],
  answer:2,
  explanation:"Narrative assessment examines sequencing, coherence, cohesion, relevant details, and the use of language to communicate connected events."
},
{
  id:"ST537",difficulty:"Moderate",topic:"Fluency",
  question:"A client who stutters asks the clinician to allow more time during difficult speaking situations. What is the most appropriate response?",
  options:["Refuse because all clients must speak at the same speed","Require the client to avoid all challenging conversations","Correct every disfluency immediately","Collaborate on strategies that support comfortable, effective communication and participation"],
  answer:3,
  explanation:"Treatment should be individualized and may address communication participation, self-advocacy, and strategies suited to the client's goals."
},
{
  id:"ST538",difficulty:"Moderate",topic:"AAC",
  question:"A child uses a speech-generating device primarily to request items. What is a useful next step in intervention?",
  options:["Model and encourage additional functions such as commenting, greeting, refusing, and asking questions","Remove requesting vocabulary to force other messages","Require the child to use speech instead of the device","Limit device use to therapy sessions"],
  answer:0,
  explanation:"AAC intervention can expand communicative functions so the user can participate more fully across everyday situations."
},
{
  id:"ST539",difficulty:"Moderate",topic:"Audiology",
  question:"What does an air-bone gap generally indicate when bone-conduction thresholds are better than air-conduction thresholds?",
  options:["A language disorder by itself","A possible conductive component to hearing loss","A confirmed central auditory processing disorder","Normal hearing in every circumstance"],
  answer:1,
  explanation:"An air-bone gap can indicate a conductive component, but full audiological interpretation is needed to determine the type and degree of hearing loss."
},
{
  id:"ST540",difficulty:"Moderate",topic:"Autism",
  question:"Which goal is most appropriate when supporting an autistic child's social communication?",
  options:["Require eye contact in every interaction","Eliminate all preferred interests","Support meaningful interaction and self-advocacy in ways that respect the child's communication style","Measure success only by how typical the child's behavior appears"],
  answer:2,
  explanation:"Goals should support functional communication, participation, and autonomy rather than merely enforcing superficial conformity."
},
{
  id:"ST541",difficulty:"Moderate",topic:"Cleft Palate",
  question:"Why may a child with cleft palate need both speech-language assessment and specialist medical evaluation?",
  options:["Speech errors always resolve without treatment","Language scores determine the need for surgery","Speech-language pathologists diagnose every structural problem independently","Speech patterns may reflect learned errors, structural dysfunction, or both"],
  answer:3,
  explanation:"Assessment must distinguish compensatory speech patterns from structural velopharyngeal problems, which may require coordinated specialist management."
},
{
  id:"ST542",difficulty:"Moderate",topic:"Clinical Reasoning",
  question:"A child scores poorly on a standardized language test but shows stronger skills during familiar play. What should the clinician do?",
  options:["Integrate test performance, language samples, caregiver information, and observations before interpreting the results","Ignore the standardized score entirely","Diagnose a disorder from the play sample alone","Assume the test must be invalid"],
  answer:0,
  explanation:"Different assessment methods reveal different aspects of communication. A balanced interpretation uses multiple sources and considers context."
},
{
  id:"ST543",difficulty:"Moderate",topic:"Voice Therapy",
  question:"What is the main aim of resonant voice therapy?",
  options:["Maximize vocal strain to strengthen the voice","Facilitate efficient voice production with reduced unnecessary effort","Eliminate all natural pitch variation","Replace medical evaluation for every voice disorder"],
  answer:1,
  explanation:"Resonant voice therapy aims to promote efficient phonation and oral resonance with reduced vocal effort."
},
{
  id:"ST544",difficulty:"Moderate",topic:"Dysarthria",
  question:"A patient has weak, breathy speech and hypernasality following peripheral nerve involvement. Which dysarthria type should be considered?",
  options:["Ataxic dysarthria","Spastic dysarthria","Flaccid dysarthria","Hypokinetic dysarthria"],
  answer:2,
  explanation:"Flaccid dysarthria can involve weakness and reduced tone, producing breathiness, hypernasality, and reduced articulatory precision."
},
{
  id:"ST545",difficulty:"Moderate",topic:"Assessment",
  question:"What is the main purpose of checking stimulability during a speech sound assessment?",
  options:["To measure receptive vocabulary","To establish hearing thresholds","To determine the client's personality","To see whether the client can produce a target sound with an appropriate model or cue"],
  answer:3,
  explanation:"Stimulability testing examines whether a speech sound can be elicited with support and may inform target selection and prognosis."
},
{
  id:"ST546",difficulty:"Moderate",topic:"Clinical Ethics",
  question:"A clinician receives a request for client information from someone whose authorization is unclear. What should happen first?",
  options:["Verify the person's authority and follow applicable confidentiality procedures before disclosing information","Send the entire record immediately","Provide verbal details because they are not written","Post the information in a shared staff chat without checking access"],
  answer:0,
  explanation:"The clinician should verify authorization and comply with applicable privacy laws and organizational procedures before sharing protected information."
},
{
  id:"ST547",difficulty:"Moderate",topic:"Cognitive-Communication",
  question:"A client frequently interrupts, loses the topic, and fails to adjust messages for the listener after a brain injury. Which area is most relevant?",
  options:["Isolated consonant production only","Pragmatic and executive aspects of communication","Pure-tone hearing thresholds only","Vocal-fold anatomy only"],
  answer:1,
  explanation:"Turn-taking, topic maintenance, listener awareness, and self-monitoring can be affected by cognitive-communication impairment."
},
{
  id:"ST548",difficulty:"Moderate",topic:"Research Methods",
  question:"Which statement best describes specificity in a diagnostic test?",
  options:["The proportion of affected people who test positive","The proportion of all test results that are repeatable","The proportion of unaffected people who test negative","The percentage of clients who complete therapy"],
  answer:2,
  explanation:"Specificity is the proportion of people without the condition who are correctly identified as negative."
},
{
  id:"ST549",difficulty:"Moderate",topic:"Swallowing",
  question:"A patient with dysphagia has poor oral intake after a diet modification. What should guide further management?",
  options:["Continue the plan without reviewing its effects","Assume the patient is deliberately noncompliant","Remove all precautions without assessment","Reassess swallowing needs alongside hydration, nutrition, acceptability, and the patient's goals"],
  answer:3,
  explanation:"Swallowing recommendations should balance safety, adequate intake, quality of life, and individual preferences."
},
{
  id:"ST550",difficulty:"Moderate",topic:"Articulation Therapy",
  question:"A child can produce /s/ accurately in single words but not in longer utterances. Which treatment progression is most appropriate?",
  options:["Build practice through phrases and sentences toward connected speech while monitoring accuracy","Return permanently to isolated sound practice","Discontinue all treatment immediately","Switch to an unrelated goal without reviewing progress"],
  answer:0,
  explanation:"A graduated hierarchy supports carryover from simpler production contexts to connected speech and everyday communication."
},
{
  id:"ST551",difficulty:"Hard",topic:"Aphasia",
  question:"A client demonstrates fluent speech, impaired comprehension, and relatively poor repetition. Which syndrome is most consistent with this combination?",
  options:["Transcortical sensory aphasia","Wernicke's aphasia","Transcortical motor aphasia","Conduction aphasia"],
  answer:1,
  explanation:"Wernicke's aphasia commonly features fluent output, impaired auditory comprehension, and impaired repetition. Comprehensive assessment is necessary for classification."
},
{
  id:"ST552",difficulty:"Hard",topic:"Motor Speech",
  question:"A client shows inconsistent consonant and vowel errors, syllable segmentation, and abnormal lexical stress. Which differential diagnosis should be investigated?",
  options:["A purely receptive language disorder","An isolated hearing threshold elevation","Apraxia of speech","A visual recognition disorder"],
  answer:2,
  explanation:"Inconsistent errors, segmentation, and prosodic abnormalities can be associated with apraxia of speech, but other explanations must be considered."
},
{
  id:"ST553",difficulty:"Hard",topic:"Dysphagia",
  question:"A patient with neurological disease has a wet voice after drinking but no cough. What is the most defensible interpretation?",
  options:["Aspiration is confirmed by wet voice alone","Silent aspiration is excluded because there is no cough","The patient must have a voice disorder unrelated to swallowing","The finding raises concern but cannot independently establish aspiration; further assessment may be needed"],
  answer:3,
  explanation:"A wet voice may be a clinical sign of swallowing difficulty, but it is not diagnostic on its own. Absence of cough does not exclude aspiration."
},
{
  id:"ST554",difficulty:"Hard",topic:"Phonological Disorders",
  question:"A child exhibits several predictable sound substitutions that reduce intelligibility, but oral structure and hearing screening are unremarkable. What is the best next step?",
  options:["Complete a detailed speech sound analysis and assess phonological patterns, consistency, and functional impact","Assume the child has a motor planning disorder without further assessment","Treat only vocabulary because hearing screening was passed","Wait indefinitely without monitoring speech development"],
  answer:0,
  explanation:"A comprehensive speech sound assessment characterizes error patterns, consistency, stimulability, and functional impact to guide intervention."
},
{
  id:"ST555",difficulty:"Hard",topic:"Voice Disorders",
  question:"A patient has a persistently strained voice and reports pain during speaking. Which approach is most appropriate?",
  options:["Prescribe high-intensity vocal exercises without assessment","Arrange appropriate voice and medical evaluation, considering laryngeal examination and symptom history","Recommend shouting to overcome strain","Assume the problem is caused by poor motivation"],
  answer:1,
  explanation:"Persistent strain and pain warrant appropriate evaluation before selecting treatment, including medical assessment when indicated."
},
{
  id:"ST556",difficulty:"Hard",topic:"Bilingual Assessment",
  question:"A bilingual child demonstrates low performance in one language but strong skills in another. Which evidence is most important for differential diagnosis?",
  options:["A comparison with monolingual norms in only the weaker language","The number of languages spoken by the family alone","Language exposure and use, skills across languages, developmental history, and functional performance","The clinician's first impression without testing"],
  answer:2,
  explanation:"Language difference and disorder are differentiated through a broad understanding of language experience and performance across relevant contexts."
},
{
  id:"ST557",difficulty:"Hard",topic:"AAC",
  question:"A user has reliable access to an AAC device but finds it difficult to communicate quickly in group conversations. What should the clinician investigate?",
  options:["Whether the user should stop using AAC","Whether the user can learn spoken language by removing the device","Whether communication partners should speak for the user at all times","Vocabulary organization, access speed, conversational strategies, partner behavior, and environmental demands"],
  answer:3,
  explanation:"AAC effectiveness depends on access, vocabulary, partner support, timing, and the demands of the communication environment."
},
{
  id:"ST558",difficulty:"Hard",topic:"Research Methods",
  question:"A study reports a strong association between two variables. What can be concluded from the association alone?",
  options:["The variables are related in the observed data, but causation cannot be established from association alone","The first variable definitely caused the second","Confounding variables are impossible","The findings must apply to every population"],
  answer:0,
  explanation:"Association does not by itself demonstrate causation; study design, confounding, and alternative explanations must be considered."
},
{
  id:"ST559",difficulty:"Hard",topic:"Cognitive-Communication",
  question:"A client follows literal instructions but repeatedly misses implied meaning and sarcasm. Which assessment should be prioritized?",
  options:["Maximum lip strength","Inference, nonliteral language, and pragmatic comprehension","Pure-tone screening alone","Sustained vowel production"],
  answer:1,
  explanation:"Inference and nonliteral language tasks examine aspects of higher-level comprehension and pragmatic communication."
},
{
  id:"ST560",difficulty:"Hard",topic:"Dysarthria",
  question:"Which pattern is classically associated with hypokinetic dysarthria?",
  options:["Severe hypernasality caused by isolated palatal weakness only","Excess and equal stress with irregular articulatory breakdowns as the defining pattern","Reduced loudness, reduced pitch variation, and possible rate abnormalities","Consistent groping with disrupted speech movement planning as the defining pattern"],
  answer:2,
  explanation:"Hypokinetic dysarthria is commonly associated with Parkinsonian conditions and may include reduced vocal intensity, monopitch, and rate abnormalities."
},
{
  id:"ST561",difficulty:"Hard",topic:"Swallowing Management",
  question:"An instrumental assessment shows that a particular posture improves airway protection for one tested consistency. How should the clinician interpret this result?",
  options:["The posture should be used with all foods by every patient","It proves that aspiration cannot occur under any condition","It eliminates the need for future reassessment","The finding applies to the tested circumstances and must be considered within the individual's overall swallowing plan"],
  answer:3,
  explanation:"A strategy's effect may depend on the individual, bolus, and task. Recommendations should reflect assessment findings and clinical context."
},
{
  id:"ST562",difficulty:"Hard",topic:"Fluency",
  question:"A client reports severe communication anxiety but demonstrates few stuttering events during a short structured sample. What should the clinician do?",
  options:["Assess speech across contexts and consider anxiety, avoidance, participation, and the client's reported experience","Conclude that no fluency-related difficulty exists","Use only a count of sound repetitions from that sample","Ignore the client's stated goals"],
  answer:0,
  explanation:"A short sample may not capture the full experience of stuttering; a comprehensive assessment considers variation and psychosocial impact."
},
{
  id:"ST563",difficulty:"Hard",topic:"Cleft Palate",
  question:"A child has persistent hypernasality after palate repair. Which step is most appropriate before deciding on speech therapy alone?",
  options:["Assume the cause is a learned articulation error","Arrange appropriate evaluation of velopharyngeal function with the relevant specialist team","Focus exclusively on grammar","Use blowing exercises as a substitute for assessment"],
  answer:1,
  explanation:"Persistent hypernasality may reflect structural or functional velopharyngeal dysfunction. Specialist assessment helps determine appropriate management."
},
{
  id:"ST564",difficulty:"Hard",topic:"Voice Assessment",
  question:"A clinician wants to evaluate change in voice-related quality of life following intervention. Which measure is most appropriate?",
  options:["A single articulation accuracy score","A pure-tone audiogram alone","A suitable validated patient-reported voice outcome measure","A count of correctly named objects"],
  answer:2,
  explanation:"A validated patient-reported voice measure can capture the client's perceived functional impact and complement objective assessment."
},
{
  id:"ST565",difficulty:"Hard",topic:"Child Language",
  question:"A school-age child has difficulty understanding figurative expressions, drawing inferences, and interpreting complex texts. Which assessment focus is most appropriate?",
  options:["Only isolated consonant accuracy","Only vocal loudness","Only oral resting posture","Higher-level receptive language, inferencing, figurative language, and academic discourse"],
  answer:3,
  explanation:"These difficulties involve higher-level language processes that support comprehension of complex spoken and written material."
},
{
  id:"ST566",difficulty:"Hard",topic:"Hearing and Speech",
  question:"A child has inconsistent access to speech because of fluctuating middle-ear conditions. What is the best multidisciplinary approach?",
  options:["Coordinate audiological follow-up, monitor speech and language, and support access to communication in daily settings","Assume all communication differences are permanent","Delay every speech-language assessment until adulthood","Treat all speech errors as a direct consequence of middle-ear disease"],
  answer:0,
  explanation:"Coordinated care addresses hearing access and communication needs while avoiding unsupported assumptions about the cause of every speech error."
},
{
  id:"ST567",difficulty:"Hard",topic:"Clinical Ethics",
  question:"A clinician discovers that an assessment report contains an important error after it has been shared with the authorized team. What is the appropriate response?",
  options:["Leave the error uncorrected to preserve the original record","Follow documentation procedures to correct or amend the report transparently and notify relevant recipients as appropriate","Delete the original record without explanation","Alter the result without recording the change"],
  answer:1,
  explanation:"Material errors should be corrected transparently according to professional and organizational documentation requirements."
},
{
  id:"ST568",difficulty:"Hard",topic:"Evidence-Based Practice",
  question:"A treatment has strong evidence in adults with a particular disorder, but the current client is a young child with different needs. What should guide the decision?",
  options:["Apply the adult protocol unchanged because the evidence is strong","Ignore all research and rely solely on intuition","Evaluate applicability, client characteristics, clinical expertise, family priorities, and available evidence","Assume the intervention cannot work for any child"],
  answer:2,
  explanation:"Evidence-based practice requires evaluating how well research findings apply to the individual, alongside expertise and client or family preferences."
},
{
  id:"ST569",difficulty:"Hard",topic:"Clinical Reasoning",
  question:"A client performs differently on repeated assessments because of fatigue and medication timing. How should the clinician interpret the results?",
  options:["Select whichever score supports the preferred diagnosis","Assume every score is equally representative without context","Discard all observations automatically","Document relevant conditions and consider their influence when interpreting performance and planning reassessment"],
  answer:3,
  explanation:"Performance conditions can affect assessment results. Documenting and accounting for these factors supports more accurate clinical interpretation."
},
{
  id:"ST570",difficulty:"Hard",topic:"Treatment Planning",
  question:"A client achieves high accuracy in structured therapy but reports little improvement in everyday communication. What should the clinician prioritize?",
  options:["Review functional goals and practice opportunities, then measure performance in real-life communication contexts","Discharge automatically based on structured accuracy alone","Repeat the same structured drill without modification indefinitely","Stop gathering information about participation"],
  answer:0,
  explanation:"Structured accuracy does not guarantee functional generalization. Treatment should address everyday communication goals and monitor real-world outcomes."
},

{
  id:"ST571",difficulty:"Easy",topic:"Anatomy",
  question:"Which structure separates the oral cavity from the nasal cavity?",
  options:["Hard palate","Epiglottis","Vocal folds","Uvula only"],
  answer:0,
  explanation:"The hard palate forms the bony anterior roof of the mouth and separates the oral and nasal cavities."
},
{
  id:"ST572",difficulty:"Easy",topic:"Language Development",
  question:"Which communication behavior typically emerges before a child's first spoken word?",
  options:["Narrative retelling","Complex grammatical sentences","Intentional pointing to share interest","Consistent use of past tense"],
  answer:2,
  explanation:"Intentional pointing and joint attention commonly develop before first words."
},
{
  id:"ST573",difficulty:"Easy",topic:"Speech Disorders",
  question:"Which term describes difficulty producing speech sounds correctly?",
  options:["Dysphagia","Articulation disorder","Aphasia","Auditory neuropathy"],
  answer:1,
  explanation:"An articulation disorder involves difficulty forming specific speech sounds."
},
{
  id:"ST574",difficulty:"Easy",topic:"Voice",
  question:"Which structure contains the vocal folds?",
  options:["Pharynx","Hard palate","Nasal septum","Larynx"],
  answer:3,
  explanation:"The vocal folds are located inside the larynx."
},
{
  id:"ST575",difficulty:"Easy",topic:"Fluency",
  question:"Which is an example of a typical stuttering-like disfluency?",
  options:["Repetition of a sound, such as 'b-b-ball'","A consistently hoarse voice","Difficulty chewing solids","Replacing every /s/ with /t/"],
  answer:0,
  explanation:"Sound repetitions are a characteristic stuttering-like disfluency."
},
{
  id:"ST576",difficulty:"Easy",topic:"Hearing",
  question:"Which professional primarily evaluates hearing sensitivity?",
  options:["Occupational therapist","Psychologist","Audiologist","Physiotherapist"],
  answer:2,
  explanation:"Audiologists assess hearing and related auditory functions."
},
{
  id:"ST577",difficulty:"Easy",topic:"Aphasia",
  question:"Aphasia most directly affects which ability?",
  options:["Limb strength alone","Language processing","Visual acuity","Lung capacity"],
  answer:1,
  explanation:"Aphasia is an acquired language disorder that can affect speaking, comprehension, reading, and writing."
},
{
  id:"ST578",difficulty:"Easy",topic:"Dysphagia",
  question:"Which symptom can indicate swallowing difficulty?",
  options:["Improved handwriting","Increased visual attention","Clearer articulation","Coughing during meals"],
  answer:3,
  explanation:"Coughing during eating or drinking can indicate swallowing difficulty and warrants assessment."
},
{
  id:"ST579",difficulty:"Easy",topic:"Assessment",
  question:"What is the main purpose of a speech-language case history?",
  options:["Gather relevant developmental, medical, and communication information","Replace every formal assessment","Determine a diagnosis from age alone","Measure only speech loudness"],
  answer:0,
  explanation:"A case history helps guide assessment and clinical decision-making."
},
{
  id:"ST580",difficulty:"Easy",topic:"Articulation",
  question:"Which sound is a voiced bilabial stop?",
  options:["/s/","/f/","/b/","/h/"],
  answer:2,
  explanation:"/b/ is produced with both lips and vocal-fold vibration."
},
{
  id:"ST581",difficulty:"Easy",topic:"AAC",
  question:"What does AAC stand for?",
  options:["Auditory Assessment Control","Augmentative and Alternative Communication","Applied Articulation Curriculum","Automatic Auditory Conditioning"],
  answer:1,
  explanation:"AAC includes methods and tools that supplement or replace spoken communication."
},
{
  id:"ST582",difficulty:"Easy",topic:"Voice",
  question:"What is the clinical term for an unusually hoarse voice?",
  options:["Aphasia","Ataxia","Apraxia","Dysphonia"],
  answer:3,
  explanation:"Dysphonia refers to impaired voice quality, pitch, loudness, or effort."
},
{
  id:"ST583",difficulty:"Easy",topic:"Language",
  question:"Which activity best targets understanding basic action words?",
  options:["Asking the child to 'jump' or 'clap' when instructed","Practicing isolated vowel prolongation","Measuring maximum phonation time","Repeating tongue-twister sentences only"],
  answer:0,
  explanation:"Following action-word directions directly targets receptive vocabulary and comprehension."
},
{
  id:"ST584",difficulty:"Easy",topic:"Motor Speech",
  question:"Dysarthria is primarily associated with impairment in which area?",
  options:["Word meaning knowledge only","Hearing thresholds only","Neuromuscular execution of speech","Reading comprehension alone"],
  answer:2,
  explanation:"Dysarthria results from impaired neuromuscular control of speech movements."
},
{
  id:"ST585",difficulty:"Easy",topic:"Professional Practice",
  question:"What should a clinician generally obtain before beginning a non-emergency assessment?",
  options:["A guaranteed treatment outcome","Appropriate informed consent","A completed discharge report","A referral from every family member"],
  answer:1,
  explanation:"Informed consent supports ethical assessment and respects the client's rights."
},
{
  id:"ST586",difficulty:"Easy",topic:"Phonology",
  question:"Replacing a difficult sound with an easier sound is an example of what?",
  options:["Resonance","Prosody","Voice onset time","Phonological substitution"],
  answer:3,
  explanation:"A substitution occurs when one speech sound is used in place of another."
},
{
  id:"ST587",difficulty:"Easy",topic:"Autism",
  question:"Which approach can support communication for an autistic child?",
  options:["Following the child's interests and supporting their communication","Requiring eye contact before every response","Ignoring all non-speaking communication","Withholding AAC until speech develops"],
  answer:0,
  explanation:"Respectful, individualized support can build engagement and functional communication."
},
{
  id:"ST588",difficulty:"Easy",topic:"Fluency",
  question:"Which response is generally most supportive when a person stutters?",
  options:["Finish every sentence for them","Tell them to hurry","Listen patiently and allow time to speak","Require repeated corrections after every word"],
  answer:2,
  explanation:"Patient listening reduces time pressure and supports effective communication."
},
{
  id:"ST589",difficulty:"Easy",topic:"Anatomy",
  question:"Which structure helps close the nasal passage during many oral speech sounds?",
  options:["Tongue tip alone","Velum (soft palate)","Lower lip alone","Vocal ligament"],
  answer:1,
  explanation:"Elevation of the velum helps separate the oral and nasal cavities during oral speech."
},
{
  id:"ST590",difficulty:"Easy",topic:"Clinical Documentation",
  question:"Which entry is the most objective clinical note?",
  options:["The client was lazy today","The client clearly did not care","The session was terrible","The client produced target words correctly in 8 of 10 trials"],
  answer:3,
  explanation:"Quantifiable observations are more objective than judgments about motivation."
},

{
  id:"ST591",difficulty:"Moderate",topic:"Assessment",
  question:"A child performs well on single-word naming but struggles to explain events in conversation. What should assessment examine next?",
  options:["Only oral strength","Only pure-tone hearing thresholds","Connected speech and narrative language","Only maximum phonation time"],
  answer:2,
  explanation:"Connected-speech and narrative samples can reveal difficulties not apparent during isolated naming."
},
{
  id:"ST592",difficulty:"Moderate",topic:"Aphasia",
  question:"A client speaks fluently but produces semantically unrelated words and has poor auditory comprehension. Which aphasia pattern is most consistent?",
  options:["Broca aphasia","Wernicke aphasia","Typical dysarthria","Isolated apraxia of speech"],
  answer:1,
  explanation:"Wernicke aphasia commonly involves fluent speech with impaired comprehension and reduced meaningful content."
},
{
  id:"ST593",difficulty:"Moderate",topic:"Motor Speech",
  question:"Which finding most strongly supports apraxia of speech rather than dysarthria?",
  options:["Consistent weakness affecting speech movements","Persistent breathiness caused by vocal-fold dysfunction","Reduced loudness due to respiratory weakness","Inconsistent sound errors with articulatory groping"],
  answer:3,
  explanation:"Inconsistent errors and articulatory groping are characteristic clues to apraxia of speech."
},
{
  id:"ST594",difficulty:"Moderate",topic:"Dysphagia",
  question:"A patient coughs repeatedly when drinking thin liquids after a stroke. What is the most appropriate next step?",
  options:["Conduct a swallowing evaluation and determine whether instrumental assessment is indicated","Immediately prescribe thickened liquids without assessment","Assume coughing proves aspiration in every instance","Encourage rapid drinking to improve coordination"],
  answer:0,
  explanation:"Clinical assessment guides further evaluation; VFSS or FEES may be needed to assess swallowing physiology."
},
{
  id:"ST595",difficulty:"Moderate",topic:"Phonology",
  question:"A child says 'tat' for 'cat' and 'doe' for 'go.' Which phonological pattern may explain these errors?",
  options:["Final consonant deletion","Weak-syllable deletion","Velar fronting","Cluster reduction"],
  answer:2,
  explanation:"Velar fronting occurs when velar sounds such as /k/ and /g/ are replaced by sounds produced farther forward."
},
{
  id:"ST596",difficulty:"Moderate",topic:"Voice",
  question:"Which measure is most directly used to quantify habitual fundamental frequency?",
  options:["Decibels hearing level","Hertz","Milliliters","Words per minute"],
  answer:1,
  explanation:"Fundamental frequency is measured in hertz and relates to perceived vocal pitch."
},
{
  id:"ST597",difficulty:"Moderate",topic:"Language Development",
  question:"A preschooler uses short sentences and has difficulty combining words into grammatical utterances. Which area should therapy target?",
  options:["Pure-tone audiometry exclusively","Oral feeding endurance","Visual tracking","Morphosyntax and expressive language"],
  answer:3,
  explanation:"Morphosyntax includes grammatical structures and how words combine into sentences."
},
{
  id:"ST598",difficulty:"Moderate",topic:"Fluency",
  question:"Why should a fluency assessment include information about avoidance and communication impact?",
  options:["Stuttering impact extends beyond observable disfluency frequency","Avoidance automatically proves severe stuttering","Avoidance replaces the need for speech sampling","Communication impact can be measured only by reading speed"],
  answer:0,
  explanation:"Assessment should consider observable speech, the client's experiences, avoidance, and participation."
},
{
  id:"ST599",difficulty:"Moderate",topic:"AAC",
  question:"A nonspeaking child has reliable pointing skills. Which AAC option may be appropriate to trial?",
  options:["Withhold all communication until speech emerges","Use only written spelling regardless of ability","A symbol-based communication board or device","Limit communication to yes/no questions permanently"],
  answer:2,
  explanation:"Symbol-based AAC can provide functional communication and should be individualized to the child's access and language needs."
},
{
  id:"ST600",difficulty:"Moderate",topic:"Hearing",
  question:"A child has fluctuating hearing associated with middle-ear effusion. Which concern is particularly relevant?",
  options:["Guaranteed permanent deafness","Variable access to speech sounds that may affect language learning","Certain development of aphasia","Automatic diagnosis of autism"],
  answer:1,
  explanation:"Conductive hearing changes can fluctuate and reduce consistent access to speech, so monitoring and appropriate referral matter."
},
{
  id:"ST601",difficulty:"Moderate",topic:"Cleft Palate",
  question:"Which speech finding may be associated with velopharyngeal dysfunction?",
  options:["Consistently low speaking rate only","Aphasia with impaired word retrieval","Isolated hand weakness","Excessive nasal resonance on oral pressure consonants"],
  answer:3,
  explanation:"Velopharyngeal dysfunction may cause hypernasality and reduced oral pressure during speech."
},
{
  id:"ST602",difficulty:"Moderate",topic:"Clinical Reasoning",
  question:"A client shows limited progress despite consistent attendance. What is the best initial clinical response?",
  options:["Review the diagnosis, goals, intervention methods, dosage, and contextual barriers","Repeat the same plan indefinitely","Discharge immediately without discussion","Assume the client is unwilling to improve"],
  answer:0,
  explanation:"Evidence-based practice involves reviewing response to intervention and adjusting the plan when needed."
},
{
  id:"ST603",difficulty:"Moderate",topic:"Articulation",
  question:"Which cue most directly facilitates production of /f/?",
  options:["Close the back of the tongue against the soft palate","Vibrate the tongue tip against the alveolar ridge","Place the upper teeth lightly against the lower lip and direct airflow","Close both lips and release a burst"],
  answer:2,
  explanation:"/f/ is a voiceless labiodental fricative produced by airflow between the upper teeth and lower lip."
},
{
  id:"ST604",difficulty:"Moderate",topic:"Dementia",
  question:"For a person with dementia experiencing communication difficulties, which intervention is often helpful?",
  options:["Use increasingly complex questions to challenge memory","Use clear, concise language and supportive environmental cues","Correct every minor error immediately","Speak to the caregiver instead of the person in all situations"],
  answer:1,
  explanation:"Clear communication and environmental supports can improve participation while preserving dignity."
},
{
  id:"ST605",difficulty:"Moderate",topic:"Voice",
  question:"A teacher reports vocal fatigue and hoarseness after prolonged classroom speaking. What is a reasonable clinical priority?",
  options:["Begin intensive shouting exercises","Assume a neurological disorder without evaluation","Recommend permanent silence without assessment","Assess voice, vocal demands, and relevant medical history; refer for laryngeal evaluation when indicated"],
  answer:3,
  explanation:"Persistent hoarseness warrants appropriate medical evaluation alongside assessment of vocal behaviors and demands."
},
{
  id:"ST606",difficulty:"Moderate",topic:"Language Assessment",
  question:"Why might a clinician collect a language sample in addition to standardized test scores?",
  options:["It provides information about functional communication in a natural context","It eliminates the need to consider cultural and linguistic background","It guarantees a diagnosis without other evidence","It measures hearing thresholds directly"],
  answer:0,
  explanation:"Language samples reveal spontaneous language use, discourse skills, and patterns that standardized tests may not capture."
},
{
  id:"ST607",difficulty:"Moderate",topic:"Dysarthria",
  question:"A patient has slurred speech, reduced tongue movement, and weakness following a neurological injury. Which assessment focus is most relevant?",
  options:["Narrative structure only","Spelling accuracy only","Speech subsystems and neuromuscular performance","Visual acuity only"],
  answer:2,
  explanation:"Dysarthria assessment examines respiration, phonation, resonance, articulation, and prosody in relation to neuromuscular function."
},
{
  id:"ST608",difficulty:"Moderate",topic:"Autism",
  question:"What is an appropriate goal when supporting an autistic child who uses echolalia?",
  options:["Eliminate every repeated phrase regardless of function","Determine what the repeated language communicates and support flexible functional communication","Require eye contact before acknowledging speech","Prevent use of gestures or AAC"],
  answer:1,
  explanation:"Echolalia can serve communicative or regulatory functions; assessment should identify its purpose and build meaningful communication."
},
{
  id:"ST609",difficulty:"Moderate",topic:"Research Literacy",
  question:"What does sensitivity indicate in a screening test?",
  options:["The proportion of healthy individuals correctly identified as negative","The probability that a positive result guarantees disease","The overall percentage of correct results alone","The proportion of individuals with the condition correctly identified as positive"],
  answer:3,
  explanation:"Sensitivity is the true-positive rate among people who have the condition."
},
{
  id:"ST610",difficulty:"Moderate",topic:"Professional Ethics",
  question:"A family requests a copy of a client's clinical records. What should the clinician do first?",
  options:["Follow applicable consent, confidentiality, and record-release procedures","Send all records to any relative who asks","Delete sensitive sections without authorization","Discuss the records publicly to clarify the request"],
  answer:0,
  explanation:"Record disclosure must follow applicable privacy laws, professional rules, and authorization requirements."
},

{
  id:"ST611",difficulty:"Hard",topic:"Dysphagia",
  question:"During VFSS, a patient demonstrates material passing below the vocal folds without an immediate cough. How should this finding be classified?",
  options:["Laryngeal penetration","Residue confined to the valleculae","Aspiration, with an absent or ineffective immediate protective response","Normal pharyngeal clearance"],
  answer:2,
  explanation:"Aspiration is material passing below the vocal folds; absence of a cough does not exclude it."
},
{
  id:"ST612",difficulty:"Hard",topic:"Motor Speech",
  question:"Which combination most strongly favors hypokinetic dysarthria associated with Parkinson disease?",
  options:["Hypernasality with severe flaccid weakness alone","Reduced loudness, monopitch, and short rushes of speech","Inconsistent articulatory groping with disrupted sound sequencing only","Scanning speech with prominent excess and equal stress"],
  answer:1,
  explanation:"Hypokinetic dysarthria commonly features reduced vocal intensity, monopitch, reduced stress, and rapid or short-rush speech."
},
{
  id:"ST613",difficulty:"Hard",topic:"Aphasia",
  question:"A client has nonfluent, effortful speech, relatively preserved comprehension of simple sentences, and impaired repetition. Which profile is most consistent?",
  options:["Wernicke aphasia","Transcortical sensory aphasia","Pure word deafness","Broca aphasia"],
  answer:3,
  explanation:"Broca aphasia typically involves nonfluent speech and impaired repetition, with relatively stronger comprehension of simple material."
},
{
  id:"ST614",difficulty:"Hard",topic:"Research Methods",
  question:"A study reports that an intervention group improved significantly from baseline, but there is no comparison group. What is the main limitation?",
  options:["The improvement cannot confidently be attributed to the intervention because other factors may explain it","Statistical significance proves the intervention caused the improvement","The study automatically has perfect external validity","Baseline measurement makes a comparison group unnecessary"],
  answer:0,
  explanation:"Without an appropriate comparison, maturation, practice effects, spontaneous recovery, and other factors may explain change."
},
{
  id:"ST615",difficulty:"Hard",topic:"Dysphagia",
  question:"A patient with suspected aspiration has a normal bedside swallowing examination. Which conclusion is most appropriate?",
  options:["Aspiration is definitively excluded","All food and liquids are necessarily safe","A bedside examination cannot reliably exclude silent aspiration; consider instrumental assessment when clinically indicated","The patient should immediately begin unrestricted oral intake"],
  answer:2,
  explanation:"A bedside examination cannot directly visualize swallowing physiology and may miss silent aspiration."
},
{
  id:"ST616",difficulty:"Hard",topic:"Phonology",
  question:"A child accurately produces /k/ in isolation but consistently substitutes /t/ for /k/ in words. Which interpretation is most defensible?",
  options:["The child necessarily has childhood apraxia of speech","The pattern may reflect a phonological or context-dependent production difficulty requiring further analysis","The child has confirmed hearing loss","The finding alone proves an anatomical abnormality"],
  answer:1,
  explanation:"Production in isolation does not establish accurate use in connected speech; assess patterns across contexts and tasks."
},
{
  id:"ST617",difficulty:"Hard",topic:"Voice",
  question:"A patient has persistent breathy dysphonia following thyroid surgery. What is the most appropriate priority?",
  options:["Start high-intensity vocal loading without further evaluation","Assume functional dysphonia and avoid medical referral","Treat it as a language disorder","Arrange appropriate laryngeal/medical evaluation and assess voice function"],
  answer:3,
  explanation:"Persistent postoperative breathiness may indicate laryngeal or vocal-fold dysfunction and requires appropriate evaluation."
},
{
  id:"ST618",difficulty:"Hard",topic:"AAC",
  question:"A communication device user frequently abandons the device during group activities. Which response best follows AAC best practice?",
  options:["Assess access, vocabulary, partner support, device availability, and communication demands across settings","Remove the device until independent use improves","Conclude that AAC is unsuitable based on abandonment alone","Require the user to use the device for every utterance regardless of context"],
  answer:0,
  explanation:"AAC success depends on access, relevance, partner behavior, and opportunities for meaningful communication."
},
{
  id:"ST619",difficulty:"Hard",topic:"Language Assessment",
  question:"A bilingual child scores below monolingual norms on an English language test. What is the most appropriate interpretation?",
  options:["The score alone confirms developmental language disorder","Bilingualism itself proves a language impairment","Interpret results alongside both languages, exposure history, dynamic assessment, and functional evidence","Ignore the score and all other language concerns"],
  answer:2,
  explanation:"Assessment should distinguish language difference from disorder using culturally and linguistically appropriate evidence."
},
{
  id:"ST620",difficulty:"Hard",topic:"Fluency",
  question:"A person who stutters reports avoiding job interviews despite moderate observable disfluency. What should treatment planning prioritize?",
  options:["Fluency counts alone, without client input","The person's goals, participation restrictions, emotional impact, and speech-related needs","Eliminating every disfluency before any real-world participation","Avoiding discussion of communication attitudes"],
  answer:1,
  explanation:"Comprehensive fluency care addresses communication participation and personal impact as well as speech behaviors."
},
{
  id:"ST621",difficulty:"Hard",topic:"Motor Speech",
  question:"Which finding most clearly distinguishes a motor planning problem from a motor execution problem, while recognizing that differential diagnosis requires comprehensive assessment?",
  options:["Reduced hearing sensitivity in both ears","Difficulty understanding word meanings only","Weakness and consistently reduced force as the sole finding","Inconsistent sound errors and disrupted articulatory transitions suggest planning difficulty; weakness and impaired tone suggest execution difficulty"],
  answer:3,
  explanation:"Apraxia of speech involves planning/programming, whereas dysarthria reflects impaired neuromuscular execution; overlap requires careful differential assessment."
},
{
  id:"ST622",difficulty:"Hard",topic:"Dysphagia",
  question:"A patient with progressive neurological disease develops prolonged meals, weight loss, and recurrent chest infections. What is the best clinical response?",
  options:["Promptly reassess swallowing, nutrition, respiratory concerns, and need for multidisciplinary/instrumental evaluation","Recommend only smaller plates and wait several months","Assume all symptoms are unrelated to swallowing","Prescribe a fixed liquid thickness without evaluation"],
  answer:0,
  explanation:"Weight loss and recurrent chest infections are concerning and warrant timely, coordinated clinical reassessment."
},
{
  id:"ST623",difficulty:"Hard",topic:"Evidence-Based Practice",
  question:"A clinician finds a randomized trial supporting a therapy, but the participants differ substantially from the current client. What is the best approach?",
  options:["Apply the protocol without modification because randomization overrides all clinical differences","Reject all research evidence immediately","Integrate the evidence with clinical expertise, client values, and the client's specific context","Use only personal preference and disregard outcomes"],
  answer:2,
  explanation:"Evidence-based practice integrates research evidence, clinical expertise, and client values and circumstances."
},
{
  id:"ST624",difficulty:"Hard",topic:"Cleft Palate",
  question:"A child with repaired cleft palate has persistent nasal emission and compensatory glottal stops. What is the most appropriate management principle?",
  options:["Treat every error exclusively with nonspeech blowing exercises","Assess velopharyngeal function and target learned compensatory errors with appropriate speech therapy and team referral","Assume surgery is always required before any speech intervention","Focus only on expressive vocabulary"],
  answer:1,
  explanation:"Structural velopharyngeal problems and learned compensatory productions require differentiated assessment and coordinated management."
},
{
  id:"ST625",difficulty:"Hard",topic:"Clinical Measurement",
  question:"A client's test score improves by three points, but the measure's standard error of measurement is four points. What is the most cautious interpretation?",
  options:["The client has unquestionably made clinically meaningful change","The treatment is proven effective","The score must be discarded as invalid","The observed change may fall within measurement error and should be interpreted with other evidence"],
  answer:3,
  explanation:"A small score change relative to measurement error may not reflect a reliable change in underlying ability."
},
{
  id:"ST626",difficulty:"Hard",topic:"Autism",
  question:"A minimally speaking autistic child has limited spoken responses but communicates effectively through gestures and a tablet. How should progress be evaluated?",
  options:["Measure functional communication across modes, partners, and environments, including autonomy and participation","Count spoken words only","Exclude gestures and AAC from communication data","Require speech to replace AAC before considering progress"],
  answer:0,
  explanation:"Communication outcomes should recognize all effective modalities and focus on meaningful participation."
},
{
  id:"ST627",difficulty:"Hard",topic:"Aphasia",
  question:"A person with aphasia has difficulty following complex spoken directions but performs better when information is written and paired with gestures. What is the best strategy?",
  options:["Increase sentence complexity without support","Avoid all multimodal communication","Use individualized multimodal supports and verify comprehension","Assume written information will work equally well for every person with aphasia"],
  answer:2,
  explanation:"Written keywords, gestures, and other supports can improve comprehension when tailored to the individual's strengths."
},
{
  id:"ST628",difficulty:"Hard",topic:"Voice",
  question:"A singer reports pitch breaks and reduced upper range despite little conversational hoarseness. What is the best assessment approach?",
  options:["Assess conversational speech alone and rule out voice disorder","Evaluate singing and speaking demands, voice quality, range, and appropriate laryngeal findings","Diagnose muscle tension dysphonia from the symptom alone","Prescribe maximal-effort singing exercises before examination"],
  answer:1,
  explanation:"Voice difficulties may be task-specific; assessment should consider singing demands and relevant medical/laryngeal evaluation."
},
{
  id:"ST629",difficulty:"Hard",topic:"Professional Ethics",
  question:"A clinician suspects that a caregiver is misinterpreting a client's AAC message and answering on the client's behalf. What is the best initial response?",
  options:["Publicly accuse the caregiver of misconduct","Remove the AAC system to prevent confusion","Assume the caregiver's interpretation is always correct","Respectfully verify the client's intended message, support communication autonomy, and address partner strategies"],
  answer:3,
  explanation:"The clinician should support the client's agency, verify messages respectfully, and coach communication partners appropriately."
},
{
  id:"ST630",difficulty:"Hard",topic:"Clinical Reasoning",
  question:"A child shows good accuracy on practiced speech words but poor generalization in conversation. Which next step is most appropriate?",
  options:["Analyze generalization barriers and systematically practice targets across varied words, contexts, and communicative tasks","Discontinue treatment because structured practice has no value","Increase repetitions of the same words exclusively","Conclude that the child has a language disorder without further assessment"],
  answer:0,
  explanation:"Generalization can be supported by varied practice, contextual progression, and monitoring performance in spontaneous communication."
},

{
  id:"ST631",difficulty:"Easy",topic:"Anatomy",
  question:"Which articulator is most involved in producing /t/?",
  options:["Vocal folds","Tongue tip or blade","Lower lip","Soft palate only"],
  answer:1,
  explanation:"The tongue tip or blade contacts the alveolar ridge to produce /t/."
},
{
  id:"ST632",difficulty:"Easy",topic:"Language Development",
  question:"What is joint attention?",
  options:["Repeating a word several times","Following a written instruction","Naming objects without looking at another person","Sharing attention with another person toward an object or event"],
  answer:3,
  explanation:"Joint attention involves coordinating attention between another person and an object or event."
},
{
  id:"ST633",difficulty:"Easy",topic:"Speech Sounds",
  question:"Which sound is a voiceless labiodental fricative?",
  options:["/f/","/b/","/m/","/d/"],
  answer:0,
  explanation:"/f/ is produced by airflow between the upper teeth and lower lip without vocal-fold vibration."
},
{
  id:"ST634",difficulty:"Easy",topic:"Voice",
  question:"Which term refers to the perceived highness or lowness of a voice?",
  options:["Resonance","Intensity","Pitch","Articulation"],
  answer:2,
  explanation:"Pitch is the perceptual correlate of fundamental frequency."
},
{
  id:"ST635",difficulty:"Easy",topic:"Fluency",
  question:"Which behavior is commonly associated with stuttering?",
  options:["Only difficulty understanding words","Sound or syllable repetitions","Reduced hearing sensitivity","Difficulty swallowing liquids"],
  answer:1,
  explanation:"Sound and syllable repetitions are common forms of stuttering-like disfluency."
},
{
  id:"ST636",difficulty:"Easy",topic:"Aphasia",
  question:"Which activity is directly relevant to assessing word retrieval?",
  options:["Measuring oxygen saturation","Testing shoulder strength","Measuring visual acuity","Asking the client to name pictured objects"],
  answer:3,
  explanation:"Picture naming can help assess lexical retrieval, although results must be interpreted in context."
},
{
  id:"ST637",difficulty:"Easy",topic:"Dysphagia",
  question:"Which professional may collaborate with a speech-language pathologist on nutrition concerns in dysphagia?",
  options:["Registered dietitian","Architect","Optician","Civil engineer"],
  answer:0,
  explanation:"Dietitians can support nutritional adequacy and dietary planning within a multidisciplinary team."
},
{
  id:"ST638",difficulty:"Easy",topic:"AAC",
  question:"Which is an example of unaided AAC?",
  options:["Speech-generating tablet","Printed communication book","Manual sign or gesture","Voice-output switch"],
  answer:2,
  explanation:"Unaided AAC uses the person's body, such as signs, gestures, or facial expressions."
},
{
  id:"ST639",difficulty:"Easy",topic:"Hearing",
  question:"What does an audiogram display?",
  options:["Language comprehension by age","Hearing thresholds across frequencies","Speech intelligibility in conversation only","Swallowing speed"],
  answer:1,
  explanation:"An audiogram plots hearing thresholds across sound frequencies."
},
{
  id:"ST640",difficulty:"Easy",topic:"Articulation",
  question:"Which sound is a nasal consonant?",
  options:["/s/","/k/","/f/","/m/"],
  answer:3,
  explanation:"/m/ is a nasal consonant produced with airflow through the nose."
},
{
  id:"ST641",difficulty:"Easy",topic:"Assessment",
  question:"Why should hearing status be considered when evaluating a child's speech delay?",
  options:["Hearing differences can affect access to speech sounds and language learning","Hearing determines every aspect of intelligence","A hearing test directly diagnoses all language disorders","Hearing status is relevant only to adults"],
  answer:0,
  explanation:"Reduced hearing access can affect speech perception and language development."
},
{
  id:"ST642",difficulty:"Easy",topic:"Language",
  question:"Which word is a preposition?",
  options:["Jump","Beautiful","Under","Quickly"],
  answer:2,
  explanation:"Under expresses a spatial or relational meaning and functions as a preposition."
},
{
  id:"ST643",difficulty:"Easy",topic:"Voice",
  question:"What is resonance in speech?",
  options:["The speed of reading","The shaping of sound by vocal tract cavities","The number of words in a sentence","The ability to hear high frequencies"],
  answer:1,
  explanation:"Resonance reflects how sound is modified by the vocal tract."
},
{
  id:"ST644",difficulty:"Easy",topic:"Motor Speech",
  question:"Which disorder involves impaired neuromuscular control of speech?",
  options:["Dyslexia","Pure language delay","Auditory processing difficulty","Dysarthria"],
  answer:3,
  explanation:"Dysarthria results from impaired neuromuscular control of speech production."
},
{
  id:"ST645",difficulty:"Easy",topic:"Professional Practice",
  question:"What should a clinician do if a client does not understand the explanation of a proposed procedure?",
  options:["Explain it in accessible language and check understanding","Proceed without clarification","Ask another client to provide consent","Assume silence means full understanding"],
  answer:0,
  explanation:"Consent should be informed and based on an understandable explanation."
},
{
  id:"ST646",difficulty:"Easy",topic:"Phonology",
  question:"What is a consonant cluster?",
  options:["Two vowels in separate words","A repeated sentence","Two or more adjacent consonants within a syllable","A pause between sentences"],
  answer:2,
  explanation:"A consonant cluster contains adjacent consonants without an intervening vowel."
},
{
  id:"ST647",difficulty:"Easy",topic:"Autism",
  question:"Which approach can help a child understand an upcoming activity?",
  options:["Changing every instruction unexpectedly","Using a visual schedule when helpful","Removing all predictable routines","Giving multiple rapid instructions without support"],
  answer:1,
  explanation:"Visual schedules can make routines and transitions more understandable for some children."
},
{
  id:"ST648",difficulty:"Easy",topic:"Clinical Documentation",
  question:"Which item is most suitable for a measurable therapy goal?",
  options:["The client will become excellent at communication","The client will try harder","The client will improve considerably someday","The client will produce the target in 8 of 10 opportunities across three sessions"],
  answer:3,
  explanation:"A measurable goal specifies observable performance and a criterion."
},
{
  id:"ST649",difficulty:"Easy",topic:"Language",
  question:"Which skill is part of receptive language?",
  options:["Understanding spoken directions","Producing a clear /r/ sound","Increasing vocal loudness","Coordinating chewing movements"],
  answer:0,
  explanation:"Receptive language involves understanding spoken, signed, or written language."
},
{
  id:"ST650",difficulty:"Easy",topic:"Anatomy",
  question:"Which structure is the primary movable muscular organ used to shape many speech sounds?",
  options:["Nasal septum","Hard palate","Tongue","Hyoid bone alone"],
  answer:2,
  explanation:"The tongue plays a major role in shaping the oral cavity for speech."
},
{
  id:"ST651",difficulty:"Easy",topic:"Voice",
  question:"Which behavior may reduce unnecessary vocal strain?",
  options:["Shouting over background noise","Using amplification when appropriate","Speaking loudly through persistent pain","Competing with noise by increasing effort continuously"],
  answer:1,
  explanation:"Amplification can reduce the need to raise vocal intensity in noisy settings."
},
{
  id:"ST652",difficulty:"Easy",topic:"Fluency",
  question:"What is a secondary behavior in stuttering?",
  options:["Correct use of grammar","Understanding a story","Naming a picture","An accompanying behavior such as eye blinking or body tension"],
  answer:3,
  explanation:"Secondary behaviors may occur alongside stuttering, though they vary across individuals."
},
{
  id:"ST653",difficulty:"Easy",topic:"AAC",
  question:"What is the primary purpose of an AAC system?",
  options:["Support effective communication","Replace every social interaction with testing","Prevent the development of spoken language","Measure hearing thresholds"],
  answer:0,
  explanation:"AAC provides or supplements communication according to an individual's needs."
},
{
  id:"ST654",difficulty:"Easy",topic:"Speech Assessment",
  question:"What does speech intelligibility describe?",
  options:["How loud a person speaks","How long a person can sustain a vowel","How much of the speech message a listener understands","How accurately a person remembers pictures"],
  answer:2,
  explanation:"Intelligibility concerns how well a listener can understand the speaker's speech."
},
{
  id:"ST655",difficulty:"Easy",topic:"Dysphagia",
  question:"Which symptom during eating should be reported for clinical evaluation?",
  options:["Enjoying a preferred food","Repeated coughing or choking","Requesting a smaller spoon","Taking a brief conversational pause"],
  answer:1,
  explanation:"Repeated coughing or choking during meals can indicate a swallowing or airway-protection concern."
},
{
  id:"ST656",difficulty:"Easy",topic:"Language Development",
  question:"Which activity best encourages early turn-taking?",
  options:["Asking a toddler to complete a written test","Delivering long lectures without pauses","Correcting every vocalization","Taking turns making sounds during a playful interaction"],
  answer:3,
  explanation:"Responsive vocal turn-taking supports early social communication."
},
{
  id:"ST657",difficulty:"Easy",topic:"Anatomy",
  question:"Which structure primarily separates the two nasal passages?",
  options:["Nasal septum","Epiglottis","Tongue tip","Vocal ligament"],
  answer:0,
  explanation:"The nasal septum divides the nasal cavity into right and left passages."
},
{
  id:"ST658",difficulty:"Easy",topic:"Professional Practice",
  question:"What is confidentiality?",
  options:["Sharing all case details with colleagues without limits","Keeping all records inaccessible even to authorized care providers","Protecting private information and disclosing it only as appropriately authorized or required","Discussing client details in public without names"],
  answer:2,
  explanation:"Confidentiality requires protecting private information while following applicable legal and professional exceptions."
},
{
  id:"ST659",difficulty:"Easy",topic:"Articulation",
  question:"Which sound is produced by bringing both lips together?",
  options:["/s/","/p/","/l/","/θ/"],
  answer:1,
  explanation:"/p/ is a bilabial stop made by closing and releasing the lips."
},
{
  id:"ST660",difficulty:"Easy",topic:"Language",
  question:"Which is an example of expressive language?",
  options:["Pointing after hearing 'Where is the cup?'","Looking toward a sound","Following the instruction 'sit down'","Telling someone what happened at school"],
  answer:3,
  explanation:"Expressive language involves conveying thoughts and information through language."
},
{
  id:"ST661",difficulty:"Easy",topic:"Assessment",
  question:"Why should assessment results be interpreted alongside observations and history?",
  options:["No single score captures every aspect of communication","Standardized scores are always incorrect","Observations eliminate the need for professional judgment","History alone guarantees a diagnosis"],
  answer:0,
  explanation:"Multiple sources of evidence support more complete clinical interpretation."
},
{
  id:"ST662",difficulty:"Easy",topic:"Hearing",
  question:"Which unit is commonly used to report sound frequency?",
  options:["Liters","Centimeters","Hertz","Kilograms"],
  answer:2,
  explanation:"Hertz measures cycles per second and is used to describe sound frequency."
},
{
  id:"ST663",difficulty:"Easy",topic:"Language",
  question:"Which word is an adjective in 'The small dog barked'?",
  options:["Dog","Small","Barked","The"],
  answer:1,
  explanation:"Small describes the noun dog and functions as an adjective."
},
{
  id:"ST664",difficulty:"Easy",topic:"Motor Speech",
  question:"Which speech feature may be affected in dysarthria?",
  options:["Handwriting only","Visual recognition only","Color discrimination only","Articulation and voice quality"],
  answer:3,
  explanation:"Dysarthria may affect articulation, phonation, resonance, respiration, and prosody."
},
{
  id:"ST665",difficulty:"Easy",topic:"Clinical Goals",
  question:"Which goal is most functional for a client with communication difficulties?",
  options:["The client will request preferred items using an accessible communication method in daily routines","The client will complete worksheets only","The client will sit silently for the entire session","The client will avoid unfamiliar communication partners"],
  answer:0,
  explanation:"Functional goals focus on meaningful communication in everyday situations."
},

{
  id:"ST666",difficulty:"Moderate",topic:"Language Assessment",
  question:"A child uses appropriate vocabulary but struggles to follow directions containing 'before' and 'after.' Which area needs closer assessment?",
  options:["Vocal intensity","Oral motor strength alone","Understanding temporal concepts and complex language","Pure-tone thresholds only"],
  answer:2,
  explanation:"Before and after express temporal relationships and may increase receptive-language demands."
},
{
  id:"ST667",difficulty:"Moderate",topic:"Aphasia",
  question:"A client speaks in short, effortful phrases but can follow simple commands. Which assessment approach is most useful?",
  options:["Evaluate articulation only","Assess expressive language, comprehension, repetition, naming, reading, and writing","Measure swallowing duration only","Use a voice screening as the sole assessment"],
  answer:1,
  explanation:"Aphasia assessment examines multiple language modalities and should characterize the individual's strengths and needs."
},
{
  id:"ST668",difficulty:"Moderate",topic:"Phonology",
  question:"A child produces 'poon' for 'spoon.' Which process is most likely?",
  options:["Backing","Final consonant deletion","Gliding","Cluster reduction"],
  answer:3,
  explanation:"The child omits /s/ from the initial /sp/ cluster."
},
{
  id:"ST669",difficulty:"Moderate",topic:"Voice",
  question:"Which measure reflects the range between the lowest and highest producible fundamental frequencies?",
  options:["Pitch range","Speech intelligibility","Nasalance alone","Maximum chewing rate"],
  answer:0,
  explanation:"Pitch range describes the span of fundamental frequencies a person can produce."
},
{
  id:"ST670",difficulty:"Moderate",topic:"Fluency",
  question:"A school-age child avoids reading aloud because of stuttering. What should the clinician do?",
  options:["Force public reading without preparation","Ignore the child's feelings and count repetitions only","Assess participation and attitudes, collaborate with the child, and develop individualized goals","Tell peers to finish the child's sentences"],
  answer:2,
  explanation:"Fluency care should address communication participation and the child's experience as well as speech behaviors."
},
{
  id:"ST671",difficulty:"Moderate",topic:"Dysphagia",
  question:"Why might FEES be useful for a patient who cannot easily be transported to radiology?",
  options:["It measures language comprehension directly","It can be performed at bedside by a trained team and visualizes pharyngeal/laryngeal structures","It directly measures esophageal motility throughout its length","It eliminates the need for clinical judgment"],
  answer:1,
  explanation:"FEES is a portable endoscopic assessment that can be conducted at bedside when appropriate."
},
{
  id:"ST672",difficulty:"Moderate",topic:"AAC",
  question:"A client can select symbols accurately but cannot reliably reach a tablet screen. What should be explored?",
  options:["Removing all communication supports","Switching permanently to spoken language","Reducing vocabulary to one word","Alternative access methods such as keyguards, switches, or partner-assisted scanning"],
  answer:3,
  explanation:"AAC access must be matched to the person's motor, sensory, and communication abilities."
},
{
  id:"ST673",difficulty:"Moderate",topic:"Motor Speech",
  question:"Which feature is more suggestive of flaccid dysarthria?",
  options:["Weakness and possible breathy voice related to lower motor neuron involvement","Consistent excess and equal stress alone","Fluent speech with impaired semantic comprehension","Sound repetitions linked only to stuttering"],
  answer:0,
  explanation:"Flaccid dysarthria can involve weakness, reduced tone, breathiness, and other signs of lower motor neuron dysfunction."
},
{
  id:"ST674",difficulty:"Moderate",topic:"Hearing",
  question:"A child with hearing loss misses word endings in noisy classrooms. Which support is most directly relevant?",
  options:["Increasing the number of simultaneous speakers","Moving the child farther from the teacher","Improving listening conditions and considering remote microphone technology","Reducing all classroom visual supports"],
  answer:2,
  explanation:"Reducing noise and improving the signal-to-noise ratio can improve access to speech."
},
{
  id:"ST675",difficulty:"Moderate",topic:"Language Intervention",
  question:"Which strategy is an example of focused stimulation?",
  options:["Asking a child to memorize a grammar textbook","Providing many meaningful models of a target form without requiring every production","Correcting each utterance without providing a model","Avoiding the target structure in conversation"],
  answer:1,
  explanation:"Focused stimulation provides repeated, meaningful exposure to a target language form."
},
{
  id:"ST676",difficulty:"Moderate",topic:"Autism",
  question:"A child becomes distressed during sudden transitions. Which communication support may help?",
  options:["Removing predictable cues","Introducing several unexpected changes at once","Withholding all preferred activities","Using individualized transition warnings and visual cues"],
  answer:3,
  explanation:"Predictable warnings and visual cues may support understanding and reduce uncertainty."
},
{
  id:"ST677",difficulty:"Moderate",topic:"Clinical Reasoning",
  question:"A client meets a structured drill goal but still struggles during conversations. What should therapy include?",
  options:["Practice across communicative contexts and measure generalization","Only increase drill repetitions indefinitely","Discontinue functional communication sampling","Assume the problem has resolved"],
  answer:0,
  explanation:"Generalization should be explicitly supported and monitored outside structured practice."
},
{
  id:"ST678",difficulty:"Moderate",topic:"Cleft Palate",
  question:"Which error is commonly considered a compensatory articulation pattern in cleft-related speech?",
  options:["Age-appropriate plural marking","Typical vowel variation","Glottal stop substitution for an oral pressure consonant","Normal conversational pausing"],
  answer:2,
  explanation:"A glottal stop may be learned as a compensatory placement for an oral pressure consonant."
},
{
  id:"ST679",difficulty:"Moderate",topic:"Research Literacy",
  question:"What does specificity measure in a diagnostic test?",
  options:["The proportion of affected people who test positive","The proportion of unaffected people correctly identified as negative","The probability that a treatment will work for every client","The total number of people recruited"],
  answer:1,
  explanation:"Specificity is the true-negative rate among people who do not have the condition."
},
{
  id:"ST680",difficulty:"Moderate",topic:"Voice",
  question:"A client experiences vocal fatigue after prolonged speaking. Which additional information is particularly useful?",
  options:["Favorite color","Dominant writing hand only","Preferred reading genre only","Vocal demands, hydration habits, symptom duration, and relevant medical history"],
  answer:3,
  explanation:"History helps identify vocal demands, contributing factors, and indications for referral."
},
{
  id:"ST681",difficulty:"Moderate",topic:"Aphasia",
  question:"A client understands single words but struggles with lengthy, syntactically complex instructions. What modification may improve communication?",
  options:["Use shorter phrases, emphasize key information, and verify comprehension","Speak much faster","Add unnecessary grammatical complexity","Avoid checking understanding"],
  answer:0,
  explanation:"Simplifying linguistic load and checking comprehension can improve access to spoken information."
},
{
  id:"ST682",difficulty:"Moderate",topic:"Articulation",
  question:"Which technique is most directly related to shaping /s/ production?",
  options:["Encouraging nasal airflow for every trial","Producing the sound by closing both lips","Establishing a narrow central oral airflow groove with appropriate tongue placement","Using vocal-fold vibration as the only cue"],
  answer:2,
  explanation:"/s/ requires a narrow oral constriction and directed airflow, with tongue placement adjusted to the individual."
},
{
  id:"ST683",difficulty:"Moderate",topic:"Dysphagia",
  question:"Why is oral hygiene important for a person with dysphagia?",
  options:["It guarantees that aspiration cannot occur","It can reduce oral bacterial burden, which is relevant if material is aspirated","It directly restores normal swallowing reflexes","It replaces assessment of swallowing safety"],
  answer:1,
  explanation:"Good oral hygiene can reduce pathogenic oral bacteria and is an important part of dysphagia care."
},
{
  id:"ST684",difficulty:"Moderate",topic:"Professional Ethics",
  question:"A clinician is asked to provide treatment outside their competence. What is the most appropriate action?",
  options:["Accept and proceed without supervision","Conceal the lack of relevant experience","Use an unverified technique without assessment","Seek appropriate supervision, training, consultation, or referral"],
  answer:3,
  explanation:"Clinicians should practice within their competence and obtain support or refer when necessary."
},
{
  id:"ST685",difficulty:"Moderate",topic:"Language Development",
  question:"A child retells a story but omits the problem and resolution. Which skill should be targeted?",
  options:["Narrative macrostructure","Vocal intensity","Auditory threshold measurement","Oral diadochokinetic rate only"],
  answer:0,
  explanation:"Narrative macrostructure includes elements such as setting, initiating problem, attempts, and resolution."
},
{
  id:"ST686",difficulty:"Moderate",topic:"Motor Speech",
  question:"Which task can help assess alternating motion rate?",
  options:["Naming ten pictured objects","Following a two-step direction","Repeating 'pa-pa-pa' as rapidly and regularly as possible","Reading a paragraph silently"],
  answer:2,
  explanation:"Alternating motion rate tasks assess repeated production of a single syllable sequence."
},
{
  id:"ST687",difficulty:"Moderate",topic:"AAC",
  question:"Why should AAC vocabulary include personally meaningful words as well as core words?",
  options:["Personal words are useful only for testing","They support specific interests, relationships, and everyday messages","They prevent spontaneous communication","They should be removed once a device is introduced"],
  answer:1,
  explanation:"A balanced vocabulary supports both flexible sentence generation and personally relevant communication."
},
{
  id:"ST688",difficulty:"Moderate",topic:"Hearing",
  question:"What is the main purpose of tympanometry?",
  options:["To measure expressive vocabulary","To assess sentence formulation","To quantify conversational intelligibility","To assess middle-ear function through changes in acoustic admittance"],
  answer:3,
  explanation:"Tympanometry provides information about middle-ear function and tympanic membrane mobility."
},
{
  id:"ST689",difficulty:"Moderate",topic:"Assessment",
  question:"A standardized test has not been validated for a client's language background. What is the most defensible approach?",
  options:["Interpret scores cautiously and supplement with appropriate alternative assessment methods","Treat the standard score as fully valid without qualification","Diagnose impairment from the score alone","Exclude the client's language background from interpretation"],
  answer:0,
  explanation:"Validity and normative limitations must be considered; multiple appropriate evidence sources should inform conclusions."
},
{
  id:"ST690",difficulty:"Moderate",topic:"Voice",
  question:"Which feature is characteristic of hypernasality?",
  options:["A consistently low fundamental frequency","Reduced oral airflow caused only by a blocked nose","Excessive nasal resonance on vowels and other voiced oral sounds","A complete absence of vocal-fold vibration in all speech"],
  answer:2,
  explanation:"Hypernasality reflects excessive nasal resonance, often associated with inadequate velopharyngeal closure."
},
{
  id:"ST691",difficulty:"Moderate",topic:"Fluency",
  question:"What is the purpose of voluntary stuttering in some fluency treatment approaches?",
  options:["To prove that a client can eliminate every disfluency","To practice a controlled stuttering-like behavior and potentially reduce fear or avoidance","To diagnose hearing loss","To strengthen the tongue through maximal force"],
  answer:1,
  explanation:"In suitable approaches, voluntary stuttering may support desensitization and greater control over speaking experiences."
},
{
  id:"ST692",difficulty:"Moderate",topic:"Clinical Documentation",
  question:"Which documentation best supports continuity of care?",
  options:["A vague note stating 'session completed'","A personal opinion about the client's attitude","A note with no date or intervention details","A dated record of targets, performance, cues, response, and plan"],
  answer:3,
  explanation:"Clear, objective documentation helps other providers understand treatment and progress."
},
{
  id:"ST693",difficulty:"Moderate",topic:"Dysphagia",
  question:"A patient reports food sticking in the chest several seconds after swallowing. What should the clinician consider?",
  options:["Possible esophageal involvement and appropriate medical referral","Assuming an isolated articulation disorder","Immediately diagnosing oral apraxia","Ignoring the symptom if speech is clear"],
  answer:0,
  explanation:"A sensation of food sticking in the chest may indicate esophageal dysphagia and warrants appropriate medical evaluation."
},
{
  id:"ST694",difficulty:"Moderate",topic:"Language Intervention",
  question:"A child rarely initiates communication during play. Which strategy may encourage initiation?",
  options:["Ask a continuous stream of test questions","Keep all desired items permanently inaccessible","Create meaningful opportunities to request, comment, and share attention while responding supportively","Require every initiation to use a complete sentence"],
  answer:2,
  explanation:"Responsive play and natural communication opportunities can encourage spontaneous initiation."
},
{
  id:"ST695",difficulty:"Moderate",topic:"Clinical Reasoning",
  question:"A client's performance varies considerably across sessions. What should the clinician do?",
  options:["Average the results and ignore contextual factors","Examine fatigue, environment, task demands, supports, and measurement reliability","Assume the client is intentionally inconsistent","Change the diagnosis after every session"],
  answer:1,
  explanation:"Variability may reflect context, fatigue, task difficulty, or measurement factors and should be explored systematically."
},

{
  id:"ST696",difficulty:"Hard",topic:"Dysphagia",
  question:"A VFSS shows aspiration of thin liquid during the swallow with reduced laryngeal vestibule closure. Which interpretation is most appropriate?",
  options:["Aspiration must have occurred before the swallow because liquid was thin","The finding proves that thickened liquids are always safest","The client has no airway-protection difficulty if no cough occurs","The observed physiology may explain aspiration during the swallow; management should be individualized to the full assessment"],
  answer:3,
  explanation:"Instrumental findings guide individualized management; a single observation does not determine the safest plan in every context."
},
{
  id:"ST697",difficulty:"Hard",topic:"Motor Speech",
  question:"A patient demonstrates distorted substitutions, disrupted transitions, and visible articulatory groping, with relatively preserved muscle strength. Which diagnosis should be considered?",
  options:["Apraxia of speech","Flaccid dysarthria","Isolated receptive aphasia","Conductive hearing loss"],
  answer:0,
  explanation:"Distorted errors, disrupted transitions, and groping may support apraxia of speech, while differential diagnosis remains necessary."
},
{
  id:"ST698",difficulty:"Hard",topic:"Aphasia",
  question:"A person with aphasia performs poorly on auditory comprehension tasks but improves when written keywords and pictures are provided. What does this suggest for intervention?",
  options:["The person cannot benefit from language therapy","Written support should permanently replace all spoken communication","Multimodal supports may improve access and should be tested systematically","The person necessarily has pure alexia"],
  answer:2,
  explanation:"Individualized multimodal communication may support comprehension and participation."
},
{
  id:"ST699",difficulty:"Hard",topic:"Research Methods",
  question:"A trial reports a statistically significant treatment effect, but the confidence interval is wide. What is the best interpretation?",
  options:["The effect is known with high precision","The estimate may be imprecise despite statistical significance","The result proves identical benefit for all participants","The confidence interval has no bearing on interpretation"],
  answer:1,
  explanation:"A wide confidence interval indicates uncertainty about the magnitude of the estimated effect."
},
{
  id:"ST700",difficulty:"Hard",topic:"Voice",
  question:"A patient has persistent dysphonia and has never undergone laryngeal examination. What is the most appropriate principle before initiating voice treatment?",
  options:["Assume the problem is behavioral","Use maximum-effort phonation immediately","Treat every case with the same exercise protocol","Arrange appropriate medical/laryngeal evaluation when indicated and base treatment on the findings"],
  answer:3,
  explanation:"Persistent voice symptoms may have underlying pathology; appropriate evaluation informs safe management."
},
{
  id:"ST701",difficulty:"Hard",topic:"AAC",
  question:"A person uses a communication device effectively at home but rarely at school. Which assessment is most informative?",
  options:["Compare access, partner expectations, vocabulary, device availability, and opportunities across environments","Conclude that the device is ineffective in every setting","Reduce vocabulary to basic requests without consultation","Require the family to use only spoken language"],
  answer:0,
  explanation:"AAC performance depends on environmental access, communication partners, vocabulary, and real opportunities."
},
{
  id:"ST702",difficulty:"Hard",topic:"Language Assessment",
  question:"A bilingual child demonstrates weaknesses in similar language-learning concepts across both languages despite adequate exposure. What is the most appropriate next step?",
  options:["Diagnose a disorder from bilingual status alone","Ignore functional communication because two languages are used","Integrate cross-language evidence, history, dynamic assessment, and functional impact","Assess only the less familiar language and assume the result applies to both"],
  answer:2,
  explanation:"A comprehensive bilingual assessment considers skills and learning across languages, exposure, and functional impact."
},
{
  id:"ST703",difficulty:"Hard",topic:"Dysphagia",
  question:"A patient has recurrent respiratory infections and suspected silent aspiration, but bedside observations are inconclusive. Which approach is most appropriate?",
  options:["Use absence of coughing as proof of safety","Consider instrumental swallowing assessment, such as VFSS or FEES, when clinically appropriate","Prescribe a permanent feeding tube without multidisciplinary review","Increase thin-liquid intake to test the airway"],
  answer:1,
  explanation:"Instrumental assessment may be needed when silent aspiration is suspected and bedside findings are inconclusive."
},
{
  id:"ST704",difficulty:"Hard",topic:"Fluency",
  question:"A teenager who stutters reports severe social anxiety but only occasional observable disfluency during a brief clinic sample. What should the assessment include?",
  options:["Only count repetitions in the clinic","Conclude there is no meaningful impact","Require the teenager to speak publicly before discussing concerns","Explore communication situations, avoidance, self-report, and participation beyond the brief sample"],
  answer:3,
  explanation:"A brief sample may not represent the person's lived impact; assessment should include self-report and real-world participation."
},
{
  id:"ST705",difficulty:"Hard",topic:"Phonology",
  question:"A child produces a target consonant accurately in imitation but not in spontaneous speech. What is the best interpretation?",
  options:["The sound may be stimulable, but generalization and underlying phonological patterns need further assessment","The child has definitively mastered the sound","The child necessarily has an oral structural anomaly","Imitation performance rules out a speech sound disorder"],
  answer:0,
  explanation:"Stimulability during imitation does not guarantee spontaneous or generalized production."
},
{
  id:"ST706",difficulty:"Hard",topic:"Motor Speech",
  question:"Which profile most strongly suggests ataxic dysarthria?",
  options:["Consistent weak, breathy speech with clear lower motor neuron signs only","Fluent speech with severe word comprehension difficulty","Irregular articulatory breakdowns and excess/equal stress","Silent reading difficulty without speech changes"],
  answer:2,
  explanation:"Ataxic dysarthria commonly features irregular timing, articulatory imprecision, and excess/equal stress."
},
{
  id:"ST707",difficulty:"Hard",topic:"Clinical Outcomes",
  question:"A client improves on a clinic-based naming test but remains unable to communicate effectively at work. Which outcome measure should be added?",
  options:["A measure of visual acuity","A functional communication measure tied to workplace participation","A test of lower-limb reflexes only","A second naming test with identical items only"],
  answer:1,
  explanation:"Functional outcome measures capture meaningful participation beyond impairment-level test performance."
},
{
  id:"ST708",difficulty:"Hard",topic:"Cleft Palate",
  question:"A child has persistent hypernasality despite correct oral placement of pressure consonants. What should be investigated?",
  options:["Only expressive vocabulary size","Only spelling ability","Whether the child needs more repetition of already correct placement","Possible structural or functional velopharyngeal insufficiency/dysfunction"],
  answer:3,
  explanation:"Persistent hypernasality may reflect velopharyngeal dysfunction requiring specialized assessment and team management."
},
{
  id:"ST709",difficulty:"Hard",topic:"Research Literacy",
  question:"A diagnostic test has high sensitivity but modest specificity. What is the likely implication?",
  options:["It may identify many people with the condition but also yield more false positives","It has no false negatives or false positives","A positive result always confirms the diagnosis","It cannot be used for screening under any circumstances"],
  answer:0,
  explanation:"High sensitivity reduces false negatives, while modest specificity means more unaffected people may screen positive."
},
{
  id:"ST710",difficulty:"Hard",topic:"Professional Ethics",
  question:"A family asks a clinician to guarantee that a child will develop age-typical speech after treatment. What is the most appropriate response?",
  options:["Guarantee the outcome to improve family confidence","Avoid discussing uncertainty altogether","Explain likely benefits, limitations, uncertainty, and measurable goals honestly","Promise complete recovery if attendance is perfect"],
  answer:2,
  explanation:"Ethical counseling provides realistic information and avoids guaranteeing outcomes that cannot be assured."
},
{
  id:"ST711",difficulty:"Hard",topic:"Dysphagia",
  question:"A patient with dysphagia has reduced oral intake after being placed on a restrictive diet. What should the team review?",
  options:["Only speech intelligibility","Hydration, nutrition, patient preferences, swallowing findings, and the least restrictive safe plan","Whether the patient can memorize food names","Whether oral intake should be stopped in every case"],
  answer:1,
  explanation:"Diet recommendations should balance swallowing findings with hydration, nutrition, preferences, and quality of life."
},
{
  id:"ST712",difficulty:"Hard",topic:"Aphasia",
  question:"A person with nonfluent aphasia produces short phrases and has impaired grammatical sentence production. Which treatment target may be appropriate?",
  options:["Hearing thresholds only","Respiratory endurance without communication goals","Handwriting speed alone","Personally relevant sentence production and functional communication using appropriate supports"],
  answer:3,
  explanation:"Intervention should address meaningful language production and everyday communication needs."
},
{
  id:"ST713",difficulty:"Hard",topic:"Voice",
  question:"A client has vocal fold nodules confirmed by an appropriate specialist. Which plan is most consistent with coordinated care?",
  options:["Address vocal behaviors and efficiency with individualized therapy while coordinating with medical recommendations","Prescribe absolute voice rest indefinitely for every client","Ignore the laryngeal findings and treat vocabulary","Recommend shouting to increase vocal fold strength"],
  answer:0,
  explanation:"Management may include individualized voice therapy and coordination with the laryngology team."
},
{
  id:"ST714",difficulty:"Hard",topic:"Autism",
  question:"An autistic client communicates distress by leaving a noisy room. What should the clinician consider before targeting this behavior?",
  options:["Treat all leaving as deliberate noncompliance","Prevent all attempts to leave regardless of safety","Assess sensory demands, communication function, autonomy, and available environmental supports","Require speech as the only acceptable way to request a break"],
  answer:2,
  explanation:"Behavior should be understood in context, with communication access and sensory needs considered."
},
{
  id:"ST715",difficulty:"Hard",topic:"Clinical Measurement",
  question:"A therapy study shows a large pre-post improvement but no blinded outcome rating. Which concern is relevant?",
  options:["Pre-post data are never useful","Observer expectations may influence ratings, introducing measurement bias","Blinding guarantees every result is valid","The sample size becomes irrelevant"],
  answer:1,
  explanation:"When assessors know treatment status, expectations can influence subjective outcome ratings."
},
{
  id:"ST716",difficulty:"Hard",topic:"Language Intervention",
  question:"A child produces a grammatical form during structured practice but rarely uses it spontaneously. Which strategy best addresses this gap?",
  options:["Stop all naturalistic language practice","Use the same worksheet indefinitely","Measure only imitation accuracy","Embed the target in meaningful activities and systematically monitor spontaneous use"],
  answer:3,
  explanation:"Functional contexts and spontaneous-language sampling help build and verify generalization."
},
{
  id:"ST717",difficulty:"Hard",topic:"Motor Speech",
  question:"A patient has reduced respiratory support, strained phonation, and imprecise articulation after a neurological illness. What is the best assessment principle?",
  options:["Examine speech subsystems and their interaction rather than assigning a subtype from one symptom","Diagnose apraxia from strained phonation alone","Assess language comprehension only","Assume all symptoms arise from hearing loss"],
  answer:0,
  explanation:"Motor speech diagnosis requires analysis of multiple speech subsystems and neurological findings."
},
{
  id:"ST718",difficulty:"Hard",topic:"AAC",
  question:"A communication partner repeatedly asks yes/no questions and rarely allows device users to initiate. What intervention is most relevant?",
  options:["Restrict access to the device","Replace the user's symbols with partner-selected messages","Train partners to model language, allow wait time, and create opportunities for initiation","Require immediate answers to every question"],
  answer:2,
  explanation:"Partner training can improve aided language modeling, response time, and opportunities for autonomous communication."
},
{
  id:"ST719",difficulty:"Hard",topic:"Dysphagia",
  question:"A patient aspirates during one tested swallowing condition but not another during instrumental assessment. What should guide recommendations?",
  options:["Choose the condition that is easiest for staff regardless of findings","Interpret the full physiologic findings, effectiveness, feasibility, and patient-specific risks","Assume the safest result in one trial guarantees safety in every meal","Base the plan only on the patient's age"],
  answer:1,
  explanation:"Recommendations should integrate physiology, consistency across trials, real-world feasibility, and individual risk."
},
{
  id:"ST720",difficulty:"Hard",topic:"Fluency",
  question:"A client wants to reduce speech effort but does not prioritize eliminating every stutter. How should goals be written?",
  options:["Require zero disfluencies in all settings","Use only clinician-selected fluency counts","Avoid measuring the client's own priorities","Include client-defined goals such as reduced effort, increased participation, and flexible speaking strategies"],
  answer:3,
  explanation:"Client-centered goals reflect the person's communication priorities and desired participation outcomes."
},
{
  id:"ST721",difficulty:"Hard",topic:"Hearing",
  question:"A child with unilateral hearing loss struggles to locate speakers and understand speech in noise. What is the best clinical approach?",
  options:["Assess functional listening needs and collaborate on individualized classroom and hearing supports","Assume one normal-hearing ear prevents all communication difficulties","Treat the problem as a language disorder without hearing follow-up","Recommend avoiding group learning permanently"],
  answer:0,
  explanation:"Unilateral hearing loss can affect spatial hearing and listening in noise; support should reflect individual needs."
},
{
  id:"ST722",difficulty:"Hard",topic:"Language Assessment",
  question:"Dynamic assessment shows that a child learns a new language target rapidly with mediated teaching despite a low static test score. What does this contribute?",
  options:["It proves that no language difficulty exists","It replaces all background and functional information","It provides evidence about learning potential and response to support, alongside other findings","It confirms impairment solely because teaching was needed"],
  answer:2,
  explanation:"Dynamic assessment examines modifiability and learning response, complementing standardized and functional data."
},
{
  id:"ST723",difficulty:"Hard",topic:"Voice",
  question:"A patient reports sudden voice loss after a forceful vocal event. Which action is most appropriate?",
  options:["Begin vigorous voice exercises immediately","Arrange prompt medical/laryngeal assessment, especially given the sudden onset","Assume the cause is psychological","Wait indefinitely before seeking evaluation"],
  answer:1,
  explanation:"Sudden voice loss after vocal trauma warrants prompt medical assessment rather than unsupervised intensive exercise."
},
{
  id:"ST724",difficulty:"Hard",topic:"Clinical Reasoning",
  question:"A treatment produces statistically significant gains, but the improvement does not reach the client's functional goal. What should the clinician conclude?",
  options:["Treatment is unquestionably successful in every respect","The client should be discharged immediately","Functional outcomes do not matter when scores improve","The measured gain may be real, but clinical significance and the treatment plan need further review"],
  answer:3,
  explanation:"Statistical change and meaningful functional benefit are related but not identical."
},
{
  id:"ST725",difficulty:"Hard",topic:"Professional Practice",
  question:"A clinician suspects that a colleague's documentation contains inaccurate data affecting client care. What is the appropriate response?",
  options:["Follow organizational procedures to clarify and address the concern while prioritizing client safety","Alter the record without authorization","Discuss the allegation publicly on social media","Ignore the concern regardless of risk"],
  answer:0,
  explanation:"Concerns should be handled through appropriate professional channels, accurate records, and client-safety procedures."
},
{
  id:"ST726",difficulty:"Hard",topic:"Phonology",
  question:"A child demonstrates multiple sound substitutions that vary with word length and complexity. Which assessment approach is most informative?",
  options:["Test only one sound in isolation","Assume all variability indicates a motor planning disorder","Analyze error patterns across single words, connected speech, complexity, stimulability, and consistency","Diagnose solely from age without collecting speech samples"],
  answer:2,
  explanation:"A comprehensive speech sample helps distinguish phonological patterns, context effects, and possible motor planning features."
},
{
  id:"ST727",difficulty:"Hard",topic:"Aphasia",
  question:"A client with aphasia participates in conversations more successfully when the partner writes keywords and confirms meaning. Which intervention focus is most appropriate?",
  options:["Train only isolated word repetition","Include communication-partner strategies and supported conversation in functional contexts","Prohibit gestures and written cues","Focus exclusively on timed naming drills"],
  answer:1,
  explanation:"Supported conversation strategies can improve message exchange and participation for people with aphasia."
},
{
  id:"ST728",difficulty:"Hard",topic:"Dysphagia",
  question:"A patient has difficulty initiating a swallow and shows oral residue, but there is no instrumental assessment yet. What should a clinician avoid?",
  options:["Documenting the observed symptoms","Considering medical and nutritional context","Discussing appropriate next steps with the care team","Claiming the precise physiologic cause and aspiration status are confirmed from bedside signs alone"],
  answer:3,
  explanation:"Bedside findings guide clinical reasoning but cannot confirm all swallowing physiology or rule out silent aspiration."
},
{
  id:"ST729",difficulty:"Hard",topic:"Research Literacy",
  question:"A meta-analysis includes studies with substantial heterogeneity in participants, interventions, and outcome measures. What is the most appropriate interpretation?",
  options:["Examine heterogeneity and study quality before deciding how broadly the pooled estimate applies","Assume all studies measured exactly the same effect","Ignore individual study differences","Conclude that pooled results automatically establish causation"],
  answer:0,
  explanation:"Heterogeneity affects how confidently pooled results can be generalized and should be explored."
},
{
  id:"ST730",difficulty:"Hard",topic:"AAC",
  question:"A user selects an unexpected symbol sequence on an AAC device. What should the communication partner do first?",
  options:["Immediately reset the device","Assume the message is meaningless","Seek clarification respectfully and consider access errors, context, and the user's intended meaning","Remove the device as a consequence"],
  answer:2,
  explanation:"Unexpected selections may reflect meaningful communication or access errors; respectful clarification protects autonomy."
},
{
  id:"ST731",difficulty:"Hard",topic:"Motor Speech",
  question:"A patient with dysarthria has reduced intelligibility but adequate language formulation. Which strategy may improve communication immediately?",
  options:["Increase sentence complexity","Use individualized strategies such as pacing, clear speech, and communication-partner support","Focus only on spelling","Avoid conversation until speech is normal"],
  answer:1,
  explanation:"Individualized compensatory strategies can improve intelligibility and participation while treatment addresses underlying needs."
},
{
  id:"ST732",difficulty:"Hard",topic:"Autism",
  question:"An autistic student uses AAC reliably but staff sometimes withhold the device to encourage speech. What is the most appropriate recommendation?",
  options:["Continue withholding it until spoken language improves","Allow AAC only during therapy sessions","Replace AAC with picture naming drills alone","Ensure continuous appropriate communication access and support all effective communication modes"],
  answer:3,
  explanation:"Reliable access to communication is essential; AAC should not be withheld as a strategy to force speech."
},
{
  id:"ST733",difficulty:"Hard",topic:"Clinical Outcomes",
  question:"A client meets a treatment criterion in the clinic but reports difficulty applying the skill at home. What should the clinician do?",
  options:["Assess home contexts and practice transfer with the client and relevant partners","Assume the client is not trying","Close the case because the clinic criterion was met","Repeat the exact clinic task without discussing home needs"],
  answer:0,
  explanation:"Context-specific barriers and practice opportunities should be addressed to support carryover."
},
{
  id:"ST734",difficulty:"Hard",topic:"Professional Ethics",
  question:"A clinician receives a request to share identifiable client information through an unapproved messaging channel. What is the best response?",
  options:["Send the information if the recipient seems trustworthy","Share only the client's diagnosis publicly","Use approved secure communication methods and verify authorization and applicable requirements","Post the information without a name"],
  answer:2,
  explanation:"Identifiable clinical information should be shared only through appropriate secure channels with proper authorization."
},
{
  id:"ST735",difficulty:"Hard",topic:"Clinical Reasoning",
  question:"A client improves on impairment-level measures but shows no change in daily participation after a reasonable treatment period. What should guide the next decision?",
  options:["Continue unchanged treatment forever","Reassess goals, intervention fit, contextual barriers, client priorities, and functional outcome measures","Conclude that impairment-level gains are meaningless","Discharge without discussing the outcome"],
  answer:1,
  explanation:"Treatment decisions should integrate impairment-level results with meaningful participation, client goals, and contextual factors."
},

{
  id:"ST736",difficulty:"Easy",topic:"Anatomy",
  question:"Which structure elevates to help close the velopharyngeal port during oral speech?",
  options:["Lower jaw","Tongue tip","Soft palate","Vocal folds"],
  answer:2,
  explanation:"The soft palate elevates to help separate the oral and nasal cavities during oral speech."
},
{
  id:"ST737",difficulty:"Easy",topic:"Language Development",
  question:"Which is an example of a two-word combination?",
  options:["More juice","Juice","Bottle","Drinking"],
  answer:0,
  explanation:"More juice combines two meaningful words to express a request."
},
{
  id:"ST738",difficulty:"Easy",topic:"Speech Sounds",
  question:"Which sound is a voiced alveolar stop?",
  options:["/s/","/t/","/f/","/d/"],
  answer:3,
  explanation:"/d/ is a voiced stop produced at the alveolar ridge."
},
{
  id:"ST739",difficulty:"Easy",topic:"Voice",
  question:"Which term describes the loudness of a person's voice?",
  options:["Pitch","Intensity","Resonance","Fluency"],
  answer:1,
  explanation:"Vocal intensity relates to perceived loudness."
},
{
  id:"ST740",difficulty:"Easy",topic:"Language",
  question:"Which skill is part of expressive language?",
  options:["Recognizing a familiar sound only","Following a direction silently","Describing a picture using words or signs","Hearing a tone"],
  answer:2,
  explanation:"Expressive language involves communicating ideas through language."
},
{
  id:"ST741",difficulty:"Easy",topic:"Hearing",
  question:"Which unit is commonly used to express hearing level on an audiogram?",
  options:["dB HL","Hertz per kilogram","Milliliters","Centimeters per second"],
  answer:0,
  explanation:"Audiometric thresholds are commonly reported in decibels hearing level."
},
{
  id:"ST742",difficulty:"Easy",topic:"AAC",
  question:"Which is an example of aided AAC?",
  options:["Natural facial expression","Head nod","Manual gesture","Picture communication board"],
  answer:3,
  explanation:"Aided AAC uses external tools such as picture boards or speech-generating devices."
},
{
  id:"ST743",difficulty:"Easy",topic:"Dysphagia",
  question:"Which symptom can indicate difficulty managing saliva?",
  options:["Improved word retrieval","Drooling or frequent saliva pooling","Clearer sentence structure","Increased reading speed"],
  answer:1,
  explanation:"Drooling or saliva pooling may warrant assessment of oral and swallowing function."
},
{
  id:"ST744",difficulty:"Easy",topic:"Articulation",
  question:"Which sound is a voiced bilabial nasal?",
  options:["/k/","/s/","/m/","/t/"],
  answer:2,
  explanation:"/m/ is produced with both lips together and airflow through the nose."
},
{
  id:"ST745",difficulty:"Easy",topic:"Assessment",
  question:"What is the purpose of a baseline measure before treatment?",
  options:["Document current performance for later comparison","Guarantee treatment success","Replace all clinical observations","Determine the client's personality"],
  answer:0,
  explanation:"Baseline data help track change and evaluate treatment response."
},
{
  id:"ST746",difficulty:"Easy",topic:"Fluency",
  question:"Which is an example of a phrase repetition?",
  options:["A sustained vowel","A silent pause between turns","A breathy voice","'I want—I want the ball'"],
  answer:3,
  explanation:"Repeating a phrase can be a form of disfluency."
},
{
  id:"ST747",difficulty:"Easy",topic:"Anatomy",
  question:"Which structure houses the vocal folds?",
  options:["Hard palate","Larynx","Nasal septum","Alveolar ridge"],
  answer:1,
  explanation:"The vocal folds are located within the larynx."
},
{
  id:"ST748",difficulty:"Easy",topic:"Language",
  question:"Which word is a pronoun?",
  options:["Running","Beautiful","They","Under"],
  answer:2,
  explanation:"They is a pronoun that can refer to people or things."
},
{
  id:"ST749",difficulty:"Easy",topic:"Professional Practice",
  question:"What is an appropriate response if a client asks a question you cannot answer confidently?",
  options:["Invent a likely answer","Ignore the question","Give a definite answer without evidence","Explain the limitation and seek reliable information or consultation"],
  answer:3,
  explanation:"Transparent communication and appropriate consultation support safe, ethical care."
},
{
  id:"ST750",difficulty:"Easy",topic:"Motor Speech",
  question:"Which disorder is primarily a motor speech execution disorder?",
  options:["Dysarthria","Aphasia","Dyslexia","Specific language impairment"],
  answer:0,
  explanation:"Dysarthria results from impaired neuromuscular execution of speech."
},
{
  id:"ST751",difficulty:"Easy",topic:"Language Development",
  question:"Which caregiver behavior supports early communication?",
  options:["Ignoring all child-initiated communication","Responding contingently to the child's gaze, gesture, or vocalization","Using only complex questions","Requiring perfect words before responding"],
  answer:1,
  explanation:"Responsive interaction supports shared attention and communication development."
},
{
  id:"ST752",difficulty:"Easy",topic:"Voice",
  question:"Which symptom should prompt attention if it persists?",
  options:["Occasional normal variation in pitch","A brief laugh","Persistent hoarseness","A single sneeze"],
  answer:2,
  explanation:"Persistent hoarseness may require medical and voice evaluation."
},
{
  id:"ST753",difficulty:"Easy",topic:"Phonology",
  question:"What is final consonant deletion?",
  options:["Omitting a consonant at the end of a word","Adding a syllable at the beginning","Changing a vowel into a consonant","Repeating an entire sentence"],
  answer:0,
  explanation:"Final consonant deletion occurs when the final consonant is omitted."
},
{
  id:"ST754",difficulty:"Easy",topic:"AAC",
  question:"Why should a communication partner allow sufficient wait time?",
  options:["To discourage independent communication","To test the user's patience","To ensure every response is spoken","To allow time for processing and message formulation"],
  answer:3,
  explanation:"Adequate wait time supports access and independent communication."
},
{
  id:"ST755",difficulty:"Easy",topic:"Hearing",
  question:"What does otoscopy allow a clinician to inspect?",
  options:["Expressive vocabulary","The ear canal and visible tympanic membrane","Speech rate","Swallowing coordination"],
  answer:1,
  explanation:"Otoscopy provides a visual examination of the ear canal and tympanic membrane."
},
{
  id:"ST756",difficulty:"Easy",topic:"Language",
  question:"Which is an example of a receptive-language task?",
  options:["Repeating a vowel","Naming a picture","Following the instruction 'Put the book on the table'","Sustaining a note"],
  answer:2,
  explanation:"Following directions requires understanding language."
},
{
  id:"ST757",difficulty:"Easy",topic:"Speech Sounds",
  question:"Which sound is a voiceless velar stop?",
  options:["/g/","/m/","/z/","/k/"],
  answer:3,
  explanation:"/k/ is a voiceless stop produced with the back of the tongue near the velum."
},
{
  id:"ST758",difficulty:"Easy",topic:"Dysphagia",
  question:"Which team member may help assess a patient's medical causes of swallowing difficulty?",
  options:["Physician","Graphic designer","Accountant","Architect"],
  answer:0,
  explanation:"Medical evaluation may help identify underlying causes and guide dysphagia management."
},
{
  id:"ST759",difficulty:"Easy",topic:"Clinical Documentation",
  question:"Which statement is most objective?",
  options:["The patient was uncooperative","The patient was lazy","The patient produced 6 correct responses in 10 trials with verbal cues","The session was useless"],
  answer:2,
  explanation:"Objective documentation describes observable behavior and measurable performance."
},
{
  id:"ST760",difficulty:"Easy",topic:"Articulation",
  question:"Which sound is typically produced with the tongue tip near the alveolar ridge?",
  options:["/h/","/t/","/m/","/w/"],
  answer:1,
  explanation:"/t/ is an alveolar stop in many varieties of English."
},
{
  id:"ST761",difficulty:"Easy",topic:"Autism",
  question:"Which practice supports respectful communication with an autistic client?",
  options:["Assuming every autistic person has identical needs","Requiring eye contact in all interactions","Ignoring sensory preferences","Individualizing supports and respecting communication preferences"],
  answer:3,
  explanation:"Autistic people have varied needs; supports should be individualized and respectful."
},
{
  id:"ST762",difficulty:"Easy",topic:"Language",
  question:"Which word is a verb in 'The child laughed loudly'?",
  options:["Laughed","Child","The","Loudly"],
  answer:0,
  explanation:"Laughed expresses the action and functions as the verb."
},
{
  id:"ST763",difficulty:"Easy",topic:"Assessment",
  question:"Why is caregiver input often useful during a pediatric assessment?",
  options:["It replaces direct assessment in all cases","It guarantees the correct diagnosis","It provides information about communication across everyday settings","It measures hearing thresholds directly"],
  answer:2,
  explanation:"Caregivers can describe communication behaviors across routines and environments."
},
{
  id:"ST764",difficulty:"Easy",topic:"Fluency",
  question:"What should a listener generally do when speaking with someone who stutters?",
  options:["Finish sentences without permission","Maintain natural listening behavior and allow time","Demand immediate repetition","Avoid listening to the message"],
  answer:1,
  explanation:"Patient, respectful listening supports communication without adding unnecessary pressure."
},
{
  id:"ST765",difficulty:"Easy",topic:"Voice",
  question:"Which structure vibrates to create the primary sound source for most voiced speech?",
  options:["Tongue tip","Hard palate","Nasal septum","Vocal folds"],
  answer:3,
  explanation:"Vocal-fold vibration generates the primary sound source for voiced speech."
},
{
  id:"ST766",difficulty:"Easy",topic:"Language Development",
  question:"Which activity can support vocabulary learning in toddlers?",
  options:["Naming and discussing objects during shared play","Testing only spelling skills","Avoiding repetition of new words","Using unfamiliar technical terms exclusively"],
  answer:0,
  explanation:"Meaningful interaction and repeated exposure can support vocabulary development."
},
{
  id:"ST767",difficulty:"Easy",topic:"Professional Practice",
  question:"What is an appropriate reason to refer a client to another professional?",
  options:["To avoid documenting progress","Because every client must see every specialist","The client needs assessment or care outside the clinician's scope or competence","To guarantee a particular diagnosis"],
  answer:2,
  explanation:"Referral supports appropriate evaluation and care when needs exceed one's scope or competence."
},
{
  id:"ST768",difficulty:"Easy",topic:"Anatomy",
  question:"Which structure contains the upper and lower teeth?",
  options:["Pharynx","Oral cavity","Larynx","Middle ear"],
  answer:1,
  explanation:"The teeth are located in the oral cavity and contribute to articulation."
},
{
  id:"ST769",difficulty:"Easy",topic:"AAC",
  question:"What should happen when a person using AAC communicates a message?",
  options:["The partner should always correct the symbol choice","The message should be ignored if it is not spoken","The device should be removed after each message","The partner should acknowledge the message and respond meaningfully"],
  answer:3,
  explanation:"Responding to AAC messages reinforces communication and supports participation."
},
{
  id:"ST770",difficulty:"Easy",topic:"Dysphagia",
  question:"What is aspiration in swallowing?",
  options:["Material passing below the vocal folds","Food remaining only between the teeth","A delay in naming pictures","Air passing through the nose during speech"],
  answer:0,
  explanation:"Aspiration occurs when material enters the airway below the vocal folds."
},

{
  id:"ST771",difficulty:"Moderate",topic:"Language Assessment",
  question:"A child follows familiar routine instructions but struggles with novel instructions containing multiple clauses. What should be assessed?",
  options:["Voice quality only","Oral strength only","Complex receptive language and working-memory demands","Pitch range only"],
  answer:2,
  explanation:"Novel multiclause directions place demands on language comprehension and verbal working memory."
},
{
  id:"ST772",difficulty:"Moderate",topic:"Phonology",
  question:"A child says 'nake' for 'snake.' Which pattern is demonstrated?",
  options:["Final consonant deletion","Initial cluster reduction","Backing","Vowel insertion at the end"],
  answer:1,
  explanation:"The initial consonant cluster /sn/ is reduced by omitting /s/."
},
{
  id:"ST773",difficulty:"Moderate",topic:"Aphasia",
  question:"A client has difficulty retrieving nouns but can communicate ideas using gestures and circumlocution. Which assessment is most relevant?",
  options:["Maximum phonation time alone","Swallowing reflex assessment","Pure-tone screening alone","Naming, word retrieval, and functional communication"],
  answer:3,
  explanation:"Naming and functional communication tasks help characterize lexical retrieval difficulties."
},
{
  id:"ST774",difficulty:"Moderate",topic:"Dysphagia",
  question:"A patient develops a wet-sounding voice after drinking. What is the best interpretation?",
  options:["It may be a clinical sign warranting further swallowing assessment but does not alone prove aspiration","It proves aspiration in every case","It confirms normal swallowing","It directly diagnoses esophageal obstruction"],
  answer:0,
  explanation:"A wet voice can be a warning sign but must be interpreted with other findings."
},
{
  id:"ST775",difficulty:"Moderate",topic:"Voice",
  question:"Which task is most relevant to assessing maximum phonation time?",
  options:["Reading a paragraph silently","Naming pictures quickly","Sustaining a vowel for as long as comfortably possible under standardized instructions","Following a spatial direction"],
  answer:2,
  explanation:"Maximum phonation time measures how long a vowel can be sustained under specified conditions."
},
{
  id:"ST776",difficulty:"Moderate",topic:"Motor Speech",
  question:"A speaker has slow rate, imprecise consonants, and reduced stress after a neurological event. What should the clinician do?",
  options:["Diagnose aphasia from rate alone","Assess speech subsystems and neurological history for a motor speech disorder","Measure only reading comprehension","Assume the speaker has a fluency disorder"],
  answer:1,
  explanation:"The pattern warrants a comprehensive motor speech assessment."
},
{
  id:"ST777",difficulty:"Moderate",topic:"AAC",
  question:"A child uses a picture board to request but rarely comments or asks questions. What should be considered?",
  options:["Remove the board because requests are sufficient","Reduce all vocabulary to food items","Wait until speech emerges before expanding vocabulary","Expand vocabulary and model diverse communicative functions"],
  answer:3,
  explanation:"AAC should support a broad range of functions, including commenting, asking, refusing, and sharing."
},
{
  id:"ST778",difficulty:"Moderate",topic:"Hearing",
  question:"Why may a child with hearing loss struggle more in a noisy classroom than in a quiet room?",
  options:["Background noise reduces access to the speech signal","Noise always improves speech perception","Noise affects only expressive grammar","Quiet rooms eliminate all hearing difficulties"],
  answer:0,
  explanation:"Noise reduces the signal-to-noise ratio and can make speech harder to understand."
},
{
  id:"ST779",difficulty:"Moderate",topic:"Language Intervention",
  question:"Which clinician response is an example of expansion?",
  options:["Child: 'Dog run.' Clinician: 'Say it again.'","Child: 'Dog run.' Clinician: 'No, wrong.'","Child: 'Dog run.' Clinician: 'The dog is running.'","Child: 'Dog run.' Clinician changes the subject"],
  answer:2,
  explanation:"An expansion restates the child's message using a more complete grammatical form."
},
{
  id:"ST780",difficulty:"Moderate",topic:"Fluency",
  question:"A child shows frequent disfluencies and visible struggle. What information should be gathered before planning therapy?",
  options:["Only the child's reading speed","Speech samples, developmental history, family concerns, and communication impact","Only the child's spelling score","Only the number of words in one sentence"],
  answer:1,
  explanation:"Comprehensive fluency assessment considers speech behaviors, history, struggle, and functional impact."
},
{
  id:"ST781",difficulty:"Moderate",topic:"Cleft Palate",
  question:"Which speech feature may suggest inadequate velopharyngeal closure?",
  options:["A typical conversational pause","Correct production of /m/ alone","Normal variation in speaking rate","Hypernasality during oral vowel production"],
  answer:3,
  explanation:"Hypernasality on oral vowels may indicate velopharyngeal dysfunction."
},
{
  id:"ST782",difficulty:"Moderate",topic:"Assessment",
  question:"Why might a clinician compare spontaneous speech with imitation?",
  options:["To identify differences in performance across task demands","To prove imitation is always more valid","To replace all language sampling","To diagnose hearing loss directly"],
  answer:0,
  explanation:"Comparing tasks can reveal stimulability, context effects, and generalization difficulties."
},
{
  id:"ST783",difficulty:"Moderate",topic:"Dysphagia",
  question:"A patient with dysphagia reports fatigue near the end of meals. Which factor deserves attention?",
  options:["Favorite television program","Handwriting speed only","Swallowing endurance, meal duration, and nutritional intake","Color naming accuracy"],
  answer:2,
  explanation:"Fatigue can affect meal efficiency and intake and should be considered in assessment."
},
{
  id:"ST784",difficulty:"Moderate",topic:"Voice",
  question:"Which approach is most appropriate for a client with suspected muscle tension dysphonia?",
  options:["Assume structural pathology is impossible","Assess voice and contributing factors, and coordinate medical evaluation when indicated","Begin shouting practice","Avoid collecting any history"],
  answer:1,
  explanation:"Assessment should consider vocal behavior, symptoms, and the need for laryngeal evaluation."
},
{
  id:"ST785",difficulty:"Moderate",topic:"Motor Speech",
  question:"What does sequential motion rate testing typically assess?",
  options:["Word comprehension","Ability to identify pictures","Hearing threshold","Repeated production of a syllable sequence such as 'pa-ta-ka'"],
  answer:3,
  explanation:"Sequential motion rate tasks examine the speed and coordination of alternating articulatory movements."
},
{
  id:"ST786",difficulty:"Moderate",topic:"Autism",
  question:"A child communicates distress through a behavior that staff find disruptive. What is the first clinical priority?",
  options:["Understand the behavior's function and support a safer, effective communication alternative","Punish the behavior without assessment","Remove every means of communication","Assume the behavior has no communicative significance"],
  answer:0,
  explanation:"Functional assessment and accessible communication support are preferable to assumptions or punitive responses."
},
{
  id:"ST787",difficulty:"Moderate",topic:"Research Literacy",
  question:"What is the primary purpose of random assignment in a controlled trial?",
  options:["Ensure every participant receives the preferred treatment","Guarantee a large sample","Help balance known and unknown confounding factors across groups","Eliminate the need to report outcomes"],
  answer:2,
  explanation:"Random assignment helps reduce systematic differences between treatment groups."
},
{
  id:"ST788",difficulty:"Moderate",topic:"Aphasia",
  question:"A person with aphasia struggles with phone calls but communicates better face-to-face with gestures. What should treatment consider?",
  options:["Exclude communication partners from therapy","Practice relevant phone communication with individualized supports","Focus only on isolated oral motor movements","Assume the person cannot use a phone again"],
  answer:1,
  explanation:"Functional practice should target meaningful situations and explore useful supports."
},
{
  id:"ST789",difficulty:"Moderate",topic:"Clinical Documentation",
  question:"Which element is important in a progress note?",
  options:["Unverified assumptions about motivation","A prediction of guaranteed recovery","Personal opinions about the family","Objective response to treatment and the level of support required"],
  answer:3,
  explanation:"Documenting performance and cueing provides evidence of response and guides future treatment."
},
{
  id:"ST790",difficulty:"Moderate",topic:"Phonology",
  question:"A child produces /w/ in place of /r/. Which process may be present?",
  options:["Gliding","Final consonant deletion","Fronting of velars","Initial cluster reduction"],
  answer:0,
  explanation:"Gliding occurs when a liquid such as /r/ is replaced by a glide such as /w/."
},
{
  id:"ST791",difficulty:"Moderate",topic:"Hearing",
  question:"What does an otoacoustic emission test primarily evaluate?",
  options:["Sentence comprehension","Expressive vocabulary","Outer hair cell function in the cochlea","Swallowing coordination"],
  answer:2,
  explanation:"Otoacoustic emissions provide information about cochlear outer hair cell function."
},
{
  id:"ST792",difficulty:"Moderate",topic:"AAC",
  question:"Why is aided language modeling useful for some AAC users?",
  options:["It requires the user to copy every message","It demonstrates language use by pairing spoken language with selections on the AAC system","It eliminates the need for access to vocabulary","It limits communication to requesting"],
  answer:1,
  explanation:"Aided language modeling exposes users to how symbols can be combined for meaningful communication."
},
{
  id:"ST793",difficulty:"Moderate",topic:"Language Development",
  question:"A child can name objects but has difficulty explaining how objects are related. Which target may be useful?",
  options:["Vocal intensity only","Maximum phonation time","Oral diadochokinetic rate only","Semantic relationships and categorization"],
  answer:3,
  explanation:"Semantic relationships and categorization support vocabulary depth and conceptual language."
},
{
  id:"ST794",difficulty:"Moderate",topic:"Dysphagia",
  question:"Why should a swallowing recommendation be reviewed when a patient's medical condition changes?",
  options:["Changes in alertness, respiratory status, or function may alter swallowing risk and ability","Swallowing recommendations can never change","Medical status affects speech only","All patients require identical diets"],
  answer:0,
  explanation:"Swallowing ability and risk can change with medical status and should be reassessed when indicated."
},
{
  id:"ST795",difficulty:"Moderate",topic:"Professional Practice",
  question:"A client declines a recommended intervention after receiving an explanation. What should the clinician do?",
  options:["Proceed regardless of the refusal","Threaten to end all care","Respect the client's decision, clarify concerns, and discuss appropriate alternatives","Document consent even though it was not given"],
  answer:2,
  explanation:"Informed decision-making includes respecting refusal and exploring alternatives where appropriate."
},
{
  id:"ST796",difficulty:"Moderate",topic:"Voice",
  question:"Which measure is commonly used to quantify perceived voice handicap from the client's perspective?",
  options:["Pure-tone average","A validated voice handicap questionnaire","Oral reading accuracy alone","Maximum chewing rate"],
  answer:1,
  explanation:"Validated self-report questionnaires can measure perceived impact of voice difficulties."
},
{
  id:"ST797",difficulty:"Moderate",topic:"Language Intervention",
  question:"A child struggles to answer 'why' questions. Which skill may need support?",
  options:["Pitch control alone","Lip closure strength alone","Pure-tone thresholds only","Reasoning and language for expressing causes and explanations"],
  answer:3,
  explanation:"Why questions often require causal reasoning and language to explain relationships."
},
{
  id:"ST798",difficulty:"Moderate",topic:"Motor Speech",
  question:"A patient has imprecise consonants and reduced speech rate but intact language comprehension. What is an appropriate next step?",
  options:["Complete a motor speech assessment and evaluate functional intelligibility","Diagnose receptive aphasia immediately","Assess only written spelling","Assume the symptoms are caused by stuttering"],
  answer:0,
  explanation:"Speech subsystem assessment helps characterize a possible motor speech disorder."
},
{
  id:"ST799",difficulty:"Moderate",topic:"Fluency",
  question:"What does percent syllables stuttered measure?",
  options:["The percentage of words understood by a listener","The percentage of correctly spelled words","The proportion of sampled syllables containing stuttering events under the defined scoring method","The client's reading comprehension score"],
  answer:2,
  explanation:"Percent syllables stuttered is a frequency measure calculated from a speech sample."
},
{
  id:"ST800",difficulty:"Moderate",topic:"Assessment",
  question:"Why should a clinician consider dialect during speech assessment?",
  options:["Every dialect difference indicates a disorder","Dialectal patterns may be linguistic differences rather than signs of impairment","Dialect should be ignored in all reports","A dialect can be diagnosed from a single sound"],
  answer:1,
  explanation:"Dialect-aware assessment distinguishes expected language variation from a speech sound disorder."
},
{
  id:"ST801",difficulty:"Moderate",topic:"AAC",
  question:"An AAC user has difficulty communicating when the device battery is depleted. What is an important planning step?",
  options:["Remove backup communication methods","Require the person to wait silently","Reduce access to the primary device","Provide reliable backup communication options and a device-use plan"],
  answer:3,
  explanation:"Backup options help preserve communication access during device failure or power loss."
},
{
  id:"ST802",difficulty:"Moderate",topic:"Hearing",
  question:"What is the main function of a remote microphone system in a classroom?",
  options:["Improve the teacher's voice-to-noise ratio at the listener's receiver","Directly treat language impairment","Measure speech sound production","Replace all hearing assessment"],
  answer:0,
  explanation:"Remote microphones can improve access to the speaker by reducing the impact of distance and background noise."
},
{
  id:"ST803",difficulty:"Moderate",topic:"Dysphagia",
  question:"A patient has prolonged chewing and difficulty forming a cohesive bolus. Which phase is most directly implicated?",
  options:["Pharyngeal clearance only","Esophageal transit only","Oral preparatory phase","Language comprehension"],
  answer:2,
  explanation:"The oral preparatory phase includes chewing and forming food into a bolus."
},
{
  id:"ST804",difficulty:"Moderate",topic:"Clinical Reasoning",
  question:"A client performs inconsistently across clinicians. What should be examined?",
  options:["Which clinician the client likes most","Differences in instructions, cueing, task difficulty, context, and scoring","Whether one score should be discarded automatically","The client's handwriting only"],
  answer:1,
  explanation:"Differences in procedures and contexts can affect reliability and should be investigated."
},
{
  id:"ST805",difficulty:"Moderate",topic:"Language",
  question:"Which task best examines inferencing during narrative comprehension?",
  options:["Repeating a single vowel","Naming isolated colors","Sustaining phonation","Explaining an unstated character motive using story clues"],
  answer:3,
  explanation:"Inferencing involves using available information to derive a meaning that is not explicitly stated."
},

{
  id:"ST806",difficulty:"Hard",topic:"Dysphagia",
  question:"A VFSS shows substantial pharyngeal residue after swallowing, with no aspiration on the initial swallow. Why does residue still matter?",
  options:["Residue can enter the airway after the swallow and may indicate reduced clearance","Absence of initial aspiration proves all later swallows are safe","Residue confirms a language disorder","Residue is relevant only to chewing"],
  answer:0,
  explanation:"Pharyngeal residue may create post-swallow airway risk and should be interpreted with the overall physiology."
},
{
  id:"ST807",difficulty:"Hard",topic:"Motor Speech",
  question:"A patient has slow, effortful speech with inconsistent sound errors and groping, but no clear weakness. Which differential consideration is most relevant?",
  options:["Purely receptive language impairment","Conductive hearing loss alone","Apraxia of speech versus other motor speech or language-related causes","Isolated swallowing impairment"],
  answer:2,
  explanation:"The clinician should evaluate motor planning features and rule out other speech, language, and neurological explanations."
},
{
  id:"ST808",difficulty:"Hard",topic:"Aphasia",
  question:"A person with aphasia performs poorly on timed naming but communicates effectively using descriptions and gestures. What is the best clinical interpretation?",
  options:["Timed naming fully represents everyday communication","Impairment-level tests and functional communication measures capture different aspects of ability","Gestures should not count as communication","The person does not need further assessment"],
  answer:1,
  explanation:"Formal tests provide useful information but may not capture compensatory strengths and everyday effectiveness."
},
{
  id:"ST809",difficulty:"Hard",topic:"Research Methods",
  question:"A study finds a correlation between screen time and language scores. What conclusion is most appropriate?",
  options:["Screen time definitely caused the language differences","Language ability cannot be measured reliably","No relationship can ever exist between the variables","The association does not by itself establish causation; confounding and study design must be considered"],
  answer:3,
  explanation:"Correlational findings cannot independently determine causation."
},
{
  id:"ST810",difficulty:"Hard",topic:"Voice",
  question:"A professional voice user has intermittent hoarseness and a reduced singing range despite normal conversational speech during the appointment. What is the best approach?",
  options:["Assess task-specific voice demands and consider specialist laryngeal evaluation","Rule out a voice problem because conversation sounds normal","Prescribe maximal loudness drills immediately","Assess only language comprehension"],
  answer:0,
  explanation:"Voice symptoms may emerge only under particular demands; evaluation should reflect the person's actual voice use."
},
{
  id:"ST811",difficulty:"Hard",topic:"AAC",
  question:"A team wants to evaluate whether an AAC system improves participation. Which outcome design is strongest?",
  options:["Ask only whether staff like the device","Count device activations without context","Measure meaningful communication and participation across relevant settings before and after implementation","Use one unstructured observation without defining outcomes"],
  answer:2,
  explanation:"Functional, predefined outcomes across contexts better capture the impact of AAC."
},
{
  id:"ST812",difficulty:"Hard",topic:"Language Assessment",
  question:"A bilingual child scores low on a monolingual standardized test but shows rapid learning during dynamic assessment. How should the findings be used?",
  options:["Ignore both results and make a decision from age alone","Integrate language exposure, cross-language evidence, dynamic learning response, and functional performance","Diagnose disorder based on one score","Assume rapid learning proves that no difficulties exist"],
  answer:1,
  explanation:"No single result is definitive; comprehensive interpretation considers learning potential and performance across contexts."
},
{
  id:"ST813",difficulty:"Hard",topic:"Dysphagia",
  question:"A patient has suspected aspiration and significant respiratory compromise. Which priority is most appropriate?",
  options:["Begin unrestricted oral trials without review","Focus exclusively on articulation practice","Delay communication with the medical team","Escalate medical concerns promptly and coordinate swallowing assessment and management"],
  answer:3,
  explanation:"Respiratory compromise with suspected aspiration warrants timely medical attention and coordinated care."
},
{
  id:"ST814",difficulty:"Hard",topic:"Fluency",
  question:"A client has low stuttering frequency in clinic but substantial avoidance at work. Which outcome would best complement frequency counts?",
  options:["A client-reported measure of impact and participation","A handwriting-speed score","A visual acuity measure","A maximum chewing-rate test"],
  answer:0,
  explanation:"Self-report and participation measures capture effects that may not appear in a brief speech sample."
},
{
  id:"ST815",difficulty:"Hard",topic:"Phonology",
  question:"A child has multiple phonological error patterns and reduced intelligibility. Which treatment planning principle is most appropriate?",
  options:["Select targets based only on the easiest sound","Treat every error pattern simultaneously without prioritization","Use assessment findings, stimulability, functional impact, and developmental considerations to prioritize targets","Avoid monitoring connected speech"],
  answer:2,
  explanation:"Target selection should reflect the child's profile and the expected functional benefit."
},
{
  id:"ST816",difficulty:"Hard",topic:"Motor Speech",
  question:"A client with suspected dysarthria has inconsistent loudness and reduced breath support. What should guide treatment?",
  options:["Use one generic exercise program for every dysarthria type","Identify the affected speech subsystems, severity, goals, and underlying medical context","Treat spelling errors only","Avoid functional speech assessment"],
  answer:1,
  explanation:"Dysarthria treatment should be individualized to the physiological profile and functional needs."
},
{
  id:"ST817",difficulty:"Hard",topic:"Clinical Outcomes",
  question:"A treatment produces reliable gains on a standardized measure but no improvement in the client's main daily goal. What is the best response?",
  options:["Report success without qualification","Disregard the client's goal","End all services immediately","Review outcome relevance, barriers to generalization, and whether goals or intervention need adjustment"],
  answer:3,
  explanation:"Treatment outcomes should be interpreted against meaningful goals and real-world performance."
},
{
  id:"ST818",difficulty:"Hard",topic:"Cleft Palate",
  question:"A child produces compensatory glottal stops and also has persistent hypernasality. Why is differential assessment important?",
  options:["Learned articulation errors and structural velopharyngeal problems may require different interventions","Both findings always resolve through the same articulation drill","Hypernasality proves a hearing disorder","Glottal stops are always normal in every speech context"],
  answer:0,
  explanation:"Speech therapy may address learned errors, while structural or functional velopharyngeal issues may need team-based evaluation."
},
{
  id:"ST819",difficulty:"Hard",topic:"Research Literacy",
  question:"A meta-analysis reports a pooled effect, but publication bias is suspected. What is the key concern?",
  options:["Every included study must be invalid","Publication bias changes only the spelling of outcomes","Published positive findings may overrepresent the true body of evidence","Publication bias proves that the treatment has no effect"],
  answer:2,
  explanation:"Studies with positive results may be more likely to be published, distorting the pooled estimate."
},
{
  id:"ST820",difficulty:"Hard",topic:"Professional Ethics",
  question:"A family asks the clinician to omit clinically relevant findings from a report sent to an authorized referral provider. What should the clinician do?",
  options:["Remove any finding requested by the family","Explain documentation responsibilities and follow confidentiality, consent, and applicable reporting requirements","Send the entire record to unrelated parties","Alter the results to protect the service provider"],
  answer:1,
  explanation:"Clinical records must remain accurate, with disclosures handled according to applicable authorization and legal requirements."
},
{
  id:"ST821",difficulty:"Hard",topic:"Dysphagia",
  question:"A patient demonstrates aspiration with one tested consistency but not another during VFSS. What is the most defensible conclusion?",
  options:["The consistency without aspiration is universally safe in every setting","One trial eliminates the need for further analysis","All liquids must be prohibited permanently","The findings inform an individualized plan, considering repeatability, residue, efficiency, and real-world factors"],
  answer:3,
  explanation:"A single condition does not establish universal safety; the full swallowing profile and patient context matter."
},
{
  id:"ST822",difficulty:"Hard",topic:"Aphasia",
  question:"A client with aphasia is able to communicate preferences using gestures, pictures, and key words. How should supported decision-making be approached?",
  options:["Provide accessible information, allow time, verify choices, and support the client's own decisions","Ask the caregiver to make every decision automatically","Assume impaired speech means impaired decision-making","Exclude visual supports from important discussions"],
  answer:0,
  explanation:"Communication impairment does not automatically imply impaired decision-making capacity; accessible support promotes autonomy."
},
{
  id:"ST823",difficulty:"Hard",topic:"Voice",
  question:"A client has vocal fatigue with high occupational speaking demands. Which plan is most appropriate?",
  options:["Prescribe permanent silence without evaluation","Assume the client needs surgery","Combine assessment of voice function and demands with individualized strategies and referral when indicated","Use high-volume shouting exercises"],
  answer:2,
  explanation:"Voice care should address the client's demands, symptoms, and relevant medical findings."
},
{
  id:"ST824",difficulty:"Hard",topic:"Autism",
  question:"A minimally speaking autistic adult communicates through AAC and requests reduced sensory stimulation. What is the most appropriate clinical response?",
  options:["Require spoken requests before changing the environment","Respect the request, assess environmental barriers, and support accessible communication","Remove AAC to encourage speech","Assume the request is not meaningful"],
  answer:1,
  explanation:"Respecting communication autonomy and adjusting barriers can support participation and well-being."
},
{
  id:"ST825",difficulty:"Hard",topic:"Clinical Measurement",
  question:"A measure shows high test-retest reliability but does not adequately represent the client's real-world communication needs. Which property is most in question?",
  options:["Reliability only","The test's administration time","The client's motivation","Content or construct validity for the intended clinical purpose"],
  answer:3,
  explanation:"A measure can be reliable while failing to adequately represent the construct or outcome of interest."
},
{
  id:"ST826",difficulty:"Hard",topic:"Language Intervention",
  question:"A child uses a target grammatical form only after a clinician's direct prompt. Which next step best examines independence?",
  options:["Measure spontaneous use in varied contexts and gradually adjust cueing","Keep prompts identical forever","Count prompted responses as fully spontaneous","Stop collecting language samples"],
  answer:0,
  explanation:"Prompt fading and spontaneous language sampling help establish independent generalization."
},
{
  id:"ST827",difficulty:"Hard",topic:"Motor Speech",
  question:"A speaker with dysarthria has reduced intelligibility in group conversation despite improved performance during one-to-one therapy. What should treatment include?",
  options:["Only isolated syllable repetition","Avoid involving communication partners","Practice functional group communication and consider environmental and partner supports","Conclude that no further intervention is possible"],
  answer:2,
  explanation:"Generalization may require practice under realistic demands and adjustments to communication environments."
},
{
  id:"ST828",difficulty:"Hard",topic:"AAC",
  question:"An AAC user repeatedly selects a symbol that partners interpret as incorrect. What should the team examine?",
  options:["Whether the user should lose access to the device","Symbol meaning, vocabulary organization, motor access, context, and partner interpretation","Whether AAC can be used only for requests","Whether the user should be required to speak"],
  answer:1,
  explanation:"Unexpected selections can reflect access barriers, vocabulary mismatch, or partner misunderstanding."
},
{
  id:"ST829",difficulty:"Hard",topic:"Dysphagia",
  question:"A patient has dysphagia, reduced alertness, and poor ability to follow safety instructions. What should guide oral intake decisions?",
  options:["A fixed diet based only on age","Family preference alone without clinical review","The absence of coughing during one sip","Comprehensive assessment of swallowing, alertness, medical status, and multidisciplinary recommendations"],
  answer:3,
  explanation:"Swallowing decisions require consideration of the patient's overall condition and ability to participate safely."
},
{
  id:"ST830",difficulty:"Hard",topic:"Fluency",
  question:"A client wants to speak more comfortably in meetings while accepting that some stuttering may remain. Which goal is most client-centered?",
  options:["Increase participation in meetings using strategies selected with the client and monitor perceived effort","Eliminate every disfluency before attending a meeting","Focus only on the clinician's preferred speech rate","Avoid all challenging speaking situations"],
  answer:0,
  explanation:"Client-centered goals prioritize meaningful participation and the client's desired communication experience."
},
{
  id:"ST831",difficulty:"Hard",topic:"Hearing",
  question:"A child passes a hearing screening but continues to show speech-language concerns. What is the best interpretation?",
  options:["The screening proves that hearing cannot contribute","All language concerns are therefore behavioral","Screening does not rule out every hearing problem; follow-up and broader assessment may still be indicated","No further evaluation should be considered"],
  answer:2,
  explanation:"Screenings have limits; persistent concerns may warrant comprehensive hearing and communication assessment."
},
{
  id:"ST832",difficulty:"Hard",topic:"Language Assessment",
  question:"A child performs well on memorized test items but struggles to learn new language structures. What additional approach may be informative?",
  options:["Use memorized items exclusively","Use dynamic assessment to examine learning response and support needs","Assume high scores exclude every difficulty","Assess only speech loudness"],
  answer:1,
  explanation:"Dynamic assessment examines how the child responds to teaching and may reveal learning needs not shown by familiar items."
},
{
  id:"ST833",difficulty:"Hard",topic:"Voice",
  question:"A patient reports throat pain and sudden hoarseness after intense shouting. What should the clinician avoid?",
  options:["Obtaining relevant symptom history","Considering medical evaluation","Discussing vocal demands","Starting strenuous voice exercises before appropriate evaluation"],
  answer:3,
  explanation:"Acute symptoms after vocal trauma warrant caution and appropriate medical evaluation before strenuous exercises."
},
{
  id:"ST834",difficulty:"Hard",topic:"Clinical Reasoning",
  question:"A therapy target improves in structured tasks but worsens when the client is fatigued. What should the clinician do?",
  options:["Examine fatigue effects, task demands, pacing, and functional performance when adapting the plan","Ignore fatigue because clinic accuracy is more important","Conclude that the diagnosis is incorrect","Remove all functional goals"],
  answer:0,
  explanation:"Fatigue and task demands may affect performance and should inform individualized treatment planning."
},
{
  id:"ST835",difficulty:"Hard",topic:"Professional Practice",
  question:"A clinician identifies a possible error in a previously issued report. What is the most appropriate action?",
  options:["Delete all copies without explanation","Ignore the error if the client has not noticed","Follow professional procedures to verify, correct, and communicate the error appropriately","Change the report secretly without maintaining an accurate record"],
  answer:2,
  explanation:"Accurate records and transparent correction through appropriate procedures protect clients and care quality."
},
{
  id:"ST836",difficulty:"Hard",topic:"Phonology",
  question:"A child has low intelligibility due to several interacting phonological patterns. What should the clinician consider when choosing a treatment approach?",
  options:["Use only the easiest isolated sound regardless of impact","Consider pattern interactions, system-wide change, stimulability, and functional priorities","Avoid collecting connected speech","Assume every sound error requires an identical intervention"],
  answer:1,
  explanation:"Treatment selection should account for phonological organization and likely functional benefit."
},
{
  id:"ST837",difficulty:"Hard",topic:"Aphasia",
  question:"A client demonstrates improved naming in therapy but continues to struggle with conversations at home. What is the most appropriate next step?",
  options:["Stop therapy because naming improved","Use naming scores as the only outcome","Require the family to correct every error","Add functional conversation practice and communication-partner strategies"],
  answer:3,
  explanation:"Functional practice and partner support can help translate impairment-level gains into everyday communication."
},
{
  id:"ST838",difficulty:"Hard",topic:"Research Methods",
  question:"A treatment study reports a statistically significant difference, but the sample is very small and confidence intervals are wide. What should a clinician conclude?",
  options:["The estimated effect may be uncertain and should be considered alongside study quality and other evidence","The result proves a large effect for every client","Small samples always produce invalid data","Confidence intervals are irrelevant when p is below a threshold"],
  answer:0,
  explanation:"Small samples and wide confidence intervals limit precision and certainty about the effect."
},
{
  id:"ST839",difficulty:"Hard",topic:"AAC",
  question:"A school team measures AAC success only by the number of device activations. What is a key limitation?",
  options:["Activation counts always measure communication quality","Device use cannot be observed reliably","Counts may miss communicative purpose, independence, effectiveness, and participation","More activations always indicate better communication"],
  answer:2,
  explanation:"Meaningful AAC outcomes should consider the message, communicative function, independence, and participation."
},
{
  id:"ST840",difficulty:"Hard",topic:"Clinical Reasoning",
  question:"A client shows improvement in impairment measures but reports that treatment tasks are not relevant to daily life. What should the clinician do?",
  options:["Continue the same tasks without discussion","Revisit client priorities and align treatment activities and outcomes with functional needs","Dismiss the client's feedback because scores improved","Discharge without reviewing goals"],
  answer:1,
  explanation:"Shared goal-setting helps ensure treatment remains meaningful and clinically relevant."
},

  // ==================== EASY: ST841–ST875 ====================
  {
    id: "ST841",
    difficulty: "Easy",
    question: "Which structure houses the vocal folds?",
    options: ["Pharynx", "Larynx", "Trachea", "Esophagus"],
    answer: 1,
    explanation: "The larynx contains the vocal folds, which vibrate to produce voiced sound."
  },
  {
    id: "ST842",
    difficulty: "Easy",
    question: "Which cranial nerve primarily controls tongue movement?",
    options: ["V", "VII", "XII", "VIII"],
    answer: 2,
    explanation: "The hypoglossal nerve (XII) supplies most intrinsic and extrinsic tongue muscles."
  },
  {
    id: "ST843",
    difficulty: "Easy",
    question: "Which term describes difficulty producing speech sounds?",
    options: ["Dysarthria", "Dysphagia", "Dysphonia", "Dyslexia"],
    answer: 0,
    explanation: "Dysarthria is a motor speech disorder affecting speech execution."
  },
  {
    id: "ST844",
    difficulty: "Easy",
    question: "Which language component concerns word and sentence meaning?",
    options: ["Phonology", "Syntax", "Pragmatics", "Semantics"],
    answer: 3,
    explanation: "Semantics concerns the meaning of words, phrases, and sentences."
  },
  {
    id: "ST845",
    difficulty: "Easy",
    question: "Which structure separates the oral and nasal cavities during swallowing?",
    options: ["Epiglottis", "Velum", "Vocal ligament", "Hyoid bone"],
    answer: 1,
    explanation: "The velum elevates to close the velopharyngeal port during swallowing."
  },
  {
    id: "ST846",
    difficulty: "Easy",
    question: "Which sound is a voiced bilabial stop?",
    options: ["/p/", "/t/", "/b/", "/k/"],
    answer: 2,
    explanation: "/b/ is produced with both lips closed and vocal-fold vibration."
  },
  {
    id: "ST847",
    difficulty: "Easy",
    question: "What does AAC stand for?",
    options: ["Augmentative and Alternative Communication", "Auditory Assessment and Counseling", "Articulation and Auditory Control", "Adaptive Aphasia Classification"],
    answer: 0,
    explanation: "AAC includes methods and tools that supplement or replace spoken communication."
  },
  {
    id: "ST848",
    difficulty: "Easy",
    question: "Which disorder primarily affects speech fluency?",
    options: ["Aphasia", "Dysphagia", "Dysphonia", "Stuttering"],
    answer: 3,
    explanation: "Stuttering involves disruptions such as repetitions, prolongations, and blocks."
  },
  {
    id: "ST849",
    difficulty: "Easy",
    question: "What is the main purpose of an audiogram?",
    options: ["Measure tongue strength", "Display hearing thresholds", "Assess swallowing safety", "Measure vocal intensity"],
    answer: 1,
    explanation: "An audiogram displays hearing thresholds across tested frequencies."
  },
  {
    id: "ST850",
    difficulty: "Easy",
    question: "Which term refers to the rules for arranging words into sentences?",
    options: ["Morphology", "Phonetics", "Syntax", "Prosody"],
    answer: 2,
    explanation: "Syntax governs how words combine into phrases and sentences."
  },
  {
    id: "ST851",
    difficulty: "Easy",
    question: "Which cranial nerve carries most taste sensation from the anterior two-thirds of the tongue?",
    options: ["Facial nerve (VII)", "Vagus nerve (X)", "Hypoglossal nerve (XII)", "Accessory nerve (XI)"],
    answer: 0,
    explanation: "Taste from the anterior two-thirds travels mainly through the chorda tympani branch of CN VII."
  },
  {
    id: "ST852",
    difficulty: "Easy",
    question: "What is the primary role of the epiglottis during swallowing?",
    options: ["Produce voice", "Move the tongue forward", "Open the esophagus directly", "Contribute to airway protection"],
    answer: 3,
    explanation: "Epiglottic movement contributes to airway protection as part of a coordinated swallowing process."
  },
  {
    id: "ST853",
    difficulty: "Easy",
    question: "Which term describes the smallest meaningful unit of language?",
    options: ["Phoneme", "Morpheme", "Syllable", "Clause"],
    answer: 1,
    explanation: "A morpheme is the smallest linguistic unit carrying meaning or grammatical function."
  },
  {
    id: "ST854",
    difficulty: "Easy",
    question: "Which speech sound is a voiceless alveolar fricative?",
    options: ["/m/", "/d/", "/s/", "/ŋ/"],
    answer: 2,
    explanation: "/s/ is produced with turbulent airflow near the alveolar ridge without voicing."
  },
  {
    id: "ST855",
    difficulty: "Easy",
    question: "What does dysphagia mean?",
    options: ["Difficulty swallowing", "Difficulty hearing", "Difficulty reading", "Difficulty naming"],
    answer: 0,
    explanation: "Dysphagia is difficulty swallowing and may affect safety or efficiency."
  },
  {
    id: "ST856",
    difficulty: "Easy",
    question: "Which language domain concerns using communication appropriately in social situations?",
    options: ["Morphology", "Phonology", "Semantics", "Pragmatics"],
    answer: 3,
    explanation: "Pragmatics includes conversational turn-taking, topic management, and adapting language to context."
  },
  {
    id: "ST857",
    difficulty: "Easy",
    question: "Which disorder involves impaired language due to acquired brain damage?",
    options: ["Apraxia of speech", "Aphasia", "Dysphonia", "Stuttering"],
    answer: 1,
    explanation: "Aphasia is an acquired language disorder caused by brain damage."
  },
  {
    id: "ST858",
    difficulty: "Easy",
    question: "Which measure is commonly used to describe how loud a voice sounds?",
    options: ["Hertz", "Seconds", "Decibels", "Centimeters"],
    answer: 2,
    explanation: "Sound pressure level is commonly expressed in decibels (dB)."
  },
  {
    id: "ST859",
    difficulty: "Easy",
    question: "What is the primary purpose of a hearing screening?",
    options: ["Identify people who may need further hearing assessment", "Diagnose every type of hearing loss", "Measure language comprehension", "Determine swallowing ability"],
    answer: 0,
    explanation: "Screening identifies possible hearing difficulties; diagnostic assessment establishes the nature and degree of loss."
  },
  {
    id: "ST860",
    difficulty: "Easy",
    question: "Which muscle group is most directly involved in lip closure?",
    options: ["Masseter", "Temporalis", "Sternocleidomastoid", "Orbicularis oris"],
    answer: 3,
    explanation: "Orbicularis oris encircles the mouth and contributes to lip closure and shaping."
  },
  {
    id: "ST861",
    difficulty: "Easy",
    question: "Which term describes the pitch pattern and rhythm of speech?",
    options: ["Articulation", "Prosody", "Resonance", "Phonemic awareness"],
    answer: 1,
    explanation: "Prosody includes intonation, stress, rhythm, and timing."
  },
  {
    id: "ST862",
    difficulty: "Easy",
    question: "Which assessment activity best samples spontaneous expressive language?",
    options: ["Pure-tone screening", "Oral temperature measurement", "Conversation or picture-based language sampling", "Otoscopy alone"],
    answer: 2,
    explanation: "A naturalistic language sample reveals how a person communicates spontaneously."
  },
  {
    id: "ST863",
    difficulty: "Easy",
    question: "Which disorder involves difficulty planning and programming speech movements?",
    options: ["Apraxia of speech", "Conductive hearing loss", "Dysphagia", "Receptive aphasia only"],
    answer: 0,
    explanation: "Apraxia of speech affects the planning or programming of speech movements."
  },
  {
    id: "ST864",
    difficulty: "Easy",
    question: "Which structure is the principal source of vocal-fold vibration in typical voiced speech?",
    options: ["Tongue", "Hard palate", "Lips", "Vocal folds"],
    answer: 3,
    explanation: "Airflow through appropriately positioned vocal folds produces vibration for voiced sound."
  },
  {
    id: "ST865",
    difficulty: "Easy",
    question: "What does receptive language refer to?",
    options: ["The ability to produce speech sounds", "Understanding spoken or signed language", "The ability to write neatly", "Control of breathing during speech"],
    answer: 1,
    explanation: "Receptive language involves understanding language received from others."
  },
  {
    id: "ST866",
    difficulty: "Easy",
    question: "Which instrument is commonly used to inspect the ear canal and eardrum?",
    options: ["Laryngoscope", "Spirometer", "Otoscope", "Manometer"],
    answer: 2,
    explanation: "An otoscope permits visual examination of the external ear canal and tympanic membrane."
  },
  {
    id: "ST867",
    difficulty: "Easy",
    question: "Which is an example of an expressive language difficulty?",
    options: ["Difficulty formulating sentences to explain an event", "Difficulty detecting a quiet tone", "Reduced lung capacity alone", "Ear pain during examination"],
    answer: 0,
    explanation: "Expressive language concerns conveying ideas through words, signs, or other language forms."
  },
  {
    id: "ST868",
    difficulty: "Easy",
    question: "What is the primary function of the auditory system?",
    options: ["Control tongue movement", "Produce saliva", "Protect the airway during swallowing", "Detect and process sound"],
    answer: 3,
    explanation: "The auditory system detects sound and transmits and processes auditory information."
  },
  {
    id: "ST869",
    difficulty: "Easy",
    question: "Which professional commonly evaluates and treats communication and swallowing disorders?",
    options: ["Radiographer", "Speech-language pathologist", "Optometrist", "Physiotherapist exclusively"],
    answer: 1,
    explanation: "Speech-language pathologists assess and manage communication and swallowing disorders within their scope of practice."
  },
  {
    id: "ST870",
    difficulty: "Easy",
    question: "Which activity directly targets phonological awareness?",
    options: ["Measuring vocal-fold vibration", "Practicing standing balance", "Identifying the first sound in a word", "Testing visual acuity"],
    answer: 2,
    explanation: "Phonological awareness involves recognizing and manipulating the sound structure of spoken language."
  },
  {
    id: "ST871",
    difficulty: "Easy",
    question: "Which term describes a voice that sounds unusually breathy, rough, or strained?",
    options: ["Dysphonia", "Dyslexia", "Dysarthria exclusively", "Dyscalculia"],
    answer: 0,
    explanation: "Dysphonia refers to impaired voice quality, pitch, loudness, or effort."
  },
  {
    id: "ST872",
    difficulty: "Easy",
    question: "What is a common purpose of using pictures in a communication board?",
    options: ["Measure hearing thresholds", "Strengthen vocal folds directly", "Diagnose aspiration", "Provide visual symbols for expressing messages"],
    answer: 3,
    explanation: "Picture-based communication boards provide symbols that users can select to communicate."
  },
  {
    id: "ST873",
    difficulty: "Easy",
    question: "Which term describes the ability to recognize that words contain separate sounds?",
    options: ["Semantic mapping", "Phonemic awareness", "Vocal hygiene", "Auditory neuropathy"],
    answer: 1,
    explanation: "Phonemic awareness is awareness of individual phonemes within spoken words."
  },
  {
    id: "ST874",
    difficulty: "Easy",
    question: "Which cranial nerve is primarily responsible for facial expression movements?",
    options: ["Trigeminal nerve (V)", "Hypoglossal nerve (XII)", "Facial nerve (VII)", "Olfactory nerve (I)"],
    answer: 2,
    explanation: "The facial nerve supplies the muscles of facial expression, including muscles used for lip movement."
  },
  {
    id: "ST875",
    difficulty: "Easy",
    question: "What is the main purpose of establishing a baseline before therapy?",
    options: ["Document current performance for comparison", "Guarantee immediate improvement", "Replace all subsequent assessment", "Avoid setting measurable goals"],
    answer: 0,
    explanation: "Baseline data allow clinicians to compare later performance and evaluate change."
  },

  // ==================== MODERATE: ST876–ST910 ====================
  {
    id: "ST876",
    difficulty: "Moderate",
    question: "A child consistently says /t/ for /k/. Which process best describes this pattern?",
    options: ["Stopping", "Fronting", "Backing", "Final consonant deletion"],
    answer: 1,
    explanation: "Velar fronting occurs when a sound such as /k/ is replaced by a more anterior sound such as /t/."
  },
  {
    id: "ST877",
    difficulty: "Moderate",
    question: "A client speaks fluently but produces empty, poorly informative sentences and has impaired comprehension. Which aphasia profile is most consistent?",
    options: ["Broca aphasia", "Transcortical motor aphasia", "Wernicke aphasia", "Pure dysarthria"],
    answer: 2,
    explanation: "Wernicke aphasia commonly involves fluent but impaired language output and reduced auditory comprehension."
  },
  {
    id: "ST878",
    difficulty: "Moderate",
    question: "Which measure most directly assesses speech intelligibility?",
    options: ["Percentage of words understood by a listener", "Maximum tongue protrusion distance alone", "Pure-tone threshold at 1 kHz alone", "Duration of a single breath hold"],
    answer: 0,
    explanation: "Intelligibility can be measured by the proportion of a speech sample correctly understood by listeners."
  },
  {
    id: "ST879",
    difficulty: "Moderate",
    question: "A child has normal hearing but difficulty understanding complex grammatical sentences. Which domain should be examined closely?",
    options: ["Voice resonance", "Respiratory support", "Oral strength only", "Receptive syntax"],
    answer: 3,
    explanation: "Receptive syntax concerns understanding grammatical structures in sentences."
  },
  {
    id: "ST880",
    difficulty: "Moderate",
    question: "Which finding most strongly suggests a phonological rather than isolated phonetic disorder?",
    options: ["One distorted /s/ sound in all contexts", "A systematic pattern of sound substitutions across classes", "Hoarseness after shouting", "Reduced vocal loudness caused by weakness"],
    answer: 1,
    explanation: "Phonological disorders involve systematic patterns that affect sound contrasts or sound classes."
  },
  {
    id: "ST881",
    difficulty: "Moderate",
    question: "Which clinical sign during a meal requires prompt assessment for possible swallowing impairment?",
    options: ["Enjoying a preferred flavor", "Requesting a smaller spoon", "Coughing repeatedly while drinking", "Chewing a familiar soft food"],
    answer: 2,
    explanation: "Repeated coughing during drinking may indicate swallowing difficulty and warrants clinical assessment."
  },
  {
    id: "ST882",
    difficulty: "Moderate",
    question: "Which technique is most appropriate for evaluating vocal-fold movement directly?",
    options: ["Laryngoscopy performed by an appropriately trained clinician", "A conversational language sample alone", "A pure-tone audiogram", "A tongue-tie screening questionnaire alone"],
    answer: 0,
    explanation: "Laryngoscopic examination allows visualization of laryngeal structures and vocal-fold movement."
  },
  {
    id: "ST883",
    difficulty: "Moderate",
    question: "A child can follow familiar one-step directions but struggles with unfamiliar two-step directions. What should the clinician examine next?",
    options: ["Only speech sound accuracy", "Only maximum phonation time", "Only lip strength", "Language comprehension under increasing linguistic and memory demands"],
    answer: 3,
    explanation: "Complex directions increase language-processing and working-memory demands, so these factors should be examined."
  },
  {
    id: "ST884",
    difficulty: "Moderate",
    question: "Which approach is generally appropriate when treating a phoneme-specific articulation error?",
    options: ["Avoid auditory models entirely", "Use an appropriate sound-placement cue and structured practice", "Begin with unrestricted conversation only", "Focus exclusively on reading comprehension"],
    answer: 1,
    explanation: "Placement cues and graduated practice can help establish and generalize a target sound."
  },
  {
    id: "ST885",
    difficulty: "Moderate",
    question: "Which finding is characteristic of unilateral upper motor neuron dysarthria?",
    options: ["Language comprehension impairment as the defining feature", "Complete inability to plan any speech movement", "Often mild-to-moderate dysarthria with possible contralateral lower facial weakness", "A voice disorder with no possible speech motor signs"],
    answer: 2,
    explanation: "Unilateral upper motor neuron damage can produce dysarthria and contralateral lower facial weakness."
  },
  {
    id: "ST886",
    difficulty: "Moderate",
    question: "Which task best assesses confrontation naming?",
    options: ["Asking the client to name pictured objects", "Asking the client to repeat a long paragraph", "Asking the client to follow a gesture", "Measuring respiratory rate at rest"],
    answer: 0,
    explanation: "Confrontation naming requires producing the name of a presented object or picture."
  },
  {
    id: "ST887",
    difficulty: "Moderate",
    question: "Which is the best initial response when a client reports sudden new difficulty speaking?",
    options: ["Schedule routine therapy next month", "Begin articulation drills immediately", "Assume the difficulty is anxiety-related", "Treat it as a potential medical emergency and activate urgent assessment"],
    answer: 3,
    explanation: "Sudden-onset speech or language difficulty can indicate stroke or another emergency and requires immediate medical evaluation."
  },
  {
    id: "ST888",
    difficulty: "Moderate",
    question: "Which measure is commonly used to quantify stuttering frequency in a speech sample?",
    options: ["Words per page", "Percentage of syllables stuttered", "Mean hearing threshold", "Maximum tongue pressure alone"],
    answer: 1,
    explanation: "Percentage of syllables stuttered is a commonly used measure of stuttering frequency."
  },
  {
    id: "ST889",
    difficulty: "Moderate",
    question: "Which strategy can support a person with aphasia during conversation?",
    options: ["Speak rapidly and avoid pauses", "Correct every error before responding", "Use short clear messages and allow adequate response time", "Ask several complex questions simultaneously"],
    answer: 2,
    explanation: "Clear language, adequate response time, and supportive communication reduce unnecessary barriers."
  },
  {
    id: "ST890",
    difficulty: "Moderate",
    question: "Which finding is most consistent with hypernasality?",
    options: ["Excessive nasal resonance on oral speech sounds", "A consistently low speaking pitch", "A prolonged silent pause before speaking", "Difficulty distinguishing two written words"],
    answer: 0,
    explanation: "Hypernasality is excessive nasal resonance, particularly noticeable on vowels and other oral speech sounds."
  },
  {
    id: "ST891",
    difficulty: "Moderate",
    question: "A child uses single words but rarely combines them despite frequent opportunities. Which area should be assessed?",
    options: ["Only hearing thresholds", "Only oral-motor strength", "Only voice quality", "Expressive morphosyntax and language development"],
    answer: 3,
    explanation: "Assessment should examine vocabulary, word combinations, grammatical development, and relevant contributing factors."
  },
  {
    id: "ST892",
    difficulty: "Moderate",
    question: "What is the main purpose of dynamic assessment?",
    options: ["Replace all standardized testing in every case", "Evaluate learning potential through supported teaching and reassessment", "Measure hearing thresholds without equipment", "Establish a diagnosis from one unstructured observation"],
    answer: 1,
    explanation: "Dynamic assessment examines how a person responds to mediation, cues, and learning opportunities."
  },
  {
    id: "ST893",
    difficulty: "Moderate",
    question: "Which observation is most relevant when assessing voice use in a teacher with vocal fatigue?",
    options: ["Favorite reading genre", "Dominant writing hand", "Vocal load, speaking habits, and symptom pattern", "Ability to identify colors"],
    answer: 2,
    explanation: "Occupational voice demands, vocal behaviors, and symptoms help guide voice assessment and management."
  },
  {
    id: "ST894",
    difficulty: "Moderate",
    question: "Which assessment is commonly used to visualize swallowing physiology dynamically?",
    options: ["Videofluoroscopic swallowing study", "Pure-tone audiometry", "Standard spelling test", "Acoustic voice recording alone"],
    answer: 0,
    explanation: "A videofluoroscopic swallowing study uses moving X-ray imaging to assess swallowing physiology."
  },
  {
    id: "ST895",
    difficulty: "Moderate",
    question: "Which feature helps distinguish apraxia of speech from dysarthria?",
    options: ["Apraxia always causes hearing loss", "Dysarthria always impairs language comprehension", "Apraxia is defined by vocal-fold paralysis", "Apraxia primarily affects motor planning, while dysarthria reflects impaired motor execution"],
    answer: 3,
    explanation: "Apraxia of speech is a motor-planning disorder; dysarthria results from impaired neuromuscular execution."
  },
  {
    id: "ST896",
    difficulty: "Moderate",
    question: "Which is an appropriate goal for a child with difficulty following classroom instructions?",
    options: ["The child will improve communication someday", "The child will follow two-step classroom directions with defined accuracy and support", "The clinician will explain directions more often", "The child will attend therapy whenever possible"],
    answer: 1,
    explanation: "Measurable goals specify the behavior, conditions, and performance criterion."
  },
  {
    id: "ST897",
    difficulty: "Moderate",
    question: "Which term describes difficulty retrieving a word despite knowing what one wants to say?",
    options: ["Hyperacusis", "Dysphagia", "Anomia", "Apnea"],
    answer: 2,
    explanation: "Anomia is difficulty retrieving or producing words, often associated with aphasia."
  },
  {
    id: "ST898",
    difficulty: "Moderate",
    question: "Which is a key feature of evidence-based clinical practice?",
    options: ["Integrating research evidence, clinical expertise, and client values", "Following one treatment method for every client", "Ignoring client preferences", "Using personal experience as the only source"],
    answer: 0,
    explanation: "Evidence-based practice integrates research, professional expertise, and client circumstances and preferences."
  },
  {
    id: "ST899",
    difficulty: "Moderate",
    question: "A child substitutes /w/ for /r/. Which broad category of speech error is this?",
    options: ["Distortion only", "Insertion", "Omission", "Substitution"],
    answer: 3,
    explanation: "A substitution occurs when one speech sound is produced in place of another."
  },
  {
    id: "ST900",
    difficulty: "Moderate",
    question: "Which approach is most appropriate when a child communicates effectively using an AAC device?",
    options: ["Withhold the device until speech develops", "Support AAC use while modeling communication and respecting the child's access", "Require speech before acknowledging messages", "Use the device only during formal testing"],
    answer: 1,
    explanation: "AAC should support functional communication and does not need to be withheld while spoken language develops."
  },
  {
    id: "ST901",
    difficulty: "Moderate",
    question: "Which finding is commonly associated with conductive hearing loss?",
    options: ["Damage exclusively to language-processing areas", "Always absent auditory responses at every intensity", "An air-bone gap on audiometry", "Normal middle-ear function in every case"],
    answer: 2,
    explanation: "Conductive hearing loss often produces poorer air-conduction than bone-conduction thresholds."
  },
  {
    id: "ST902",
    difficulty: "Moderate",
    question: "Which is the best way to judge whether a therapy skill generalizes?",
    options: ["Observe performance with different people, materials, or settings", "Repeat only the original drill with the same cards", "Count only attendance", "Compare the client's performance with the clinician's"],
    answer: 0,
    explanation: "Generalization is demonstrated when a skill transfers beyond the specific training conditions."
  },
  {
    id: "ST903",
    difficulty: "Moderate",
    question: "Which symptom may indicate a need for medical evaluation in a client with voice problems?",
    options: ["A preference for quiet rooms", "An interest in singing", "A request for water", "Persistent hoarseness, especially with concerning associated symptoms"],
    answer: 3,
    explanation: "Persistent hoarseness warrants appropriate medical assessment, particularly when red-flag symptoms are present."
  },
  {
    id: "ST904",
    difficulty: "Moderate",
    question: "Which activity primarily targets auditory comprehension in aphasia therapy?",
    options: ["Practicing lip closure in isolation", "Following spoken commands of graded complexity", "Producing sustained vowels only", "Measuring maximum expiratory pressure"],
    answer: 1,
    explanation: "Following spoken commands can target comprehension, with task complexity adjusted to the person's abilities."
  },
  {
    id: "ST905",
    difficulty: "Moderate",
    question: "What is the purpose of a case history during an initial assessment?",
    options: ["Confirm the diagnosis without further assessment", "Replace direct observation", "Gather relevant developmental, medical, and communication information", "Determine treatment success before therapy begins"],
    answer: 2,
    explanation: "Case history information guides assessment planning and interpretation of findings."
  },
  {
    id: "ST906",
    difficulty: "Moderate",
    question: "Which statement about oral-motor exercises for speech sound disorders is most accurate?",
    options: ["They should not be used routinely without evidence that they address the specific speech problem", "They are always more effective than speech practice", "They eliminate the need to assess phonological patterns", "They are required for every child with an articulation disorder"],
    answer: 0,
    explanation: "Nonspeech oral-motor exercises should not be assumed effective for speech; intervention should target the demonstrated impairment."
  },
  {
    id: "ST907",
    difficulty: "Moderate",
    question: "Which factor is essential when interpreting a standardized language test score?",
    options: ["The examiner's preferred therapy method", "The client's favorite activity alone", "The number of items the clinician remembers", "The test's norms, validity, reliability, and suitability for the client"],
    answer: 3,
    explanation: "Scores must be interpreted in light of test quality, normative appropriateness, and the client's background."
  },
  {
    id: "ST908",
    difficulty: "Moderate",
    question: "Which pattern is most suggestive of a resonance disorder rather than a primary articulation error?",
    options: ["Replacing /k/ with /t/ consistently", "Excessive nasal airflow or resonance on pressure consonants", "Omitting the final consonant in words", "Repeating initial syllables involuntarily"],
    answer: 1,
    explanation: "Abnormal nasal airflow or resonance can indicate velopharyngeal dysfunction and requires appropriate assessment."
  },
  {
    id: "ST909",
    difficulty: "Moderate",
    question: "Which method best evaluates functional communication after a brain injury?",
    options: ["A single isolated vowel task", "A pure-tone screen alone", "Observation of communication in meaningful daily activities", "A reflex examination alone"],
    answer: 2,
    explanation: "Functional assessment examines communication effectiveness in real-life contexts."
  },
  {
    id: "ST910",
    difficulty: "Moderate",
    question: "Which action best supports informed consent for an assessment?",
    options: ["Explain the procedure, purpose, relevant risks, and choices in understandable language", "Begin without explanation if the appointment is short", "Promise a specific diagnosis before testing", "Avoid answering questions about the assessment"],
    answer: 0,
    explanation: "Informed consent requires understandable information and a voluntary decision consistent with applicable law and policy."
  },

  // ==================== HARD: ST911–ST945 ====================
  {
    id: "ST911",
    difficulty: "Hard",
    question: "A client has effortful, nonfluent speech, relatively preserved comprehension, and impaired repetition. Which aphasia syndrome is most consistent?",
    options: ["Wernicke aphasia", "Broca aphasia", "Conduction aphasia", "Transcortical sensory aphasia"],
    answer: 1,
    explanation: "Broca aphasia typically features nonfluent output, relatively better comprehension, and impaired repetition."
  },
  {
    id: "ST912",
    difficulty: "Hard",
    question: "A client produces fluent speech with frequent phonemic errors and has disproportionately poor repetition despite relatively preserved comprehension. Which syndrome is most likely?",
    options: ["Broca aphasia", "Transcortical motor aphasia", "Conduction aphasia", "Global aphasia"],
    answer: 2,
    explanation: "Conduction aphasia is classically associated with impaired repetition and phonemic errors despite relatively fluent speech."
  },
  {
    id: "ST913",
    difficulty: "Hard",
    question: "A child has inconsistent consonant and vowel errors, disrupted transitions between sounds, and inappropriate lexical stress. Which diagnosis should be strongly considered?",
    options: ["Childhood apraxia of speech", "Isolated conductive hearing loss", "Developmental voice disorder", "Phonological delay without motor-planning signs"],
    answer: 0,
    explanation: "Inconsistent errors, disrupted transitions, and abnormal prosody are recognized features of childhood apraxia of speech."
  },
  {
    id: "ST914",
    difficulty: "Hard",
    question: "During a swallowing study, material enters the laryngeal vestibule but remains above the vocal folds. How is this described?",
    options: ["Aspiration", "Esophageal reflux", "Pharyngeal residue", "Penetration"],
    answer: 3,
    explanation: "Penetration occurs when material enters the laryngeal vestibule but does not pass below the vocal folds."
  },
  {
    id: "ST915",
    difficulty: "Hard",
    question: "Which finding distinguishes aspiration from laryngeal penetration?",
    options: ["Material remains in the oral cavity", "Material passes below the vocal folds", "Material stays above the vocal folds", "Material remains on the tongue"],
    answer: 1,
    explanation: "Aspiration is defined by material passing below the level of the vocal folds."
  },
  {
    id: "ST916",
    difficulty: "Hard",
    question: "A patient with dysarthria has reduced loudness, monopitch, and short phrases following Parkinsonian changes. Which treatment approach may be appropriate after assessment?",
    options: ["Eliminate all speaking tasks", "Use nonspeech tongue exercises as the only intervention", "An intensive voice treatment targeting vocal effort and loudness, when clinically appropriate", "Focus exclusively on written spelling"],
    answer: 2,
    explanation: "Voice-based treatment such as LSVT LOUD may be appropriate for selected people with Parkinson's disease after individualized assessment."
  },
  {
    id: "ST917",
    difficulty: "Hard",
    question: "Which statement about silent aspiration is correct?",
    options: ["Aspiration may occur without an obvious cough or outward response", "It always produces forceful coughing", "It can be ruled out by normal conversational speech", "It occurs only in children"],
    answer: 0,
    explanation: "Reduced laryngeal sensation or impaired protective responses may allow aspiration without overt signs."
  },
  {
    id: "ST918",
    difficulty: "Hard",
    question: "A child scores within normal limits on a language test but struggles to communicate in class. What is the best next step?",
    options: ["Dismiss the teacher's concerns", "Diagnose a language disorder from classroom behavior alone", "Repeat the same test indefinitely", "Gather contextual information and assess functional communication across settings"],
    answer: 3,
    explanation: "Standardized scores should be integrated with functional observations, interviews, and other relevant evidence."
  },
  {
    id: "ST919",
    difficulty: "Hard",
    question: "Which acoustic measure represents the average fundamental frequency of a voiced sample?",
    options: ["Jitter", "Mean F0", "Harmonics-to-noise ratio", "Intensity range"],
    answer: 1,
    explanation: "Mean fundamental frequency summarizes the average rate of vocal-fold vibration in the analyzed sample."
  },
  {
    id: "ST920",
    difficulty: "Hard",
    question: "Which statement best distinguishes jitter from shimmer?",
    options: ["Jitter measures average loudness; shimmer measures pitch range", "Jitter measures resonance; shimmer measures articulation", "Jitter measures cycle-to-cycle frequency variation; shimmer measures cycle-to-cycle amplitude variation", "Jitter measures language fluency; shimmer measures word retrieval"],
    answer: 2,
    explanation: "Jitter reflects short-term frequency variation, while shimmer reflects short-term amplitude variation."
  },
  {
    id: "ST921",
    difficulty: "Hard",
    question: "A child demonstrates weak grammatical morphology and poor sentence repetition but age-appropriate nonverbal reasoning. What is the most defensible interpretation?",
    options: ["The findings warrant comprehensive language assessment; no single feature alone establishes a diagnosis", "Age-appropriate nonverbal reasoning rules out developmental language disorder", "Sentence repetition alone proves hearing loss", "The child necessarily has childhood apraxia of speech"],
    answer: 0,
    explanation: "Language findings must be interpreted holistically, considering functional impact, language exposure, hearing, and differential diagnoses."
  },
  {
    id: "ST922",
    difficulty: "Hard",
    question: "Which structure is particularly associated with coordinating bilateral vocal-fold abduction during inspiration?",
    options: ["Thyroarytenoid muscle alone", "Orbicularis oris", "Masseter", "Posterior cricoarytenoid muscles"],
    answer: 3,
    explanation: "The posterior cricoarytenoid muscles are the principal abductors of the vocal folds."
  },
  {
    id: "ST923",
    difficulty: "Hard",
    question: "A patient has hoarseness following thyroid surgery. Which action is most appropriate before selecting targeted voice exercises?",
    options: ["Assume the symptoms are behavioral", "Arrange appropriate laryngeal evaluation and coordinate medical follow-up", "Prescribe maximal shouting practice", "Avoid obtaining any relevant medical history"],
    answer: 1,
    explanation: "Postoperative hoarseness may involve laryngeal nerve injury or other pathology and requires appropriate evaluation."
  },
  {
    id: "ST924",
    difficulty: "Hard",
    question: "Which feature is most characteristic of transcortical motor aphasia?",
    options: ["Fluent jargon with severely impaired comprehension", "Severely impaired repetition in every case", "Nonfluent output with relatively preserved repetition", "Isolated swallowing impairment without language symptoms"],
    answer: 2,
    explanation: "Transcortical motor aphasia often presents with reduced spontaneous output and relatively preserved repetition."
  },
  {
    id: "ST925",
    difficulty: "Hard",
    question: "A clinician wants to determine whether a treatment effect exceeds ordinary measurement variability. Which concept is most relevant?",
    options: ["Measurement error and reliable change", "The clinician's confidence alone", "The number of sessions attended alone", "The patient's age in isolation"],
    answer: 0,
    explanation: "Reliable-change methods consider measurement reliability and expected variability when interpreting score differences."
  },
  {
    id: "ST926",
    difficulty: "Hard",
    question: "Which principle is most important when adapting a communication assessment for a multilingual client?",
    options: ["Test only the language in which the client is least proficient", "Treat differences between languages as proof of disorder", "Ignore the client's language history", "Consider language exposure, proficiency, cultural context, and performance across relevant languages"],
    answer: 3,
    explanation: "Multilingual assessment should distinguish language difference from disorder using comprehensive, culturally responsive evidence."
  },
  {
    id: "ST927",
    difficulty: "Hard",
    question: "A child produces a sound correctly in isolation but not in connected speech. Which treatment progression is generally appropriate?",
    options: ["Stop practicing the target sound", "Move through increasingly complex contexts while monitoring accuracy and generalization", "Return permanently to auditory screening", "Work only on nonspeech blowing tasks"],
    answer: 1,
    explanation: "Practice can progress from simpler contexts to syllables, words, phrases, and connected speech as accuracy improves."
  },
  {
    id: "ST928",
    difficulty: "Hard",
    question: "Which statement about the Penetration-Aspiration Scale is correct?",
    options: ["It measures expressive vocabulary", "It measures vocal pitch only", "It ranks the depth of airway invasion and the response to material entering the airway", "It directly measures hearing thresholds"],
    answer: 2,
    explanation: "The Penetration-Aspiration Scale grades airway invasion during swallowing and associated responses."
  },
  {
    id: "ST929",
    difficulty: "Hard",
    question: "Which finding may suggest an upper motor neuron contribution to dysarthria?",
    options: ["Spasticity, strained voice, and slow effortful speech", "Isolated difficulty understanding written words", "Purely inconsistent lexical retrieval errors", "Normal motor speech with isolated tinnitus"],
    answer: 0,
    explanation: "Bilateral upper motor neuron involvement may produce spasticity and strained, effortful speech."
  },
  {
    id: "ST930",
    difficulty: "Hard",
    question: "When selecting a dysphagia intervention, which factor should carry the greatest weight?",
    options: ["Whether the technique is popular online", "Whether it is easiest for the clinician", "Whether every patient on the ward uses it", "The patient's instrumental and clinical findings, goals, physiology, and ability to perform the strategy"],
    answer: 3,
    explanation: "Swallowing interventions should be individualized to assessment findings, patient needs, and the relevant evidence."
  },
  {
    id: "ST931",
    difficulty: "Hard",
    question: "A patient can repeat spoken sentences accurately but has difficulty understanding them and generating meaningful spontaneous speech. Which interpretation is most appropriate?",
    options: ["Repetition proves that all language functions are intact", "Language abilities can dissociate; assess comprehension and spontaneous language separately", "The patient necessarily has dysarthria only", "The pattern rules out acquired language impairment"],
    answer: 1,
    explanation: "Language components may be differentially impaired, so repetition cannot stand in for a complete language assessment."
  },
  {
    id: "ST932",
    difficulty: "Hard",
    question: "Which observation is most useful for differentiating a phonological disorder from a motor-based articulation disorder?",
    options: ["The child's preferred toy", "The number of school holidays", "Whether errors form systematic sound-pattern contrasts or involve phonetic distortion and placement difficulty", "The child's handedness alone"],
    answer: 2,
    explanation: "Error patterns, phonetic quality, stimulability, and motor-speech findings help distinguish phonological and articulation difficulties."
  },
  {
    id: "ST933",
    difficulty: "Hard",
    question: "A client with severe aphasia has difficulty communicating basic needs. Which intervention priority is most appropriate?",
    options: ["Establish reliable functional communication using supported speech and AAC as appropriate", "Require fluent spoken sentences before responding", "Focus solely on advanced figurative language", "Delay all communication support until naming is normal"],
    answer: 0,
    explanation: "Early functional communication support helps the client express needs and participate while rehabilitation continues."
  },
  {
    id: "ST934",
    difficulty: "Hard",
    question: "Which statement about maximum phonation time is most accurate?",
    options: ["It directly diagnoses a specific laryngeal lesion", "It is a pure measure of language comprehension", "It measures the number of syllables stuttered", "It is one measure of sustained phonation influenced by respiratory, laryngeal, and task factors"],
    answer: 3,
    explanation: "Maximum phonation time is influenced by multiple physiological and task variables and cannot independently establish a diagnosis."
  },
  {
    id: "ST935",
    difficulty: "Hard",
    question: "Which approach is most appropriate when a standardized test has not been normed for a client's linguistic background?",
    options: ["Interpret the standard score as fully valid without qualification", "Use cautious interpretation, document limitations, and supplement with suitable assessment methods", "Assume the lowest score reflects a disorder", "Exclude all qualitative observations"],
    answer: 1,
    explanation: "Normative limitations should be acknowledged and addressed through complementary assessment methods."
  },
  {
    id: "ST936",
    difficulty: "Hard",
    question: "Which feature most strongly supports a diagnosis of dysarthria rather than isolated aphasia?",
    options: ["Impaired understanding of word meanings alone", "Difficulty reading irregular words alone", "Imprecise articulation associated with abnormal strength, tone, coordination, or respiratory-phonatory control", "Poor naming with otherwise normal motor speech"],
    answer: 2,
    explanation: "Dysarthria is a motor speech disorder associated with impaired neuromuscular control of speech."
  },
  {
    id: "ST937",
    difficulty: "Hard",
    question: "A patient has suspected neurogenic dysphagia and recurrent chest infections. What is the best next step?",
    options: ["Arrange prompt, coordinated medical and swallowing assessment, including instrumental evaluation when indicated", "Prescribe thin liquids without assessment", "Assume the infections are unrelated to swallowing", "Begin all compensatory maneuvers without evaluating their suitability"],
    answer: 0,
    explanation: "Recurrent respiratory complications warrant timely medical evaluation and an individualized swallowing assessment."
  },
  {
    id: "ST938",
    difficulty: "Hard",
    question: "Which statement about stimulability testing for speech sounds is correct?",
    options: ["It replaces assessment of connected speech", "It proves that therapy will be unnecessary", "It determines hearing thresholds", "It examines whether the client can produce a target with cues or models and can inform treatment planning"],
    answer: 3,
    explanation: "Stimulability testing shows how a person responds to support and helps guide target selection and cueing."
  },
  {
    id: "ST939",
    difficulty: "Hard",
    question: "Which factor is central to determining whether a treatment outcome is clinically meaningful?",
    options: ["Whether the result is statistically significant in every study", "Whether the change improves relevant function or participation for the client", "Whether the therapy uses expensive equipment", "Whether the clinician prefers the intervention"],
    answer: 1,
    explanation: "Clinical meaningfulness considers functional benefit, client goals, context, and the magnitude and reliability of change."
  },
  {
    id: "ST940",
    difficulty: "Hard",
    question: "Which pattern is most consistent with a primary language impairment rather than a speech sound disorder alone?",
    options: ["One consistent distorted consonant", "A hoarse voice after prolonged shouting", "Difficulty with vocabulary, sentence structure, and comprehension beyond speech production errors", "A single phonetic distortion with intact language"],
    answer: 2,
    explanation: "Broad difficulties across language domains suggest a language impairment that cannot be explained by speech sound errors alone."
  },
  {
    id: "ST941",
    difficulty: "Hard",
    question: "During a bedside swallowing assessment, a patient shows no coughing but has risk factors for impaired sensation. What conclusion is justified?",
    options: ["Absence of coughing does not reliably exclude aspiration; further assessment may be needed", "Swallowing is certainly safe", "Instrumental assessment is never appropriate", "The patient should immediately receive unrestricted oral intake"],
    answer: 0,
    explanation: "Bedside signs may miss silent aspiration; decisions should reflect the overall clinical picture and need for further assessment."
  },
  {
    id: "ST942",
    difficulty: "Hard",
    question: "Which approach best supports carryover of a newly learned speech sound into everyday conversation?",
    options: ["Practice only in isolation indefinitely", "Avoid feedback throughout treatment", "Use the sound only in written worksheets", "Progress to varied words, phrases, conversation, and self-monitoring with suitable feedback"],
    answer: 3,
    explanation: "Gradual practice across increasingly natural contexts supports generalization and independent monitoring."
  },
  {
    id: "ST943",
    difficulty: "Hard",
    question: "A patient has unilateral vocal-fold immobility and a weak, breathy voice. Which concern is especially important to evaluate?",
    options: ["Spelling ability", "Glottic insufficiency and possible airway-protection difficulties", "Visual acuity", "Phonological awareness only"],
    answer: 1,
    explanation: "Vocal-fold immobility can cause incomplete glottic closure, voice weakness, and in some cases swallowing or airway-protection problems."
  },
  {
    id: "ST944",
    difficulty: "Hard",
    question: "Which statement best describes a culturally and linguistically responsive assessment?",
    options: ["Apply identical language expectations regardless of background", "Use one translated test and ignore its norms", "Interpret communication in context, use appropriate language samples and tools, and consider cultural expectations", "Assume bilingual exposure causes language disorder"],
    answer: 2,
    explanation: "Responsive assessment considers the client's languages, experiences, culture, and the limitations of assessment tools."
  },
  {
    id: "ST945",
    difficulty: "Hard",
    question: "Which documentation practice best supports continuity of care?",
    options: ["Record objective findings, goals, intervention, response, and the plan for follow-up", "Document only that the client attended", "Omit changes because they may be temporary", "Record conclusions without supporting observations"],
    answer: 0,
    explanation: "Clear, objective documentation supports clinical decisions, progress monitoring, communication, and continuity of care."
  },

  // ==================== EASY: ST841–ST875 ====================
  {
    id: "ST841",
    difficulty: "Easy",
    question: "Which structure houses the vocal folds?",
    options: ["Pharynx", "Larynx", "Trachea", "Esophagus"],
    answer: 1,
    explanation: "The larynx contains the vocal folds, which vibrate to produce voiced sound."
  },
  {
    id: "ST842",
    difficulty: "Easy",
    question: "Which cranial nerve primarily controls tongue movement?",
    options: ["V", "VII", "XII", "VIII"],
    answer: 2,
    explanation: "The hypoglossal nerve (XII) supplies most intrinsic and extrinsic tongue muscles."
  },
  {
    id: "ST843",
    difficulty: "Easy",
    question: "Which term describes difficulty producing speech sounds?",
    options: ["Dysarthria", "Dysphagia", "Dysphonia", "Dyslexia"],
    answer: 0,
    explanation: "Dysarthria is a motor speech disorder affecting speech execution."
  },
  {
    id: "ST844",
    difficulty: "Easy",
    question: "Which language component concerns word and sentence meaning?",
    options: ["Phonology", "Syntax", "Pragmatics", "Semantics"],
    answer: 3,
    explanation: "Semantics concerns the meaning of words, phrases, and sentences."
  },
  {
    id: "ST845",
    difficulty: "Easy",
    question: "Which structure separates the oral and nasal cavities during swallowing?",
    options: ["Epiglottis", "Velum", "Vocal ligament", "Hyoid bone"],
    answer: 1,
    explanation: "The velum elevates to close the velopharyngeal port during swallowing."
  },
  {
    id: "ST846",
    difficulty: "Easy",
    question: "Which sound is a voiced bilabial stop?",
    options: ["/p/", "/t/", "/b/", "/k/"],
    answer: 2,
    explanation: "/b/ is produced with both lips closed and vocal-fold vibration."
  },
  {
    id: "ST847",
    difficulty: "Easy",
    question: "What does AAC stand for?",
    options: ["Augmentative and Alternative Communication", "Auditory Assessment and Counseling", "Articulation and Auditory Control", "Adaptive Aphasia Classification"],
    answer: 0,
    explanation: "AAC includes methods and tools that supplement or replace spoken communication."
  },
  {
    id: "ST848",
    difficulty: "Easy",
    question: "Which disorder primarily affects speech fluency?",
    options: ["Aphasia", "Dysphagia", "Dysphonia", "Stuttering"],
    answer: 3,
    explanation: "Stuttering involves disruptions such as repetitions, prolongations, and blocks."
  },
  {
    id: "ST849",
    difficulty: "Easy",
    question: "What is the main purpose of an audiogram?",
    options: ["Measure tongue strength", "Display hearing thresholds", "Assess swallowing safety", "Measure vocal intensity"],
    answer: 1,
    explanation: "An audiogram displays hearing thresholds across tested frequencies."
  },
  {
    id: "ST850",
    difficulty: "Easy",
    question: "Which term refers to the rules for arranging words into sentences?",
    options: ["Morphology", "Phonetics", "Syntax", "Prosody"],
    answer: 2,
    explanation: "Syntax governs how words combine into phrases and sentences."
  },
  {
    id: "ST851",
    difficulty: "Easy",
    question: "Which cranial nerve carries most taste sensation from the anterior two-thirds of the tongue?",
    options: ["Facial nerve (VII)", "Vagus nerve (X)", "Hypoglossal nerve (XII)", "Accessory nerve (XI)"],
    answer: 0,
    explanation: "Taste from the anterior two-thirds travels mainly through the chorda tympani branch of CN VII."
  },
  {
    id: "ST852",
    difficulty: "Easy",
    question: "What is the primary role of the epiglottis during swallowing?",
    options: ["Produce voice", "Move the tongue forward", "Open the esophagus directly", "Contribute to airway protection"],
    answer: 3,
    explanation: "Epiglottic movement contributes to airway protection as part of a coordinated swallowing process."
  },
  {
    id: "ST853",
    difficulty: "Easy",
    question: "Which term describes the smallest meaningful unit of language?",
    options: ["Phoneme", "Morpheme", "Syllable", "Clause"],
    answer: 1,
    explanation: "A morpheme is the smallest linguistic unit carrying meaning or grammatical function."
  },
  {
    id: "ST854",
    difficulty: "Easy",
    question: "Which speech sound is a voiceless alveolar fricative?",
    options: ["/m/", "/d/", "/s/", "/ŋ/"],
    answer: 2,
    explanation: "/s/ is produced with turbulent airflow near the alveolar ridge without voicing."
  },
  {
    id: "ST855",
    difficulty: "Easy",
    question: "What does dysphagia mean?",
    options: ["Difficulty swallowing", "Difficulty hearing", "Difficulty reading", "Difficulty naming"],
    answer: 0,
    explanation: "Dysphagia is difficulty swallowing and may affect safety or efficiency."
  },
  {
    id: "ST856",
    difficulty: "Easy",
    question: "Which language domain concerns using communication appropriately in social situations?",
    options: ["Morphology", "Phonology", "Semantics", "Pragmatics"],
    answer: 3,
    explanation: "Pragmatics includes conversational turn-taking, topic management, and adapting language to context."
  },
  {
    id: "ST857",
    difficulty: "Easy",
    question: "Which disorder involves impaired language due to acquired brain damage?",
    options: ["Apraxia of speech", "Aphasia", "Dysphonia", "Stuttering"],
    answer: 1,
    explanation: "Aphasia is an acquired language disorder caused by brain damage."
  },
  {
    id: "ST858",
    difficulty: "Easy",
    question: "Which measure is commonly used to describe how loud a voice sounds?",
    options: ["Hertz", "Seconds", "Decibels", "Centimeters"],
    answer: 2,
    explanation: "Sound pressure level is commonly expressed in decibels (dB)."
  },
  {
    id: "ST859",
    difficulty: "Easy",
    question: "What is the primary purpose of a hearing screening?",
    options: ["Identify people who may need further hearing assessment", "Diagnose every type of hearing loss", "Measure language comprehension", "Determine swallowing ability"],
    answer: 0,
    explanation: "Screening identifies possible hearing difficulties; diagnostic assessment establishes the nature and degree of loss."
  },
  {
    id: "ST860",
    difficulty: "Easy",
    question: "Which muscle group is most directly involved in lip closure?",
    options: ["Masseter", "Temporalis", "Sternocleidomastoid", "Orbicularis oris"],
    answer: 3,
    explanation: "Orbicularis oris encircles the mouth and contributes to lip closure and shaping."
  },
  {
    id: "ST861",
    difficulty: "Easy",
    question: "Which term describes the pitch pattern and rhythm of speech?",
    options: ["Articulation", "Prosody", "Resonance", "Phonemic awareness"],
    answer: 1,
    explanation: "Prosody includes intonation, stress, rhythm, and timing."
  },
  {
    id: "ST862",
    difficulty: "Easy",
    question: "Which assessment activity best samples spontaneous expressive language?",
    options: ["Pure-tone screening", "Oral temperature measurement", "Conversation or picture-based language sampling", "Otoscopy alone"],
    answer: 2,
    explanation: "A naturalistic language sample reveals how a person communicates spontaneously."
  },
  {
    id: "ST863",
    difficulty: "Easy",
    question: "Which disorder involves difficulty planning and programming speech movements?",
    options: ["Apraxia of speech", "Conductive hearing loss", "Dysphagia", "Receptive aphasia only"],
    answer: 0,
    explanation: "Apraxia of speech affects the planning or programming of speech movements."
  },
  {
    id: "ST864",
    difficulty: "Easy",
    question: "Which structure is the principal source of vocal-fold vibration in typical voiced speech?",
    options: ["Tongue", "Hard palate", "Lips", "Vocal folds"],
    answer: 3,
    explanation: "Airflow through appropriately positioned vocal folds produces vibration for voiced sound."
  },
  {
    id: "ST865",
    difficulty: "Easy",
    question: "What does receptive language refer to?",
    options: ["The ability to produce speech sounds", "Understanding spoken or signed language", "The ability to write neatly", "Control of breathing during speech"],
    answer: 1,
    explanation: "Receptive language involves understanding language received from others."
  },
  {
    id: "ST866",
    difficulty: "Easy",
    question: "Which instrument is commonly used to inspect the ear canal and eardrum?",
    options: ["Laryngoscope", "Spirometer", "Otoscope", "Manometer"],
    answer: 2,
    explanation: "An otoscope permits visual examination of the external ear canal and tympanic membrane."
  },
  {
    id: "ST867",
    difficulty: "Easy",
    question: "Which is an example of an expressive language difficulty?",
    options: ["Difficulty formulating sentences to explain an event", "Difficulty detecting a quiet tone", "Reduced lung capacity alone", "Ear pain during examination"],
    answer: 0,
    explanation: "Expressive language concerns conveying ideas through words, signs, or other language forms."
  },
  {
    id: "ST868",
    difficulty: "Easy",
    question: "What is the primary function of the auditory system?",
    options: ["Control tongue movement", "Produce saliva", "Protect the airway during swallowing", "Detect and process sound"],
    answer: 3,
    explanation: "The auditory system detects sound and transmits and processes auditory information."
  },
  {
    id: "ST869",
    difficulty: "Easy",
    question: "Which professional commonly evaluates and treats communication and swallowing disorders?",
    options: ["Radiographer", "Speech-language pathologist", "Optometrist", "Physiotherapist exclusively"],
    answer: 1,
    explanation: "Speech-language pathologists assess and manage communication and swallowing disorders within their scope of practice."
  },
  {
    id: "ST870",
    difficulty: "Easy",
    question: "Which activity directly targets phonological awareness?",
    options: ["Measuring vocal-fold vibration", "Practicing standing balance", "Identifying the first sound in a word", "Testing visual acuity"],
    answer: 2,
    explanation: "Phonological awareness involves recognizing and manipulating the sound structure of spoken language."
  },
  {
    id: "ST871",
    difficulty: "Easy",
    question: "Which term describes a voice that sounds unusually breathy, rough, or strained?",
    options: ["Dysphonia", "Dyslexia", "Dysarthria exclusively", "Dyscalculia"],
    answer: 0,
    explanation: "Dysphonia refers to impaired voice quality, pitch, loudness, or effort."
  },
  {
    id: "ST872",
    difficulty: "Easy",
    question: "What is a common purpose of using pictures in a communication board?",
    options: ["Measure hearing thresholds", "Strengthen vocal folds directly", "Diagnose aspiration", "Provide visual symbols for expressing messages"],
    answer: 3,
    explanation: "Picture-based communication boards provide symbols that users can select to communicate."
  },
  {
    id: "ST873",
    difficulty: "Easy",
    question: "Which term describes the ability to recognize that words contain separate sounds?",
    options: ["Semantic mapping", "Phonemic awareness", "Vocal hygiene", "Auditory neuropathy"],
    answer: 1,
    explanation: "Phonemic awareness is awareness of individual phonemes within spoken words."
  },
  {
    id: "ST874",
    difficulty: "Easy",
    question: "Which cranial nerve is primarily responsible for facial expression movements?",
    options: ["Trigeminal nerve (V)", "Hypoglossal nerve (XII)", "Facial nerve (VII)", "Olfactory nerve (I)"],
    answer: 2,
    explanation: "The facial nerve supplies the muscles of facial expression, including muscles used for lip movement."
  },
  {
    id: "ST875",
    difficulty: "Easy",
    question: "What is the main purpose of establishing a baseline before therapy?",
    options: ["Document current performance for comparison", "Guarantee immediate improvement", "Replace all subsequent assessment", "Avoid setting measurable goals"],
    answer: 0,
    explanation: "Baseline data allow clinicians to compare later performance and evaluate change."
  },

  // ==================== MODERATE: ST876–ST910 ====================
  {
    id: "ST876",
    difficulty: "Moderate",
    question: "A child consistently says /t/ for /k/. Which process best describes this pattern?",
    options: ["Stopping", "Fronting", "Backing", "Final consonant deletion"],
    answer: 1,
    explanation: "Velar fronting occurs when a sound such as /k/ is replaced by a more anterior sound such as /t/."
  },
  {
    id: "ST877",
    difficulty: "Moderate",
    question: "A client speaks fluently but produces empty, poorly informative sentences and has impaired comprehension. Which aphasia profile is most consistent?",
    options: ["Broca aphasia", "Transcortical motor aphasia", "Wernicke aphasia", "Pure dysarthria"],
    answer: 2,
    explanation: "Wernicke aphasia commonly involves fluent but impaired language output and reduced auditory comprehension."
  },
  {
    id: "ST878",
    difficulty: "Moderate",
    question: "Which measure most directly assesses speech intelligibility?",
    options: ["Percentage of words understood by a listener", "Maximum tongue protrusion distance alone", "Pure-tone threshold at 1 kHz alone", "Duration of a single breath hold"],
    answer: 0,
    explanation: "Intelligibility can be measured by the proportion of a speech sample correctly understood by listeners."
  },
  {
    id: "ST879",
    difficulty: "Moderate",
    question: "A child has normal hearing but difficulty understanding complex grammatical sentences. Which domain should be examined closely?",
    options: ["Voice resonance", "Respiratory support", "Oral strength only", "Receptive syntax"],
    answer: 3,
    explanation: "Receptive syntax concerns understanding grammatical structures in sentences."
  },
  {
    id: "ST880",
    difficulty: "Moderate",
    question: "Which finding most strongly suggests a phonological rather than isolated phonetic disorder?",
    options: ["One distorted /s/ sound in all contexts", "A systematic pattern of sound substitutions across classes", "Hoarseness after shouting", "Reduced vocal loudness caused by weakness"],
    answer: 1,
    explanation: "Phonological disorders involve systematic patterns that affect sound contrasts or sound classes."
  },
  {
    id: "ST881",
    difficulty: "Moderate",
    question: "Which clinical sign during a meal requires prompt assessment for possible swallowing impairment?",
    options: ["Enjoying a preferred flavor", "Requesting a smaller spoon", "Coughing repeatedly while drinking", "Chewing a familiar soft food"],
    answer: 2,
    explanation: "Repeated coughing during drinking may indicate swallowing difficulty and warrants clinical assessment."
  },
  {
    id: "ST882",
    difficulty: "Moderate",
    question: "Which technique is most appropriate for evaluating vocal-fold movement directly?",
    options: ["Laryngoscopy performed by an appropriately trained clinician", "A conversational language sample alone", "A pure-tone audiogram", "A tongue-tie screening questionnaire alone"],
    answer: 0,
    explanation: "Laryngoscopic examination allows visualization of laryngeal structures and vocal-fold movement."
  },
  {
    id: "ST883",
    difficulty: "Moderate",
    question: "A child can follow familiar one-step directions but struggles with unfamiliar two-step directions. What should the clinician examine next?",
    options: ["Only speech sound accuracy", "Only maximum phonation time", "Only lip strength", "Language comprehension under increasing linguistic and memory demands"],
    answer: 3,
    explanation: "Complex directions increase language-processing and working-memory demands, so these factors should be examined."
  },
  {
    id: "ST884",
    difficulty: "Moderate",
    question: "Which approach is generally appropriate when treating a phoneme-specific articulation error?",
    options: ["Avoid auditory models entirely", "Use an appropriate sound-placement cue and structured practice", "Begin with unrestricted conversation only", "Focus exclusively on reading comprehension"],
    answer: 1,
    explanation: "Placement cues and graduated practice can help establish and generalize a target sound."
  },
  {
    id: "ST885",
    difficulty: "Moderate",
    question: "Which finding is characteristic of unilateral upper motor neuron dysarthria?",
    options: ["Language comprehension impairment as the defining feature", "Complete inability to plan any speech movement", "Often mild-to-moderate dysarthria with possible contralateral lower facial weakness", "A voice disorder with no possible speech motor signs"],
    answer: 2,
    explanation: "Unilateral upper motor neuron damage can produce dysarthria and contralateral lower facial weakness."
  },
  {
    id: "ST886",
    difficulty: "Moderate",
    question: "Which task best assesses confrontation naming?",
    options: ["Asking the client to name pictured objects", "Asking the client to repeat a long paragraph", "Asking the client to follow a gesture", "Measuring respiratory rate at rest"],
    answer: 0,
    explanation: "Confrontation naming requires producing the name of a presented object or picture."
  },
  {
    id: "ST887",
    difficulty: "Moderate",
    question: "Which is the best initial response when a client reports sudden new difficulty speaking?",
    options: ["Schedule routine therapy next month", "Begin articulation drills immediately", "Assume the difficulty is anxiety-related", "Treat it as a potential medical emergency and activate urgent assessment"],
    answer: 3,
    explanation: "Sudden-onset speech or language difficulty can indicate stroke or another emergency and requires immediate medical evaluation."
  },
  {
    id: "ST888",
    difficulty: "Moderate",
    question: "Which measure is commonly used to quantify stuttering frequency in a speech sample?",
    options: ["Words per page", "Percentage of syllables stuttered", "Mean hearing threshold", "Maximum tongue pressure alone"],
    answer: 1,
    explanation: "Percentage of syllables stuttered is a commonly used measure of stuttering frequency."
  },
  {
    id: "ST889",
    difficulty: "Moderate",
    question: "Which strategy can support a person with aphasia during conversation?",
    options: ["Speak rapidly and avoid pauses", "Correct every error before responding", "Use short clear messages and allow adequate response time", "Ask several complex questions simultaneously"],
    answer: 2,
    explanation: "Clear language, adequate response time, and supportive communication reduce unnecessary barriers."
  },
  {
    id: "ST890",
    difficulty: "Moderate",
    question: "Which finding is most consistent with hypernasality?",
    options: ["Excessive nasal resonance on oral speech sounds", "A consistently low speaking pitch", "A prolonged silent pause before speaking", "Difficulty distinguishing two written words"],
    answer: 0,
    explanation: "Hypernasality is excessive nasal resonance, particularly noticeable on vowels and other oral speech sounds."
  },
  {
    id: "ST891",
    difficulty: "Moderate",
    question: "A child uses single words but rarely combines them despite frequent opportunities. Which area should be assessed?",
    options: ["Only hearing thresholds", "Only oral-motor strength", "Only voice quality", "Expressive morphosyntax and language development"],
    answer: 3,
    explanation: "Assessment should examine vocabulary, word combinations, grammatical development, and relevant contributing factors."
  },
  {
    id: "ST892",
    difficulty: "Moderate",
    question: "What is the main purpose of dynamic assessment?",
    options: ["Replace all standardized testing in every case", "Evaluate learning potential through supported teaching and reassessment", "Measure hearing thresholds without equipment", "Establish a diagnosis from one unstructured observation"],
    answer: 1,
    explanation: "Dynamic assessment examines how a person responds to mediation, cues, and learning opportunities."
  },
  {
    id: "ST893",
    difficulty: "Moderate",
    question: "Which observation is most relevant when assessing voice use in a teacher with vocal fatigue?",
    options: ["Favorite reading genre", "Dominant writing hand", "Vocal load, speaking habits, and symptom pattern", "Ability to identify colors"],
    answer: 2,
    explanation: "Occupational voice demands, vocal behaviors, and symptoms help guide voice assessment and management."
  },
  {
    id: "ST894",
    difficulty: "Moderate",
    question: "Which assessment is commonly used to visualize swallowing physiology dynamically?",
    options: ["Videofluoroscopic swallowing study", "Pure-tone audiometry", "Standard spelling test", "Acoustic voice recording alone"],
    answer: 0,
    explanation: "A videofluoroscopic swallowing study uses moving X-ray imaging to assess swallowing physiology."
  },
  {
    id: "ST895",
    difficulty: "Moderate",
    question: "Which feature helps distinguish apraxia of speech from dysarthria?",
    options: ["Apraxia always causes hearing loss", "Dysarthria always impairs language comprehension", "Apraxia is defined by vocal-fold paralysis", "Apraxia primarily affects motor planning, while dysarthria reflects impaired motor execution"],
    answer: 3,
    explanation: "Apraxia of speech is a motor-planning disorder; dysarthria results from impaired neuromuscular execution."
  },
  {
    id: "ST896",
    difficulty: "Moderate",
    question: "Which is an appropriate goal for a child with difficulty following classroom instructions?",
    options: ["The child will improve communication someday", "The child will follow two-step classroom directions with defined accuracy and support", "The clinician will explain directions more often", "The child will attend therapy whenever possible"],
    answer: 1,
    explanation: "Measurable goals specify the behavior, conditions, and performance criterion."
  },
  {
    id: "ST897",
    difficulty: "Moderate",
    question: "Which term describes difficulty retrieving a word despite knowing what one wants to say?",
    options: ["Hyperacusis", "Dysphagia", "Anomia", "Apnea"],
    answer: 2,
    explanation: "Anomia is difficulty retrieving or producing words, often associated with aphasia."
  },
  {
    id: "ST898",
    difficulty: "Moderate",
    question: "Which is a key feature of evidence-based clinical practice?",
    options: ["Integrating research evidence, clinical expertise, and client values", "Following one treatment method for every client", "Ignoring client preferences", "Using personal experience as the only source"],
    answer: 0,
    explanation: "Evidence-based practice integrates research, professional expertise, and client circumstances and preferences."
  },
  {
    id: "ST899",
    difficulty: "Moderate",
    question: "A child substitutes /w/ for /r/. Which broad category of speech error is this?",
    options: ["Distortion only", "Insertion", "Omission", "Substitution"],
    answer: 3,
    explanation: "A substitution occurs when one speech sound is produced in place of another."
  },
  {
    id: "ST900",
    difficulty: "Moderate",
    question: "Which approach is most appropriate when a child communicates effectively using an AAC device?",
    options: ["Withhold the device until speech develops", "Support AAC use while modeling communication and respecting the child's access", "Require speech before acknowledging messages", "Use the device only during formal testing"],
    answer: 1,
    explanation: "AAC should support functional communication and does not need to be withheld while spoken language develops."
  },
  {
    id: "ST901",
    difficulty: "Moderate",
    question: "Which finding is commonly associated with conductive hearing loss?",
    options: ["Damage exclusively to language-processing areas", "Always absent auditory responses at every intensity", "An air-bone gap on audiometry", "Normal middle-ear function in every case"],
    answer: 2,
    explanation: "Conductive hearing loss often produces poorer air-conduction than bone-conduction thresholds."
  },
  {
    id: "ST902",
    difficulty: "Moderate",
    question: "Which is the best way to judge whether a therapy skill generalizes?",
    options: ["Observe performance with different people, materials, or settings", "Repeat only the original drill with the same cards", "Count only attendance", "Compare the client's performance with the clinician's"],
    answer: 0,
    explanation: "Generalization is demonstrated when a skill transfers beyond the specific training conditions."
  },
  {
    id: "ST903",
    difficulty: "Moderate",
    question: "Which symptom may indicate a need for medical evaluation in a client with voice problems?",
    options: ["A preference for quiet rooms", "An interest in singing", "A request for water", "Persistent hoarseness, especially with concerning associated symptoms"],
    answer: 3,
    explanation: "Persistent hoarseness warrants appropriate medical assessment, particularly when red-flag symptoms are present."
  },
  {
    id: "ST904",
    difficulty: "Moderate",
    question: "Which activity primarily targets auditory comprehension in aphasia therapy?",
    options: ["Practicing lip closure in isolation", "Following spoken commands of graded complexity", "Producing sustained vowels only", "Measuring maximum expiratory pressure"],
    answer: 1,
    explanation: "Following spoken commands can target comprehension, with task complexity adjusted to the person's abilities."
  },
  {
    id: "ST905",
    difficulty: "Moderate",
    question: "What is the purpose of a case history during an initial assessment?",
    options: ["Confirm the diagnosis without further assessment", "Replace direct observation", "Gather relevant developmental, medical, and communication information", "Determine treatment success before therapy begins"],
    answer: 2,
    explanation: "Case history information guides assessment planning and interpretation of findings."
  },
  {
    id: "ST906",
    difficulty: "Moderate",
    question: "Which statement about oral-motor exercises for speech sound disorders is most accurate?",
    options: ["They should not be used routinely without evidence that they address the specific speech problem", "They are always more effective than speech practice", "They eliminate the need to assess phonological patterns", "They are required for every child with an articulation disorder"],
    answer: 0,
    explanation: "Nonspeech oral-motor exercises should not be assumed effective for speech; intervention should target the demonstrated impairment."
  },
  {
    id: "ST907",
    difficulty: "Moderate",
    question: "Which factor is essential when interpreting a standardized language test score?",
    options: ["The examiner's preferred therapy method", "The client's favorite activity alone", "The number of items the clinician remembers", "The test's norms, validity, reliability, and suitability for the client"],
    answer: 3,
    explanation: "Scores must be interpreted in light of test quality, normative appropriateness, and the client's background."
  },
  {
    id: "ST908",
    difficulty: "Moderate",
    question: "Which pattern is most suggestive of a resonance disorder rather than a primary articulation error?",
    options: ["Replacing /k/ with /t/ consistently", "Excessive nasal airflow or resonance on pressure consonants", "Omitting the final consonant in words", "Repeating initial syllables involuntarily"],
    answer: 1,
    explanation: "Abnormal nasal airflow or resonance can indicate velopharyngeal dysfunction and requires appropriate assessment."
  },
  {
    id: "ST909",
    difficulty: "Moderate",
    question: "Which method best evaluates functional communication after a brain injury?",
    options: ["A single isolated vowel task", "A pure-tone screen alone", "Observation of communication in meaningful daily activities", "A reflex examination alone"],
    answer: 2,
    explanation: "Functional assessment examines communication effectiveness in real-life contexts."
  },
  {
    id: "ST910",
    difficulty: "Moderate",
    question: "Which action best supports informed consent for an assessment?",
    options: ["Explain the procedure, purpose, relevant risks, and choices in understandable language", "Begin without explanation if the appointment is short", "Promise a specific diagnosis before testing", "Avoid answering questions about the assessment"],
    answer: 0,
    explanation: "Informed consent requires understandable information and a voluntary decision consistent with applicable law and policy."
  },

  // ==================== HARD: ST911–ST945 ====================
  {
    id: "ST911",
    difficulty: "Hard",
    question: "A client has effortful, nonfluent speech, relatively preserved comprehension, and impaired repetition. Which aphasia syndrome is most consistent?",
    options: ["Wernicke aphasia", "Broca aphasia", "Conduction aphasia", "Transcortical sensory aphasia"],
    answer: 1,
    explanation: "Broca aphasia typically features nonfluent output, relatively better comprehension, and impaired repetition."
  },
  {
    id: "ST912",
    difficulty: "Hard",
    question: "A client produces fluent speech with frequent phonemic errors and has disproportionately poor repetition despite relatively preserved comprehension. Which syndrome is most likely?",
    options: ["Broca aphasia", "Transcortical motor aphasia", "Conduction aphasia", "Global aphasia"],
    answer: 2,
    explanation: "Conduction aphasia is classically associated with impaired repetition and phonemic errors despite relatively fluent speech."
  },
  {
    id: "ST913",
    difficulty: "Hard",
    question: "A child has inconsistent consonant and vowel errors, disrupted transitions between sounds, and inappropriate lexical stress. Which diagnosis should be strongly considered?",
    options: ["Childhood apraxia of speech", "Isolated conductive hearing loss", "Developmental voice disorder", "Phonological delay without motor-planning signs"],
    answer: 0,
    explanation: "Inconsistent errors, disrupted transitions, and abnormal prosody are recognized features of childhood apraxia of speech."
  },
  {
    id: "ST914",
    difficulty: "Hard",
    question: "During a swallowing study, material enters the laryngeal vestibule but remains above the vocal folds. How is this described?",
    options: ["Aspiration", "Esophageal reflux", "Pharyngeal residue", "Penetration"],
    answer: 3,
    explanation: "Penetration occurs when material enters the laryngeal vestibule but does not pass below the vocal folds."
  },
  {
    id: "ST915",
    difficulty: "Hard",
    question: "Which finding distinguishes aspiration from laryngeal penetration?",
    options: ["Material remains in the oral cavity", "Material passes below the vocal folds", "Material stays above the vocal folds", "Material remains on the tongue"],
    answer: 1,
    explanation: "Aspiration is defined by material passing below the level of the vocal folds."
  },
  {
    id: "ST916",
    difficulty: "Hard",
    question: "A patient with dysarthria has reduced loudness, monopitch, and short phrases following Parkinsonian changes. Which treatment approach may be appropriate after assessment?",
    options: ["Eliminate all speaking tasks", "Use nonspeech tongue exercises as the only intervention", "An intensive voice treatment targeting vocal effort and loudness, when clinically appropriate", "Focus exclusively on written spelling"],
    answer: 2,
    explanation: "Voice-based treatment such as LSVT LOUD may be appropriate for selected people with Parkinson's disease after individualized assessment."
  },
  {
    id: "ST917",
    difficulty: "Hard",
    question: "Which statement about silent aspiration is correct?",
    options: ["Aspiration may occur without an obvious cough or outward response", "It always produces forceful coughing", "It can be ruled out by normal conversational speech", "It occurs only in children"],
    answer: 0,
    explanation: "Reduced laryngeal sensation or impaired protective responses may allow aspiration without overt signs."
  },
  {
    id: "ST918",
    difficulty: "Hard",
    question: "A child scores within normal limits on a language test but struggles to communicate in class. What is the best next step?",
    options: ["Dismiss the teacher's concerns", "Diagnose a language disorder from classroom behavior alone", "Repeat the same test indefinitely", "Gather contextual information and assess functional communication across settings"],
    answer: 3,
    explanation: "Standardized scores should be integrated with functional observations, interviews, and other relevant evidence."
  },
  {
    id: "ST919",
    difficulty: "Hard",
    question: "Which acoustic measure represents the average fundamental frequency of a voiced sample?",
    options: ["Jitter", "Mean F0", "Harmonics-to-noise ratio", "Intensity range"],
    answer: 1,
    explanation: "Mean fundamental frequency summarizes the average rate of vocal-fold vibration in the analyzed sample."
  },
  {
    id: "ST920",
    difficulty: "Hard",
    question: "Which statement best distinguishes jitter from shimmer?",
    options: ["Jitter measures average loudness; shimmer measures pitch range", "Jitter measures resonance; shimmer measures articulation", "Jitter measures cycle-to-cycle frequency variation; shimmer measures cycle-to-cycle amplitude variation", "Jitter measures language fluency; shimmer measures word retrieval"],
    answer: 2,
    explanation: "Jitter reflects short-term frequency variation, while shimmer reflects short-term amplitude variation."
  },
  {
    id: "ST921",
    difficulty: "Hard",
    question: "A child demonstrates weak grammatical morphology and poor sentence repetition but age-appropriate nonverbal reasoning. What is the most defensible interpretation?",
    options: ["The findings warrant comprehensive language assessment; no single feature alone establishes a diagnosis", "Age-appropriate nonverbal reasoning rules out developmental language disorder", "Sentence repetition alone proves hearing loss", "The child necessarily has childhood apraxia of speech"],
    answer: 0,
    explanation: "Language findings must be interpreted holistically, considering functional impact, language exposure, hearing, and differential diagnoses."
  },
  {
    id: "ST922",
    difficulty: "Hard",
    question: "Which structure is particularly associated with coordinating bilateral vocal-fold abduction during inspiration?",
    options: ["Thyroarytenoid muscle alone", "Orbicularis oris", "Masseter", "Posterior cricoarytenoid muscles"],
    answer: 3,
    explanation: "The posterior cricoarytenoid muscles are the principal abductors of the vocal folds."
  },
  {
    id: "ST923",
    difficulty: "Hard",
    question: "A patient has hoarseness following thyroid surgery. Which action is most appropriate before selecting targeted voice exercises?",
    options: ["Assume the symptoms are behavioral", "Arrange appropriate laryngeal evaluation and coordinate medical follow-up", "Prescribe maximal shouting practice", "Avoid obtaining any relevant medical history"],
    answer: 1,
    explanation: "Postoperative hoarseness may involve laryngeal nerve injury or other pathology and requires appropriate evaluation."
  },
  {
    id: "ST924",
    difficulty: "Hard",
    question: "Which feature is most characteristic of transcortical motor aphasia?",
    options: ["Fluent jargon with severely impaired comprehension", "Severely impaired repetition in every case", "Nonfluent output with relatively preserved repetition", "Isolated swallowing impairment without language symptoms"],
    answer: 2,
    explanation: "Transcortical motor aphasia often presents with reduced spontaneous output and relatively preserved repetition."
  },
  {
    id: "ST925",
    difficulty: "Hard",
    question: "A clinician wants to determine whether a treatment effect exceeds ordinary measurement variability. Which concept is most relevant?",
    options: ["Measurement error and reliable change", "The clinician's confidence alone", "The number of sessions attended alone", "The patient's age in isolation"],
    answer: 0,
    explanation: "Reliable-change methods consider measurement reliability and expected variability when interpreting score differences."
  },
  {
    id: "ST926",
    difficulty: "Hard",
    question: "Which principle is most important when adapting a communication assessment for a multilingual client?",
    options: ["Test only the language in which the client is least proficient", "Treat differences between languages as proof of disorder", "Ignore the client's language history", "Consider language exposure, proficiency, cultural context, and performance across relevant languages"],
    answer: 3,
    explanation: "Multilingual assessment should distinguish language difference from disorder using comprehensive, culturally responsive evidence."
  },
  {
    id: "ST927",
    difficulty: "Hard",
    question: "A child produces a sound correctly in isolation but not in connected speech. Which treatment progression is generally appropriate?",
    options: ["Stop practicing the target sound", "Move through increasingly complex contexts while monitoring accuracy and generalization", "Return permanently to auditory screening", "Work only on nonspeech blowing tasks"],
    answer: 1,
    explanation: "Practice can progress from simpler contexts to syllables, words, phrases, and connected speech as accuracy improves."
  },
  {
    id: "ST928",
    difficulty: "Hard",
    question: "Which statement about the Penetration-Aspiration Scale is correct?",
    options: ["It measures expressive vocabulary", "It measures vocal pitch only", "It ranks the depth of airway invasion and the response to material entering the airway", "It directly measures hearing thresholds"],
    answer: 2,
    explanation: "The Penetration-Aspiration Scale grades airway invasion during swallowing and associated responses."
  },
  {
    id: "ST929",
    difficulty: "Hard",
    question: "Which finding may suggest an upper motor neuron contribution to dysarthria?",
    options: ["Spasticity, strained voice, and slow effortful speech", "Isolated difficulty understanding written words", "Purely inconsistent lexical retrieval errors", "Normal motor speech with isolated tinnitus"],
    answer: 0,
    explanation: "Bilateral upper motor neuron involvement may produce spasticity and strained, effortful speech."
  },
  {
    id: "ST930",
    difficulty: "Hard",
    question: "When selecting a dysphagia intervention, which factor should carry the greatest weight?",
    options: ["Whether the technique is popular online", "Whether it is easiest for the clinician", "Whether every patient on the ward uses it", "The patient's instrumental and clinical findings, goals, physiology, and ability to perform the strategy"],
    answer: 3,
    explanation: "Swallowing interventions should be individualized to assessment findings, patient needs, and the relevant evidence."
  },
  {
    id: "ST931",
    difficulty: "Hard",
    question: "A patient can repeat spoken sentences accurately but has difficulty understanding them and generating meaningful spontaneous speech. Which interpretation is most appropriate?",
    options: ["Repetition proves that all language functions are intact", "Language abilities can dissociate; assess comprehension and spontaneous language separately", "The patient necessarily has dysarthria only", "The pattern rules out acquired language impairment"],
    answer: 1,
    explanation: "Language components may be differentially impaired, so repetition cannot stand in for a complete language assessment."
  },
  {
    id: "ST932",
    difficulty: "Hard",
    question: "Which observation is most useful for differentiating a phonological disorder from a motor-based articulation disorder?",
    options: ["The child's preferred toy", "The number of school holidays", "Whether errors form systematic sound-pattern contrasts or involve phonetic distortion and placement difficulty", "The child's handedness alone"],
    answer: 2,
    explanation: "Error patterns, phonetic quality, stimulability, and motor-speech findings help distinguish phonological and articulation difficulties."
  },
  {
    id: "ST933",
    difficulty: "Hard",
    question: "A client with severe aphasia has difficulty communicating basic needs. Which intervention priority is most appropriate?",
    options: ["Establish reliable functional communication using supported speech and AAC as appropriate", "Require fluent spoken sentences before responding", "Focus solely on advanced figurative language", "Delay all communication support until naming is normal"],
    answer: 0,
    explanation: "Early functional communication support helps the client express needs and participate while rehabilitation continues."
  },
  {
    id: "ST934",
    difficulty: "Hard",
    question: "Which statement about maximum phonation time is most accurate?",
    options: ["It directly diagnoses a specific laryngeal lesion", "It is a pure measure of language comprehension", "It measures the number of syllables stuttered", "It is one measure of sustained phonation influenced by respiratory, laryngeal, and task factors"],
    answer: 3,
    explanation: "Maximum phonation time is influenced by multiple physiological and task variables and cannot independently establish a diagnosis."
  },
  {
    id: "ST935",
    difficulty: "Hard",
    question: "Which approach is most appropriate when a standardized test has not been normed for a client's linguistic background?",
    options: ["Interpret the standard score as fully valid without qualification", "Use cautious interpretation, document limitations, and supplement with suitable assessment methods", "Assume the lowest score reflects a disorder", "Exclude all qualitative observations"],
    answer: 1,
    explanation: "Normative limitations should be acknowledged and addressed through complementary assessment methods."
  },
  {
    id: "ST936",
    difficulty: "Hard",
    question: "Which feature most strongly supports a diagnosis of dysarthria rather than isolated aphasia?",
    options: ["Impaired understanding of word meanings alone", "Difficulty reading irregular words alone", "Imprecise articulation associated with abnormal strength, tone, coordination, or respiratory-phonatory control", "Poor naming with otherwise normal motor speech"],
    answer: 2,
    explanation: "Dysarthria is a motor speech disorder associated with impaired neuromuscular control of speech."
  },
  {
    id: "ST937",
    difficulty: "Hard",
    question: "A patient has suspected neurogenic dysphagia and recurrent chest infections. What is the best next step?",
    options: ["Arrange prompt, coordinated medical and swallowing assessment, including instrumental evaluation when indicated", "Prescribe thin liquids without assessment", "Assume the infections are unrelated to swallowing", "Begin all compensatory maneuvers without evaluating their suitability"],
    answer: 0,
    explanation: "Recurrent respiratory complications warrant timely medical evaluation and an individualized swallowing assessment."
  },
  {
    id: "ST938",
    difficulty: "Hard",
    question: "Which statement about stimulability testing for speech sounds is correct?",
    options: ["It replaces assessment of connected speech", "It proves that therapy will be unnecessary", "It determines hearing thresholds", "It examines whether the client can produce a target with cues or models and can inform treatment planning"],
    answer: 3,
    explanation: "Stimulability testing shows how a person responds to support and helps guide target selection and cueing."
  },
  {
    id: "ST939",
    difficulty: "Hard",
    question: "Which factor is central to determining whether a treatment outcome is clinically meaningful?",
    options: ["Whether the result is statistically significant in every study", "Whether the change improves relevant function or participation for the client", "Whether the therapy uses expensive equipment", "Whether the clinician prefers the intervention"],
    answer: 1,
    explanation: "Clinical meaningfulness considers functional benefit, client goals, context, and the magnitude and reliability of change."
  },
  {
    id: "ST940",
    difficulty: "Hard",
    question: "Which pattern is most consistent with a primary language impairment rather than a speech sound disorder alone?",
    options: ["One consistent distorted consonant", "A hoarse voice after prolonged shouting", "Difficulty with vocabulary, sentence structure, and comprehension beyond speech production errors", "A single phonetic distortion with intact language"],
    answer: 2,
    explanation: "Broad difficulties across language domains suggest a language impairment that cannot be explained by speech sound errors alone."
  },
  {
    id: "ST941",
    difficulty: "Hard",
    question: "During a bedside swallowing assessment, a patient shows no coughing but has risk factors for impaired sensation. What conclusion is justified?",
    options: ["Absence of coughing does not reliably exclude aspiration; further assessment may be needed", "Swallowing is certainly safe", "Instrumental assessment is never appropriate", "The patient should immediately receive unrestricted oral intake"],
    answer: 0,
    explanation: "Bedside signs may miss silent aspiration; decisions should reflect the overall clinical picture and need for further assessment."
  },
  {
    id: "ST942",
    difficulty: "Hard",
    question: "Which approach best supports carryover of a newly learned speech sound into everyday conversation?",
    options: ["Practice only in isolation indefinitely", "Avoid feedback throughout treatment", "Use the sound only in written worksheets", "Progress to varied words, phrases, conversation, and self-monitoring with suitable feedback"],
    answer: 3,
    explanation: "Gradual practice across increasingly natural contexts supports generalization and independent monitoring."
  },
  {
    id: "ST943",
    difficulty: "Hard",
    question: "A patient has unilateral vocal-fold immobility and a weak, breathy voice. Which concern is especially important to evaluate?",
    options: ["Spelling ability", "Glottic insufficiency and possible airway-protection difficulties", "Visual acuity", "Phonological awareness only"],
    answer: 1,
    explanation: "Vocal-fold immobility can cause incomplete glottic closure, voice weakness, and in some cases swallowing or airway-protection problems."
  },
  {
    id: "ST944",
    difficulty: "Hard",
    question: "Which statement best describes a culturally and linguistically responsive assessment?",
    options: ["Apply identical language expectations regardless of background", "Use one translated test and ignore its norms", "Interpret communication in context, use appropriate language samples and tools, and consider cultural expectations", "Assume bilingual exposure causes language disorder"],
    answer: 2,
    explanation: "Responsive assessment considers the client's languages, experiences, culture, and the limitations of assessment tools."
  },
  {
    id: "ST945",
    difficulty: "Hard",
    question: "Which documentation practice best supports continuity of care?",
    options: ["Record objective findings, goals, intervention, response, and the plan for follow-up", "Document only that the client attended", "Omit changes because they may be temporary", "Record conclusions without supporting observations"],
    answer: 0,
    explanation: "Clear, objective documentation supports clinical decisions, progress monitoring, communication, and continuity of care."
  },

  // ==================== EASY: ST946–ST963 ====================
  {
    id: "ST946",
    difficulty: "Easy",
    question: "Which part of the ear contains the cochlea?",
    options: ["Outer ear", "Middle ear", "Inner ear", "Auditory canal"],
    answer: 2,
    explanation: "The cochlea is located in the inner ear and converts sound vibrations into neural signals."
  },
  {
    id: "ST947",
    difficulty: "Easy",
    question: "What is the primary function of the diaphragm during speech?",
    options: ["Support controlled airflow for speech", "Move the vocal folds directly", "Control tongue-tip placement", "Close the velopharyngeal port"],
    answer: 0,
    explanation: "The diaphragm contributes to respiration, which provides airflow for speech."
  },
  {
    id: "ST948",
    difficulty: "Easy",
    question: "Which word contains a consonant cluster at the beginning?",
    options: ["Apple", "Stone", "Open", "Eat"],
    answer: 1,
    explanation: "The word 'stone' begins with the consonant cluster /st/."
  },
  {
    id: "ST949",
    difficulty: "Easy",
    question: "What is the main purpose of a hearing aid?",
    options: ["Restore damaged auditory hair cells", "Cure every type of hearing loss", "Improve tongue coordination", "Amplify sound to improve access to auditory information"],
    answer: 3,
    explanation: "Hearing aids amplify and process sound to improve access to auditory information."
  },
  {
    id: "ST950",
    difficulty: "Easy",
    question: "Which term describes the study of speech sounds as physical events?",
    options: ["Syntax", "Semantics", "Phonetics", "Pragmatics"],
    answer: 2,
    explanation: "Phonetics studies speech sounds, including their production, acoustic properties, and perception."
  },
  {
    id: "ST951",
    difficulty: "Easy",
    question: "Which is an example of a receptive language skill?",
    options: ["Following a spoken instruction", "Producing a rhyming word", "Naming a picture", "Explaining a story"],
    answer: 0,
    explanation: "Following a spoken instruction requires understanding language received from another person."
  },
  {
    id: "ST952",
    difficulty: "Easy",
    question: "Which structure vibrates to create typical voiced speech?",
    options: ["Hard palate", "Vocal folds", "Tongue tip", "Nasal septum"],
    answer: 1,
    explanation: "Vocal-fold vibration generates the periodic sound source used in voiced speech."
  },
  {
    id: "ST953",
    difficulty: "Easy",
    question: "What does a speech-language pathologist assess in a person who stutters?",
    options: ["Hearing thresholds only", "Tongue strength only", "Frequency and types of disfluencies and their impact", "Reading speed only"],
    answer: 2,
    explanation: "Stuttering assessment considers speech behaviors, communication impact, and the person's experiences and needs."
  },
  {
    id: "ST954",
    difficulty: "Easy",
    question: "Which word contains the voiced /z/ sound?",
    options: ["Sip", "Bus", "Rice", "Zoo"],
    answer: 3,
    explanation: "'Zoo' begins with /z/, a voiced alveolar fricative."
  },
  {
    id: "ST955",
    difficulty: "Easy",
    question: "Which skill is primarily involved when a child takes turns during conversation?",
    options: ["Pragmatics", "Phonetics", "Respiration", "Resonance"],
    answer: 0,
    explanation: "Conversational turn-taking is a pragmatic communication skill."
  },
  {
    id: "ST956",
    difficulty: "Easy",
    question: "What is the purpose of an oral mechanism examination?",
    options: ["Measure intelligence", "Diagnose hearing loss", "Examine oral structures and their movement for relevant functions", "Determine academic grades"],
    answer: 2,
    explanation: "An oral mechanism examination evaluates relevant structures and movements used in speech and related functions."
  },
  {
    id: "ST957",
    difficulty: "Easy",
    question: "Which communication method may help a person who cannot rely on speech alone?",
    options: ["Withholding communication opportunities", "AAC", "Avoiding all visual supports", "Speaking only in longer sentences"],
    answer: 1,
    explanation: "Augmentative and alternative communication can supplement or replace speech."
  },
  {
    id: "ST958",
    difficulty: "Easy",
    question: "Which term describes the loudness of a person's voice?",
    options: ["Pitch", "Resonance", "Articulation", "Vocal intensity"],
    answer: 3,
    explanation: "Vocal intensity relates to perceived loudness and can be measured acoustically."
  },
  {
    id: "ST959",
    difficulty: "Easy",
    question: "Which word contains a final consonant?",
    options: ["Me", "Go", "Cat", "Eye"],
    answer: 2,
    explanation: "'Cat' ends with the consonant /t/."
  },
  {
    id: "ST960",
    difficulty: "Easy",
    question: "What is the primary goal of communication therapy?",
    options: ["Improve meaningful communication and participation", "Eliminate every accent", "Ensure every client communicates identically", "Focus exclusively on test scores"],
    answer: 0,
    explanation: "Therapy aims to improve functional communication according to the person's needs and goals."
  },
  {
    id: "ST961",
    difficulty: "Easy",
    question: "Which term describes the ability to produce grammatically organized sentences?",
    options: ["Auditory acuity", "Syntax", "Vocal intensity", "Swallow coordination"],
    answer: 1,
    explanation: "Syntax concerns how words are arranged into grammatical phrases and sentences."
  },
  {
    id: "ST962",
    difficulty: "Easy",
    question: "Which action is most appropriate when a child does not understand an instruction?",
    options: ["Repeat it more rapidly", "Assume the child is uncooperative", "Increase sentence complexity", "Simplify or rephrase the instruction and check understanding"],
    answer: 3,
    explanation: "Clearer language and confirmation of understanding help identify and reduce communication barriers."
  },
  {
    id: "ST963",
    difficulty: "Easy",
    question: "What is the main purpose of a therapy progress note?",
    options: ["Record only the appointment time", "Replace the assessment report", "Document performance, intervention, response, and next steps", "Guarantee a particular outcome"],
    answer: 2,
    explanation: "Progress notes provide a record of treatment activities, measurable performance, response, and plans."
  },

  // ==================== MODERATE: ST964–ST981 ====================
  {
    id: "ST964",
    difficulty: "Moderate",
    question: "A child says 'poon' for 'spoon'. Which phonological process is demonstrated?",
    options: ["Cluster reduction", "Final consonant deletion", "Backing", "Assimilation"],
    answer: 0,
    explanation: "Cluster reduction occurs when a consonant in a cluster is omitted."
  },
  {
    id: "ST965",
    difficulty: "Moderate",
    question: "A client has difficulty understanding spoken words but can read the same words accurately. Which assessment priority is most appropriate?",
    options: ["Assess lip strength only", "Investigate auditory comprehension and relevant hearing factors", "Assume visual memory is impaired", "Assess swallowing before language"],
    answer: 1,
    explanation: "The discrepancy warrants investigation of auditory comprehension and hearing, alongside a broader language assessment."
  },
  {
    id: "ST966",
    difficulty: "Moderate",
    question: "Which feature is most suggestive of a voice disorder?",
    options: ["Difficulty understanding complex grammar", "Omission of word-final consonants", "Persistent roughness or strain during phonation", "Difficulty following written directions"],
    answer: 2,
    explanation: "Persistent abnormal voice quality or effort can indicate dysphonia and may warrant laryngeal assessment."
  },
  {
    id: "ST967",
    difficulty: "Moderate",
    question: "Which approach best encourages language development during play?",
    options: ["Correct every utterance immediately", "Ask continuous testing questions", "Keep the adult's language unrelated to the child's focus", "Follow the child's interests and model slightly expanded utterances"],
    answer: 3,
    explanation: "Responsive interaction and language expansions provide meaningful models within the child's focus of attention."
  },
  {
    id: "ST968",
    difficulty: "Moderate",
    question: "A child uses 'goed' instead of 'went'. What does this most directly illustrate?",
    options: ["Overregularization of an irregular verb", "Final consonant deletion", "Hypernasality", "A voice tremor"],
    answer: 0,
    explanation: "Overregularization occurs when a regular grammatical rule is applied to an irregular form."
  },
  {
    id: "ST969",
    difficulty: "Moderate",
    question: "Which measure is most useful for monitoring progress on a specific speech sound target?",
    options: ["Attendance alone", "Percentage of correct target productions under defined conditions", "Parent age", "Length of the clinic hallway"],
    answer: 1,
    explanation: "Repeated measurement of target accuracy provides objective information about progress."
  },
  {
    id: "ST970",
    difficulty: "Moderate",
    question: "Which feature may be associated with hypokinetic dysarthria?",
    options: ["Consistently excessive loudness and exaggerated pitch variation", "Isolated difficulty naming objects", "Reduced loudness and reduced pitch variation", "Normal speech motor control with isolated hearing loss"],
    answer: 2,
    explanation: "Hypokinetic dysarthria, often associated with Parkinson's disease, may involve reduced loudness and monopitch."
  },
  {
    id: "ST971",
    difficulty: "Moderate",
    question: "Which action is appropriate when a client reports that swallowing tablets is difficult?",
    options: ["Tell the client to crush all tablets", "Recommend stopping prescribed medication", "Assume the difficulty is psychological", "Refer for appropriate assessment and advise consulting the prescriber or pharmacist about medication formulations"],
    answer: 3,
    explanation: "Tablet-swallowing difficulty requires appropriate assessment; medication should not be crushed or changed without professional guidance."
  },
  {
    id: "ST972",
    difficulty: "Moderate",
    question: "Which task primarily assesses sentence formulation?",
    options: ["Asking the client to describe a picture using a complete sentence", "Asking the client to identify a pure tone", "Measuring lip pressure", "Observing a spontaneous cough"],
    answer: 0,
    explanation: "Picture description can elicit sentence formulation and reveal grammatical and lexical abilities."
  },
  {
    id: "ST973",
    difficulty: "Moderate",
    question: "What is the best response when a child makes a grammatical error during conversation?",
    options: ["Stop the conversation every time", "Provide a natural recast that models the correct form", "Ignore all communication attempts", "Require the child to repeat the sentence ten times"],
    answer: 1,
    explanation: "A recast reformulates the child's message with a correct grammatical model while maintaining interaction."
  },
  {
    id: "ST974",
    difficulty: "Moderate",
    question: "Which condition is characterized by difficulty coordinating breathing, phonation, and articulation due to neurological impairment?",
    options: ["Isolated dyslexia", "Conductive hearing loss", "Dysarthria", "Receptive language delay alone"],
    answer: 2,
    explanation: "Dysarthria can affect respiratory, phonatory, resonatory, articulatory, and prosodic aspects of speech."
  },
  {
    id: "ST975",
    difficulty: "Moderate",
    question: "Which is the most appropriate reason to obtain a language sample in addition to standardized testing?",
    options: ["It makes all other assessments unnecessary", "It guarantees a diagnosis", "It measures only articulation", "It shows communication skills in a more natural context"],
    answer: 3,
    explanation: "Language samples reveal spontaneous communication and complement structured assessment results."
  },
  {
    id: "ST976",
    difficulty: "Moderate",
    question: "Which statement about childhood language milestones is most accurate?",
    options: ["Milestones describe broad developmental expectations, not rigid deadlines for every child", "Every child must reach each milestone on the same day", "Milestones alone establish a definitive diagnosis", "Developmental history is never relevant"],
    answer: 0,
    explanation: "Milestones guide surveillance and assessment but must be interpreted alongside individual variation and functional concerns."
  },
  {
    id: "ST977",
    difficulty: "Moderate",
    question: "A client has difficulty understanding figurative language but understands literal sentences. Which skill should be examined?",
    options: ["Vocal-fold mobility", "Higher-level language and inferencing", "Lip closure during swallowing", "Pure-tone hearing thresholds only"],
    answer: 1,
    explanation: "Figurative language comprehension involves inferencing and interpreting meanings beyond literal wording."
  },
  {
    id: "ST978",
    difficulty: "Moderate",
    question: "Which strategy may support a child who has difficulty retaining multi-step spoken instructions?",
    options: ["Give more steps at once", "Remove all visual information", "Break instructions into smaller units and add visual supports when helpful", "Speak faster to maintain attention"],
    answer: 2,
    explanation: "Chunking instructions and adding appropriate visual supports can reduce processing and memory demands."
  },
  {
    id: "ST979",
    difficulty: "Moderate",
    question: "Which statement about accent and speech disorders is correct?",
    options: ["Any accent difference indicates a disorder", "A speaker must eliminate their accent to be intelligible", "Accent differences always require treatment", "Accent variation is not itself a disorder; assessment should focus on functional concerns and the client's goals"],
    answer: 3,
    explanation: "Accent is a normal feature of language variation and should not be pathologized."
  },
  {
    id: "ST980",
    difficulty: "Moderate",
    question: "Which measure is most appropriate for evaluating whether a communication intervention improves daily participation?",
    options: ["Functional reports and observations across relevant real-life settings", "A single isolated sound repetition", "The therapist's opinion alone", "The number of worksheets completed without performance data"],
    answer: 0,
    explanation: "Functional outcomes examine whether communication improvements transfer to meaningful activities and settings."
  },
  {
    id: "ST981",
    difficulty: "Moderate",
    question: "Which action best protects confidentiality in clinical practice?",
    options: ["Discuss identifiable cases in public spaces", "Share client information only with authorized people for appropriate purposes", "Post case details online without permission", "Leave reports where visitors can read them"],
    answer: 1,
    explanation: "Client information must be handled securely and shared only in accordance with consent, law, and professional policy."
  },

  // ==================== HARD: ST982–ST1000 ====================
  {
    id: "ST982",
    difficulty: "Hard",
    question: "A client has reduced tongue strength, imprecise consonants, and slow speech following a neurological injury. Which assessment approach is most appropriate?",
    options: ["Assess language comprehension only", "Use a hearing screen as the sole assessment", "Complete a motor speech examination covering relevant subsystems and functional speech", "Diagnose apraxia based on tongue weakness alone"],
    answer: 2,
    explanation: "A comprehensive motor speech examination evaluates speech subsystems and functional performance; weakness alone does not establish a specific diagnosis."
  },
  {
    id: "ST983",
    difficulty: "Hard",
    question: "Which statement best describes the relationship between phonological awareness and reading?",
    options: ["Phonological awareness supports learning sound-letter relationships and decoding", "It concerns only handwriting speed", "It develops independently of spoken language in every child", "It is identical to voice quality"],
    answer: 0,
    explanation: "Phonological awareness supports understanding the sound structure of words, which is important for alphabetic decoding."
  },
  {
    id: "ST984",
    difficulty: "Hard",
    question: "A patient has normal oral transit but delayed pharyngeal initiation and reduced laryngeal elevation on instrumental swallowing assessment. What should guide intervention selection?",
    options: ["The patient's favorite food alone", "A standard exercise routine for every patient", "The assumption that all thin liquids are safe", "The specific physiological impairments, overall clinical status, and response to tested strategies"],
    answer: 3,
    explanation: "Intervention should target demonstrated swallowing physiology and be individualized to safety, function, and patient needs."
  },
  {
    id: "ST985",
    difficulty: "Hard",
    question: "Which profile most strongly suggests a language-based reading difficulty rather than a primary visual acuity problem?",
    options: ["Blurred distance vision as the only concern", "Weak decoding and phonological processing despite adequate visual acuity", "Eye redness after exposure to dust", "Difficulty identifying colors with otherwise intact decoding"],
    answer: 1,
    explanation: "Decoding and phonological processing difficulties can indicate a language-based literacy problem, although comprehensive assessment is needed."
  },
  {
    id: "ST986",
    difficulty: "Hard",
    question: "Why should a clinician avoid interpreting one low standardized score as definitive proof of a communication disorder?",
    options: ["Standardized tests never provide useful information", "A low score always means the test is invalid", "Diagnosis requires integration of multiple sources, functional impact, and relevant contextual factors", "Only informal observation is acceptable"],
    answer: 2,
    explanation: "Clinical decisions integrate test results with history, observation, functional impact, and other relevant evidence."
  },
  {
    id: "ST987",
    difficulty: "Hard",
    question: "A client with dysarthria becomes less intelligible at the end of long utterances. Which factor should be examined closely?",
    options: ["Respiratory-phonatory support and speech pacing", "Color naming alone", "Visual acuity only", "Spelling of irregular verbs"],
    answer: 0,
    explanation: "Declining intelligibility over longer utterances may relate to breath support, coordination, fatigue, or pacing."
  },
  {
    id: "ST988",
    difficulty: "Hard",
    question: "Which principle is essential when planning intervention for a multilingual child with suspected developmental language disorder?",
    options: ["Assess only English regardless of exposure", "Assume weaker performance in one language proves disorder", "Discourage family use of the home language", "Examine skills across relevant languages and distinguish disorder from differences in exposure and experience"],
    answer: 3,
    explanation: "Multilingual assessment considers language exposure and skills across languages to reduce misdiagnosis."
  },
  {
    id: "ST989",
    difficulty: "Hard",
    question: "Which observation most strongly supports the need for further assessment of a possible velopharyngeal disorder?",
    options: ["A single consistent /r/ distortion", "Nasal emission on pressure consonants accompanied by resonance concerns", "A slow reading rate with normal speech resonance", "Difficulty naming pictured objects"],
    answer: 1,
    explanation: "Nasal emission and abnormal resonance can indicate velopharyngeal dysfunction and warrant specialized evaluation."
  },
  {
    id: "ST990",
    difficulty: "Hard",
    question: "Which statement about treatment fidelity is correct?",
    options: ["It refers only to client attendance", "It is the same as treatment outcome", "It concerns whether the intervention is delivered as intended", "It eliminates the need to measure progress"],
    answer: 2,
    explanation: "Treatment fidelity describes how closely intervention delivery follows the planned or studied procedures."
  },
  {
    id: "ST991",
    difficulty: "Hard",
    question: "A patient has progressive speech and swallowing changes with suspected motor neuron disease. Which approach is most appropriate?",
    options: ["Coordinate multidisciplinary evaluation and consider timely communication and swallowing supports", "Delay all support until speech becomes unintelligible", "Use the same exercises regardless of disease progression", "Focus only on articulation drills"],
    answer: 0,
    explanation: "Progressive neurological conditions call for coordinated care, regular reassessment, and timely supportive interventions."
  },
  {
    id: "ST992",
    difficulty: "Hard",
    question: "Which measure best reflects the severity of a phonological pattern across a speech sample?",
    options: ["The child's height", "The number of therapy toys available", "The clinician's familiarity with the child", "A systematic analysis of error patterns and affected opportunities in speech"],
    answer: 3,
    explanation: "A structured speech sample analysis helps quantify patterns and determine which contrasts or sound classes are affected."
  },
  {
    id: "ST993",
    difficulty: "Hard",
    question: "Which statement about functional communication goals is most appropriate?",
    options: ["They should focus exclusively on impairment-level drills", "They should describe meaningful communication behaviors in relevant contexts", "They should avoid measurable criteria", "They should be identical for every client with the same diagnosis"],
    answer: 1,
    explanation: "Functional goals link communication targets to the person's daily activities and participation."
  },
  {
    id: "ST994",
    difficulty: "Hard",
    question: "A child produces correct consonants in single words but has frequent errors during rapid connected speech. What should the clinician examine?",
    options: ["Only the child's hearing history", "Only vocabulary size", "Speech performance across rate, complexity, transitions, and contexts", "Only sustained vowel duration"],
    answer: 2,
    explanation: "Connected-speech breakdown may reflect effects of rate, complexity, sequencing, or motor coordination and requires contextual analysis."
  },
  {
    id: "ST995",
    difficulty: "Hard",
    question: "Which statement about aspiration precautions is most accurate?",
    options: ["Recommendations should be individualized and informed by swallowing assessment and clinical context", "Every patient should automatically use thickened liquids", "A normal bedside screen excludes all aspiration", "A chin-down posture is suitable for every swallowing disorder"],
    answer: 0,
    explanation: "Swallowing strategies should be selected according to the patient's specific physiology and evidence, not applied universally."
  },
  {
    id: "ST996",
    difficulty: "Hard",
    question: "Which finding may help distinguish a fluency disorder from ordinary developmental disfluency?",
    options: ["Any repetition of a word proves stuttering", "Normal pauses always indicate pathology", "Only speaking rate matters", "The type, frequency, duration, tension, and impact of disfluencies should be considered together"],
    answer: 3,
    explanation: "Fluency assessment considers multiple features and the person's experience rather than relying on one behavior alone."
  },
  {
    id: "ST997",
    difficulty: "Hard",
    question: "Which practice best supports valid progress monitoring during therapy?",
    options: ["Change scoring criteria every session", "Use consistent measurement conditions and record relevant performance data", "Document only the best trial", "Avoid recording unsuccessful attempts"],
    answer: 1,
    explanation: "Consistent measures and transparent documentation make performance changes easier to interpret reliably."
  },
  {
    id: "ST998",
    difficulty: "Hard",
    question: "A person with aphasia becomes frustrated during complex conversations. Which partner-training strategy may help?",
    options: ["Speak for the person in every situation", "Correct every grammatical error immediately", "Use supportive communication, verify understanding, and allow adequate response time", "Avoid including the person in decisions"],
    answer: 2,
    explanation: "Communication-partner training can improve access, participation, and mutual understanding."
  },
  {
    id: "ST999",
    difficulty: "Hard",
    question: "Which is the strongest reason to reassess a client after a significant change in neurological status?",
    options: ["The change may alter communication or swallowing abilities and require a revised plan", "Every previous finding must automatically be discarded", "Reassessment is needed only to complete paperwork", "Treatment goals can never change"],
    answer: 0,
    explanation: "A significant clinical change can alter abilities, risks, and priorities, so reassessment may be necessary."
  },
  {
    id: "ST1000",
    difficulty: "Hard",
    question: "Which approach best reflects ethical, evidence-based speech-language pathology practice?",
    options: ["Use one preferred treatment for every client", "Promise guaranteed outcomes", "Ignore the client's goals when choosing treatment", "Integrate evidence, clinical judgment, informed client preferences, and ongoing outcome monitoring"],
    answer: 3,
    explanation: "Ethical evidence-based care combines research, professional expertise, client values, and ongoing evaluation of outcomes."
  },
