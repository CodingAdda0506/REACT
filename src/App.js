import React, { useMemo, useState } from 'react'
import Card from "./components/Card/Card";
import { SmoothScroll } from './Lenis';
import "./App.css";
import UseContext from "./context/useContext";

const App = () => {
  SmoothScroll();

  const [number, setNumber] = useState(0);
  const [show, setShow] = useState(true);

  const incrementNumber = () => {
    return setNumber(number + 1);
  }

  const getNumber = (num) => {
    console.log("The Number is : ", num);
    for (let i = 0; i < 1000000000; i++) { }
    return num;
  }

  // const data = getNumber(number);

  const data = useMemo(() => {
    return getNumber(number);
  }, [number]);

  return (
    <div>
      <button
        onClick={incrementNumber}
      >
        increment
      </button>
      <p>
        Number is {data}.
      </p>
      <button
        onClick={() => setShow(!show)}
      >
        {show ? "click me" : "click me again"}
      </button>
    </div>
  )
}

export default App