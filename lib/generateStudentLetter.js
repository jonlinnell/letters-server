const fs = require('fs')
const path = require('path')
const moment = require('moment')

const generatePDF = require('./generatePDF')

module.exports = (studentData, options) => {
  fs.readFile(path.resolve(`${__dirname}/../templates/studentLetter.handlebars`), (error, template) => {
    if (error) { console.error(error) }

    const pdfTemplate = {
      template: template.toString(),
      context: {
        // Use dummy data for now
        officePhone: '020 3805 xxxx',
        officeEmail: 'xxxx@xxxxx.ac.uk',
        officeWeb: 'https://www.xxxxxx.ac.uk/',
        regno: 'B818828',
        currentDate: moment().format('dddd MMMM Do YYYY'),
        forenames: 'Jon',
        familyName: 'Linnell',
        progMethStud: 'Full Time',
        version: '18',
        programmeTitle: 'Communications and Media Studies',
        programmeLength: 1,
        awardShortName: 'BSc',
        startDate: moment(1570204400000).format('MMMM Do YYYY'),
        endDate: moment(1601308400000).format('MMMM Do YYYY'),
        graduationDate: moment(1607788400000).format('MMMM Do YYYY'),
      },
      path: path.resolve(`${__dirname}/../data/${moment().format('YYMMDD')}-${studentData.regno}-studentRegLetter.pdf`)
    }

    generatePDF(pdfTemplate, options)
  })
}
