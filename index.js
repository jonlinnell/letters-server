const express = require('express')

require('dotenv').config()

const { student, request } = require('./models')

async function syncTables() {
  await student.sync()
  await request.sync()
}

syncTables()
  .then(console.log('done'))
  