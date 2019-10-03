const Contact = require('../models/contact-model');
const ObjectId = require('mongodb').ObjectID;
const utils = require('../shared/utils');

exports.index = function (req, res) {
    Contact.get(function (err, contacts) {
        if (err) {
            utils.errorController(res, 500, err);
        }
        res.json({
            status: "success",
            message: "Contacts retrieved successfully",
            data: contacts
        });
    });
};

exports.new = function (req, res) {
    debugger
    var contact = new Contact();
    contact.username = req.body.username ? req.body.username : contact.username;
    contact.username = new ObjectId(contact.username);
    contact.name = req.body.name ? req.body.name : contact.name;
    contact.gender = req.body.gender;
    contact.email = req.body.email;
    contact.phone = req.body.phone;

    contact.save(function (err) {
        if (err)
            utils.errorController(res, 500, err);
        else
            res.json({
                message: 'New contact created!',
                data: contact
            });
    });
};

exports.view = function (req, res) {
    Contact.findById(req.params.contact_id, function (err, contact) {
        if (err)
            utils.errorController(res, 500, err);
        res.json({
            message: 'Contact details loading..',
            data: contact
        });
    });
};

exports.update = function (req, res) {
    Contact.findById(req.params.contact_id, function (err, contact) {
        if (err)
            utils.errorController(res, 500, err);
        contact.name = req.body.name ? req.body.name : contact.name;
        contact.gender = req.body.gender;
        contact.email = req.body.email;
        contact.phone = req.body.phone;
        contact.save(function (err) {
            if (err)
                utils.errorController(res, 500, err);
            res.json({
                message: 'Contact Info updated',
                data: contact
            });
        });
    });
};

exports.delete = function (req, res) {
    Contact.remove({
        _id: req.params.contact_id
    }, function (err, contact) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'Contact deleted'
        });
    });
};