import { configureStore } from "@reduxjs/toolkit";
import { frontendAPI } from "../api/services";

export default configureStore({
  reducer: {
    [frontendAPI.reducerPath]: frontendAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([frontendAPI.middleware]),
});
