reqt = require('request');

module.exports = function(app) {

	app.get('/image/rand.jpg', function(req,res){
		reqt({
			url: 'http://placekitty.artisan.io/200/200',
			encoding: null // Prevents Request from converting response to string
		}, function(err, response, body) {
			return res.end(body);
		});
	})

};