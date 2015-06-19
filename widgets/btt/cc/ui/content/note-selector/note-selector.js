require("ext.vexflow");
require("btt.cc.media");
// require("phnq.notify");

var widget =
{
	ready: function($$)
	{
		var _this = this;
		
		$$(".intro-overlay").click(function()
		{
			$$().addClass("hide-intro-overlay");
			btt.cc.audio.sfx.play("revealPage");
		});
		
		$$(".go-back").click(function()
		{
			$$().removeClass("hide-intro-overlay");
			btt.cc.audio.sfx.play("revealPage");
		});
		
		$(this.params.choicePatterns).each(function()
		{
			_this.addPattern(this, ".choice-buttons", true);
		});
		
		this.addPattern(this.params.originalPattern, ".boxes .original");
		
		phnq.notify.listen("content-reset", function()
		{
			$$().removeClass("hide-intro-overlay");
			$$("canvas").removeClass("used").removeClass("correct").removeClass("incorrect").addClass("unused");
			$$(".boxes > div:not(.original)").removeClass("answered").html("?");
		}, this);
		
		$$(".choice-buttons > canvas").click(function()
		{
			if($(this).hasClass("unused"))
			{
				$(this).removeClass("unused");
				$(this).addClass("used")
				
				if($$(".boxes > div:contains(?):first").length > 0)
				{
					var correct = false;
					var serGroups = $(this).attr("data-groups");
					var groupsData = JSON.parse(serGroups);
					var serGroupsData = serGroups;
					if(!(groupsData instanceof Array))
					{
						serGroupsData = JSON.stringify(groupsData.data);
					}
					
					for(var i=0; i<_this.params.correctPatterns.length; i++)
					{
						var correctPattern = _this.params.correctPatterns[i];
						if(JSON.stringify(correctPattern) == serGroupsData)
						{
							var groups = JSON.parse(serGroups);
							$$(".boxes > div:contains(?):first").addClass("answered");
							_this.addPattern(groups, ".boxes > div:contains(?):first");
							correct = true;
							break;
						}
					}
				
					if(correct)
					{
						$(this).addClass("correct");
						btt.cc.audio.sfx.play("correct");
					}
					else
					{
						$(this).addClass("incorrect");
						btt.cc.audio.sfx.play("incorrect");
					}
					
				}
			
				if($$(".boxes > div:contains(?):first").length == 0)
				{
					$$(".next-button").removeClass("disabled");
					
					var isCorrect = true;
					var choices = [];
					
					$$(".choice-buttons > canvas.used").each(function()
					{
						choices.push($(this).attr("data-groups"));
						isCorrect = isCorrect && $(this).hasClass("correct");
					});

					btt.cc.model.student.getCurrent(function(student)
					{
						student.setCurrentActivityAnswer(0, choices, isCorrect);
					});
				}
			}
		});
	},

	destroy: function()
	{
		phnq.notify.unlistenAll(this);
	},
	
	addPattern: function(groups, dest, append)
	{
		var $$ = this.get$$();
		var serGroups = JSON.stringify(groups);
		var offsetX = 0;
		
		if(!(groups instanceof Array))
		{
			offsetX = groups.offsetX || 0;
			groups = groups.data;
		}

		for(var i=0; i<groups.length; i++)
		{
			var notes = groups[i];
			for(var j=0; j<notes.length; j++)
			{
				var note = notes[j];
				notes[j] = new Vex.Flow.StaveNote({ keys: [note.split("|")[0]], duration: note.split("|")[1] });
			}
		}
		
		if(append)
		{
			$$(dest).append("<canvas id='latestPattern' class='unused'></canvas>");
		}
		else
		{
			$$(dest).html("<canvas id='latestPattern' class='unused'></canvas>");
		}
		
		var canvas = $$("#latestPattern").last().get(0);
		$$("#latestPattern").removeAttr("id");
		
		$(canvas).attr("data-groups", serGroups);
		
	    var renderer = new Vex.Flow.Renderer(canvas, Vex.Flow.Renderer.Backends.CANVAS);
		
	    var ctx = renderer.getContext();
		ctx.scale(3,2);
		
		ctx.fillStyle = "rgb(255, 255, 255)";
	    var stave = new Vex.Flow.Stave(offsetX, -30, 100, 80);
	    stave.setContext(ctx);

		var allNotes = [];
		var beams = [];
		for(var i=0; i<groups.length; i++)
		{
			var group = groups[i];
			if(group.length > 1)
			{
				beams.push(new Vex.Flow.Beam(group));
			}
			allNotes = allNotes.concat(group);
		}

	    Vex.Flow.Formatter.FormatAndDraw(ctx, stave, allNotes);
		
		for(var i=0; i<beams.length; i++)
		{
		    beams[i].setContext(ctx).draw();
		}
	}
};
