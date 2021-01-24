var mysql = require('mysql');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', function(req, res){
    return res.send({error:true, message:'Hello'})
});
app.listen(3000, function(){
    console.log('Node App is Running on Port 3000');
});
module.exports = app;

var conn = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'restfull',
});

conn.connect();

app.get('/products', function(req, res){
    conn.query("SELECT * FROM products",function(err,results,fields){
        if(err) throw err;
        return res.send({error: false, data: results, message: 'Product List.'});
    });
});

app.get('/products/:id',function(req, res){
    let product_id = req.params.id;
    if(!product_id){
        return res.status(400).send({error: true, message:'Please Provide product_id'});
    }
    conn.query("SELECT * FROM products WHERE product_id=?", product_id, function(err, result, fields){
        if(err) throw err;
        return res.send({error:false, data: result[0], message: 'Product'});
    });
});

app.post('/products',function(req,res){
    let product_name = req.body.product_name;
    let product_price = req.body.product_price;
    if(!product_name||!product_price){
        return res.status(400).send({error:true, message:'Please Provide Product'});
    }
    conn.query("INSERT INTO products SET ?", {product_name: product_name, product_price: product_price} , function(err, result, fields){
        if(err) throw err;
        return res.send({error:false, data:result, message:'New Product Added'});
    });
});

app.put('/products/', function(req, res){
    let product_id = req.body.product_id;
    let product_name = req.body.product_name;
    let product_price = req.body.product_price;
    if(!product_id || !product_name || !product_price){
        return res.status(400).send({error: products, message: 'Please Provide Product'});
    }
    conn.query("UPDATE products SET product_name = ? ,product_price = ? WHERE product_id = ?", [product_name, product_price, product_id], function(err, result, fields){
        if(err) throw err;
        return res.send({error: false, data: result, message: 'Product Updated'});
    });
});

app.delete('/products/', function(req,res){
    let product_id = req.body.product_id;
    if(!product_id){
        return res.status(400).send({error: true, message: 'Please Provide Product'});
    }
    conn.query("DELETE FROM products WHERE product_id = ?", [product_id], function(err, result, fields){
        if(err) throw err;
        return res.send({error: false, data: result, message: 'Product Deleted'});
    });
});
