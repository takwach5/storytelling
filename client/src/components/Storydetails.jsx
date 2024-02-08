import React,{useEffect, useState} from "react";
import { useParams } from 'react-router-dom'
import axios from "axios";

const Storydetails=()=>{
  const[commentaire,setCommentaire]=useState([])
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
      showcomments()

    },[title])
    const[newcomment,setNewcomment]=useState("")
    const com={
     describe:newcomment
    }
    const showcomments=()=>{
      axios.get("http://localhost:5000/comments/getAll").then((res)=>{
        setCommentaire(res.data)

      })
      .catch((err) => {
        console.log(err, "errr");
      });
    }


    const postcomment=()=>{
      axios.post("http://localhost:5000/comments/post",com).then((res)=>{
        console.log("new comment has ben posted");
        setNewcomment("")
showcomments()
      })
      .catch((err) => {
        console.log(err, "errr");
      });
    }
    return(
        <div>
            <div className="titledetails"><h2>{One.title}</h2></div>
            <div className="storydetails"><h2>{One.story}</h2></div>
            <div className="imgdetails"><img src={One.image} alt="" /></div>

            <form action="/html/tags/html_form_tag_action.cfm" method="post">
          <div>
            <textarea onChange={((e)=>{setNewcomment(e.target.value)})} name="comments" id="comments" style={{ fontFamily: 'sans-serif', fontSize: '1.2em' }}></textarea>
          </div>
          <button onClick={() => { postcomment() }}>Comment</button>
        </form>
        <div>
          {commentaire.map((el)=>(
            <div>{el.describe}</div>
          ))}
        </div>

           
        </div>
    )

}


export default Storydetails