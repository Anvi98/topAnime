import { configureStore } from "@reduxjs/toolkit";
import titleSliceReducer from "../feature/titleSlice";

const store = configureStore({
  reducer:{
    title: titleSliceReducer
  }
});

export default store;