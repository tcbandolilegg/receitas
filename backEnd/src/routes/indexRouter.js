const express = require("express");
const router = express.Router()


router.get("/", (_, res) => {

  res.send("Hello word")
})




module.exports = router 
