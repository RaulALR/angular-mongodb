function mongoErrorSwitch(err) {
    switch (err.code) {
        case 11000:
            return `${Object.keys(err.keyValue)[0]} already exists`;
        default:
            break;
    }
}

exports.errorController = function (res, status, err) {
    let msg = ''
    if (typeof err === 'string') {
        msg = err;
    } else if (err.errmsg && err.code) {
        msg = mongoErrorSwitch(err);
    }
    return res.status(status).send({ id: status, message: msg });
}