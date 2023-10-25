export const ADD_FAV = "ADD_FAV movie to favlist";
export const REMOVE_FAV = "REMOVE_FAV movie from favlist";

export function addFavMovie(movie) {
  return { type: ADD_FAV, payload: movie };
}

export function removeFavMovie(movie) {
  return { type: REMOVE_FAV, payload: movie };
}
