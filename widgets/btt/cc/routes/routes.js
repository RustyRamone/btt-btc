require("phnq.routes");
require("phnq.notify");
require("btt.cc.model");
require("btt.cc.media");

var currentChapterId = null;
var currentSectionId = null;
var currentPageId = null;

btt.cc.routes =
{
	routeChanges: 0,
	
	navigateTo: function(chapterId, sectionId, pageId)
	{
		location.hash = this.makePath(chapterId, sectionId, pageId);
	},
	
	makePath: function(chapterId, sectionId, pageId)
	{
		var buf = [];
		if(chapterId != null)
		{
			buf.push("/"+chapterId);
		}
		if(!!sectionId)
		{
			buf.push("/"+sectionId);
		}
		if(!!pageId)
		{
			buf.push("/"+pageId);
		}
		return buf.join("");
	},
	
	/*
	*	There is a current chapter and section, then there is also a current
	*	page, either explicit or implicit. If not specified, then the current
	*	page is just the first one in the section.	
	*/
	getCurrentChapterSectionPage: function(fn)
	{
		btt.cc.model.chapter.get(currentChapterId, function(chapter)
		{
			var section = null;
			var page = null;
			$(chapter.sections).each(function()
			{
				if(this.id == currentSectionId)
				{
					section = this;
					
					if(!!currentPageId)
					{
						$(section.pages).each(function()
						{
							if(this.id == currentPageId)
							{
								page = this;
							}
						});
					}
					else
					{
						if(section.pages && section.pages.length > 0)
						{
							page = section.pages[0];
						}
					}
				}
			});
			fn(chapter, section, page);
		});
	},
	
	getCurrentChapter: function()
	{
		return currentChapterId;
	},
	
	getCurrentSection: function()
	{
		return currentSectionId;
	},
	
	nextChapter: function()
	{
		var idx = chapterIds.indexOf(""+this.getCurrentChapter());
		if(idx != -1 && ++idx < chapterIds.length)
		{
			this.navigateTo(chapterIds[idx]);
		}
	},
	
	previousChapter: function()
	{
		var idx = chapterIds.indexOf(""+this.getCurrentChapter());
		if(idx != -1 && --idx >= 0)
		{
			this.navigateTo(chapterIds[idx]);
		}
	},
	
	switchToChapterNav: function()
	{
		this.navigateTo(this.getCurrentChapter());
	},
	
	toggleContentVisible: function()
	{
		var _this = this;
		
		if($(".show-content").length == 1)
		{
			this.switchToChapterNav();
			return false;
		}
		else
		{
			btt.cc.model.student.getCurrent(function(student)
			{
				var comps = (student.mostRecentPage||"||").split("|");
				var mostRecentChapterId = comps[0];
				var mostRecentSectionId = comps[1];
				var mostRecentPageId = comps[2];
				
				_this.navigateTo(mostRecentChapterId, mostRecentSectionId, mostRecentPageId);
			});
			return true;
		}
	},
	
	previousPage: function()
	{
		goPage(-1);
	},
	
	nextPage: function()
	{
		goPage(1);
	}
};

var goPage = function(amt)
{
	var _this = btt.cc.routes;

	btt.cc.audio.sfx.play("nextPage");
	
	_this.getCurrentChapterSectionPage(function(chapter, section, currentPage)
	{
		var pages = section.pages;
		for(i=0; i<pages.length; i++)
		{
			var page = pages[i];
			if(page.id == currentPage.id)
			{
				var pageIdx = Math.min(Math.max(i + amt, -1), pages.length);
				if(pageIdx == -1)
				{
					goSection(-1);
				}
				else if(pageIdx == pages.length)
				{
					goSection(1);
				}
				else
				{
					var nextPage = pages[pageIdx];
					_this.navigateTo(currentChapterId, currentSectionId, nextPage.id);
				}
			}
		}
	});
};

