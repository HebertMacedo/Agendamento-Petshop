const mysql = require('mysql2')

const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3307,
    user: 'root',
    password: '',
    database: 'petshop'
})

module.exports = conexao