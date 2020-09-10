var mysql = require("mysql");

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "calendar",
    password: "AlscoF.C2011!"
});

module.exports.QueryDB = () => {
    return "Query from mysql.";
};

module.exports.Get5Dates = new Promise(function (resolve, reject) {
    con.connect(function (err) {
        if (err) reject(err);
        resolve();
    });
});

