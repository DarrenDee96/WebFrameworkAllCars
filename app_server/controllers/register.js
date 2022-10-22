/* GET 'register' page */
const registerPage = function(req, res){
res.render('register', { title: 'Register' });
};
module.exports = { 
registerPage
};
