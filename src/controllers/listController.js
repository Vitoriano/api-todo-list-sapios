const List = require('../models/listModel')

const index = async(req, res) => {
  const listAll = await List.getAll()
  return res.json(listAll)
}

const createList = async(req, res) => {
  try {

    const { name } = req.body
    await List.create( { name } )

    res.status(200).send({
      message: 'Lista Cadastrada Com Sucesso!'
    })

  } catch (error) {
    res.status(400).send({
      message: 'Ops! Não foi possivel criar a lista',
      error: error
    })
  }
}

const updateList = async(req, res) => {
  try {

    const { id, name } = req.body
    

    await List.update( { 
      id,
      name, 
    })

    res.status(200).send({
     message: "Lista atualizada com sucesso!"
    })

  } catch (error) {
    res.status(400).send({
      message: 'Ops! Não foi possivel atualiar esta lista'
    })
  }
}

const deleteList = async(req, res) => {
  try {

     await List.deleteList(req.params.list_id)

      res.status(200).send({
          message: 'Lista excluída com sucesso.'
      })
  } catch (error) {
      res.status(500).send({
          message: 'Ops! Não foi possível excluir a lista. '
      })
  }
}

const getListById = async(req, res) => {
  const list = await List.getListById(req.params.id)
  return res.json(list)
}

module.exports = {
  index,
  createList,
  updateList,
  deleteList,
  getListById
}