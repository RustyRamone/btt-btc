var audioContext = null;

var audioFileExt = null;

if("webkitAudioContext" in window)
{
	audioContext = new webkitAudioContext();
}

btt.cc.audio =
{
	init: function()
	{
		if(this.___initWebAudioFile___)
		{
			var _this = this;
			this.___initWebAudioFile___.start(0, 0.1);
		}
	},
	
	piano: null, // defined below

	sfx: null, // defined below
	
	AudioFile: null // defined below
};

var WebAudioFile = phnq_core.clazz(
{
	init: function(url)
	{
		if(url.indexOf("."+audioFileExt) == -1)
		{
			url = btt.cc.media.mediaFileUrl(url + "." + audioFileExt);
		}

		this.url = url;
		this.gain = 1;
	},
	
	setGain: function(gain)
	{
		this.gain = gain;
	},
	
	load: function(fn)
	{
		if(this.buffer)
		{
			return fn();
		}
		
		var _this = this;
		var req = new XMLHttpRequest();
		req.open('GET', this.url, true);
		req.responseType = 'arraybuffer';
		req.addEventListener('load', function(evt)
		{
			try
			{
				audioContext.decodeAudioData(req.response, function(buffer)
				{
					_this.buffer = buffer;
					if(fn)
					{
						fn();
					}
				}, function(err)
				{
					// alert(err);
				});
			}
			catch(ex)
			{
				// ok
				// alert(ex);
			}
		}, false);
		req.send();
	},
	
	start: function(startTime, duration, gain)
	{
		gain = gain == undefined ? this.gain : gain

		var sourceWrapper = {};
		
		if(this.buffer)
		{
			startTime = startTime || 0;
			var source = audioContext.createBufferSource();
			source.buffer = this.buffer;

			if(audioContext.createGain)
			{
				var gainNode = audioContext.createGain();
				
				source.connect(gainNode);
				gainNode.connect(audioContext.destination);
				
				gainNode.gain.value = gain;
			}
			else
			{
				source.connect(audioContext.destination);
			}
			
			var noteOnTime = audioContext.currentTime+startTime

			var startAudio = function(t)
			{
				if(source.start)
					return source.start(t);
				else
					return source.noteOn(t);
			};

			var stopAudio = function(t)
			{
				if(source.stop)
					return source.stop(t);
				else
					return source.noteOff(t);
			};

			startAudio(noteOnTime);
			if(duration)
			{
				stopAudio(noteOnTime+duration);
			}

			sourceWrapper.stop = function(minDur)
			{
				minDur = minDur || 0;
				var noteOffTime = Math.max(noteOnTime+minDur, audioContext.currentTime);
				stopAudio(noteOffTime);
			};
		}
		else
		{
			sourceWrapper.stop = function()
			{
				// n/a
			};
		}

		return sourceWrapper;
	}
});

var AudioTagFile = phnq_core.clazz(
{
	init: function(url)
	{
		if(url.indexOf("."+audioFileExt) == -1)
		{
			url = btt.cc.media.mediaFileUrl(url + "." + audioFileExt);
		}

		this.url = url;
		this.gain = 1; // TODO: use this value
	},

	setGain: function(gain)
	{
		this.gain = gain;
	},
	
	load: function(fn)
	{
		var _this = this;
		
		if(this.loaded)
		{
			return fn();
		}
		
		this.audio = new Audio();
		this.audio.setAttribute("src", this.url);

		$(this.audio).on("canplaythrough", function()
		{
			if(!fn.___called)
			{
				_this.loaded = true;
				fn.___called = true;
				return fn();
			}
		});
	},
	
	start: function(startTime, duration)
	{
		var _this = this;
		
		if(this.pausePid)
		{
			clearTimeout(this.pausePid);
		}
		
		if(this.audio.readyState == 4)
		{
			this.audio.currentTime = 0;
		}

		this.audio.play();
		
		if(duration)
		{
			_this.pausePid = setTimeout(function()
			{
				_this.audio.pause();
			}, Math.round(duration * 1000));
		}

		var startTime = new Date().getTime();

		var stopper =
		{
			stop: function(minDur)
			{
				minDur = Math.round(minDur*1000);
				var elapsedTime = new Date().getTime() - startTime;

				var stopDelay = Math.max(minDur - elapsedTime, 0);
				setTimeout(function()
				{
					_this.audio.pause();
				}, stopDelay);
			}
		};
		return stopper;
	}
});

if(audioContext)
{
	btt.cc.audio.AudioFile = WebAudioFile;
	
	$(function()
	{
		// TODO: make this load a very short silence...
		
		btt.cc.audio.___initWebAudioFile___ = new WebAudioFile(btt.cc.media.mediaFileUrl("action-sounds/4_Snap.mp3"));
		btt.cc.audio.___initWebAudioFile___.load();
	});
}
else
{
	btt.cc.audio.AudioFile = AudioTagFile;
}

var MultiSoundPlayer = phnq_core.clazz(
{
	init: function(keyedUrls)
	{
		if(keyedUrls instanceof Array)
		{
			var urls = keyedUrls;
			keyedUrls = {};
			for(var i=0; i<urls.length; i++)
			{
				keyedUrls[urls[i]] = urls[i];
			}
		}

		this.keyedUrls = keyedUrls;
		this.audioFiles = {};
		this.keys = [];
		
		for(key in keyedUrls)
		{
			this.keys.push(key);
			var url = keyedUrls[key];
			this.audioFiles[key] = new btt.cc.audio.AudioFile(url);
		}
	},
	
	setGain: function(gain)
	{
		for(var key in this.audioFiles)
		{
			this.audioFiles[key].setGain(gain);
		}
	},
	
	load: function(fn)
	{
		var _this = this;
		var numLoaded = 0;
		$(this.keys).each(function()
		{
			var audioFile = _this.audioFiles[this];
			audioFile.load(function()
			{
				numLoaded++;
				if(numLoaded == _this.keys.length)
				{
					if(fn)
					{
						fn();
					}
				}
			});
		});
	},
	
	play: function(key, startTime, duration)
	{
		var audioFile = this.audioFiles[key];
		if(audioFile)
		{
			return audioFile.start(startTime, duration);
		}
		else
		{
			var stopper =
			{
				stop: function()
				{}
			};
			return stopper;
		}
	}
});

$(function()
{
	var audio = new Audio();

	if(audio.canPlayType("audio/mpeg"))
	{
		audioFileExt = "mp3";
	}
	else if(audio.canPlayType("audio/ogg"))
	{
		audioFileExt = "ogg";
	}
	else
	{
		throw "No Audio: must support either mp3 or ogg.";
	}

	btt.cc.audio.MultiSoundPlayer = MultiSoundPlayer;
	
	btt.cc.audio.piano = new MultiSoundPlayer(btt.cc.media.getPianoKeyUrls(audioFileExt));
	btt.cc.audio.piano.setGain(3);
	
	btt.cc.audio.sfx = new MultiSoundPlayer(btt.cc.media.getSfxUrls(audioFileExt));
});
