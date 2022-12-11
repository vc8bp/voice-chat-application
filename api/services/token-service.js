require('dotenv').config();
const jwt = require('jsonwebtoken');
const jwtAccessToken = process.env.JWT_SECRET
const jwtRefreshTOken = process.env.JWT_REFRASH_SECRET

class TokenService {
    generateToken(payload) {
        const accessToken = jwt.sign(payload, jwtAccessToken, {
            expiresIn: '1h'
        })

        const refreshToken = jwt.sign(payload, jwtAccessToken, {
            expiresIn: '1y'
        })

        return {accessToken, refreshToken}
    }

}
module.exports = new TokenService();