// membuat server express 
require('dotenv').config()
const PORT = process.env.PORT || 8000;
// import express
const express = require("express")
// accommodate to express in a variable
const app = express()
// import body-parse
const bodyParser = require('body-parser')
// import router users
const usersRoutes = require('./routes/users')
// import middleware users
const middlewareLogRequest = require('./middleware/logs')

// express use middleware
app.use(middlewareLogRequest)
// middleware access permission json
app.use(express.json())
// parse application/json
app.use(bodyParser.json())
// express use path router users
app.use('/users', usersRoutes)

app.use('/', (req, res) => {
  
})

//express listen on port 8000
app.listen(PORT, () => {
  console.log(`Berhasil berjalan di por ${PORT}`)
})