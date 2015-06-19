btt.cc.model.chapter =
{
	chapters: [],

	list: function(fn)
	{
		fn(phnq_core.clone(this.chapters));
	},
	
	get: function(id, fn)
	{
		var chaptersById = {};
		$(phnq_core.clone(this.chapters)).each(function()
		{
			chaptersById[this.id] = this;
		});
		fn(chaptersById[id]);
	},
	
	generateScoreSubmissionSchema: function()
	{
		var esc = function(str)
		{
			return str.replace(/&/g, "&amp;");
		};
		
		var buf = [];
		buf.push("<composersCorner><chapters>");
		this.list(function(chapters)
		{
			for(var i=1; i<chapters.length; i++)
			{
				var chapter = chapters[i];
				buf.push("<chapter id=\""+chapter.id+"\">");
				buf.push("<title>"+esc(chapter.title.replace(/<br\/>/g, " "))+"</title>");
				
				for(var j=0; j<chapter.sections[0].pages.length; j++)
				{
					var page = chapter.sections[0].pages[j];
					
					switch(page.type)
					{
						case "btt.cc.ui.content.composer-music":
						case "btt.cc.ui.content.multiple-choice":
						case "btt.cc.ui.content.generic-selector":
						{
							for(var k=0; k<page.questions.length; k++)
							{
								var question = page.questions[k];
								var drillId = page.id + "-" + (question.id || "q"+(k+1));
								var drillTitle = page.title + " - question "+(k+1);
								buf.push("<drill id=\""+esc(drillId)+"\">"+esc(drillTitle)+"</drill>");
							}
							break;
						}
						case "btt.cc.ui.content.motif-maker":
						{
							buf.push("<drill id=\"motif\">Motif</drill>");
							break;
						}
						case "btt.cc.ui.content.line-connect":
						case "btt.cc.ui.content.note-selector":
						{
							buf.push("<drill id=\""+esc(page.id)+"\">"+esc(page.title)+"</drill>");
							break;
						}
					}
				}
				
				var reflections = chapter.sections[3].pages[0].reflections;
				for(var j=0; j<reflections.length; j++)
				{
					buf.push("<drill id=\"reflection-"+(j+1)+"\">"+esc(reflections[j])+"</drill>");
				}
				
				buf.push("</chapter>");
			}
		});
		buf.push("</chapters></composersCorner>");
		return buf.join("");
	}
};
