var bcrypt = require('bcrypt-nodejs');

exports.cryptPassword = function (password, callback) {
    bcrypt.genSalt(10, function (err, salt) {
        if (err)
            return callback(err);
        bcrypt.hash(password, salt, null, function (err, hash) {
            return callback(err, hash);
        });
    });
};

exports.comparePassword = function (plainPass, hashword, callback) {
    bcrypt.compare(plainPass, hashword, function (err, isPasswordMatch) {
        return err == null ? callback(null, isPasswordMatch) : callback(err);
    });
};