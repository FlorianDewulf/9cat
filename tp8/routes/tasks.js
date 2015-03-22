

exports.findAll = function(req, res) {
	res.send(req.app.locals.db);
};

exports.save = function(req, res) {
	// console.log(req.body.id);
	// console.log(req.body.task);

	var tmp = {id : req.body.id, task : req.body.task };
	req.app.locals.db.push(tmp);
	res.send(tmp);
	//res.send({id:req.params.id, name: "HURRDURR", description: "description"});
};

exports.update = function(req, res) {
	//res.send({id:req.params.id, name: "HURRDURR", description: "description"});
};

exports.destroy = function(req, res) {
	//res.send({id:req.params.id, name: "HURRDURR", description: "description"});
};
