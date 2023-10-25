import { movies } from "../../movies";
import { NEXT, PREV } from "../actions/moviesAction";

const inialState = {
  movies: movies,
  order: 0,
  disabledNavDirection: null,
};

function moviesReducer(state = inialState, action) {
  switch (action.type) {
    case NEXT:
      if (state.order === state.movies.length - 1) {
        return {
          ...state,
          disabledNavDirection: "next",
        };
      }
      return {
        ...state,
        order: state.order + 1,
        disabledNavDirection: null,
      };

    case PREV:
      if (state.order === 0) {
        return {
          ...state,
          disabledNavDirection: "prev",
        };
      }
      return {
        ...state,
        order: state.order - 1,
        disabledNavDirection: null,
      };
    default:
      return state;
  }
}

export default moviesReducer;
