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

module.exports = {
  index,
  createList
}