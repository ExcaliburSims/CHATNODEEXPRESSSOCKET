const socket = io();

let send = () => {
	const text = document.getElementById('message').value;
	console.log(text);
	socket.emit('chat message', text)
}

let receive = (msg) => {
	let li = document.createElement('li');
	li.innerText = msg;
	document.getElementById('messages-content').appendChild(li);
}
socket.on('chat message', receive);