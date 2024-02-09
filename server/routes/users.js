const express = require ("express")
const Routes = express.Router()
const controller = require("../controllers/users")

Routes.get("/getAllusers",controller.getAllusers)
Routes.post("/add",controller.add)
Routes.post("/Register",controller.register)
Routes.post("/login",controller.login)




module.exports= Routes