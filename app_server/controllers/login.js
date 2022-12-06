const request = require('request');

const apiOptions = { 
server : 'http://localhost:3000' 
}; 
if (process.env.NODE_ENV === 'production') { 
apiOptions.server = 'https://all-cars.herokuapp.com/login'; 
}

/* GET 'login' page Not SURE IF NEEDED */
const loginPage = function(req, res){
res.render('login', { title: 'Login' });
};

const _renderLoginPage = function(req, res, responseBody){
    res.render('login', {
    title: 'AllCars',
    accounts: responseBody
    });
    };

const login = function(req, res){ 
        const path = '/api/home'; 
        const requestOptions = { 
        url : apiOptions.server + path, 
        method : 'GET', 
        json : {}
        
    };
    request(requestOptions, (err, response, body) => { 
        _renderLoginPage(req, res,body); 
        } 
        );
    };


module.exports = { 
loginPage,
_renderLoginPage,
login
};
