const mongoose = require('mongoose');
const Accounts = mongoose.model('Accounts');

const registerUser = function (req, res) {
    res
.status(200)
.json({"status" : "success register"});
};

const userRegistration = function(req, res) {
    Accounts.create({ 
    accountID: req.body.accountID,    
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
   
    }, (err, location) => { 
    if (err) {
    res
    .status(400)
    .json(err);
    } else {
    res
    .status(201)
    .json(location);
    }
    });
    };

module.exports = { 
    registerUser,
    userRegistration
};