btt.cc.model.chapter.chapters.push(
{
	id: "4",
	title: "A Spooky Call",
	compositionFocus: "Call and Response Phrases, Setting a Mood, Writing Lyrics",
	theoryLink: "Half Steps, Using Flats and Sharps, the Piano Keyboard",
	sections:
	[
		{
			id: "lessons",
			title: "Lessons",
			introOverlay:
			{
				title: "Lesson",
				synopsis: "Lesson Activities",
				synopsisExtra: "<ol><li data-target='intro'>Introduction</li><li data-target='call-response'>Call & Response</li><li data-target='setting-the-mood'>Setting The Mood</li><li data-target='john-williams'>Composer – Jaws / John Williams</li><li data-target='half-whole-steps'>Theory Link</li></ol>"
			},
			pages:
			[
				{
					type: "btt.cc.ui.content.title",
					id: "intro",
					breadcrumb:"Introduction",
					title: "Chapter 4:",
					subtitle:"A Spooky Call",
					synopsis:"In this spooky activity, you will be creating a 4 measure melody using half steps to create a dark mysterious mood. Along the way you’ll learn about call and response phrases and you will also try your hand at writing some spooky words to your melody.",
					audioFile: "CC Lesson Ch 4_Mobile"
				},
				{
					type: "btt.cc.ui.content.staff-player",
					id: "call-response",
					title: "Call & Response",
					subtitle: "One way to develop a melody is through a technique known as Call & Response. This is when a second phrase answers or echoes the first phrase. It can be with words, or music or both.",
					tempo: 130,
					cards:
					[
						{
							isIntroCard: true,
							title: "",
							text: "Listen to this Call & Response example<br/>of Bah Bah Black Sheep",
							noteData:
							{
								clef: "treble",
								notes:
								[
									"c/4", "c/4", "g/4", "g/4", ["a/4 8", "a/4 8", "a/4 8", "a/4 8"], "g/4 h",
								]
							},
							staffParams:
							{
								offset: {x:0, y:40},
								barsPerLine: 2,
								padding: 50,
								scale: 1
							}
						},
						{
							title: "Call",
							text: "The first phrase in this melody line acts like a question.<br/>The music sounds unfinished.",
							noteData:
							{
								clef: "treble",
								notes:
								[
									"c/4", "c/4", "g/4", "g/4", ["a/4 8", "a/4 8", "a/4 8", "a/4 8"], "g/4 h",
								]
							},
							staffParams:
							{
								offset: {x:0, y:40},
								barsPerLine: 2,
								padding: 50,
								scale: 1
							}
						},
						{
							title: "Response",
							text: "The second phrase of the line responds with an answer.<br/>The music comes to rest.",
							noteData:
							{
								clef: "treble",
								notes:
								[
									"f/4", "f/4", "e/4", "e/4", "d/4", "d/4", "c/4 h"
								]
							},
							staffParams:
							{
								offset: {x:0, y:40},
								barsPerLine: 2,
								padding: 50,
								scale: 1
							}
						}
					]
				},
				{
					type: "btt.cc.ui.content.generic-selector",
					id: "camptown-races-quiz",
					title: "Camptown Races Quiz",
					subtitle: "Camptown Races has very identifiable call and response phrases.",
					introOverlayText: "Listen to & label each call and response phrase.",
					questions:
					[
						{
							text: "Select “Call” or “Response” to label<br/>the phrases from Camptown Races.",
							audioPrize: "Camptownraces",
							vertical: true,
							smallAnswerBoxes: true,
							wideAnswerBoxes: true,
							images:
							[
								"Camptown_1.png", "Camptown_2.png", "Camptown_3.png", "Camptown_4.png"
							],
							answers:
							[
								{
									text: "Call",
									audio: "Camptown_1"
								},
								{
									text: "Response",
									audio: "Camptown_2"
								},
								{
									text: "Call",
									audio: "Camptown_3"
								},
								{
									text: "Response",
									audio: "Camptown_4"
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
							text: "Call"
						},
						{
							text: "Response"
						}
					]
				},
				{
					type: "btt.cc.ui.content.staff-player",
					id: "setting-the-mood",
					title: "Setting The Mood",
					subtitle: "There are different ways to set the mood of a melody.",
					cards:
					[
						{
							isIntroCard: true,
							title: "",
							text: "View Four (4) Common Ways to Set a Spooky Mood.",
							scoreImage: "MoodHalfSteps.png"
						},
						{
							title: "Using Half Steps or Whole Steps",
							text: "Half Steps are the smallest distance between two notes on the piano. They can create a Spooky & Sinister sound. Whole Steps are made up of two half steps and have a more Open & Bright sound.",
							audioFile: "Ch4_Mood_Half",
							scoreImage: "MoodHalfSteps.png"
						},
						{
							title: "Speed",
							text: "Playing with slow & fast rhythms can create tension, excitement & motion.",
							audioFile: "Ch4_Mood_Speed",
							scoreImage: "MoodSpeed.png",
							width: "600px"
						},
						{
							title: "Volume",
							text: "Making the volume soft or loud can also create tension, excitement & motion.",
							audioFile: "Ch4_Mood_Volume",
							scoreImage: "MoodDynamics.png",
							width: "600px"
						},
						{
							title: "Lyrics",
							text: "Help to tell a story or describe a mood.",
							audioFile: "Ch4_Mood_Lyrics 4",
							scoreImage: "MoodLyrics.png",
							width: "600px"
						}
					]
				},
				{
					type: "btt.cc.ui.content.composer-music",
					id: "john-williams",
					title: "John Williams & Jaws",
					composerName: "John Williams",
					composerYears: "1932-present",
					composerImage: "composers/williams/head-shot.png",
					video:
					{
						code: '<iframe style="margin-top:10px" id="jaws_clip" width="80%" height="220" src="//www.youtube.com/embed/O01-SVrJEeo?rel=0&autoplay=1" frameborder="0" allowfullscreen></iframe>'
					},
					questionIntro: "<span>Listen:</span> To how John Williams’ creates a spooky mood for the movie “Jaws”.",
					questionIntro2: "<span>Listen:</span> To how the motif develops into a melody using a flurry of sequences",
					questions:
					[
						{
							id: "spooky-techniques",
							question: "Identify two techniques that John Williams uses to create this spooky sound.",
							answers: ["Plays with dynamics (volume)", "Uses half steps", "Keeps the tempo steady"],
							numCorrect: 2
						}
					],
					didYouKnow:
					{
						title: "Notes on John Williams",
						facts:
						[
							"John Williams is one of the greatest film composers of all time. He has been nominated for 48 Oscars, winning 5 of them, as well as 21 Grammy Awards.",
							"The two-note motif in the movie thriller “Jaws” was so powerful that it is now associated with sharks. It was this movie music that catapulted John Williams’ career as a composer.",
							"But early in his career, he played piano for many film and television scores in Hollywood and in 1959 he played the noteable opening piano solo to Henry Mancini's Peter Gunn theme.",
							"Later in life, he was also the conductor of the Boston Pops Orchestra. At one point, he resigned after having his music hissed at by musicians in the Boston Pops, but he was convinced to return and stayed on as principal conductor until 1995."
						],
						legendItems:
						[
							{color:"#e66c4b", text:"Williams' life"},
							{redDot:true, text:"The Movie <em>Jaws</em> released in 1975"}
						],
						timelineImage: "composers/williams/timeline.jpg"
					}
				},
				{
					type: "btt.cc.ui.content.composition-model",
					id: "half-whole-steps",
					title: "Half Steps & Whole Steps",
					videos:
					[
						{
							title: "Half Step VS Whole Step:",
							text: "The piano keyboard is a helpful way to show the differences between a half step and whole step.",
							poster: "PosterImagesWholeHalf.jpg",
							code: '<iframe width="640" height="360" src="http://www.youtube.com/embed/cpEepxsdgUs?rel=0" frameborder="0" allowfullscreen></iframe>'
						}
					]
				},
				{
					type: "btt.cc.ui.content.multiple-choice",
					id: "whole-half-step",
					title: "Whole Step or Half Step?",
					questions:
					[
						{
							id: "whole-half-step-1",
							title: "Question 1",
							text: "Is this a Half Step or Whole Step?",
							correctAnswers: ["Half Step"],
							incorrectAnswers: ["Whole Step"],
							staff:
							{
								noteData:
								{
									clef: "treble",
									notes:
									[
										"e/4 h", "f/4 h"
									]
								},
								staffParams:
								{
									padding: 100
								}
							}
						},
						{
							id: "whole-half-step-2",
							title: "Question 2",
							text: "Is this a Half Step or Whole Step?",
							correctAnswers: ["Whole Step"],
							incorrectAnswers: ["Half Step"],
							staff:
							{
								noteData:
								{
									clef: "treble",
									notes:
									[
										"a/4 h", "g/4 h"
									]
								},
								staffParams:
								{
									padding: 100
								}
							}
						},
						{
							id: "whole-half-step-3",
							title: "Question 3",
							text: "Is this a Half Step or Whole Step?",
							correctAnswers: ["Whole Step"],
							incorrectAnswers: ["Half Step"],
							staff:
							{
								noteData:
								{
									clef: "treble",
									notes:
									[
										"eb/4 h", "f/4 h"
									]
								},
								staffParams:
								{
									padding: 100
								}
							}
						},
						{
							id: "whole-half-step-4",
							title: "Question 4",
							text: "Is this a Half Step or Whole Step?",
							correctAnswers: ["Half Step"],
							incorrectAnswers: ["Whole Step"],
							staff:
							{
								noteData:
								{
									clef: "treble",
									notes:
									[
										"g/4 h", "f#/4 h"
									]
								},
								staffParams:
								{
									padding: 100
								}
							}
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
				synopsis: "Creating a Call & Response melody that’s spooky!"
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
							text: "View this movie to see how to create your Call & Response melody, while making it sound spooky!",
							poster: "PosterImagesCh_4.jpg",
							code: '<iframe width="640" height="360" src="http://www.youtube.com/embed/UVckF8C-C3o?rel=0" frameborder="0" allowfullscreen></iframe>'
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
				synopsis: "Now it’s your turn to create your very own Spooky, Call & Response Melody"
			},
			pages:
			[
				{
					type: "btt.cc.ui.content.create-composition",
					id: "create-composition",
					titleMain: "Your Composition Activity",
					subtitle: "Creating Your Spooky Melody",
                    showMotif: false,
                    scoreImage: "Ch4ScoreReference.jpg",
					downloadSteps:
					[
						"Input the notes of the “call” phrases as shown.",
						"Use the clef of your choice & a tempo of 80 bpm or less.",
						"In measure 2, create a response phrase that uses half steps and different rhythms to create the mood.",
                        "In measure 4, create another response phrase. <span style=\"font-style:italic; color:#e22f5b\">(Make the very last note the same as the first note in measure 1.)</span>",
                        "Create lyrics to go with your music. <span style=\"font-style:italic; color:#e22f5b\">(Play with the rhythm to fit your words)</span>"
					],
					finaleTemplateFile: "Ch_4_CompositionTemplate.mus",
					sibeliusTemplateFile: "Ch_4_CompositionTemplate.sib",
					compModelFile: "pdf/Chapt4_CompModel[2]",
					finaleTipsFile: "pdf/Ch4FinaleTips",
					sibeliusTipsFile: "pdf/Ch4SibelusTips",
					playPad:
					{
						description: "<em style='color:#e22f5b'>Spooky Melody:</em> Try different Response phrases, using Half Steps & different rhythms to set a spooky mood.",
						image: "Ch-4-PlayPadImage.png",
						labels:
						{
							style: "flat",
							white: {"7": "C", "8": "D", "9": "E", "10": "F", "11": "G", "12": "A", "13": "B"},
							black: {"7": "C#<br/>Db", "8": "D#<br/>Eb", "10": "F#<br/>Gb", "11": "G#<br/>Ab", "12": "A#<br/>Bb"}
						}
					},
					css:
					{
						".play-pad-reveal div": {position:"relative", top:"-50px"}
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
					evaluationRubricFile: "pdf/CCMobileCh4_Rubric",
					reflections:
					[
						"How did using half steps affect the mood of your piece?",
						"How did adding lyrics impact your melody?",
						"What other techniques could you use to enhance the mood?"
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
							"Add dynamic markings to enhance the mood of your music. (eg., <em>p</em> to <em>ff</em>)",
							"Double your melody an octave lower.",
							"Play with the tempo of your music.",
							"Have one instrument play the “Call” and another instrument play the “Response”."
						],
						sequencing:
						[
							"Record your melody by singing or playing it, using soft & loud sounds.",
							"If you have a sampler feature, use it to record and add spooky sounds.",
                            "If you don’t have a sampler, record spooky sounds using a mic.",
                            "Add echo and reverb to your music."
						]
					},
					links:
					{
						notation:
						[
							{
								type: "image",
								title: "See Score",
								imageFile: "Ch4_ExpScoreImage.jpg"
							},
							{
								type: "audio",
								title: "Hear Model",
								audioFile: "Ch4CompExpansion_NS"
							}
						],
						sequencing:
						[
							{
								type: "video",
								title: "See How",
								code: '<iframe width="640" height="360" src="http://www.youtube.com/embed/nic4WQ3iQ_0?rel=0&autoplay=1" frameborder="0" allowfullscreen></iframe>'
							}
						]
					}
				}
			]
		}
	]
});