var express = require('express');
var app = express(); // Plus besoin de se soucier
// de la couche HTTP… express() s’en occupe!

var tasks = [];

app.get('/tasks', function(req, res) {
	res.send("lol");
});

app.post('/tasks', function(req, res) {
	res.send("mdr");
});

app.put('/tasks/:id', function(req, res) {
	res.send("ptdr");
});

app.delete('/tasks/:id', function(req, res) {
	res.send("waffen SS");
});


app.listen(3000);
console.log('Listening on port 3000...');
