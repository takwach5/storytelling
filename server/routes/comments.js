const express = require ("express")
const Routes1 = express.Router()
const comments = require("..//controllers/comments")


Routes1.get("/getAll",comments.getAll)
Routes1.get("/getone/:stories_id", comments.getone);
Routes1.post("/post",comments.add)
Routes1.delete("/del/:id",comments.del)
Routes1.put("/put/:id",comments.update)



module.exports= Routes1