var goSection = function(amt)
{
	var _this = btt.cc.routes;
	
	_this.getCurrentChapterSectionPage(function(chapter, section)
	{
		for(var i=0; i<chapter.sections.length; i++)
		{
			if(chapter.sections[i].id == section.id)
			{
				var secIdx = i + amt;
				if(secIdx < 0)
				{
					_this.switchToChapterNav();
				}
				else if(secIdx == chapter.sections.length)
				{
					// Finished the chapter!
					_this.switchToChapterNav();
				}
				else
				{
					var nextSection = chapter.sections[secIdx];
					var pageId = undefined;
					if(amt == -1)
					{
						pageId = nextSection.pages[nextSection.pages.length-1].id;
					}
					_this.navigateTo(chapter.id, chapter.sections[secIdx].id, pageId);
				}
				break;
			}
		}
	});
};

var getCurrentChapter = function(fn)
{
	btt.cc.model.chapter.get(btt.cc.routes.getCurrentChapter(), function(chapter)
	{
		fn(chapter);
	});
};

var pageSeq = {};
var chapterIds = [];

	
$(function()
{
	btt.cc.model.chapter.list(function(chapters)
	{
		var count = 0;
		for(var i=0; i<chapters.length; i++)
		{
			var chapter = chapters[i];
			chapterIds.push(chapter.id);
			for(var j=0; j<(chapter.sections||[]).length; j++)
			{
				var section = chapter.sections[j];
				var pageDesc = [chapter.id, section.id, ""].join("|");
				pageSeq[pageDesc] = count++;
			
				for(var k=0; k<(section.pages||[]).length; k++)
				{
					var page = section.pages[k];
					pageDesc = [chapter.id, section.id, page.id].join("|");
					pageSeq[pageDesc] = count++;
				}
			}
		}
	});

	var LAST_LOCATION_STALE_TIME = 15 * 60 * 1000; // 15 minutes

	phnq.routes(
	{
		"default": function(path)
		{
			if(Modernizr.localstorage && navigator.standalone)
			{
				var lastLoc = localStorage["last-location"];
				if(lastLoc)
				{
					var lastLocTime = parseFloat(localStorage["last-location-time"] || "0");
					if(new Date().getTime() - lastLocTime < LAST_LOCATION_STALE_TIME)
					{
						location.hash = lastLoc;
						return;
					}
				}
			}
			
			phnq.notify.post("show-splash");
			
			if(currentChapterId != 0)
			{
				phnq.notify.post("chapter-did-change", currentChapterId = 0);
			}

			if(!!currentSectionId)
			{
				phnq.notify.post("section-did-change", currentSectionId = null);
			}

			if(!!currentPageId)
			{
				phnq.notify.post("page-did-change", currentPageId = null);
			}
		},
		
		"(/\\d+)?(/[\\w-]+)?(/[\\w-]+)?": function(chapterId, sectionId, pageId)
		{
			phnq.notify.post("dismiss-splash");
			
			chapterId = parseFloat(chapterId.replace(/^\//, ""));
			sectionId = !!sectionId ? sectionId.replace(/^\//, "") : null;
			pageId = !!pageId ? pageId.replace(/^\//, "") : null;
			
			if(chapterId != currentChapterId)
			{
				phnq.notify.post("chapter-did-change", currentChapterId = chapterId);
			}

			if(currentSectionId != sectionId)
			{
				phnq.notify.post("section-did-change", currentSectionId = sectionId);
			}

			if(!!currentSectionId)
			{
				var getPageId = function(fn)
				{
					if(!!pageId)
					{
						fn(pageId);
					}
					else
					{
						currentPageId = null;
						btt.cc.routes.getCurrentChapterSectionPage(function(chapter, section, page)
						{
							fn((page||{}).id);
						});
					}
				};
			
				getPageId(function(thePageId)
				{
					if(currentPageId !== thePageId)
					{
						phnq.notify.post("page-did-change", currentPageId = pageId);
						
						var pageDesc = [currentChapterId, currentSectionId, currentPageId].join("|");
						
						btt.cc.model.student.getCurrent(function(student)
						{
							student.mostRecentPage = pageDesc;
							student.save();
						});
					}
				});
			}
			
			if(Modernizr.localstorage)
			{
				localStorage["last-location"] = location.hash;
				localStorage["last-location-time"] = new Date().getTime();
			}
			
			btt.cc.routes.routeChanges++;
		}
	});
});
