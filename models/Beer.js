
var mysql = require('mysql')

// Constructor of the User object
let Beer = function () {
}

Beer.findInfos = function (beerNumber) {
    return new Promise(async (resolve, reject) => {

        var con = mysql.createConnection({
            host: "sql4.freemysqlhosting.net",
            port: "3306",
            user: "sql4402888",
            password: "zgMDF8as5F",
            database: "sql4402888"
        });

        con.query(
            "SELECT * FROM Bieres WHERE BARCODE_NUMBER='" + beerNumber + "'",
            (err, rows) => {
                if (rows === undefined) {
                    reject(new Error("Error rows is undefined" + err));
                } else {
                    resolve(rows);
                }
            }
        )
        con.end()
    })
}

module.exports = Beer