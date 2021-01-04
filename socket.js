const SocketIO = require('socket.io');

module.exports = (server) => {
  const io = SocketIO(server, { path: '/socket.io' });

  const room = io.of('/room');

  io.on('connection', (socket) => {
    console.log('소켓 접속');
    console.log(socket.id);
    console.log(socket.handshake.address);
    console.log(socket.request)

    socket.emit('msg', '너는 소켓에 접속되어있다');
    
    socket.on('disconnect', () => {
      console.log('소켓 접속 해제');
    });
  });

  room.on('connection', (socket) => {
    console.log('room 네임스페이스에 접속');

    socket.emit('msg', '너는 네임스페이스에 접속되어있다');

    socket.on('disconnect', () => {
      console.log('room 네임스페이스 접속 해제');
    });
  });
};
