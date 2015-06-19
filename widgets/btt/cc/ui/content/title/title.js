require("btt.cc.routes");
require("btt.cc.media");

var widget =
{
	ready: function($$)
	{
		var _this = this;
		
		while($$(".synopsisText").outerHeight() > 180)
		{
			var fontSize = parseFloat($$(".synopsisText").css("font-size"));
			fontSize -= 1;
			$$(".synopsisText").css("font-size", ""+fontSize+"px");

			var lineHeight = parseFloat($$(".synopsisText").css("line-height"));
			lineHeight -= 1;
			$$(".synopsisText").css("line-height", ""+lineHeight+"px");
		}
		
		$$(".next").click(function()
		{
			btt.cc.routes.nextPage();
		});
		
		phnq.notify.listen("subtitle-overlay-dismissed", function()
		{
			_this.findOne(/audio-player/).play();
		}, this);
	},

	destroy: function()
	{
		phnq.notify.unlistenAll(this);
	}
};
