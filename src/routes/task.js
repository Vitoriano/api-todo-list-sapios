const router = require('express').Router()
const taskController = require('../controllers/taskController')

router.get('/:task_id', taskController.index)
router.get('/list/:list_id', taskController.getAll)
router.post('/new', taskController.createTaskItem)
router.post('/status/change', taskController.alterTaskStatus)
router.put('/edit/:task_id', taskController.updateTask)
router.delete('/delete/:task_id', taskController.deleteTask)

module.exports = router