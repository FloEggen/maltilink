
var mysql = require('mysql')

// Constructor of the User object
let Farmer = function () {
}

Farmer.findInfos = function (batchNumber) {
    return new Promise(async (resolve, reject) => {

        var con = mysql.createConnection({
            host: "i644z.myd.infomaniak.com",
            port: "3306",
            user: "i644z_malti_user",
            password: "Exxon1986!",
            database: "i644z_malti_db"
        });

        con.query(
            "SELECT agri.AGRI_DESC FROM `Agriculteurs` agri JOIN Batch_Infos batch WHERE batch.BARLEY_BATCH = '" + batchNumber + "' AND batch.FARMER_ID = agri.ID",
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

module.exports = Farmer