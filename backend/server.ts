//Backend server for Thrift Happens online shop
//Import
import express, { type Express } from "express";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";
import clothesItem from "./models/clothesItem";

//Constants Variable
const server: Express = express();
const port: Number = 3000;
const { MONGO_URI } = process.env;

//Middleware
server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(cors());

//Connect to DB and start the server

if(!MONGO_URI){
    throw new Error("Mongo URI is not found in .env file");
}
mongoose.connect(MONGO_URI).then(() =>
  server.listen(port, () => {
    console.log(`Connected to DB\nServer is listening on port $(port)`);
  }),
);
