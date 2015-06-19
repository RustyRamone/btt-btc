var widget =
{
	ready: function($$)
	{
		$$("img.covered").attr("src", btt.cc.media.mediaFileUrl(this.params.tileImage));
	},

	hideRandomTile: function()
	{
		var $$ = this.get$$();

		var coveredImgs = $$(".covered");
		var rnd = Math.random();
		if(rnd == 1)
		{
			rnd = 0;
		}
		coveredImg = coveredImgs[Math.floor(rnd*coveredImgs.length)];
		$(coveredImg).removeClass("covered");
		return $$(".covered").length;
	}
};
