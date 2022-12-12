const { json } = require('express');
const { PhoneNumberContext } = require('twilio/lib/rest/trunking/v1/trunk/phoneNumber');
const hashService = require('./hash-Service');
require('dotenv').config();
const smsSid = process.env.SMS_SID
const twilioSecret = process.env.TWILIO_AUTH_TOKEN
const twilio = require('twilio')(smsSid, twilioSecret, {
    lazyLoading: true,
})

class OtpService {
    async generateOtp() {
        const crypto = require('crypto')
        const otp = await crypto.randomInt(111111, 999999)
        return otp;
    }
    async sendBySMS(phone, otp) {
        try {
            // await twilio.messages.create({
            //     to: phone,
            //     from: process.env.TWILIO_NUMBER,
            //     body: `your Otp is ${otp}`
            // })
            return {data: {sucess: true, message: "otp send Successfully"}, status: 200}
        } catch (error) {
            if(error.code === 21211) {
                return {data: {sucess: false, message: "The Number you Entered is not valid"}, status: 400}
            } else {
                return {data: {sucess: false, message: "Internal server Error, Please Try again after miutes"}, status: 500}
            } 
        }
        
    }

    async sendByEmail(req, res, otp) {
        const hash = await hashService.hashOtp(otp)
        res.send(`hello from email routes otp ${otp}`)
    }

    async verifyOtp(userOtp, hash, emailOrPhone) {
        const [ otp, expire ] = hash.split(".");

        // if(expire <= Date.now()){
        //     return {data: {sucess: false, message: "Otp isExpired"}, status: 400}
        // }

        const hashedOtp = await hashService.hashOtp(`${emailOrPhone}${userOtp}${expire}`);
        console.log(otp)
        console.log(hashedOtp)
        console.log()
        if(otp !== hashedOtp){
            console.log("inside")
            return {data: {sucess: false, message: "Otp is not Valid"}, status: 401}
        }

        
        
        return {data: {sucess: true, message: "Successfully Loged in"}, status: 200}


    }



}

module.exports = new OtpService()