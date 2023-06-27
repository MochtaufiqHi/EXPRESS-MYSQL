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
const middlewareLogRequest = require('./middleware/logs');
const upload = require('./middleware/multer');

// express use middleware
app.use(middlewareLogRequest)
// middleware access permission json
app.use(express.json())
// parse application/json
app.use(bodyParser.json())
// middleware static file
app.use('/assets', express.static('public/images'))
// express use path router users
app.use('/users', usersRoutes)
// upload file
app.post('/upload', upload.single('photo'),(req, res) => {
  res.json({
    message: 'Upload Berhasil'
  })
})

app.use((err, req, res, next) => {
  res.json({
    message: err.message
  })
})

//express listen on port 8000
app.listen(PORT, () => {
  console.log(`Berhasil berjalan di por ${PORT}`)
})