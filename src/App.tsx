import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

import PresalePage from "./PresalePage";
import Android from "./Android";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<PresalePage />} />
        <Route path="/android" element={<Android />} />
      </Routes>
    </div>
  );
}

export default App;
