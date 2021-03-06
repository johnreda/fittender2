// ==========================================================
	//DEPENDENCIES
		var express = require('express');
		var bodyParser = require('body-parser');
		var path = require('path');
		var methodOverride = require('method-override');


// ==========================================================
	//CONFIGURE THE EXPRESS SERVER
		var app = express(); 	//DECLARES AN EXPRESS SERVER
		var PORT = process.env.PORT || 5000;  //DECLARES THE PORT 


// ==========================================================
	//SERVE CONTENT FROM THE 'PUBLIC' FOLDER		

		


// ==========================================================

	//HELPS SERVER INTERPRET DATA SENT TO IT


app.use(bodyParser.json()); 
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(methodOverride('X-HTTP-Method-Override')); 
app.use(express.static(__dirname + '/app/public'));


// ==========================================================

	//SET UP THE ROUTES
		// require('./app/routing/api-routes.js')(app);
require('./app/routing/html-routes.js')(app);
		


// ==========================================================
	//	SET UP THE LISTENER
		app.listen(PORT, function(){
			console.log("App is listening on PORT:" + PORT);
		});

