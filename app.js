const express = require('express')

const app = express()

app.use(express.json())   //middleware

const logar = (req, res, next) => {
  console.log(req.body)
  console.log('Date: ' + Date.now())
  next()
}

app.use(logar)

app.get('/', (req, res) => {
  res.send('<h1>Lista de tarefas</h1>')
})

app.get('/json', (req, res) => {
  console.log(req.body);
  res.json({title: 'Tarefa X', done: true})
})

app.listen(3000, () => {
  console.log('Servidor iniciado!');
})