const { Op } = require('sequelize')

const generateStudentLetter = require('../lib/generateStudentLetter')

const { student, request } = require('../models')

module.exports = options => new Promise((resolve, reject) => {
  const { regno, letterType } = options

  student.findOne({ where: { regno } })
    .then(currentStudent => generateStudentLetter(currentStudent, {})
      .then(letterId => resolve(letterId))
      .catch(error => reject(error)))
    .catch(error => reject(error))

  switch (letterType) {
    case 'student':
      generateStudentLetter
  }
})
