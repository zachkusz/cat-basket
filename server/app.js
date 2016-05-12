// Node Server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var index = require('./routes/index');
var module = require('./routes/module');

app.set('port', 5000);

app.use(bodyParser.urlencoded({extended: true}));

// Data - was var cats array


//ROUTES - was app.get and app.post(/felines)

app.use('/cats', module); //is this all i need????

app.use('/', index);





app.listen(app.get('port'), function() {
  console.log('Server is ready on port:' + app.get('port'));
});
