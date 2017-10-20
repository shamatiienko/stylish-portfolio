//////////EXPRESS//////////

// require our dependencies
var express = require('express');
var app = express();
var port = process.env.PORT || 8050;

// route our app
var router = require('./app/routes');
app.use('/', router);

// set static files ( css, images, javascripts)
app.use(express.static(__dirname + '/public'));

// start the server
app.listen(port, function () {
    // console.log('log started');
});