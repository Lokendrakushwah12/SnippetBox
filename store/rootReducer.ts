import { combineReducers } from "redux";
import snippetReducer from "./slice/snippetSlice";

const rootReducer = combineReducers({
  snippet: snippetReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
