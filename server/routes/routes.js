const express = require("express");
const router = express.Router();
const { getCards, cardDetails, getRoutes } = require("../controllers/controller");

router.get("/get-route", getRoutes);
router.post("/movies", getCards);
router.post("/card", cardDetails);

module.exports = router;
