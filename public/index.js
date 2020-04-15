let socket = io();

// 브라우저에서 작동하는 socket
socket.on('disconnect', () => {
  console.log('Disconnected From server')

  // 클라이언트가 서버에게 이벤트를 보내고 싶을 때
  socket.emit('changSukEmail', {
    to: 'Changsuk@naver.com',
    content: `Hello I'm Changsuk`
  });
  
  socket.on('toChangsukEmail', (email) => {
    console.log(email)
  })
})

socket.on('connect', () => {
  console.log('Connected To server')
})

