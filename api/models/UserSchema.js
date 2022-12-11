const mongoose = require('mongoose');
  const { Schema } = mongoose;

  const UserSchema = new Schema({
    phone: {type: Number, required: true, unique: true},
    isActivated: {type: Boolean, default: false}

  },{timestamps: true}, {autoIndex: true});
  module.exports = mongoose.model('user', UserSchema)