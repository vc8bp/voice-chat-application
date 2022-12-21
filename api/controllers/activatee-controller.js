const jimp = require('jimp');
const path = require('path')
const crypto = require('crypto');
const UserService = require('../services/user-Service');
const UserDto = require('../dtos/user-dto');

class ActivateController {
    async activate(req,res){
        const {image, name, type = 'png'} = req.body;
        if(!image && !name){
            return res.status(403).json({success: false, message: 'all feilds are required'})
        }
        if(type === 'gif') {
            return res.status(415).json({success: false, message: "could not process the gif image"})    
        }

        const buffer = Buffer.from(
            image.split('base64,')[1],
             'base64'
        ) //converting base64 string to Image

        const imgName = await `${Date.now()}.${crypto.randomInt(0, 100000000000000)}.${type}` //creating random file name
        const jimpres = await jimp.read(buffer)
        
        try {    
            await jimpres
                .resize(256, jimp.AUTO) // resize
                .quality(60) // set JPEG quality
                .write(path.resolve(__dirname, `../storage/${imgName}`))
        } catch (error) {
            console.log(error)
            return res.status(500).json({success: false, message: "could not process the image"})       
        }

        try {
            const user = await UserService.findById(req.user._id)
            if(!user){
                return res.status(401).json({success: false, message: "no user found"})
            }

            user.isActivated = true;
            user.name = name;
            user.avatar = `/storage/${imgName}`
            user.save();

            return res.status(200).json({ user: new UserDto(user), auth: true})

        } catch (error) {
            return res.status(500).json({success: false, message: " internal server error"})
        }
        
    }
}

module.exports = new ActivateController();