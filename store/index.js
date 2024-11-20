"use client";
import { configureStore } from "@reduxjs/toolkit";
import { snippetSlice } from "./slice/snippetSlice";

export const store = configureStore({
  reducer: {
    snippet: snippetSlice,
  },
});
