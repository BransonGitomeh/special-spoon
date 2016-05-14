module.exports = (router) => {
	// $ setup the router to respond with a html file
	router.all('/', function*(next) {
		this.body = yield render("index/index.html");
	});

	router.all('/api', function*(next) {

		var parseString = require('xml2js').parseString;

		function parse(xml, callback) {
			parseString(xml, function(err, result) {
				console.dir(result)
				callback(null, result)
			});
		}

		function parserThunk(xml) {
			return function(callback) {
				parse(xml, callback)
			}
		}

		var examples = require("./soapExamples")
		var jsonRes = yield parserThunk(examples.processCheckoutAction)

		this.body = jsonRes
	});
}