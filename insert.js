var mysql = require('mysql');

var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "restfull",
});

conn.connect(function(err){
    if(err) throw err;
    console.log("Connected ... !");
    var sql = "INSERT INTO products (product_name, product_price) VALUES ('Barang 1','1500000')";
    conn.query(sql, function(err,result){
        if(err) throw err;
        console.log("Record Added");
    });
});