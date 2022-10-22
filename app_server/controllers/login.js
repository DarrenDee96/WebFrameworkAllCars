/* GET 'login' page */
const loginPage = function(req, res){
res.render('login', { title: 'Login' });
};
module.exports = { 
loginPage
};
