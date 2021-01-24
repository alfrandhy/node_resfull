var mysql = require("mysql");

var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
});

conn.connect(function(err){
    if(err) throw err;
    console.log("Connected ... !");
    conn.query("CREATE DATABASE percobaan", function(err,result){
        if(err) throw err;
        console.log("Database Created");
    });
});