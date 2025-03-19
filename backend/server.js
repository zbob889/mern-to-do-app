require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const toDoRoutes = require('./routes/toDoRoutes');
const app = express();
const cors = require('cors');

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
});

app.use(cors({
  origin: '*'
}));

// test fix

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "mern-to-do-app-production.up.railway.app"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function(req, res, next) {
  // Handle the get for this route
});

app.post('/', function(req, res, next) {
 // Handle the post for this route
});

// routes
app.use('/api/toDos', toDoRoutes);

// connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('connected to database')
    // listen to port
    app.listen(process.env.PORT, () => {
      console.log('listening for requests on port', process.env.PORT)
    })
  })
  .catch((err) => {
    console.log(err)
  });

  // this is a test for git