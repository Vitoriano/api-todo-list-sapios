const Task = require('../models/taskListModel')

const index = async(req, res) => {

  try {

    const { task_id } = req.params
    const task = await Task.getTask(task_id)

    return res.json(task)

  } catch (error) {
    res.status(400).send({
      message: "Não foi possivel lista a tarefas"
    })
  }
}

const getAll = async(req, res) => {

  try {

    const { list_id } = req.params
    const tasks = await Task.getTaskByListId(list_id)

    return res.json(tasks)

  } catch (error) {
    res.status(400).send({
      message: "Não foi possivel lista as tarefas desta lista"
    })
  }
}

const createTaskItem = async(req, res) => {
  try {

    const { name, email, describe, list_id } = req.body

    await Task.create( { 
      name, 
      email, 
      describe, 
      list_id
    })

    res.status(200).send({
     message: "Tarefa cadastrada com sucesso!"
    })

  } catch (error) {
    res.status(400).send({
      message: 'Ops! Não foi adicionar esse registro'
    })
  }
}

const alterTaskStatus = async(req, res) => {

  const { id, list_id, is_done } = req.body

  const task = await Task.getTaskById(list_id, id)

  if(task.update_count >= 2 && task.is_done) {
   return res.status(401).send({
      message: 'Ops! Você atingiu o limite máximo de alterações para essa tarefa'
    })
  }

  await Task.update({...task, is_done})

  return res.status(200).send({
    message: 'Status atualizado com sucesso!'
  })

}

module.exports = {
  index,
  createTaskItem,
  alterTaskStatus,
  getAll
}