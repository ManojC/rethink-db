//require dependencies
var route = require('express').Router(),
    r = require('rethinkdb'),
    connection;

connect(null, null, function() {
    r.table('messages').changes().run(connection, function(err, cursor) {
        cursor.each(console.log);
    });
});

// 'GET' : relative url '/chat/'
route.get('/', connect, getAll, disconnect);


// 'POST' : relative url '/chat/'
route.post('/add', connect, insert, disconnect);


function connect(req, res, next) {
    // console.log('opening connection \n');
    r.connect({
        db: 'chatsapp',
        password: '12345'
    }, function(err, conn) {
        if (err) {
            throw err;
        }
        // console.log('new connection opened \n');
        connection = conn;
        next();
    });
}

function insert(req, res, next) {

    if (!req.body) {
        next();
    }

    r.db('chatsapp').table('messages').insert(req.body).run(connection, function(err, cursor) {
        next();
        if (err) {
            throw err;
        }
        res.json(cursor);
    });
}

function getAll(req, res, next) {
    r.db('chatsapp').table('messages').run(connection, function(err, cursor) {
        if (err) {
            throw err;
        }
        cursor.toArray(function(err, results) {
            next();
            if (err) {
                throw err;
            } else {
                res.json(results);
            }
        });
    });
}

function disconnect(req, res, next) {
    // console.log('closing connection \n');
    connection.close();
}

//export module
module.exports = route;
