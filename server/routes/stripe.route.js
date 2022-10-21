const express = require("express");
const stripeController = require("../controllers/stripe.controller");
const router = express.Router();

router.post("/pay", stripeController.chargeStripe);
module.exports = router;
