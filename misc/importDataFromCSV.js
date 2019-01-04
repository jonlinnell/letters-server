#!/usr/bin/env node
require('dotenv').config()

const path = require('path')
const fs = require('fs')
const parse = require('csv-parse')
const camelcase = require('camelcase')

const { student } = require('../models')

const importFile = process.argv[2] ? path.resolve(process.argv[2]) : null

const parser = parse()

const output = []

parser.on('readable', () => {
  process.stdout.write('Receiving data... ')
  let record
  while (record = parser.read()) {
    output.push(record)
  }
})

parser.on('end', () => {
  process.stdout.write(' done.\n')
  const fields = output[0]

  const outputSansHeaders = output.slice(1)

  const records = outputSansHeaders.reduce((accumulator, current) => {
    const record = {}

    current.forEach((field, i) => {
      record[camelcase(fields[i])] = field
    })

    accumulator.push(record)
    return accumulator
  }, [])

  process.stdout.write('Adding records...')
  
  records.forEach(record => student.create(record)
    .then(newRecord => console.log(`Added ${newRecord.regNo}`)))
    .catch(error => { throw new Error(error) })
})

student.sync({ force: true })
  .then(() => {
    console.log('done')
    fs.readFile(importFile, 'utf8', (error, data) => {
      if (error) { throw new Error(error) }
    
      parser.write(data)
      parser.end()
    })
  })
