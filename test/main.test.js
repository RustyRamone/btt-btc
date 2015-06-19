var Browser = require("zombie");
var assert = require("assert");
var connect = require("connect");
var path = require("path");
var phnq_widgets = require("phnq_widgets");

var TEST_SERVER_PORT = 13579;
var ROOT_WIDGET = "btt.cc.main";
var TEST_APP_URL = "http://localhost:"+TEST_SERVER_PORT+"/"+ROOT_WIDGET+".html";

var browser = new Browser();

describe("main.test", function()
{
	before(function(done)
	{
		phnq_widgets.renderStaticWidget(ROOT_WIDGET, path.resolve(__dirname, ".."), function(err)
		{
			if(err)
			{
				console.log("Error rendering widget: ", type, err);
			}
			else
			{
				connect().use(connect.static(path.resolve(__dirname, "..", "rendered"))).listen(TEST_SERVER_PORT);
				done();
			}
		});
	});
	
	describe("initial page load", function()
	{
		before(function(done)
		{
			browser.visit(TEST_APP_URL, function ()
			{
				done();
			});
		});
		
		it("should display the correct title", function()
		{
			assert.equal("main", browser.text("h1"));
		});
	});
});
