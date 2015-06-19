require("btt.cc.model");
require("btt.cc.media");
require("ext.youtube-api");

var currentQIdx = 0;

var widget =
{
	ready: function($$)
	{
		var _this = this;
		
		currentQIdx = -1;
		
		$$(".player .audio-player").click(function()
		{
			$$(".actual-question.intro").removeClass("intro");
			$$(".next").removeClass("disabled");
			$$(".score-title").addClass("show-this");

			if($$(".question.active").hasClass("intro") && _this.params.questionIntro2)
			{
				$$(".question.active").html(_this.params.questionIntro2);
			}
		});
		
		if(this.params.audio)
		{
			$$(".next").removeClass("disabled");
		}
		
		$$(".audio .audio-player").click(function()
		{
			$$(".next").removeClass("disabled");
		});
		
		$$(".expand").click(function()
		{
			btt.cc.ui.iframePop.popImg($$(".score img.score-image").attr("src"));
		});
		
		$$(".previous").click(function()
		{
			currentQIdx = Math.max(currentQIdx-1, -1);
			if(currentQIdx == -1)
			{
				phnq.notify.post("content-reset");
			}
			else
			{
				_this.loadQuestion(_this.params.questions[currentQIdx], currentQIdx);
			}
		});
		
		$$(".next").click(function()
		{
			currentQIdx = Math.min(currentQIdx+1, _this.params.questions.length);
			if(currentQIdx == _this.params.questions.length)
			{
				btt.cc.routes.nextPage();
			}
			else
			{
				_this.loadQuestion(_this.params.questions[currentQIdx], currentQIdx);
			}
		});
		
		if(this.params.score)
		{
			if(this.params.score.title)
			{
				$$(".actual-question").addClass("with-title");
			}
		}
		
		if(this.params.video)
		{
			$$(".next").removeClass("disabled");
		}
		
		$$(".did-you-know").click(function()
		{
			$$().addClass("reveal-did-you-know");
			btt.cc.audio.sfx.play("revealPage");
			_this.reLayout();
		});
		
		$$(".did-you-know-underlay .hide-underlay > div").click(function()
		{
			$$().removeClass("reveal-did-you-know");
			btt.cc.audio.sfx.play("revealPage");
			_this.reLayout();
		});
		
		phnq.notify.listen("content-reset", function()
		{
			$$().removeClass("reveal-did-you-know");
			$$(".cards .card").removeClass("correct").removeClass("incorrect");
			$$(".previous").addClass("disabled");
			if(_this.params.video)
			{
				$$(".next").removeClass("disabled");
				$$(".video").html(_this.params.video.code);
			}
			else
			{
				$$(".next").addClass("disabled");
			}
			$$(".actual-question").addClass("intro");
			if(_this.params.score)
			{
				_this.findOne(/audio-player/).setAudioFile(_this.params.score.audio);
				$$(".score img.score-image").attr("src", btt.cc.media.mediaFileUrl(_this.params.score.image1));
			}
			else if(_this.params.audio)
			{
				$(_this.find(/audio-player/)).each(function()
				{
					this.reset();
				});
			}
			$$(".cards").html("");
			
			$$(".question").removeClass("active");
			$$(".question.intro").addClass("active");
			$$(".question.active").html(_this.params.questionIntro);
			
			$$(".selectX").removeClass("show-this");
			$$(".score-title").removeClass("show-this");
			
			_this.reLayout();
		}, this);
		
		$$(".composer img").load(function()
		{
			_this.reLayout();
		});
		
		$(window).resize(function()
		{
			_this.reLayout();
		});
	},
	
	destroy: function()
	{
		phnq.notify.unlistenAll(this);
	},

	reLayout: function()
	{
		var $$ = this.get$$();
		
		$$(".actual-question").css("height", parseFloat($$(".composer").css("height")) - parseFloat($$(".actual-question").css("padding-top")));
		
		if($$(".cards > *").length == 0 && !$$().hasClass("reveal-did-you-know"))
		{
			$$(".questions").css("padding", "140px 0");
		}
		else
		{
			$$(".questions").css("padding", "50px 0");
		}
	},
	
	loadQuestion: function(question, qIdx)
	{
		var $$ = this.get$$();
		var _this = this;
		
		$$(".selectX").addClass("show-this");
		
		if(this.params.score)
		{
			if(question.scoreAudio)
			{
				this.findOne(/audio-player/).setAudioFile(question.scoreAudio);
				this.findOne(/audio-player/).play();
			}
			
			if(this.params.score.image2)
			{
				$$(".score img.score-image").attr("src", btt.cc.media.mediaFileUrl(this.params.score.image2));
			}

			if(question.image)
			{
				$$(".score img.score-image").attr("src", btt.cc.media.mediaFileUrl(question.image));
			}
			
			if(this.params.score.title)
			{
				$$(".actual-question").addClass("with-title");
			}
			else
			{
				$$(".actual-question").removeClass("with-title");
			}
		}
		else if(this.params.video)
		{
			if(question.image)
			{
				if($$(".video > img").length == 1)
				{
					$$(".video > img").attr("src", btt.cc.media.mediaFileUrl(question.image));
				}
				else
				{
					$$(".video").html("<img style='margin-top:10px' src='"+btt.cc.media.mediaFileUrl(question.image)+"'/>");
				}
			}
		}
		
		$$(".previous").removeClass("disabled");
		$$(".next").addClass("disabled");
		
		$$(".actual-question .labels label").removeClass("active");
		
		$$(".actual-question .labels .q"+qIdx).addClass("active");
		
		var numCorrect = question.numCorrect || 1;
		var correctAnswers = question.answers.slice(0, numCorrect);
		
		$$(".selectX label").text(this.i18n("select"+numCorrect));
		
		var buf = [];
		var answers = phnq_core.shuffle(phnq_core.clone(question.answers));
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
		
		this.reLayout();
		
		$$(".cards .card").click(function()
		{
			if($(this).hasClass("correct") || $(this).hasClass("incorrect"))
			{
				return;
			}
			
			btt.cc.audio.sfx.play("select");
			
			var answer = $(this).find(".answer").text();
			
			if(correctAnswers.indexOf(answer) == -1)
			{
				$(this).addClass("incorrect");
				btt.cc.audio.sfx.play("incorrect");
			}
			else
			{
				$(this).addClass("correct");

				if(question.rewardImage)
				{
					if(_this.params.score)
					{
						$$(".score img.score-image").attr("src", btt.cc.media.mediaFileUrl(question.rewardImage));
					}
					else if(_this.params.video)
					{
						$$(".video > img").attr("src", btt.cc.media.mediaFileUrl(question.rewardImage));
					}
				}

				var rewardSfx = question.rewardSfx || "correct";
				btt.cc.audio.sfx.play(rewardSfx);
			}
			
			if($$(".cards .card.correct").length == numCorrect)
			{
				$$(".next").removeClass("disabled");
			}
			
			// btt.cc.model.student.getCurrent(function(student)
			// {
			// 	student.setCurrentActivityAnswer(question.id, answer, answer == correctAnswer);
			// });
		});
		
		// btt.cc.model.student.getCurrent(function(student)
		// {
		// 	student.getCurrentActivityAnswer(qIdx, function(answer)
		// 	{
		// 		if(answer)
		// 		{
		// 			alert(answer);
		// 		}
		// 	});
		// });
		
	}
};
