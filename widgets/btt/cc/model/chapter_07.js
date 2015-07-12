btt.cc.model.chapter.chapters.push(
{
	id: "7",
	title: "Jazz Up Your Melody",
	compositionFocus: "Arranging a Melody in a Swing Style",
	theoryLink: "Major Key Signatures, Swing Rhythms",
	sections:
	[
		{
			id: "lessons",
			title: "Lessons",
			introOverlay:
			{
				title: "Lesson",
				synopsis: "Lesson Activities",
				synopsisExtra: "<ol><li data-target='intro'>Introduction</li><li data-target='what-is-swing'>What is Swing?</li><li data-target='rhythm-in-swing'>Rhythm in Swing</li><li data-target='more-about-swing-rhythm'>More About Rhythm in Swing</li><li data-target='little-brown-jug'>Glen Miller’s ‘Little Brown Jug’</li><li data-target='theory-link'>Theory Link</li></ol>"
			},
			pages:
			[
				{
					type: "btt.cc.ui.content.title",
					id: "intro",
					breadcrumb:"Introduction",
					title: "Chapter 7:",
					subtitle:"Jazz Up Your Melody",
					synopsis:"In this lesson, you will be creating a jazz swing-style version of the famous old melody ‘Early One Morning’. In the process, you’ll learn about the three (3) key rhythmic elements of Swing music from the 1930s, and about moving smoothly from one key to another.",
					audioFile: "BTC Lesson Ch7_Intro"
				},
				{
					type: "btt.cc.ui.content.composition-model",
					id: "what-is-swing",
					title: "What is Swing?",
					videos:
					[
						{
							title: "What is Swing?",
							posterText: "",
							text: "Swing is a predominant style found in jazz music, characterized by a unique rhythmic feel.",
							code: '<iframe width="640" height="360" src="http://www.youtube.com/embed/qDQpZT3GhDg?rel=0" frameborder="0" allowfullscreen></iframe>'
						}
					]
				},
				{
					type: "btt.cc.ui.content.create-composition",
					id: "swing-rhythmic-elements",
					titleMain: "Rhythmic Elements in Swing",
					breadcrumb: "Rhythmic Elements in Swing",
					title: "Three (3) Rhythmic Elements in Swing",
					subtitle: "These are three key elements that give swing music its identifiable character.",
					smallText: true,
                    showMotif: false,
                    scoreImage: "ThreeElementsSwing.png",
					downloadSteps:
					[
					]
				},
				{
					type: "btt.cc.ui.content.staff-player",
					id: "rhythm-in-swing",
					title: "Rhythm In Swing",
					subtitle: "Eighth notes in swing music are played with a long-short feel. They may look like regular eighth note patterns but the notes on the downbeat are played twice as long as the notes on the upbeats, creating an uneven feel.",
					cards:
					[
						{
							title: "Listen to Straight Eighth Notes",
							text: "Regular straight eighth notes found in traditional music are played evenly and sound like this.",
							audioFile: "Ch7_Hall_Straight",
							scoreImage: "Ch7_HallStraight.png",
							largePlayer: false,
							width: "700px"
						},
						{
							title: "How Eighth Notes Swing",
							text: "Listen to what they sound like when they ‘swing’. The best way to learn this style, is to listen to swing music.",
							audioFile: "Ch7_Hall_Swing",
							scoreImage: "Ch7_HallSwing.png",
							largePlayer: false,
							width: "700px"
						}
					],
					fadeCards: true
				},
				{
					type: "btt.cc.ui.content.multiple-choice",
					id: "swing-or-not",
					title: "To Swing or Not To Swing",
					questions:
					[
						{
							id: "question",
							title: "",
							image: "Ch7_30sRadioPic.png",
							audioFile: "Ch7_SwingQuizSwing1Yes",
							text: "Is this swing?",
							correctAnswers: ["Yes"],
							incorrectAnswers: ["No"]
						},
						{
							id: "question",
							title: "",
							image: "Ch7_30sRadioPic.png",
							audioFile: "Ch7_SwingQuizSwing2Yes",
							text: "Is this swing?",
							correctAnswers: ["Yes"],
							incorrectAnswers: ["No"]
						},
						{
							id: "question",
							title: "",
							image: "Ch7_30sRadioPic.png",
							audioFile: "Ch7_SwingQuizSt3No",
							text: "Is this swing?",
							correctAnswers: ["No"],
							incorrectAnswers: ["Yes"]
						},
						{
							id: "question",
							title: "",
							image: "Ch7_30sRadioPic.png",
							audioFile: "Ch7_SwingQuizSt4No",
							text: "Is this swing?",
							correctAnswers: ["No"],
							incorrectAnswers: ["Yes"]
						}
					]
				},
				{
					type: "btt.cc.ui.content.staff-player",
					id: "more-about-swing-rhythm",
					title: "More About Swing Rhythm",
					subtitle: "Swing style is also characterized by syncopated off-beat rhythms and an underlying and driving quarter note feel. Learn about these other rhythmic features of swing style.",
					cards:
					[
						{
							title: "Syncopation",
							text: "Syncopation places the emphasis on the upbeats of a rhythm pattern. This creates an element of surprise.",
							largePlayer: true,
							width: "700px",
							video:
							{
								// NEED: correct vido link
								code: '<iframe width="640" height="340" src="http://www.youtube.com/embed/tMS0-8VHgKU?rel=0" frameborder="0" allowfullscreen></iframe>'
							}
						},
						{
							title: "Driving Quarter Notes",
							text: "The driving quarter note rhythms, played by the rhythm section, provide the foundation for swing.",
							audioFile: "Ch7_QuarterNotes",
							scoreImage: "Ch7_MoreAboutSwingQuar.png",
							largePlayer: false,
							width: "700px"
						}
					]
				},
				{
					type: "btt.cc.ui.content.generic-selector",
					id: "syncopation-quiz",
					title: "Syncopation Quiz",
					subtitle: "Listen to these rhythmic figures and identify which ones are syncopated.",
					introOverlayText: "Listen to and identify the syncopated patterns.",
					questions:
					[
						{
							text: "Is this syncopated?",
							vertical: true,
							smallAnswerBoxes: true,
							wideAnswerBoxes: true,
							images:
							[
								"Ch7_SyncQuiz1.png", "Ch7_SyncQuiz2.png", "Ch7_SyncQuiz3.png", "Ch7_SyncQuiz4.png"
							],
							answers:
							[
								{
									text: "Yes",
									audio: "Ch7_SincQuizQ1Rt"
								},
								{
									text: "No",
									audio: "Ch7_SincQuizQ2Wrng"
								},
								{
									text: "Yes",
									audio: "Ch7_SincQuizQ3Rt"
								},
								{
									text: "No",
									audio: "Ch7_SincQuizQ4Wrng"
								}
							]
						}
					],
					shuffleChoices: false,
					reuseChoices: true,
					wideChoices: true,
					smallChoices: true,
					choices:
					[
						{
							text: "Yes"
						},
						{
							text: "No"
						}
					]
				},
				
				{
					type: "btt.cc.ui.content.composer-music",
					id: "little-brown-jug",
					title: "Little Brown Jug",
					composerName: "Glenn Miller",
					composerYears: "1904-1944",
					composerImage: "glenn-miller.png",
					video:
					{
						code: '<iframe style="margin-top:10px" id="jaws_clip" width="80%" height="220" src="//www.youtube.com/embed/RzMHMWjVZc0?rel=0&autoplay=1" frameborder="0" allowfullscreen></iframe>'
					},
					questionIntro: "<span>Listen:</span> To Glenn Miller’s SWING version of Little Brown Jug.",
					questions:
					[
						{
							id: "driving-quarter-note-rhythm",
							question: "Who establishes the driving quarter note rhythm in the opening bars of ‘Little Brown Jug’?",
							answers: ["Snapping Fingers", "String Bass", "Drums", "Piano", "Trombones", "Trumpets", "Saxophones"],
							smallCards: true,
							numCorrect: 2
						},
						{
							id: "melody-first",
							question: "Who enters with the melody first?",
							answers: ["Saxophones", "Snapping Fingers", "String Bass", "Drums", "Piano", "Trombones", "Trumpets"],
							smallCards: true,
							numCorrect: 1
						}
					],
					didYouKnow:
					{
						title: "Notes on Duke Ellington and Glenn Miller",
						facts:
						[
							"<strong>Swing</strong> was the popular music of the 1930s & 40s.",
							"<strong>Duke Ellington (1899-1974)</strong>, emerged during the Harlem Renaissance, which was an African-American intellectual movement of art and culture in the 1920s.",
							"The composition ‘It Don’t Mean a Thing (If it Ain’t Got That Swing)’ showcases the Duke’s unique jazz orchestra stylings including his unusual use of violin and the muted growls of his trumpet and trombone soloists.",
							"<strong>Glenn Miller (1904-1944)</strong> was a popular band leader during the swing era of the 30’s & 40’s, but he went missing in action in 1944, during World War II, while flying from England to France to entertain troops.",
							"This swing arrangement of Little Brown Jug released in 1939, became one of many a mainstream big band classics by Glenn Miller."
						],
						legendItems:
						[
							{color:"#e76c23", text:"Harlem Renaissance"},
							{color:"#535353", text:"World War II"},
							{redDot:true, text:"It Don’t Mean a Thing"},
							{whiteDot:true, text:"Little Brown Jug"}
						],
						legendItemsPerLine: 2,
						timelineImage: "Timeline_ch7.jpg"
					}
				},
				{
					type: "btt.cc.ui.content.multiple-choice",
					id: "swing-quiz",
					title: "Swing Quiz",
					imageReveal:
					{
						image: "Ch7_swing_quiz.png",
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
							text: "Swing jazz is characterized by eighth note patterns played in a long-short style.",
							correctAnswers: ["True"],
							incorrectAnswers: ["False"]
						},
						{
							id: "question",
							title: "",
							text: "Swing music is characterized by a driving quarter note feel in the rhythm section.",
							correctAnswers: ["True"],
							incorrectAnswers: ["False"]
						},
						{
							id: "question",
							title: "",
							text: "Part of the brass sound was created by the use of muted brass.",
							correctAnswers: ["True"],
							incorrectAnswers: ["False"]
						},
						{
							id: "question",
							title: "",
							text: "Swing is the only style found in Jazz.",
							correctAnswers: ["False"],
							incorrectAnswers: ["True"]
						},
						{
							id: "question",
							title: "",
							text: "A jazz orchestra has the same instrumentation as a symphony orchestra.",
							correctAnswers: ["False"],
							incorrectAnswers: ["True"]
						},
						{
							id: "question",
							title: "",
							text: "The swing arrangement of Little Brown Jug released in 1939, became a big band classic.",
							correctAnswers: ["True"],
							incorrectAnswers: ["False"]
						}
					]
				},
				{
					type: "btt.cc.ui.content.generic-selector",
					id: "theory-link",
					title: "Theory Link",
					extra:
					{
						type: "btt.cc.extra.ch7_theory-link",
						params: {}
					},
					subtitle: "Listen to how the same melody sounds in different keys.",
					// introOverlayText: "Same Tune, Different Key",
					questions:
					[
						{
							id: "q1",
							text: "Same Tune, Different Key",
							hideChoices: true,
							imageAudio:
							{
								audio: "Ch7_OdeToJoyDifKey",
								image: "Ch7_SameTuneDiffKey.png",
								audioAutoPlay: true
							}
						},
						{
							id: "q2",
							text: "Identify the following key signatures from left to right.",
							images:
							[
								"Ch7_KeySigsBb.png", "Ch7_KeySigsF.png", "Ch7_KeySigsC.png", "Ch7_KeySigsG.png", "Ch7_KeySigsD.png"
							],
							vertical: false,
							smallAnswerBoxes: false,
							answers:
							[
								{
									text: "Bb"
								},
								{
									text: "F"
								},
								{
									text: "C"
								},
								{
									text: "G"
								},
								{
									text: "D"
								}
							]
						}
					],
					shuffleChoices: false,
					reuseChoices: true,
					choices:
					[
						{
							text: "A"
						},
						{
							text: "Bb"
						},
						{
							text: "C"
						},
						{
							text: "D"
						},
						{
							text: "Eb"
						},
						{
							text: "F"
						},
						{
							text: "G"
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
				synopsis: "See what you can do to turn ‘Early One Morning’ into a swing style melody."
			},
			pages:
			[
				{
					type: "btt.cc.ui.content.composition-model",
					id: "composition-model",
					videos:
					[
						{
							title: "Composition Model",
							text: "View this movie and learn how to create a swing melody from a regular folk song.",
							poster: "Ch7_Poster_CompModel.jpg",
							code: '<iframe width="640" height="360" src="http://www.youtube.com/embed/kQk1WGLK0nU?rel=0" frameborder="0" allowfullscreen></iframe>'
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
				synopsis: "Now use your favourite notation software to create your swing melody."
			},
			pages:
			[
				{
					type: "btt.cc.ui.content.create-composition",
					id: "create-composition",
					titleMain: "Your Composition Activity",
					subtitle: "Jazz Up your Melody",
                    showMotif: false,
                    scoreImage: "Ch7_ScoreReference.jpg",
                    downloadStepsTight: true,
					downloadSteps:
					[
						"Enter <em>Early One Morning</em> in Bb Major as shown. <em style=\"color:#e22f5b\">(Original Melody)</em>",
						"Set to Swing Style, at 120 tempo. <em style=\"color:#e22f5b\">(Swing Setting)</em>",
						"Exchange some quarter notes with Eighths. <em style=\"color:#e22f5b\">(Change Up the Rhythms)</em>",
						"Syncopate some quarter notes.",
						"Add drum set staff & enter quarter notes on cymbal. Insert a double barline. <em style=\"color:#e22f5b\">(Quarter Note Foundation)</em>",
						"Copy your melody to bar 9. Add bass drum & snare drum (or rim shot).",
						"Create an ending. <em style=\"color:#e22f5b\">(Ending)</em>",
						"Optional: Change key to Eb major  (Notes move up a 4th) <em style=\"color:#e22f5b\">(New Key)</em>"
					],
					finaleTemplateFile: "Ch7_CompTemplate.mus",
					sibeliusTemplateFile: "Ch7_CompTemplate.sib",
					compModelFile: "pdf/Ch7_CompModel[3]",
					finaleTipsFile: "pdf/Ch7_FinaleTips",
					sibeliusTipsFile: "pdf/Ch7_SibelusTips",
					playPad:
					{
						description: "<em style='color:#e22f5b'>Swing the Melody:</em> Experiment using the Melody of <em>“Early One Morning”</em> using syncopation & swung 8th notes. Play along to swing beat.",
						image: "Ch-7-PlayPadImage.png",
						audio: "PlayPadCh7",
						labels:
						{
							style: "flat",
							white: {},
							black: {}
						}
					},
					css:
					{
						".play-pad-reveal div": {position:"relative", top:"-60px"}
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
					evaluationRubricFile: "pdf/Ch7_CCMobile_Rubric",
					reflections:
					[
						"How has the swing style changed the character of your music? Can you sing or play it?",
						"What tempo did you set for your melody and why?",
						"What instruments do you think would sound good playing your composition?"
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
							"Add saxophone, trumpet and trombone staves & paste in the melody. OR,",
							"Write your melody from Chapter 1 & 2 in a swing style."
						],
						sequencing:
						[
							"Create a swing style drum loop.",
							"Record your voice singing your swing melody using scat syllables. (See Video to learn more)",
                            "Record your voice singing a ‘shot’ line using scat.",
							"Sing the ‘shot’ line using higher notes in harmony."
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
								code: '<iframe width="640" height="360" src="http://www.youtube.com/embed/sVPF30HIe5o?rel=0&autoplay=1" frameborder="0" allowfullscreen></iframe>'
							},
							{
								type: "audio",
								title: "Hear Model",
								audioFile: "Ch 7 Expanision Audio"
							}
						]
					}
				}
			]
		}
	]
});