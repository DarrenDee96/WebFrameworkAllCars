const express = require('express');
const router = express.Router();

const ctrlHome = require('../controllers/home'); 
const ctrlLogin = require('../controllers/login');
const ctrlRegister = require('../controllers/register')


/* Home page */
router.get('/', ctrlHome.home);

/* Login page */
router.get('/login', ctrlLogin.login);
module.exports = router;

/* Register page */
router.get('/register', ctrlRegister.registerPage);
module.exports = router;

