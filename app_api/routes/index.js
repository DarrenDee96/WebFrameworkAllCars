//const apiRoutes = require('./app_server/routes/index');


const express = require('express');
const router = express.Router();

const ctrlHome = require('../controllers/home');
const ctrlLogin = require('../controllers/login');
const ctrlRegister = require('../controllers/register');
//home
router
	.route('/home')
	.get(ctrlHome.vehicleData)
    .post(ctrlHome.placeAdd)
	

router
	.route('/home/:_id')
	.get(ctrlHome.home)
	
//login	
router
	.route('/login')
	.get(ctrlLogin.userLogin)


//register
router 
    .route('/register')
   // .get(ctrlRegister.registerUser) 
	.post(ctrlRegister.userRegistration)   

module.exports = router;