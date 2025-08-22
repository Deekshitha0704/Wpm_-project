const express = require('express');
const router = express.Router();

const ctrlPages = require('../controllers/pages');
const ctrlOthers = require('../controllers/others'); // Keep this if you're still using /about

/* Main application pages */
router.get('/', ctrlPages.homeSearching);
router.get('/booking', ctrlPages.booking);
router.get('/dashboard', ctrlPages.dashboard); // or '/profile' if you prefer
router.get('/payment', ctrlPages.payment);
router.get('/about', ctrlOthers.about); // optional

module.exports = router;

