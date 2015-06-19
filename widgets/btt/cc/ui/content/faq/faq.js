var widget =
{
	ready: function($$)
	{
		$$("section > ol > li > strong").click(function()
		{
			var alreadyOpen = $(this).closest("li").find(">div").outerHeight() > 0;
			
			$$(".sheet > ol > li > div").css("height", "0");
			$$(".sheet > ol > li > div.open").removeClass("open");
			
			if(!alreadyOpen)
			{
				$(this).closest("li").find(">div").css("height", "auto");
				var height = $(this).closest("li").find(">div").outerHeight();
				$(this).closest("li").find(">div").css("height", "0");
				$(this).closest("li").find(">div").css("height", height+"px");
				$(this).closest("li").find(">div").addClass("open");
			}
		});
	}
};
