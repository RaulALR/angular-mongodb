'use strict'
var User = require('../models/user-model');

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
            res.json({
                message: 'User register succesffuly',
                data: user
            });
    })
};