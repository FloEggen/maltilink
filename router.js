const express = require('express')
const router = express.Router()
const userController = require('./controllers/userController.js')
router.get('/', userController.allBinches)

router.get('/:code_bar_number', userController.doesBeerExist, userController.anyBinch, userController.anyFarmer, userController.display)

module.exports = router
