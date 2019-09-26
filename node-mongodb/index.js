'use strict'
var mongoose = require('mongoose');
var app = require('./app');
var port = 3800;
// Le indicamos a Mongoose que haremos la conexión con Promesas
mongoose.Promise = global.Promise;
// Usamos el método connect para conectarnos a nuestra base de datos
mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected")

        app.listen(port, () => {
            console.log("Run in http://localhost:3800");
        });
    })
    .catch(err => console.log(err));