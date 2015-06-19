require("phnq.notify");
require("btt.cc.model");
require("btt.cc.routes");

var prevChapter = null;

var widget =
{
	ready: function($$)
	{
		var _this = this;
		
		phnq.notify.listen("chapter-did-change", function(chNum)
		{
			_this.displaySectionsForChapter(chNum);
		});
		
		phnq.notify.listen("switched-to-nav-mode", function(chNum)
		{
			_this.highlightActiveSection();
		});
		
		$(window).resize(function()
		{
			_this.layoutTree();
		});
	},
	
	displaySectionsForChapter: function(chNum)
	{
		var _this = this;
		var $$ = this.get$$();
		
		btt.cc.model.chapter.get(chNum, function(chapter)
		{
			var numSections = chapter.sections.length;
			var sameSections = !!prevChapter && numSections == prevChapter.sections.length;
			if(sameSections)
			{
				for(var i=0; i<numSections; i++)
				{
					var sec1 = chapter.sections[i];
					var sec2 = prevChapter.sections[i];
					sameSections = sameSections && sec1.id == sec2.id;
				}
			}
			
			var partialType = chNum == 0 ? "non-chapter-item" : "section-item";
			
			if(sameSections)
			{
				for(var i=0; i<numSections; i++)
				{
					var sec = chapter.sections[i];
					$$(".section-"+sec.id).removeClass("touchified");
					$$(".section-"+sec.id).attr("href", "#"+btt.cc.routes.makePath(chNum, sec.id));
					$$(".section-"+sec.id+" h2").text(sec.title);
				}
				_this.highlightActiveSection();
			}
			else
			{
				$(chapter.sections).each(function()
				{
					this.chapterId = chNum;
				});
				
				$$(".section-items").html(_this.renderPartial(partialType, chapter.sections));
				_this.layoutTree();
			}
			
			prevChapter = chapter;
		});
		
	},
	
	highlightActiveSection: function()
	{
		var $$ = this.get$$();

		btt.cc.model.student.getCurrent(function(student)
		{
			var comps = (student.mostRecentPage||"||").split("|");
			var mostRecentChapterId = comps[0];
			var mostRecentSectionId = comps[1];
			var mostRecentPageId = comps[2];
			
			$$(".section-item").removeClass("active");
			$$(".section-item").removeClass("current");
			if(mostRecentChapterId == btt.cc.routes.getCurrentChapter())
			{
				$$(".section-item.section-"+mostRecentSectionId).addClass("active");
				$$(".section-item.section-"+mostRecentSectionId).addClass("current");
			}
			
			if($$(".section-item.active").length == 0)
			{
				$$(".section-item").addClass("active");
			}
		});
	},
	
	layoutTree: function()
	{
		var $$ = this.get$$();
		
		var pos1 = $$(".section-item").first().position();
		var pos2 = $$(".section-item").last().position();
		
		var stemOffset = 93;
		var hrLeft = pos1.left + stemOffset - 2;
		var hrWidth = pos2.left - pos1.left + 1;
		
		$$("> .hr").css({left:hrLeft, width:hrWidth});
		
		var stemLeft = stemOffset + ((pos1.left + pos2.left) / 2) - 2;
		$$("> .stem").css({left:stemLeft});
		
		this.highlightActiveSection();
	}
};
