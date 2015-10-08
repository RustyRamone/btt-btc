btt.cc.model.chapter.chapters.push(
{
	id: "2",
	title: "Getting Started<br/>with Rhythm",
	compositionFocus: "Developing a Melody with Basic Rhythm From a Motif",
	theoryLink: "Basic Rhythms and Rests",
	sections:
	[
		{
			id: "lessons",
			title: "Lessons",
			introOverlay:
			{
				title: "Lessons",
				synopsis: "Complete the following lesson activities before starting your composition:",
				synopsisExtra: "<ol><li data-target='intro'>Introduction</li><li data-target='adding-rhythm'>Adding Rhythm</li><li data-target='musical-character'>Musical Character</li><li data-target='theory-link'>Theory Link</li><li data-target='definitions'>Definitions</li></ol>"
			},
			pages:
			[
				{
					type: "btt.cc.ui.content.title",
					id: "intro",
					breadcrumb:"Introduction",
					title: "Chapter 2:",
					subtitle:"Getting Started with Rhythm",
					synopsis:"In this activity, you will be transforming your quarter note melody from Chapter 1 using 8th note rhythms and rests. The use of interesting rhythms can change the personality of a melody by adding energy and forward movement. Play with the rhythms and see what you can come up with.",
					audioFile: "CC Lesson Ch 2_Intro"
				},
				{
					type: "btt.cc.ui.content.staff-player",
					id: "adding-rhythm",
					title: "Adding Rhythm",
					subtitle: "Listen and compare the quarter note melody from the Chapter 1 to the revised melody from the Chapter 2.",
					tempo: 130,
					cards:
					[
						{
							title: "Chapter 1 Composition Sample",
							text: "(before adding rhythm)",
							noteData:
							{
								clef: "treble",
								notes:
								[
									"c/4", "e/4", "a/4", "g/4", "g/4", "a/4", "e/4", "c/4", "d/4", "f/4", "b/4", "a/4", "a/4", "b/4", "f/4", "d/4",
									"d/4", "f/4", "b/4", "a/4", "a/4", "b/4", "f/4", "d/4", "c/4", "e/4", "a/4", "g/4", "g/4", "a/4", "e/4", "c/4"
								]
							},
							staffParams:
							{
								offset: {x:0, y:25},
								barsPerLine: 4,
								padding: 50,
								scale: 0.7
							}
						},
						{
							title: "Chapter 2 Composition Sample",
							text: "(with 8th note rhythms added)",
							noteData:
							{
								clef: "treble",
								notes:
								[
									["c/4 8", "c/4 8", "e/4 8", "e/4 8"], "a/4", "g/4", "g/4", "r 8", "a/4 8", "e/4", "c/4", ["d/4 8", "d/4 8", "f/4 8", "f/4 8"], "b/4", "a/4", "r w",
									["d/4 8", "d/4 8", "f/4 8", "f/4 8"], "b/4", "a/4", "r 8", "a/4 8", "r 8", "b/4 8", "f/4", "d/4", "c/4", ["e/4 8", "e/4 8"], ["a/4 8", "a/4 8"], "g/4", "r w"
								]
							},
							staffParams:
							{
								offset: {x:0, y:25},
								barsPerLine: 4,
								padding: 50,
								scale: 0.7
							}
						}
					]
				},
				{
					type: "btt.cc.ui.content.multiple-choice",
					id: "musical-character",
					title: "Musical Character",
					questions:
					[
						{
							id: "question",
							title: "Question",
							text: "Click on the words that describe how the character of the music changes when rhythm is added:",
							correctAnswers: ["Bouncier", "More Interesting"],
							incorrectAnswers: ["Sadder", "Less Movement"]
						}
					]
				},
				{
					type: "btt.cc.ui.content.note-selector",
					id: "theory-link",
					title: "Theory Link",
					subtitle: "You will be substituting some of your quarter notes with 8th note and 8th rest pairings in your new composition.",
					question: "Select the rhythm patterns equal in length to one quarter note.",
					originalPattern: [["f/4|q"]],
					choicePatterns:
					[
						[["f/4|8", "f/4|8"], ["f/4|8"]],
						[["a/4|qr"]],
						[["f/4|8", "f/4|8"]],
						[["f/4|8"], ["a/4|8r"]],
						[["f/4|h"]],
						[["a/4|8r"], ["f/4|8"]]
					],
					correctPatterns:
					[
						[["a/4|qr"]],
						[["f/4|8", "f/4|8"]],
						[["f/4|8"], ["a/4|8r"]],
						[["a/4|8r"], ["f/4|8"]]
					]
				},
				{
					type: "btt.cc.ui.content.line-connect",
					id: "definitions",
					title: "Definitions",
					subtitle: "In Chapter 1, you developed a melody using a motif. You turned it backwards, moved it up or down and repeated it.",
					srcThingName: "term",
					destThingName: "definition",
					definitions:
					[
						{
							expression:
							{
								text: "Motif"
							},
							meaning:
							{
								text: "A short musical idea, usually one measure."
							}
						},
						{
							expression:
							{
								text: "Retrograde"
							},
							meaning:
							{
								text: "A motif written backwards."
							}
						},
						{
							expression:
							{
								text: "Sequence"
							},
							meaning:
							{
								text: "A motif beginning on a different pitch."
							}
						},
						{
							expression:
							{
								text: "Repetition"
							},
							meaning:
							{
								text: "A motif repeated."
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
				synopsis: "Here’s a chance to spice up your Chapter 1 melody by adding rhythm."
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
							text: "View this movie to see how to add rhythm to your<br/>Chapter 1 melody.",
							poster: "Ch 2_CC_CompModel.jpg",
							code: '<iframe width="640" height="360" src="//www.youtube-nocookie.com/embed/r-KrAa54XeY?rel=0" frameborder="0" allowfullscreen></iframe>'
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
				synopsis: "Use your favourite notation software to create your composition. Don’t have any? See next slide for free starter versions."
			},
			pages:
			[
				{
					type: "btt.cc.ui.content.create-composition",
					id: "create-composition",
					titleMain: "Create Your Own Composition",
					subtitle: "Add Rhythm to Your Melody",
                    showMotif: true,
					downloadSteps:
					[
						"Enter your \"name\" motif that you created in Composer's Corner Chapter 1.",
						"Change the Rhythm by substituting quarter notes with eighth note & rest pairings.",
						"Create your melody the same way as Chapter 1 (motif, retrograde, sequence, repetition)"
					],
					finaleTemplateFile: "Ch_2_CompositionTemplate.mus",
					sibeliusTemplateFile: "Ch_2_CompositionTemplate.sib",
					compModelFile: "pdf/CC_Ch2_Print_Model[3]",
					finaleTipsFile: "pdf/Ch2FinaleTips",
					sibeliusTipsFile: "pdf/Ch2SibeliusTips"
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
					evaluationRubricFile: "pdf/CCMobileCh2_Rubric",
					reflections:
					[
						"Describe the mood and feel of your melody.",
						"Play your melody back at different speeds. How is the music affected by speed?",
						"How have your new 8th note & rest pairings changed your melody?"
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
				synopsis: "Have some fun with your compositions and take it further in notation or sequencing software. Then share it with others. Woohoo!"
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
							"Assign your melody to one or more instruments",
							"Add a percussion line of music to go with your melody",
							"Assign the melody for everyone to play in your entire class",
							"Save it and share it."
						],
						sequencing:
						[
							"Create and add Drum Beat loops",
							"Enter your Melody",
							"Play with your melody by editing it",
							"Add Echo effects"
						]
					},
					links:
					{
						notation:
						[
							{
								type: "video",
								title: "See How",
								code: '<iframe width="640" height="360" src="//www.youtube-nocookie.com/embed/EVg-Qw2sl18?rel=0&autoplay=1" frameborder="0" allowfullscreen></iframe>'
							},
							{
								type: "audio",
								title: "Hear Model",
								audioFile: "BTTCh2ExpansionNF"
							}
						],
						sequencing:
						[
							{
								type: "video",
								title: "For iPad",
								code: '<iframe width="640" height="360" src="//www.youtube-nocookie.com/embed/CFBczy4L6xM?rel=0&autoplay=1" frameborder="0" allowfullscreen></iframe>'
							},
							{
								type: "video",
								title: "For Computer",
								code: '<iframe width="640" height="360" src="//www.youtube-nocookie.com/embed/5xgXoVu3muU?rel=0&autoplay=1" frameborder="0" allowfullscreen></iframe>'
							}
						]
					}
				}
			]
		}
	]
});
