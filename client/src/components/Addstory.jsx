import React,{useState} from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";



const Addstory=()=>{

    const[title,setTitle]=useState("")
    const[story,setStory]=useState("")
    const[image,setImage]=useState("")
    const navigate = useNavigate();
    const obj={
        title:title,
        story:story,
        image:image,
        users_id:1,
        category_id:1
        
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
        <div>
               <div>
  <label htmlFor="newTitle"> Title:</label>
  <input className="t" onChange={((e)=>{setTitle(e.target.value)})} type="text" id="newTitle" />
</div>
<div>
  <label htmlFor="newStory"> Story:</label>
  <textarea className="s" onChange={((e)=>{setStory(e.target.value)})} id="newStory" />
</div>
<div>
  <label htmlFor="newImageUrl"> Image </label>
  <input  className="im" onChange={((e)=>{setImage(e.target.value)})} type="text" id="newImageUrl" placeholder="optional" />
</div>
<div className="okk" onClick={()=>{add()}}>
   post now
</div>

        </div>
        
    )

}


export default Addstory