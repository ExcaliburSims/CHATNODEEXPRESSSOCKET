const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
//const port = 8080;

//middleware to read css, image and js page

app.use(express.static('Public'))
app.get('/message', (req, res) => {
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
/* opp.listen(port, () => {
  console.log(`le serveur tourne au port ${port}`)
}) 
io.on('connection', () => {
    console.log('a user connected');
});
*/
const server = http.listen(8080, () => {
    const {port} = server.address();
    console.log(`Listening on port ${port}`);
});