const express = require('express')
const bodyParser = require('body-parser')
const db = require('./db')
const app = express()
const port = 8080

//this is new \/
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Adres klienta
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Credentials', 'true'); // Włącz przekazywanie ciasteczek
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Obsługa preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).send();
  } else {
    next();
  }
});

//this is new \/
const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,   //access-control-allow-credentials:true
   optionSuccessStatus:200,
}
//this is new \/
app.use(cors(corsOptions)) // Use this after the variable declaration

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/register', (req, res) => {
    const topic = req.body.topic;
    return res.status(200).send({fail:topic});
})

app.get('/topics', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM topics');
        res.json(rows);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})