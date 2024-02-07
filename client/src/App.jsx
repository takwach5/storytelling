import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import AllStories from "./components/AllStories.jsx";
import "./App.css";
import { useState ,useEffect} from "react";



function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

        <Route path="/home" element={<Home/>}/>
        <Route path="/AllStories" element={<AllStories >}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
