require("ext.jquery-cookie");

var COOKIE_NAME = "cc_student2";
var LOGIN_REDIRECT_COOKIE_NAME = "btt_login_redirect";
var currentStudent = null;

btt.cc.model.student =
{
	getCurrent: function(fn)
	{
		if(!currentStudent)
		{
			if($.cookie(LOGIN_REDIRECT_COOKIE_NAME))
			{
				currentStudent = new Student();
				$.removeCookie(LOGIN_REDIRECT_COOKIE_NAME, {path:"/"})
			}
			else
			{
				var cookie = (Modernizr.localstorage ? localStorage[COOKIE_NAME] : $.cookie(COOKIE_NAME)) || "{}";
				currentStudent = new Student(JSON.parse(cookie));
			}
		}
		fn(currentStudent);
	},
	
	log: function()
	{
		this.getCurrent(function(student)
		{
			console.log(student);
		});
	}
};

$.getJSON("/service_studentInfo.php", {}, function(data)
{
	btt.cc.model.student.getCurrent(function(curStud)
	{
		curStud.firstName = data.firstName;
		curStud.lastName = data.lastName;
		curStud.classId = data.classID;
		phnq.notify.post("student-info-set");
	});
});

window.LOG_STUDENT = function()
{
	btt.cc.model.student.log();
};

var Student = phnq_core.clazz(
{
	init: function(data)
	{
		data = data || {};
		phnq_core.extend(this, data);
	},
	
	save: function()
	{
		if(Modernizr.localstorage)
		{
			localStorage[COOKIE_NAME] = JSON.stringify(this);
		}
		else
		{
			$.cookie(COOKIE_NAME, JSON.stringify(this));
		}
	},
	
	getCurrentActivityAnswer: function(questionId, fn)
	{
		var _this = this;
		
		btt.cc.routes.getCurrentChapterSectionPage(function(ch, sec, pg)
		{
			_this.activities = _this.activities || {};
			var activityId = [ch.id, sec.id, pg.id, questionId].join("#");
			fn(_this.activities[activityId]);
		});
	},
	
	setCurrentActivityAnswer: function(questionId, answer, isCorrect, allowOverwrite)
	{
		var _this = this;
		
		btt.cc.routes.getCurrentChapterSectionPage(function(ch, sec, pg)
		{
			var activityId = [ch.id, sec.id, pg.id, questionId].join("#");
			_this.activities = _this.activities || {};
			
			if(allowOverwrite || !_this.activities[activityId])
			{
				_this.activities[activityId] = {answer:answer, isCorrect:isCorrect};
				_this.save();
			}
		});
	},
	
	saveReflections: function(reflections)
	{
		this.reflectionsCache = this.reflectionsCache || {};

		var chId = btt.cc.routes.getCurrentChapter();
		
		var params =
		{
			chapterID: chId,
			firstName: this.firstName,
			lastName: this.lastName,
			className: this.classId,
			ref_1: reflections[0],
			ref_2: reflections[1],
			ref_3: reflections[2]
		};
		
		this.reflectionsCache[chId] = reflections;
		
		$.post("service_reflectionSubmit.php", params, function(data)
		{
			// throw away...
		});
	},
	
	fetchReflection: function(fn)
	{
		var _this = this;
		
		this.reflectionsCache = this.reflectionsCache || {};
		
		var chId = btt.cc.routes.getCurrentChapter();
		
		if(this.reflectionsCache[chId] && this.reflectionsCache[chId] instanceof Array)
		{
			return fn(this.reflectionsCache[chId]);
		}
		
		var params =
		{
			chapterID: chId,
			firstName: this.firstName,
			lastName: this.lastName,
			className: this.classId
		};
		
		$.getJSON("service_getReflections.php", params, function(data)
		{
			var reflections = [];
			$(data).each(function()
			{
				reflections.push(this.text);
			});

			if(reflections.length == 3)
			{
				fn(_this.reflectionsCache[chId] = reflections);
			}
		});
	}
});
