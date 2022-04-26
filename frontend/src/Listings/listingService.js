import axios from "axios";

const API_URL = "/api/listings/";

// Create new Listing
const createListing = async (listingData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, listingData, config);
  return response.data;
};

// Get User Listings
const getListings = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);
  return response.data;
};

// Update User Listing
const updateListing = async (listingId, alistData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.put(API_URL + listingId, alistData, config);
  return response.data;
};

// Delete User Listing
const deleteListing = async (listingId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.delete(API_URL + listingId, config);
  return response.data;
};

const listingService = {
  createListing,
  getListings,
  updateListing,
  deleteListing,
};

export default listingService;
