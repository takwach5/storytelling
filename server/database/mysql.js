const mysql =require("mysql2")


const connection =mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'azerty12345AZ',
    database:'story'
})



connection.connect((err)=>{
    err ? console.log(err) : console.log("connected to db");
}) 

module.exports = connection