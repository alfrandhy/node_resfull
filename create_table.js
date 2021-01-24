var mysql = require('mysql');

var conn = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"restfull",
});

conn.connect(function(err){
    if (err) throw err;
    console.log('connected ... !');
    var sql = "CREATE TABLE products (name VARCHAR(255), price INT(50))";
    conn.query(sql, function(err,result){
        if(err) throw err;
        console.log("Table Created");
    });
});