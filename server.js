var express = require('express');
var app = express();
var compression = require('compression');

app.use(compression());
app.use('/static', express.static(__dirname + '/static'));

app.get('*', function(req, res) {
	res.sendFile(__dirname + '/index.html');
})

app.listen(process.env.PORT || 7000, function() {
	console.log(`Listening on Port: ${process.env.PORT || 7000}`);
});
