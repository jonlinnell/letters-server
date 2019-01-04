const newRequest = require('../lib/newRequest')

const endpoint = '/request'

module.exports = app => {
  app.post(endpoint, (req, res) => {
    // Validate!
    newRequest(req.body)
      .then(letter => res.send(letter))
      .catch(error => res.status(400).send(error))
  })

  app.get(endpoint, (req, res) => {
    res.send('hey')
  })
}