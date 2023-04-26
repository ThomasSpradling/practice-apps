require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require('cors');
const morgan = require('morgan');
const db = require('./db');

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('tiny'));

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));

app.get('/words', (req, res) => {
  db.getAll()
    .then(words => {
      res.send(words);
    })
    .catch(err => console.error(err.stack));
});

app.post('/words', (req, res) => {
  db.save(req.body)
    .then(() => {
      console.log('Successfully posted to words!');
      res.send();
    })
    .catch(err => console.error(err.stack));
});


app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
