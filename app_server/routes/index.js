const express = require('express');
const router = express.Router();
const ctrlPages = require('../controllers/pages');

router.get('/', ctrlPages.home);
router.get('/searching', ctrlPages.Searching);
router.get('/booking', ctrlPages.booking);
router.get('/dashboard', ctrlPages.dashboard);
router.get('/payment', ctrlPages.payment);

module.exports = router;
