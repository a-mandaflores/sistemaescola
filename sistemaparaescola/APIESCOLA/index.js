const express = require('express')
const connection = require('./database/ConnectionDB')
const Alunos = require('./alunos/Alunos')

const app = express()

connection
    .authenticate()
    .then(()=>{
        console.log('Conectado ao db')
    }).catch((error) =>{
        console.log(error)
    })


app.get('/', (req, res) => {
    res.send('Estamos acessando a rota home')
})

app.listen(8000, console.log('Sistema rodando na porta 8000'))

