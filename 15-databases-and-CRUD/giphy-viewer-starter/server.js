const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const api = require('./api.js')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))

// here, we tell our engine what layout file to be the default.
app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}))

app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
  const form = `
  <form action="/" method="post">
    <input name="search" id="search" type="text"/>
    <input type="submit" value="search"/>
  </form>
  `
  res.send(form)
})

app.post('/', (req, res) => {
  api.searchGifs(req.body.search, res)
})

app.listen(4000, () => {
  console.log('listening on port 4000')
})
