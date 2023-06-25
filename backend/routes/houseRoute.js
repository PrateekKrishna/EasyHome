const express = require('express')
const router = express.Router()
const {getHouse, setHouse, updateHouse, deleteHouse} = require('../controllers/houseController')

router.get('/', getHouse)

router.post('/', setHouse)

router.put('/:id', updateHouse)

router.delete('/:id', deleteHouse)

module.exports = router