import React from "react";

const Total = ({ totalPrice }) => {
  return (
    <div className="total d-flex justify-content-center">
      <p className="mx-5">Total a pagar</p>
      <p className="mx-5 px-5">${totalPrice}</p>
    </div>
  );
};

export default Total;
