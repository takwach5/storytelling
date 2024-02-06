const db = require("../database/mysql")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const getAllusers = ((req,res)=>{
    db.query("SELECT * FROM users",(err,result)=>{
        err? res.send(err) : res.json(result)
    })
})


const add =((req,res)=>{
    const sql= `insert into users set ?`
    db.query(sql,req.body,(err,result)=>{
        err? res.send(err) : res.status(201).json(result)
    })
})

const register = async(req,res)=>{
   const {email,name,password,image} = req.body
   console.log(req.body);
   try{
    const hashPassword = await bcrypt.hash(password,10)
    console.log(hashPassword);

    const newUser = { 
        email,
        name,
        password : hashPassword,
        image:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
        } 
        add({body:newUser},res)

    }
catch(err){res.status(500).send(err)}
}

const comparing = async (writtenPassword, hashedPassword) => {
    try {
const match = bcrypt.compare(writtenPassword,hashedPassword)
return match
    }
    catch(err){res.status(500).send(err)}
}

const login = (req,res)=>{

    
}




module.exports = {getAllusers , add , register}