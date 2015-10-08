require("//www.youtube-nocookie.com/iframe_api");

var youTubeApiWaiters = [];

window.ext = window.ext || {};

window.ext.youtube_api =
{
	onYouTubeApiReady: function(fn)
	{
		if(youTubeApiWaiters)
		{
			youTubeApiWaiters.push(fn);
		}
		else
		{
			fn();
		}
	}
};

window.onYouTubeIframeAPIReady = function()
{
	if(youTubeApiWaiters)
	{
		$(youTubeApiWaiters).each(function()
		{
			this();
		});
	}
	youTubeApiWaiters = null;
};
