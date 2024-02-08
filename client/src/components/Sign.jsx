import React ,{useState}   from 'react'
import axios from 'axios'


function Sign() {

  const[name,setName] = useState('')
  const[email,setEmail] = useState('')
  const[password,setPassword] = useState('')


  const sign =()=>{
    axios.post(`http://localhost:5000/auth/Register`,{name:name,email:email,password:password})
    .then(() => {  console.log("welcome new user"); })
    .catch((err) => { console.log(err); });
 }

  return (
    <div>
        <h1>Sign in</h1>
        <div className='signinput' >enter your name :<input type="text" onChange={(e)=>{setName(e.target.value)}} /></div>
        <div className='signinput' >enter your email :<input type="text"onChange={(e)=>{setEmail(e.target.value)}}  /></div>
        <div className='signinput' >enter your password :<input type="text"onChange={(e)=>{setPassword(e.target.value)}} /></div>
        <button className='signButt' onClick={()=>{sign()}} >sign in</button>
    </div>
  )
}

export default Sign