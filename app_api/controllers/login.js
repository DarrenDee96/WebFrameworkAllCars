const mongoose = require('mongoose');
const Accounts = mongoose.model('Accounts');

const userLogin = function (req,res) {
    res
.status(200)
.json({"status" : "success login"});
};

module.exports = {
    userLogin
};