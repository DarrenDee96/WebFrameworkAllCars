
/* GET 'home' page */
const homePage = function(req, res){
res.render('index', { title: 'Home' });
};
module.exports = {
homePage
};