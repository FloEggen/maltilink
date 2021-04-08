const { request } = require('../app')
const Beer = require('../models/Beer')

exports.home = function (req, res) {
    res.render('home-guest')
}

exports.anyBinch = async function (req, res, next) {
    try {
        let beerInfos = await Beer.findInfos(req.params.code_bar_number)
        console.log("Bar code: ", beerInfos[0].BRAND)
        req.binches = {
            code: beerInfos[0].BAR_CODE_NUMBER,
            brand: beerInfos[0].BRAND,
            infos: beerInfos[0].DESCRIPTION
        }
        next()
    } catch (error) {
        console.log(error)
    }
}

exports.display = function (req, res) {
    res.render('binch-info-model', { data: req.binches })
}

