'use strict'
var SSE = require('express-sse');
var sse = new SSE([['caca', 2, 321], 'caca', 'caca', "caca"],
    { isSerialized: true, initialEvent: 'caca' });
exports.alerts = function (req, res) {
    sse.init;
    setInterval((handler) => {
        sse.send('content', 'contet', 'content');
    }, 2000)
    
    res.setHeader('Content-Type', 'text/event-stream')
    res.status(200).send('SSE Active');
};