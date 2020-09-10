var express = require("express");
var app = express();
var db = require("./mysql");
var cors = require('cors')
var bodyParser = require('body-parser')

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded



app.use(cors()) // Use this after the variable declaration
/*
var mysql = require("mysql");
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "calendar",
    password: "AlscoF.C2011!"
});
*/
var mysql = require("mysql");
var pool = mysql.createPool({
    connectionLimit: 10, // default = 10
    host: 'localhost',
    user: 'root',
    password: 'AlscoF.C2011!',
    database: 'calendar'
});



app.get("/", function (req, res) {
    res.send("Hello world of node.js");;

});

app.get("/query.json", function (req, res) {
    pool.getConnection(function (err, connection) {

        console.log("Connected!");

        connection.query(" SELECT NOW();", function (err, result) {
            connection.release();
            if (err) throw err;
            console.log("Result: " + result);
            res.send(result);
        });
    });
});



// list of today's meetings


app.get("/today.json", function (req, res) {
    pool.getConnection(function (err, connection) {

        console.log("Connected!");


        connection.query("SELECT * FROM calendar.today where date = CURDATE()", function (err, result) {
            connection.release();
            if (err) throw err;
            console.log("Result: " + result);
            res.send(result);
        });
    });
});



// insert to DB

app.post('/meetings', function (req, res, next) {

    pool.getConnection(function (err, connection) {
        var date = req.body.date;
        var meeting = req.body.meetingName;

        var insertSQL = "INSERT INTO today(date, meeting) VALUES(?, ?);"
        connection.query(insertSQL, [date, meeting], function (err, result) {
            if (err) {
                console.log(err)
            }
            console.log(date)
            console.log(meeting)
            res.json(req.body)
            //  })
        })
    })
})



app.listen(3001);