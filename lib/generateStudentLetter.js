const fs = require('fs')
const path = require('path')
const moment = require('moment')

const generatePDF = require('./generatePDF')

module.exports = (studentData, options) => new Promise((resolve, reject) => {
  fs.readFile(path.resolve(`${__dirname}/../templates/studentLetter.handlebars`), (error, template) => {
    if (error) { console.error(error) }

    const pdfTemplate = {
      template: template.toString(),
      context: {
        officePhone: '020 3805 xxxx',
        officeEmail: 'xxxx@xxxxx.ac.uk',
        officeWeb: 'https://www.xxxxxx.ac.uk/',
        currentDate: moment().format('dddd MMMM Do YYYY'),
        graduationDate: moment(1607788400000).format('MMMM Do YYYY'),
        ...studentData,
      },
      path: path.resolve(`${__dirname}/../data/${moment().format('YYMMDD')}-${studentData.regno}-studentRegLetter.pdf`)
    }

    console.log(studentData)

    generatePDF(pdfTemplate, options)
      .then(response => resolve(response))
      .catch(error => reject(error))
  })
})
