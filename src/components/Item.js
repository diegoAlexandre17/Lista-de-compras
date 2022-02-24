import React, { useState } from "react";
import useCounter from "../hooks/useCounter";

const Item = ({ item, aumentarCantidad, disminuirCantidad, deleteItem }) => {
  return (
    <div className="item text-dark my-4 border  d-flex px-3 py-2 justify-content-around text-center align-middle">
      <p className="mx-2 py-4">{item.title}</p>
      <p className="mx-2 py-4">Precio por unidad : ${item.price}</p>

      <div className="mx-4 py-4">
        <button
          className="btn btn-primary"
          onClick={() => aumentarCantidad(item)}
        >
          +
        </button>
        <span> {item.cantidad} </span>
        <button
          className="btn btn-primary"
          onClick={() => disminuirCantidad(item)}
        >
          -
        </button>
      </div>
      <p className=" py-4">Total : ${item.total}</p>
      <div className="mx-4 py-4">
        <button className="btn btn-primary" onClick={() => deleteItem(item)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Item;
