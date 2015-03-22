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
	//res.send({id:req.params.id, name: "HURRDURR", description: "description"});
};

exports.destroy = function(req, res) {
	//res.send({id:req.params.id, name: "HURRDURR", description: "description"});
};
