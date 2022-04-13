const express = require('express')
const Joi = require('@hapi/joi')
const { insertData, getData } = require('./db')


const router = express.Router()

const itemSchema = Joi.object().keys({
  name: Joi.string(),
  quantity: Joi.number().integer().min(0)
})

router.post('/data', (req, res) => {
  const item = req.body
  console.log(req.body)
  const result = itemSchema.validate(item)
  if (result.error) {
    console.log(result.error)
    res.status(400).end()
    return
  }
  insertData(item)
    .then(() => {
      res.status(200).end()
    })
    .catch((err) => {
      console.log(err)
      res.status(500).end()
    })
})

router.get('/data', (req, res) => {
  getData()
    .then((items) => {
      item = items[items.length - 1]
      res.json(item.name)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).end()
    })
})


module.exports = router
