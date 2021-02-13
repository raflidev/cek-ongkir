const express = require('express')
const router = express.Router()
const Controller = require("../src/util/Controller")

router.get('/province', Controller.province)
router.get('/province/:id', Controller.provinceID)
router.get('/city', Controller.city)
router.get('/city/:id', Controller.cityID)
router.get('/cost/:from/:to/:weight/:courier', Controller.cost)

module.exports = router