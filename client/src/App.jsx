import React,{  useState,useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import AllStories from "./components/AllStories.jsx";
import "./App.css";
import Category from "./components/Category.jsx";



function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

        <Route path="/home" element={<Home/>}/>
        <Route path="/AllStories" element={<AllStories />}/>
         <Route path="/Categoryy" elements ={<Category/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
