require("btt.cc.media");
require("btt.cc.model");

var widget =
{
	ready: function($$)
	{
		var _this = this;
		
		var staff = this.findOne(/staff/);
		
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
		
		$$(".my-motif").click(function()
		{
			staff.play();
		});
		
		$$(".alphabet span").click(function()
		{
			var loc = _this.getCursorLoc();
			if(loc == -1)
			{
				return;
			}
			
 			btt.cc.audio.sfx.play("select");
			
			var letter = $(this).text();
			var code = letter.charCodeAt(0);
			code = (code - "A".charCodeAt(0)) % 7 + "A".charCodeAt(0);
			
			var note = String.fromCharCode(code);
			
			$$(".motif-notes > div > div:eq("+loc+")").text(note);
			_this.moveCursor(1);
			
			var notes = [];
			$$(".motif-notes > div > div").each(function()
			{
				var note = $(this).text().trim();
				if(note)
				{
					notes.push(note+"/4 q");
				}
				else
				{
					notes.push("r q");
				}
			});
			while(notes[notes.length-1] == "r q")
			{
				notes.pop();
			}
			staff.setNotes(notes);
			
			if(notes.length)
			{
				$$(".my-motif").addClass("can-play");
			}
			else
			{
				$$(".my-motif").removeClass("can-play");
			}
			
			if($$(".motif-notes > div > div:empty").length == 0)
			{
				$$(".next-button").removeClass("disabled");
			
				var buf = [];
				$$(".motif-notes > div > div").each(function()
				{
					buf.push($(this).text().trim());
				});
				
				var motif = buf.join("");
				
				btt.cc.model.student.getCurrent(function(student)
				{
					student.motif = motif;
					student.save();
				});
			}
			else
			{
				$$(".next-button").addClass("disabled");
			}
		});
		
		$$(".maker .motif-notes > div").click(function()
		{
			var clicked = this;
			$$(".maker .motif-notes > div").each(function(idx)
			{
				if(clicked == this)
				{
					$$(".cursor > div").removeClass("active");
					$$(".cursor > div:eq("+idx+")").addClass("active");
				}
			});
		});
		
		$$(".maker").click(function()
		{
			$$(".pop-up").addClass("gone");
		});
		
		$$(".pop-up").click(function()
		{
			$$(".pop-up").removeClass("gone");
		});
		
		phnq.notify.listen("content-reset", function()
		{
			$$().removeClass("hide-intro-overlay");
			$$(".motif-notes > div > div").text("");
			$$(".cursor > div").removeClass("active");
			$$(".cursor > div:eq(0)").addClass("active");
			staff.setNotes([]);
		}, this);
		
		phnq_widgets.scan();
	},
	
	destroy: function()
	{
		phnq.notify.unlistenAll(this);
	},
	
	getCursorLoc: function()
	{
		var $$ = this.get$$();
		var loc = -1;
		$$(".cursor > div").each(function(idx)
		{
			if($(this).hasClass("active"))
			{
				loc = idx;
			}
		});
		return loc;
	},
	
	moveCursor: function(amt)
	{
		var $$ = this.get$$();
		var loc = this.getCursorLoc()+amt;
		$$(".cursor > div").removeClass("active");
		$$(".cursor > div:eq("+loc+")").addClass("active");
	}
};
