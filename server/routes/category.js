const express = require ("express")
const Routes2 = express.Router()
const category = require("../controllers/category")


Routes2.get("/getAll",category.getAll)
Routes2.post("/post",category.add)
Routes2.delete("/del/:id",category.del)
Routes2.put("/put/:id",category.update)



module.exports= Routes2