const router = require("express").Router()
const authController = require("./controllers/auth-controller.js")
const AuthController = require('./controllers/auth-controller.js')

router.post("/send-otp", authController.sendOtp)

module.exports = router