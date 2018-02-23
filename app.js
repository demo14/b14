// requiring packages
var express		=	require('express'),
	app 		=	express(),
	mongoose 	=	require('mongoose');

// requiring models
var user		=	require('./models/user.js');


// requiring routes
var indexRoutes = 	require('./routes/index.js');



// local mongoDB
mongoose.connect('mongodb://localhost/b14');

// custom requirements
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));


// using routes
app.use('/', indexRoutes);


// local deployment
app.listen(portNum = 3000, function() {
	console.log('Server online at port ' + portNum);
});