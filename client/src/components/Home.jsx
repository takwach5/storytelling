import React, { useEffect, useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import axios from 'axios';
import Cookies from "js-cookie"



const Home = () => {
  const [data, setData] = useState([]);
 
  const [search, setSearch] = useState(""); 
  const [filteredData, setFilteredData] = useState([]); 
  const navigate=useNavigate()

  useEffect(() => {
    axios.get("http://localhost:5000/story/getAll")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        setFilteredData(res.data); 
      })
      .catch((err) => {
        console.log(err, "errr");
      });
  }, []);

  const Like = (id) => {
    const updatedlikes =data.map(story => {
      if (story.id === id) {
        return { ...story, likes:story.likes+(story.liked?-1:1), liked:!story.liked };
      }
      return story;
    });
    setData(updatedlikes);
    setFilteredData(updatedlikes);
  };

  const getone = (title) => {
   
    navigate(`/details/${title}`)
   
  }
  const handleOUT=()=>{
     Cookies.remove('id')
     Cookies.remove('token')

  }
  

  const handleSearch = (e) => {
    const query=e.target.value.toLowerCase();
    setSearch(query); 

    const filtered=data.filter((el) =>
      el.title.toLowerCase().includes(query)
    );
    setFilteredData(filtered); 
  };

  return (
    <div>
      <nav className='nav'>
        <ul>
          <li className='active'> 
            <Link to="/home" className="home">Home</Link>
          </li>
          <li className="search-bar">
            <input type="text" placeholder="Search..." onChange={handleSearch} value={search} />
            <button className='sbutton'>Search</button>
          </li>
          <li className="category-bar">
            <select>
              <option value="all">All Categories</option>
              <option value="category1">Drama</option>
              <option value="category2">Horror</option>
              <option value="category3">Romance</option>
              <option value="category4">Adventure</option>
              <option value="category5">Thriller</option>
            </select>
          </li>
          <li>
            <Link to="/Addstory" className="add-story">Add Story</Link>
          </li>
          <Link to="/Sign" className="Sign">sign</Link>
          /
          <Link to="/Log" className="Log">Log</Link>
          /
          <Link onClick={()=>{handleOUT() }} to ='/Log'  className="Log">Logout</Link>


        </ul>
      </nav>

      <div>
        {filteredData.map((e) => (
          <div key={e.id}>
            <div className="details" onClick={() => getone(e.title)}><h2>{e.title}</h2></div>
        
            <p>{e.story}</p>
            <img src={e.image} alt="Story Image" />
            <p>Likes: {e.likes}</p>
            <button onClick={() => Like(e.id)}>{e.liked ? 'Unlike' : 'Like'}</button>
          </div>
        ))}
        <form action="/html/tags/html_form_tag_action.cfm" method="post">
          <div>
            <textarea name="comments" id="comments" style={{ fontFamily: 'sans-serif', fontSize: '1.2em' }}></textarea>
          </div>
          <input type="submit" value="Comment" />
        </form>
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
            <FaInstagramSquare/>
          </a>
        </div>
        <div className="contact-us"> 
          <p>Contact Us</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
