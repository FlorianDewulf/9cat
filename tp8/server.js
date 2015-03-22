var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

var tasks = require('./routes/tasks');


var corsOptions = {
    origin: '*',
    methods: ['GET', 'PUT', 'POST', 'PATCH', 'DELETE', 'UPDATE'],
    credentials: true
};

app.use(cors(corsOptions));


app.get('/tasks', tasks.findAll);

app.post('/tasks/:id', tasks.save);

app.put('/tasks/:id', tasks.update);

app.delete('/tasks/:id', tasks.destroy);


app.listen(5000);
console.log('Listening on port 5000...');
