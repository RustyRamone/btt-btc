btt.cc.ui.browserWarning = btt.cc.ui["browser-warning"];

var widget =
{
	ready: function($$)
	{
		phnq_core.extend(btt.cc.ui.browserWarning,
		{
			show: function(url)
			{
				$$().modal();
			}
		});
		
		var os = "other";
		if(!!navigator.appVersion.match(/Win/i))
		{
			os = "windows";
		}
		else if(!!navigator.appVersion.match(/Mac/i))
		{
			os = "mac";
		}

		$$(".os-specific").hide();
		$$(".os-specific."+os).show();
		
		$$("a.faq-link").click(function()
		{
			$$().modal("hide");
		});
	}
};
