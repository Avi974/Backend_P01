import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app= express();

app.use(cors({
  origin:process.env.CORS_ORIGIN || 'http://localhost:3000', 
  credentials: true,
 
}));

app.use(express.json({limit:"18kb"}));
app.use(express.urlencoded({extended:true, limit:"18kb"}));
app.use(express.static('public'));

app.use(cookieParser());


export {app};