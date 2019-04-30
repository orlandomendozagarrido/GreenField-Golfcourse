var express = require('express');
var bodyParser = require('body-parser');

// var items = require('../database-mysql');
// var items = require('../database-mongo');
var app = express();
// UNCOMMENT FOR REACT
 app.use(express.static(__dirname + '/../react-client/dist'));



app.get('/code', function (req, res) {

var channel = req.query.channel
var code = req.query.code
res.end("fuck your whore mother")

})


app.listen(4040, function() {
 console.log('listening on port 4040!');
});
