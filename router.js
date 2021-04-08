const express = require('express')
const router = express.Router()
const userController = require('./controllers/userController.js')
router.get('/', userController.home)

router.get('/binch/:code_bar_number', userController.anyBinch, userController.display)

module.exports = router
