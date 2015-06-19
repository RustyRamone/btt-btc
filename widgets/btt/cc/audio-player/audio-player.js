require("btt.cc.media");

var widget =
{
	ready: function($$)
	{
		var _this = this;
		this.audioPlayer = null;
		
		if(this.params.audioFile)
		{
			this.setAudioFile(this.params.audioFile);
		}
		
		$$().click(function()
		{
			$$().toggleClass("playing");
			
			if($$().hasClass("playing"))
			{
				if(_this.audioPlayer)
				{
					_this.audioPlayer.play();
				}
			}
			else
			{
				if(_this.audioPlayer)
				{
					_this.audioPlayer.pause();
				}
			}
		});
		
		if(this.params.autoPlay)
		{
			this.play();
		}
	},

	onProgress: function(fn)
	{
		this.progressListeners = this.progressListeners || [];
		this.progressListeners.push(fn);
	},
	
	setAudioFile: function(audioFile)
	{
		var _this = this;
		
		var $$ = this.get$$();

		this.reset();
		
		this.audioPlayer = new btt.cc.media.AudioPlayer(audioFile);

		this.audioPlayer.onProgress(function(progress)
		{
			_this.setProgress(progress);
		});

		this.audioPlayer.onEnd(function()
		{
			$$().removeClass("playing");
		});
	},
	
	reset: function()
	{
		var $$ = this.get$$();
		this.setProgress(0);
		$$().removeClass("playing");
		if(this.audioPlayer)
		{
			this.audioPlayer.stop();
		}
	},
	
	play: function()
	{
		var _this = this;
		var $$ = this.get$$();
		if(this.audioPlayer)
		{
			$$().addClass("playing");
			_this.audioPlayer.play();
			// this.audioPlayer.onLoaded(function()
			// {
				// $$().addClass("playing");
				// _this.audioPlayer.play();
			// });
		}
	},
	
	setProgress: function(progress)
	{
		var $$ = this.get$$();

		var size = parseFloat(this.params.size);
		var border = parseFloat(this.params.border);
		
		var height = (size - (2 * border)) * progress;
		var y = border + (size - (2 * border)) - height;
		
		$$("rect.prog").attr("height", height).attr("y", y);

		$(this.progressListeners).each(function()
		{
			this(progress);
		});
	}
};
