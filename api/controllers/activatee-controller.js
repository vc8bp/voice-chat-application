const jimp = require('jimp');
const path = require('path')
const crypto = require('crypto');
const fs = require('fs')
const { ConnectionPolicyPage } = require('twilio/lib/rest/voice/v1/connectionPolicy');

class ActivateController {
    async activate(req,res){
        console.log(req.user)

        const {image, name, type = 'png'} = req.body;
        if(!image && !name){
            return res.status(400).json({success: false, message: 'all feilds are required'})
        }

        // const buffer = Buffer.from(
        //     image.replace(/^data:image\/png;base64,/, ""),
        //     'base64'
        // ) //converting base64 string to Image

        const buffer = Buffer.from(
            image.split('base64,')[1],
             'base64'
        ) //converting base64 string to Image

        const imgName = await `${Date.now()}.${crypto.randomInt(0, 100000000000000)}.${type}` //creating random file name
        const jimpres = await jimp.read(buffer)
        if(type ===' gif') {
            try {
                fs.writeFileSync(__dirname, `../storage/${imgName}`)
            } catch (error) {
                console.log(error)
                return res.status(500).json({success: false, message: "could not process the gif image"})    
            }
        } else {
            try {    
                await jimpres
                    .resize(256, jimp.AUTO) // resize
                    .quality(60) // set JPEG quality
                    .write(path.resolve(__dirname, `../storage/${imgName}`))
            } catch (error) {
                console.log(error)
                return res.status(500).json({success: false, message: "could not process the image"})       
            }
        }
        
        res.status(200).json({success: true, message: "image proccessed successfully"})
    }
}

module.exports = new ActivateController();