// membuat server express 

const express = require("express")

const app = express()

app.listen(4000, () => {
  console.log('Server berhasil berjalan pada port 4000')
})