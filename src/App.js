import React from "react";
import Header from "./Header";
import "./styles.css";
import WeatherColumn from "./WeatherColumn";

export default function App() {
  return (
    <div className="App">
      <Header />
      <br />
      <WeatherColumn />
    </div>
  );
}
