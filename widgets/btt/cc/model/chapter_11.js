btt.cc.model.chapter.chapters.push(
{
	id: "11",
	title: "A Musical Scene",
	compositionFocus: "Motifs, Drones, Orchestration",
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
				synopsisExtra: "<ol><li data-target='intro'>Introduction</li><li data-target='working-with-motifs'>Working with Motifs</li><li data-target='instrumentation'>Working with Instrumentation</li><li data-target='creating-a-scene'>Creating a Scene</li><li data-target='sergei-prokofiev'>Prokofiev  - Peter & the Wolf</li><li data-target='minor-keys-scales'>Theory Link</li></ol>"
			},
			pages:
			[
				{
					type: "btt.cc.ui.content.title",
					id: "intro",
					breadcrumb:"Introduction",
					title: "Chapter 11:",
					subtitle:"A Musical Scene",
					synopsis:"In this lesson you’ll be creating your own music to accompany a scene from a story or poem of your choice.  You’ll learn more about manipulating musical motifs and you’ll be exploring compositional devices that help to enhance action and imagery. You’ll also learn about the 19th century composer Sergei Prokofiev and how he creates imagery with his music in Peter & the Wolf.",
					audioFile: "ch_11/Ch 11 New Intro 3"
				},
				{
					type: "btt.cc.ui.content.staff-player",
					id: "working-with-motifs",
					title: "Working With Motifs",
					subtitle: "A motif is a short germ idea that can be one or two measures in length. Composers play with motifs in different ways to build interesting and memorable melodies.",
					cards:
					[
						{
							text: "Listen for this famous motif that represents the duck in Peter & the Wolf",
							audioFile: "ch_11/DuckMotif",
							scoreImage: "ch_11/DuckMotif.png",
							largePlayer: true
						}
					]
				},
				{
					type: "btt.cc.ui.content.staff-player",
					id: "more-about-building-melody",
					title: "More About Building a Melody",
					subtitle: "Building from Chapter 1, discover new ways to vary your motif and develop your melody.",
					cards:
					[
						{
							isIntroCard: true,
							title: "Varied Motifs",
							text: "View other ways a motif can be varied.",
							noteData:
							{
								clef: "treble",
								notes: ["f/4?annotation=Motif", ["g/4 8", "a/4 8"], "g/4", "a/4"]
							},
							staffParams:
							{
								offset: {x:0, y:40},
								barsPerLine: 1,
								padding: 100,
								scale: 1
							}
						},
						{
							title: "Motif",
							text: "It starts with a motif  - a short musical idea.",
							noteData:
							{
								clef: "treble",
								notes: ["f/4?annotation=Motif", ["g/4 8", "a/4 8"], "g/4", "a/4"]
							},
							staffParams:
							{
								offset: {x:0, y:40},
								barsPerLine: 1,
								padding: 100,
								scale: 1
							}
						},
						{
							title: "Inversion",
							text: "A motif inverted or written upside down.",
							noteData:
							{
								clef: "treble",
								notes: ["f/4?annotation=Motif", ["g/4 8", "a/4 8"], "g/4", "a/4", "f/4?annotation=Inversion", ["e/4 8", "d/4 8"], "e/4", "d/4"]
							},
							staffParams:
							{
								offset: {x:0, y:40},
								barsPerLine: 2,
								padding: 100,
								scale: 1
							}
						},
						{
							title: "Sequenced Inversion",
							text: "Written upside down starting on a different pitch.",
							noteData:
							{
								clef: "treble",
								notes: ["f/4?annotation=Motif", ["g/4 8", "a/4 8"], "g/4", "a/4", "a/4?annotation=Sequenced Inversion", ["g/4 8", "f/4 8"], "g/4", "f/4"]
							},
							staffParams:
							{
								offset: {x:0, y:40},
								barsPerLine: 2,
								padding: 100,
								scale: 1
							}
						},
						{
							title: "Retrograde Inversion",
							text: "A motif written backwards.",
							noteData:
							{
								clef: "treble",
								notes: ["f/4?annotation=Motif", ["g/4 8", "a/4 8"], "g/4", "a/4", "d/4?annotation=Retrograde Inversion", "e/4", ["d/4 8", "e/4 8"], "f/4"]
							},
							staffParams:
							{
								offset: {x:0, y:40},
								barsPerLine: 2,
								padding: 100,
								scale: 1
							}
						}
					]
				},
				{
					type: "btt.cc.ui.content.line-connect",
					id: "which-one-is-it-quiz",
					title: "Which One is It Quiz?",
					subtitle: "Can you remember each variation on a motif?",
					introOverlayText: "Select the variation.",
					srcThingName: "term",
					destThingName: "definition",
					wideExpressions: true,
					definitions:
					[
						{
							expression:
							{
								text: "Sequence"
							},
							meaning:
							{
								text: "A motif beginning on a different pitch"
							}
						},
						{
							expression:
							{
								text: "Retrograde"
							},
							meaning:
							{
								text: "A motif written backwards"
							}
						},
						{
							expression:
							{
								text: "Motif"
							},
							meaning:
							{
								text: "A short musical idea"
							}
						},
						{
							expression:
							{
								text: "Repetition"
							},
							meaning:
							{
								text: "A motif repeated"
							}
						},
						{
							expression:
							{
								text: "Inversion"
							},
							meaning:
							{
								text: "A motif written upside down"
							}
						},
						{
							expression:
							{
								text: "Inverted Sequence"
							},
							meaning:
							{
								text: "A motif upside down beginning on a different pitch"
							}
						},
						{
							expression:
							{
								text: "Retrograde Inversion"
							},
							meaning:
							{
								text: "A motif written upside down and backwards"
							}
						}
					]
				},
				{
					type: "btt.cc.ui.content.staff-player",
					id: "other-melodic-devices",
					title: "Other Melodic Devices",
					subtitle: "Motifs can be extended to create longer expanded musical ideas.",
					cards:
					[
						{
							isIntroCard: true,
							title: "",
							text: "View these 2 examples.",
							scoreImage: "Motivic-Extension.png",
							largePlayer: true
						},
						{
							title: "The Motif Extended",
							text: "This motif has been extended to stretch over an extra measure.",
							scoreImage: "Motivic-Extension.png",
							audioFile: "Ch 11N Motif_Ext 2",
							largePlayer: true
						},
						{
							title: "The Extended Run",
							text: "Hidden in the flurry of activity, this run contains snippets of the original motif. This one is written in a sequenced pattern while ascending.",
							scoreImage: "Extended-Run2.png",
							audioFile: "Ch11N MelodicDeviceRUn",
							largePlayer: true
						}
					]
				},
				{
					type: "btt.cc.ui.content.staff-player",
					id: "instrumentation",
					title: "Working with Instrumentation",
					subtitle: "The range and tonal color of a musical instrument can help to paint images in a story.",
					cards:
					[
						{
							title: "Instrumentation",
							text: "View this video to see how the character of an instrument can convey an image.",
							largePlayer: true,
							width: "700px",
							video:
							{
								code: '<iframe width="640" height="340" src="http://www.youtube.com/embed/oan19f5kWE8?rel=0" frameborder="0" allowfullscreen></iframe>'
							}
						}
					]
				},
				{
					type: "btt.cc.ui.content.multiple-choice",
					id: "instrumentation-quiz",
					title: "Instrumentation Quiz",
					imageReveal:
					{
						image: "Ch11nInstrumentationQuiz.png",
						tileImage: "reveal-tile_110x110.png",
						rows: 2,
						cols: 2,
						width: 220,
						height: 220
					},
					questions:
					[
						{
							id: "question",
							title: "",
							audioFile: "VoicesDrums",
							text: "What instruments do you hear?",
							correctAnswers: ["Voices"],
							incorrectAnswers: ["Drums"]
						},
						{
							id: "question",
							title: "",
							audioFile: "FlutePiano",
							text: "What instruments do you hear?",
							correctAnswers: ["Flute"],
							incorrectAnswers: ["Piano"]
						},
						{
							id: "question",
							title: "",
							audioFile: "LoBrass",
							text: "What instruments do you hear?",
							correctAnswers: ["Brass"],
							incorrectAnswers: ["Drums"]
						},
						{
							id: "question",
							title: "",
							audioFile: "Strings",
							text: "What instruments do you hear?",
							correctAnswers: ["Strings"],
							incorrectAnswers: ["Not Strings"]
						}
					]
				},
				{
					type: "btt.cc.ui.content.staff-player",
					id: "creating-a-scene",
					title: "Creating a Scene",
					subtitle: "Creating a scene starts with a central melodic idea. Then it is expanded using musical devices to highlight characters, images or action.",
					cards:
					[
						{
							isIntroCard: true,
							title: "",
							text: "View five (5) devices that enhance the telling of a story.",
							scoreImage: "SimpleMelodicIdeas.png",
							largePlayer: true
						},
						{
							title: "Simple Melodic Ideas <em style=\"color:#8a8a8a; font-size:30px\">(Painting a scene)</em>",
							text: "Start with a simple melodic idea based on a motif to set the stage.",
							scoreImage: "SimpleMelodicIdeas.png",
							audioFile: "11N_CreatingScn_SimpleMel 3",
							largePlayer: true
						},
						{
							title: "Drones <em style=\"color:#8a8a8a; font-size:30px\">(Setting the Mood)</em>",
							text: "Use a drone in your music to set the tone and introduce the scene.",
							scoreImage: "TroikaDrone.png",
							audioFile: "11N_Drone 1",
							largePlayer: true
						},
						{
							title: "Instrumental Color <em style=\"color:#8a8a8a; font-size:30px\">(Images & character)</em>",
							text: "Select instruments that will best conjure up the image you intend to portray in your prose.",
							scoreImage: "Instrumental-Color.png",
							audioFile: "11N_InstColor 2",
							largePlayer: true
						},
						{
							title: "Melodic Runs <em style=\"color:#8a8a8a; font-size:30px\">(Actions)</em>",
							text: "Creating melodic lines of 8th or 16th notes that ascend or descend can be used to portray dramatic action.",
							scoreImage: "MelodicRuns.png",
							audioFile: "11N Runs",
							largePlayer: true
						},
						{
							title: "Matching Music With Prose",
							text: "Musical phrases and sections have to match up with the telling of the story.",
							scoreImage: "MatchingMusicToProse.png",
							audioFile: "Ch 11 Matching 1",
							largePlayer: true
						},
					]
				},
				{
					type: "btt.cc.ui.content.composer-music",
					id: "sergei-prokofiev",
					title: "Sergei Prokofiev",
					composerName: "Sergei Prokofiev",
					composerYears: "1891-1953",
					composerImage: "SergeiProkofiev.jpg",
					video:
					{
						code: '<iframe style="margin-top:10px" width="340" height="220" src="//www.youtube.com/embed/iuLFdGvIuVg?rel=0&autoplay=1" frameborder="0" allowfullscreen></iframe>'
					},
					questionIntro: "<span>Listen:</span> to how Prokofiev depicts the characters and action in Peter & the Wolf.",
					questions:
					[
						{
							id: "duck",
							question: "What instrument represents the duck?",
							answers: ["Oboe", "Flute", "Strings", "Clarinet"]
						},
						{
							id: "bird",
							question: "What instrument represents the bird?",
							answers: ["Flute", "Oboe", "Strings", "Clarinet"]
						},
						{
							id: "exchange",
							question: "What is being portrayed by the exchange of the flute and the oboe?",
							answers: ["An Argument", "A Game", "A Chase", "A Meal"]
						},
						{
							id: "stealthily",
							question: "Describe the music behind this quote: “Stealthily, she crept toward him on her velvet paws.”",
							answers: ["Staccato Clarinet", "Smooth Strings", "Rapid Flute Notes", "Loud French Horns"]
						},
						{
							id: "drone",
							question: "What best describes a musical drone?",
							answers: ["A Continuous Low Pitch", "A Duet", "A Motif", "A Clarinet"]
						}
					],
					didYouKnow:
					{
						title: "Notes on Sergei Prokofiev",
						facts:
						[
							"Prokofiev was one of the 20th century’s great Russian composers.",
							"At 13, he entered St. Petersburg Conservatory, earning the reputation of  ‘musical rebel’. Criticizing his older peers of their shortcomings and scorning the traditions of 19th century composition he graduated with only average marks.",
							"In 1918, after the Russian revolution, Prokofiev left for America where he struggled financially, and then Paris where he experienced a lukewarm reception.",
							"When he re-settled in Russia, he wrote Peter & The Wolf. Under Stalin’s rule, Prokofiev’s music was labeled anti-Soviet and so his later music was shaped by the socialist views of Stalin’s Soviet Regime.",
							"Ironically, his passing on March 5, 1953 was completely overshadowed by the death of Joseph Stalin the same day."
						],
						legendItems:
						[
							{redDot:true, text:"Prokofiev born in Ukraine 1891"},
							{color:"#3d533c", text:"Russian revolution, existence of Soviet Union 1918-1991"},
							{whiteDot:true, text:"Leaves for America 1918"},
							{greenDot:true, text:"Returns to Russia for good 1936"},
							{color:"#fd8023", text:"Peter & the Wolf Composed in 1936"},
							{orangeDot:true, text:"Prokofiev dies in 1953, the same day as Joseph Stalin"}
						],
						legendItemsPerLine: 2,
						timelineImage: "Timeline-Chapter11New.png"
					}
				},
				{
					type: "btt.cc.ui.content.composition-model",
					id: "minor-keys-scales",
					title: "Minor Keys & Scales",
					videos:
					[
						{
							title: "Minor Keys & Scales",
							text: "Minor keys and scales have a unique sound. View this video to learn more about minor keys.",
							// poster: "MajMinVideoPosterImage.jpg",
							code: '<iframe width="640" height="360" src="http://www.youtube.com/embed/WyAtXBwxnSY?rel=0" frameborder="0" allowfullscreen></iframe>'
						}
					]
				},
				{
					type: "btt.cc.ui.content.generic-selector",
					id: "minor-key-quiz",
					title: "Minor Key Quiz",
					subtitle: "",
					introOverlayText: "Test your knowledge about minor key signatures.",
					questions:
					[
						{
							id: "q1",
							text: "Identify the following minor key signatures:",
							images:
							[
								"Ch11-d-minor.png", "Ch11-a-minor.png", "Ch11-e-minor.png"
							],
							vertical: false,
							smallAnswerBoxes: false,
							answers:
							[
								{
									text: "d"
								},
								{
									text: "a"
								},
								{
									text: "e"
								}
							]
						}
					],
					shuffleChoices: false,
					reuseChoices: true,
					choices:
					[
						{
							text: "a"
						},
						{
							text: "b"
						},
						{
							text: "c"
						},
						{
							text: "d"
						},
						{
							text: "e"
						},
						{
							text: "f"
						},
						{
							text: "g"
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
				synopsis: "See how to match music to prose or poetry."
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
							text: "View this movie to see how you can create and match music to prose or poetry.",
							//poster: "Ch11N_PosterCompModel.jpg", /* NEED */
							code: '<iframe width="640" height="360" src="http://www.youtube.com/embed/1KpNi4-CuAw?rel=0" frameborder="0" allowfullscreen></iframe>' /* NEED */
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
				synopsis: "Now use your favourite notation software to create your musical scene."
			},
			pages:
			[
				{
					type: "btt.cc.ui.content.create-composition",
					id: "create-composition",
					titleMain: "Your Composition Activity",
					subtitle: "My Musical Scene",
                    showMotif: false,
                    scoreImage: "Structure_ScoreReference.png",
					downloadSteps:
					[
						"Find a 1-paragraph excerpt of a dramatic scene to read aloud. <em style=\"color:#e22f5b\">(Novel or poetry)</em>",
						"Work out your motif & variation using the Play Pad.",
						"Decide your prime/drone instruments & start score in ‘a minor’, 4/4 time. <em style=\"color:#e22f5b\">(Setting)</em>",
						"Add drone part in measure #1 & enter your motif in measure #3.",
                        "Follow the 5-step structure from the Intro to the End to create your music. <em style=\"color:#e22f5b\">(Structure)</em>",
                        "Add extras where you see fit.",
                        "Read your prose along with your music and make adjustments."
					],
					finaleTemplateFile: "Ch_11_CompositionTemplate2.mus",
					sibeliusTemplateFile: "Ch_11_CompositionTemplate2.sib",
					compModelFile: "pdf/Chapt11N_CompModel[2]",
					finaleTipsFile: "pdf/Ch11FinaleTips2",
					sibeliusTipsFile: "pdf/Ch11SibeliusTips2",
					playPad:
					{
						description: "<em style='color:#e22f5b'>Motif & Variation:</em> Come up with a one or two -measure motif in <em><u>A MINOR</u></em>. See how it sounds inverted and as an inverted sequence and a retrograde inversion.",
						image: "Ch11NPlaypadVariations.png",
						labels:
						{
							style: "flat",
							white: {
								"5": "A", "6": "B", "7": "C", "8": "D",
								"8": "D", "9": "E", "10": "F", "11": "G", "12": "A"
							},
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
					evaluationRubricFile: "pdf/CCMobileCh11_Rubric2",
					reflections:
					[
						"Describe your scene  & the major dramatic action.",
						"What different instruments did you use and why?",
						"What motif-variation did you work with?"
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
							"If the music calls for it add a second drone part to add weight.",
							"Double the melody & runs with other instruments to create thicker texture.",
							"Experiment harmonizing with 3rd or a 6th parallel harmony part (like you did in chapter 9)."
						],
						sequencing:
						[
							"Import your Core or Expansion notation piece as Audio or MIDI file or (play it in).",
							"Record your voice speaking the prose.",
                            "Move the music and voice around to align the music with the story.",
							"Add sound effects."
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
								title: "See How (coming soon)",
								code: ''
							},
							{
								type: "audio",
								title: "Hear Model",
								audioFile: "Ch 11N ExpAudioModel"
							}
						]
					}
				}
			]
		}
	]
});