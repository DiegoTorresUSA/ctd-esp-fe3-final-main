// src/pages/Contact.jsx
import React from "react";
import Form from "../components/Form";
import { useGlobalContext } from "../context/GlobalContext";

const Contact = () => {
  const { state } = useGlobalContext();

  return (
    <div
      className={`min-h-screen p-6 ${
        state.theme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-gray-100 text-black"
      }`}
    >
      <h1 className="text-3xl font-bold mt-16 text-center">Contáctanos</h1>
      <Form />
    </div>
  );
};

export default Contact;
