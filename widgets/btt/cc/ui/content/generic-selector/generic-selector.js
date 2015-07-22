require("ext.vexflow");
require("btt.cc.media");
// require("phnq.notify");

var widget =
{
	ready: function($$)
	{
		var _this = this;
		
		this.currentQuestion = 0;
		this.loadQuestion();
		
		$$(".next-button").click(function()
		{
			_this.currentQuestion++;
			if(_this.currentQuestion < _this.params.questions.length)
			{
				_this.loadQuestion();
			}
			else
			{
				btt.cc.routes.nextPage();
			}
		});

		$$(".back-button").click(function()
		{
			_this.currentQuestion--;
			if(_this.currentQuestion < 0)
			{
				phnq.notify.post("content-reset");
			}
			else
			{
				_this.loadQuestion();
			}
		});
		
		$$(".intro-overlay").click(function()
		{
			$$().addClass("hide-intro-overlay");
			btt.cc.audio.sfx.play("revealPage");
		});
		
		$$(".go-back").click(function()
		{
			$$().removeClass("hide-intro-overlay");
			btt.cc.audio.sfx.play("revealPage");
		});
		
		phnq.notify.listen("content-reset", function()
		{
			$$().removeClass("hide-intro-overlay");
			$$(".choice-buttons > div").removeClass("used").removeClass("correct").removeClass("incorrect").addClass("unused");
			$$(".boxes > div:not(.original)").removeClass("answered").html("?");
			_this.currentQuestion = 0;
			_this.loadQuestion();
		}, this);
		
		btt.cc.audio.piano.load(function()
		{
			// $$().removeClass("loading-piano");
		});
		
		var incorrectAnswers = 0;
		
		$$(".choice-buttons > div").click(function()
		{
			if($(this).hasClass("unused"))
			{
				if($$(".boxes > div:contains(?):first").length > 0)
				{
					var i = $$(".boxes > div.answered > div").length;
					
					var correct = $(this).text() == _this.params.questions[_this.currentQuestion].answers[i].text;

					if(correct)
					{
						$$(".boxes > div:contains(?):first").addClass("answered");

						if($$(".boxes .answer-box:contains(?):first").length > 0)
						{
							$$(".boxes .answer-box:contains(?):first").html("<div>"+$(this).text()+"</div>");
						}
						else
						{
							$$(".boxes > div:contains(?):first").html("<div>"+$(this).text()+"</div>");
						}
						
						if(!_this.params.reuseChoices)
						{
							$(this).removeClass("unused");
							$(this).addClass("used")
						}
						
						$(this).addClass("correct");
						
						if(_this.params.questions[_this.currentQuestion].answers[i].note)
							btt.cc.audio.piano.play(_this.params.questions[_this.currentQuestion].answers[i].note, 0, 2);
						else
							btt.cc.audio.sfx.play("correct");
					}
					else
					{
						$(this).addClass("incorrect");
						btt.cc.audio.sfx.play("incorrect");
						incorrectAnswers ++;
					}
				}
			
				if($$(".boxes > div:contains(?):first").length == 0)
				{
					$$(".next-button").removeClass("disabled");
					
					var audioPrize = _this.params.questions[_this.currentQuestion].audioPrize;
					if(audioPrize)
					{
						new btt.cc.media.AudioPlayer(audioPrize).play();
					}
					
					// var isCorrect = true;
					// var choices = [];
					// 
					// $$(".choice-buttons > canvas.used").each(function()
					// {
					// 	choices.push($(this).attr("data-groups"));
					// 	isCorrect = isCorrect && $(this).hasClass("correct");
					// });

					// btt.cc.model.student.getCurrent(function(student)
					// {
					// 	student.setCurrentActivityAnswer(0, choices, isCorrect);
					// });
				}
			}
		});
	},
	
	loadQuestion: function()
	{
		var $$ = this.get$$();
		
		btt.cc.media.stopAllAudio();
		$$(".next-button").addClass("disabled");
		$$(".back-button").addClass("disabled");

		if(this.currentQuestion > 0)
		{
			$$(".back-button").removeClass("disabled");
		}

		var question = this.params.questions[this.currentQuestion];
		var qLayout = question.vertical ? "question-vertical" : "question-horizontal";
		if(question.imageAudio)
		{
			qLayout = "image-audio";
		}

		$$(".question").html(this.renderPartial(qLayout, question));

		var wphSel = "#"+$$().attr("id")+" .wph";
		phnq_widgets.scan({wphSelector:wphSel});

		if(question.hideChoices)
		{
			$$(".choice-buttons").hide();
			$$(".next-button").removeClass("disabled");
		}
		else
		{
			$$(".choice-buttons").show();
		}

	},

	destroy: function()
	{
		phnq.notify.unlistenAll(this);
	}
};
