require('dotenv').config();
const jwt = require('jsonwebtoken');
const RefreshTokenSchema = require('../models/refreshTokenSchema');
const jwtAccessToken = process.env.JWT_SECRET
const jwtRefreshTOken = process.env.JWT_REFRASH_SECRET

class TokenService {
    generateToken(payload) {
        const accessToken = jwt.sign(payload, jwtAccessToken, {
            expiresIn: '1h'
        })

        const refreshToken = jwt.sign(payload, jwtRefreshTOken, {
            expiresIn: '1y'
        })

        return {accessToken, refreshToken}
    }

    async storeRefreshToken(userID, token){
        try {
            await RefreshTokenSchema.create({userID, token})
            console.log("acces saved successfully")
            return true
        } catch (error) {
            console.log("acces saved failed")
            return false
        }
    }

}
module.exports = new TokenService();