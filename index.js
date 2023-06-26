// membuat server express 

const express = require("express")

const app = express()

// app.method(path, handler)
// app.use("/", (req, res, next) => {
//   res.send('Hello World!');
// })

app.get("/", (req, res) => {
  res.send('Hello get metod');
})

app.post("/", (req, res) => {
  res.send('Hello post method')
})

app.listen(8000, () => {
  console.log('Server berhasil berjalan pada port 4000')
})