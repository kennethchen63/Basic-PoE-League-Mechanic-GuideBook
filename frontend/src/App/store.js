import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "../Auth/authSlice";
import goalSliceReducer from "../Goals/goalSlice";

export const store = configureStore({
  reducer: {
    auth: authSliceReducer,
    goals: goalSliceReducer,
  },
});
