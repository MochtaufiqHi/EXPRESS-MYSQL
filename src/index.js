// membuat server express 

const express = require("express")

const usersRoutes = require('./routes/users')

const app = express()

const middlewareLogRequest = require('./middleware/logs')

// middleware
app.use((req, res, next) => {
  console.log('log terjadi pada request ke API')
  next();
})

app.use(middlewareLogRequest)
// router users
app.use('/users', usersRoutes)



app.get("/", (req, res) => {
  res.json({
    nama: "moch taufiq",
    email: "mochtaufiq@gmail.com"
  });
})

app.post("/", (req, res) => {
  res.send('Hello post method')
})

app.listen(8000, () => {
  console.log('Server berhasil berjalan pada port 4000')
})