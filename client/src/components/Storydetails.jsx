import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";

const Storydetails = () => {
    const [commentaire, setCommentaire] = useState([]);
    const [One, setOne] = useState({});
    const { title } = useParams();
    const[newtitle,setNewtitle]=useState("")
    const[newtext,setNewtext]=useState("")

    useEffect(() => {
        axios.get(`http://localhost:5000/story/getone/${title}`)
            .then((res) => {
                setOne(res.data[0]);
            })
            .catch((err) => {
                console.log(err, "errr");
            });
        showcomments();
    }, [title]);
    const deleting=(id)=>{
      axios.delete(`http://localhost:5000/story/del/${id}`).then((res)=>{
        console.log("deleted succesfully");
        window.location.reload()
      })
      .catch((err) => {
        console.log(err, "errr");
    });

    }
    const deletecomment=(id)=>{
      axios.delete(`http://localhost:5000/comments/del/${id}`).then((res)=>{
        console.log(" comment deleted succesfully");
        window.location.reload()
      })
      .catch((err) => {
        console.log(err, "errr");
    });
    }

    const [newcomment, setNewcomment] = useState("");
    const com = {
        describe: newcomment,
        users_id: 1,
        stories_id: 1
    };

    const showcomments = () => {
        axios.get("http://localhost:5000/comments/getAll")
            .then((res) => {
                setCommentaire(res.data);
            })
            .catch((err) => {
                console.log(err, "errr");
            });
    };

    const postcomment = () => {
        axios.post("http://localhost:5000/comments/post", com)
            .then(() => {
                console.log("new comment has been posted");
                setNewcomment("");
                showcomments();
            })
            .catch((err) => {
                console.log(err, "errr");
            });
    };
    const updating=(id)=>{

      axios.put(`http://localhost:5000/story/put/${id}`).then((res)=>{
   setNewtitle("")
   setNewtext("")
       (res.data)
        console.log("update")
       
      })
      .catch((err) => {
        console.log(err, "errr");
    });

    }

    return (
        <div>
            <div className="titledetails">
                <h2>
                    {One.title}
                    <div className="dropdown">
                        <div className="dots">...</div>
                        <div className="dropdown-content">
                            <a  href="#">Edit</a>
                            <a onClick={()=>{deleting(One.id)}} href="#">Delete</a>
                        </div>
                    </div>
                </h2>
            </div>
            <input  type="text" className="storydetails" value={One.story} />
            <div className="imgdetails"><img src={One.image} alt="" /></div>

            <form>
                <div>
                    <textarea onChange={(e) => { setNewcomment(e.target.value) }} name="comments" id="comments" style={{ fontFamily: 'sans-serif', fontSize: '1.2em' }}></textarea>
                </div>
                <button onClick={() => { postcomment() }}>Comment</button>
            </form>

            <div>
                {commentaire.map((el) => (
                    <div key={el.id} className="comment">
                        <input type="text" value={el.describe} />
                        <div className="dropdown">
                            <div className="dots">...</div>
                            <div className="dropdown-content">
                                <a href="#">Edit</a>
                                <a onClick={()=>{deletecomment(el.id)}} href="#">Delete</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Storydetails;
