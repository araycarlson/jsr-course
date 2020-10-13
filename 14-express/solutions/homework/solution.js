const express = require('express')
const app = express()
const PORT = 4000

let compliments = [
  'Your instructors love you',
  'High five = ^5',
  'Is it Ruby Tuesday yet?',
  "It's almost beer o'clock",
  'The Force is strong with you'
]

let colors = ['#FF6347', '#FF4500', '#FFA500', '#01DF3A', '#FFF000']

function generateHtml (name) {
  let randomCompliment =
    compliments[Math.floor(Math.random() * compliments.length)]
  let randomColor = colors[Math.floor(Math.random() * colors.length)]

  const greeting = name ? `<h1>Hello, ${name}!</h1>` : ''
  const compliment = `<h1>${randomCompliment}</h1>`

  return `
    <body style="background-color:${randomColor}">
      ${greeting}
      ${compliment}
    </body>
  `
}

app.get('/', (req, res) => {
  const html = generateHtml()
  res.send(html)
})

app.get('/:name', (req, res) => {
  const name = req.params.name
  const html = generateHtml(name)
  res.send(html)
})

app.listen(PORT, () => {
  console.log('app listening on port 4000')
})
