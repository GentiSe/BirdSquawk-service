import express, {Request, Response} from 'express';


const router = express.Router();

router.get('/api/birdsquawk/get', (req, res) => {
    console.log("It's working")
    console.log("It's working 1")
    console.log("It's working 2")


    res.send({greetings:'ITS WORKINGGG'})

})

router.post('/api/birdsquawk/post',(req,res)=> {

})

export {router}