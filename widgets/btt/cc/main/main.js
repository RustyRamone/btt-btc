require("ext.modernizer");
require("ext.fastclick");
require("btt.cc.style");
require("btt.cc.routes");
require("btt.cc.model");
require("phnq.notify");

btt.cc.main.isIPad = !!navigator.userAgent.match(/iPad/i);
btt.cc.main.isIPhone = !!navigator.userAgent.match(/iPhone/i);
btt.cc.main.isIOS = !!navigator.userAgent.match(/(iPad|iPhone|iPod)/g);
btt.cc.main.isIE = !!navigator.userAgent.match(/MSIE/i);
btt.cc.main.isMac = !!navigator.appVersion.match(/Mac/i);
btt.cc.main.isWin = !!navigator.appVersion.match(/Win/i);
btt.cc.main.isAndroid = !!navigator.userAgent.match(/Android/i);

// For now, only allow touch events on iOS devices. Chrome on Windows may lie about its ability to support touch events.
var respondsToTouch = btt.cc.main.respondsToTouch = btt.cc.main.isIOS && !!('ontouchstart' in window)

if(respondsToTouch)
{
	$("body").on("touchmove", function(evt)
	{
		if($(evt.target).closest(".allow-touch-move").length == 0)
		{
			evt.preventDefault();
		}
	});
}

btt.cc.main.isInNavMode = function()
{
	return !$(".content-mode").is(":visible");
};

btt.cc.main.moveModals = function(dest$$)
{
	dest$$(".modal").each(function()
	{
		var classes = this.className.split(/\s+/);
		$(".modals ."+classes[0]).remove();
	});
	
	dest$$(".modal").appendTo(".modals");
};

btt.cc.main.isSupportedBrowser = function()
{
	if(navigator.userAgent.match(/Trident/))
	{
		$.browser.msie = true
	}

	if($.browser.safari && btt.cc.main.isMac)
	{
		try
		{
			var dotIdx = $.browser.version.indexOf(".");
			var majVer = dotIdx == -1 ? parseInt($.browser.version, 10) : parseInt($.browser.version.substring(0, dotIdx), 10);
			return majVer >= 536;
		}
		catch(ex)
		{
		}
	}
	if($.browser.chrome)
	{
		return true;
	}
	if($.browser.msie)
	{
		return $.browser.version >= 10;
	}
	return false;
};

if(!btt.cc.main.isSupportedBrowser())
{
	if($.browser.msie && $.browser.version < 9)
	{
		alert("Sorry. We don't support your web browser.\n\nYou may experience limited or no functionality.\n\nPlease try the latest version of Google Chrome, Apple Safari or Microsoft Internet Explorer.");
	}

}

var widget =
{
	ready: function($$)
	{
		FastClick.attach(document.body);

		var _this = this;

		if(btt.cc.main.isIE)
		{
			$$().addClass("isIE");
		}
		
		$$().on("orientationchange", function()
		{
			_this.handleOrientationChange();
		});

		if(!window.navigator.standalone)
		{
			if(btt.cc.main.isIPad)
			{
				this.scaleViewport(0.94);
			}
			else if(btt.cc.main.isIPhone)
			{
				this.scaleViewport(1);
				this.scaleViewport($(window).height() / 750);
			}
			else
			{
				this.scaleViewport(1);
				this.scaleViewport($(window).height() / 750);
			}
		}

		_this.handleOrientationChange();

		setTimeout(function()
		{
			$$().addClass("page-loaded");
		}, 1000);
		
		phnq.notify.listen("chapter-did-change", function(chNum)
		{
			_this.switchToNavModeIfNeeded($$, chNum);
		});
		
		phnq.notify.listen("section-did-change", function(section)
		{
			if(!!section)
				_this.switchToContentModeIfNeeded($$);
			else
				_this.switchToNavModeIfNeeded($$);
		});
		
		phnq.notify.listen("show-splash", function()
		{
			_this.showSplash();
		});

		phnq.notify.listen("dismiss-splash", function()
		{
			_this.dismissSplash();
		});

		if(!btt.cc.main.isSupportedBrowser())
		{
			btt.cc.ui.browserWarning.show();	
		}

		if(btt.cc.main.isIPhone)
		{
			setInterval(function()
			{
				window.scrollTo(0, 0);
			}, 1000);
		}
	},

	scaleViewport: function(initScale, minScale, maxScale)
	{
		minScale = minScale || initScale;
		maxScale = maxScale || initScale;
		if(initScale <= 1)
		{
			initScale = Math.round(initScale * 100) / 100;
			minScale = Math.round(minScale * 100) / 100;
			maxScale = Math.round(maxScale * 100) / 100;
			var viewportContent = "user-scalable=no,initial-scale="+initScale+",maximum-scale="+maxScale+",minimum-scale="+minScale;
			$("meta[name=viewport]").attr("content", viewportContent);
		}
	},
	
	handleOrientationChange: function()
	{
		if(!btt.cc.main.isIPad)
		{
			return;
		}
    
		var $$ = this.get$$();
		
		if(window.orientation == 0 || window.orientation == 180)
		{
			$$().addClass("skinny");
		}
		else
		{
			$$().removeClass("skinny");
		}
	},
	
	switchToNavModeIfNeeded: function($$)
	{
		if($$().hasClass("show-content"))
		{
			btt.cc.audio.sfx.play("reveal");
			$$().removeClass("show-content");
			$$().addClass("hide-content");
			phnq.notify.post("switched-to-nav-mode");
		}
	},

	switchToContentModeIfNeeded: function($$)
	{
		if($$().hasClass("hide-content"))
		{
			btt.cc.audio.sfx.play("reveal");
			$$().removeClass("hide-content");
			$$().addClass("show-content");
			phnq.notify.post("switched-to-content-mode");
		}
	},

	showSplash: function()
	{
		var $$ = this.get$$();
		$$(".splash").css("display", "inherit");
		$$(".splash").removeClass("dismissed");
	},
	
	dismissSplash: function()
	{
		var $$ = this.get$$();
		$$(".splash").addClass("dismissed");
		
		setTimeout(function()
		{
			$$(".splash").css("display", "none");
		}, 1000);
		
	}
};
