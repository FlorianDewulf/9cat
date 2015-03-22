var db = [];

exports.findAll = function(req, res) {
	res.send({tasks: db});
};

exports.save = function(req, res) {
	var tmp = {id : req.body.id, task : req.body.task };
	db.push(tmp);
	res.send(tmp);
};

exports.update = function(req, res) {
	db.forEach(function(task) {
    if (task.id == req.body.id){
    	task.id = req.body.id;
    	task.task = req.body.task;
    	res.send(task);
    	}
	});
};

exports.destroy = function(req, res) {
	db.forEach(function(elem, index) {
		if (elem.id == req.params.id) {
			db.splice(index, 1);
			return;
		}
	});
	res.send({tasks: db});
};
