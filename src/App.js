import "./App.css";
import React from "react";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Weather />
      <div className="foot">
        <br />
        <a href="https://github.com/PaulineJohansson/weather-react">
          Open source code
        </a>{" "}
        by Pauline Johansson
      </div>
    </div>
  );
}
