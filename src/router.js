var express = require('express')
var router = express.Router()

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})
// define routes below
router.get('/', (req, res) => {
  res.send('Hello world!')
})
// define the about route
router.get('/about', (req, res) => {
  res.send('About page')
})

module.exports = router
