'use strict'
const User = require('../models/user-model');
const cryptService = require('../services/crypt-service');
const jwtService = require('../services/jwt-service');

exports.login = function (req, res) {
    var loginStatus = false;
    User.findOne({ username: req.body.username })
        .exec(function (err, response) {
            if (err) {
                res.status(500).send({
                    id: 500,
                    msg: err
                })
            } else if (!response) {
                res.status(401).send({
                    id: 401,
                    msg: "Not exist"
                })
            } else {
                cryptService.comparePassword(req.body.password, response.password, function (err, result) {
                    if (err)
                        res.status(401).send({ id: 401, message: 'Wrong pass' });
                    else
                        loginStatus = result;

                    console.log(jwtService.createToken(response));
                    res.json({
                        message: `User login ${loginStatus ? 'successfully' : 'fails'}`,
                        data: loginStatus ? jwtService.createToken(response) : false
                    });
                })
            } { }
        });
}