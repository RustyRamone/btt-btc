require("ext.vexflow");
require("btt.cc.media");

var noteDurations =
{
	"16": (1/16),
	"8": (1/8),
	"q": 0.25,
	"h": 0.5,
	"w": 1
};

var keySigs =
{
	"C": {},
	"G": {"f":"f#"},
	"D": {"f":"f#", "c":"c#"},
	"A": {"f":"f#", "c":"c#", "g":"g#"},
	"E": {"f":"f#", "c":"c#", "g":"g#", "d":"d#"},
	"B": {"f":"f#", "c":"c#", "g":"g#", "d":"d#", "a":"a#"},
	"F#": {"f":"f#", "c":"c#", "g":"g#", "d":"d#", "a":"a#", "e":"f"},
	"C#": {"f":"f#", "c":"c#", "g":"g#", "d":"d#", "a":"a#", "e":"f", "b":"c"},
	"F": {"b":"bb"},
	"Bb": {"b":"bb", "e":"eb"},
	"Eb": {"b":"bb", "e":"eb", "a":"ab"},
	"Ab": {"b":"bb", "e":"eb", "a":"ab", "d":"db"},
	"Db": {"b":"bb", "e":"eb", "a":"ab", "d":"db", "g":"gb"},
	"Gb": {"b":"bb", "e":"eb", "a":"ab", "d":"db", "g":"gb", "c":"b"},
	"Cb": {"b":"bb", "e":"eb", "a":"ab", "d":"db", "g":"gb", "c":"b", "f":"e"}
};

var DEFAULT_STAVE_WIDTH = 300;
var DEFAULT_STAVE_HEIGHT = 90;
var DEFAULT_SCALE = 1;
var DEFAULT_TEMPO = 120;
var DEFAULT_TIME_SIG = "4/4";

