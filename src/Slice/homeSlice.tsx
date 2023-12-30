import { createSlice } from "@reduxjs/toolkit";
import { HomeInterface } from "../interface/Home";

export const initialState:HomeInterface = {
  counter: 1
}
const homeSlice = createSlice({
  name: "home",
  initialState: initialState,
  reducers: {
    increment: (state, action) => {
      state.counter = state.counter + action.payload;
    }
  },
});

export const { increment } = homeSlice.actions;
export default homeSlice.reducer;
