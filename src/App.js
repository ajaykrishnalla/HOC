import React from "react";
import "./styles.css";
import ClickCounter from "./components/ClickCounter";
import HoverComponent from "./components/HoverComponent";

export default function App() {
  return (
    <div className="App">
      <ClickCounter />
      <HoverComponent />
    </div>
  );
}
