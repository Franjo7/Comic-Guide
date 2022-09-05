import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import productRouter from './routers/productRouter.js';
import userRouter from './routers/userRouter.js';
import orderRouter from './routers/orderRouter.js';


dotenv.config();


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



const url = `mongodb+srv://Franjo:ttQ6sxOupugxvh4d@cluster0.vgyawwz.mongodb.net/ComicGuide?retryWrites=true&w=majority`;

const connectionParams={
    useNewUrlParser: true,
    
    useUnifiedTopology: true 
}


mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to the database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. n${err}`);
    })







app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.use('/api/orders', orderRouter);



app.get('/', (req, res) => {
  res.send('Server is ready');
});




app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});




const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});