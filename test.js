var dgram = require('dgram');
var message = new Buffer("SimpleStatsDTestFromNode:1|c");
var client = dgram.createSocket("udp4");
client.send(message, 0, message.length, 8125, "127.0.0.1", function(err, bytes) {
  client.close();
});
