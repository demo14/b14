var express		=	require('express'),
	app 		=	express(),
	mongoose 	=	require('mongoose');


mongoose.connect('mongodb://localhost/b14', {useMongoClient: true});

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));


app.lsiten(portNum = 3000, function() {
	console.log('Server online at port ' + portNum);
});