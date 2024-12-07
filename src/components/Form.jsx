// src/components/Form.jsx
import React, { useState } from "react";
import { useGlobalContext } from "../context/GlobalContext";

const Form = () => {
  const { state } = useGlobalContext();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    if (
      formData.name.length <= 5 ||
      !formData.email.includes("@") ||
      !formData.email.includes(".")
    ) {
      setError("Por favor verifique su información nuevamente");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (validateForm()) {
      console.log("Submitted:", formData);
      setSuccess(
        `Gracias ${formData.name}, te contactaremos cuando antes vía mail`
      );
      setFormData({ name: "", email: "" });
    }
  };

  return (
    <div
      className={`max-w-md mx-auto p-6 rounded mt-14 ${
        state.theme === "dark"
          ? "bg-gray-700 text-white"
          : "bg-white text-black"
      }`}
    >
      <form onSubmit={handleSubmit}>
        <div className="mb-6 text-xl">
          <label>Nombre Completo</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full p-2 border rounded ${
              state.theme === "dark"
                ? "bg-gray-600 border-gray-500"
                : "bg-gray-100"
            }`}
          />
        </div>
        <div className="mb-4 text-xl">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full p-2 border rounded ${
              state.theme === "dark"
                ? "bg-gray-600 border-gray-500"
                : "bg-gray-100"
            }`}
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-500">{success}</p>}
        <button
          type="submit"
          className={`w-full p-4 rounded text-xl mt-8 ${
            state.theme === "dark"
              ? "bg-blue-700 text-white"
              : "bg-blue-500 text-white"
          }`}
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Form;
