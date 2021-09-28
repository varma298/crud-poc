import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';

import Routes from './server/route.js';

const app = express(); 
app.use(bodyParser.json({extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/users', Routes);


const URL = 'mongodb+srv://user123:user123@cluster0.bcdbu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const PORT = process.env.PORT || '8081'; //2 - get the port from env file, if not available pick 8080


mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
.then(() => console.log("db connected"))
    
    
app.listen(PORT, () => {
    console.log(`server is running on ${PORT} `);
  });

