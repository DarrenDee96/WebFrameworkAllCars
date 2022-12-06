const mongoose = require('mongoose');
const Accounts = mongoose.model('Accounts');
const Listings = mongoose.model('Listings');


    const vehicleData = function (req, res) {
        //get all listings
        Listings
            .find()
            .exec((err, listings) => {
                if (!listings) {
                    res
                        .status(404)
                        .json({
                            "message": "No listings found"
                        });
                    return;
                } else if (err) {
                    res
                        .status(404)
                        .json(err);
                    return;
                }
                res
                    .status(200)
                    .json(listings)
            });
    };
    


const placeAdd = function(req,res) {
    res
.status(200)
.json({"status" : "success"});
};



const home = function(req, res) {
    if(req.params && req.params._id) {
    Accounts
    .findById(req.params._id) 
    .exec((err, account) => { 
        if(!account) {
        res 
        .status(404) 
        .json({"message": "Accountid not found"}); 
        return;
        }else if(err) {
            res
                .status(404)
                .json(err);
            return
        }
        res
            .status(200)
            .json(account)
         });
    } else {
        res
        .status(404)
        .json({
            "message": "No Accountid in request"
          });
    }
}

    
module.exports = {
    vehicleData,
    placeAdd,
    home
};

