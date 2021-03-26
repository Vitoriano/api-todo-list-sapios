const router = require('express').Router()
const listController = require('../controllers/listController')

router.get('/', listController.index)
router.post('/new', listController.createList)

module.exports = router