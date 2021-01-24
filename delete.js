var mysql = require("mysql");

var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "restfull",
});

conn.connect(function(err){
    if(err) throw err;
    var sql = "DELETE FROM products WHERE product_id = '2'";
    conn.query(sql, function(err, result){
        if(err) throw err;
        console.log("Record Deleted: " + result.affectedRows);
    });
});