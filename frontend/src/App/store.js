import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "../Auth/authSlice";
import listingSliceReducer from "../Listings/listingSlice";
import AllListingSliceReducer from "../Listings/AllListingSlice";

export const store = configureStore({
  reducer: {
    auth: authSliceReducer,
    listings: listingSliceReducer,
    alllistings: AllListingSliceReducer,
  },
});
