const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const path = require('path');
const port = 8080;

//app.use(express.static('./Views'))
//app.use(app.static(path.join(__dirname, '/Views')));
app.get('/message', (req, res) => {
	res.sendFile(path.join(__dirname + '/Views/index.html'))
})
io.on("connection", (socket) => {
	console.log('connected');
	socket.on('disconnected', () => {
		console.log('disconnected');
	})
	socket.on('chat message', (msg) => {
		console.log('message reçu' + msg);
	})
});

//SERVEUR
http.listen(port, () => {
  console.log(`le serveur tourne au port ${port}`)
})