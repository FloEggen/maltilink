const { request } = require('../app')
const Beer = require('../models/Beer')

exports.home = function (req, res) {
    res.render('home-guest')
}

exports.anyBinch = async function (req, res, next) {
    try {
        let beerInfos = await Beer.findInfos(req.params.code_bar_number)
        //console.log("Bar code: ", beerInfos[0].BRAND)
        req.binches = {
            beer_name: beerInfos[0].BEER_NAME,
            brewery_name: beerInfos[0].BREWERY_NAME,
            production_location: beerInfos[0].PRODUCTION_LOCATION,
            beer_description: beerInfos[0].BEER_DESCRIPTION,
            brewery_description: beerInfos[0].BREWERY_DESCRIPTION,
            brewery_website: beerInfos[0].BREWERY_WEBSITE,
            farmer_description: beerInfos[0].FARMER_DESCRIPTION,
        }
        next()
    } catch (error) {
        console.log(error)
    }
}

exports.display = function (req, res) {
    res.render('binch-info-model-new', { data: req.binches })
}

