btt.cc.model.chapter.chapters.push(
{
	id: "10",
	title: "My Minor Theme",
	compositionFocus: "Themes, Melodic Shape, Melodic Movement",
	theoryLink: "Minor Keys & Scales",
	sections:
	[
		{
			id: "lessons",
			title: "Lessons",
			introOverlay:
			{
				title: "Lesson",
				synopsis: "Lesson Activities",
				synopsisExtra: "<ol><li data-target='intro'>Introduction</li><li data-target='a-musical-theme'>A Musical Theme</li><li data-target='melodic-shape'>Melodic Shape</li><li data-target='melodic-movement'>Melodic Movement</li><li data-target='chopin'>Chopin’s Funeral March</li><li data-target='major-and-minor'>Theory Link</li></ol>"
			},
			pages:
			[
				{
					type: "btt.cc.ui.content.title",
					id: "intro",
					breadcrumb:"Introduction",
					title: "Chapter 10:",
					subtitle:"My Minor Theme",
					synopsis:"In this lesson you’ll be creating a theme in a minor key. Along the way, you’ll learn how many famous melodies rise and fall to create interesting movement and shape. You’ll learn about the famous 19th century composer Fr&eacute;d&eacute;ric Chopin and then you’ll get to experiment with these new concepts to create your own theme!",
					audioFile: "BTC Lesson Ch11_Intro"
				},
				{
					type: "btt.cc.ui.content.staff-player",
					id: "a-musical-theme",
					title: "A Musical Theme",
					subtitle: "A musical theme is a complete and distinct melodic idea made up of a group of phrases.",
					cards:
					[
						{
							title: "Funeral March of a Marionette",
							text: "Listen to this theme that was used on the famous television show Alfred Hitchcock Presents. Listen for the two (2) distinct phrases.",
							audioFile: "Ch11_ Marionette",
							scoreImage: "Ch11_Marionette.png",
							largePlayer: true
						}
					]
				},
				{
					type: "btt.cc.ui.content.staff-player",
					id: "melodic-shape",
					title: "Melodic Shape",
					subtitle: "The melodic shape of a theme is determined by the up or down contour of pitch on the music staff.",
					cards:
					[
						{
							isIntroCard: true,
							title: "",
							text: "Listen to & view the five (5) different melodic shapes heard in these themes.",
							scoreImage: "Ch11_Arc.png",
							width: "700px",
							largePlayer: true
						},
						{
							title: "Arch Shape",
							text: "The music rises to its highest notes in the middle of the phrase.",
							audioFile: "Ch11_Arc",
							scoreImage: "Ch11_Arc.png",
							width: "700px",
							largePlayer: true
						},
						{
							title: "Inverted Arch Shape",
							text: "The music descends to its lowest notes in the middle of the phrase.",
							audioFile: "CH11_InvertedArc",
							scoreImage: "Ch11_InvertedArc.png",
							width: "700px",
							largePlayer: true
						},
						{
							title: "Ascending",
							text: "The music begins low and rises to its highest notes at the end of the phrase.",
							audioFile: "Ch11_Ascending",
							scoreImage: "Ch11_Ascending.png",
							width: "700px",
							largePlayer: true
						},
						{
							title: "Descending",
							text: "The music starts on its highest note and descends to its lowest note.",
							audioFile: "Ch11_Descending",
							scoreImage: "Ch11_Descending.png",
							width: "700px",
							largePlayer: true
						},
						{
							title: "Stationary",
							text: "The music neither rises nor falls very much.",
							audioFile: "Ch11_Stationary",
							scoreImage: "Ch11_Stationary.png",
							width: "700px",
							largePlayer: true
						}
					]
				},
				{
					type: "btt.cc.ui.content.multiple-choice",
					id: "whats-the-shape",
					title: "What’s the Shape?",
					css:
					{
						".audio-player": {right:"0px"}
					},
					questions:
					[
						{
							id: "whats-the-shape-1",
							title: "Question 1",
							text: "What is the shape of this melody?",
							smallCards: true,
							correctAnswers: ["Arch"],
							incorrectAnswers: ["Inverted Arch", "Ascending", "Descending", "Stationary"],
							audioFile: "Ch11_ MelShpQzArc"
						},
						{
							id: "whats-the-shape-2",
							title: "Question 2",
							text: "What is the shape of this melody?",
							smallCards: true,
							correctAnswers: ["Inverted Arch"],
							incorrectAnswers: ["Arch", "Ascending", "Descending", "Stationary"],
							audioFile: "Ch11_ MelShpQzRevArc"
						},
						{
							id: "whats-the-shape-3",
							title: "Question 3",
							text: "What is the shape of this melody?",
							smallCards: true,
							correctAnswers: ["Ascending"],
							incorrectAnswers: ["Inverted Arch", "Arch", "Descending", "Stationary"],
							audioFile: "Ch11_ MelShpQzAscending"
						},
						{
							id: "whats-the-shape-4",
							title: "Question 4",
							text: "What is the shape of this melody?",
							smallCards: true,
							correctAnswers: ["Descending"],
							incorrectAnswers: ["Inverted Arch", "Ascending", "Arch", "Stationary"],
							audioFile: "Ch11_ MelShpQzDescending"
						},
						{
							id: "whats-the-shape-5",
							title: "Question 5",
							text: "What is the shape of this melody?",
							smallCards: true,
							correctAnswers: ["Stationary"],
							incorrectAnswers: ["Inverted Arch", "Ascending", "Descending", "Arch"],
							audioFile: "Ch11_ MelShpQzStationary"
						}
					]
				},
				{
					type: "btt.cc.ui.content.staff-player",
					id: "melodic-movement",
					title: "Melodic Movement",
					subtitle: "Melodies can be smooth and step wise or disjunct with many skips.",
					cards:
					[
						// NEED: transparent images
						{
							isIntroCard: true,
							title: "",
							text: "Listen & view to these 2 examples of melodic movement.",
							width: "650px",
							scoreImage: "Ch 11_Steps.png"
						},
						{
							title: "Step-wise Motion",
							text: "This music sounds smooth because the movement is primarily in steps.",
							audioFile: "Ch11_Steps",
							width: "650px",
							scoreImage: "Ch 11_Steps.png"
						},
						{
							title: "Skip-wise Motion",
							text: "This music has quite large leaps that give the music a distinctive character",
							audioFile: "Ch11_Skips",
							width: "650px",
							scoreImage: "Ch 11_Skips.png"
						},
					]
				},
				{
					type: "btt.cc.ui.content.multiple-choice",
					id: "whats-the-movement",
					title: "What’s the Movement?",
					css:
					{
						".audio-player": {right:"0px"}
					},
					questions:
					[
						{
							id: "whats-the-movement-1",
							title: "Question 1",
							text: "Identify the melodic movement.",
							correctAnswers: ["Step-wise"],
							incorrectAnswers: ["Skip-wise"],
							image: "Ch11_MlMvmnt_Step1_Qz.png",
							audioFile: "Ch11_ MelMvmntStep1"
						},
						{
							id: "whats-the-movement-2",
							title: "Question 2",
							text: "Identify the melodic movement.",
							correctAnswers: ["Step-wise"],
							incorrectAnswers: ["Skip-wise"],
							image: "Ch11_-MlMvmnt_Step2_Qz.png",
							audioFile: "Ch11_ MelMvmntStep2"
						},
						{
							id: "whats-the-movement-3",
							title: "Question 3",
							text: "Identify the melodic movement.",
							correctAnswers: ["Skip-wise"],
							incorrectAnswers: ["Step-wise"],
							image: "Ch11_-MlMvmnt_Skip_Qz.png",
							audioFile: "Ch11_ MelMvmntSkip"
						}
					]
				},
				{
					type: "btt.cc.ui.content.composer-music",
					id: "chopin",
					title: "Fr&eacute;d&eacute;ric Chopin",
					composerName: "Fr&eacute;d&eacute;ric Chopin",
					composerYears: "1810-1849",
					composerImage: "Chopin.jpg",
					score:
					{
						image1: "FuneralMarchFull.png",
						audio: "Ch11_ Funeral",
						canExpand: true
					},
					questionIntro: "<span>Listen:</span> To the Opening Theme of the Funeral March by Fr&eacute;d&eacute;ric Chopin",
					questions:
					[
						{
							id: "melodic-shape-a-phrases",
							question: "What melodic shape are the ‘A’ phrases?",
							image: "Ch11_Funeral_March_1.png",
							scoreAudio: "Ch11_ ChopinQuiz_FuneralMarchA",
							answers: ["Stationary", "Arc", "Reverse Arc", "Ascending", "Descending"],
							smallCards: true
						},
						{
							id: "melodic-shape-character-affect",
							question: "How does this melodic shape affect the character of the music?",
							image: "Ch11_Funeral_March_1.png",
							scoreAudio: "Ch11_ ChopinQuiz_FuneralMarchA",
							answers: ["It feels motionless and has no direction", "It feels uplifting", "It adds humor and fun to the music", "It feels like a race", "It feels danceable"],
							smallCards: true
						},
						{
							id: "melodic-shape-b-phrases",
							question: "What melodic shape is each partial ‘B’ phrase?",
							image: "Ch11_Funeral_March_2.png",
							scoreAudio: "Ch11_ ChopinQuiz_FuneralMarchB",
							answers: ["Descending", "Arc", "Reverse Arc", "Ascending", "Stationary"],
							smallCards: true
						},
						{
							id: "melodic-shape-emotions",
							question: "What emotions does this melodic shape express?",
							image: "Ch11_Funeral_March_2.png",
							scoreAudio: "Ch11_ ChopinQuiz_FuneralMarchB",
							answers: ["Sorrow", "Joy", "Rage", "Excitement", "Peace"],
							smallCards: true
						},
						{
							id: "deepen-emotion",
							question: "What does Chopin do to deepen the emotion in the last line of this theme?",
							image: "Ch11_Funeral_March_3.png",
							scoreAudio: "Ch11_ ChopinQuiz_FuneralMarch",
							answers: ["Doubles the melody an octave higher", "Increases the volume of the music", "Increases the speed of the music", "Adds a drum part", "Adds another piano"],
							smallCards: true
						}
					],
					didYouKnow:
					{
						title: "Notes on Fr&eacute;d&eacute;ric Chopin",
						facts:
						[
							"Chopin was a composer living in the Romantic Era who was born near Warsaw, Poland in 1810.",
							"He spent his adult life living in Paris, never returning to his homeland.",
							"Most of his music was written for piano, which was a relatively new instrument.",
							"The new and improved piano evolved during the industrial revolution and became Chopin’s canvas for exploring tonal color and poetic musical expression. His demanding musical passages of fast runs and embellished phrases were a trademark of his style.",
							"The Funeral March is said to be inspired by the Polish - Russian war of 1830 when Chopin feared for￼family and friends who were rising up against the Russian Czar."
						],
						legendItems:
						[
							{redDot:true, text:"Chopin born near Warsaw, Poland"},
							{color:"#e66c4b", text:"Funeral March first appears"},
							{color:"#585858", text:"Polish uprising"},
							{whiteDot:true, text:"Chopin moved to Paris"},
							{orangeDot:true, text:"Chopin dies in Paris at age 39."}
						],
						legendItemsPerLine: 3,
						timelineImage: "Timeline_ch11.jpg"
					}
				},
				{
					type: "btt.cc.ui.content.composition-model",
					id: "major-and-minor",
					title: "Major & Minor",
					videos:
					[
						{
							title: "Major & Minor",
							text: "Major and minor melodies have a very distinct sound. One sounds brighter and the other sounds darker.",
							poster: "MajMinVideoPosterImage.jpg",
							code: '<iframe width="640" height="360" src="http://www.youtube.com/embed/4Bqafak3NMg?rel=0" frameborder="0" allowfullscreen></iframe>'
						}
					]
				},
				{
					type: "btt.cc.ui.content.multiple-choice",
					id: "major-minor-quiz",
					title: "Major Minor Quiz",
					imageReveal:
					{
						image: "Paris_Piano_shadow.png",
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
							imageRevealSideImage: "Ch11_Major1_Qz.png",
							audioFile: "Ch11_ Minor1_QZ",
							text: "Major or Minor?",
							correctAnswers: ["Minor"],
							incorrectAnswers: ["Major"]
						},
						{
							id: "question",
							title: "",
							imageRevealSideImage: "Ch11_Minor22_Qz.png",
							audioFile: "Ch11_ Minor2_QZ",
							text: "Major or Minor?",
							correctAnswers: ["Minor"],
							incorrectAnswers: ["Major"]
						},
						{
							id: "question",
							title: "",
							imageRevealSideImage: "Ch11_Minor1_Qz.png",
							audioFile: "Ch11_ Minor3_QZ",
							text: "Major or Minor?",
							correctAnswers: ["Minor"],
							incorrectAnswers: ["Major"]
						},
						{
							id: "question",
							title: "",
							imageRevealSideImage: "Ch11_Major4_Qz.png",
							audioFile: "Ch11_ Major4_QZ",
							text: "Major or Minor?",
							correctAnswers: ["Major"],
							incorrectAnswers: ["Minor"]
						},
						{
							id: "question",
							title: "",
							imageRevealSideImage: "Ch11_Major5_Qz.png",
							audioFile: "Ch11_ Major5_QZ",
							text: "Major or Minor?",
							correctAnswers: ["Major"],
							incorrectAnswers: ["Minor"]
						},
						{
							id: "question",
							title: "",
							imageRevealSideImage: "Ch11_Major_Qz.png",
							audioFile: "Ch11_ Majo6_QZ",
							text: "Major or Minor?",
							correctAnswers: ["Major"],
							incorrectAnswers: ["Minor"]
						}
					]
				},
				{
					type: "btt.cc.ui.content.staff-player",
					id: "major-and-minor-keys",
					title: "Major & Minor Keys",
					subtitle: "Learn about major keys and their relative minor keys.",
					cards:
					[
						{
							isIntroCard: true,
							title: "",
							text: "Find out how minor keys are related to major keys.",
							scoreImage: "Ch11_RelativeMajMinrKeys.png",
							width: "700px",
							largePlayer: true
						},
						{
							title: "Relative Minor Keys",
							text: "There is a minor key associated with every major key. (They share the same key signature)",
							audioFile: "Ch11_ RelatveMajMinKeys",
							scoreImage: "Ch11_RelativeMajMinrKeys.png",
							width: "700px",
							largePlayer: true
						},
						{
							title: "Finding Minor Keys",
							text: "The tonic of the minor key is found on the 6th degree of the major key scale. Learn more about minor keys & scales in Chapter 11 of Breezin’ Thru Theory.",
							audioFile: "Ch11_ FindingMajMinKeys",
							scoreImage: "Ch11_FindingMajMinKeys.png",
							width: "700px",
							largePlayer: true
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
				synopsis: "See how to create your theme in a minor key."
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
							text: "View this movie to see how you come up with a musical theme like Chopin's in a minor key.",
							poster: "Ch10CompPoster.jpg",
							code: '<iframe width="640" height="360" src="http://www.youtube.com/embed/S4bSu4Ud3a4?rel=0" frameborder="0" allowfullscreen></iframe>'
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
				synopsis: "Now use your favourite notation software to create your minor theme."
			},
			pages:
			[
				{
					type: "btt.cc.ui.content.create-composition",
					id: "create-composition",
					titleMain: "Your Composition Activity",
					subtitle: "My Minor Theme",
                    showMotif: false,
                    scoreImage: "Ch11_ScoreReference.png",
					downloadSteps:
					[
						"Create a simple 2 measure phrase (A phrase) starting on a d in ‘d minor’. <em style=\"color:#e22f5b\">(Original Phrase)</em>",
						"Use steps or skips and think about the shape of the phrase.",
						"Repeat A phrase or vary it slightly.",
						"Create a B phrase in contrast to the A phrase. <em style=\"color:#e22f5b\">(Contrasting Phrase)</em>",
                        "Return to A phrase (or a variation of it) for the last two (2) measures.",
                        "Expand melody to 12 measures by repeating 2 phrases. <em style=\"color:#e22f5b\">(Expand Form)</em>",
                        "Add expression & tempo markings. <em style=\"color:#e22f5b\">(Add Expression & Tempo)</em>"
					],
					finaleTemplateFile: "Chapter10_CompTemplate.mus",
					sibeliusTemplateFile: "Chapter10_CompTemplate.sib",
					compModelFile: "pdf/Chapt10_My Minor Theme[2]",
					finaleTipsFile: "pdf/Ch10FinaleTips",
					sibeliusTipsFile: "pdf/Ch10SibelusTips",
					playPad:
					{
						description: "<em style='color:#e22f5b'>Melodic Shape:</em> Experiment creating / playing different melodic shapes as indicated below. Use notes of <em><u>D MINOR</u></em>. Try both steps and skips.",
						image: "Ch-11-PlayPadImage.png",
						labels:
						{
							style: "flat",
							white: {
								"1": "D", "2": "E", "3": "F", "4": "G", "5": "A", "7": "C", "8": "D",
								"8": "D", "9": "E", "10": "F", "11": "G", "12": "A", "14": "C", "15": "D"
							},
							black: {"5": "Bb", "12": "Bb"}
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
					evaluationRubricFile: "pdf/CCMobileCh10_Rubric",
					reflections:
					[
						"Which melodic shapes did you use to construct your phrases?",
						"How did you create contrast between your A and B phrases?",
						"How did the addition of expression markings affect your music?"
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
					notationSubtitle: "Do one or all of the following to enhance the dark mood:",
					expandSteps:
					{
						notation:
						[
							"Add a simple one or two-note ostinato bass line part.",
							"Add a drum part to this music.",
							"Add lyrics to your music (Create a storyline)."
						],
						sequencing:
						[
							"Build a drum set rhythm.",
							"Record your melody.",
                            "A guitar/piano harmony & a bass line.",
							"Use effects and panning to enhance the mood."
						]
					},
					links:
					{
						notation:
						[
						],
						sequencing:
						[
							{
								type: "video",
								title: "See How",
								code: '<iframe width="640" height="360" src="http://www.youtube.com/embed/r-AWe0rJtoM?rel=0&autoplay=1" frameborder="0" allowfullscreen></iframe>'
							},
							{
								type: "audio",
								title: "Hear Model",
								audioFile: "Ch11ExpansionMelodySample2"
							}
						]
					}
				}
			]
		}
	]
});