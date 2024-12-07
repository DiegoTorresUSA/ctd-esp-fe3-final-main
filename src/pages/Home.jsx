// src/pages/Home.jsx
import React, { useEffect } from "react";
import axios from "axios";
import { useGlobalContext } from "../context/GlobalContext";
import Card from "../components/Card";

const Home = () => {
  const { state, dispatch } = useGlobalContext();

  useEffect(() => {
    const fetchDentists = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        dispatch({ type: "SET_DENTISTS", payload: response.data });
      } catch (error) {
        console.error("Error fetching dentists:", error);
      }
    };

    fetchDentists();
  }, [dispatch]);

  return (
    <div>
      <h1 className="text-3xl font-bold mt-8 text-center">
        Nuestros Dentistas
      </h1>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {state.dentists.map((dentist) => (
          <Card key={dentist.id} dentist={dentist} />
        ))}
      </div>
      {state.dentists.length === 0 && (
        <p className="text-center text-gray-500 mt-10">Cargando dentistas...</p>
      )}
    </div>
  );
};

export default Home;
