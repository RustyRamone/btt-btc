btt.cc.model.chapter.chapters.push(
{
	id: "9",
	title: "A Duet for Two",
	compositionFocus: "Harmonizing a melody with a 2nd parallel part.",
	theoryLink: "Intervals",
	sections:
	[
		{
			id: "lessons",
			title: "Lessons",
			introOverlay:
			{
				title: "Lesson",
				synopsis: "Lesson Activities",
				synopsisExtra: "<ol><li data-target='intro'>Introduction</li><li data-target='about-harmony'>About Harmony</li><li data-target='melodic-coupling'>Melodic Coupling</li><li data-target='melodic-coupling-rules'>Rules for Melodic Coupling</li><li data-target='stella-sisters'>The Stella Sister’s ‘Ho Hey’</li><li data-target='theory-link-identify'>Theory Link</li></ol>"
			},
			pages:
			[
				{
					type: "btt.cc.ui.content.title",
					id: "intro",
					breadcrumb:"Introduction",
					title: "Chapter 9:",
					subtitle:"A Duet for Two",
					synopsis:"In this lesson you’ll be learning how to add a second harmony part to a melody to create a duet. Discover how coupling a melody with a parallel harmony part brings energy and richness to an existing melody.",
					audioFile: "BTC Lesson Ch9_Intro"
				},
				{
					type: "btt.cc.ui.content.staff-player",
					id: "about-harmony",
					title: "About Harmony",
					subtitle: "",
					tempo: 120,
					cards:
					[
						{
							title: "Chords and Melody",
							text: "When you harmonize a melody using chords played by guitar or piano, it acts as a background part.",
							audioFile: "Ch9_AboutHarmony_Chords",
							scoreImage: "Ch9_AboutHarmonyChords.png",
							width: "700px",
							largePlayer: true
						},
						{
							title: "Melodic Coupling",
							text: "When you harmonize a melody using notes that move in parallel motion, it takes on a more important role and is called melodic coupling.",
							audioFile: "Ch9_AboutHarmony_Coupling",
							scoreImage: "Ch9_AboutHarmonyCoupling.png",
							width: "700px",
							largePlayer: true
						}
					]
				},
				{
					type: "btt.cc.ui.content.staff-player",
					id: "melodic-coupling",
					title: "Melodic Coupling",
					subtitle: "Two musical lines can move together (coupled) as melody & harmony.",
					tempo: 120,
					cards:
					[
						{
							isIntroCard: true,
							title: "",
							text: "View three (3) ways a melody can be coupled with a matching harmony part.",
							width: "650px",
							scoreImage: "Ch9_MelCoupUnison.png"
						},
						{
							title: "A Single Line Melody (Unison)",
							text: "This is how the melody sounds on its own without a harmony part.",
							audioFile: "Ch9_MelCoup_Unison",
							width: "650px",
							scoreImage: "Ch9_MelCoupUnison.png"
						},
						{
							title: "Harmonizing in Thirds (3rds)",
							text: "This melody is being harmonized using a third (3rd).",
							audioFile: "Ch9_MelCoup_3rds",
							width: "650px",
							scoreImage: "Ch9_MelCoup3rdsBelow.png"
						},
						{
							title: "Harmonizing in Sixths (6ths)",
							text: "This melody is being harmonized using a sixth (6th).",
							audioFile: "Ch9_MelCoup_6ths",
							width: "650px",
							scoreImage: "Ch9_MelCoup6thBelow.png"
						},
						{
							title: "Using Fourths (4ths) in the Harmony",
							text: "Fourths & fifths are used less frequently, but they work well paired with the tonic notes in a melody.",
							audioFile: "Ch9_MelCoup_4ths",
							width: "650px",
							scoreImage: "Ch9_MelCoup4ths5ths.png"
						}
					]
				},
				{
					type: "btt.cc.ui.content.multiple-choice",
					id: "harmony-or-not",
					title: "Harmony or Not?",
					questions:
					[
						{
							id: "question",
							title: "",
							image: "Ch9_SingingBird.png",
							audioFile: "Ch9_DuetNot Q1",
							text: "1. Is this a duet?",
							correctAnswers: ["No"],
							incorrectAnswers: ["Yes"]
						},
						{
							id: "question",
							title: "",
							image: "Ch9_SingingBird.png",
							audioFile: "Ch9_DuetNot Q2",
							text: "2. Is this a duet?",
							correctAnswers: ["Yes"],
							incorrectAnswers: ["No"]
						},
						{
							id: "question",
							title: "",
							image: "Ch9_SingingBird.png",
							audioFile: "Ch9_DuetNot Q3",
							text: "3. Is this a duet?",
							correctAnswers: ["Yes"],
							incorrectAnswers: ["No"]
						},
						{
							id: "question",
							title: "",
							image: "Ch9_SingingBird.png",
							audioFile: "Ch9_DuetNot Q4",
							text: "4. Is this a duet?",
							correctAnswers: ["No"],
							incorrectAnswers: ["Yes"]
						},
						{
							id: "question",
							title: "",
							image: "Ch9_SingingBird.png",
							audioFile: "Ch9_DuetNot Q5",
							text: "5. Is this a duet?",
							correctAnswers: ["Yes"],
							incorrectAnswers: ["No"]
						}
					]
				},
				{
					type: "btt.cc.ui.content.staff-player",
					id: "melodic-coupling-rules",
					title: "Rules for Melodic Coupling",
					subtitle: "Learn about the rules to make your harmony sound sweet!",
					tempo: 120,
					cards:
					[
						{
							title: "Use Consonant Intervals",
							text: "The intervals of a 3rd or a 6th sound very pleasing to the ear. These are consonant intervals. A 2nd or a 7th would be jarring to the ear sounding very dissonant. The 4th & 5th are used sparingly, usually with the tonic note.",
							audioFile: "Ch9_RlsMelCoupCons",
							width: "850px",
							largePlayer: true,
							scoreImage: "Ch9_MelCoup-RulesCons.png"
						},
						{
							title: "No Crossing Lines",
							text: "The notes of the harmony part should never cross. They should remain either above or below the melody.",
							audioFile: "Ch9_RlsMelCoupCross",
							width: "850px",
							largePlayer: true,
							scoreImage: "Ch9_MelCoup-RuleNoCross.png"
						},
						{
							title: "Same Rhythm - Same Direction",
							text: "The harmony part travels in the same direction as the melody part and uses the same rhythms.",
							audioFile: "Ch9_RlsMelCoupSame",
							width: "850px",
							largePlayer: true,
							scoreImage: "Ch9_MelCoupRulesSame-Direction.png"
						}
					],
					fadeCards: true
				},
				{
					type: "btt.cc.ui.content.composer-music",
					id: "stella-sisters",
					title: "Lennon & Maisy Stella",
					composerName: "Lennon & Maisy Stella",
					composerYears: "Born 1999, 2003",
					composerImage: "stella-sisters.jpg",
					video:
					{
						code: '<iframe style="margin-top:10px" width="340" height="220" src="//www.youtube.com/embed/n-lLlEtoAS8?rel=0&autoplay=1" frameborder="0" allowfullscreen></iframe>'
					},
					questionIntro: "<span>Listen:</span> To Lennon & Maisy’s version of ‘Ho Hey’ by the Lumineers",
					questions:
					[
						{
							id: "who-sings-melody",
							question: "Who is singing the melody?",
							answers: ["Both, at different times", "Maisy", "Lennon", "Both together"],
							smallCards: false,
							numCorrect: 1
						},
						{
							id: "harmony-above-or-below",
							question: "Is the harmony part above or below the melody?",
							answers: ["Above", "Below"],
							smallCards: false,
							numCorrect: 1
						},
						{
							id: "distance-between-melody-and-harmony",
							question: "The distance between the melody and the harmony is:",
							answers: ["Primarily a third (3rd)", "Primarily a sixth (6th)", "Both a third (3rd) and a sixth (6th)"],
							smallCards: false,
							numCorrect: 1
						}
					],
					didYouKnow:
					{
						title: "Notes on Lennon & Maisy Stella",
						facts:
						[
							"<strong>Lennon & Maisy</strong> are sisters, both in real life, and on the television show Nashville.",
							"<strong>They were born</strong> in 1999 and 2003 respectively.",
							"They became a <strong>YouTube sensation</strong> in 2012 when they posted their duet ‘Call Your Girlfriend’",
							"Their style of harmonizing makes frequent use of melodic coupling and this is a trademark of their sound as a duo."
						],
						legendItems:
						[
							{orangeDot:true, text:"The Birth of the World Wide Web"},
							{redDot:true, text:"Lennon & Maisy Became a YouTube Sensation"},
							{whiteDot:true, text:"The Birth of YouTube"},
							{color:"#e76c23", text:"The sisters were cast in the hit television show <em>Nashville</em>"},
						],
						legendItemsPerLine: 2,
						timelineImage: "Timeline_ch9.jpg"
					}
				},
				{
					type: "btt.cc.ui.content.multiple-choice",
					id: "theory-link-identify",
					title: "Theory Link Identifying",
					imageReveal:
					{
						image: "Ch9_Harmonyrocks.png",
						tileImage: "reveal-tile_100x100.png",
						rows: 2,
						cols: 3,
						width: 300,
						height: 200
					},
					questions:
					[
						{
							id: "question",
							title: "",
							imageRevealSideImage: "Ch9_Q1_Interval3rd.png",
							text: "Name this interval",
							smallCards: true,
							correctAnswers: ["3rd"],
							incorrectAnswers: ["Unison", "2nd", "4th", "5th", "6th", "7th"]
						},
						{
							id: "question",
							title: "",
							imageRevealSideImage: "Ch9_Q2_Interval6th.png",
							text: "Name this interval",
							smallCards: true,
							correctAnswers: ["6th"],
							incorrectAnswers: ["Unison", "2nd", "4th", "5th", "3rd", "7th"]
						},
						{
							id: "question",
							title: "",
							imageRevealSideImage: "Ch9_Q3_Interval4rth.png",
							text: "Name this interval",
							smallCards: true,
							correctAnswers: ["4th"],
							incorrectAnswers: ["Unison", "2nd", "6th", "5th", "3rd", "7th"]
						},
						{
							id: "question",
							title: "",
							imageRevealSideImage: "Ch9_Q4_Interval5th.png",
							text: "Name this interval",
							smallCards: true,
							correctAnswers: ["5th"],
							incorrectAnswers: ["Unison", "2nd", "6th", "4th", "3rd", "7th"]
						},
						{
							id: "question",
							title: "",
							imageRevealSideImage: "Ch9_Q5_Interval7th.png",
							text: "Name this interval",
							smallCards: true,
							correctAnswers: ["7th"],
							incorrectAnswers: ["Unison", "2nd", "6th", "4th", "3rd", "5th"]
						},
						{
							id: "question",
							title: "",
							imageRevealSideImage: "Ch9_Q6_Interval2nd.png",
							text: "Name this interval",
							smallCards: true,
							correctAnswers: ["2nd"],
							incorrectAnswers: ["Unison", "5th", "6th", "4th", "3rd", "7th"]
						}
					]
				},
				{
					type: "btt.cc.ui.content.multiple-choice",
					id: "theory-link-ear-training",
					title: "Theory Link Ear Training",
					css:
					{
						".audio-player": {bottom:"20px", right:"100px"}
					},
					imageReveal:
					{
						image: "Ch9_violnduet.png",
						tileImage: "reveal-tile_110x110.png",
						rows: 2,
						cols: 3,
						width: 330,
						height: 220
					},
					questions:
					[
						{
							id: "question",
							title: "",
							audioFile: "Ch9_Q1_EarQuiz3rd",
							smallCards: true,
							text: "Listen to this example & Name the Interval.",
							correctAnswers: ["3rd"],
							incorrectAnswers: ["Unison", "2nd", "4th", "5th", "6th", "7th"]
						},
						{
							id: "question",
							title: "",
							audioFile: "Ch9_Q2_EarQuiz6th",
							smallCards: true,
							text: "Listen to this example & Name the Interval.",
							correctAnswers: ["6th"],
							incorrectAnswers: ["Unison", "2nd", "4th", "5th", "3rd", "7th"]
						},
						{
							id: "question",
							title: "",
							audioFile: "Ch9_Q3_EarQuiz4th",
							smallCards: true,
							text: "Listen to this example & Name the Interval.",
							correctAnswers: ["4th"],
							incorrectAnswers: ["Unison", "2nd", "3rd", "5th", "6th", "7th"]
						},
						{
							id: "question",
							title: "",
							audioFile: "Ch9_Q4_EarQuiz5th",
							smallCards: true,
							text: "Listen to this example & Name the Interval.",
							correctAnswers: ["5th"],
							incorrectAnswers: ["Unison", "2nd", "4th", "3rd", "6th", "7th"]
						},
						{
							id: "question",
							title: "",
							audioFile: "Ch9_Q5_EarQuiz7th",
							smallCards: true,
							text: "Listen to this example & Name the Interval.",
							correctAnswers: ["7th"],
							incorrectAnswers: ["Unison", "2nd", "4th", "5th", "6th", "3rd"]
						},
						{
							id: "question",
							title: "",
							audioFile: "Ch9_Q6_EarQuiz2nd",
							smallCards: true,
							text: "Listen to this example & Name the Interval.",
							correctAnswers: ["2nd"],
							incorrectAnswers: ["Unison", "3rd", "4th", "5th", "6th", "7th"]
						}
					]
				}
			]
		},
		{
			id: "comp-model",
			title: "Composition Model",
			introOverlay:
			{
				title: "Composition Model",
				synopsis: "See how you can harmonize a melody to create more interest and a thicker texture."
			},
			pages:
			[
				{
					type: "btt.cc.ui.content.composition-model",
					id: "composition-model",
					// title: "Composition Model",
					videos:
					[
						{
							title: "Composition Model",
							text: "View this movie to see how you can add a harmony part to a melody.",
							poster: "Ch9_Poster_CompModel.jpg",
							code: '<iframe width="640" height="360" src="http://www.youtube.com/embed/6rpKpFi-eeQ?rel=0" frameborder="0" allowfullscreen></iframe>'
						}
					]
				},
			]
		},
		{
			id: "create-comp",
			title: "Create Your Composition",
			introOverlay:
			{
				title: "Create Your Composition",
				synopsis: "Now use your favourite notation software to create your newly harmonized melody."
			},
			pages:
			[
				{
					type: "btt.cc.ui.content.create-composition",
					id: "create-composition",
					titleMain: "Your Composition Activity",
					subtitle: "A Duet for Two",
                    showMotif: false,
                    scoreImage: "Ch9_ScoreReference.jpg",
					downloadSteps:
					[
						"Enter <em>Sur le Pont d’Avignon</em> in G Major as shown. <em style=\"color:#e22f5b\">(Original Melody)</em>",
						"Create 2nd staff for harmony part.",
						"Enter notes to create a harmony part a 3rd below in the 1st 4 measures. <em style=\"color:#e22f5b\">(Harmony Part)</em>",
                        "Create harmony part a 6th below in last 4 measures.",
                        "Adjust harmony by using 4ths or 5ths so it’s pleasing to the ear.",
                        "Create a 1-2 measure ending <em style=\"color:#e22f5b\">(Ending)</em>",
						"Assign instruments to each part. Make sure notes are in their playable octave. <em style=\"color:#e22f5b\">(Orchestrate)</em>"
					],
					finaleTemplateFile: "Ch9_CompositionTemplate.mus",
					sibeliusTemplateFile: "Ch9_CompositionTemplate.sib",
					compModelFile: "pdf/Ch9_CompModel[2]",
					finaleTipsFile: "pdf/Ch9_FinaleTips",
					sibeliusTipsFile: "pdf/Ch9_SibelusTips",
					playPad:
					{
						description: "<em style='color:#e22f5b'>Your Duet:</em> Experiment harmonizing the melody <em>“Sur Le Pont d’Avignon”</em> a <u>3rd or 6th below</u>. Activate the sound file and play your harmony part.",
						image: "Ch-9-PlayPadImage.png",
						audio: "PlayPadCh9",
						labels:
						{
							style: "flat",
							white: {},
							black: {}
						}
					},
					css:
					{
						".play-pad-reveal div": {position:"relative", top:"-80px"}
					}
				}
			]
		},
		{
			id: "reflect-discuss",
			title: "Reflect & Discuss",
			introOverlay:
			{
				title: "Reflect & Discuss",
				synopsis: "Enter your name and answer the questions on the following slides as you reflect on your composition. Then submit it to your teacher."
			},
			pages:
			[
				{
					type: "btt.cc.ui.content.reflect-discuss",
					id: "reflect-discuss",
					instructions: "Fill in your reflections below:",
					evaluationRubricFile: "pdf/Ch9_CCMobileRubric",
					reflections:
					[
						"How has the addition of a harmony part changed your music?",
						"Did you find any notes that were a challenge to harmonize?",
						"How did you create your ending to make the music sound complete?"
					],
					coachingTips:
					[
						"Know your objective(s)",
						"Relate feedback to musical elements",
						"It isn’t about “good” or “bad” it’s about what is working",
						"Don’t judge by rules alone",
						"Suggest options “Try this” - but don’t overwhelm them",
						"Composer always has the last word",
						"Bring it to life. How could you use this music?"
					]
				}
			]
		},
		{
			id: "expand-it",
			title: "Expand It",
			introOverlay:
			{
				title: "Expand It",
				synopsis: "Have some fun with your composition and take it further. Be sure to share it too!"
			},
			pages:
			[
				{
					type: "btt.cc.ui.content.expand-it",
					id: "expand-it",
					instructions: "Here are some cool ways to expand your composition:",
					expandSteps:
					{
						notation:
						[
							"Create a larger form by starting with a unison melody (A) and then introducing the harmonized melody (A1).",
							"Use this technique to harmonize your own, or other well known melodies. (Experiment with 3rds & 6ths above and below.)"
						],
						sequencing:
						[
							"Create a drum track by adding or creating a drum loop.",
							"Set up an audio track to record your melody either sung or played.",
                            "Set up another track to record the harmony in the same fashion as step 2.",
							"Balance the parts using the mixer and add effects."
						]
					},
					links:
					{
						notation:
						[
						],
						sequencing:
						[
							// NEED: Correct video link
							{
								type: "video",
								title: "See How",
								code: '<iframe width="640" height="360" src="http://www.youtube.com/embed/o8V3-whfOaU?rel=0&autoplay=1" frameborder="0" allowfullscreen></iframe>'
							},
							{
								type: "audio",
								title: "Hear Model",
								audioFile: "Ch9Audiov7"
							}
						]
					}
				}
			]
		}
	]
});