require("btt.cc.model");
require("btt.cc.routes");
require("phnq.notify");
require("btt.cc.ui.content.title");
require("btt.cc.ui.content.staff-player");
require("btt.cc.ui.content.composition-model");
require("btt.cc.ui.content.create-composition");
require("btt.cc.ui.content.expand-it");
require("btt.cc.ui.content.reflect-discuss");
require("btt.cc.ui.content.composer-music");
require("btt.cc.ui.content.motif-maker");
require("btt.cc.ui.content.line-connect");
require("btt.cc.ui.content.note-selector");
require("btt.cc.ui.content.multiple-choice");
require("btt.cc.ui.content.generic-selector")
require("btt.cc.ui.content.about");
require("btt.cc.ui.content.contact");
require("btt.cc.ui.content.faq");
require("btt.cc.extra.ch7_theory-link");

btt.cc.ui.section.suppressIntroOverlay = function()
{
	btt.cc.routes.routeChanges = 0;
};

var widget =
{
	ready: function($$)
	{
		var _this = this;
		
		$$(".burger").click(function()
		{
			btt.cc.media.stopAllAudio();
			var contentIsVisible = btt.cc.routes.toggleContentVisible();
			
			if(!contentIsVisible)
			{
				setTimeout(function()
				{
					_this.setSubtitleOverlayVisible(false);
				}, 500);
			}
		});
		
		$$(".refresh").click(function()
		{
			phnq.notify.post("content-reset");
		});
		
		$$(".previous").click(function()
		{
			btt.cc.routes.previousPage();
		});

		$$(".next").click(function()
		{
			btt.cc.routes.nextPage();
		});
		
		$$(".subtitle-overlay .dismiss").click(function()
		{
			_this.setSubtitleOverlayVisible(false);
			btt.cc.audio.sfx.play("revealPage");
			phnq.notify.post("subtitle-overlay-dismissed");
		});
		
		phnq.notify.listen("section-did-change", function(sectionId)
		{
			// only show subtitle-overlay if user navigated to this view
			if(btt.cc.routes.routeChanges > 0)
			{
				btt.cc.routes.getCurrentChapterSectionPage(function(chapter, section, page)
				{
					if(!!section && section.introOverlay)
					{
						$$(".subtitle-overlay").removeClass().addClass("subtitle-overlay");
						$$(".subtitle-overlay").addClass(section.id);
						$$(".subtitle-overlay .title").text(section.introOverlay.title);
						$$(".subtitle-overlay .synopsis").html(section.introOverlay.synopsis);
						$$(".subtitle-overlay .synopsis-extra").html(section.introOverlay.synopsisExtra || "");

						$$(".subtitle-overlay .synopsis-extra li").click(function()
						{
							var target = $(this).attr("data-target");
							location.hash = "#/"+chapter.id+"/"+section.id+"/"+target;
							_this.setSubtitleOverlayVisible(false);
						});
					
						_this.setSubtitleOverlayVisible(true);
					}
				});
			}
		});
		
		phnq.notify.listen("page-did-change", function(sectionId)
		{
			btt.cc.media.stopAllAudio();
			
			btt.cc.routes.getCurrentChapterSectionPage(function(chapter, section, page)
			{
				if(page)
				{
					$$().removeClass("no-content");
					_this.updateBreadcrumb(chapter.id, section.title, page.breadcrumb || page.title);
					$$(".content").html("");
					$$(".content").appendWidget(page.type, page, function()
					{
						if(page.css)
						{
							$.each(page.css, function(key, val)
							{
								$$(".content").find(key).css(val);
							});
						}

						if(page.extra)
						{
							$$("."+page.type.replace(/\./g, "\\.")).appendWidget(page.extra.type, page.extra.params, function()
							{

							});
						}
					});
				}
				else
				{
					_this.updateBreadcrumb(chapter.id, section.title, "[PAGE NOT FOUND]");
					$$(".content").html("NOT FOUND");
				}
			});
		});
	},
	
	setSubtitleOverlayVisible: function(visible)
	{
		var $$ = this.get$$();

		if(visible)
		{
			$$(".subtitle-overlay").removeClass("invisible");
		}
		else
		{
			$$(".subtitle-overlay").addClass("invisible");
		}
	},

	updateBreadcrumb: function(chapterLabel, sectionLabel, activityLabel)
	{
		var $$ = this.get$$();
		
		var key = chapterLabel == "0" ? "breadcrumb-0" : "breadcrumb";
		
		var breadcrumb = this.i18n(key,
		{
			chapterLabel: chapterLabel,
			sectionLabel: sectionLabel,
			activityLabel: activityLabel
		}).replace(/\/\s*$/, "");
		
		$$(".b-crumb").html(breadcrumb);
	}
};
