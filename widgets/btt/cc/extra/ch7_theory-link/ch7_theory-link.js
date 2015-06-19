var widget =
{
	ready: function($$)
	{
		var parentElmnt = $$().parent().closest(".winst");
		var parentWidget = $(parentElmnt).data("widget");

		var audioPlayer = parentWidget.findOne(/audio-player/);

		$$().css("opacity", 0);




		audioPlayer.onProgress(function(progress)
		{
			if(progress == 0)
			{
				$$().css("opacity", 0);
			}
			else
			{
				var mid = $(parentElmnt).offset().left + ($(parentElmnt).width()/2);


				$$().css("opacity", 1);
				if(progress < 0.31)
				{
					$$().offset({left: mid-275, top: 275});
				}
				else if(progress < 0.64)
				{
					$$().offset({left: mid-70, top: 150});
				}
				else
				{
					$$().offset({left: mid+125, top: 235});
				}
			}


		});
	}
};
