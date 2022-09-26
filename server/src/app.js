const express = require('express');
const app = express();
require('dotenv')
const router = express.Router();

const path = require('path')
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const morgan = require('morgan');

const authRouter = require('./routes/authRoute')
const messengerRoute = require('./routes/messengerRoute');

app.use(bodyParser.json());
app.use(cookieParser());

app.use('/api/messenger',authRouter);
app.use('/api/messenger',messengerRoute);

app.use(cors({
    origin: 'http://localhost:3000',
  }));
  app.use(morgan('combined'));
  
  app.use(express.json());
  app.use(express.static(path.join(__dirname, '..', 'public')));
  
  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
  });


module.exports = app;