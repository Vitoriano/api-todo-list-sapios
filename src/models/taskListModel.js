const db = require('../database/connection')

const create = async(task) => {
  return await db('task_list_item').insert(task)
}

const getTaskByListId = async (list_id) => {
  const task = await db('task_list_item')
                        .select('*')
                        .where('list_id', list_id)
  return task
}

const getTaskById = async (list_id, task_id) => {
  const task = await db('task_list_item')
                        .select('*')
                        .where('list_id', list_id)
                        .where('id', task_id)
                        .first()
                       
  return task
}

const getTask = async (task_id) => {
  const task = await db('task_list_item')
                        .select('*')
                        .where('id', task_id)
                        .first()
                       
  return task
}

const update = async(task) => {

  const is_update = await db('task_list_item')
                            .update(task)
                            .where('id', task.id)
  return is_update
}

const deleteTask = async(id) => {
  await db('task_list_item').where('id', id).del()
}

const modifyTask = async(task_id, list_id) => {

  return true
}

module.exports = {
  getTaskByListId,
  create,
  modifyTask,
  getTaskById,
  update,
  getTask,
  deleteTask
}