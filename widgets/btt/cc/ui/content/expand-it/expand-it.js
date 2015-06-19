var widget =
{
	ready: function($$)
	{
		var _this = this;
		
		$$(".tip-image-link").click(function()
		{
			var imgUrl = btt.cc.media.mediaFileUrl($(this).attr("data-image-file"));
			btt.cc.ui.iframePop.popImg(imgUrl);
		});
		
		$$(".tip-video-link").click(function()
		{
			var link = $(this).attr("data-link");
			var type = link.split("-")[0];
			var idx = parseFloat(link.split("-")[1]);
			
			var code;
			if(type == "seq")
			{
				code = _this.params.links.sequencing[idx].code;
			}
			else if(type == "note")
			{
				code = _this.params.links.notation[idx].code;
			}

			if(code)
				btt.cc.ui.iframePop.popIFrameCode(code);
			
		});

		phnq.notify.listen("subtitle-overlay-dismissed", function()
		{
			_this.findOne(/audio-player/).play();
		});
	}
};
