var conWidget = null;

window.con =
{
	log: function(msg)
	{
		if(conWidget)
			conWidget.append.apply(conWidget, arguments);

		console.log.apply(console, arguments);
	}
};

var widget =
{
	ready: function($$)
	{
		conWidget = this;
	},

	append: function()
	{
		var $$ = this.get$$();

		var args = [];
		$(arguments).each(function()
		{
			args.push(this);
		});

		$$().html($$().html()+args.join(" ")+"<br/>");
	}
};
