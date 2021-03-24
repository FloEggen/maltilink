const { request } = require('../app')

exports.home = function (req, res) {
    res.render('home-guest')
}

exports.anyBinch = function (req, res) {

    var mysql = require('mysql')

    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "Password1234",
        database: "maltilink"
    });

    getBeerInfos(con, req.params.code_bar_number)
        .then(function (results) {
            console.log(results[0])
            res.render('binch-info-model', { infos: results[0] })
        })
        .catch(function (err) {
            console.log("Promise rejection error: " + err);
        })
}

getBeerInfos = function (con, beerNumber) {
    return new Promise(function (resolve, reject) {
        con.query(
            "SELECT * FROM bar_code_infos WHERE bar_code_number='" + beerNumber + "'",
            function (err, rows) {
                if (rows === undefined) {
                    reject(new Error("Error rows is undefined"));
                } else {
                    resolve(rows);
                }
            }
        )
    }
    )
}

