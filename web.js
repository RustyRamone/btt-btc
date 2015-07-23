var path = require("path");
var connect = require("connect");
var phnq_widgets = require("phnq_widgets");
var pkg = require("./package.json");
var commander = require("commander");

var realFs = require('fs')
var gracefulFs = require('graceful-fs')
gracefulFs.gracefulify(realFs)

commander
  .version(pkg.version)
  .option("-p, --port [port]", "specify port (default 80)")
  .option("-g, --generate", "generate only -- do not start server")
  .parse(process.argv);

var port = commander.port || process.env.PORT || 8080;
var rootDir = path.resolve(".");
var renderedDir = path.resolve("./rendered");

phnq_widgets.renderStaticWidget("btt.cc.main", rootDir, "index.html", function(err)
{
	if(err)
	{
		console.log("Error rendering widget: ", "btt.cc.main", err);
	}
	else
	{
		if(!commander.generate)
		{
			console.log("Starting on port ", port);
			connect().use(connect.staticCache()).use(connect.compress()).use(connect.static(renderedDir)).listen(port);
		}
	}
});
