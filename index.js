const fs = require('fs')
const path = require('path')
const bodyParser = require('body-parser')
const express = require('express')

require('dotenv').config()

const { PORT } = process.env

const port = PORT || 3000

const { student, request } = require('./models')

async function syncTables() {
  await student.sync()
  await request.sync()
}

const app = express()
app.use(bodyParser.json())

fs.readdir(path.resolve(`${__dirname}/routes`), (error, files) => {
  if (error) { throw new Error(`Unable to load routes: ${error}`) }

  files.forEach(file => require(path.resolve(`${__dirname}/routes/${file}`))(app))
})

syncTables()
  .then(() => {
    app.listen(port, () => { process.stdout.write(`Listening on port ${port}.\n`) })
  })
