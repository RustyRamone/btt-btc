require("phnq.notify");
require("btt.cc.model");
require("btt.cc.routes");

var widget =
{
	updateCurrentUser: function()
	{
		var $$ = this.get$$();
		
		btt.cc.model.student.getCurrent(function(student)
		{
			if(student.firstName || student.lastName)
			{
				$$(".current-user").text(student.firstName + " " + student.lastName);
				$$(".account").addClass("user-set");
			}
		});
	},
	
	ready: function($$)
	{
		var _this = this;
		
		phnq.notify.listen("student-info-set", function()
		{
			_this.updateCurrentUser();
		});
		
		this.updateCurrentUser();
		
		var bttUser = $.cookie("btt_user") || this.i18n("guest");
		if(bttUser)
		{
			$$(".account").addClass("logged-in");
		}
		
		btt.cc.model.chapter.list(function(chapters)
		{
			$$(".num-chapters").text(chapters.length);
			
			$(chapters).each(function()
			{
				this.title = this.title.replace("<br/>", " ");
				
				if(this.id == "0")
					this.chapterTitle = this.title;
				else
					this.chapterTitle = "CH. "+this.id+" "+this.title;
			});
			
			$$(".chapter-nav .dropdown-menu").html(_this.renderPartial("chapter-list-item", chapters));
		});
		
		$$(".next").click(function()
		{
			btt.cc.routes.nextChapter();
		});

		$$(".previous").click(function()
		{
			btt.cc.routes.previousChapter();
		});
		
		phnq.notify.listen("chapter-did-change", function(chNum)
		{
			btt.cc.model.chapter.get(chNum, function(chapter)
			{
				if(chapter)
				{
					$$(".current-chapter").text(chapter.chapterTitle);
				}
			});
		});

		$$(".logout").click(function(evt)
		{
			evt.preventDefault();
			window.location = $(this).attr("href");
		});
	}
};
