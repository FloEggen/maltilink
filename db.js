var mysql = require('mysql')

var dbConnect = mysql.createConnection({
    host: "sql4.freemysqlhosting.net",
    port: "3306",
    user: "sql4402888",
    password: "zgMDF8as5F",
    database: "sql4402888"
});

dbConnect.connect(function (err, client) {
    if (err) throw err;
});

module.exports = dbConnect;

