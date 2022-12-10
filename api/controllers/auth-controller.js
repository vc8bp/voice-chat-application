const OtpService = require('../services/otp-service')
require('dotenv').config();

class AuthController {
    async sendOtp(req, res){
        const { data, type } = req.body;
        if(!data || !type) return res.status(401).json({success: false, error: "please fill the all the feilds"})

        const otp = await OtpService.generateOtp()
        
        const otpExpire = Date.now() + process.env.OTP_EXPIRE_TIME;
    

        console.log(otp)
        if(type === "phone"){
            const {data, status} = await OtpService.sendBySMS(data, otp)
            res.status(status).json(data)
            
        } else if (type === "email") {
            OtpService.sendByEmail(req,res, otp)
        }
    }

    
}

module.exports = new AuthController();