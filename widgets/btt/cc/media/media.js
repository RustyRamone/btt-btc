btt.cc.media =
{
	getPianoKeyUrls: function(ext)
	{
		var urls = {};
		for(var i=3; i<6; i++)
		{
			$(["c", "c#", "d", "d#", "e", "f", "f#", "g", "g#", "a", "a#", "b"]).each(function()
			{
				urls[this+i] = btt.cc.media.mediaFileUrl("piano-64/"+this+i+"."+ext);
			});
		}
		
		// Add synonyms -- i.e. e# == f, etc.
		for(var i=3; i<6; i++)
		{
			urls["e#"+i] = urls["f"+i];
			if(i<5)
			{
				urls["b#"+i] = urls["c"+(i+1)];
			}
			if(i > 3)
			{
				urls["cb"+i] = urls["b"+(i-1)];
			}
			urls["db"+i] = urls["c#"+i];
			urls["eb"+i] = urls["d#"+i];
			urls["fb"+i] = urls["e"+i];
			urls["gb"+i] = urls["f#"+i];
			urls["ab"+i] = urls["g#"+i];
			urls["bb"+i] = urls["a#"+i];
		}
		
		return urls;
	},

	getSfxUrls: function(ext)
	{
		var urls = {};
		urls["correct"] = btt.cc.media.mediaFileUrl("action-sounds/RightAnswerMultChoice."+ext);
		urls["incorrect"] = btt.cc.media.mediaFileUrl("action-sounds/WrongAnswerMultChoice."+ext);
		urls["reveal"] = btt.cc.media.mediaFileUrl("action-sounds/WhooshSound."+ext);
		urls["revealPage"] = btt.cc.media.mediaFileUrl("action-sounds/WhooshSound."+ext);
		urls["nextPage"] = btt.cc.media.mediaFileUrl("action-sounds/TabFrwrd."+ext);
		urls["select"] = btt.cc.media.mediaFileUrl("action-sounds/3-Clicksound."+ext);
		urls["woohoo"] = btt.cc.media.mediaFileUrl("action-sounds/1_Woohoo."+ext);
		return urls;
	},
	
	AudioPlayer: phnq_core.clazz(
	{
		init: function(audioFileName, unstoppable)
		{
			this.audioFileName = audioFileName;
			
			var audio = document.createElement("audio");
		
			var srcOgg = document.createElement("source");
			srcOgg.setAttribute("type", "audio/ogg");
			srcOgg.setAttribute("src", btt.cc.media.mediaFileUrl(audioFileName+".ogg"));
		
			var srcMp3 = document.createElement("source");
			srcMp3.setAttribute("type", "audio/mpeg");
			srcMp3.setAttribute("src", btt.cc.media.mediaFileUrl(audioFileName+".mp3"));
		
			audio.appendChild(srcOgg);
			audio.appendChild(srcMp3);
		
			this.audio = audio;
		
			if(!unstoppable)
			{
				var _this = this;
				phnq.notify.listen("stop-all-audio", function()
				{
					_this.stop();
				});
			}
		},
	
		rewind: function()
		{
			if(this.audio.readyState == 4)
			{
				this.audio.currentTime = 0;
			}
		},
	
		play: function()
		{
			this.audio.play();
		},

		playFromStart: function(dur)
		{
			var _this = this;
			
			if(this.pausePid)
			{
				clearTimeout(this.pausePid);
				this.pausePid = null;
			}
			
			this.rewind();
			this.play();
			
			if(dur)
			{
				this.pausePid = setTimeout(function()
				{
					_this.pause();
				}, dur);
			}
		},
	
		stop: function()
		{
			this.pause();
			this.rewind();
		},

		pause: function()
		{
			this.audio.pause();
		},
	
		onLoaded: function(fn)
		{
			var _this = this;
			
			fn.___called = false;
			
			if(this.audio.readyState == 4)
			{
				if(!fn.___called)
				{
					fn.___called = true;
					return fn();
				}
			}
	
			$(this.audio).on("canplaythrough", function()
			{
				if(!fn.___called)
				{
					fn.___called = true;
					return fn();
				}
			});
		},
	
		onProgress: function(fn)
		{
			var _this = this;
			$(this.audio).on("timeupdate", function()
			{
				var progress = _this.audio.currentTime / _this.audio.duration;
				fn(progress);
			});
		},
	
		onEnd: function(fn)
		{
			var _this = this;
			$(this.audio).on("ended", function()
			{
				fn();
				_this.stop()
			});
		}
	}),
	
	MultiAudioPlayer: phnq_core.clazz(
	{
		init: function(audioFileNames)
		{
			this.audioFileNames = audioFileNames;
			this.numSounds = audioFileNames.length;
			this.players = {};
			for(var i=0; i<audioFileNames.length; i++)
			{
				this.players[audioFileNames[i]] = new btt.cc.media.AudioPlayer(audioFileNames[i], true);
			}
		},
		
		onSoundsLoaded: function(fn)
		{
			var _this = this;
			var loaded = 0;
			
			$(this.audioFileNames).each(function()
			{
				var audioFileName = this;
				var player = _this.players[audioFileName];
				
				player.onLoaded(function()
				{
					loaded ++;
					if(loaded == _this.numSounds)
					{
						fn();
					}
				});
			});
		},
		
		playFromStart: function(audioFileName, dur)
		{
			var player = this.players[audioFileName];
			player.playFromStart(dur);
		},
		
		play: function(audioFileName)
		{
			var player = this.players[audioFileName];
			player.play();
		}
	}),
	
	stopAllAudio: function()
	{
		phnq.notify.post("stop-all-audio");
	},
	
	mediaFileUrl: function(mediaFileName)
	{
    var re = /\[(\d*)\]$/;
    var numPages = undefined;
    var m = re.exec(mediaFileName);
    if(m)
    {
      numPages = parseFloat(m[1]);
      mediaFileName = mediaFileName.replace(re, "");
    }
		var mediaFileUrl = new String(phnq_widgets.config.uriPrefix+"/"+__TYPE__+"/static/"+escape(mediaFileName));
    mediaFileUrl.numPages = numPages;
    return mediaFileUrl;
	}
};

