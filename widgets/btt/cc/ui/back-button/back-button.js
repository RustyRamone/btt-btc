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
			if(params.previousPage)
			{
				btt.cc.routes.previousPage();
			}
		});
	}
};
