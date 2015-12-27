var Express = require("express");
var app = new Express();

app.use(Express.static("public"));

app.listen(4000, function(error) {
	console.log("Working !");
});
