const mongoose = require('mongoose');
const listingSchema = require('./listings');
var passportLocalMongoose = require('passport-local-mongoose');

const accountsSchema = new mongoose.Schema(
    {
    accountID: {
        type: Number,
        required: true
    },
    Name: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        requred: true
    },
    listings: [listingSchema] 
    }
);

mongoose.model('Accounts', accountsSchema)
