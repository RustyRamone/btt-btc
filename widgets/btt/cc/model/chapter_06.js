btt.cc.model.chapter.chapters.push(
{
	id: "6",
	title: "A Round With Ostinato Bass",
	compositionFocus: "Creating an Ostinato Bass Line, Rounds & Canons",
	theoryLink: "Major Scales, Scale Degrees & Technical Names",
	sections:
	[
		{
			id: "lessons",
			title: "Lessons",
			introOverlay:
			{
				title: "Lesson",
				synopsis: "Lesson Activities",
				synopsisExtra: "<ol><li data-target='intro'>Introduction</li><li data-target='ostinato-rhythm-bass'>Ostinato Rhythm vs Ostinato Bass Line</li><li data-target='polyphonic-texture'>Polyphonic Texture</li><li data-target='pachelbel'>Johann Pachelbel’s Canon in D</li><li data-target='theory-link'>Theory Link</li><li data-target='ostinato-bass-line-rules'>Creating Strong Ostinato Bass Lines</li></ol>"
			},
			pages:
			[
				{
					type: "btt.cc.ui.content.title",
					id: "intro",
					breadcrumb:"Introduction",
					title: "Chapter 6:",
					subtitle:"A Round With Ostinato Bass",
					synopsis:"In this lesson you'll be learning about ostinato bass lines and then you'll create one to go with the round Brother John. Discover the difference between a round and a canon, and find out how to create a strong sounding ostinato bass line.",
					audioFile: "CC Lesson Ch 6_Mobile 3"
				},
				{
					type: "btt.cc.ui.content.staff-player",
					id: "ostinato-rhythm-bass",
					title: "Ostinato Rhythm vs Ostinato Bass Line",
					subtitle: "An ostinato pattern is a short repeated pattern played throughout a musical piece or section. Notice the difference between an ostinato rhythm and an ostinato bass line.",
					cards:
					[
						{
							isIntroCard: true,
							title: "",
							text: "See these two different ostinato patterns in music.",
							scoreImage: "Ch_5_Rhythm.png"
						},
						{
							title: "Ostinato Rhythm",
							text: "Notice that an ostinato rhythm pattern has no pitch. It is played by a non-pitched percussion instrument.",
							audioFile: "Ch_6_OstinatoRhyth 1",
							scoreImage: "Ch6_OstinatoRhythmLine.png"
						},
						{
							title: "Ostinato Bass Line",
							text: "An ostinato bass line includes pitch and is melodic in nature. This 2-measure ostinato bass line is like a melody being played by a bass instrument.",
							audioFile: "Ch_6_OstinatoBsLn 1",
							scoreImage: "Ch6_OstinatoBassLine.png"
						}
					]
				},
				{
					type: "btt.cc.ui.content.staff-player",
					id: "polyphonic-texture",
					title: "Polyphonic Texture",
					subtitle: "Polyphony describes music like a round or a canon. Each voice enters separately creating an interesting weave of sound.",
					cards:
					[
						{
							isIntroCard: true,
							title: "",
							text: "See different examples of polyphony in music.",
							scoreImage: "Ch6_Polyphony.png",
							largePlayer: true
						},
						{
							title: "Polyphony",
							text: "In polyphony, voices move separately and independently. Homophony is the opposite, with voices that enter and move together in time.",
							audioFile: "Ch_6_PolyTexturePolHom 1",
							scoreImage: "Ch6_Polyphony.png",
							largePlayer: true
						},
						{
							title: "Round",
							text: "A very simple polyphonic form with a melody beginning in a <span style=\"font-style:italic; text-decoration:underline\">\"leader voice\"</span> and imitated by a <span style=\"font-style:italic; text-decoration:underline\">\"following voice\"</span> typically 2 measures later. The melody is short, usually 8 to 16 bars.",
							audioFile: "Ch_6_PolyTextureRound",
							scoreImage: "Ch6_Round.png",
							largePlayer: true
						},
						{
							title: "Canon",
							text: "Like a round but more intricate. The form is longer, includes more sections and the imitating <span style=\"font-style:italic; text-decoration:underline\">\"following voice\"</span> may start on a different pitch such as the 4th degree of the scale.",
							audioFile: "Ch_6_PolyTextureCanon",
							scoreImage: "Ch6_Canon.png",
							largePlayer: true
						}
					]
				},
				{
					type: "btt.cc.ui.content.composer-music",
					id: "pachelbel",
					title: "Pachelbel's Canon in D",
					composerName: "Johann Pachelbel",
					composerYears: "1653 -1706",
					composerImage: "composers/pachelbel/head-shot.png",
					score:
					{
						image1: "Ch6_CanonInD.jpg",
						image2: "Ch6_CanonInD.jpg",
						audio: "Ch_6_Pachelbel_Canon 1",
						canExpand: true
					},
					questionIntro: "<span>Listen:</span> To the Canon in D by Johann Pachelbel & follow the score.",
					questions:
					[
						{
							id: "leader-voice",
							question: "Which voice is the leader voice?",
							answers: ["Violin I", "Violin II", "Viola", "Violoncello", "Contrabass"],
							smallCards: true
						},
						{
							id: "imitative-voice",
							question: "What instruments are playing the imitative or following voices?",
							answers: ["Violin II & Viola", "Violin I & Violin II", "Violin I and Viola", "Violin I & Violoncello", "Violoncello and Contrabass"],
							smallCards: true
						},
						{
							id: "number-ostinato-parts",
							question: "How many ostinato parts can be heard?",
							answers: ["2", "1", "3", "4", "5"],
							smallCards: true
						},
						{
							id: "ostinato-bass-instrument",
							question: "Which instrument is playing the ostinato bass line?",
							answers: ["Contrabass", "Violin II", "Violoncello", "Viola", "Violin I"],
							smallCards: true
						},
						{
							id: "ostinato-other-instrument",
							question: "Which instrument is playing the other ostinato line?",
							answers: ["Violoncello", "Contrabass", "Violin II", "Viola", "Violin I"],
							smallCards: true
						}
					],
					didYouKnow:
					{
						title: "Notes on Johann Pachelbel",
						facts:
						[
							"Pachelbel was a German composer and church organist born in Nuremberg Germany. He spent part of his career in Vienna as a deputy organist at the world famous <strong>St. Stephen’s Cathedral</strong>.",
							"He wrote a great deal of music and influenced many Baroque composers including <strong>JS Bach</strong>. His music however, and his importance as an influential composer, was all but forgotten for two centuries until the mid-1900s.",
							"His <strong>Canon in D</strong> was popularized in the 1970s and was then used as the theme music for the movie <strong>Ordinary People</strong>. It has also become a favourite choice for wedding ceremonies."
						],
						legendItems:
						[
							{color:"#e66c4b", text:"Pachelbel’s Life"},
							{color:"#585858", text:"Pachelbel Rediscovered"}
						],
						timelineImage: "composers/pachelbel/timeline.jpg"
					}
				},
				{
					type: "btt.cc.ui.content.generic-selector",
					id: "theory-link",
					title: "Theory Link",
					subtitle: "Refresh your memory about scale degrees and numbers (1 - 8).<br/>Remember the first note of the scale = 1.",
					introOverlayText: "Select the scale tones.",
					questions:
					[
						{
							text: "Identify the scale degrees used in this ostinato bass line.",
							image: "Ch6_TheoryLink_1.jpg",
							smallAnswerBoxes: true,
							audioPrize: "Ch_6_TheoryLink1",
							answers:
							[
								{
									text: "1",
									note: "f3"
								},
								{
									text: "5",
									note: "c4"
								},
								{
									text: "5",
									note: "c4"
								},
								{
									text: "1",
									note: "f3"
								},
								{
									text: "5",
									note: "c3"
								},
								{
									text: "1",
									offset: "20px",
									note: "f3"
								},
								{
									text: "5",
									offset: "20px",
									note: "c4"
								},
								{
									text: "5",
									offset: "20px",
									note: "c3"
								},
								{
									text: "1",
									offset: "20px",
									note: "f3"
								}
							]
						},
						{
							text: "Identify the scale tones used in this ostinato bass line.",
							image: "Ch6_TheoryLink_2.jpg",
							extraSmallAnswerBoxes: true,
							audioPrize: "Ch_6_TheoryLink2",
							answers:
							[
								{
									text: "1",
									offset: "14px",
									note: "f3"
								},
								{
									text: "5",
									offset: "10px",
									note: "c4"
								},
								{
									text: "5",
									offset: "6px",
									note: "c4"
								},
								{
									text: "4",
									offset: "2px",
									note: "bb3"
								},
								{
									text: "3",
									offset: "2px",
									note: "a3"
								},
								{
									text: "2",
									offset: "-2px",
									note: "g3"
								},
								{
									text: "1",
									offset: "-6px",
									note: "f3"
								},
								{
									text: "5",
									offset: "-10px",
									note: "c3"
								},
								{
									text: "1",
									offset: "40px",
									note: "f3"
								},
								{
									text: "5",
									offset: "35px",
									note: "c4"
								},
								{
									text: "5",
									offset: "30px",
									note: "c4"
								},
								{
									text: "4",
									offset: "25px",
									note: "bb3"
								},
								{
									text: "3",
									offset: "20px",
									note: "a3"
								},
								{
									text: "2",
									offset: "15px",
									note: "g3"
								},
								{
									text: "1",
									offset: "10px",
									note: "f3"
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
						},
						{
							text: "8"
						}
					]
				},
				{
					type: "btt.cc.ui.content.create-composition",
					id: "ostinato-bass-line-rules",
					titleMain: "Strong Ostinato Bass Lines",
					breadcrumb: "Strong Ostinato Bass Lines",
					title: "Creating a Strong Ostinato Bass Line",
					subtitle: "These rules will help you build an ostinato bass line & give your composition a strong tonal centre.",
                    showMotif: false,
                    scoreImage: "Ch6_StrongOBL.jpg",
					downloadSteps:
					[
						"Start with the tonic (1).",
						"Make frequent use of the dominant (5).",
						"Use the mediant (3) to step between 1 and 5.",
                        "Use runs sparingly and keep the pattern simple."
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
				synopsis: "See what kind of ostinato you can create with tonic and dominant scale tones and more!"
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
							text: "View this movie to see how you can create a round and add an ostinato bass line.",
							poster: "PosterImagesCh_6.jpg",
							code: '<iframe width="640" height="360" src="//www.youtube-nocookie.com/embed/89f8prvQDsQ?rel=0" frameborder="0" allowfullscreen></iframe>'
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
				synopsis: "Now use your favourite notation software to build your round and ostinato bass line."
			},
			pages:
			[
				{
					type: "btt.cc.ui.content.create-composition",
					id: "create-composition",
					titleMain: "Your Composition Activity",
					subtitle: "Build Your Round and Ostinato Bass Line",
                    showMotif: false,
                    scoreImage: "Ch6_ScoreReference.jpg",
					downloadSteps:
					[
						"Enter Brother John in the flute part as shown <span style=\"font-style:italic; color:#e22f5b\">(Leader voice)</span>",
						"Label the scale degree numbers",
						"Enter the same melody into the oboe part in the 3rd measure <span style=\"font-style:italic; color:#e22f5b\">(Following voice)</span>",
                        "Create an 2-measure ostinato pattern for the bassoon. <span style=\"font-style:italic; color:#e22f5b\">(Ostinato bass line)</span>",
                        "Use tonic(1) and dominant(5) notes on the strong beats",
                        "Label the bass line with scale degree numbers"
					],
					finaleTemplateFile: "Ch_6_CompositionTemplate.mus",
					sibeliusTemplateFile: "Ch_6_CompositionTemplate.sib",
					compModelFile: "pdf/Chapt6_Composition",
					finaleTipsFile: "pdf/Ch6FinaleTips",
					sibeliusTipsFile: "pdf/Ch6SibelusTips",
					playPad:
					{
						description: "<em style='color:#e22f5b'>Ostinato Bass line:</em> Experiment creating & playing your 2 measure ostinato pattern for <em>Brother John</em>. Use the tonic (1) & dominant (5) notes on the strong beats. End on tonic.",
						image: "Ch-6-PlayPadImage.png",
						audio: "PlayPad_Ch6",
						labels:
						{
							style: "circle",
							white: {"0": "5", "3": "1", "7": "5"},
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
					evaluationRubricFile: "pdf/CCMobileCh6_Rubric",
					reflections:
					[
						"How has your ostinato bass line changed the character of the round?",
						"How could you thicken the texture of your music?",
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
							"Write your composition out in another key. OR",
							"Add another following voice to create another part in imitation. OR",
							"Have more than one instrument play each part to get a blend of interesting tonal colors.",
							"Perform your round with friends or members of your class. If you are in a class, you may want to try stringing a number of rounds together to create a larger form."
						],
						sequencing:
						[
							"Add or create beat loops.",
							"Insert your melody into more than one track and experiment with blending different tonal colors."
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
								code: '<iframe width="640" height="360" src="//www.youtube-nocookie.com/embed/WELqlRixs74?rel=0&autoplay=1" frameborder="0" allowfullscreen></iframe>'
							},
							{
								type: "audio",
								title: "Hear Model",
								audioFile: "Ch6CompExpansionAS"
							}
						]
					}
				}
			]
		}
	]
});