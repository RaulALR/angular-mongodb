const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');
const cors = require('cors');
const app = express();

const apiRoutes = require("./routes/api-routes");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
mongoose.connect(config.db, { useNewUrlParser: true, useUnifiedTopology: true });

var db = mongoose.connection;

if (!db)
    console.log("Error connecting db")
else
    console.log("Db connected successfully")

var port = process.env.PORT || 8080;
app.use(cors());
app.get('/', (req, res) => res.send('Hello World with Express'));

app.use('/api', apiRoutes);
// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', 'localhost:4200');
//     res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
//     res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
//     res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
//     next();
// });

app.listen(port, function () {
    console.log("Running RestHub on port " + port);
});
