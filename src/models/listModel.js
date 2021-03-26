const db = require('../database/connection')

const getAll = async () => {
  const list = await db('list').select('*')
  return list
}
const create = async(list) => {
  return await db('list').insert(list)
}

module.exports = {
  getAll,
  create
}