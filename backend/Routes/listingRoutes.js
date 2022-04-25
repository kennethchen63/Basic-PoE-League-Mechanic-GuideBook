const express = require("express");
const router = express.Router();
const {
  getListings,
  setListing,
  updateListing,
  deleteListing,
} = require("../Controllers/listingController");

const { protect } = require("../Middleware/authMiddleware");

router.route("/").get(protect, getListings).post(protect, setListing);
router.route("/:id").delete(protect, deleteListing).put(protect, updateListing);

module.exports = router;
