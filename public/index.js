let socket = io();

socket.on('connect', () => {
  console.log('Connected To server')
})

// 브라우저에서 작동하는 socket
socket.on('disconnect', () => {
  console.log('Disconnected From server')
});

socket.on('space', (message) => {
  console.log(message);
})

socket.emit('changSuk', {
  from: 'Changsuk',
  message: `Hello, I'm Changsuk`
}, () => {
  console.log('server successfully received')
})


