const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');

// parse application/json
app.use(bodyParser.json());

// database connection
const conn = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'restfull',
});

// connect database
conn.connect((err) =>{
    if(err) throw err;
    console.log('Mysql connected ...');
});

// menampilkan data
app.get('/api/products', (req, res) =>{
    let sql = "SELECT * FROM products";
    let query = conn.query(sql, (err, results) =>{
        if(err) throw err;
        res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });
});

// menampilkan data with id
app.get('/api/products/:id', (req, res) =>{
    let sql = "SELECT * FROM products WHERE product_id="+req.params.id;
    let query = conn.query(sql, (err, results) =>{
        if(err) throw err;
        res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });
});

// menambahkan data
app.post('/api/products', (req, res) =>{
    let data = {
        product_name: req.body.product_name,
        product_price: req.body.product_price,
    };
    let sql = "INSERT INTO products SET ?";
    let query = conn.query(sql, data, (err, results) =>{
        if(err) throw err;
        res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });
});

// edit data 
app.put('/api/products/:id', (req, res) =>{
    let sql = "UPDATE products SET product_name="+req.body.product_name+",product_price="+req.body.product_price+" WHERE product_id="+req.params.id;
    let query = conn.query(sql, (err, results) =>{
        if(err) throw err;
        res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });
});

// menghapus data
app.delete('/api/products/:id', (req, res) =>{
    let sql = "DELETE FROM products WHERE product_id="+req.params.id;
    let query = conn.query(sql, (err, results) =>{
        if(err) throw err;
        res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });
});

// server listening 
app.listen(3000,() =>{
    console.log('Server Started on PORT 3000 ...');
});