import express from 'express';
import mongoose from 'mongoose'
import { router } from './routes/routes';

const app = express();
app.use(express.json());
app.use(router);

const Startup = async () => {
    try {
        await mongoose.connect('mongodb://query-mongo-service:27017/query')
        console.log("connected to QueryService mongoDB")
    } catch (error) {
        console.log(error)
    }

app.listen(5200, ()=> {
    console.log("Query service listening on port 5200")
})
};

Startup();