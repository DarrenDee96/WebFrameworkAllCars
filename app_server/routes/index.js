const express = require('express');
const router = express.Router();

const ctrlHome = require('../controllers/home'); 
const ctrlOthers = require('../controllers/others');


/* Home page */
router.get('/', ctrlHome.homePage);
router.get('/location', ctrlLocations.loginPage);
router.get('/location', ctrlLocations.registerPage);
/* Login page */
router.get('/about', ctrlOthers.about);
module.exports = router;

/* Register page */
router.get('/about', ctrlOthers.about);
module.exports = router;

