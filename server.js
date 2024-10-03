// Cria servidor utilizando biblioteca Express
// Cors para permitir requisições

const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors({
    origin: 'http://localhost:4200'
}))
app.use(express.json())

// Conecta com Banco de Dados
// DB online via RailWay

const mysql = require('mysql2');

const con = mysql.createConnection('mysql://root:otJKDeDzWueXZjjjxsKNYaEcnyUCcFvE@junction.proxy.rlwy.net:58360/DBmain');

con.connect(function(err){
    if(err) throw err;
    console.log('Banco de Dados conectado!')
})

// Cria Server 
const http = require('http');

const server = http.createServer(app);

server.listen(8000, () => {
    console.log('Servidor Express Live!! http://localhost:8000/')
})

// Exportar conexões

module.exports = {
    app: server,
    con: con
};