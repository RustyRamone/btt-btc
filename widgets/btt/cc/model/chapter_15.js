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
				},
				{
					type: "btt.cc.ui.content.staff-player",
					id: "origin-of-the-blues",
					title: "Origin of the Blues",
					subtitle: "",
					cards:
					[
						{
							title: "Origin of the Blues",
							text: "The ‘Blues’ is an American musical genre whose roots lie in the African American folk music tradition of the late 1800s and early 1900s.",
							scoreImage: "OriginofBlues_Image.png",
							audioFile: "Ch12_Origin_Singing the Blues",
							largePlayer: true
						},
						{
							title: "Singin’ the Blues",
							text: "Early Blues music had an identifiable sentiment that was expressed in the mournful singing of its lyrics.",
							scoreImage: "SinginTheBlues_Image.png",
							largePlayer: true
						}
					]
				},
				{
					type: "btt.cc.ui.content.staff-player",
					id: "12-bar-blues-structure",
					title: "The 12-Bar Blues Structure",
					subtitle: "The standard 12-bar blues has 3 lines of text creating an AAB verse form.",
					cards:
					[
						{
							isIntroCard: true,
							title: "",
							text: "Look at how lyrics shaped the form of the early blues.",
							scoreImage: "Ch12_3PartForm.png",
							largePlayer: true
						},
						{
							title: "A Three Part Form",
							text: "The first two lines use the same text and melody. The third line acts like a rebuttal statement, rounding off the story.",
							audioFile: "Ch12_3PartForm",
							scoreImage: "Ch12_3PartForm.png",
							largePlayer: true
						},
						{
							title: "Lines & Phrases",
							text: "Each line has two phrases sung over four measures of music with a space at the end.",
							audioFile: "Ch12_LinesPhrases",
							scoreImage: "Ch12_LinesPhrases.png",
							largePlayer: true
						}
					]
				},
				{
					type: "btt.cc.ui.content.line-connect",
					id: "blues-quiz",
					title: "Blues Quiz",
					subtitle: "See what you know about the blues.",
					srcThingName: "number",
					destThingName: "description",
					definitions:
					[
						{
							expression:
							{
								text: "4"
							},
							meaning:
							{
								text: "Number of measures in one line."
							}
						},
						{
							expression:
							{
								text: "3"
							},
							meaning:
							{
								text: "Number of lines in one verse."
							}
						},
						{
							expression:
							{
								text: "2"
							},
							meaning:
							{
								text: "Number of phrases in one line."
							}
						},
						{
							expression:
							{
								text: "1"
							},
							meaning:
							{
								text: "Number of rebuttal lines in one verse."
							}
						}
					]
				},
				{
					type: "btt.cc.ui.content.staff-player",
					id: "haunting-blues-sound",
					title: "The Haunting Sound of the Blues",
					subtitle: "",
					cards:
					[
						{
							isIntroCard: true,
							title: "",
							text: "Blues singers used flat-sounding notes to accentuate the forlorn mood. These were called ‘blue’ notes.",
							scoreImage: "Ch12_Haunting_BluesNotes.png",
							largePlayer: false
						},
						{
							title: "The Blue Notes",
							text: "Blue notes are the 3rd & 7th notes of a major scale sung flat by bending them downward.",
							audioFile: "Ch12_Haunting_BluesNotes",
							scoreImage: "Ch12_Haunting_BluesNotes.png",
							largePlayer: false
						},
						{
							title: "The Major Sound",
							text: "The second time it is heard, the 3rd has a major sound making the melody brighter.",
							audioFile: "Ch12_Haunting_MajorNotes",
							scoreImage: "Ch12_Haunting_MajorNotes.png",
							largePlayer: false
						},
						{
							title: "Major or Minor?",
							text: "The blues just could never make up it’s mind whether it was major or minor, humorous or sad.",
							audioFile: "Ch12_Haunting_Major_or_Minor",
							scoreImage: "Ch12_Haunting_Major_or_Minor.png",
							largePlayer: true
						}
						
					]
				},
				{
					type: "btt.cc.ui.content.staff-player",
					id: "blues-influences-other-music",
					title: "Blues Influences Other Music",
					subtitle: "Numerous musical genres have been influenced by the blues.",
					cards:
					[
						{
							title: "Evolution and Influence",
							text: "Blues has stayed true to form, but also influenced many different musical styles.",
							audioFile: "Ch12_InfluenceOf TheBlues",
							scoreImage: "InfluenceOfTheBlues.png",
							largePlayer: true
						},
						{
							title: "Blues in Jazz/Blues in Boogie",
							text: "Here is a swing style with the same 12-bar blues 3-line structure of AAB",
							audioFile: "Ch12_JazzBoogie",
							scoreImage: "Ch-12__JazzBoogie.png",
							largePlayer: true
						},
						{
							title: "Slidin’ Swampy Blues/High Energy Rock",
							text: "This music uses the blue notes but it strays from the 12-bar form",
							audioFile: "Ch12_SwampRock",
							scoreImage: "Influence_SwampRock.png",
							largePlayer: true
						},
						{
							title: "Funk Styles/Hip Hop",
							text: "The blues shows up in Urban Hip Hop Styles too but the form is completely gone.",
							audioFile: "Ch12_Funk",
							scoreImage: "Ch12_Funk.png",
							largePlayer: true
						}
					]
				},
				{
					type: "btt.cc.ui.content.composer-music",
					id: "when-the-levee-breaks",
					title: "When the Levee Breaks",
					composerName: "The Great Mississippi Flood 1927",
					composerYears: "",
					composerImage: "WTLeveeBreaksPic.png",
					video:
					{
						code: '<iframe style="margin-top:10px" width="391" height="220" src="//www.youtube.com/embed/THBkRlATdGI?rel=0&autoplay=1" frameborder="0" allowfullscreen></iframe>'
					},
					questionIntro: "<span>Listen:</span> To ‘When the Levee Breaks’ recorded in 1928 and follow the words.",
					questions:
					[
						{
							id: "question1",
							question: "Blue notes include lowered 3rds & 7ths.",
							image: "Ch12WhentheLeveeQuiz1.png",
							rewardImage: "Ch12WhentheLeveeQuiz2.png",
							answers: ["True", "False"],
							smallCards: false
						},
						{
							id: "question2",
							question: "Traditional blues music has 4 lines of music.",
							image: "Ch12WhentheLeveeQuiz2.png",
							rewardImage: "Ch12WhentheLeveeQuiz3.png",
							answers: ["False", "True"],
							smallCards: false
						},
						{
							id: "question3",
							question: "Blues has influenced jazz & rock music.",
							image: "Ch12WhentheLeveeQuiz3.png",
							rewardImage: "Ch12WhentheLeveeQuiz4.png",
							answers: ["True", "False"],
							smallCards: false
						},
						{
							id: "question4",
							question: "When the Levee Breaks was first recorded in 1910.",
							image: "Ch12WhentheLeveeQuiz4.png",
							rewardImage: "Ch12WhentheLeveeQuiz5.png",
							rewardSfx: "woohoo",
							answers: ["False", "True"],
							smallCards: false
						}
					],
					didYouKnow:
					{
						title: "Notes on ‘When the Levee Breaks’",
						facts:
						[
							"This blues song was written by husband and wife duo, Kansas Joe McCoy and Memphis Minnie in 1928.",
							"It was written about the Great Mississippi Flood of 1927 which destroyed both homes and the agricultural economy of the region.",
							"It is part of a sub-genre called the Delta Blues.",
							"Several artists have recorded this song since, and Led Zeppelin recorded a re-worked version of it in the 1970’s."
						],
						legendItems:
						[
							{color:"#e66c23", text:"Evolution of early Blues"},
							{redDot:true, text:"The Great Mississippi Flood of 1927"},
							{whiteDot:true, text:"‘When the Levee Breaks’ Recorded by Kansas Joe McCoy & Memphis Minnie in 1928"},
							{orangeDot:true, text:"‘When the Levee Breaks’ recorded by Led Zeppelin in 1970"}
						],
						legendItemsPerLine: 2,
						timelineImage: "Timeline_ch12.jpg"
					}
				},
				{
					type: "btt.cc.ui.content.staff-player",
					id: "blues-scale",
					title: "The Blues Scale",
					subtitle: "You will be using the notes from a blues scale to build your melody.",
					cards:
					[
						{
							title: "The Blues Scale vs Major Scale",
							text: "See the difference between a blues scale and a major scale.",
							audioFile: "Ch12_TheoryLInk",
							scoreImage: "Ch12_TheoryLInk.png",
							largePlayer: true
						}
					]
				},
				{
					type: "btt.cc.ui.content.generic-selector",
					id: "theory-link",
					title: "Name the Notes",
					subtitle: "Label the notes in the blues scale.",
					introOverlayText: "",
					questions:
					[
						{
							text: "",
							image: "Ch12_TheoryLinkQuiz_C.png",
							smallAnswerBoxes: true,
							audioPrize: "MusicalPrize-1",
							answers:
							[
								{
									text: "8",
									offset: "-20px",
									note: "c5"
								},
								{
									text: "-7",
									offset: "-15px",
									note: "bb4"
								},
								{
									text: "5",
									offset: "-5px",
									note: "g4"
								},
								{
									text: "-5",
									offset: "15px",
									note: "f#4"
								},
								{
									text: "4",
									offset: "32px",
									note: "f4"
								},
								{
									text: "-3",
									offset: "50px",
									note: "eb4"
								},
								{
									text: "1",
									offset: "52px",
									note: "c4"
								}
							]
						},
						{
							text: "",
							image: "Ch12_TheoryLinkQuiz_F.png",
							smallAnswerBoxes: true,
							audioPrize: "MusicalPrize 2",
							answers:
							[
								{
									text: "1",
									offset: "-35px",
									note: "f4"
								},
								{
									text: "-3",
									offset: "-30px",
									note: "ab4"
								},
								{
									text: "4",
									offset: "-20px",
									note: "bb4"
								},
								{
									text: "-5",
									offset: "0px",
									note: "b4"
								},
								{
									text: "5",
									offset: "17px",
									note: "c5"
								},
								{
									text: "-7",
									offset: "35px",
									note: "eb5"
								},
								{
									text: "8",
									offset: "37px",
									note: "f5"
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
							text: "-3"
						},
						{
							text: "4"
						},
						{
							text: "-5"
						},
						{
							text: "5"
						},
						{
							text: "-7"
						},
						{
							text: "8"
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
