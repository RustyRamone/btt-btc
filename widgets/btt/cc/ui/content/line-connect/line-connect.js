require("btt.cc.media");

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
		
		$$(".line-connect").click(function()
		{
			$$(".pop").addClass("invisible");
		});
		
		$$(".src-thing-name").text(this.params.srcThingName || "term");
		$$(".dest-thing-name").text(this.params.destThingName || "definition");
		
		if(this.params.smallText)
		{
			$$().addClass("small-text");
		}
		
		var exps = this.exps = [];
		var meanings = [];
		
		for(var i=0; i<this.params.definitions.length; i++)
		{
			this.params.definitions[i].expression.index = this.params.definitions[i].meaning.index = i;
			exps.push(this.params.definitions[i].expression);
			meanings.push(this.params.definitions[i].meaning);
		}
		
		exps = phnq_core.shuffle(exps);
		meanings = phnq_core.shuffle(meanings);

		var rows = [];
		for(var i=0; i<exps.length; i++)
		{
			var row = 
			{
				expression: exps[i],
				meaning: meanings[i],
				wideExp: !!this.params.wideExpressions
			};
			
			rows.push(row);
		}
		
		$$(".definitions").html(this.renderPartial("row", rows));
		
		// =====================================================
		// =================== DRAG AND DROP ===================
		// =====================================================
		$$(".drag-src").on("dragstart", function(evt)
		{
			$$(".selected").removeClass("selected");
			$$(".pop").addClass("invisible");
			evt.originalEvent.dataTransfer.setData("text", $(this).attr("data-exp").trim());
		});

		$$(".drag-dest").on("dragover", function(evt)
		{
			if(!$(this).hasClass("correct"))
			{
				evt.preventDefault();
			}
		});
		
		$$(".drag-dest").on("dragenter", function(evt)
		{
			$(this).addClass("over");
		});

		$$(".drag-dest").on("dragleave", function(evt)
		{
			$(this).removeClass("over");
		});

		$$(".drag-dest").on("drop", function(evt)
		{
			$$(".drag-dest.over").removeClass("over");
			
			var exp = evt.originalEvent.dataTransfer.getData("text");
			var meaning = $(this).attr("data-meaning").trim();
			
			_this.handleAttempt(exp, meaning, this);
			return false;
		});

		// =========================================================
		// =================== NON-DRAG AND DROP ===================
		// =========================================================
		$$(".drag-src").click(function()
		{
			btt.cc.audio.sfx.play("select");
			$$(".selected").removeClass("selected");
			$$(".pop").addClass("invisible");
			$(this).addClass("selected");
		});
		
		$$(".drag-dest").click(function()
		{
			var exp = $$(".selected").attr("data-exp");
			if(exp && !$(this).hasClass("correct"))
			{
				btt.cc.audio.sfx.play("select");
				exp = exp.trim();
				var meaning = $(this).attr("data-meaning").trim();
				_this.handleAttempt(exp, meaning, this);
			}
		});
		// =========================================================
		// =========================================================
		
		var resizeCanvas = function()
		{
			var canvasWidth = $$("canvas").outerWidth();
			var canvasHeight = $$("canvas").outerHeight();
			$$("canvas").attr("width", canvasWidth);
			$$("canvas").attr("height", canvasHeight);
		};
		
		resizeCanvas();
		
		$(window).resize(function()
		{
			resizeCanvas();
			_this.drawLines();
		});
		
		phnq.notify.listen("content-reset", function()
		{
			$$().removeClass("hide-intro-overlay");
			$$(".drag-src").attr("draggable", "true");
			$$(".drag-src").removeClass("correct");
			$$(".drag-src").removeClass("selected");
			$$(".drag-dest").removeClass("correct");
			$$(".drag-dest").removeAttr("data-exp");
			$$(".pop").removeClass("invisible");
			_this.drawLines();
		}, this);
		
		var wphSel = "#"+$$().attr("id")+" .wph";
		phnq_widgets.scan({wphSelector:wphSel});
	},
	
	destroy: function()
	{
		phnq.notify.unlistenAll(this);
	},

	handleAttempt: function(expIdx, meaningIdx, destElmnt)
	{
		var $$ = this.get$$();
		
		var isCorrect = expIdx == meaningIdx;
		
		btt.cc.model.student.getCurrent(function(student)
		{
			student.setCurrentActivityAnswer(expIdx, meaningIdx, isCorrect);
		});
		
		if(isCorrect)
		{
			btt.cc.audio.sfx.play("correct");
			$(destElmnt).addClass("correct");
			$(destElmnt).attr("data-exp", expIdx);
			$$(".drag-src[data-exp='"+expIdx+"']").addClass("correct");
			$$(".drag-src[data-exp='"+expIdx+"']").removeAttr("draggable");
			this.drawLines();
		}
		else
		{
			btt.cc.audio.sfx.play("incorrect");
			return false;
		}
		
		if($$(".drag-dest.correct").length == this.exps.length)
		{
			$$(".next-button").removeClass("disabled");
		}
	},
	
	drawLines: function()
	{
		var $$ = this.get$$();
		
		if($$("canvas").length == 0)
		{
			return;
		}
		
		var canvas = $$("canvas").get(0);
		var ctx = canvas.getContext("2d");
		var canvasPos = $$(canvas).offset();

		ctx.clearRect(0, 0, $$(canvas).outerWidth(), $$(canvas).outerHeight());

		ctx.beginPath();
		ctx.lineWidth = 5;
		ctx.lineCap = "round";
        ctx.strokeStyle = "#e22f5b";
		
		for(var i=0; i<this.params.definitions.length; i++)
		{
			var exp = this.params.definitions[i].expression;
			var srcSel = ".drag-src[data-exp='"+exp.index+"']";
			var destSel = ".drag-dest[data-exp='"+exp.index+"']";
			
			if($$(destSel).length == 1)
			{
				
				var srcPt = $$(srcSel).offset();
				var destPt = $$(destSel).offset();
				
				srcPt.left -= canvasPos.left;
				srcPt.top -= canvasPos.top;
				destPt.left -= canvasPos.left;
				destPt.top -= canvasPos.top;
				
				srcPt.left += $$(srcSel).outerWidth() + 10;
				srcPt.top += ($$(srcSel).outerHeight() / 2);

				destPt.left -= 10;
				destPt.top += ($$(destSel).outerHeight() / 2);
				
				ctx.moveTo(srcPt.left, srcPt.top);
				ctx.lineTo(destPt.left, destPt.top);
			}
		}		

		ctx.stroke();
	}
};
