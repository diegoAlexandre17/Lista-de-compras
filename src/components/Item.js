import React, { useState } from "react";
import useCounter from "../hooks/useCounter";

const Item = ({ item, aumentarCantidad, disminuirCantidad, deleteItem }) => {
  return (
    <div className="item">
      <p className="mx-2">{item.title}</p>
      <p className="mx-2">Precio por unidad : ${item.price}</p>

      <div className="d-flex">
        <button
          className="btn btn-primary"
          onClick={() => aumentarCantidad(item)}
        >
          +
        </button>
        <p className="px-2"> {item.cantidad} </p>
        <button
          className="btn btn-primary"
          onClick={() => disminuirCantidad(item)}
        >
          -
        </button>
      </div>
      <p className="">Total : ${item.total}</p>
      <div className="">
        <button className="btn btn-primary" onClick={() => deleteItem(item)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Item;
