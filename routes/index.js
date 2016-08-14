//require dependencies
var route = require('express').Router();

// relative url '/'
route.get('/', function(req, res, next) {
    res.json('asd');
});

//export module
module.exports = route;
