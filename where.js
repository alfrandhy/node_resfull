var mysql = require("mysql");

var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "restfull",
});

conn.connect(function(err){
    if(err) throw err;
    conn.query("SELECT * FROM products WHERE product_id='2' ",function(err, result){
        if(err) throw err;
        console.log(result);
    });
});