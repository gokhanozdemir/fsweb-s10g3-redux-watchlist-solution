export const NEXT = "NEXT movie";
export const PREV = "PREV movie";
export const RECYCLE_MOV = "RECYCLE_MOV movie from favlist";
export const REMOVE_MOV = "REMOVE_MOV movie when added to favlist";

export function nextMovie() {
  return { type: NEXT };
}

export function prevMovie() {
  return { type: PREV };
}

export function removeMovie(movie) {
  return { type: REMOVE_MOV, payload: movie };
}

export function recycleMovie(movie) {
  return { type: RECYCLE_MOV, payload: movie };
}