phnq_core.extend(btt.cc.media,
{
	sfx:
	{
		init: function()
		{
			if(!this.initialized)
			{
				this.initialized = true;
				
				this.multiPlayer = new btt.cc.media.MultiAudioPlayer(
				[
					"action-sounds/1-Flipsound",
					"action-sounds/2-Shuffle",
					"action-sounds/3-Clicksound",
					"action-sounds/4_Snap",
					"action-sounds/5-Tunerun",
					"action-sounds/6-Mistake",
					"action-sounds/7-FingerfunkWoohoo",
					"action-sounds/8-Oops",
					"action-sounds/WrongAnswerMultChoice",
					"action-sounds/RightAnswerMultChoice",
					"action-sounds/WhooshSound",
					"action-sounds/TabFrwrd"
				]);
			}
		},
		
		onSoundsLoaded: function(fn)
		{
			this.init();
			this.multiPlayer.onSoundsLoaded(fn);
		},
		
		correct: function()
		{
			this.multiPlayer.playFromStart("action-sounds/RightAnswerMultChoice");
		},
		
		incorrect: function()
		{
			this.multiPlayer.playFromStart("action-sounds/WrongAnswerMultChoice");
		},
	
		revealPage: function()
		{
			this.multiPlayer.playFromStart("action-sounds/WhooshSound");
		},
	
		nextPage: function()
		{
			this.multiPlayer.playFromStart("action-sounds/TabFrwrd");
		},
	
		select: function()
		{
			this.multiPlayer.playFromStart("action-sounds/3-Clicksound");
		},
	},
	
	piano:
	{
		init: function()
		{
			if(!this.initialized)
			{
				this.initialized = true;
				var audioFileNames = [];
				for(var i=3; i<6; i++)
				{
					$(["c", "c#", "d", "d#", "e", "f", "f#", "g", "g#", "a", "a#", "b"]).each(function()
					{
						audioFileNames.push("piano-64/"+this+i);
					});
				}
				this.multiPlayer = new btt.cc.media.MultiAudioPlayer(audioFileNames);
			}
		},
		
		onSoundsLoaded: function(fn)
		{
			this.init();
			this.multiPlayer.onSoundsLoaded(fn);
		},
		
		playKey: function(key, dur)
		{
			if(dur)
			{
				dur += 150;
			}
			this.multiPlayer.playFromStart("piano-64/"+key, dur);
		},
		
		demo: function()
		{
			var _this = this;
			var dur = null;
			this.onSoundsLoaded(function()
			{
				for(var i=0; i<4; i++)
				{
					setTimeout(function()
					{
						_this.playKey("c4", dur);
					}, i*1000);
					setTimeout(function()
					{
						_this.playKey("e4", dur);
					}, i*1000 + 250);
					setTimeout(function()
					{
						_this.playKey("g4", dur);
					}, i*1000 + 500);
					setTimeout(function()
					{
						_this.playKey("e4", dur);
					}, i*1000 + 750);
				}
			});
		}
	}
});








// var audioContext = new webkitAudioContext();
// var theBuffer;
// 
// var req = new XMLHttpRequest();
// req.open('GET', btt.cc.media.mediaFileUrl("action-sounds/4_Snap.mp3"), true);
// req.responseType = 'arraybuffer';
// req.addEventListener('load', function(evt)
// {
// 	theBuffer = audioContext.createBuffer(req.response, false);
// }, false);
// req.send();
// 





// var req = new XMLHttpRequest();
// req.open("GET", "sound.m4a", true);
// req.responseType = "arraybuffer";
// req.onload = function ()
// {
// 	addStatus("sound.m4a loaded, decoding...");
// 	context.decodeAudioData(request.response, function (buffer_) {
// 		addStatus("Finished decoding audio");
// 		buffer = buffer_;
// 	}, decodeError);
// };
// request.send();


