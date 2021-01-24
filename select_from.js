var mysql = require('mysql');

var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "restfull",
});

conn.connect(function(err){
    if(err) throw err;
    conn.query("SELECT * FROM products", function(err, result, fields){
        if(err) throw err;
        console.log(result);
    });
});