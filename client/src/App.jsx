import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import AllStories from "./components/AllStories.jsx";
import Sign from "./components/Sign.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/AllStories" element={<AllStories />} />
          <Route path="/Sign" element={<Sign />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
