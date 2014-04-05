module.exports = function(server) {

	// Create an API namespace, so that the root does not 
	// have to be repeated for each end point.
	server.namespace('/api', function() {

		// Return fixture data for '/api/posts/:id'
		server.get('/players/:id', function(req, res) {
			var player = {
				"player": {
					"id": 1,
					"name": "Vince Speelman",
					"user" : "vinspee"
				},
			};

			res.send(post);
		});

	});

};
