import React from "react";

const Total = ({ totalPrice }) => {
  return (
    <div className="total row g-0">
      <p className=" col col-12 col-sm-6">Total a pagar</p>
      <p className=" col col-12 col-sm-6">${totalPrice}</p>
    </div>
  );
};

export default Total;
