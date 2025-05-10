import express from 'express';
import {createServer} from 'http';


import {Server} from 'socket.io';

import mongoose from "mongoose";
import {connectToServer}from "./controllers/socketManger.js";
import cors from 'cors';

const app = express();



const server = createServer(app);
const io = new Server(server)



app.set("port",(process.env.PORT || 8000));
app.use(cors());
app.use(express.json({limit:"40kb"}))
app.use(express.urlencoded({limit:"40kb",extends:true}));




app.get('/home', (req, res) => {
    return res.json('Hello World!');
}
);
const start = async () => {
    app.set("mongo_user")
    const connectionDb = await mongoose.connect("mongodb+srv://rahul90602092:GV9piVRIeVTDzeYV@cluster0.4qtzmit.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    console.log(`Mongo Connected DB Host:${connectionDb.connection.host}`)
    server.listen(app.get("port"),()=>{
            console.log("Listening on PORT 8000")
        });
    };
    
    start();