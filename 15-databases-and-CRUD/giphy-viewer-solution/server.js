const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const api = require('./api.js')
const db = require('./db.js')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))

// here, we tell our engine what layout file to be the default.
app.engine('handlebars', exphbs({
  partialsDir: 'views/partials',
  defaultLayout: 'main'
}))

app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
  // when the home page loads, we request data from our database and pass it into our handlebars template
  db.models.Search.find({}).lean()
    .limit(10)
    .sort({date: -1})
    .then(results => {
      res.render('home', {searchResults: results})
    })
})


app.get('/:search', (req, res) => {
  const searchText = req.params.search
  api.searchGifs(searchText).then(gifs => {
    const data = JSON.parse(gifs).data
    res.render('gif-list', {gifs: data})
  })
})

app.post('/', (req, res) => {
  const searchText = req.body.search
  db.models.Search.create({
    text: searchText,
    date: new Date()
  })

  res.redirect(`/${searchText}`)
})

app.listen(4000, () => {
  console.log('listening on port 4000')
})