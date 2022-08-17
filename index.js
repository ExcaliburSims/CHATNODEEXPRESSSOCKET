const express = require('express');
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)
const path = require('path')

// just to test the server

//middleware to read css, image and js page
app.use(express.static('Public'))

app.get('/message', (req, res) => {
	res.status(200).sendFile('Views/index.html', {root: __dirname})
})
io.on('connection', socket => {
	console.log('CONNECTED')
	socket.on('chat message', (msg) => {
		console.log('message reçu : ' + msg);
		io.emit('chat', msg)
	})
})

//SERVEUR
server.listen(8080, () => {
	const {port} = server.address();
  console.log(`Server running on port: ${port}`)
})