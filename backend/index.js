
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'
import AuthRouter from './Routes/authRoutes/auth.js';
import ProductRouter from './Routes/productRoutes/product.js';
const app = express();
const Port = 8080;

app.use(cors());
app.use(express.json());
app.use(AuthRouter);
app.use(ProductRouter);




app.listen(Port,()=>{
    console.log(`http://localhost:${Port}`);
    mongoose.connect('mongodb://127.0.0.1:27017/StockSense')
  .then(() => console.log('Connected!'));
    
})