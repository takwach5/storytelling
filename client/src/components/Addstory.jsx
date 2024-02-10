import React, { useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";



const Addstory=({id})=>{

    const[title,setTitle]=useState("")
    const[story,setStory]=useState("")
    const[image,setImage]=useState("")
  
    const navigate = useNavigate();
    const obj={
        title:title,
        story:story,
        image:image,
        users_id:id,
        category_id:2
        
    }
    const add=()=>{
        axios.post("http://localhost:5000/story/post",obj).then((res)=>{

            console.log("added")
            navigate('/home')
            
        })
        .catch(()=>{
            console.log("error")
        })
    }

    return(
        <div className="connn">
          <div className="add" > Title: <input onChange={(e) => {setTitle(e.target.value)}} type="text"/> </div>
          <div className="add" > Story: <textarea onChange={(e) => {setStory(e.target.value) }}/> </div>
          <div className="add" > Image:<input onChange={(e) => {setImage(e.target.value)}} placeholder="optional"/> </div>
          <div className="okk" onClick={add}> Post Now </div>
        </div>
      );

    }



export default Addstory
