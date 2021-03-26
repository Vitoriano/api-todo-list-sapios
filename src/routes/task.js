const router = require('express').Router()
const taskController = require('../controllers/taskController')

router.get('/:task_id', taskController.index)
router.get('/list/:list_id', taskController.getAll)
router.post('/new', taskController.createTaskItem)
router.post('/status/change', taskController.alterTaskStatus)

module.exports = router