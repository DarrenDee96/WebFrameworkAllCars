const request = require('request');

const apiOptions = { 
server : 'http://localhost:3000' 
}; 
if (process.env.NODE_ENV === 'production') { 
apiOptions.server = 'https://all-cars.herokuapp.com/register'; 
}

/* GET 'register' page */
const registerPage = function(req, res){
res.render('register', { title: 'Register' });
};
module.exports = { 
registerPage
};
