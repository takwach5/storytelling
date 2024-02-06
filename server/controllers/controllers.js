const db = require("../database/mysql")


const getAll = ((req,res)=>{
    db.query("SELECT * FROM users",(err,result)=>{
        err? res.send(err) : res.json(result)
    })
})

const add =((req,res)=>{
    const sql= `insert into users set ?`
    db.query(sql,req.body,(err,result)=>{
        err? res.send(err) : res.json(result)
    })
})




module.exports ={getAll,add}