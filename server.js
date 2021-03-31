const express = require('express')
const app = express()
const PORT = process.env.PORT

const ConnectDB = require('./helpers/ConnectDB')

//connect to DB
ConnectDB();

//middelware
app.use(express.json());

//define Routes
app.use('/register',require('./router/register'))
app.use('/login',require('./router/login'))
app.use('/operation',require('./router/operation'))
app.use('/update',require('./router/profile'))

app.listen(process.env.PORT, ()=>
    console.log(`server in running on port: ${process.env.PORT}`)
)