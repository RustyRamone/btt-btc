require("phnq.notify");
require("btt.cc.model");

var widget =
{
	ready: function($$)
	{
		btt.cc.main.moveModals($$);
		
		if(!!navigator.userAgent.match(/iPad/i))
		{
			$$().addClass("iPad");
		}
		
		$$("input").keyup(function()
		{
			var formComplete = true;
			$$("input").each(function()
			{
				formComplete = formComplete && $(this).val().trim().length > 0; 
			});
			
			if(formComplete)
			{
				$$(".next-button").removeClass("disabled");
			}
			else
			{
				$$(".next-button").addClass("disabled");
			}
		});
		
		var callbackFn = null;
		
		$$(".next-button").click(function()
		{
			var firstName = $$(".first-name").val();
			var lastName = $$(".last-name").val();
			var classId = $$(".class-id").val();

			btt.cc.model.student.getCurrent(function(student)
			{
				student.firstName = firstName;
				student.lastName = lastName;
				student.classId = classId;
				student.save();
				$$().modal("hide");
				phnq.notify.post("student-info-set");
				callbackFn();
			});
		});
		
		phnq_core.extend(btt.cc.ui.login,
		{
			requireLogin: function(fn)
			{
				// for now, suppress login on iPad.
				// if(!!navigator.userAgent.match(/iPad/i))
				// {
				// 	return fn();
				// }
				
				btt.cc.model.student.getCurrent(function(student)
				{
					if(!student.firstName || !student.lastName || !student.classId)
					{
						callbackFn = fn;
						$$(".first-name").val("");
						$$(".last-name").val("");
						$$(".class-id").val("");
						$$().modal();
					}
					else
					{
						fn();
					}
				});
			}
		});		
	}
};
