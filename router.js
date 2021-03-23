const express = require('express')
const router = express.Router()
const userController = require('./controllers/userController.js')
router.get('/', userController.home)

router.get('/7640103300787', userController.binch1)
router.get('/7640180521044', userController.binch2)
router.get('/7640184520050', userController.binch3)
router.get('/7640399390080', userController.binch4)

module.exports = router
