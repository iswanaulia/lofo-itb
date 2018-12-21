var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public'))

var db = require('./db');
console.log("Database connection ready");

global.__root   = __dirname + '/'; 

app.get('/api', function (req, res) {
  res.status(200).send('API works.');
});

var UserController = require(__root + 'user/UserController');
app.use('/api/users', UserController);
var AuthController = require(__root + 'auth/AuthController');
app.use('/api/auth', AuthController);
var PostController = require(__root + 'post/PostController');
app.use('/api/posts', PostController);

module.exports = app;
