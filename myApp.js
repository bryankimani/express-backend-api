var express = require('express');
var app = express();
require('dotenv').config();

console.log(__dirname + '/views/index.html');

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/json', function(req, res){
  if (process.env.MESSAGE_STYLE ==='uppercase') {
    res.json({"message": "Hello json".toUpperCase()});
  } else {
    res.json({"message": "Hello json"});
  }
});

app.use('/public', express.static(__dirname + '/public'));





































 module.exports = app;
