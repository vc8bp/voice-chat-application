require('dotenv').config();
const jwt = require('jsonwebtoken');
const refreshTokenSchema = require('../models/refreshTokenSchema');
const RefreshTokenSchema = require('../models/refreshTokenSchema');
const UserSchema = require('../models/UserSchema');
const jwtAccessToken = process.env.JWT_SECRET
const jwtRefreshTOken = process.env.JWT_REFRASH_SECRET

class TokenService {
    generateToken(payload) {
        const accessToken = jwt.sign(payload, jwtAccessToken, {
            expiresIn: '1m'
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

    async verifyAccessToken(token) {
        return jwt.verify(token, jwtAccessToken)     
    }

    async verifyRefreshToken(token) {
        return jwt.verify(token, jwtRefreshTOken)     
    }

    async findRefreshToken(userID, refreshTokken) {
        return await refreshTokenSchema.findOne({userID, token: refreshTokken})
    }

    async updateRefreshToken(userID, refreshToken) {
        return await refreshTokenSchema.updateOne({userID}, {token: refreshToken})
    }
}
module.exports = new TokenService();