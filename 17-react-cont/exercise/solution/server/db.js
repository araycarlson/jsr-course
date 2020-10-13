const mongoose = require('mongoose')

const searchSchema = mongoose.Schema({
  text: String,
  date: Date
})

mongoose.model('Search', searchSchema)

mongoose.connect('mongodb://test:password1@ds153709.mlab.com:53709/js13')
const db = mongoose.connection

module.exports = db
