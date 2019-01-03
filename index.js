const express = require('express')

require('dotenv').config()

const { student } = require('./models')

student.sync()
  .then(console.log('done'))
  .catch((err) => {
    throw new Error(err)
  })