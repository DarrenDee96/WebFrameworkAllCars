/* GET 'register' page */
const registerPage = function(req, res){
res.render('index', { title: 'Register' });
};
module.exports = { 
registerPage
};
