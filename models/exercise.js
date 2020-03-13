const { model, Schema } = require('mongoose')

module.exports = model('item', new Schema({
 name: {
   type: String,
   required: true
 },
  type: {
    type: String,
    required: true
  },
  distance: {
    type: Integer,
    required: false
  },
  duration: {
    type: Integer,
    required: false
  },
  weight: {
    type: Integer,
    required: false
  },
  sets: {
    type: Integer,
    required: false
  },
  reps: {
    type: Integer,
    required: false
  }
 
}))