import { ADD_FAV, REMOVE_FAV } from "../actions/favoritesAction";

const inialState = {
  favMovies: [
    {
      id: 8,
      title: "Memento",
      year: "2000",
      runtime: "113",
      genres: ["Mystery", "Thriller"],
      director: "Christopher Nolan",
      actors: "Guy Pearce, Carrie-Anne Moss, Joe Pantoliano, Mark Boone Junior",
      plot: "A man juggles searching for his wife's murderer and keeping his short-term memory loss from being an obstacle.",
      posterUrl:
        "https://www.moviemem.com/wp-content/uploads/2020/07/MEMENTO1SH.jpg",
    },
  ],
};

function favoritesReducer(state = inialState, action) {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        favMovies: [action.payload, ...state.favMovies],
      };
    default:
      return state;
  }
}

export default favoritesReducer;
