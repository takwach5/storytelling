const mysql =require("mysql2")


const connection =mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'kh@lilbou@rrouj69',
    database:'story'
})



connection.connect((err)=>{
    err ? console.log(err) : console.log("connected to db");
}) 

module.exports = connection