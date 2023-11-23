import { movies } from "./../../movies";
import { NEXT, PREV, REMOVE_MOV, RECYCLE_MOV } from "./../actions/moviesAction";

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

    case REMOVE_MOV:
      const remainingMovies = state.movies.filter(
        (movie) => movie.id !== action.payload.id
      );
      return {
        ...state,
        movies: remainingMovies,
        order:
          state.order === state.movies.length - 1
            ? state.order - 1
            : state.order,
      };
    case RECYCLE_MOV:
      return { ...state, movies: [...state.movies, action.payload] };
    default:
      return state;
  }
};

export default moviesReducer;
