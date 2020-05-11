import { combineReducers } from "redux";
import { characters } from "./characters-reducer";
import { alert } from "./alert-reducer";

const rootReducer = combineReducers({
  characters,
  alert,
});

export default rootReducer;
