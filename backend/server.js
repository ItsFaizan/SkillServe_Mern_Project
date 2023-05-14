import express from 'express';
import backendRouter from './routes/backendRouter.js';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import { config } from 'dotenv';
config();


const app = express();
app.use(express.json())
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect(process.env.ALTAS_URL).then(()=>{
    console.log("DB Connected !!!");
}).catch(err=>{
    console.log(err);
})

app.listen(process.env.PORT || 3001, ()=>{
    console.log(`App Listening on port ${process.env.PORT}`)
})

app.use("/service",backendRouter);