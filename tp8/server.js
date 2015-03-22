var express = require('express');
var app = express(); // Plus besoin de se soucier
// de la couche HTTP… express() s’en occupe!

var tasks = require('./routes/tasks');

app.get('/tasks', tasks.findAll);

app.post('/tasks', tasks.save);

app.put('/tasks/:id', tasks.update);

app.delete('/tasks/:id', tasks.destroy);


app.listen(3000);
console.log('Listening on port 3000...');
