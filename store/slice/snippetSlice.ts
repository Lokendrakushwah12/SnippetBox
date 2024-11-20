import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value:
    typeof window !== "undefined" && localStorage.getItem("snippet")
      ? JSON.parse(localStorage.getItem("snippet")!)
      : [],
};

export const snippetSlice = createSlice({
  name: "snippet",
  initialState,
  reducers: {
    addToSnippet: (state, action) => {
      localStorage.getItem("");
    },
    updateToSnippet: (state, action) => {},
    removeFromSnippet: (state, action) => {},
    resetAll: (state, action) => {},
  },
});

export const { addToSnippet, removeFromSnippet, updateToSnippet, resetAll } =
  snippetSlice.actions;

export default snippetSlice.reducer;
