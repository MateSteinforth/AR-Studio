// server.js
// where your node app starts

// init project
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'))
app.use(bodyParser.json())

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.sendFile(__dirname + '/views/index.html')
})

// Simple in-memory store
const players = [
  {
    "name": "foobar",
    "x": 100,
    "y": 150
  },
  {
    "name": "bizzle",
    "x": 200,
    "y": 300
  }
]

app.get("/players/:id", (request, response) => {
  response.setHeader('Content-Type', 'application/json')
  response.json(players[request.params.id])
})

app.post("/players/:id", (request, response) => {
  console.log(request.body)
  var b = request.body
  if (b.x && b.y) {
    players[request.params.id] = b
  }
  response.sendStatus(200)
})

app.get("/players/:id/update", (request, response) => {
  var p = players[request.params.id]
  if (!p) {
    players[request.params.id] = {}
    p = players[request.params.id]
  }
  if (request.query.x) {
    p.x = request.query.x
  }
  if (request.query.y) {
    p.y = request.query.y
  }
  if (request.query.name) {
    p.name = request.query.name
  }
  response.sendStatus(200)
})

const listener = app.listen(process.env.PORT, () => {
  console.log(`Your app is listening on port ${listener.address().port}`)
})
