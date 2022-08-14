const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const path = require('path');
const port = 8080;

app.use(express.static('Public'))
//app.use(app.static(path.join(__dirname, '/Views')));
app.get('/message', (req, res) => {
	//console.log(res.setHeader('content-type', 'text/plain'));
	//res.setHeader('content-type', 'text/css')
	res.status(200).sendFile('Views/index.html', {root: __dirname})
})
io.on("connection", (socket) => {
	console.log('connected');
	socket.on('disconnected', () => {
		console.log('disconnected');
	})
	socket.on('chat message', (msg) => {
		console.log('message reçu : ' + msg);
	})
});

//SERVEUR
http.listen(port, () => {
  console.log(`le serveur tourne au port ${port}`)
})