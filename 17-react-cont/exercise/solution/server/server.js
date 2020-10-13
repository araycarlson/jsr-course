const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const api = require('./api.js')
const db = require('./db.js')
const app = express()

// we need to allow Cross Domain requests. Our client is at localhost:3000 but our server is
// localhost:4000. This is technically a 'cross-domain' request. By default, these aren't allowed.
// We can whitelist certain origins and allow them to access our API.
const corsOptions = {
  origin: 'http://localhost:3000'
}

app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))

app.get('/', (req, res) => {
  db.models.Search.find({})
    .limit(10)
    .sort({date: -1})
    .then(results => {
      res.send(results)
    })
})

app.get('/:search', (req, res) => {
  const searchText = req.params.search
  api.searchGifs(searchText).then(r => {
    const data = JSON.parse(r).data
    res.send(data)
  })
})

app.post('/', (req, res) => {
  const searchText = req.body.searchText
  db.models.Search.create({
    text: searchText,
    date: new Date()
  }).then(r => {
    res.send(r)
  })
})

app.listen(4000, () => {
  console.log('listening on port 4000')
})
