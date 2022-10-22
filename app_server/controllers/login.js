/* GET 'login' page */
const loginPage = function(req, res){
res.render('index', { title: 'Login' });
};
module.exports = { 
loginPage
};
