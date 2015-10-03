require("phnq.notify");
require("btt.cc.model");

var currentChapterNum = null;
var disableOnScroll = false;

var widget =
{
	ready: function($$)
	{
		var _this = this;
		
		btt.cc.model.chapter.list(function(chapters)
		{
			var splash = _this.renderPartial("splash-item", {});
			
			// We're rendering the first (0th) chapter as "splash-item", so
			// remove it from the list.
			chapters.splice(0, 1);
			var chapterItems = _this.renderPartial("chapter-item", chapters);
			
			$$(".chapter-items").html(splash+chapterItems);
			
			var contWidth = $$(".splash-item").outerWidth(true) + (chapters.length * $$(".chapter-item").outerWidth(true))
			
			$$(".chapter-items").width(contWidth);
			
			
			if(btt.cc.main.respondsToTouch)
			{
				var touchX0, dTouchX=0;
				var scrollPos;

				$$(".chapter-items").on("touchstart", function(evt)
				{
					$$().removeClass("animate");
					touchX0 = evt.originalEvent.targetTouches[0].pageX;
					scrollPos = _this.getScrollPositionForChapter(_this.currentChapter);
				});

				$$(".chapter-items").on("touchmove", function(evt)
				{
					dTouchX = evt.originalEvent.targetTouches[0].pageX - touchX0;
					$$(".chapter-items").css({transform:"translateX("+(dTouchX-scrollPos)+"px)"});
				});

				$$(".chapter-items").on("touchend", function(evt)
				{
					$$().addClass("animate");

					if(dTouchX > 50)
					{
						btt.cc.routes.previousChapter();
					}
					else if(dTouchX < -50)
					{
						btt.cc.routes.nextChapter();
					}
					else
					{
						var chapter = $(evt.target).closest("[data-chapter]").attr("data-chapter");
						btt.cc.routes.navigateTo(chapter);
					}
					dTouchX = 0;
				});
			}
			else
			{
				$(chapters).each(function()
				{
					var chNum = this.id;
					$$(".chapter"+chNum).click(function()
					{
						btt.cc.routes.navigateTo(chNum);
					});
				});
				
				$$(".splash-item").click(function()
				{
					btt.cc.routes.navigateTo(0);
				});
			}
		});
		
		phnq.notify.listen("chapter-did-change", function(chNum)
		{
			_this.scrollToChapter(chNum);
		});
		
		$(window).resize(function()
		{
			if(btt.cc.main.isInNavMode() && currentChapterNum != null)
				_this.scrollToChapter(currentChapterNum, false);
		});
		
		$("body").on("orientationchange", function()
		{
			if(btt.cc.main.isInNavMode() && currentChapterNum != null)
				_this.scrollToChapter(currentChapterNum, false);
		});
		
		phnq.notify.listen("switched-to-nav-mode", function(chNum)
		{
			if(currentChapterNum != null)
				_this.scrollToChapter(currentChapterNum, false);
		});
		
		this.onScrollDone(function()
		{
			var currentScroll = $$().scrollLeft();
			var closestChapterDist = 100000000;
			var closestChapter = 0;
			var numChapters = $$(".chapter-item").length+1;
			for(var i=0; i<numChapters; i++)
			{
				var scrollPos = Math.abs(_this.getScrollPositionForChapter(i));
				if(scrollPos < closestChapterDist)
				{
					closestChapterDist = scrollPos;
					closestChapter = i;
				}
			}
			btt.cc.routes.navigateTo(closestChapter);
		});
	},
	
	getScrollPositionForChapter: function(chNum)
	{
		var $$ = this.get$$();

		var slctr = chNum == 0 ? ".splash-item" : ".chapter"+chNum;
		
		if(isNaN(chNum))
			slctr = chNum;

		var left = $$(slctr).position().left - $$(".chapter-items").position().left;
		
		// - parseFloat($$(".chapter-items").css("marginLeft"));
		var width = $$(slctr).outerWidth(true);
		var chapterSelectorWidth = $$().width();
		
		var scrollPos = left - (chapterSelectorWidth/2) + (width/2);
		return scrollPos;
	},
	
	scrollToChapter: function(chNum)
	{
		var $$ = this.get$$();

		var scrollPos = this.getScrollPositionForChapter(chNum);
		$$(".chapter-items").css({transform:"translateX("+(-scrollPos)+"px)"});
		// $$(".chapter-items").css({marginLeft:-scrollPos})
		
		var slctr = chNum == 0 ? ".splash-item" : ".chapter"+chNum;
		$$(".chapter-items > .selected").removeClass("selected");
		$$(slctr).addClass("selected");
		
		this.currentChapter = chNum;
	},
	
	onScrollDone: function(fn)
	{
		var $$ = this.get$$();
		
		var pid = null;
		$$().scroll(function()
		{
			if(disableOnScroll)
				return;
			
			if(pid)
				clearTimeout(pid);
			
			pid = setTimeout(function()
			{
				fn();
			}, 200);
		});
	}
};
