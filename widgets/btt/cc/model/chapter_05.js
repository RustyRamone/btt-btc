btt.cc.model.chapter.chapters.push(
{
	id: "5",
	title: "Rhythm & Words - Spoken Chorus",
	compositionFocus: "Elements of Music, Ostinato Rhythm, Pairing Text With Rhythm",
	theoryLink: "Dotted, Syncopated and Triplet Rhythms",
	sections:
	[
		{
			id: "lessons",
			title: "Lessons",
			introOverlay:
			{
				title: "Lesson",
				synopsis: "Lesson Activities",
				synopsisExtra: "<ol><li data-target='intro'>Introduction</li><li data-target='elements-of-music'>Elements of Music</li><li data-target='ostinato-rhythms'>Ostinato Rhythms</li><li data-target='ernst-toch'>Geographical Fugue - Spoken Chorus</li><li data-target='theory-link'>Theory Link</li><li data-target='matching-words-with-rhythm'>Matching Words with Rhythm</li></ol>"
			},
			pages:
			[
				{
					type: "btt.cc.ui.content.title",
					id: "intro",
					breadcrumb:"Introduction",
					title: "Chapter 5:",
					subtitle:"Rhythm & Words - Spoken Chorus",
					synopsis:"In this lesson, you will be writing words to a pre-existing rhythm and then creating a second part using your own ostinato rhythm and words to go with it.",
					audioFile: "CC Lesson Ch 5_Mobile 1"
				},
				{
					type: "btt.cc.ui.content.staff-player",
					id: "elements-of-music",
					title: "Elements of Music",
					subtitle: "The 7 elements of music include rhythm, pitch, form, texture, timbre, harmony, and expression. Play the movies to review their meanings:",
					cards:
					[
						{
							title: "Rhythm:",
							text: "Patterns of long & short sounds that are regular and aligned to the beat in time.",
							audioFile: "Ch_5_RhythmElement",
							scoreImage: "Ch_5_Rhythm.png",
							width: "600px"
						},
						{
							title: "Pitch:",
							text: "A sound that is heard higher or lower according to its position on the music staff.",
							audioFile: "Ch_5_PitchElement",
							scoreImage: "Ch_5_Pitch.png",
							width: "600px"
						},
						{
							title: "Form:",
							text: "Arrangement of 2 or more distinguishable sections of music.",
							audioFile: "Ch_5_FormElement",
							scoreImage: "Ch_5-Form.png",
							largePlayer: true,
							width: "600px"
						},
						{
							title: "Texture:",
							text: "The number of parts played that create thicker or thinner sound.",
							audioFile: "Ch_5_TextureElement",
							scoreImage: "Ch_5_Texture.png",
							largePlayer: true,
							width: "600px"
						},
						{
							title: "Timbre:",
							text: "The distinct sound of a musical instrument or voice.",
							audioFile: "Ch_5_TimbreElement",
							scoreImage: "Ch_5_Timbre.png",
							largePlayer: true,
							width: "600px"
						},
						{
							title: "Harmony:",
							text: "Two or more pitches played or sung at the same time.",
							audioFile: "Ch_5_HarmonyElement",
							scoreImage: "Ch_5_-Harmony.png",
							width: "600px"
						},
						{
							title: "Expression:",
							text: "How a part is performed to enhance the mood of the music.",
							audioFile: "Ch_5_ExpressionElement",
							scoreImage: "Ch_5_Expression.png",
							largePlayer: true,
							width: "600px"
						}
					],
					fadeCards: true
				},
				{
					type: "btt.cc.ui.content.line-connect",
					id: "definitions",
					title: "Definitions Quiz",
					subtitle: "Match the terms to the meanings.",
					srcThingName: "term",
					destThingName: "definition",
					smallText: true,
					definitions:
					[
						{
							expression:
							{
								text: "Texture",
								audio: "Ch_5_TextureElementNV"
							},
							meaning:
							{
								text: "The number of parts played at a given time that create thicker or thinner sound."
							}
						},
						{
							expression:
							{
								text: "Form",
								audio: "Ch_5_FormElementNV"
							},
							meaning:
							{
								text: "Arrangement of 2 or more distinguishable sections of music."
							}
						},
						{
							expression:
							{
								text: "Timbre",
								audio: "Ch_5_TimbreElementNV"
							},
							meaning:
							{
								text: "The distinct sound of a musical instrument or voice."
							}
						},
						{
							expression:
							{
								text: "Rhythm",
								audio: "Ch_5_RhythmElementNV"
							},
							meaning:
							{
								text: "Patterns of long & short sounds that are regular and aligned to the beat in time."
							}
						},
						{
							expression:
							{
								text: "Pitch",
								audio: "Ch_5_PitchElementNV"
							},
							meaning:
							{
								text: "A sound heard higher or lower according to its position on the music staff. Uses letter names A, B, C, D, E, F, G."
							}
						},
						{
							expression:
							{
								text: "Harmony",
								audio: "Ch_5_HarmonyElementNV"
							},
							meaning:
							{
								text: "Two or more pitches played or sung at the same time."
							}
						},
						{
							expression:
							{
								text: "Expression",
								audio: "Ch_5_ExpressionElementNV"
							},
							meaning:
							{
								text: "How a part is performed to enhance the mood of the music."
							}
						}
					]
				},
				{
					type: "btt.cc.ui.content.generic-selector",
					id: "elements-of-music-expression",
					title: "Elements of Music - Expression",
					subtitle: "Expression markings can tell us how loud or soft to play music.",
					introOverlayText: "Test your knowledge about dynamics.",
					questions:
					[
						{
							text: "Select the dynamic markings from <strong>softest to loudest</strong>.",
							answers:
							[
								{
									text: "pp"
								},
								{
									text: "p"
								},
								{
									text: "f"
								},
								{
									text: "ff"
								}
							]
						}
					],
					shuffleChoices: true,
					choices:
					[
						{
							text: "pp"
						},
						{
							text: "p"
						},
						{
							text: "f"
						},
						{
							text: "ff"
						}
					]
				},
				{
					type: "btt.cc.ui.content.staff-player",
					id: "ostinato-rhythms",
					title: "Ostinato Rhythms",
					subtitle: "You will be creating an ostinato rhythm pattern in your composition. The word ostinato means it is repeated. <u>Rhythm</u> implies it has no pitch.",
					tip:
					{
						title: "Tip",
						text: "The more you use regular rhythm patterns, the more memorable your music will be. But don’t overdo it. It will become too predictable and monotonous."
					},
					cards:
					[
						{
							isIntroCard: true,
							title: "",
							text: "Listen to these two examples",
							scoreImage: "OstinatoR.png"
						},
						{
							title: "Beat Loop Ostinato Rhythm",
							text: "Notice that this ostinato pattern has no pitch.",
							audioFile: "Ch_5_OstinatoR",
							scoreImage: "OstinatoR.png",
							showTip: true
						},
						{
							title: "Spoken Ostinato Rhythm",
							text: "Words have their own natural rhythm that matches up nicely to rhythm notation in music. Notice this pattern also has no pitch.",
							audioFile: "Ch_5_OstinatoS",
							scoreImage: "OstinatoS.png"
						}
					]
				},
				{
					type: "btt.cc.ui.content.composer-music",
					id: "ernst-toch",
					title: "Geographical Fugue - Spoken Chorus",
					composerName: "Ernst Toch",
					composerYears: "1887-1964",
					composerImage: "composers/toch/head-shot.png",
					video:
					{
						code: '<iframe style="margin-top:10px" src="//player.vimeo.com/video/9424386?title=0&amp;byline=0&amp;portrait=0&amp;color=e22f5b&amp;autoplay=1" width="80%" height="220" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'
					},
					questionIntro: "<span>Listen:</span> To the way that Ernst Toch plays with words in the Geographical Fugue.",
					questions:
					[
						{
							id: "words-meaning",
							question: "What do the words in the Geographical Fugue describe?",
							answers: ["Geographical places in an interesting rhythmic setting", "A family vacation", "A journey through Europe"],
							numCorrect: 1
						},
						{
							id: "missing-elements",
							question: "Which two musical elements are not present in the Geographical Fugue?",
							answers: ["Harmony", "Pitch", "Rhythm", "Texture", "Timbre", "Expression", "Form"],
							smallCards: true,
							numCorrect: 2
						}
					],
					didYouKnow:
					{
						title: "Notes on Ernst Toch",
						facts:
						[
							"Born in Vienna, Ernst Toch composed major works for classical performance. As he was of Jewish descent, he fled Austria when Hitler came to power in 1933. He eventually settled in America where he wrote many film scores including the midnight sleigh chase scene in Heidi, a 1937 movie starring child actor Shirley Temple.",
							"He is also known for creating the unique spoken chorus <em>The Geographical Fugue</em>.",
							"<strong>Spoken Chorus VS Rap:</strong> <em><u>Spoken chorus</u></em> spotlights the <em><u>rhythm</u></em> and matches it with words that are nonsensical. It is suitable for performing in large groups such as choirs. <em><u>Rap</u></em> spotlights the <em><u>words and their meaning</u></em> and matches it with dramatic rhythm to tell stories and express opinions. Performed by solo artists with electronic background."
						],
						legendItems:
						[
							{color:"#e66c4b", text:"Ernst Toch's life"},
							{color:"#585858", text:"Beginnings of Rap in Bronx NYC 1970s"},
							{redDot:true, text:"Hitler in power"},
							{whiteDot:true, text:"Geographical Fugue"}
						],
						legendItemsPerLine: 2,
						timelineImage: "composers/toch/timeline.jpg"
					}
				},
				{
					type: "btt.cc.ui.content.line-connect",
					id: "theory-link",
					title: "Theory Link",
					subtitle: "Refresh your memory about different rhythm figures.",
					introOverlayText: "Listen to & label the rhythms.",
					srcThingName: "notes box",
					destThingName: "definition",
					definitions:
					[
						{
							expression:
							{
								audio: "Ch_5_DotQThryLnk",
								image: "DottedQw8.png"
							},
							meaning:
							{
								text: "Dotted Rhythm"
							}
						},
						{
							expression:
							{
								audio: "Ch_5_SyncThryLnk 1",
								image: "SyncQ.png"
							},
							meaning:
							{
								text: "Syncopated Rhythm"
							}
						},
						{
							expression:
							{
								audio: "Ch_5_QTripThryLnk",
								image: "Qtriplt.png"
							},
							meaning:
							{
								text: "Quarter Note Triplet"
							}
						},
						{
							expression:
							{
								audio: "Ch_5_ETripThryLnk",
								image: "8thtriplt.png"
							},
							meaning:
							{
								text: "Eighth Note Triplet"
							}
						}
					]
				},
				{
					type: "btt.cc.ui.content.line-connect",
					id: "matching-words-with-rhythm",
					title: "Matching Words With Rhythm",
					subtitle: "Learn to pair text with rhythms so that you can create your own spoken chorus in the style of Ernst Toch.",
					introOverlayText: "Listen to each spoken word & match it to a rhythm.",
					srcThingName: "word",
					destThingName: "rhythm",
					definitions:
					[
						{
							expression:
							{
								audio: "Ch_5_StarryThryLnk 2",
								text: "Starry"
							},
							meaning:
							{
								image: "DottedQw8.png"
							}
						},
						{
							expression:
							{
								audio: "Ch_5_BillowingThryLnk",
								text: "Billowing"
							},
							meaning:
							{
								image: "SyncQ.png"
							}
						},
						{
							expression:
							{
								audio: "Ch_5_BlubryThryLnk",
								text: "Blueberry"
							},
							meaning:
							{
								image: "Qtriplt.png"
							}
						},
						{
							expression:
							{
								audio: "Ch_5_BttrflyThryLnk",
								text: "Butterfly"
							},
							meaning:
							{
								image: "8thtriplt.png"
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
				synopsis: "See what you can create with your favorite collection of words!"
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
							text: "View this movie to see how you can come up with a Spoken Chorus.",
							poster: "PosterImagesCh_5.jpg",
							code: '<iframe width="640" height="360" src="http://www.youtube.com/embed/17MZQTl-J2Y?rel=0" frameborder="0" allowfullscreen></iframe>'
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
				synopsis: "Now create your own spoken chorus composition using your favorite notation software."
			},
			pages:
			[
				{
					type: "btt.cc.ui.content.create-composition",
					id: "create-composition",
					titleMain: "Your Composition Activity",
					subtitle: "Create your Spoken Chorus",
                    showMotif: false,
                    scoreImage: "SpokenWordScore.jpg",
					downloadSteps:
					[
						"Input the rhythms for Part 1 as shown",
						"Select words that belong to a theme or category <span style=\"font-style:italic; color:#e22f5b\">(e.g., animals, cities, food, colors)</span>",
						"Match words or phrases to the rhythms",
                        "Create a Part 2 with your own Ostinato Rhythm <span style=\"font-style:italic; color:#e22f5b\">(use dotted rhythms, triplets or syncopated rhythms)</span>",
                        "Add Dynamic Markings"
					],
					finaleTemplateFile: "Ch_5_CompositionTemplate.mus",
					sibeliusTemplateFile: "Ch_5_CompositionTemplate.sib",
					compModelFile: "pdf/Chapt5_CompModel[2]",
					finaleTipsFile: "pdf/Ch5FinaleTips",
					sibeliusTipsFile: "pdf/Ch5SibelusTips",
					playPad:
					{
						description: "<em style='color:#e22f5b'>Spoken Chorus:</em> Select words that match a theme / category. Enter your words in the fields below & match to the Rhythm. Play & Sing along.",
						image: "Ch-5-PlayPadImage.png",
						hideKeyboard: true,
						fieldsBelow: true,
						audios: ["PlayPad_Ch5 _A", "PlayPad_Ch5_B"],
						fields:
						[
							{label: "A", placeholder: "Type words here"},
							{label: "B", placeholder: "Type words here"}
						],
						labels:
						{
							style: "flat",
							white: {},
							black: {}
						}
					},
					css:
					{
						".audio-player0": {position:"absolute", left:"15px", top:"206px"},
						".audio-player1": {position:"absolute", left:"15px", top:"282px"},
						".play-pad-content > img": {height: "197px", width:"100%"}
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
					evaluationRubricFile: "pdf/CCMobileCh5_Rubric",
					reflections:
					[
						"Who will you have performing Part 1? Who will perform Part 2?",
						"Of the seven elements in music, which ones have you used?",
						"How could you expand your piece into a larger work?"
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
				synopsis: "Have some fun with your compositions and take it further. Be sure to share it too!"
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
							"Add percussion parts that duplicate the existing parts.",
							"Add an ostinato percussion part.",
							"Assign the parts for everyone to play in your entire class.",
							"For advanced users: Add an ostinato melody part as a B section."
						],
						sequencing:
						[
							"Add or create beat loops.",
							"Record the 2 voice parts separately and learn to use panning."
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
								code: '<iframe width="640" height="360" src="http://www.youtube.com/embed/IZFjoEZloM8?rel=0&autoplay=1" frameborder="0" allowfullscreen></iframe>'
							},
							{
								type: "audio",
								title: "Hear Model",
								audioFile: "Ch5_CompExpAS"
							}
						]
					}
				}
			]
		}
	]
});