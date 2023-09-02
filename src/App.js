import React from 'react'
import Card from "./components/Card/Card";
import { SmoothScroll } from './Lenis';
import "./App.css";
import UseContext from "./context/useContext";

const App = () => {
  SmoothScroll();

  const ytData = {
    Name: "Coding Adda",
    Channel_Age: 2.5,
    Member1: "Aditya",
    Member2: "Hari"
  }

  return (
    <UseContext.Provider value={ytData}>
      <div className="main-container">
        <Card />
      </div>
    </UseContext.Provider>
  )
}

export default App