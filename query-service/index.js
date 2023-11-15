const express = require('express');
const cors = require('cors')
const {randomBytes} = require('crypto')
const app = express();

app.use(express.json());
app.use(cors());

const squawkData = {};

app.post('/birdsquawk', (req,res) => {
console.log('hitted endpoints')
const id = randomBytes(8).toString('hex');
const {title} = req.body;

squawkData[id] = {id,title};

 res.status(201).send(squawkData[id])

});

app.listen(5200, ()=> {
    console.log("QueryService is listening on port 5200")
})