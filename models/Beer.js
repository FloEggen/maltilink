
var mysql = require('mysql')

// Constructor of the User object
let Beer = function () {
}

Beer.findInfos = function (beerNumber) {
    return new Promise(async (resolve, reject) => {
        var con = mysql.createConnection({
            host: "i644z.myd.infomaniak.com",
            port: "3306",
            user: "i644z_malti_user",
            password: "Exxon1986!",
            database: "i644z_malti_db"
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