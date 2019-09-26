var mongoose = require('mongoose');
var cryptService = require('../services/crypt-service');

var UserSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
    }
});

UserSchema.pre('save', function (next) {
    var user = this;
    cryptService.cryptPassword(user.password, function (err, hassPass) {
        if (err)
            return next(err);
        user.password = hassPass;
        next();
    })
});

var User = mongoose.model('User', UserSchema);
module.exports = User;