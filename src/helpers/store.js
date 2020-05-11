import { createStore, applyMiddleware } from "../../node_modules/redux";
import thunkMiddleware from "../../node_modules/redux-thunk";
import { createLogger } from "../../node_modules/redux-logger";
import rootReducer from "../reducers";

const loggerMiddleware = createLogger();

export const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, loggerMiddleware)
);
