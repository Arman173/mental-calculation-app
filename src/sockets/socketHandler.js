const { Socket } = require("socket.io");

const socketHandler = async( socket = new Socket(), io ) => {
  socket.on('mensaje', (data) => {
    console.log('Mensaje recibido:', data);
    // reenviar el mensaje a todos los clientes
    io.emit('mensaje', data);
  });

  socket.on('disconnect', () => {
    console.log('Cliente desconectado:', socket.id);
  });
};

module.exports = {
  socketHandler
}