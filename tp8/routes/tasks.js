
var db = [];

exports.findAll = function(req, res) {
	res.send(db);
};

exports.save = function(req, res) {
	console.log(req.params);
	//res.send({id:req.params.id, name: "HURRDURR", description: "description"});
};

exports.update = function(req, res) {
	//res.send({id:req.params.id, name: "HURRDURR", description: "description"});
};

exports.destroy = function(req, res) {
	//res.send({id:req.params.id, name: "HURRDURR", description: "description"});
};
