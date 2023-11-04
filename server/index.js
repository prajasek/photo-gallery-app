import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

app.use(bodyParser.json({limit: "30mb"}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

mongoose.connect("mongodb://localhost:27017/school").then(() => {
    let x = mongoose.model('student', new mongoose.Schema({}));
    console.log(x);

    let y;
    let m = x.find().then(x=> console.log(x));

})