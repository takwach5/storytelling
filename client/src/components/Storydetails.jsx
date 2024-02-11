import React, { useEffect, useState } from "react";
import { useParams, Link } from 'react-router-dom';
import axios from "axios";
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import Cookies from "js-cookie";

const Storydetails = ({ id }) => {
    const [commentaire, setCommentaire] = useState([]);
    const [One, setOne] = useState({});
    const { title } = useParams();
    const [newcomment, setNewcomment] = useState("");

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

    const deleting = (id) => {
        axios.delete(`http://localhost:5000/story/del/${id}`)
            .then((res) => {
                console.log("deleted successfully");
                window.location.reload();
            })
            .catch((err) => {
                console.log(err, "errr");
            });
    }

    const deletecomment = (id) => {
        axios.delete(`http://localhost:5000/comments/del/${id}`)
            .then((res) => {
                console.log("comment deleted successfully");
                window.location.reload();
            })
            .catch((err) => {
                console.log(err, "errr");
            });
    }

    const com = {
        describe: newcomment,
        users_id: id,
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

    return (
        <div>
            <nav className='nav'>
                <ul>
                    <li className='active'>
                        <Link to="/home" className="home">Home</Link>
                    </li>
                    <li className="search-bar">
                       
                    </li>
                    <li className="category-bar">
            
                    </li>
                    <li>
                        <Link to="/Addstory" className="add-story">Add Story</Link>
                    </li>
                    <Link to="/Sign" className="Sign">sign</Link>
                    /
                    <Link to="/Log" className="Log">Log</Link>
                    /
                    <Link onClick={() => { Cookies.remove('id'); Cookies.remove('token'); }} to='/Log' className="Log">Logout</Link>
                </ul>
            </nav>

            <div>
                <div className="titledetails">
                    <h2>
                        {One.title}
                        <div className="dropdown">
                            <div className="dots">...</div>
                            <div className="dropdown-content">
                                <a href="#">Edit</a>
                                <a onClick={() => {deleting(One.id) }} href="#">Delete</a>
                            </div>
                        </div>
                    </h2>
                </div>
                <input type="text" className="storydetails" value={One.story} />
                <div className="imgdetails"><img src={One.image} alt="" /></div>

                <form>
                    <div>
                        <textarea onChange={(e) => { setNewcomment(e.target.value) }} name="comments" className="comment" style={{ fontFamily: 'sans-serif', fontSize: '1.2em' }}></textarea>
                    </div>
                    <button className="comment-button" onClick={() => { postcomment() }}>Comment</button>
                </form>

                <div>
                    {commentaire.map((el) => (
                        <div key={el.id} className="comment">
                            <input type="text" value={el.describe} />
                            <div className="dropdown">
                                <div className="dots">...</div>
                                <div className="dropdown-content">
                                    <a href="#">Edit</a>
                                    <a onClick={() => { deletecomment(el.id) }} href="#">Delete</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <footer className="footer">
                <div className="about-us">
                    <p>About Us</p>
                </div>
                <div className="social-icons">
                    <a className='fb' href="https://www.facebook.com/profile.php?id=100007577478945">
                        <FaFacebook />
                    </a>
                    <a className='insta' href="https://www.instagram.com/medkhalilbouarrouj/">
                        <FaInstagramSquare />
                    </a>
                </div>
                <div className="contact-us">
                    <p>Contact Us</p>
                </div>
            </footer>
        </div>
    );
};

export default Storydetails;
