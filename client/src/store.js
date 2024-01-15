import { configureStore } from "@reduxjs/toolkit";
import userReducr from "./Features/userSlice";
import postReducer from "./Features/postSlice";

const store = configureStore({
  reducer: {
    user: userReducr,
    post: postReducer,
  },
});

export default store;
