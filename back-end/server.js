const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const path = require("path");
const { getHeapCodeStatistics } = require("v8");
const router = require('./router/router');
const app = express();
const PORT = 3001;
var cors = require('cors');
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));
app.use('/upload', express.static('upload'));  
app.use(cookieParser());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  if (req.method === 'OPTIONS') {
      res.header("Access-Control-Allow-Methods", "PUT, POST, DELETE, GET");
      return res.status(200).json({});
  }
  next();
});
app.use(router);

//setup server
const server = app.listen(PORT, function() {
  console.log("server running: "+PORT);
});

const io = require("socket.io")(server, {
  cors: {
    origin: '*',
  }
}); // socket setup

const {
  connectRoom,
  getDataFromSocket,
  getUserStatus,
  newMessage
} = require("./socket/socket");

io.on("connection", function(socket) {
  socket.on('connectRoom', (data)=>{
    var users = connectRoom(data, socket);
    socket.broadcast.emit("newUser", data);
  })

  socket.on('getUserStatus', (users)=>{
    var statusResult = getUserStatus(users);
    socket.emit("updateUsersStatus", statusResult);
  })

  socket.on('sendMessage',async (msg) => {
    console.log(msg);
    newMessage(msg, socket);
  })

  socket.on('disconnect', ()=>{
    var user = getDataFromSocket(socket);
    socket.broadcast.emit("outUser", user);
  })

  
});
