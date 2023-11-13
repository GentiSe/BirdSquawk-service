import express, {Request, Response} from 'express';


const router = express.Router();

router.get('/api/birdsquawk/get', (req, res) => {
    console.log("It's working")
})

router.post('/api/birdsquawk/post',(req,res)=> {

})

export {router}