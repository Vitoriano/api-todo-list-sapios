const express = require('express')
const router = express.Router()

const list = require('./list')
const task = require('./task')

router.use('/list', list)
router.use('/task', task)

router.get('/', (req, res) => {
  return res.json('Hello World')
})

module.exports = router
