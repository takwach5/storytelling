const db = require ("../database/mysql")



const getAll = ((req,res)=>{
  db.query("SELECT * FROM category",(err,result)=>{

      if(err){
        res.send(err)
      }
      else{
        res.json(result)
      }
  })
})

// heyy new schema

  const add =((req,res)=>{
    const sql= `insert into category set ?`
    db.query(sql,req.body,(err,result)=>{
      if(err){
        res.send(err)
      }
      else{
        res.json(result)
      }
    })
})

const del = (req,res)=>{
  const sql = `delete from category where id=${req.params.id}`
  db.query(sql,(err,result)=>{
    if(err){
      res.send(err)
    }
    else{
      res.json(result)
    }
  })
}
const update =(req,res)=>{
  const sql = `update category set ? where id=${req.params.id}`
  db.query(sql,req.body,(err,result)=>{
    if(err){
      res.send(err)
    }
    else{
      res.json(result)
    }
  })
}
module.exports ={getAll,add,del,update}