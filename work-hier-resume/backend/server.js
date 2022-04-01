
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const cors = require("cors");

const cookieParser = require('cookie-parser')
var corsOptions = {
  origin: 'http://localhost:3000',
  // origin: 'https://new-chat-app-udmy.herokuapp.com',
  credentials: true,
  optionsSuccessStatus: 200 // For legacy browser support
}

const authRoutes = require('./route/routes');
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use(authRoutes);


const http = require('http').createServer(app);
const socketio = require('socket.io')
const io = socketio(http);

const DATABASE="mongodb+srv://onkar:onkar@cluster0.qey1d.mongodb.net/Student-tutor-dash?retryWrites=true&w=majority"

mongoose.connect(DATABASE, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
}).then(res => { console.log('db cnnected') }).catch(err => { console.log(err) });

const { addUser, getUser, removeUser } = require('./helper');

app.get('/set-cookies', (req, res) => {
  res.cookie('username', 'Tony');
  res.cookie('isAuthenticated', true, { maxAge: 24 * 60 * 60 * 1000 });
  res.send('cookies are set');
})
app.get('/get-cookies', (req, res) => {
  const cookies = req.cookies;
  console.log(cookies);
  res.json(cookies);
})


// io.on('connection', (socket) => {
//   console.log(socket.id);

//   socket.on('join', ({ name, room_id, user_id }) => {
//     const { error, user } = addUser({
//       socket_id: socket.id,
//       name,
//       room_id,
//       user_id
//     })
//     socket.join(room_id);
//     if (error) {
//       console.log('join error', error)
//     } else {
//       console.log('join user', user)
//     }
//   })

//   socket.on('disconnect', () => {
//     const user = removeUser(socket.id);
//   })
// });

// mongoose.connection.once('open', () => {
//     console.log('Db connected')
// })

const port = process.env.PORT || 5000




// // Serve static assets (build folder) if in production
// if (process.env.NODE_ENV === 'production') {
//     // Set static folder
//     app.use(express.static('internship/build'));
//   // get anything, load index.html file
//     app.get('*', (req, res) => {
//       res.sendFile(path.resolve(__dirname, 'internship', 'build', 'index.html'));
//     });
//   }

app.listen(port, () => { console.log(` listining at ${port}`) })