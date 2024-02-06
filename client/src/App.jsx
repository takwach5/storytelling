import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import "./App.css";


import { useState } from "react";



function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

        <Route path="/" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
