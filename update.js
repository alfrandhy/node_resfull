var mysql = require("mysql");

var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "restfull",
});

conn.connect(function(err){
    if(err) throw err;
    var sql = "UPDATE products SET product_name = 'Laptop Seken' WHERE product_id = '4'";
    conn.query(sql, function(err, result){
        if(err) throw err;
        console.log(result.affectedRows + " record(s) updated");
    });
});