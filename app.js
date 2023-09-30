const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Use o body-parser para processar dados JSON nas solicitações POST e PUT
app.use(bodyParser.json());

// Dados de exemplo (substitua isso por um banco de dados real)
const todos = [
  { id: 1, task: 'Fazer compras' },
  { id: 2, task: 'Estudar Node.js' },
];

// Rota GET para obter todas as tarefas
app.get('/todos', (req, res) => {
  res.json(todos);
});

// Rota POST para adicionar uma nova tarefa
app.post('/todos', (req, res) => {
  const newTodo = req.body;
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// Rota DELETE para excluir uma tarefa pelo ID
app.delete('/todos/:id', (req, res) => {
  const idToDelete = parseInt(req.params.id);
  const index = todos.findIndex(todo => todo.id === idToDelete);

  if (index !== -1) {
    todos.splice(index, 1);
    res.sendStatus(204);
  } else {
    res.status(404).json({ error: 'Tarefa não encontrada' });
  }
});

// Rota PUT para atualizar uma tarefa pelo ID
app.put('/todos/:id', (req, res) => {
  const idToUpdate = parseInt(req.params.id);
  const updatedTask = req.body;

  const index = todos.findIndex(todo => todo.id === idToUpdate);

  if (index !== -1) {
    todos[index] = updatedTask;
    res.json(updatedTask);
  } else {
    res.status(404).json({ error: 'Tarefa não encontrada' });
  }
});

app.listen(port, () => {
  console.log(`O servidor está rodando em http://localhost:${port}`);
});


// const express = require('express');
// const app = express();
// const port = 3000;

// app.get('/', (req, res) => {
//   res.send('Olá, mundo!');
// });

// app.listen(port, () => {
//   console.log(`O servidor está rodando em http://localhost:${port}`);
// });
