const express = require('express');
const router = express.Router();

const ctrlLocations = require('../controllers/locations'); 
const ctrlOthers = require('../controllers/others');


/* Home page */
router.get('/', ctrlLocations.homePage);
router.get('/location', ctrlLocations.loginPage);
router.get('/location', ctrlLocations.registerPage);
/* Login pages */
router.get('/about', ctrlOthers.about);
module.exports = router;

