const router = require("express").Router()
const authController = require("./controllers/auth-controller.js")
const activateController = require('./controllers/activatee-controller')
const authMiddleware = require('./middlewares/auth-middleware')

router.post("/send-otp", authController.sendOtp)
router.post("/verify-otp", authController.otpVerify)
router.post("/activate", authMiddleware, activateController.activate)
router.post('/refresh', authController.refresh)

module.exports = router