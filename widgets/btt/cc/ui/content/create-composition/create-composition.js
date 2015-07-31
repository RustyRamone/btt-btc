require("phnq.notify");
require("btt.cc.routes");

var widget =
{
	ready: function($$)
	{
		var _this = this;
		
		this.view = 0;

		btt.cc.model.student.getCurrent(function(student)
		{
			if(student.motif)
			{
				$$(".your-motif > div").html(student.motif);
			}
		});

		$$(".your-motif a").on(btt.cc.main.respondsToTouch?"touchstart":"mousedown", function()
		{
			btt.cc.ui.section.suppressIntroOverlay();
		});
		
		$$(".play").click(function()
		{
			$$().removeClass("show-title");
		});
		
		$$(".previous > span").click(function()
		{
			_this.view --;
			_this.showView();
		});

		$$(".next > span").click(function()
		{
			_this.view ++;
			_this.showView();
		});
		
        $$(".scoreImage").click(function()
        {
            btt.cc.ui.iframePop.popImg(btt.cc.media.mediaFileUrl(_this.params.scoreImage));
        });
		
		$$(".expand > img").click(function()
		{
            btt.cc.ui.iframePop.popImg(btt.cc.media.mediaFileUrl(_this.params.scoreImage));
		});
        
		this.showView();
		
		phnq.notify.listen("content-reset", function()
		{
			$$().addClass("show-title");
			_this.view = 0;
			_this.showView();
		}, this);
		
		$$(".comp-model").click(function()
		{
			btt.cc.ui.iframePop.popPdf(btt.cc.media.mediaFileUrl(_this.params.compModelFile));
		});
		
		$$(".tips-info .noteflight").click(function()
		{
			btt.cc.ui.iframePop.popUrl("https://www.noteflight.com/guide");
		});
		
		$$(".tips-info .finale").click(function()
		{
			btt.cc.ui.iframePop.popPdf(btt.cc.media.mediaFileUrl(_this.params.finaleTipsFile));
		});

		$$(".tips-info .sibelius").click(function()
		{
			btt.cc.ui.iframePop.popPdf(btt.cc.media.mediaFileUrl(_this.params.sibeliusTipsFile));
		});

		if(this.params.downloadStepsTight)
		{
			$$(".download-steps table").addClass("tight");
		}

		$$(".play-pad-reveal > div").click(function()
		{
			$$().addClass("reveal-play-pad");
			$$(".play-pad-reveal").hide();
			btt.cc.audio.sfx.play("revealPage");
			_this.reLayout();
		});

		$$(".play-pad-hide > div").click(function()
		{
			$$().removeClass("reveal-play-pad");
			$$(".play-pad-reveal").show();
			btt.cc.audio.sfx.play("revealPage");
		});

		$$(".play-pad .fields input").keyup(function()
		{
			var text = $(this).val();
			var field = $(this).attr("data-field");

			btt.cc.routes.getCurrentChapterSectionPage(function(ch, sec, pg)
			{
				var key = [ch.id, sec.id, pg.id, field].join("-");

				btt.cc.model.student.getCurrent(function(student)
				{
					student.playPadFields = student.playPadFields || {};
					student.playPadFields[key] = text;
					student.save();
				});
			});
		});

		btt.cc.routes.getCurrentChapterSectionPage(function(ch, sec, pg)
		{
			btt.cc.model.student.getCurrent(function(student)
			{
				student.playPadFields = student.playPadFields || {};

				$$(".play-pad .fields input").each(function()
				{
					var field = $(this).attr("data-field");
					var key = [ch.id, sec.id, pg.id, field].join("-");
					var text = student.playPadFields[key] || "";
					$(this).val(text);
				});
			});
		});

		btt.cc.audio.piano.load(function()
		{
			var downEvt = "mousedown";
			var upEvt = "mouseup";
			if(btt.cc.main.respondsToTouch)
			{
				downEvt = "touchstart";
				upEvt = "touchend";
			}

			$$(".play-pad-keyboard .key > div").on(downEvt, function()
			{
				$(this).addClass("depressed");

				var noteNames = ["c", "d", "e", "f", "g", "a", "b"];
				var noteComps = this.className.split("-");
				var idx = parseInt(noteComps[1], 10);
				var noteName = noteNames[idx % noteNames.length]
				if(noteComps[0] == "black")
				{
					noteName += "#";
				}
				var octave = Math.floor(idx / noteNames.length) + 3;
				var stopper = btt.cc.audio.piano.play(noteName+octave);

				var _this = this;
				var stopNote = function()
				{
					$(_this).removeClass("depressed");
					$(_this).off(upEvt, stopNote);
					$(_this).off("mouseout", stopNote);
					try
					{
						stopper.stop(0.5);
					}
					catch(ex)
					{
						// alert(ex);
					}
				};
				try
				{
					$(this).on(upEvt, stopNote);
					$(this).mouseout(stopNote);
				}
				catch(ex)
				{
					// alert(ex);
				}
			});
		});



		if(this.params.playPad.altKeyboard)
		{
			var buf = [];
			var sounds = [];
			$(this.params.playPad.altKeyboard.pads).each(function()
			{
				sounds.push(this.audio);
				buf.push("<td><img src=\""+btt.cc.media.mediaFileUrl(this.image)+"\" data-audio=\""+this.audio+"\"/></td>");
			});

			$$(".alt-kybd").html("<tr>"+buf.join("")+"</tr>");

			var _this = this;

			var altKeyboardPlayer = new btt.cc.audio.MultiSoundPlayer(sounds);

			console.log("loading...");

			altKeyboardPlayer.load(function()
			{
				console.log("loaded.");

				var downEvt = "mousedown";
				var upEvt = "mouseup";
				if(btt.cc.main.respondsToTouch)
				{
					downEvt = "touchstart";
					upEvt = "touchend";
				}

				$$(".alt-kybd img").on(downEvt, function()
				{
					altKeyboardPlayer.play($(this).data("audio"));
				});
			});
		}
	},

	reLayout: function()
	{
		var $$ = this.get$$();

		var rmHeight = $$(".remainder").height()
		var rmBottom = $$(".remainder").offset().top + rmHeight;
		var dh = $(window).height() - rmBottom;
		$$(".remainder").height(rmHeight + dh);

		var ppHeight = $$(".play-pad").height()
		var ppBottom = $$(".play-pad").offset().top + ppHeight;
		var dh = $(window).height() - ppBottom;
		$$(".play-pad").height(ppHeight + dh);
	},

	destroy: function()
	{
		phnq.notify.unlistenAll(this);
	},
	
	showView: function()
	{
		var $$ = this.get$$();
		
		this.view = Math.max(this.view, -1);
		this.view = Math.min(this.view, 3);
		
		var showTemplatePage = !!(this.params.finaleTemplateFile || this.params.sibeliusTemplateFile);
		var showTipsPage = showTemplatePage;
		
		if(this.view == -1)
		{
			phnq.notify.post("content-reset");
		}
		else if(this.view == 0)
		{
			$$(".instruction label").text(!!this.params.playPad ? "Overview & Play Pad" : "Overview");
			$$(".instruction p").text(this.params.subtitle);

			var kbType = this.params.playPad ? (this.params.playPad.keyboardType || "piano") : "piano";
			$$(".play-pad-keyboard").addClass("keyboard-type-"+kbType);
			
			if(this.params.smallText)
			{
				$$(".instruction p").addClass("small-text");
			}
			
			$$(".expand").show();

			if(this.params.downloadSteps.length > 0)
			{
				$$(".download-steps").show();
			}
			else
			{
				$$(".download-steps").hide();
				$$(".showcase-box").removeClass("span4").addClass("span6").addClass("offset2");
			}

			$$(".showcase-box").show();
			$$(".choose-template").hide();
			$$(".xml-template").hide();
			$$(".tips-info").hide();
			$$(".play-pad-reveal").show();
		}
		else if(this.view == 1 && showTemplatePage)
		{
			$$(".instruction label").text("Choose Your Template");
			$$(".instruction p").text("Select an appropriate notation software below");
			
			$$(".expand").hide();
			$$(".download-steps").show();
			$$(".showcase-box").hide();
			$$(".choose-template").show();
			$$(".xml-template").show();
			$$(".tips-info").hide();
			$$(".play-pad-reveal").hide();
		}
		else if(this.view == 2 && showTipsPage)
		{
			$$(".instruction label").text("Helpful Tips & Information");
			$$(".instruction p").text("");
			
			$$(".expand").hide();
			$$(".download-steps").hide();
			$$(".showcase-box").hide();
			$$(".choose-template").hide();
			$$(".xml-template").hide();
			$$(".tips-info").show();
			$$(".play-pad-reveal").hide();
		}
		else
		{
			btt.cc.routes.nextPage();
		}
	}
};
