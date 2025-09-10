const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
  fullName: {
    type : String,
    required: true,
    trim: true
  },
  email: {
    type : String,
    required: true,
    trim: true,
    unique: true,
    lowercase: true
  }, 
  gender: {
    type : String,
    required: true,
    enum: ["Male", "Female"],
    trim: true
  },
  stack: {
    type : String,
    required: true,
    trim: true
  },
  age: {
    type : Number,
    required: true,
    trim: true
  },
}, {
  timestamp: true
});

const studentModel = mongoose.model('users', studentSchema)

module.exports = studentModel