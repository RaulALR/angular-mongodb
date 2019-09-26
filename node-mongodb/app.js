'use strict'
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
// var user_routes = require('./routes/user'); 
//Configuramos bodyParser para que convierta el body de nuestras peticiones a JSON
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
// app.use('/api', user_routes);
module.exports = app;