const express = require("express");
const router = express.Router();
const { getAllListings } = require("../Controllers/AllListingsController");

router.get("/", getAllListings);

module.exports = router;
