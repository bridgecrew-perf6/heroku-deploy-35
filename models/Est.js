const mongoose = require('mongoose')

const EstSchema = new mongoose.Schema({
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'categories',
    require: true
  },
  name: {
    type: String,
    require: true
  },
  nif: {
    type: String,
    require: true
  },
  img: {
    type: String
  },
  accession_date: {
    type: String,
    require: true
  },
  phones_number: {
    type: Array
  },
  description: {
    type: String,
    require: true
  },
  address: {
    type: Object,
    require: true
  },
  open_to: {
    type: Array,
    default: []
  },
  rating: {
    type: Number,
    default: 0
  },
  ratingPeople: {
    type: Number,
    default: 0
  },
  ratingmedia: {
    type: Number,
    default: 0
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    require: true
  }
})
const Est = mongoose.model('Est', EstSchema)
module.exports = Est
