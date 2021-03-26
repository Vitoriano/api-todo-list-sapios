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

  const { id, password } = req.body

  const secretPass = await Task.getSecretPass()

  const task = await Task.getTask(id)

  if(task.update_count >= 2 && task.is_done) {
   return res.status(401).send({
      message: 'Ops! Você atingiu o limite máximo de alterações para essa tarefa'
    })
  }

  if(password == secretPass.password) {
    let is_done = !task.is_done

    await Task.update({...task, is_done, update_count: ++task.update_count})

    return res.status(200).send({
      message: 'Status atualizado com sucesso!'
    })
  } else {
    return res.status(401).send({
      message: 'Ops! Houve um problema na sua solicitação. favor verifica o preenchimento dos campos'
    })
  }

}

const updateTask = async(req, res) => {
  try {

    const { task_id } = req.params
    const { name, email, describe, list_id, is_done } = req.body

    await Task.update( { 
      id: task_id,
      name, 
      email, 
      describe, 
      list_id, 
      is_done
    })

    res.status(200).send({
     message: "Tarefa atualizada com sucesso!"
    })

  } catch (error) {
    res.status(400).send({
      message: 'Ops! Não foi possivel atualiar esta tarefa'
    })
  }
}

const deleteTask = async(req, res) => {
  try {

     await Task.deleteTask(req.params.task_id)

      res.status(200).send({
          message: 'Tarefa excluído com sucesso.'
      })
  } catch (error) {
      res.status(500).send({
          message: 'Ops! Não foi possível excluir a tarefa. '
      })
  }
}

module.exports = {
  index,
  createTaskItem,
  alterTaskStatus,
  getAll,
  updateTask,
  deleteTask
}