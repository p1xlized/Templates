const express = require("express");
const bodyParser = require("express").json;
const db = require('./db/db.js');
const path = require('path');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    try {
  
      db.from("test").select("*").then((rows) => {
        res.json(rows)
      })
    } catch (error) {
      console.log(error)
    }
  })
  
app.listen(port, () => {
    console.log(`Listening port on ${port}`)
  })