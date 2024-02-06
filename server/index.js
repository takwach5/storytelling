const express = require("express");
const cors = require("cors");
const db = require("./database/mysql");
const Routes = require("./routes/story");
const Routes1= require("./routes/comments")
const Routes2 = require("./routes/category")





const app = express();
const port = 5000; // Change the port to 5000

app.use(express.json());
app.use(cors())



// Add any additional middleware if needed

app.use("/story",Routes);
app.use("/comments",Routes1)
app.use("/category",Routes2)



app.listen(port, () => {
  console.log(`Connected on port ${port}`);
}); 

module.exports = db;
