import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";

//components
import Connection from "./connection/db.js";
import Route from "./routes/Route.js";
import DefaultData from "./default.js";

const app = express();
dotenv.config();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));
app.use("/", Route);

const PORT = 8000;

Connection();

app.listen(PORT, () =>
  console.log(`Server is running successfully on PORT ${PORT}`)
);

DefaultData();
