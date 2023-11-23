import { REMOVE_FAV } from "./../store/actions/favoritesAction";
import { RECYCLE_MOV } from "./../store/actions/moviesAction";
import { useDispatch } from "react-redux";

export default function FavMovie(props) {
  const { id, title } = props.movie;
  const dispatch = useDispatch();
  const favoriydenCikar = () => {
    dispatch({ type: REMOVE_FAV, payload: id });
    dispatch({ type: RECYCLE_MOV, payload: props.movie });
  };

  return (
    <div className="flex p-3 pl-4 bg-white mb-2 shadow items-center group">
      <div className="pr-4 flex-1">{title}</div>
      <button
        onClick={favoriydenCikar}
        className="px-3 py-2 block text-sm rounded bg-rose-700 text-white opacity-30 group-hover:opacity-100"
      >
        Çıkar
      </button>
    </div>
  );
}
