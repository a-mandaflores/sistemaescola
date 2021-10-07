const express = require('express')
const connection = require('./database/ConnectionDB')

const Router = require('./router')


const app = express()

connection
    .authenticate()
    .then(()=>{
        console.log('Conectado ao db')
    }).catch((error) =>{
        console.log(error)
    })

app.use(express.json());
app.use('/', Router)


app.get('/', (req, res) => {
    res.send('Estamos acessando a rota home')
})

app.listen(9000, console.log('Sistema rodando na porta 8000'))

