import React, { useState } from "react";

const Form = ({ setItems, items }) => {
  const [inputValue, setInputValue] = useState("");
  const [inputPriceValue, setinputPriceValue] = useState("");

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputPriceValue = (e) => {
    setinputPriceValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.length < 2 || inputPriceValue === "") {
      alert("Verifique los datos ingresados");
    } else {
      setItems([
        ...items,
        {
          id: Date.now(),
          title: inputValue,
          price: parseInt(inputPriceValue),
          total: parseInt(inputPriceValue),
          cantidad: 1,
        },
      ]);
      setInputValue("");
      setinputPriceValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="form-control my-3"
        type="text"
        value={inputValue}
        onChange={handleInputValue}
        placeholder="Ingresa el producto"
      />

      <input
        className="form-control my-3"
        type="number"
        value={inputPriceValue}
        onChange={handleInputPriceValue}
        placeholder="Ingresa el precio"
      />

      <button className="mb-5 btn btn-primary w-100">Agregar!</button>
    </form>
  );
};

export default Form;
