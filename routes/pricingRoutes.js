
const express = require('express');
const router = express.Router();
const PricingController = require('../controllers/pricingController');

router.post('/calculate-price', PricingController.calculateTotalPrice);

module.exports = router;