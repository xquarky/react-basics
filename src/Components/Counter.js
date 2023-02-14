import React from 'react';
import { useState } from 'react';

export default function Counter() {
  const [counter, setCounter] = useState(0);

  function handleClick() {
    setCounter(counter + 1);
    console.log(counter);
  }

  return (
    <>
      <h1>Counter: {counter}</h1>
      <button onClick={handleClick}>Increase Counter</button>
    </>
  );
}
