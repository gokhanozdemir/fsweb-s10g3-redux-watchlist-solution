import { movies } from "../../movies";
import { NEXT, PREV, RECYCLE_MOV, REMOVE_MOV } from "../actions/moviesAction";

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
    case REMOVE_MOV:
      return {
        ...state,
        movies: state.movies.filter((m) => m.id !== action.payload.id),
      };
    case RECYCLE_MOV:
      return {
        ...state,
        movies: [action.payload, ...state.movies],
      };
    default:
      return state;
  }
}

export default moviesReducer;
