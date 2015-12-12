

var CustomerCollection = require('./models/customercollection');



function getCustomerCollection(res){
	CustomerCollection.find(function(err, cust) {
			if (err)
				res.send(err)
			res.json(cust); // return all todos in JSON format
		});
};

module.exports = function(app) {

	//--------====================================--customer collection------start------------=======================--------------

	app.get('/api/customercollection', function (req, res) {
		getCustomerCollection(res);
	});
	app.post('/api/customercollection', function (req, res) {
		CustomerCollection.create(req.body, function(err, cust) {
			if (err)
				res.send(err);
			getCustomerCollection(res);
		});
	});

	app.delete('/api/customercollection/:_id', function (req, res) {
	    CustomerCollection.remove({
	        _id: req.params._id
	    }, function (err, todo) {
	        if (err)
	            res.send(err);
	        getCustomerCollection(res);
	    });
	});

	app.post('/api/update/customercollection/:_id', function (req, res) {
	    CustomerCollection.update({
	        _id: req.params._id
	    },
        req.body,
         function (err, raw) {
             if (err) return handleError(err);
             console.log('The raw response from Mongo was ', raw);

             getCustomerCollection(res);
         });
	});



	// application -------------------------------------------------------------
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
	});


};
