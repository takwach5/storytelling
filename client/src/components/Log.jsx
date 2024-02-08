import React ,{useState}   from 'react'
import axios from 'axios'

function Log() {

    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')


    const loged =()=>{
        axios.get(`http://localhost:5000/auth/login`,{email:email,password:password})
        .then(() => {  console.log("welcome"); })
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