const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('Estamos acessando a rota home')
})

app.listen(8000, console.log('Sistema rodando na porta 8000'))

