import express, {Request, Response} from 'express';
import amqp  = require('amqplib');
import birdSquawkModel from '../models/birdsquawk';

const randomBytes = require('crypto');
 
const router = express.Router();

router.get('/api/birdsquawk', (req, res) => {

    birdSquawkModel.find({}, (err: any, birdsquawk: any)=>{
        if(err){
            res.send(err);
        }
        res.status(200).json(birdsquawk);
    })
    res.send({greetings:'ITS WORKINGGG'})

})

router.post('/api/birdsquawk',async (req,res)=> {
    const {squawk} = req.body;
    const squawkId = randomBytes(4).toString('hex');

    const squawkData = {squawk, squawkId};

    try {
         
        const birdModel = new birdSquawkModel(squawkData);
        await birdModel.save();
        console.log("BirdSquawk saved Success");

        const connection = await amqp.connect('amqp://rabbitmq-service:5672');
        console.log('Connectted to rabbit mq');
        const channel = await connection.createChannel();
        await channel.assertExchange("birdsquawk", "topic", {durable:false});
        await channel.publish("birdsquawk", "squawk", Buffer.from(JSON.stringify(squawkData)));
        console.log("Published to rabbitMQ");

        res.status(201).send(squawkData);


    } catch (error) {
        res.status(500).send(error);
    }


})

export {router}