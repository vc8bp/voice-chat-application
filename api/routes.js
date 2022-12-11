const router = require("express").Router()
const authController = require("./controllers/auth-controller.js")

router.post("/send-otp", authController.sendOtp)
router.post("/verify-otp", authController.otpVerify)

module.exports = router