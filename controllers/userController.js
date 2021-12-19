const { request } = require('../app')
const Beer = require('../models/Beer')
const Farmer = require('../models/Farmer')

exports.home = function (req, res) {
    res.render('home-guest')
}

exports.anyBinch = async function (req, res, next) {
    try {
        let beerInfos = await Beer.findInfos(req.params.code_bar_number)
        req.binches = {
            beer_name: beerInfos[0].BEER_NAME,
            brewery_name: beerInfos[0].BREWERY_NAME,
            production_location: beerInfos[0].PRODUCTION_LOCATION,
            beer_description: beerInfos[0].BEER_DESC,
            brewery_description: beerInfos[0].BREWERY_DESC,
            brewery_website: beerInfos[0].BREWERY_WEBSITE,
            beer_batch: beerInfos[0].BARLEY_BATCH
        }
        next()
    } catch (error) {
        console.log(error)
    }
}

exports.anyFarmer = async function (req, res, next) {
    try {
        console.log("Hello BATCH: ", req.binches.beer_batch)
        let farmerInfos = await Farmer.findInfos(req.binches.beer_batch)
        console.log("DESCRIPTION FARMER: ", farmerInfos[0].AGRI_DESC)
        req.farmer = {
            farmer_description: farmerInfos[0].AGRI_DESC
        }
        next()
    } catch (error) {
        console.log(error)
    }
}

exports.display = function (req, res) {
    console.log(req.binches)
    console.log(req.farmer)
    var beer = req.binches
    var farmer = req.farmer
    beer.farmer_description = farmer.farmer_description
    //var temp = beer.push(farmer.farmer_description)
    console.log(beer)
    res.render('binch-info-model-new', { data: beer })
}

