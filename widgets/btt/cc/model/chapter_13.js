btt.cc.model.chapter.chapters.push(
{
	id: "13",
	title: "Off to the Movies!",
	compositionFocus: "Working With Percussion, Movie Music",
	theoryLink: "Cut Time",
	sections:
	[
		{
			id: "lessons",
			title: "Lessons",
			introOverlay:
			{
				title: "Lesson",
				synopsis: "Lesson Activities",
				synopsisExtra: "<ol><li data-target='intro'>Introduction</li><li data-target='the-importance-of-music-in-movies'>The Importance of Music in Movies</li><li data-target='matching-music-to-a-scene'>Matching Music to a Scene</li><li data-target='types-of-music-used-in-movies'>Different Types of Movie Music</li><li data-target='film-scoring-with-percussion'>Focus on Film Scoring: Using Percussion</li><li data-target='where-it-all-started'>Silent Movies: Where It All Started</li><li data-target='common-time-cut-time'>Theory Link</li></ol>"
			},
			pages:
			[
				{
					type: "btt.cc.ui.content.title",
					id: "intro",
					breadcrumb:"Introduction",
					title: "Chapter 13:",
					subtitle:"Off to the Movies!",
					synopsis:"We’ll look at movie music in this lesson and how it helps to tell a story. There are different ways music can be used in film, but we’ll focus on film scoring. In Chapter 11, you created music to go with narrated prose, a very similar process. Now, you’ll learn how to add a percussion part to complete a cinematic score that punctuates the action in a fun cartoon movie clip.",
					audioFile: "Ch13Intro 1"
				},
				{
					type: "btt.cc.ui.content.composition-model",
					id: "the-importance-of-music-in-movies",
					title: "The Importance of Music in Movies",
					videos:
					[
						{
							title: "View a movie three (3) different ways.",
							text: "Music creates an emotional response in the moviegoer and its presence (or absence) in a scene helps to set the tone and tell the story.",
							code: '<iframe width="640" height="360" src="http://www.youtube.com/embed/9nL2Q9-prYQ?rel=0" frameborder="0" allowfullscreen></iframe>'
						}
					]
				},
				{
					type: "btt.cc.ui.content.line-connect",
					id: "matching-music-to-a-scene",
					title: "Matching Music to a Scene",
					subtitle: "Music helps to establish the mood and tone of a scene. A well-matched score has the power to influence the perception of the viewer and guide them through the story line.",
					introOverlayText: "How would you match these scenes to music?",
					srcThingName: "notes box",
					destThingName: "definition",
					definitions:
					[
						{
							expression:
							{
								audio: "Ch13_Olympic",
								text: "Scene 1"
							},
							meaning:
							{
								text: "Crowd proudly cheering Olympians entering a stadium."
							}
						},
						{
							expression:
							{
								audio: "Ch13_LastDayOfSchool2",
								text: "Scene 2"
							},
							meaning:
							{
								text: "Last day of school before summer."
							}
						},
						{
							expression:
							{
								audio: "Ch13_SummerRomance",
								text: "Scene 3"
							},
							meaning:
							{
								text: "Summer Romance"
							}
						},
						{
							expression:
							{
								audio: "Ch13_DirtRoad",
								text: "Scene 4"
							},
							meaning:
							{
								text: "On a dirt road in a pick up truck."
							}
						}
					]
				},
				{
					type: "btt.cc.ui.content.staff-player",
					id: "types-of-music-used-in-movies",
					title: "Types of Music Used in Movies",
					subtitle: "There are many different ways music is used in film.",
					cards:
					[
						{
							title: "",
							text: "Look at three (3) different ways music is used in movies.",
							scoreImage: "Ch13_Types_FilmScoring.jpg",
							isIntroCard: true,
							largePlayer: true
						},
						{
							title: "Film Scoring",
							text: "This music is scored to synchronize with specific events/action in a movie. A good example would be Pirates of the Caribbean.",
							scoreImage: "Ch13_Types_FilmScoring.jpg",
							audioFile: "Ch13TypesofMusicFilmScoring",
							largePlayer: true
						},
						{
							title: "Songs",
							text: "Songs are used to portray the theme of the story such as Hakuna Matata in the Lion King. Listen to this one and imagine the theme.",
							scoreImage: "Ch13_Types_Songs.jpg",
							audioFile: "Ch13Types_Songs",
							largePlayer: true
						},
						{
							title: "Ambient Music",
							text: "Ambient music, usually a familiar piece, is used to support the tone & feel of a scene. For example Also Sprach Zarathustra in the movie 2001: A Space Odyssey.",
							scoreImage: "Ch13_Types_Ambient.jpg",
							audioFile: "Ch13_TypesofMusic_3Ambient",
							largePlayer: true
						}
					]
				},
				{
					type: "btt.cc.ui.content.staff-player",
					id: "film-scoring-with-percussion",
					title: "Film Scoring with Percussion",
					subtitle: "Percussion parts help to establish pace & rhythm and add punctuation and color to your music",
					cards:
					[
						{
							title: "",
							text: "View four main percussion instruments used in film scoring.",
							scoreImage: "Ch13_BassDrum.png",
							isIntroCard: true,
							largePlayer: true
						},
						{
							title: "The Bass Drum",
							text: "The bass drum has a very deep sound with and extensive dynamic range from very loud (fff) to very soft (ppp).",
							scoreImage: "Ch13_BassDrum.png",
							audioFile: "Ch 13 PercussionBD",
							largePlayer: true
						},
						{
							title: "The Snare Drum",
							text: "The snare drum has a high register treble sound, which includes a sizzle provided by the snare device.",
							scoreImage: "Ch13_SnDr.png",
							audioFile: "Ch 13 PercussionSD",
							largePlayer: true
						},
						{
							title: "The Cymbal",
							text: "The cymbal family includes the powerful crash cymbal and the delicate suspended cymbal. Both can be used to mark time or add color.",
							scoreImage: "Ch13_SusCrCymb.png",
							audioFile: "Ch 13 PercussionCym 1",
							largePlayer: true
						},
						{
							title: "Tympani",
							text: "Also known as kettledrums, tympani are pitched drums of varying size assembled into groups of 2, 3 or 4.",
							scoreImage: "Ch13_Tympani.png",
							audioFile: "Ch 13 PercussionTymp",
							largePlayer: true
						}
					]
				},
				{
					type: "btt.cc.ui.content.multiple-choice",
					id: "question-1",
					title: "Question 1",
					questions:
					[
						{
							id: "question",
							title: "",
							image: "BassDrumQuiz.png",
							audioFile: "BassDrumQuiz",
							text: "Identify this instrument.",
							smallCards: true,
							correctAnswers: ["Bass Drum"],
							incorrectAnswers: ["Tympani", "Crash Cymbal", "Suspended Cymbal", "Snare Drum"]
						},
						{
							id: "question",
							title: "",
							image: "TympaniQuiz.png",
							audioFile: "TympaniQuiz",
							text: "Identify this instrument.",
							smallCards: true,
							correctAnswers: ["Tympani"],
							incorrectAnswers: ["Bass Drum", "Crash Cymbal", "Suspended Cymbal", "Snare Drum"]
						},
						{
							id: "question",
							title: "",
							image: "CrashCymQuiz.png",
							audioFile: "CrashCymQuiz",
							text: "Identify this instrument.",
							smallCards: true,
							correctAnswers: ["Crash Cymbal"],
							incorrectAnswers: ["Tympani", "Bass Drum", "Suspended Cymbal", "Snare Drum"]
						},
						{
							id: "question",
							title: "",
							image: "SusCymbalQuiz.png",
							audioFile: "SusCymbalQuiz",
							text: "Identify this instrument.",
							smallCards: true,
							correctAnswers: ["Suspended Cymbal"],
							incorrectAnswers: ["Tympani", "Crash Cymbal", "Bass Drum", "Snare Drum"]
						},
						{
							id: "question",
							title: "",
							image: "SnareDrumQuiz.png",
							audioFile: "SnareDrumQuiz",
							text: "Identify this instrument.",
							smallCards: true,
							correctAnswers: ["Snare Drum"],
							incorrectAnswers: ["Tympani", "Crash Cymbal", "Suspended Cymbal", "Bass Drum"]
						}
					]
				},
				{
					type: "btt.cc.ui.content.composer-music",
					id: "where-it-all-started",
					title: "Where It All Started",
					composerName: "",
					composerYears: "",
					composerImage: "Ch13_DidYouKnowImage1.png",
					video:
					{
						code: '<iframe style="margin-top:10px" width="391" height="220" src="//www.youtube.com/embed/6CZTEdl9H58?rel=0&autoplay=1" frameborder="0" allowfullscreen></iframe>'
					},
					questionIntro: "<span>Listen:</span> To where Movie Music all started in silent films.",
					questions:
					[
						{
							id: "question1",
							question: "Why was music needed to accompany silent films?",
							answers: ["To Help Tell the Story", "For Singing Scenes", "For Dancing Scenes", "To Break the Silence"],
							smallCards: false
						},
						{
							id: "question2",
							question: "Where was the first public showing of a moving picture in 1895?",
							answers: ["Paris", "New York", "Pittsburgh", "Hollywood"],
							smallCards: false
						},
						{
							id: "question3",
							question: "How was music added to silent movies?",
							answers: ["Live Players", "A Phonograph", "Recordings on Film", "Singers"],
							smallCards: false
						},
						{
							id: "question4",
							question: "How did the musicians know what to play?",
							answers: ["Cue Sheets", "They Guessed", "Read a Book", "Followed a Recording"],
							smallCards: false
						},
						{
							id: "question5",
							question: "How did the introduction of talkies affect the movie music industry?",
							answers: ["Film composers began to emerge", "It had no effect", "Live Musicians were hired", "Music videos were created"],
							smallCards: false
						}
					],
					didYouKnow:
					{
						title: "Notes on Early Silent Movies",
						facts:
						[
							"The years between 1900 and 1927 saw the growth of the silent film as a form of entertainment as newly constructed movie theatres popped up both in Europe and North America. These motion pictures had moving images but no dialogue or other sound.",
							"They were however, anything but silent. They were accompanied by live music to help tell the story. Every theatre would have either a piano player or an orchestra to accompany the action portrayed in each scene.",
							"Eventually player pianos with automated piano rolls began to appear in theatres.  After a time, these developed into more complex instruments called Fotoplayers complete with percussion and special effects like whistles and horns.",
							"The silent film era ended with the development of recorded sound for moving pictures in 1927. These new types of movies were referred to as talkies."
						],
						legendItems:
						[
							{color:"#fd8023", text:"The Era of the Silent Film 1895 - 1927"},
							{redDot:true, text:"First public movie presentation in Paris 1895"},
							{orangeDot:true, text:"First public movie presentation in New York 1896"},
							{color:"#3d533c", text:"Development of the America Fotoplayer 1912-1925"},
							{whiteDot:true, text:"Introduction of Talking Movies 1927"},
							{color:"#c2123c", text:"Film Composers & recorded sound tracks began to emerge 1930s"}
						],
						legendItemsPerLine: 2,
						timelineImage: "Timeline-Chapter13SilentMovies.png"
					}
				},
				{
					type: "btt.cc.ui.content.composition-model",
					id: "common-time-and-cut-time",
					title: "Common Time and Cut Time",
					videos:
					[
						{
							title: "Common Time and Cut Time",
							text: "Learn the difference between Cut Time and Common Time",
							poster: "Ch13_PosterimageThryLnk.jpg",
							code: '<iframe width="640" height="360" src="http://www.youtube.com/embed/jy5qITssEtU?rel=0" frameborder="0" allowfullscreen></iframe>'
						}
					]
				},
				{
					type: "btt.cc.ui.content.line-connect",
					id: "common-time-cut-time",
					title: "Common Time & Cut Time",
					subtitle: "",
					srcThingName: "number",
					destThingName: "description",
					definitions:
					[
						{
							expression:
							{
								text: "4/4 time"
							},
							meaning:
							{
								image: "FourFourTime.png"
							}
						},
						{
							expression:
							{
								text: "3/4 time"
							},
							meaning:
							{
								image: "ThreeFourTime.png"
							}
						},
						{
							expression:
							{
								text: "6/8 time"
							},
							meaning:
							{
								image: "SixEightTime.png"
							}
						},
						{
							expression:
							{
								text: "Cut time"
							},
							meaning:
							{
								image: "TwoTwoTime.png"
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
				synopsis: "See how to write a percussion part for a film score!"
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
							text: "View this movie to see how you can write percussion music to support the action in a movie.",
							poster: "Ch13_CompModPoster.jpg",
							code: '<iframe width="640" height="360" src="http://www.youtube.com/embed/YzID3X8BdMM?rel=0" frameborder="0" allowfullscreen></iframe>'
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
				synopsis: "Now use your favourite notation software to create your film score."
			},
			pages:
			[
				{
					type: "btt.cc.ui.content.create-composition",
					id: "create-composition",
					titleMain: "Your Composition Activity",
					subtitle: "My Film Score",
                    showMotif: false,
                    scoreImage: "Ch13_TipsGetCircusMus.png",
					downloadSteps:
					[
						"Open the Circus Music in notation software.",
						"<em style=\"color:#e22f5b\">Mark time</em> with bass drum.",
						"Mark time or <em style=\"color:#e22f5b\">match melody</em> with snare drum or cymbal.",
						"Add other colorful percussion parts or a tympani part. <em style=\"color:#e22f5b\">(Punctuate Action)</em>",
						"If possible, import movie into notation software. Match tempo & tweak to fit action (120-126 bpm) <em style=\"color:#e22f5b\">(Finale or Sibelius Users)</em>",
						"Export your music as an audio file."
					],
					finaleTemplateFile: "Ch13_CompTemplate2.mus",
					sibeliusTemplateFile: "Ch13_CompTemplate2.sib",
					compModelFile: "pdf/Chapt13_CompModel[2]",
					finaleTipsFile: "pdf/Ch13FinaleTips",
					sibeliusTipsFile: "pdf/Ch13SibeliusTips",
					playPad:
					{
						description: "<em style='color:#e22f5b'>Working with Percussion:</em> Come up with ideas for percussion parts in your film score using these instruments.",
						// image: "Ch-9-PlayPadImage.png",
						// audio: "PlayPadCh9",
						fields:
						[
							{label: "AA", placeholder: "Opening Line (A)"},
							{label: "B", placeholder: "Contrasting line (B)"}
						],
						labels:
						{
							style: "circle",
							white: {"3":"1", "6":"-5", "7":"5", "10":"8"},
							black: {"4":"-3", "5":"4", "8":"-7"}
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
					evaluationRubricFile: "pdf/CCMobileCh13_Rubric",
					reflections:
					[
						"How did you use the snare drum: to mark time, imitate the melody or both?",
						"What instruments did you use to add color?",
						"What actions did you punctuate?"
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
							"Double all (or some) of the piano part with another keyboard or mallet instrument. Or/",
							"Orchestrate the piano part for other instruments. Or/",
							"Use a video of your own and create a film score."
						],
						sequencing:
						[
							"Import your audio file",
							"Open the movie and adjust the tempo to align to the action",
                            "Record extra sounds and percussion using an audio and/or MIDI tracks"
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
								code: '<iframe width="640" height="360" src="http://www.youtube.com/embed/mI7Vm4q0tWI?rel=0&autoplay=1" frameborder="0" allowfullscreen></iframe>'
							},
							{
								type: "audio",
								title: "Hear Model",
								audioFile: "Ch12ExpAudioHwkbls"
							}
						]
					}
				}
			]
		}
	]
});
