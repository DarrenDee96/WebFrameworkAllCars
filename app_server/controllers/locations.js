/* GET 'home' page */
/*const homelist = function(req, res){
res.render('index', { title: 'Home' });
};
/* GET 'Location info' page */
/*const locationInfo = function(req, res){
res.render('index', { title: 'Location info' });
};
/* GET 'Add review' page */
/*const addReview = function(req, res){
res.render('index', { title: 'Add review' });
};
module.exports = {
homelist,
locationInfo,
addReview
};
*/

/* GET 'home' page */
const homePage = function(req, res){
res.render('index', { title: 'Home' });
};
/* GET 'login' page */
const loginPage = function(req, res){
res.render('index', { title: 'Login' });
};
/* GET 'register' page */
const registerPage = function(req, res){
res.render('index', { title: 'Register' });
};
module.exports = {
homePage,
loginPage,
registerPage
};