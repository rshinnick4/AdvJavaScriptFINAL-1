//var signIn = require('./HTML/Sign-in.html')

//var signIn = function(req, res) {

//}

var MongoClient = require('users').MongoClient;

MongoClient.connect('mongodb://127.0.0.1:27017/main', function(err, db) {
    if(err) throw(err);
    var users = db.getCollection('users')


  });
