// src/pages/Dentist.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useGlobalContext } from "../context/GlobalContext";

const Dentist = () => {
  const { id } = useParams();
  const [dentist, setDentist] = useState(null);
  const { state } = useGlobalContext();

  useEffect(() => {
    const fetchDentistDetail = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        setDentist(response.data);
      } catch (error) {
        console.error("Error fetching dentist details:", error);
      }
    };

    fetchDentistDetail();
  }, [id]);

  if (!dentist) return <div>Cargando...</div>;

  return (
    <div
      className={`p-6 grid grid-cols-1 md:grid-cols-2 gap-4 ${
        state.theme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-gray-100 text-black"
      }`}
    >
      <div className="dentist-container">
        <div className="dentist-card">
          {dentist.image && (
            <img
              src={dentist.image}
              alt={dentist.name}
              className="dentist-image"
            />
          )}
          <div className="dentist-info">
            <h2 className="dentist-name">{dentist.name}</h2>
            <p className="dentist-email">Email: {dentist.email}</p>
            <p className="dentist-phone">Teléfono: {dentist.phone}</p>
            <p className="dentist-website">
              Sitio Web:{" "}
              <a
                href={`http://${dentist.website}`}
                target="_blank"
                rel="noreferrer"
              >
                {dentist.website}
              </a>
            </p>
          </div>
          <div className="dentist-actions">
            <button className="contact-button">Contactar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dentist;
