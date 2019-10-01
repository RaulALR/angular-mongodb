'use strict'
const User = require('../models/user-model');
const jwtService = require('../services/jwt-service');

exports.registerUser = function (req, res) {
    var user = new User();

    user.email = req.body.email;
    user.username = req.body.username;
    user.password = req.body.password;

    // console.log(user.password);

    user.save(function (err) {
        if (err)
            res.json(err);
        else
            res.status(200).send({
                message: 'User register succesffuly',
                data: jwtService.createToken(user)
            });
    })
};

exports.createToken = function (req, res) {
    var user = new User();

    user.email = req.body.email;
    user.username = req.body.username;
    user.password = req.body.password;

    res.status(200).send({
        message: 'User register succesffuly',
        data: jwtService.createToken(user)
    });
};