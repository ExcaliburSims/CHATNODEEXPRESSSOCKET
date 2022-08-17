const socket = io();

let send = () => {
	const text = document.getElementById('message').value;
	console.log(text);
	socket.emit('chat message', text)
}

//socket.on('chat message', receive);
socket.on('chat', message => {
  console.log('From server: ', message)
})

const chatWindow = document.querySelector('.messages-content')

const receive = message => {
  const div = document.createElement('div')
  div.classList.add('render-message')
  div.innerText = message
  chatWindow.appendChild(div)
}

socket.on('chat', message => {
  // make sure to modify this
  receive(message)
})