const mongoose = require('mongoose');
  const { Schema } = mongoose;

  const UserSchema = new Schema({
    phone: {type: Number, required: true, unique: true},
    isActivated: {type: Boolean, default: false},
    name: {type: String, required: false},
    avatar: {type: String, required: false}

  },{timestamps: true}, {autoIndex: true});
  module.exports = mongoose.model('user', UserSchema)