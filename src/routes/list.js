const router = require('express').Router()
const listController = require('../controllers/listController')

router.get('/', listController.index)
router.get('/:id', listController.getListById)
router.post('/new', listController.createList)
router.put('/edit/', listController.updateList)
router.delete('/delete/:list_id', listController.deleteList)

module.exports = router