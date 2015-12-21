var seneca = require("seneca")();

console.log("Starting seneca");
seneca.add("cmd:add", function(msg, respond){
	var sum = msg.left + msg.right;
	respond(null, {answer: sum});
});

seneca.listen();
console.log("started");