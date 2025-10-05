import { createSlice } from "@reduxjs/toolkit";

const confligSlice = createSlice({
  name: "config",
  initialState: {
    lang: "en",
  },
  reducers: {
    changeLanguage: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export const { changeLanguage } = confligSlice.actions;

export default confligSlice.reducer;
