// src/components/Navbar.jsx
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext";
import dentistLogo from "../assets/dentist-logo.png";

const Navbar = () => {
  const { state, dispatch } = useGlobalContext();

  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  const navLinkClass = ({ isActive }) => `
    px-6 py-2 rounded-md transition-colors duration-300
    ${
      isActive
        ? state.theme === "dark"
          ? "bg-gray-700 text-white"
          : "bg-blue-100 text-blue-700"
        : state.theme === "dark"
        ? "text-gray-300 hover:bg-gray-700 hover:text-white"
        : "text-gray-600 hover:bg-gray-100"
    }
  `;

  return (
    <nav
      className={`
      py-6 shadow-md
      ${
        state.theme === "dark"
          ? "bg-gray-800 text-white"
          : "bg-white text-black"
      }
    `}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center">
          <img src={dentistLogo} alt="Dentist Logo" className="h-16 mr-4" />
          <Link
            to="/home"
            className="text-4xl font-bold hover:opacity-80 transition-opacity"
          >
            Dental Clinic
          </Link>
        </div>
        <div className="flex items-center space-x-12">
          <NavLink to="/home" className={navLinkClass}>
            <span className="text-2xl">Inicio</span>
          </NavLink>
          <NavLink to="/contact" className={navLinkClass}>
            <span className="text-2xl">Contacto</span>
          </NavLink>
          <NavLink to="/favs" className={navLinkClass}>
            <span className="text-2xl">Favoritos</span>
          </NavLink>
          <button
            onClick={toggleTheme}
            className={`
              px-3 py-2 rounded-md transition-colors duration-300
              ${
                state.theme === "dark"
                  ? "bg-gray-700 text-white hover:bg-gray-600"
                  : "bg-gray-100 text-black hover:bg-gray-200"
              }
            `}
          >
            {state.theme === "dark" ? "☀️ Modo Claro" : "🌙 Modo Oscuro"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
