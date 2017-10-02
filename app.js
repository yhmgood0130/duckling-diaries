const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.PORT || 4000;
const babies = require ('./routes/babies');

const app = express();

mongoose.connect('mongodb://localhost/duckling');

var db = mongoose.connection;

db.open('open', () => {
  console.log("Connected to MongoDB");
})

db.on('error', (err) => {
  console.log(err);
})

app.use(cors());

app.use(function(req, res, next) {
    if (req.headers.origin) {
        res.header('Access-Control-Allow-Origin', '*')
        res.header('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type,Authorization')
        res.header('Access-Control-Allow-Methods', 'GET,PUT,PATCH,POST,DELETE')
        if (req.method === 'OPTIONS') return res.send(200)
    }
    next()
})


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

// app.get('/', ( (req,res) => {
//   res.send("Welcome to the Duckling's World..");
// }))

app.use('/api/babies',babies)

app.listen(4000);
