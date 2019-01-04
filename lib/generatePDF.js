const pdf = require('handlebars-pdf')
const print = require('./printFile')

module.exports = (pdfTemplate, options = {}) => {
  const { immediatePrint } = options

  pdf.create(pdfTemplate)
    .then((res) => {
      if (immediatePrint) {
        print(res.filename)
      } else {
        console.log(`File generated at ${res.filename}.`)
      }
    })
    .catch(pdfError => console.error(pdfError))
  }
