const express  = require('express')

const app =express ()

const port = process.env.PORT|| 3000

require('./db/mongoose')

app.use(express.json())

const routes = require('./routes/auth.routes')

app.use(routes)



app.listen( port , ()=>{console.log('all prefect')})

