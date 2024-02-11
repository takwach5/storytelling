import React,{useState} from 'react'
import Cookies from "js-cookie"
import { Link,useNavigate } from 'react-router-dom';


function Nav() {

    const [data,setData] = useState([]);
    const[category,setCategory]=useState([])
    const [filter,setFilter]=useState([])
    const[select,setSelect]=useState([])

    const [search, setSearch] = useState("");

    const handleSearch = (e) => {
        const query=e.target.value.toLowerCase();
        setSearch(query); 
    
        const filtered=data.filter((el) =>
          el.title.toLowerCase().includes(query)
        ); 
        setFilter(filtered)
      }

      const handelSelect=(e)=>{
        if(e==="all"){
      setSelect([])
          return
        }
    const filtered= data.filter((el)=>{
      return(el.category_id==e)
      
    })
    if(!filtered.length){
      filtered.push(1)
    }
    console.log(e,"filtered");
    setSelect(filtered)
      }



      const handleOUT=()=>{
        Cookies.remove('id')
        Cookies.remove('token')
   
     
     }


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
          {/* onSelect={(e)=>{console.log(e.target.value,"event")}} */}
        
            <select  onChange={(e)=>{
            handelSelect(e.target.value)}}>
              <option value="all">All Categories</option>
          {category.map((el,i)=>(
            <option value={el.id} key={i}>{el.name}</option>
          ))}
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
    </div>
  )
}

export default Nav