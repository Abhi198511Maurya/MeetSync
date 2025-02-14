import express from 'express';
import { createServer } from 'node:http';
import { Server } from 'socket.io';
import mongoose from 'mongoose';
import cors from 'cors';
import userRoutes from "./routes/users.routes.js";
import { connectToSocket } from './controllers/socketManager.js';


const app = express();
const server = createServer(app);
const io = connectToSocket(server);

app.set("port", (process.env.PORT || 8080));
app.use(cors());
app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ limit: "40kb", extended: true }));

app.use("/api/v1/users", userRoutes);

app.get("/", (req, res) => {
    return res.json({ "hello": "world" });
})

const start = async () => {
    app.set("mongo_user")
    const connectionDB = await mongoose.connect("mongodb+srv://abhimaurya198511:Abhi1234@cluster0.ohyfc.mongodb.net/MeetSync?retryWrites=true&w=majority&appName=Cluster0");

    console.log(`Mongo connected DB host ${connectionDB.connection.host}`);

    server.listen(app.get("port"), () => {
        console.log("listening at port no. 8080");
    })
}
start();