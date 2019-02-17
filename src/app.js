'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

//Conecta ao banco
mongoose.connect('mongodb://agnis:agnis10@balta-shard-00-00-kwtej.azure.mongodb.net:27017,balta-shard-00-01-kwtej.azure.mongodb.net:27017,balta-shard-00-02-kwtej.azure.mongodb.net:27017/ndstr?ssl=true&replicaSet=Balta-shard-0&authSource=admin&retryWrites=true')

//Carrega os Models
const Product = require('./models/product');

//Carrega as Rotas
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRoute);
app.use('/products', productRoute);

module.exports = app;