import { useState } from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import Movie from "./components/Movie";
import FavMovie from "./components/FavMovie";

import { NEXT, prevMovie, removeMovie } from "./store/actions/moviesAction";
import { addFavMovie, removeFavMovie } from "./store/actions/favoritesAction";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const {
    order: sira,
    disabledNavDirection,
    movies,
  } = useSelector((state) => state.moviesReducer);
  const favMovies = useSelector((state) => state.favoritesReducer.favMovies);

  const dispatch = useDispatch();

  function sonrakiFilm() {
    dispatch({ type: NEXT });
  }

  function oncekiFilm() {
    dispatch(prevMovie());
  }

  function listeyeEkle(m) {
    dispatch(prevMovie());
    dispatch(addFavMovie(m));
    dispatch(removeMovie(m));
  }

  return (
    <div className="wrapper max-w-2xl mx-auto">
      <nav className="flex text-2xl pb-6 pt-8 gap-2 justify-center">
        <NavLink
          to="/"
          exact
          className="py-3 px-6 "
          activeClassName="bg-white shadow-sm text-blue-600"
        >
          Filmler
        </NavLink>
        <NavLink
          to="/listem"
          className="py-3 px-6 "
          activeClassName="bg-white shadow-sm text-blue-600"
        >
          Listem
        </NavLink>
      </nav>
      <Switch>
        <Route exact path="/">
          <Movie sira={sira} />

          <div className="flex gap-3 justify-end py-3">
            <button
              disabled={disabledNavDirection === "prev"}
              onClick={oncekiFilm}
              className="disabled:opacity-40 select-none px-4 py-2 border border-blue-700 text-blue-700 hover:border-blue-500 hover:text-blue-500"
            >
              Önceki
            </button>
            <button
              disabled={disabledNavDirection === "next"}
              onClick={sonrakiFilm}
              className="disabled:opacity-40 select-none px-4 py-2 border border-blue-700 text-blue-700 hover:border-blue-500 hover:text-blue-500"
            >
              Sıradaki
            </button>
            <button
              onClick={() => listeyeEkle(movies[sira])}
              className="select-none px-4 py-2 bg-blue-700 hover:bg-blue-600 text-white"
            >
              Listeme ekle
            </button>
          </div>
        </Route>

        <Route path="/listem">
          <div>
            {favMovies.map((movie) => (
              <FavMovie key={movie.id} movie={movie} />
            ))}
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
