const express = require('express')

const User = require('../models/auth.models')

const router =express.Router()

////////////////////////////////////////////


router.post('/user',(req,res)=>{
    
    console.log(req.body)

    const user =new User(req.body)

    user.save()

    .then((user)=>{res.status(200).send(user)})
    .catch((e)=>{res.status(400).send(e)})


})

////////////////////////////////////////////

router.get('/user/:id',(req,res)=>{

    const id = req.params.id
    User.findById(id)
    
    .then((user)=>{res.status(200).send(user)})
    .catch((e)=>{res.status(400).send(e)})

})

////////////////////////////////////////////











module.exports =User;


