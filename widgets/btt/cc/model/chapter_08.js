btt.cc.model.chapter.chapters.push(
{
	id: "8",
	title: "Scale Tones in a Melody",
	compositionFocus: "Build a Melody with a Strong Tonal Center",
	theoryLink: "Scale Degree Numbers and Names",
	sections:
	[
		{
			id: "lessons",
			title: "Lessons",
			introOverlay:
			{
				title: "Lesson",
				synopsis: "Lesson Activities",
				synopsisExtra: "<ol><li data-target='intro'>Introduction</li><li data-target='stable-unstable-tones'>Stable & Unstable Scale Tones</li><li data-target='rules-for-unstable-tones'>Rules For Unstable Notes</li><li data-target='dona-nobis-pacem'>Dona Nobis Pacem</li><li data-target='strong-tonal-center'>Melodies with a Strong Tonal Center</li><li data-target='theory-link'>Theory Link</li></ol>"
			},
			pages:
			[
				{
					type: "btt.cc.ui.content.title",
					id: "intro",
					breadcrumb:"Introduction",
					title: "Chapter 8:",
					subtitle:"Scale Tones in A Melody",
					synopsis:"In this activity, you will be re-arranging the notes to Dona Nobis Pacem to create your own music. You learned about scale tones in this chapter and now you will be discovering how to use them to build stronger melodies.",
					audioFile: "CC Lesson Ch 8_Mobile"
				},
				{
					type: "btt.cc.ui.content.staff-player",
					id: "stable-unstable-tones",
					title: "Stable and Unstable Scale Tones",
					subtitle: "Learn about the different characteristics of stable and unstable tones in a major scale.",
					cards:
					[
						{
							title: "",
							text: "Stable scale tones help to establish the key of a melody by giving it a strong tonal center.",
							audioFile: "Ch_8_StableUnstableScaleTones",
							scoreImage: "Chapt8_ScaleTonesinMel.png",
							largePlayer: true,
							width: "700px"
						}
					]
				},
				{
					type: "btt.cc.ui.content.generic-selector",
					id: "scale-tone-quiz",
					title: "Scale Tone Quiz",
					subtitle: "See if you can remember the most stable and unstable tones in a major scale.",
					introOverlayText: "Select the scale tones.",
					questions:
					[
						{
							text: "Select the scale tones beginning with the most stable and ending with the least stable.",
							image: "Ch6_ScaleToneQuiz.png",
							smallAnswerBoxes: true,
							answers:
							[
								{
									text: "1"
								},
								{
									text: "3"
								},
								{
									text: "5"
								},
								{
									text: "6"
								},
								{
									text: "2"
								},
								{
									text: "4"
								},
								{
									text: "7"
								}
							]
						},
					],
					shuffleChoices: false,
					reuseChoices: false,
					choices:
					[
						{
							text: "1"
						},
						{
							text: "2"
						},
						{
							text: "3"
						},
						{
							text: "4"
						},
						{
							text: "5"
						},
						{
							text: "6"
						},
						{
							text: "7"
						}
					]
				},
				{
					type: "btt.cc.ui.content.staff-player",
					id: "rules-for-unstable-tones",
					breadcrumb: "Rules for Unstable Tones",
					title: "Rules for Unstable Scale Tones",
					subtitle: "See and hear how stable and unstable tones behave.",
					tempo: 180,
					cards:
					[
						{
							title: "7 to 1",
							text: "<strong>7</strong> (weakest) likes to move up to <strong>1</strong> (strongest)",
							noteData:
							{
								clef: "treble",
								notes:["b/4 w?annotation=7", "c/5 w?annotation=1", "_f/4 w?annotation=4", "_e/4 w?annotation=3", "_a/4 w?annotation=6", "_g/4 w?annotation=5", "_d/5 w?annotation=2", "_c/5 w?annotation=1"]
							},
							staffParams:
							{
								timeSig: "32/4",
								hideTimeSig: true,
								offset: {x:0, y:40},
								barsPerLine: 1,
								padding: 100,
								scale: 1
							}
						},
						{
							title: "4 to 3",
							text: "<strong>4</strong> (next weakest) likes to move down to <strong>3</strong> (next strongest)",
							noteData:
							{
								clef: "treble",
								notes:["_b/4 w?annotation=7", "_c/5 w?annotation=1", "f/4 w?annotation=4", "e/4 w?annotation=3", "_a/4 w?annotation=6", "_g/4 w?annotation=5", "_d/5 w?annotation=2", "_c/5 w?annotation=1"]
							},
							staffParams:
							{
								timeSig: "32/4",
								hideTimeSig: true,
								offset: {x:0, y:40},
								barsPerLine: 1,
								padding: 100,
								scale: 1
							}
						},
						{
							title: "6 to 5",
							text: "<strong>6</strong> likes to move down to <strong>5</strong>",
							noteData:
							{
								clef: "treble",
								notes:["_b/4 w?annotation=7", "_c/5 w?annotation=1", "_f/4 w?annotation=4", "_e/4 w?annotation=3", "a/4 w?annotation=6", "g/4 w?annotation=5", "_d/5 w?annotation=2", "_c/5 w?annotation=1"]
							},
							staffParams:
							{
								timeSig: "32/4",
								hideTimeSig: true,
								offset: {x:0, y:40},
								barsPerLine: 1,
								padding: 100,
								scale: 1
							}
						},
						{
							title: "2 to 1",
							text: "<strong>2</strong> likes to move down to <strong>1</strong>",
							noteData:
							{
								clef: "treble",
								notes:["_b/4 w?annotation=7", "_c/5 w?annotation=1", "_f/4 w?annotation=4", "_e/4 w?annotation=3", "_a/4 w?annotation=6", "_g/4 w?annotation=5", "d/5 w?annotation=2", "c/5 w?annotation=1"]
							},
							staffParams:
							{
								timeSig: "32/4",
								hideTimeSig: true,
								offset: {x:0, y:40},
								barsPerLine: 1,
								padding: 100,
								scale: 1
							}
						}
					]
				},
				{
					type: "btt.cc.ui.content.composer-music",
					id: "dona-nobis-pacem",
					title: "Dona Nobis Pacem",
					composerName: "Dona Nobis Pacem",
					composerYears: "Origins Unknown",
					composerImage: "composers/dona-nobis/head-shot.png",
					score:
					{
						image1: "Ch8_DonaNobis.jpg",
						image2: "Ch8_DonaNobis.jpg",
						audio: "Ch8_Dona_Nobis_Score",
						canExpand: true
					},
					questionIntro: "<span>Listen:</span> To the opening section of Dona Nobis Pacem and make note of the scale tones used.",
					questions:
					[
						{
							id: "num-stable-tone-measures",
							question: "How many measures begin with a stable tone in Dona Nobis Pacem?",
							answers: ["6", "2", "4", "5", "8"],
							smallCards: true
						},
						{
							id: "num-unstable-tone-measures",
							question: "How many measures begin with an unstable scale tone in Dona Nobis Pacem?",
							answers: ["2", "6", "4", "5", "8"],
							smallCards: true
						},
						{
							id: "num-unstable-resolve-stable",
							question: "How many times do unstable tones resolve to stable tones according to the rules?",
							answers: ["7", "2", "4", "5", "8"],
							smallCards: true
						},
						{
							id: "most-common-scale-tone",
							question: "In general, which scale tone is used most commonly to begin and end a melody?",
							answers: ["1", "2", "3", "4", "5"],
							smallCards: true
						}
					],
					didYouKnow:
					{
						title: "Notes on Dona Nobis Pacem",
						facts:
						[
							"The canon <em>Dona Nobis Pacem</em> is Latin for the words “Grant Us Peace”.",
							"The original canon has three sections to it, but you are working with just the first “A” section.",
							"The origins of this song are unknown but there is speculation that it was written either by Palestrina, an Italian Renaissance composer in the 1500s, or by Mozart in the late 1700s."
						],
						legendItems:
						[
							{color:"#e66c4b", text:"Palestrina"},
							{color:"#585858", text:"Mozart"}
						],
						timelineImage: "composers/dona-nobis/timeline.jpg"
					}
				},
				{
					type: "btt.cc.ui.content.composition-model",
					id: "strong-tonal-center",
					title: "Melodies with a Strong Tonal Center",
					videos:
					[
						{
							title: "Melodies with a Strong Tonal Center",
							posterText: "Click to Play",
							text: "One of the essential ingredients of a good melody is a strong tonal center. Watch this movie to see how to create this.",
							code: '<iframe width="640" height="360" src="http://www.youtube.com/embed/-_1f5U3xGB0?rel=0" frameborder="0" allowfullscreen></iframe>'
						}
					]
				},
				{
					type: "btt.cc.ui.content.generic-selector",
					id: "theory-link",
					title: "Theory Link",
					subtitle: "See how three famous national anthems establish their key.",
					introOverlayText: "Select the correct scale degrees.",
					questions:
					[
						{
							text: "<span style='color:#8a8a8a'>The Star Spangled Banner</span> Key: B<sup>&#x266d;</sup> Major",
							audio: "Ch_8_StarSpangledBanner 1",
							image: "Ch8USNatAnth.jpg",
							smallAnswerBoxes: true,
							audioPrize: "Ch_8_StarSpangledBanner 1",
							answers:
							[
								{
									text: "5",
									offset: "-20px",
									note: "f4"
								},
								{
									text: "3",
									offset: "-40px",
									note: "d4"
								},
								{
									text: "1",
									offset: "-50px",
									note: "bb3"
								},
								{
									text: "3",
									offset: "-46px",
									note: "d4"
								},
								{
									text: "5",
									offset: "-43px",
									note: "f4"
								},
								{
									text: "1",
									offset: "-40px",
									note: "bb4"
								},
								{
									text: "1",
									offset: "80px",
									note: "bb4"
								}
							]
						},
						{
							text: "<span style='color:#8a8a8a'>O Canada!</span> Key: E<sup>&#x266d;</sup> Major",
							audio: "Ch_8_OCanada",
							audioPrize: "Ch_8_OCanada",
							image: "Ch8CanNatAnth.jpg",
							smallAnswerBoxes: true,
							answers:
							[
								{
									text: "3",
									offset: "-100px",
									note: "g4"
								},
								{
									text: "5",
									offset: "-101px",
									note: "bb4"
								},
								{
									text: "5",
									offset: "-103px",
									note: "bb4"
								},
								{
									text: "1",
									offset: "-85px",
									note: "eb4"
								},
								{
									text: "1",
									offset: "152px",
									note: "eb4"
								}
							]
						},
						{
							text: "<span style='color:#8a8a8a'>La Marseillaise</span> Key: G Major",
							audio: "Ch_8_France",
							audioPrize: "Ch_8_France",
							image: "Ch8FrNatAnth.jpg",
							smallAnswerBoxes: true,
							answers:
							[
								{
									text: "5",
									offset: "-5px",
									note: "d4"
								},
								{
									text: "5",
									offset: "-22px",
									note: "d4"
								},
								{
									text: "5",
									offset: "-36px",
									note: "d4"
								},
								{
									text: "1",
									offset: "-52px",
									note: "g4"
								},
								{
									text: "1",
									offset: "-67px",
									note: "g4"
								},
								{
									text: "1",
									offset: "104px",
									note: "g4"
								}
							]
						}
					],
					shuffleChoices: false,
					reuseChoices: true,
					choices:
					[
						{
							text: "1"
						},
						{
							text: "2"
						},
						{
							text: "3"
						},
						{
							text: "4"
						},
						{
							text: "5"
						},
						{
							text: "6"
						},
						{
							text: "7"
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
				synopsis: "Let’s play with the pitches in Dona Nobis Pacem!"
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
							text: "See how to move the pitches around in Dona Nobis Pacem while following the rules about unstable scale tones.",
							poster: "PosterImagesCh_8.jpg",
							code: '<iframe width="640" height="360" src="http://www.youtube.com/embed/FRsjSAe7pII?rel=0" frameborder="0" allowfullscreen></iframe>'
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
				synopsis: "Now it’s your turn to play with Dona Nobis Pacem, using your favorite notation software."
			},
			pages:
			[
				{
					type: "btt.cc.ui.content.create-composition",
					id: "create-composition",
					titleMain: "Your Composition Activity",
					subtitle: "Create Your Own Melody",
                    showMotif: false,
                    scoreImage: "Ch8_DonaNobis.jpg",
					downloadSteps:
					[
						"Enter Dona Nobis as shown",
						"Change the pitches to create your own melody but keep the rhythm",
						"Label the scale degrees",
                        "Let the rules for stable and unstable tones guide you",
                        "Fine tune your melody",
                        "Alter some rhythms if you wish"
					],
					finaleTemplateFile: "Ch_8_CompositionTemplate.mus",
					sibeliusTemplateFile: "Ch_8_CompositionTemplate.sib",
					compModelFile: "pdf/Chapt8_ScaleTonesinaMelody",
					finaleTipsFile: "pdf/Ch8FinaleTips",
					sibeliusTipsFile: "pdf/Ch8SibelusTips",
					playPad:
					{
						description: "<em style='color:#e22f5b'>A Stable Melody:</em> Use rhythm of <em>Dona Nobis Pacem</em> but create your own pitch / melody in <em><u>F MAJOR</u></em>. Be sure to use more stable tones (1, 5, 3)",
						image: "Ch-8-PlayPadImage.png",
						labels:
						{
							style: "circle",
							styleBlack: "flat",
							white: {"0": "5", "3": "1", "5": "3", "7": "5", "10": "1", "12": "3"},
							black: {"5": "Bb", "12": "Bb"}
						}
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
				synopsis: "Answer the questions on the following slides as you reflect on your composition. Then submit it to your teacher."
			},
			pages:
			[
				{
					type: "btt.cc.ui.content.reflect-discuss",
					id: "reflect-discuss",
					instructions: "Fill in your reflections below:",
					evaluationRubricFile: "pdf/CCMobileCh8_Rubric",
					reflections:
					[
						"Name two instances where you resolved an unstable tone to a stable one in your music.",
						"Name a melody you think is strong and memorable and briefly explain why.",
						"What instrument(s) do you think would sound good playing your composition?"
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
							"Add a new section that is the key four steps higher than this one. OR",
							"Arrange your music so that it is being played by more than one instrument.",
							"Perform your music with friends or members of your class. If you are in a class, you may want to try stringing a number of melodies together to create a larger form."
						],
						sequencing:
						[
							"Add or create beat loops.",
							"Insert your melody into more than one track",
                            "Create an arrangement by splicing and pasting sections of your music."
						]
					},
					links:
					{
						notation:
						[
							{
								type: "image",
								title: "See Score",
								imageFile: "Ch8_ExpScoreImage.jpg"
							},
							{
								type: "audio",
								title: "Hear Model",
								audioFile: "Ch8_CompExpNS"
							}
						],
						sequencing:
						[
						]
					}
				}
			]
		},
	]
});