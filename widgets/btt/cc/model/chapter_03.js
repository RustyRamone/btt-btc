btt.cc.model.chapter.chapters.push(
{
	id: "3",
	title: "Variation on a Theme",
	compositionFocus: "Creating a Variation on Twinkle Twinkle Little Star Using Rhythm",
	theoryLink: "Note and Rest Values, Tempo, Time Signatures",
	sections:
	[
		{
			id: "lessons",
			title: "Lessons",
			introOverlay:
			{
				title: "Lesson",
				synopsis: "Lesson Activities",
				synopsisExtra: "<ol><li data-target='intro'>Introduction</li><li data-target='themes-variations'>Themes and Variations</li><li data-target='mozart'>Mozart’s Variations on a Theme</li><li data-target='how-music-is-assembled'>How Music is Assembled</li><li data-target='musical-form'>Musical Form</li><li data-target='theory-link'>Theory Link</li></ol>"
			},
			pages:
			[
				{
					type: "btt.cc.ui.content.title",
					id: "intro",
					breadcrumb:"Introduction",
					title: "Chapter 3:",
					subtitle:"Variation on a Theme",
					synopsis:"In this activity, you will be creating your own rhythmic variation on a very familiar melody. By listening to the two excerpts from Mozart’s variations on Twinkle Twinkle Little Star, you’ll begin to understand what a variation is. Even though the rhythm and melodic embellishment varies, you can still hear the simple melody.",
					audioFile: "CC Lesson Ch 3_Mobile_Intro"
				},
				{
					type: "btt.cc.ui.content.staff-player",
					id: "themes-variations",
					title: "Themes and Variations",
					subtitle: "Listen, view and compare the Happy Birthday theme with a sample rhythmic variation.",
					tempo: 130,
					cards:
					[
						{
							title: "Theme",
							text: "A recognizable melody.",
							noteData:
							{
								clef: "treble",
								notes:
								[
                                    ["c/4 8", "c/4 8"], "d/4", "c/4", "f/4", "e/4 h", ["c/4 8", "c/4 8"], "d/4", "c/4", "g/4", "f/4 h", ["c/4 8", "c/4 8"],
                                    "c/5", "a/4", "f/4", "e/4", "d/4", ["b/4 8", "b/4 8"], "a/4", "f/4", "g/4", "f/4 h", "r q"
								]
							},
							staffParams:
							{
								pickup: 0.5,
								initialStaveWidth: 0.7,
                                timeSig: "3/4",
								keySig: "F",
								offset: {x:0, y:25},
								barsPerLine: 4.7,
								padding: 50,
								scale: 0.7,
								doubleBarEnd: true
							}
						},
						{
							title: "Rhythmic Variation",
							text: "When the rhythm of a melody has changed but the pitch stays the same.",
							noteData:
							{
								clef: "treble",
								notes:
								[
                                    ["c/4 8", "c/4 8"], ["d/4 8", "d/4 8"], "c/4", "f/4", ["e/4 8", "e/4 8"], "e/4", ["c/4 8", "c/4 8"], ["d/4 8", "d/4 8"], "c/4", "g/4", ["f/4 8", "f/4 8"], "f/4", ["c/4 8", "c/4 8"],
                                    ["c/5 8", "c/5 8"], "a/4", "f/4", ["e/4 8", "e/4 8"], "d/4", ["b/4 8", "b/4 8"], ["a/4 8", "a/4 8"], "f/4", "g/4", "f/4 h", "r q"
								]
							},
							staffParams:
							{
								pickup: 0.5,
								initialStaveWidth: 0.7,
                                timeSig: "3/4",
								keySig: "F",
								offset: {x:0, y:25},
								barsPerLine: 4.7,
								padding: 50,
								scale: 0.7,
								doubleBarEnd: true
							}
						}
					]
				},
				{
					type: "btt.cc.ui.content.composer-music",
					id: "mozart",
					title: "Mozart's Variations on a Theme",
					composerName: "Wolfgang Amadeus Mozart",
					composerYears: "1756-1791",
					composerImage: "composers/mozart/head-shot.png",
					audio:
					{
						items:
						[
							{title:"Theme", file:"CC Lesson Ch 3_MobileMozTheme"},
							{title:"Variation 5", file:"CC Lesson Ch 3_MobileMozV5"},
							{title:"Variation 11", file:"CC Lesson Ch 3_MobileMozV11"}
						]
					},
					questionIntro: "<span>Listen:</span> To Mozart’s theme and 2 of his 12 variations on <em>Au Vous Dirai-je, Maman</em>.",
					questionIntro2: "<span>Listen:</span> To how the motif develops into a melody using a flurry of sequences",
					questions:
					[
						{
							id: "q1",
							question: "Variation 5 and 11 are being played at the same tempo.",
							answers: ["False", "True"]
						},
						{
							id: "q2",
							question: "You can still hear the original pitch of the theme in each variation.",
							answers: ["True", "False"]
						},
						{
							id: "q3",
							question: "The rhythm in the variations has changed noticeably from the original theme.",
							answers: ["True", "False"]
						},
						{
							id: "q4",
							question: "Variation 5 is being played on guitar.",
							answers: ["False", "True"]
						},
						{
							id: "q5",
							question: "Variation 11 is being played on piano.",
							answers: ["True", "False"]
						},
						{
							id: "q6",
							question: "Variation 11 is slower than Variation 5.",
							answers: ["True", "False"]
						}
					],
					didYouKnow:
					{
						title: "Notes on Mozart",
						facts:
						[
							"In 1762, at the age of six, Mozart was a budding composer and an accomplished keyboard performer, winning the admiration of the imperial court in Vienna.",
							"Mozart’s sister Nannerl, like Mozart, was considered a musical wonder-child and toured through Europe with her brother for several years.",
							"Mozart loved to play billiards and would sometimes play all night, composing symphonies as he played.",
                            "\"Ah vous dirai-je, Maman\" is a French folk song first appearing in 1761. Many children’s songs have been set to this melody including Twinkle Twinkle Little Star, Bah Bah Black Sheep and the Alphabet Song."
						],
						legendItems:
						[
							{color:"#e66c4b", text:"Mozart's life"},
							{redDot:true, text:"Appearance of French folk song<br/><em>Au Vous Dirai-je, Maman in 1761</em>"}
						],
						timelineImage: "composers/mozart/timeline.png"
					}
				},
                
				{
					type: "btt.cc.ui.content.staff-player",
					id: "how-music-is-assembled",
					title: "How Music is Assembled",
					subtitle: "This shows the musical hierarchy from the creation of a motif to a complete theme or melody.",
					tempo: 130,
					cards:
					[
						{
							title: "Motif",
							text: "A short musical idea usually one measure in length, used to build melodies.",
							noteData:
							{
								clef: "treble",
								notes:
								[
                                    "c/4", "c/4", "_g/4", "_g/4", "_a/4", "_a/4", "_g/4 h",
                                    "_f/4", "_f/4", "_e/4", "_e/4", "_d/4", "_d/4", "_c/4 h"
								]
							},
							staffParams:
							{
                                timeSig: "2/4",
								offset: {x:0, y:50},
								barsPerLine: 8,
								padding: 50,
								scale: 0.8
							}
						},
						{
							title: "Phrase",
							text: "A short musical passage coming to a partial or complete rest.",
							noteData:
							{
								clef: "treble",
								notes:
								[
                                    "c/4", "c/4", "g/4", "g/4", "a/4", "a/4", "g/4 h",
                                    "_f/4", "_f/4", "_e/4", "_e/4", "_d/4", "_d/4", "_c/4 h"
								]
							},
							staffParams:
							{
                                timeSig: "2/4",
								offset: {x:0, y:50},
								barsPerLine: 8,
								padding: 50,
								scale: 0.8
							}
						},
						{
							title: "Section",
							text: "A collection of musical phrases assembled much the way a sentence is organized.",
							noteData:
							{
								clef: "treble",
								notes:
								[
                                    "c/4", "c/4", "g/4", "g/4", "a/4", "a/4", "g/4 h",
                                    "f/4", "f/4", "e/4", "e/4", "d/4", "d/4", "c/4 h"
								]
							},
							staffParams:
							{
                                timeSig: "2/4",
								offset: {x:0, y:50},
								barsPerLine: 8,
								padding: 50,
								scale: 0.8
							}
						},
						{
							title: "Melody or Theme",
							text: "A collection of sections assembled into a complete melody or theme.",
							scoreTitle: "Twinkle Twinkle Little Star",
                            largePlayer: true,
							noteData:
							{
								clef: "treble",
								notes:
								[
                                    "c/4", "c/4", "g/4", "g/4", "a/4", "a/4", "g/4 h", "f/4", "f/4", "e/4", "e/4", "d/4", "d/4", "c/4 h",
                                    "c/4", "c/4", "g/4", "g/4", "a/4", "a/4", "g/4 h", "f/4", "f/4", "e/4", "e/4", "d/4", "d/4", "c/4 h",
                                    "g/4", "g/4", "f/4", "f/4", "e/4", "e/4", "d/4 h",  "g/4", "g/4", "f/4", "f/4", "e/4", "e/4", "d/4 h",
                                    "c/4", "c/4", "g/4", "g/4", "a/4", "a/4", "g/4 h", "f/4", "f/4", "e/4", "e/4", "d/4", "d/4", "c/4 h"
								]
							},
							staffParams:
							{
                                timeSig: "2/4",
								offset: {x:0, y:40},
								barsPerLine: 8,
								padding: 50,
								scale: 0.75
							}
						}
					],
					fadeCards: true
				},
				{
					type: "btt.cc.ui.content.generic-selector",
					id: "musical-form",
					title: "Musical Form",
					subtitle: "<em>Form</em> is the organization of distinct and contrasting musical sections.<br/>Different sections are labeled with letter names such as A, B, C, D.<br/>Typical forms are ABA, AABA, ABACA.",
					introOverlayText: "Select the correct letters for this form.",
					questions:
					[
						{
							id: "q1",
							text: "Identify and label each section in<br/>Twinkle Twinkle Little Star with a letter name.",
							images:
							[
								"MusicalFormQuiz_1.png", "MusicalFormQuiz_2.png", "MusicalFormQuiz_3.png", "MusicalFormQuiz_4.png"
							],
							vertical: true,
							smallAnswerBoxes: true,
							answers:
							[
								{
									text: "A"
								},
								{
									text: "A"
								},
								{
									text: "B"
								},
								{
									text: "A"
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
							text: "B"
						},
						{
							text: "C"
						},
						{
							text: "D"
						},
						{
							text: "E"
						}
					]
				},
				{
					type: "btt.cc.ui.content.note-selector",
					id: "theory-link",
					title: "Theory Link",
					subtitle: "You will be including sixteenth note rhythms to create<br/>your variation on Twinkle Twinkle Little Star.",
					question: "Select the rhythm patterns that are equal to two quarter notes.",
					footerText: "<span style=\"color:#e22f5b\">Need a theory refresher?</span> See the Breezin’ Thru Theory E-Binder Chapter 3.",
					originalPattern: [["f/4|q"],["f/4|q"]],
					choicePatterns:
					[
						{data:[["f/4|8", "f/4|8"], ["f/4|16", "f/4|16", "f/4|8"]], offsetX:-7},
						{data:[["f/4|16", "f/4|16", "f/4|16", "f/4|16"], ["f/4|q"]], offsetX:-7},
						{data:[["f/4|h"], ["f/4|q"]], offsetX:0},
						{data:[["f/4|qr"], ["f/4|q"]], offsetX:0},
						{data:[["a/4|8r"], ["f/4|8"], ["f/4|16", "f/4|16", "f/4|8"]], offsetX:-10},
						{data:[["a/4|8r"], ["f/4|q"]], offsetX:0}
					],
					correctPatterns:
					[
                        [["f/4|8", "f/4|8"], ["f/4|16", "f/4|16", "f/4|8"]],
                        [["f/4|16", "f/4|16", "f/4|16", "f/4|16"], ["f/4|q"]],
                        [["f/4|qr"], ["f/4|q"]],
						[["a/4|8r"], ["f/4|8"], ["f/4|16", "f/4|16", "f/4|8"]],
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
				synopsis: "Put your own stamp on Twinkle Twinkle Little Star!"
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
							text: "View this movie to see how to create a rhythmic variation of Twinkle Twinkle Little Star.",
							poster: "PosterImagesCh_3.jpg",
							code: '<iframe width="640" height="360" src="//www.youtube-nocookie.com/embed/n4o9CcmK8uE?rel=0" frameborder="0" allowfullscreen></iframe>'
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
				synopsis: "Use your favourite notation software to create your composition and put your own stamp on Twinkle Twinkle Little Star."
			},
			pages:
			[
				{
					type: "btt.cc.ui.content.create-composition",
					id: "create-composition",
					titleMain: "Create Your Own Composition",
					subtitle: "Creating a Variation on a Theme",
                    showMotif: false,
                    scoreImage: "Ch3_ScoreImage.png",
					downloadSteps:
					[
						"Create an “A” section,<ul><li>Alter the rhythms but keep the same pitch in the first phrase</li><li>Enter a second response phrase.</li></ul>",
						"Create a “B”section in the same fashion",
						"Decide on a tempo"
					],
					finaleTemplateFile: "ComposersCornerChapter_3.mus",
					sibeliusTemplateFile: "ComposersCornerChapter_3.sib",
					compModelFile: "pdf/Chapter 3 Model PDF[3]",
					finaleTipsFile: "pdf/Ch3FinaleTips",
					sibeliusTipsFile: "pdf/Ch3SibelusTips",
					playPad:
					{
						description: "<em style='color:#e22f5b'>Twinkle Variation:</em> Create a rhythmic variation 2 beats long <span style='font-size:20px'>(e.g. 1/8, 1/16, rests)</span>. Repeat the rhythm pattern in each bar. Keep pitch the same as below.",
						image: "Ch-3-PlayPadImage.png",
						labels:
						{
							style: "flat",
							white: {"7": "C", "8": "D", "9": "E", "10": "F", "11": "G", "12": "A", "13": "B"},
							black: {}
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
					evaluationRubricFile: "pdf/CCMobileCh3_Rubric",
					reflections:
					[
						"How did your choice of rhythms affect the character of the piece?",
						"How would using a different time signature affect the character of the music?",
						"What instruments would you choose to play this music?"
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
							"Try writing another variation using 3/4 time or 4/4 time.",
							"Double your melody an octave higher or lower by writing the same part in another clef.",
							"Advanced users: change some of the pitches in your pattern without losing the identity of the original theme and experiment with adding rests.",
							"Assign the melody for everyone to play in your entire class."
						],
						sequencing:
						[
							"Add or create beat loops.",
							"Record your melody with a microphone using your voice (add lyrics) or instrument."
						]
					},
					links:
					{
						notation:
						[
							{
								type: "image",
								title: "See Score",
								imageFile: "Ch3_ExpScoreImage.jpg"
							},
							{
								type: "audio",
								title: "Hear Model",
								audioFile: "Ch3_CompExpansion"
							}
						],
						sequencing:
						[
							{
								type: "video",
								title: "See How",
								code: '<iframe width="640" height="360" src="//www.youtube-nocookie.com/embed/GPhVy0NyOAU?rel=0&autoplay=1" frameborder="0" allowfullscreen></iframe>'
							}
						]
					}
				}
			]
		}
	]
});