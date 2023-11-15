import express from 'express';
import mongoose from 'mongoose'
import { router } from './routes/routes';

const app = express();
app.use(express.json());
app.use(router);

const Startup = async () => {
    try {
        await mongoose.connect('mongodb://birdsquawk-mongo-service:27017/birdsquawk')
        console.log("connected to mongoDB")
    } catch (error) {
        console.log(error)
    }

app.listen(5000, ()=> {
    console.log("Birdsquawk service listening on port 5000")
})
};

Startup();