//require dependencies
var express = require('express'),
    index = require('./routes/index.js'),
    chat = require('./routes/chat.js'),
    db = require('rethinkdb'),
    bodyParser = require('body-parser');

//create app instance
var app = express();

//use body passrer
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

//use static folder
app.use(express.static('./public'));

//configure routeer modules with route path mapping
app.use('/', index);
app.use('/chat', chat);

//start the server
app.listen(3000, function() {
    console.log('app started!');
});
