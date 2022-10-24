const mongoose = require('mongoose');

const listingsSchema = new mongoose.Schema({
    listingId: {
        type: Number,
        require: true
    }, 
    make: {
        type: String,
        required: true
    },
    mode: {
        type: String, 
        required: true
    },
    price: {
        type: Number
    },
    mileage: {
        type: Number,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    fuelType: {
        type: String,
        required: true
    },
    engineSize: {
        type: Number,
        required: true
    },
    nctDate: {
        type: Date,
        required: true
    },
    taxDate: {
        type: Date,
        required: true
    }
   });


mongoose.model('Listings', listingsSchema)