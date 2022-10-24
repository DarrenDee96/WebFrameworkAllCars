const mongoose = require('mongoose');


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
    listings: [listingsSchema] 
    }
);

mongoose.model('Accounts', accountSchema)