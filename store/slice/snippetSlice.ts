import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "sonner";

interface Snippet {
  title: string;
  code: string;
  _id: string;
}

interface SnippetState {
  snippets: Snippet[];
}

const initialState: SnippetState = {
  snippets:
    typeof window !== "undefined" && localStorage.getItem("snippet")
      ? JSON.parse(localStorage.getItem("snippet")!)
      : [],
};

export const snippetSlice = createSlice({
  name: "snippet",
  initialState,
  reducers: {
    addToSnippet: (state, action: PayloadAction<Snippet>) => {
      const existingSnippet = state.snippets.find(
        (snippet) => snippet.title === action.payload.title
      );

      if (existingSnippet) {
        toast.error(
          "Snippet with this title already exists. Please choose a different title."
        );
        return;
      }
      state.snippets.push(action.payload);
      localStorage.setItem("snippet", JSON.stringify(state.snippets));
      toast.success("Snippet added successfully 🎉");
    },
    updateToSnippet: (state, action: PayloadAction<Snippet>) => {
      const index = state.snippets.findIndex((item) => {
        item._id === action.payload._id;
      });

      if (index >= 0) {
        state.snippets[index] = action.payload;
        localStorage.setItem("snippet", JSON.stringify(state.snippets));
        toast.success("Snippet updated successfully 🎉");
      }
    },
    removeFromSnippet: (state, action: PayloadAction<{ _id: string }>) => {
      const index = state.snippets.findIndex((item) => {
        item._id === action.payload._id;
      });

      if (index >= 0) {
        state.snippets.splice(index, 1);
        localStorage.setItem("snippet", JSON.stringify(state.snippets));
        toast.success("Snippet deleted successfully 🎉");
      }
    },
    resetAll: (state, action: PayloadAction<Snippet>) => {
      state.snippets = [];
      localStorage.removeItem("snippet");
      toast.success("Snippets Cleared successfully 🎉");
    },
  },
});

export const { addToSnippet, removeFromSnippet, updateToSnippet, resetAll } =
  snippetSlice.actions;

export default snippetSlice.reducer;
