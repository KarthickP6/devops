const express = require("express")

const app = express()

app.get("/", (req, res) => {
  res.send("Hi karthick")
})

app.listen(8080, () => {
  console.log("Server started on 3000")
})
