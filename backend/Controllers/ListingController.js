const asyncHandler = require("express-async-handler");

const Listing = require("../Models/listingModel");
const User = require("../Models/userModel");

// Get Listings
// GET /api/listings
const getListings = asyncHandler(async (req, res) => {
  const listings = await Listing.find({ user: req.user.id });

  res.status(200).json(listings);
});

// Set Listings
// POST /api/listings
const setListing = asyncHandler(async (req, res) => {
  // Request = alistData: { text, username }
  if (!req.body.alistData.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }

  const listing = await Listing.create({
    text: req.body.alistData.text,
    user: req.user.id,
    username: req.body.alistData.username,
  });

  res.status(200).json(listing);
});

// Update Listings
//  PUT /api/listing/:id
const updateListing = asyncHandler(async (req, res) => {
  const listing = await Listing.findById({ user: req.user.id });

  if (!listing) {
    res.status(400);
    throw new Error("Listing not found");
  }

  // Checks for user
  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  // Makes sure the logged in user matches the listing's user
  if (listing.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  const updatedListing = await Listing.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );

  res.status(200).json(updatedListing);
});

// Delete Listings
// DELETE /api/listing/:id
const deleteListing = asyncHandler(async (req, res) => {
  const listing = await Listing.findById(req.params.id);

  if (!listing) {
    res.status(400);
    throw new Error("Listing not found");
  }

  // Checks for user
  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  // Makes sure the logged in user matches the listing's user
  if (listing.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  await listing.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getListings,
  setListing,
  updateListing,
  deleteListing,
};
