import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import logger from "redux-logger";

import { composeWithDevTools } from "@redux-devtools/extension";

import moviesReducer from "./reducers/moviesReducer";
import favoritesReducer from "./reducers/favoritesReducer";

const rootReducer = combineReducers({
  moviesReducer,
  favoritesReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger))
);

export default store;
