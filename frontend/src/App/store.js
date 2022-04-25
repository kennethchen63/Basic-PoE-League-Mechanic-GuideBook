import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "../Auth/authSlice";
import listingSliceReducer from "../Listings/listingSlice";

export const store = configureStore({
  reducer: {
    auth: authSliceReducer,
    listings: listingSliceReducer,
  },
});
