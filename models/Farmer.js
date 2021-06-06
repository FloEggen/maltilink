
var mysql = require('mysql')

// Constructor of the User object
let Farmer = function () {
}

Farmer.findInfos = function (batchNumber) {
    return new Promise(async (resolve, reject) => {

        var con = mysql.createConnection({
            host: "sql4.freemysqlhosting.net",
            port: "3306",
            user: "sql4402888",
            password: "zgMDF8as5F",
            database: "sql4402888"
        });

        con.query(
            "SELECT agri.DESCRIPTION FROM `Agriculteurs` agri JOIN Batch_Infos batch WHERE batch.BARLEY_BATCH = '" + batchNumber + "' AND batch.FARMER_ID = agri.ID",
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