const hashService = require('../services/hash-Service');
const OtpService = require('../services/otp-service');
const { findUser, createUser } = require('../services/user-Service');
const User = require("../models/UserSchema");
const { use } = require('../routes');
const tokenService = require('../services/token-service');
const UserDto = require('../dtos/user-dto');
const { storeRefreshToken } = require('../services/token-service');
require('dotenv').config();

//TODO: handle more errors

class AuthController {
    async sendOtp(req, res){
        const { data, type } = req.body;
        if(!data || !type) return res.status(401).json({success: false, error: "please fill the all the feilds"})

        const otp = await OtpService.generateOtp()
        const otpExpire = Date.now() + Number(process.env.OTP_EXPIRE_TIME);
        const hashedOtp = await hashService.hashOtp(`${data}${otp}${otpExpire}`)
        
    

        console.log(otp)
        if(type === "phone"){
            const resData = await OtpService.sendBySMS(data, otp)   
            console.log(resData)
            const finalData = {...resData.data, hash: `${hashedOtp}.${otpExpire}`, emailOrPhone: data}
            res.status(resData.status).json(finalData)
            
        } else if (type === "email") {
            OtpService.sendByEmail(req,res, otp)
        }
    }


    async otpVerify(req, res) {
        const {emailOrPhone, hash, otp} = req.body;
        const resData = await OtpService.verifyOtp(otp, hash, emailOrPhone);

        if(!resData.data.sucess){
            return res.status(resData.status).json(resData.data);
        }


        let user;

        user = await findUser({phone: emailOrPhone})
        
        if(!user){
            user = await createUser({phone: emailOrPhone})    
            console.log("user Created")
        }
        console.log("user not Created") 

        const {accessToken, refreshToken} = tokenService.generateToken({phone: user.phone, _id: user._id, isActivated: user.isActivated });

        const saverefToken = await storeRefreshToken(user._id, refreshToken)
        console.log("save is " + JSON.stringify(saverefToken))
        if(!saverefToken){
            return res.status(500).json({success: false, message: "internal server Error"})
        }

        res.cookie('refreshToken', refreshToken, {
            maxAge: 259200000, // 30 days in milliseconds
            httpOnly: true
        })
        res.cookie('accessToken', accessToken, {
            maxAge: 259200000, // 30 days in milliseconds
            httpOnly: true
        })
        
        const userDto  = new UserDto(user._doc)
        res.status(200).json({...userDto, auth: true})
        
    }
    
}

module.exports = new AuthController();