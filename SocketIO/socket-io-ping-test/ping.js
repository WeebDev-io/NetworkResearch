const ping = require("net-ping");

var session = ping.createSession();

const target = "157.230.6.40:3000/ping";

session.pingHost(target, function (error, target) {
  if (error) console.log(target + ": " + error.toString());
  else console.log(target + ": Alive");
});
