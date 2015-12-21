var seneca = require("seneca")();

seneca.add("cmd:add", function(msg, respond){
	var sum = msg.left + msg.right;
	respond(null, {answer: sum});
});

seneca.listen();