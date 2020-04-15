const path = require('path');
const express = require('express');
const socketIO = require('socket.io');
const http = require('http');

const publicPath = path.join(__dirname, '../public')

let app = express();

app.use(express.static(publicPath));

let server = http.createServer(app);

let io = socketIO(server); //io는 브라우저가 전달하는 모든 이벤트를 서버쪽에서 처리

io.on('connection', (socket) => {
  console.log('A new browser has connected to this server.');
  
  socket.on('changSukEmail', (message) => {
    console.log(message);
    socket.broadcast.emit('space', {
      content: 'Received Changsuk Event'
    })
  })

})

server.listen(3000, () => {
  console.log('Server is running...')
})