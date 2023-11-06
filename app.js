const express = require('express');
const app = express();
const port = 3500;
const fruitsRouter = require('./routes/fruits.js');
const connect = require('./schemas/index.js');
connect()

app.use(express.json());

app.get('/',(req,res)=> res.send("기본화면입니다."));

app.use('/api',[fruitsRouter]);

app.listen(port, () => {
    console.log(port, '포트로 서버가 열렸어요!');
  });