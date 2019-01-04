const pdf = require('handlebars-pdf')
const print = require('./printFile')

module.exports = (pdfTemplate, options = {}) => new Promise((resolve, reject) => {
  const { immediatePrint } = options

  pdf.create(pdfTemplate)
    .then((res) => {
      if (immediatePrint) {
        print(res.filename)
      } else {
        resolve(`File generated at ${res.filename}.`)
      }
    })
    .catch(pdfError => reject(pdfError))
  })
