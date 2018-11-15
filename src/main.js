#!/usr/bin/env nodejs
const http = require('http')
const qs = require('querystring');



const server = http.createServer(function(req, res) {

	if (req.method == 'POST') {

		var body = '';
		var context = '';

		req.on('data', function (data) {

			body += data

			if (body.length > 1e6) {

				req.connection.destroy();

			}
		});

		req.on('end', function() {

			context  = console.log(JSON.parse(body));

		});

		console.log(context);
	}

});

server.listen(8443, 'localhost');
