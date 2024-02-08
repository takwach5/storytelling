import React,{  useState,useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import Addstory from "./components/Addstory.jsx";
import Storydetails from "./components/Storydetails.jsx";
import Sign from "./components/Sign.jsx";
import "./App.css";
import Category from "./components/Category.jsx";



function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addstory" element={<Addstory />} /> 
          <Route path="/details/:title" element={<Storydetails />}/>

        <Route path="/home" element={<Home/>}/>
         <Route path="/Categoryy" elements ={<Category/>}/>
          <Route path="/details/:title" element={<Storydetails/>}/>
          <Route path="/home" element={<Home />} />
          <Route path="/Sign" element={<Sign />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
