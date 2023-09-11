const express = require("express")
const {generateImage} = require("../controller/OpenAiController")

const router = express.Router()


router.post("/generateImage", generateImage)

module.exports = router;