var widget =
{
	ready: function($$)
	{
		var _this = this;
		
		this.canvas = $$().get(0);
	    this.renderer = new Vex.Flow.Renderer(this.canvas, Vex.Flow.Renderer.Backends.CANVAS);
		this.ctx = this.renderer.getContext();
		
		
		if(false)
		{
			// $$().css("background", "#fff");
			
			// this.params.offset = {x:50, y:0};
			
			this.params.data =
			{
				timeSig: "4/4",
				clef: "treble",
				notes:
				[
					"c/4 q", "d/4 q", "r q", "c/4 q"
					// "c/4 q", "d/4 q", "r q", ["c/4 8", "c/4 8"], "c/4 q", "d/4 q", "r q", "c/4 q", "c/4 q", "d/4 q", "r q", "c/4 q"
				],
				
				highlight: 1
			};
			
			// this.params.barsPerLine = 2;
			// this.params.padding = 100;
		}
		
		this.params.barsPerLine = this.params.barsPerLine || 0;
		this.params.padding = this.params.padding || 10;
		this.params.offset = this.params.offset || {x:0, y:0};
		this.params.staveWidth = this.params.staveWidth || DEFAULT_STAVE_WIDTH;
		this.params.staveHeight = this.params.staveHeight || DEFAULT_STAVE_HEIGHT;
		this.params.scale = this.params.scale || DEFAULT_SCALE;
		this.params.tempo = this.params.tempo || DEFAULT_TEMPO;
		this.params.timeSig = this.params.timeSig || DEFAULT_TIME_SIG;
		
		this.params.data = this.params.data || {notes:[]};
		
		this.setData(this.params.data);
		
		$$().click(function()
		{
			_this.play();
		});
		
		phnq.notify.listen("stop-all-audio", function()
		{
			_this.stop();
		}, this);
	},
	
	destroy: function()
	{
		phnq.notify.unlistenAll(this);
	},

	updateCanvasSize: function()
	{
		var $$ = this.get$$();
		var canvasWidth = $$().innerWidth();
		var canvasHeight = $$().innerHeight();
		$$().attr("width", canvasWidth);
		$$().attr("height", canvasHeight);
	},
	
	applyParams: function(params)
	{
		phnq_core.extend(this.params, params);
	},
	
	play: function(tempo)
	{
		var _this = this;
		
		var tempo = this.params.tempo;

		this.stop();
		
		if(this.keyTimeline && this.keyTimeline.length > 0)
		{
			var offset = this.keyTimeline[0].bar;
		
			this.playPids = [];
			
			btt.cc.audio.piano.load(function()
			{
				var keyTimelineLength = _this.keyTimeline.length;
				
				$(_this.keyTimeline).each(function(idx)
				{
					var key = this.key.replace("/", "");
					var delay = (this.bar-offset) * 60 * 4 / tempo;
					var durSec = noteDurations[this.dur] * 60 * 4 / tempo;
					
					_this.playPids.push(setTimeout(function()
					{
						if(key != "r")
						{
							btt.cc.audio.piano.play(key, 0, durSec);
						}
						_this.setData(null, idx);
						
						if(idx == keyTimelineLength-1)
						{
							setTimeout(function()
							{
								_this.setData();
							}, durSec*1000);
						}
					}, delay*1000));
				});
			});
		}
	},
	
	stop: function()
	{
		if(this.playPids)
		{
			$(this.playPids).each(function()
			{
				clearTimeout(this);
			});
			this.playPids = null;
		}
	},
	
	setNotes: function(notes)
	{
		this.data.notes = notes;
		this.setData();
	},
	
	prepareKey: function(key)
	{
		if(this.params.keySig)
		{
			var keySig = keySigs[this.params.keySig];
			var m = key.match(/([a-g])\/(\d)/);
			if(m)
			{
				key = (keySig[m[1]] || m[1]) + "/" + m[2];
			}
		}
		return key;
	},
	
	setData: function(data, highlightIdx)
	{
		if(data)
		{
			this.data = data;
		}
		else
		{
			data = this.data;
		}
		
		var _this = this;
		
		var timeSigComps = this.params.timeSig.split("/");
		var barDuration = parseFloat(timeSigComps[0]) / parseFloat(timeSigComps[1]);
		
		var $$ = this.get$$();
		
		this.keyTimeline = [];
		
		this.updateCanvasSize();
		
		if(this.params.barsPerLine)
		{
			this.params.staveWidth = ($$(this.canvas).innerWidth() - (2 * this.params.padding)) / this.params.scale / this.params.barsPerLine;
		}
		
		var offset =
		{
			x: ((this.params.offset.x + this.params.padding) / this.params.scale),
			y: (this.params.offset.y / this.params.scale)
		};

		this.ctx.scale(this.params.scale, this.params.scale);
		
		var width = $$(this.canvas).innerWidth() / this.params.scale;
		var height = $$(this.canvas).innerHeight() / this.params.scale;
		
		this.ctx.clearRect(0, 0, width, height);
		
		var x = offset.x;
		var y = offset.y;

		var staveNotes = [];
		var beams = [];
		var totalDuration = 0;
		var currentBarDuration = this.params.pickup || 0;
		
		var staveWidth = this.params.staveWidth * (this.params.initialStaveWidth||1);

	    var stave = new Vex.Flow.Stave(x, y, staveWidth, this.params.staveHeight);
		
		if(data.clef)
		{
			stave.addClef(data.clef);
		}

		if(this.params.keySig)
		{
			stave.addKeySignature(this.params.keySig);
		}
		
		if(!this.params.hideTimeSig)
		{
			stave.addTimeSignature(this.params.timeSig);
		}
		
	    stave.setContext(this.ctx).draw();
		
		for(var i=0; i<data.notes.length; i++)
		{
			var isBr = data.notes[i] == "br";
			if(isBr)
			{
				i++;
			}
				
			if(isBr || currentBarDuration == barDuration)
			{
				currentBarDuration = 0;
			    Vex.Flow.Formatter.FormatAndDraw(this.ctx, stave, staveNotes);
		
				for(var j=0; j<beams.length; j++)
				{
				    beams[j].setContext(this.ctx).draw();
				}
				
				x += stave.width;
				
				if(isBr || (x + stave.width) >= width)
				{
					x = offset.x;
					y += this.params.staveHeight;
				}
				
				stave = new Vex.Flow.Stave(x, y, this.params.staveWidth, this.params.staveHeight);
			    stave.setContext(this.ctx).draw();
				
				staveNotes = [];
				beams = [];
			}
			
			var noteDataGroup = data.notes[i];
			if(typeof(noteDataGroup) == "string")
			{
				noteDataGroup = [noteDataGroup];
			}
			
			var noteGroup = [];
			for(var j=0; j<noteDataGroup.length; j++)
			{
				var noteData = noteDataGroup[j];
				var metaData = {};
				if(noteData.indexOf("?") != -1)
				{
					var nvps = noteData.substring(noteData.indexOf("?")+1).split("&");
					for(var k=0; k<nvps.length; k++)
					{
						metaData[nvps[k].split("=")[0]] = nvps[k].split("=")[1];
					}
					noteData = noteData.substring(0, noteData.indexOf("?"));
				}
				
				var noteComps = noteData.split(" ");
				var key = noteComps[0].toLowerCase();
				var dur = noteComps.length == 2 ? noteComps[1] : "q";
                var disabled = false;
                
                if(key.charAt(0) == "_")
                {
                    key = key.substring(1);
                    disabled = true;
                }
				
                if(!disabled)
                {
    				this.keyTimeline.push({bar:totalDuration, key:this.prepareKey(key), dur:dur});
                }
			
				currentBarDuration += noteDurations[dur];
				totalDuration += noteDurations[dur];
				
				if(key == "r")
				{
					key = "b/4";
					dur = dur + "r";
				}
			
				var note = new Vex.Flow.StaveNote({ keys: [key], duration: dur });
				var annotation = metaData.annotation ? new Vex.Flow.Annotation(metaData.annotation).setVerticalJustification(Vex.Flow.Annotation.VerticalJustify.TOP).setFont("Times", "12", "italic") : null;
				if(annotation)
				{
					note.addAnnotation(0, annotation);
				}
				
				if(key.match(/[a-g]b\/\d/))
				{
					note.addAccidental(0, new Vex.Flow.Accidental("b"))
				}
				else if(key.match(/[a-g]#\/\d/))
				{
					note.addAccidental(0, new Vex.Flow.Accidental("#"))
				}
				
                if(disabled)
                {
					var fillStyle = _this.ctx.fillStyle

					note.___draw___ = note.draw;
					note.draw = function()
					{
						_this.ctx.fillStyle = "#ccc";
						this.___draw___.apply(this, arguments);
						_this.ctx.fillStyle = fillStyle;
					};
                }
				else if(!isNaN(highlightIdx) && highlightIdx == (this.keyTimeline.length-1))
				{
					var fillStyle = _this.ctx.fillStyle

					note.___draw___ = note.draw;
					note.draw = function()
					{
						_this.ctx.fillStyle = "#e22f5b";
						this.___draw___.apply(this, arguments);
						_this.ctx.fillStyle = fillStyle;
					};
					
					if(annotation)
					{
						annotation.___draw___ = annotation.draw;
						annotation.draw = function()
						{
							_this.ctx.shadowColor = null;
							_this.ctx.shadowBlur = 0;
							_this.ctx.fillStyle = "#e22f5b";
							this.___draw___.apply(this, arguments);
							_this.ctx.fillStyle = fillStyle;
						};
					}
				}

				noteGroup.push(note);
			}
			
			if(noteGroup.length > 1)
			{
				beams.push(new Vex.Flow.Beam(noteGroup));
			}
			
			staveNotes = staveNotes.concat(noteGroup);
		}

		Vex.Flow.Formatter.FormatAndDraw(this.ctx, stave, staveNotes);
		
		if(this.params.doubleBarEnd)
		{
		    stave.setEndBarType(Vex.Flow.Barline.type.END);
			stave.setContext(this.ctx).draw();
		}
		
		for(var i=0; i<beams.length; i++)
		{
			beams[i].setContext(this.ctx).draw();
		}
	}
};
