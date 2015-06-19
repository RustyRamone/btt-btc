require("btt.cc.routes");

var widget =
{
	ready: function($$)
	{
		var params = this.params;

		if(params.disabled)
		{
			$$().addClass("disabled");
		}
		
		$$().click(function()
		{
			if(params.nextPage)
			{
				btt.cc.routes.nextPage();
			}
		});
	}
};
