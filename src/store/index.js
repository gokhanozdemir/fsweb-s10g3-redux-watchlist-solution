import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import logger from "redux-logger";

import moviesReducer from "./reducers/moviesReducer";
import favoritesReducer from "./reducers/favoritesReducer";

const rootReducer = combineReducers({
  moviesReducer: moviesReducer,
  favoritesReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger));

export default store;
