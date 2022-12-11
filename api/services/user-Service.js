const User = require('../models/UserSchema')

class UserService {

    async findUser(filter) {
        try {
            return await User.findOne(filter);
        } catch (error) {
            console.log(error);
            return 
        }
    }

    async createUser(data) {
        try {
            return await User.create(data)
        } catch (error) {
            console.log(error);
            return 
        }
    }

}

module.exports = new UserService;