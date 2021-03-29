const db = require('../database/connection')

const getAll = async () => {
  const list = await db('list').select('*')
  return list
}

const create = async(list) => {
  return await db('list').insert(list)
}

const update = async(list) => {

  const is_update = await db('list')
                            .update(list)
                            .where('id', list.id)
  return is_update
}

const deleteList = async(id) => {
  await db('list').where('id', id).del()
}

const getListById = async(id) => {
  return await db('list').where('id', id).select('*').first()
}

module.exports = {
  getAll,
  create,
  update,
  deleteList,
  getListById
}