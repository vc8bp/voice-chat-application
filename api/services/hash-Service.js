const crypto = require('crypto')
require('dotenv').config();

class HashService {
    async hashOtp(data) {
        return  await crypto.createHmac("sha256",process.env.HASH_SECRET_KEY).update(data.toString()).digest("hex");
    }
}

module.exports = new HashService()