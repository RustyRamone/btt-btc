var widget =
{
	ready: function($$)
	{
		$$(".next-button").click(function()
		{
			phnq.notify.post("dismiss-splash");
		});
		
		setTimeout(function()
		{
			btt.cc.audio.sfx.load(function()
			{
				$$(".next-button").removeClass("disabled");
			});
		}, 500);
		
		$$().click(function()
		{
			btt.cc.audio.sfx.play("nextPage");
		});
	}
};
