import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import Addstory from "./components/Addstory.jsx";
import Storydetails from "./components/Storydetails.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addstory" element={<Addstory />} /> 
          <Route path="/details/:title" element={<Storydetails/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
