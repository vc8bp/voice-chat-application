const tokenService = require('../services/token-service')

module.exports = async (req, res, next) => {
    try {
        const { accessToken, refreshToken } = req.cookies;
        if(!accessToken && !refreshToken) {
            throw new Error();
        }

        const userData = await tokenService.verifyAccessToken(accessToken);
        if(!userData){
            throw new Error();
        }

        req.user = userData
        next()
    } catch (error) {
        res.status(401).json({success: false, message: "invalid Token"})
    }
}