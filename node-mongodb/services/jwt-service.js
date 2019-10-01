'use strict'

const jwt = require('jwt-simple');
const moment = require('moment');
const appConfig = require('../config');

exports.createToken = function (user) {
    const payload = {
        sub: user._id,
        username: user.username,
        email: user.email,
        iat: moment().unix(),
        expt: moment().add(14, 'days').unix()
    }

    return jwt.encode(payload, appConfig.SECRET_TOKEN);
};
