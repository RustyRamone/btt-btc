btt.cc.model.chapter.chapters.push(
{
	id: "1",
	title: "Getting Started<br/>with Pitch",
	compositionFocus: "Developing a Quarter Note Melody From a Motif",
	theoryLink: "Staff Lines & Spaces, Musical Alphabet, Writing Quarter Notes.",
	sections:
	[
		{
			id: "lessons",
			title: "Lessons",
			introOverlay:
			{
				title: "Lessons",
				synopsis: "Complete the following lesson activities before starting your composition:",
				synopsisExtra: "<ol><li data-target='intro'>Introduction</li><li data-target='motif'>Motif</li><li data-target='building-a-melody'>Building a Melody</li><li data-target='beethoven'>Beethoven's 5th Symphony</li><li data-target='motif-maker'>Theory Link</li></ol>"
			},
			pages:
			[
				{
					type: "btt.cc.ui.content.title",
					id: "intro",
					breadcrumb:"Introduction",
					title: "Chapter 1:",
					subtitle:"Getting Started with Pitch",
					synopsis:"In this activity, you will be creating a quarter note melody. Before you begin, learn about motifs and other musical terms that show you how to build interesting melodies. Then you will view a video to see how to complete your melody.",
					audioFile: "CC Lesson Ch 1_Mobile"
				},
				{
					type: "btt.cc.ui.content.staff-player",
					id: "motif",
					title: "Motif",
					subtitle: "A motif is a short musical idea usually one measure in length.<br/>Composers play with motifs in different ways to build interesting and memorable melodies.",
					cards:
					[
						{
							title: "Hallelujah Chorus",
							text: "Listen for this famous motif that appears throughout Handel’s Messiah.",
							audioFile: "BTTHallelujah",
							scoreImage: "HallelujahMotif.png"
						}
					],
					fadeCards: true
				},
				{
					type: "btt.cc.ui.content.staff-player",
					id: "building-a-melody",
					title: "Building a Melody",
					subtitle: "Learn how to take a motif and expand it into something larger.<br/>View the <em>FOUR (4) INGREDIENTS</em> you will use to create your melody.",
					tempo: 120,
					cards:
					[
						{
							isIntroCard: true,
							title: "",
							text: "View the Four (4) Ingredients",
							noteData:
							{
								clef: "treble",
								notes:["c/4", "d/4", "e/4", "c/4"]
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
							title: "Motif:",
							text: "It starts with a motif, a short musical idea usually one measure in length.",
							noteData:
							{
								clef: "treble",
								notes:["c/4", "d/4", "e/4", "c/4"]
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
							title: "Retrograde:",
							text: "A motif written backwards.",
							noteData:
							{
								clef: "treble",
								notes: ["c/4?annotation=Motif", "d/4", "e/4", "c/4", "c/4?annotation=Retrograde", "e/4", "d/4", "c/4"]
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
							title: "Sequence:",
							text: "The motif appears beginning on a higher or lower note.",
							noteData:
							{
								clef: "treble",
								notes: ["c/4?annotation=Motif", "d/4", "e/4", "c/4", "d/4?annotation=Sequence", "e/4", "f/4", "d/4"]
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
							title: "Repetition:",
							text: "A motif repeated.",
							noteData:
							{
								clef: "treble",
								notes: ["c/4?annotation=Motif", "d/4", "e/4", "c/4", "c/4?annotation=Repetition", "d/4", "e/4", "c/4"]
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
							title: "The Four Ingredients:",
							text: "This melody is built using the motif in its various forms: retrograde, sequence and repetition.",
							noteData:
							{
								clef: "treble",
								notes: [
									"c/4?annotation=Motif", "d/4", "e/4", "c/4",
									"c/4?annotation=Retrograde", "e/4", "d/4", "c/4",
									"d/4?annotation=Sequence", "e/4", "f/4", "d/4",
									"d/4", "f/4", "e/4", "d/4",
									"d/4?annotation=Repetition", "e/4", "f/4", "d/4",
									"d/4", "f/4", "e/4", "d/4",
									"c/4?annotation=Repetition", "d/4", "e/4", "c/4",
									"c/4", "e/4", "d/4", "c/4"
								]
							},
							staffParams:
							{
								offset: {x:0, y:40},
								barsPerLine: 4,
								padding: 50,
								scale: 0.7
							}
						}
					]
				},
				{
					type: "btt.cc.ui.content.composer-music",
					id: "beethoven",
					title: "Beethoven's 5th Symphony",
					composerName: "Ludwig van Beethoven",
					composerYears: "1770-1827",
					composerImage: "composers/beethoven/head-shot.jpg",
					score:
					{
						title: "Beethoven's 5th",
						image1: "composers/beethoven/motif-score1.png",
						image2: "composers/beethoven/motif-score2.png",
						audio: "composers/beethoven/Beethoven_Symph_5"
					},
					questionIntro: "<span>Listen:</span> To the opening of the 1st movement of Beethoven’s Symphony No. 5",
					questionIntro2: "<span>Listen:</span> To how the motif develops into a melody using a flurry of sequences",
					questions:
					[
						{
							id: "second-motif-type",
							scoreAudio: "composers/beethoven/BTTBeethoven1st4",
							question: "The second time the motif appears in the music, it is heard in:",
							answers: ["Sequence", "Retrograde", "Repetition"]
						},
						{
							id: "number-motif-occurrences",
							scoreAudio: "composers/beethoven/BTTBeethoven5Wclick",
							question: "How many times do you hear the motif in its various forms in the opening passage?",
							answers: ["Between 10 & 20 times", "Between 4 &10 times", "Less than 4 times"]
						}
					],
					didYouKnow:
					{
						title: "Notes on Beethoven",
						facts:
						[
							"It is rumored that Beethoven’s father lied about his age so that he appeared to be more of a child prodigy like Mozart. While performing public at an early age, his father claimed that he was born in 1772. Civic records suggest that he was born in 1770.",
							"Beethoven ended his career as a virtuoso pianist because he was going deaf. Instead, he devoted his time to composing.",
							"His music bridges the classical and romantic time periods in music history."
						],
						legendItems:
						[
							{color:"#e66c4b", text:"Beethoven's life"},
							{color:"#585858", text:"Industrial Revolution &amp; Development of the piano"}
						],
						timelineImage: "composers/beethoven/timeline.png"
					}
				},
				{
					type: "btt.cc.ui.content.motif-maker",
					id: "motif-maker",
					title: "Theory Link",
					subtitle: "Create your motif based on the first four letters of your name."
				}
			]
		},
		{
			id: "comp-model",
			title: "Composition Model",
			introOverlay:
			{
				title: "Composition Model",
				synopsis: "Let's see how you can turn a motif into a melody."
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
							text: "View the movie to see how to take your new motif and turn it into a melody!",
							poster: "Ch 1_CC_CompModel.jpg",
							code: '<iframe width="640" height="360" src="http://www.youtube.com/embed/6z8ViaGW4IM?rel=0" frameborder="0" allowfullscreen></iframe>'
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
				synopsis: "Remember your motif and get ready to bring it to life!"
			},
			pages:
			[
				{
					type: "btt.cc.ui.content.create-composition",
					id: "create-composition",
					titleMain: "Create Your Own Composition",
					subtitle: "Creating a Quarter Note Melody",
                    showMotif: true,
					downloadSteps:
					[
						"Enter your \"name\" motif in measure 1.",
						"Enter it in retrograde in measure 2. <em>(Backwards)</em>",
						"Enter the same notes as measures 1 & 2 one step higher on the staff in measures 3 & 4. <em>(Sequence)</em>",
						"Enter the same notes as in measures 3 & 4 in measures 5 & 6. <em>(Repetition)</em>",
						"Enter the same notes as in measures 1 & 2 in measures 7 & 8. <em>(Repetition)</em>"
					],
					finaleTemplateFile: "Ch_1_CompositionTemplate.mus",
					sibeliusTemplateFile: "Ch_1_CompositionTemplate.sib",
					compModelFile: "pdf/CC_Ch1_Print_Model[4]",
					finaleTipsFile: "pdf/Ch1FinaleTips",
					sibeliusTipsFile: "pdf/Ch1SibeliusTips",
					playPad:
					{
						description: "<em style='color:#e22f5b'>Introduction to the Piano:</em> Learn the piano note names. Enter your motif and practise playing it forward, backward and up a step in quarter notes.",
						// image: "Ch-11-PlayPadImage.png",
						labels:
						{
							style: "flat",
							white: {
								"0": "C" , "1": "D", "2": "E", "3": "F", "4": "G", "5": "A", "6": "B", "7": "C", "8": "D",
								"8": "D", "9": "E", "10": "F", "11": "G", "12": "A", "13":"B", "14": "C", "15": "D",
								"16":"E","17":"F","18":"G","19":"A","20":"B","21":"C",
							},
							black:{}
						},
						fields:
						[
							{
								placeholder: "Your Name Motif"
							}
						]
					},
					css:
					{
						// ".play-pad-reveal div": {position:"relative", top:"-60px"}
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
					evaluationRubricFile: "pdf/CCMobileCh1_Rubric",
					reflections:
					[
						"Describe the mood of your music.",
						"Talk about why the music stirs up the mood or emotion you are feeling.",
						"What scene can you picture when you hear your music?"
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
							"Continue this composition in Chapter 2: Rhythm Basics",
							"If you understand key and scales, try adding the key signature that has the same letter name as your first note. (You can use a flat key or a sharp key.)",
							"Add words to your quarter note melody to create an interesting warm up if you sing in a choir."
						],
						sequencing:
						[
							"Add a Beat Loop",
							"Record a percussion part in quarter notes",
							"Enter your melody on the piano",
							"Adjust volume and add Reverb effects"
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
								code: '<iframe width="640" height="360" src="http://www.youtube.com/embed/XH9qJVv0kW0?rel=0&autoplay=1" frameborder="0" allowfullscreen></iframe>'
							},
							{
								type: "audio",
								title: "Hear Model",
								audioFile: "Ch1GDExpansion"
							}
						]
					}
				}
			]
		}
	]
});


