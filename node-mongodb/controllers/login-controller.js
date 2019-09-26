'use strict'
var User = require('../models/user-model');
var cryptService = require('../services/crypt-service')

exports.login = function (req, res) {
    var loginStatus = false;
    User.findOne({ email: req.body.email })
        .exec(function (err, res) {
            if (err) {
                return callback(err)
            } else if (!res) {
                var err = new Error('User not found.');
                err.status = 401;
                return callback(err);
            }
            cryptService.comparePassword(req.body.password, res.password, function (err, result) {
                if (err)
                    return next(err);
                else
                    loginStatus = result;
            })
        });

    res.json({
        message: `User login ${loginStatus ? 'successfully' : 'fails'}`,
        data: loginStatus
    });
}