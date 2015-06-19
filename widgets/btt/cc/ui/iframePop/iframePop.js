var widget =
{
	ready: function($$)
	{
		var _this = this;
		
		phnq_core.extend(btt.cc.ui.iframePop,
		{
			popUrl: function(url)
			{
				if($$("iframe").length)
				{
					$$("iframe").attr("src", url);
					$$().modal();
				}
				else
				{
					$$("div").html("<iframe></iframe>");
					$$("iframe").load(function()
					{
						$$().modal();
					});
					$$("iframe").attr("src", url);
				}
			},
			
			popIFrameCode: function(code)
			{
				$$("iframe").remove();
				$$("div").html(code);
				$$("iframe").load(function()
				{
					$$().modal();
				});
			},
            
            popImg: function(url)
            {
                $$("iframe").remove();
                $$("div").html("<img src=\""+url+"\"/>");
                $$().modal();
            },
      
      popPdf: function(url)
      {
        var isIOS = true;
        
        if(isIOS)
        {
  				$$("iframe").remove();
          var numPages = url.numPages || 0;
          var buf = [];
          if(numPages)
          {
            for(var i=0; i<numPages; i++)
            {
              buf.push("<img src=\""+url+"_"+i+".jpg\"/>");
            }
          }
          else
          {
            buf.push("<img src=\""+url+".jpg\"/>");
          }
  				$$("div").html(buf.join(""));
					$$().modal();
        }
        else
        {
          url = url.replace(/\[\d*\]$/, "");
          this.popUrl(url+".pdf");
        }
      }
		});
		
		$$().on("hidden", function()
		{
			$$("iframe").remove();
			return false;
		});
	}
};
