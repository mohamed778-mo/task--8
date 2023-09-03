const express = require('express')
const router  = express.Router()
const authrouters = require("./auth.routes")

router.use(authrouters)


module.exports=router;