
const request = require('request');

const apiOptions = { 
server : 'http://localhost:3000' 
}; 
if (process.env.NODE_ENV === 'production') { 
apiOptions.server = 'https://all-cars.herokuapp.com/'; 
}

/* GET 'home' page  NOT SURE IF NEEDED*/
const homePage = function(req, res){
res.render('index', { title: 'Home' });
};

const _renderHomepage = function(req, res, responseBody){
    res.render('index', {
    title: 'AllCars',
    listings: responseBody
    });
    };

const home = function(req, res){ 
        const path = '/api/home'; 
        const requestOptions = { 
        url : apiOptions.server + path, 
        method : 'GET', 
        json : {}
        
    };
    request(requestOptions, (err, response, body) => { 
        _renderHomepage(req, res,body); 
        } 
        );
    };

    module.exports = { 
        homePage,
        _renderHomepage,
        home
        
    };