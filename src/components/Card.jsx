import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext";

const Card = ({ dentist }) => {
  const { state, dispatch } = useGlobalContext();

  const isFavorite = state.favorites.some((fav) => fav.id === dentist.id);

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch({ type: "REMOVE_FAVORITE", payload: dentist });
    } else {
      dispatch({ type: "ADD_FAVORITE", payload: dentist });
    }
  };

  return (
    <div
      className={`
      rounded-lg shadow-md overflow-hidden transition-all duration-300
      ${
        state.theme === "dark"
          ? "bg-gray-800 text-white border-gray-700"
          : "bg-white text-black border-gray-200"
      }
      border hover:shadow-xl bg-cover bg-repeat-y
    `}
    >
      <div className="p-6">
        <Link to={`/dentist/${dentist.id}`} className="block">
          <h3 className="text-2xl font-semibold mb-2 truncate">
            {dentist.name}
          </h3>
          <p className="text-m text-gray-500 truncate">{dentist.username}</p>
        </Link>
        <div className="mt-4 flex justify-between items-center">
          <Link
            to={`/dentist/${dentist.id}`}
            className={`
              text-sm px-3 py-1 rounded
              ${
                state.theme === "dark"
                  ? "text-blue-300 hover:bg-gray-700"
                  : "text-blue-600 hover:bg-blue-50"
              }
            `}
          >
            <span className="text-sm">Ver Detalles</span>
          </Link>
          <button
            onClick={toggleFavorite}
            className={`
              px-3 py-1 rounded text-sm font-medium
              ${
                isFavorite
                  ? "bg-red-500 text-white hover:bg-red-600"
                  : "bg-green-500 text-white hover:bg-green-600"
              }
            `}
          >
            {isFavorite ? "Quitar Fav" : "Añadir Fav"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
