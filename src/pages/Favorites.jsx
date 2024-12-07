// src/pages/Favorites.jsx
import React from "react";
import { useGlobalContext } from "../context/GlobalContext";
import Card from "../components/Card";

const Favorites = () => {
  const { state } = useGlobalContext();

  return (
    <div
      className={`p-6 ${
        state.theme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-gray-100 text-black"
      }`}
    >
      <h1 className="text-2xl mb-4">Dentistas Favoritos</h1>
      {state.favorites.length === 0 ? (
        <p>No tienes dentistas favoritos aún</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {state.favorites.map((dentist) => (
            <Card key={dentist.id} dentist={dentist} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
