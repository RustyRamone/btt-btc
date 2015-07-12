require("ext.youtube-api");

var widget =
{
	ready: function($$)
	{
		var _this = this;

		if(this.params.video)
		{
			var video = this.params.video;

			var playerId = "player_"+new Date().getTime();
			$$(".player").attr("id", playerId);

			ext.youtube_api.onYouTubeApiReady(function()
			{
				player = new YT.Player(playerId,
				{
					height: video.height,
					width: video.width,
					videoId: video.id,
					events:
					{
						'onReady': function()
						{
							$$(".video-container .poster").click(function()
							{
								$$(".video-container").addClass("activated");
								player.playVideo();
								if(video.volume)
									player.setVolume(video.volume);
							});
						},
						'onStateChange': function()
						{

						}
					}
				});
			});
		}
		
		var currentQIdx = 0;

		var question = phnq_core.clone(this.params.questions[currentQIdx]);

		if(question.audioFile)
		{
			question.autoPlayAudio = false;
		}

		this.loadQuestion(question);
		
		$$(".previous > span").click(function()
		{
			currentQIdx = Math.max(currentQIdx-1, -1);
			if(currentQIdx == -1)
			{
				btt.cc.routes.previousPage();
			}
			else
			{
				_this.loadQuestion(_this.params.questions[currentQIdx]);
			}
		});
		
		$$(".next > span").click(function()
		{
			currentQIdx = Math.min(currentQIdx+1, _this.params.questions.length);
			if(currentQIdx == _this.params.questions.length)
			{
				btt.cc.routes.nextPage();
			}
			else
			{
				_this.loadQuestion(_this.params.questions[currentQIdx]);
			}
		});
		
		phnq.notify.listen("content-reset", function()
		{
			$$(".cards .card").removeClass("correct").removeClass("incorrect");
			$$(".next").addClass("disabled");
		}, this);
	},
	
	loadQuestion: function(question)
	{
		var _this = this;

		var $$ = this.get$$();
		
		$$(".question h3").text(question.title);
		$$(".question p").text(question.text);
		$$(".question label").text(this.i18n("select"+question.correctAnswers.length));
		
		if(question.staff)
		{
			$$(".staff-container").show();
			var staffWidget = this.findOne("btt.cc.notation.staff");
			staffWidget.applyParams(question.staff.staffParams);
			staffWidget.setData(question.staff.noteData);
			staffWidget.play();
		}
		else
		{
			$$(".staff-container").hide();
		}

		if(question.image)
		{
			$$(".image-container > img").attr("src", btt.cc.media.mediaFileUrl(question.image));
			$$(".image-container").show();
		}
		else
		{
			$$(".image-container").hide();
		}

		if(this.params.imageReveal)
		{
			$$(".image-reveal-container").show();

			if(question.imageRevealSideImage)
			{
			$$(".image-reveal-container img.sideImage").attr("src", btt.cc.media.mediaFileUrl(question.imageRevealSideImage));
			$$(".image-reveal-container img.sideImage").show();
			}
		}
		else
		{
			$$(".image-reveal-container img.sideImage").hide();
		}

		if(question.audioFile)
		{
			$$(".audio-container").show();
			var audioPlayer = this.findOne(/audio-player/);
			audioPlayer.setAudioFile(question.audioFile);

			if(question.autoPlayAudio == undefined || question.autoPlayAudio)
			{
				audioPlayer.play();
			}
		}
		else
		{
			$$(".audio-container").hide();
		}

		$$(".next > span").addClass("disabled");
		
		var buf = [];
		var answers = phnq_core.shuffle(question.correctAnswers.concat(question.incorrectAnswers));
		for(var i=0; i<answers.length; i++)
		{
			buf.push(this.renderPartial("card", {text:answers[i]}));
		}
		
		if(question.smallCards)
		{
			$$(".cards").addClass("small");
		}
		else
		{
			$$(".cards").removeClass("small");
		}
		
		$$(".cards").html(buf.join());
		
		$$(".cards .card").click(function()
		{
			if($(this).hasClass("correct") || $(this).hasClass("incorrect"))
			{
				return;
			}
			
			btt.cc.audio.sfx.play("select");
			
			var answer = $(this).find(".answer").text();
			
			if(question.correctAnswers.indexOf(answer) != -1)
			{
				$(this).addClass("correct");

				btt.cc.audio.sfx.play("correct");

				if(_this.params.imageReveal)
				{
					var imageReveal = _this.findOne(/image-reveal/);
					imageReveal.hideRandomTile();
				}
				
				if(question.rewardImage)
				{
					$$(".image-container > img").attr("src", btt.cc.media.mediaFileUrl(question.rewardImage));
				}
			}
			else
			{
				$(this).addClass("incorrect");
				btt.cc.audio.sfx.play("incorrect");
			}
			
			if($$(".cards .correct").length == question.correctAnswers.length)
			{
				$$(".next > span").removeClass("disabled");
				
				btt.cc.model.student.getCurrent(function(student)
				{
					var answers = [];
					
					$$(".cards .correct").each(function()
					{
						answers.push($(this).find(".answer").text());
					});
					
					$$(".cards .incorrect").each(function()
					{
						answers.push($(this).find(".answer").text());
					});
					
					student.setCurrentActivityAnswer(question.id, answers, $$(".cards .incorrect").length == 0);
				});
			}
		});
	}
};
