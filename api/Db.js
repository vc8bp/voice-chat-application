const mongoose = require('mongoose')
require('dotenv').config();
const mongoURI = process.env.MONGODB_URL;

const connectToMOngo = () => {
    mongoose.set('strictQuery', false);
    mongoose.connect(mongoURI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        autoIndex: true
    }).then(() => {
        console.log("Mongodb Connected Successfully")
    }).catch((e) => {
        console.log(e)
        console.log("failed to connect with mongodb")
    })

    
}

module.exports = connectToMOngo;



const UserSchema = new mongoose.Schema({
    phone: {type: Number, required: true},
    isActivated: {type: Boolean, default: false}
    
})