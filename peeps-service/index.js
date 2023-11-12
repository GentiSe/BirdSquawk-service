const express = require('express')
const {randomBytes} = require('crypto');

const app = express();
app.use(express.json());

const peepsBySquawkId = {};


app.post('/birdsquawk/:id/peeps', (req,res) => {
const peepsId = randomBytes(8).toString('hex');
const {peep}  = req.body;
console.log(req.body)

const peeps = peepsBySquawkId[req.params.id] || [];
peeps.push({id:peepsId, test:peep});
peepsBySquawkId[req.params.id] = peeps;
res.status(201).send(peeps);
});

app.get('/birdsquawk/:id/peeps',(req,res) => {
    res.send(peepsBySquawkId[req.params.id] || []) 
});

app.listen(5100, () => {
    console.log("Peeps service listening on port 5100")
})