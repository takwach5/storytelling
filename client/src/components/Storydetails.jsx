import React,{useEffect, useState} from "react";
import { useParams } from 'react-router-dom'
import axios from "axios";

const Storydetails=()=>{
    const[One,setOne]=useState({})
    const {title}=useParams()
    console.log(title)
    useEffect(()=>{
        axios.get(`http://localhost:5000/story/getone/${title}`)
      .then((res) => {
       setOne(res.data[0])
       console.log(res.data);
      })
      .catch((err) => {
        console.log(err, "errr");
      });

    },[])
    return(
        <div>
            <div className="titledetails"><h2>{One.title}</h2></div>
            <div className="storydetails"><h2>{One.story}</h2></div>
            <div className="imgdetails"><img src={One.image} alt="" /></div>

           
        </div>
    )

}


export default Storydetails