// membuat server express 

const express = require("express")

const usersRoutes = require('./routes/users')

const app = express()

app.use('/users', usersRoutes)

// app.method(path, handler)
// app.use("/", (req, res, next) => {
//   res.send('Hello World!');
// })

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