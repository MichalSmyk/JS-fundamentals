const express = require('express');
const app = express();
const port = 3000;
let counter = 0;

app.get('/', (req, res) => {
  res.send('Hello, you!')
});

app.post('/counter', (req, res) => {
    counter++;
    res.send({'count': counter});
});

app.get('/counter', (req, res) => {
    res.send({'count': counter});;
});

app.delete('/counter', (req, res) => {
    res.send({'counter': counter = 0});
});

console.log(`Server listening on localhost:${port}`);
app.listen(port);