import axios from "axios";

const LIST_URL = "/api/AllListings";

const getAllListings = async () => {
  const response = await axios.get(LIST_URL);
  return response.data;
};

const AllListingsService = {
  getAllListings,
};

export default AllListingsService;
