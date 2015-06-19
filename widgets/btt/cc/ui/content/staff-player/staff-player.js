require("phnq.notify");
require("btt.cc.notation.staff");
require("btt.cc.routes");
require("ext.youtube-api");

var widget =
{
	ready: function($$)
	{
		var _this = this;
		
		$$(".card").first().addClass("active");
		
		this.scrollToActiveCard();
		
		$$(".camera").click(function()
		{
			$$().removeClass("show-title");
			
			if($$(".card.active").attr("data-is-intro-card") == "true")
			{
				_this.navigateCards(1);
			}
			
			if($$(".player > .staff:visible").length > 0)
			{
				var staffWidget = _this.findOne("btt.cc.notation.staff");
				setTimeout(function()
				{
					staffWidget.play();
				}, 500);
			}
			else if($$(".player > .static-image-audio:visible").length > 0)
			{
				var audioFile = $$(".player > .static-image-audio").attr("data-audio-file");
				_this.findOne(/audio-player/).setAudioFile(audioFile);
				_this.findOne(/audio-player/).play();
			}
			
			if(_this.playVideo)
			{
				_this.playVideo();
			}
		});
		
		btt.cc.main.moveModals($$);
		
		$$("img.expand").click(function()
		{
			$(".staff-player-tips-pop").modal();
		});
		
		$$().addClass("loading-piano");
		
		btt.cc.audio.piano.load(function()
		{
			$$().removeClass("loading-piano");
		});

		$$(".previous > span").click(function()
		{
			_this.navigateCards(-1);
		});

		$$(".next > span").click(function()
		{
			_this.navigateCards(1);
		});
		
		phnq.notify.listen("content-reset", function()
		{
			$$().addClass("show-title");
			$$(".card").removeClass("active");
			$$(".card").first().addClass("active");
			_this.scrollToActiveCard();
			btt.cc.media.stopAllAudio();
		}, this);
		
		var wphSel = "#"+$$().attr("id")+" .staff > .wph";
		phnq_widgets.scan({wphSelector:wphSel});
	},

	destroy: function()
	{
		phnq.notify.unlistenAll(this);
	},
	
	navigateCards: function(amt)
	{
		var $$ = this.get$$();
		
		btt.cc.media.stopAllAudio();
		
		var cardElmnts = $$(".card");
		for(var i=0; i<cardElmnts.length; i++)
		{
			var cardElmnt = cardElmnts[i];
			if($(cardElmnt).hasClass("active"))
			{
				var idx = Math.min(Math.max(-1, i + amt), cardElmnts.length);
				
				if(idx == -1)
				{
					phnq.notify.post("content-reset");
				}
				else if(idx == cardElmnts.length)
				{
					btt.cc.routes.nextPage();
				}
				else if(idx != i)
				{
					$(cardElmnt).removeClass("active");
					$(cardElmnts[idx]).addClass("active");
					
					if($$(".card.active").attr("data-is-intro-card") == "true")
					{
						phnq.notify.post("content-reset");
					}
					else
					{
						this.scrollToActiveCard();
					}
				}
				break;
			}
		}
	},
	
	playVideo: null,
	
	updateStaffForActiveCard: function()
	{
		var $$ = this.get$$();
		
		var _this = this;
		
		_this.playVideo = null;
		
		var cardElmnts = $$(".card");
		for(var i=0; i<cardElmnts.length; i++)
		{
			var cardElmnt = cardElmnts[i];
			if($(cardElmnt).hasClass("active"))
			{
				var cardData = this.params.cards[i];
				
				$$(".player > .staff").hide();
				$$(".player > .static-image-audio").hide();
				$$(".player > .video").hide();

				if(cardData.showTip)
				{
					$$().removeClass("hide-tip");
				}
				else
				{
					$$().addClass("hide-tip");
				}
                
                if(cardData.largePlayer)
                {
                    $$(".player").addClass("large");
                    $$(".camera").addClass("large");
                }
                else
                {
                    $$(".player").removeClass("large");
                    $$(".camera").removeClass("large");
                }
				
				$$(".score-title").html(cardData.scoreTitle || "");
				
				if(cardData.noteData)
				{
					$$(".player > .staff").show();

					var staffWidget = this.findOne("btt.cc.notation.staff");
					staffWidget.applyParams(cardData.staffParams);
					staffWidget.setData(cardData.noteData);
					
					if(!$$().hasClass("show-title"))
					{
						staffWidget.stop();
						setTimeout(function()
						{
							staffWidget.play();
						}, 500);
					}
				}
				else if(cardData.scoreImage)
				{
					$$(".player > .static-image-audio").show();
					if(cardData.width)
					{
						$$(".player > .static-image-audio img.image").css("width", cardData.width);
					}
					else
					{
						$$(".player > .static-image-audio img.image").css("width", "");
					}
					$$(".player > .static-image-audio img.image").attr("src", btt.cc.media.mediaFileUrl(cardData.scoreImage));
					$$(".player > .static-image-audio").attr("data-audio-file", cardData.audioFile);
					if(!$$().hasClass("show-title") && cardData.audioFile)
					{
						_this.findOne(/audio-player/).setAudioFile(cardData.audioFile);
						_this.findOne(/audio-player/).play();
					}

					if(cardData.audioFile)
					{
						$$(".audio-player").removeClass("hideme");
					}
					else
					{
						$$(".audio-player").addClass("hideme");
					}
				}
				else if(cardData.video)
				{
					$$(".player > .video").show();
					$$(".player > .video").html(cardData.video.code);
					
					var playerId = "player_"+new Date().getTime();
					$$(".player > .video > iframe").attr("id", playerId);
					var isReady = false;
					ext.youtube_api.onYouTubeApiReady(function()
					{
						var player = new YT.Player(playerId,
						{
							events:
							{
								onReady: function()
								{
									isReady = true;
									player.playVideo();
								
									// _this.playVideo = function()
									// {
									// 	player.playVideo();
									// };
								}
							}
						});
					});
					
				}
				break;
			}
		}
	},
	
	scrollToActiveCard: function()
	{
		var $$ = this.get$$();
		var activeCardTop = $$(".card.active").position().top;
		
		if(Modernizr.csstransforms)
		{
			$$(".cards").css({transform:"translateY("+(-activeCardTop)+"px)"});
		}
		else
		{
			$$(".cards").css({top:-activeCardTop});
		}
		
		this.updateStaffForActiveCard();
	}
};
