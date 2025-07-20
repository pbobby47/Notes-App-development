import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import authRouter from "./Routes/auth.js";
import noteRouter from "./Routes/note.js";
import connectToMongoDB from "./mongo_connection/connection.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.use("/api/auth", authRouter);
app.use("/api/note", noteRouter);

app.get("/", (req, res) => {
  res.send("Ok");
});

app.listen(8000, () => {
  console.log("server has started...");
  connectToMongoDB();
});
