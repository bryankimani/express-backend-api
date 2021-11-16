var express = require('express');
var app = express();
require('dotenv').config();

var bodyParser = require('body-parser');

console.log(__dirname + '/views/index.html');

app.use('/public', express.static(__dirname + '/public'));

app.use(function(req, res,next) {
  console.log(req.method + " " + req.path  + " - " + req.ip);
  next();
});


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())


app.get('/', function(req, res) {
  console.log(req.method);
  console.log(req.ip);
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/json', function(req, res){
  if (process.env.MESSAGE_STYLE ==='uppercase') {
    res.json({"message": "Hello json".toUpperCase()});
  } else {
    res.json({"message": "Hello json"});
  }
});

app.get('/now', function(req, res, next) {
  req.time = new Date(new Date().getTime() + 20000).toString();  
  next();
}, function(req, res) {
  res.send({time: req.time});
});

app.get('/:word/echo', function(req, res) {
  res.send({echo: req.params.word})
});




































 module.exports = app;
