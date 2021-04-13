import io from 'socket.io-client';
let socket = null;

export const setSocket = () => {
  socket = io("http://3.232.115.192:8081");
}

// export const socketClient = io("http://127.0.0.1:4001");

export const onWelcome = (callback) => {
  socket.on('welcome', (data) => callback(data));
}

export const offEvent= (socketListenId) => {
  socket.off(socketListenId);
}

export const onMessageReceived = (socketListenId, callback) => {
  socket.on(socketListenId, (data) => callback(data));
}

export const emitEvent = (event, data) => {
    socket.emit(event, data);
}

export const disconnect = () => {
    socket.disconnect()
}
