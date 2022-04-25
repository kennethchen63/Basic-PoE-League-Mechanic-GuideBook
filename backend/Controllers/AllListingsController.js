const asyncHandler = require("express-async-handler");

const Listing = require("../Models/listingModel");

// Gets all Listings
// /api/AllListings
const getAllListings = asyncHandler(async (req, res) => {
  const listings = await Listing.find();
  res.status(200).json(listings);
});

module.exports = {
  getAllListings,
};
