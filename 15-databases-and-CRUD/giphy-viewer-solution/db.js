// db.js


const mongoose = require('mongoose')

// a database schema is like a blueprint of what the data is going to look like
const searchSchema = mongoose.Schema({
  text: String,
  date: Date
})

// a model is a type of document that will be saved to our database - it conforms to a schema
mongoose.model('Search', searchSchema)

// we connect to our mlab database
mongoose.connect('mongodb://zach:jsr810@ds013881.mlab.com:13881/jsr810')
const db = mongoose.connection

module.exports = db