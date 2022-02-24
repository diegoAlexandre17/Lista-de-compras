import React, { useState } from "react";

const useCounter = (initialCounter) => {
  const [counter, setCounter] = useState(initialCounter);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  return [counter, increment, decrement];
};

export default useCounter;
