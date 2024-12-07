// src/components/Footer.jsx
import React from "react";
import { useGlobalContext } from "../context/GlobalContext";

const Footer = () => {
  const { state } = useGlobalContext();

  return (
    <footer
      className={`fixed bottom-0 left-0 right-0
      py-4 bg-gray-800
      py-6 mt-8 border-t
      ${
        state.theme === "dark"
          ? "bg-gray-800 text-white border-gray-700"
          : "bg-white text-black border-gray-200"
      }
    `}
    >
      <div className="container mx-auto text-center text-2xl">
        <p>&copy; 2024 Dental Clinic. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
