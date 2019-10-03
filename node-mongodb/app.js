'use strict'
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
//Configuramos bodyParser para que convierta el body de nuestras peticiones a JSON
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({
    secret: 'work hard',
    resave: true,
    saveUninitialized: false
}));
module.exports = app;