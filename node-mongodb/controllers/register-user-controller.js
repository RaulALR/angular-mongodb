'use strict'
const User = require('../models/user-model');
const jwtService = require('../services/jwt-service');
const utils = require('../shared/utils');

exports.registerUser = function (req, res) {
    var user = new User();

    user.email = req.body.email;
    user.username = req.body.username;
    user.password = req.body.password;

    if (req.body.repeatPassword !== user.password) {
        utils.errorController(res, 500, 'Wrong password');
    } else {
        user.save(function (err) {
            if (err)
                utils.errorController(res, 500, err);
            else
                res.status(200).send({
                    message: 'User register succesffuly',
                    data: jwtService.createToken(user)
                });
        })
    }
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