

var db = [];
exports.findAll = function(req, res) {
	console.log(db.length);
	res.send(db);
};

exports.save = function(req, res) {
	// console.log(req.body.id);
	// console.log(req.body.task);

	var tmp = {id : req.body.id, task : req.body.task };
	db.push(tmp);

	console.log(db.length);
	res.send(tmp);
	//res.send({id:req.params.id, name: "HURRDURR", description: "description"});
};

exports.update = function(req, res) {
	//res.send({id:req.params.id, name: "HURRDURR", description: "description"});
};

exports.destroy = function(req, res) {
	//res.send({id:req.params.id, name: "HURRDURR", description: "description"});
};
