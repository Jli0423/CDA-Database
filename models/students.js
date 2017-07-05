const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var Student = mongoose.model('Student', {
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true
  },
  middleName: {
    type: String,
    required: false
  },
  driverLicense: {
    type: String,
    required: true
  },
  startClassDate: {
    type: Date,
    required: true
  },
  startCarDate: {
    type: Date,
    required: true
  },
  endClassDate: {
    type: Date,
    required: true
  },
  endCarDate: {
    type: Date,
    required: true
  },
  classMark: {
    type: Number,
    required: true
  },
  carMark: {
    type: Number,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number
  }
})

module.exports = {
  Student
}
