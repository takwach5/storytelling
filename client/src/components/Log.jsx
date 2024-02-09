import React ,{ useEffect, useState}   from 'react'
import axios from 'axios'
// eslint-disable-next-line no-unused-vars
import Cookies from "js-cookie"
import { useNavigate } from 'react-router-dom'


function Log() {

    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')
    const navigate = useNavigate()








    const loged =()=>{
      axios.post(`http://localhost:5000/auth/login`,{email:email,password:password})
      .then((result) => {   Cookies.set("token",result.data.token)    
                            Cookies.set('id',result.data.user.id)
                             navigate('/') 
    })
      .catch((err) => { console.log(err); });
   }


  return (
    <div className='signn' >
        <h1 >Log in</h1>
        <div className='signinput' >enter your email :<input type="text"onChange={(e)=>{setEmail(e.target.value)}}  /></div>
        <div className='signinput' >enter your password :<input type="text"onChange={(e)=>{setPassword(e.target.value)}} /></div>
        <button className='signButt' onClick={()=>{loged()}} >login</button>
    </div>
  )
}

export default Log