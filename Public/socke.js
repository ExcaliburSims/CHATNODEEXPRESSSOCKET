const socket = io();
    $(() => {
        getMessages();
        $("#send").click(() => {
            const message = {
                name: $("#name").val(),
                message: $("#message").val()
            };
            postMessage(message);
        });
    });

    socket.on('message', addMessage);

    function addMessage({ name, message }) {
        $("#messages").append(`<h4>${name}</h4><p>${message}</p>`);
    }

    function getMessages() {
        $.get('http://localhost:8080/messages', messages => {
            messages.forEach(addMessage);
        });
    }

    function postMessage(message) {
        $.post('http://localhost:8080/message', message);
    }