// this is ther clint side
const socket =io('http://localhost:8000');

const form = document.getElementById('send-container');
const messageInput = document.getElementById('messageInp');
const messageContainer = document.querySelector(".container")

// during run this code in localhost prompt is not running
const name = prompt("Enter your name to join");
socket.emit('new-user-joined', name)
