const express = require("express");
const app = express()
const port = 8080


app.listen(port, () => {
  console.log(`servidor subiu na porta ${port}`)
})

const index = require("./backEnd/src/routes/index")
const users = require("./backEnd/src/routes/usersRouters")
const receitas = require("./src/routes/index")


// app.use("/", index)
// app.use("/pessoas", pessoas)