const mysql =require("mysql2")


const connection =mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'857595A!',
    database:'story'
})



connection.connect((err)=>{
    err ? console.log(err) : console.log("connected to db");
}) 

module.exports = connection