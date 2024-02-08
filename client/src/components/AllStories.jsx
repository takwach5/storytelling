import React,{useEffect,useState} from 'react'
import axios from 'axios'

const AllStories = () => {
  const [story,setStory]=useState([])


  useEffect(()=>{
axios.get("http://localhost:5000/story/getAll").then(()=>{
  console.log("all stories",story)
  setStory(story.data)
})
.catch((err)=>{
  console.log(err)
})
  },[])



  return (
    <div>
      
    </div>
  )
}

export default AllStories
