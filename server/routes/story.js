const express = require ("express")
const Routes = express.Router()
const controlleur = require("../controllers/controllers")


Routes.get("/getAll",controlleur.getAll)
Routes.post("/add",controlleur.add)


module.exports= Routes