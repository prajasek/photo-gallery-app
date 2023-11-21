import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import 'dotenv/config';

console.log(process.env.x)
const app = express();

app.use(bodyParser.json({limit: "30mb"}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

mongoose.connect("mongodb+srv://prasanthdps:@picturebook.ca6dws8.mongodb.net/").then(() => {
  
    console.log()
})