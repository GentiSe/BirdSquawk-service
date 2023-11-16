import express from 'express';
import mongoose from 'mongoose'
import { router } from './routes/routes';

const app = express();
app.use(express.json());
app.use(router);

const Startup = async () => {
    try {
        await mongoose.connect('mongodb://peep-mongo-service:27017/peep')
        console.log("connected to PEEP mongoDB")
    } catch (error) {
        console.log(error)
    }

app.listen(5100, ()=> {
    console.log("PeepsService service listening on port 5100")
})
};

Startup();