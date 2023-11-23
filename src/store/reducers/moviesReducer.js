import { movies } from "./../../movies";
import { NEXT, PREV } from "./../actions/moviesAction";

const initialData = {
  movies: movies,
  order: 0,
  disabledNav: "PREV",
};

const moviesReducer = (state = initialData, action) => {
  switch (action.type) {
    case NEXT:
      if (state.order === state.movies.length - 1) {
        return { ...state, disabledNav: "NEXT" };
      } else {
        return { ...state, order: state.order + 1, disabledNav: null };
      }
    case PREV:
      if (state.order === 0) {
        return { ...state, disabledNav: "PREV" };
      }
      return { ...state, order: state.order - 1, disabledNav: null };
    default:
      return state;
  }
};

export default moviesReducer;
