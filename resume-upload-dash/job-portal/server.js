const express = require("express");
const mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const cors = require("cors");

const cookieParser = require('cookie-parser')
var corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
  optionsSuccessStatus: 200 // For legacy browser support
}

const authRoutes = require('./route/user');
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use(authRoutes);




mongoose.connect(process.env.DATABASE, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify:true,
}).then(res => { console.log('db cnnected') }).catch(err => { console.log(err) })


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



// Serve static assets (build folder) if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('app/build'));
// get anything, load index.html file
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'app', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 5000

app.listen(port, () => { console.log(` listining at ${port}`) })

// onkar-auth-demo