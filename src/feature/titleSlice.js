import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "Naruto",
}

const titleSlice = createSlice({
  name: "title",
  initialState,
  reducers: {
    update: (state, action) => {
      state.title = action.payload;
    }
  }
});

export default titleSlice.reducer;
export const { update } = titleSlice.actions;