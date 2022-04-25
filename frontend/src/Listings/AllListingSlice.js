import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AllListingsService from "./AllListingService";

const initialState = {
  listings: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Get All Listings
export const getAllListings = createAsyncThunk(
  "listings/AllListings",
  async (_, thunkAPI) => {
    try {
      return await AllListingsService.getAllListings();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const AllListingsSlice = createSlice({
  name: "alllistings",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllListings.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllListings.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.listings = action.payload;
      })
      .addCase(getAllListings.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = AllListingsSlice.actions;
export default AllListingsSlice.reducer;
