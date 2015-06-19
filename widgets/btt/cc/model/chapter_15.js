btt.cc.model.chapter.chapters.push(
{
	id: "15",
	title: "Be A Songwriter",
	compositionFocus: "Songwriting",
	theoryLink: "Triads in a Major Key, Chords",
	sections:
	[
		{
			id: "lessons",
			title: "Lessons",
			introOverlay:
			{
				title: "Lesson",
				synopsis: "Lesson Activities",
				synopsisExtra: "<ol><li data-target='intro'>Introduction</li><li data-target='five-key-ingredients-to-a-song'>Five Key Ingredients to a Song</li><li data-target='inspiration-structure'>Inspiration & Structure</li><li data-target='lyrics-melody'>Lyrics & Melody</li><li data-target='lennon-mccartney'>Lennon & McCartney</li><li data-target='chords'>Chords</li></ol>"
			},
			pages:
			[
				{
					type: "btt.cc.ui.content.title",
					id: "intro",
					breadcrumb:"Introduction",
					title: "Chapter 15:",
					subtitle:"Be A Songwriter",
					synopsis:"In this lesson, you’ll be writing a song. Songs are like stories and you’ll be learning how to tell a story through song using five key ingredients. You’ll discover how to get inspired, how to get your lyric ideas on paper, how to get a melody going and what chords to use; all within one of the tried and true structures that have served memorable songs so well over time. So let’s get going on this exciting journey. Review the lessons, view the composition model video and have fun coming up with your own song.",
					audioFile: "Ch15_Introv2 2"
				}






				
			]
		},
		{
			id: "comp-model",
			title: "Composition Model",
			introOverlay:
			{
				title: "Composition Model",
				synopsis: "Learn how to write your own song!"
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
							text: "View this movie to get started writing your own song!",
							poster: "CH15_CompModelPosterImage.jpg",
							code: '<iframe width="640" height="360" src="http://www.youtube.com/embed/rnjg91rrXJE?rel=0" frameborder="0" allowfullscreen></iframe>'
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
				synopsis: "Now use your favourite notation software to create a score of your jingle."
			},
			pages:
			[
				{
					type: "btt.cc.ui.content.create-composition",
					id: "create-composition",
					titleMain: "Your Composition Activity",
					subtitle: "My Song",
                    showMotif: false,
                    scoreImage: "Ch15_Structure_ScoreReference.png",
					downloadSteps:
					[
						"Decide on the main message. Get inspired by a title, or hook. <em style=\"color:#e22f5b\">(Main Idea)</em>",
						"Start with the structure and sketch out your story line in each section. <em style=\"color:#e22f5b\">(Structure)</em>",
						"Capture ideas with an audio recorder as you start writing lyrics & melody for each section. <em style=\"color:#e22f5b\">(Record)</em>",
						"As you work out melody & lyrics, experiment with chords using a piano or guitar. <em style=\"color:#e22f5b\">(Play with Chords)</em>",
						"Enter your melody, words and chords into notation software. <em style=\"color:#e22f5b\">(Score)</em>"
					],
					finaleTemplateFile: "Chapter15_CompTemplate.mus",
					sibeliusTemplateFile: "Chapter15_CompTemplate.sib",
					compModelFile: "pdf/Chapt15_CompModel",
					finaleTipsFile: "pdf/Ch15FinaleTips",
					sibeliusTipsFile: "pdf/Ch15SibeliusTips",
					playPad:
					{
						description: "<em style='color:#e22f5b'>Your Storyline:</em> Once you have your main message, use this to sketch out your story line. <em>(Take note this does not save your work)</em>",
						// image: "Ch-9-PlayPadImage.png",
						// audio: "PlayPadCh9",
						keyboardType: "none",
						fields:
						[
							{label: "", placeholder: "Verse 1"},
							{label: "", placeholder: "Chorus"},
							{label: "", placeholder: "Verse 2"},
							{label: "", placeholder: "Bridge"}
						],
						labels:
						{
							white: {},
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
				synopsis: "Enter your name and answer the questions on the following slides as you reflect on your composition. Then submit it to your teacher."
			},
			pages:
			[
				{
					type: "btt.cc.ui.content.reflect-discuss",
					id: "reflect-discuss",
					instructions: "Fill in your reflections below:",
					evaluationRubricFile: "pdf/CCMobileCh15_Rubric",
					reflections:
					[
						"What is the main message of your song?",
						"What is your hook?",
						"How did you come up with the melody of your song?"
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
							"Create a written piano chord pattern to accompany your song.",
							"Add a simple drum-set part.",
							"Add a bass line that matches the chords of the piano part."
						],
						sequencing:
						[
							"Start with a drum set groove or loop.",
							"Record chords on piano or guitar.",
                            "Record a bass line that fits your chords.",
                            "Record the lead vocal & add background vocals.",
                            "Optional: Create video to go with your song."
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
								code: '<iframe width="640" height="360" src="http://www.youtube.com/embed/mI7Vm4q0tWI?rel=0&autoplay=1" frameborder="0" allowfullscreen></iframe>' /* NEED */
							},
							{
								type: "audio",
								title: "Hear Model",
								audioFile: "Ch14_TOMSJingle_ExpModel"
							}
						]
					}
				}
			]
		}
	]
});
