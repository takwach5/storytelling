import React,{useState} from "react";
import axios from "axios";

const Addstory=()=>{

    const[title,setTitle]=useState("")
    const[story,setStory]=useState("")
    const[image,setImage]=useState("")
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
        })
        .catch(()=>{
            console.log("error")
        })
    }




    return(
        <div>
               <div>
  <label htmlFor="newTitle">New Title:</label>
  <input onChange={((e)=>{setTitle(e.target.value)})} type="text" id="newTitle" />
</div>
<div>
  <label htmlFor="newStory">New Story:</label>
  <textarea onChange={((e)=>{setStory(e.target.value)})} id="newStory" />
</div>
<div>
  <label htmlFor="newImageUrl">New Image URL:</label>
  <input onChange={((e)=>{setImage(e.target.value)})} type="text" id="newImageUrl" placeholder="optional" />
</div>
<div onClick={()=>{add()}}>
    <button>post now</button>
</div>
        </div>
        
    )

}


export default Addstory