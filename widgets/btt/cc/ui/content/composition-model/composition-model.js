require("btt.cc.routes");
require("ext.youtube-api");

var widget =
{
	ready: function($$)
	{
		var _this = this;
		
		$$(".card").first().addClass("active");
		
		this.scrollToActiveCard();
		
		$$(".previous > span").click(function()
		{
			if($$(".card").first().hasClass("active"))
			{
				btt.cc.routes.previousPage();
			}
			else
			{
				_this.navigateCards(-1);
			}
		});

		$$(".next > span").click(function()
		{
			if($$(".card").last().hasClass("active"))
			{
				btt.cc.routes.nextPage();
			}
			else
			{
				_this.navigateCards(1);
			}
		});
	},
	
	navigateCards: function(amt)
	{
		var $$ = this.get$$();

		var cardElmnts = $$(".card");
		for(var i=0; i<cardElmnts.length; i++)
		{
			var cardElmnt = cardElmnts[i];
			if($(cardElmnt).hasClass("active"))
			{
				var idx = Math.min(Math.max(0, i + amt), cardElmnts.length-1);
				if(idx != i)
				{
					$(cardElmnt).removeClass("active");
					$(cardElmnts[idx]).addClass("active");
					this.scrollToActiveCard();
				}
				break;
			}
		}
	},
	
	updateVideoForActiveCard: function()
	{
		var _this = this;
		
		var $$ = this.get$$();
		
		$$(".videos .video .poster > img").removeClass("loaded");
		
		var cardElmnts = $$(".card");
		for(var i=0; i<cardElmnts.length; i++)
		{
			var cardElmnt = cardElmnts[i];
			if($(cardElmnt).hasClass("active"))
			{
				if(this.params.videos[i].poster)
				{
					$$(".videos .video .poster").css("background-image", "url("+btt.cc.media.mediaFileUrl(this.params.videos[i].poster)+")");
					$$(".videos .video .poster").removeClass("hide-me");
				}
				else if(this.params.videos[i].posterText)
				{
					$$(".poster > div").html(this.params.videos[i].posterText);
				}
				var playerId = "player_"+new Date().getTime();
				$$(".videos .video .player").css("visibility", "hidden");
				$$(".videos .video .player").html(this.params.videos[i].code);
				$$(".videos .video .player > iframe").attr("id", playerId);
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
								$$(".videos .video .poster > img").addClass("loaded");
								$$(".videos .video .poster").click(function()
								{
									$$(".videos .video .player").css("visibility", "visible");
									$(this).addClass("hide-me");
									player.playVideo();
								});
							}
						}
					});
				});
				
				// In case the Youtube API does not work do the following workaround...
				setTimeout(function()
				{
					if(!isReady)
					{
						$$(".videos .video .poster > img").addClass("loaded");
						$$(".videos .video .poster").click(function()
						{
							if(!isReady)
							{
								var code = _this.params.videos[i].code.replace("rel=0", "rel=0&autoplay=1")
								$$(".videos .video .player").html(code);
								$$(".videos .video .player").css("visibility", "visible");
								$(this).addClass("hide-me");
							}
						});
					}
				}, 2000);
				break;
			}
		}
	},
	
	scrollToActiveCard: function()
	{
		var $$ = this.get$$();
		var activeCardTop = $$(".card.active").position().top;
		$$(".cards").css({top:-activeCardTop});
		this.updateVideoForActiveCard();
	}
};
