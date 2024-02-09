import axios from 'axios'
import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'


const Category = () => {
  const [story,setStory]=useState([])
  const[category,setCategory]=useState([])
  const{id}=useParams()
  console.log(id,"id")


useEffect(()=>{
  axios.get(`http://localhost:5000/category/getAll`).then((res)=>{
    setCategory(res.data)
    console.log("this is category",res.data)
  })
  .catch((err)=>{console.log(err)})
},[])


  useEffect(()=>{
    axios.get(`http://localhost:5000/story/getcategory/${id}`).then((res)=>{
      setStory(res.story)
    })
    .catch((err)=>{console.log(err)})
  })
  
  return (
    <div >

    </div>
  )
}

export default Category
