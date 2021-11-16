var express = require('express');
var app = express();
require('dotenv').config();

console.log(__dirname + '/views/index.html');

app.use('/public', express.static(__dirname + '/public'));

app.use(function(req, res,next) {
  console.log(req.method + " " + req.path  + " - " + req.ip);
  next();
});

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




































 module.exports = app;
