require("btt.cc.ui.iframePop");

var widget =
{
	ready: function($$)
	{
		var _this = this;
		
		btt.cc.main.moveModals($$);
		
		$$(".next-page .next-button").click(function()
		{
			btt.cc.model.student.getCurrent(function(student)
			{
				var reflections = [];
				for(var i=0; i<3; i++)
				{
					student.getCurrentActivityAnswer(i, function(answer)
					{
						if(answer)
						{
							reflections.push(answer.answer);
						}
					});
				}
				student.saveReflections(reflections);
			});
		});
		
		$$(".tips").click(function()
		{
			$(".coaching-tips-pop").modal();
		});
		
		$(".coaching-tips-pop .next-button").click(function()
		{
			$(".coaching-tips-pop").modal("hide");
		});
		
		$$(".reflection").click(function()
		{
			var index = $(this).attr("data-index");

			btt.cc.ui.login.requireLogin(function()
			{
				$(".reflection-pop[data-index="+index+"]").modal();
			});
		});

		$(".reflection-pop").on("show", function()
		{
			var _this_pop = this;
			var index = $(this).attr("data-index");
			btt.cc.model.student.getCurrent(function(student)
			{
				student.fetchReflection(function(reflections)
				{
					if(reflections)
					{
						$(_this_pop).find("textarea").val(reflections[index]);
					}
				});
			});
		});
		
		$(".reflection-pop").on("shown", function()
		{
			$(this).find("textarea").focus();
		});
		
		$(".reflection-pop textarea").keyup(function()
		{
			var charsLeft = parseFloat($(this).attr("maxlength")) - $(this).val().length;
			$(this).closest(".reflection-pop").find(".chars-left").text(charsLeft);
			
			if($(this).val().length == 0)
			{
				$(this).closest(".reflection-pop").find(".next-button").addClass("disabled");
			}
			else
			{
				$(this).closest(".reflection-pop").find(".next-button").removeClass("disabled");
			}
		});
		
		$$(".rubric").click(function()
		{
			btt.cc.ui.iframePop.popPdf(btt.cc.media.mediaFileUrl(_this.params.evaluationRubricFile));
		});
		
		$(".reflection-pop .next-button").click(function()
		{
			var index = $(this).closest(".reflection-pop").attr("data-index");
			var q = $(this).closest(".reflection-pop").find("label.reflection").text();
			var a = $(this).closest(".reflection-pop").find("textarea").val();
			
			btt.cc.model.student.getCurrent(function(student)
			{
				student.setCurrentActivityAnswer(index, a, true, true);
			});
						
			if(a.trim().length > 0)
			{
				$$(".reflection[data-index="+index+"]").addClass("done");
			}
			
			if($$(".reflection").length == $$(".reflection.done").length)
			{
				$$(".next-page .next-button").removeClass("disabled");
			}
		
			var _this = this;
			setTimeout(function()
			{
				$(_this).closest(".reflection-pop").modal("hide");
			},100);
		});
		
		btt.cc.ui.login.requireLogin(function()
		{
			// load answers if they exist
			btt.cc.model.student.getCurrent(function(student)
			{
				student.fetchReflection(function(reflections)
				{
					if(reflections && reflections.length == 3)
					{
						for(var i=0; i<_this.params.reflections.length; i++)
						{
							$$(".reflection[data-index="+i+"]").addClass("done");
						}

						if($$(".reflection").length == $$(".reflection.done").length)
						{
							$$(".next-page .next-button").removeClass("disabled");
						}
					}
				});
			});
		});
		// var wphSel = "#"+$$().attr("id")+" .wph";
		// phnq_widgets.scan({wphSelector:wphSel});
	}
};
