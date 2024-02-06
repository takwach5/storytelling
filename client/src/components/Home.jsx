import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
//plz work fr

const Home = () => {
  return (
    <div>
      <nav className='nav'>
        <ul>
          <li className='active'> 
            <Link to="/" className="home">Home</Link>
          </li>
          <li className="search-bar">
            <input type="text" placeholder="Search..." />
            <button className='sbutton'>Search</button>
          </li>
          <li className="category-bar">
            <select>
              <option value="all">All Categories</option>
              <option value="category1">Category 1</option>
              <option value="category2">Category 2</option>
              <option value="category3">Category 3</option>
              <option value="category4">Category 4</option>
              <option value="category5">Category 5</option>
            </select>
          </li>
        </ul>
      </nav>
      
      <footer className="footer"> 
        <div className="about-us"> 
          <p>About Us</p>
        </div>
        <div className="social-icons"> 
          <a className='fb' href="https://www.facebook.com/profile.php?id=100007577478945">
          <FaFacebook />
          </a>
          <a className='insta' href="https://www.instagram.com/medkhalilbouarrouj/">
           < FaInstagramSquare/>
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
