const express = require('express');
const server = require('express-server');
const bodyParser = require('body-parser')
const port = 3000;

const app = express()
app.use(express.static(__dirname + './../public'))










app.listen(port, () => {
    console.log('listening on 3000')
})