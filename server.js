import express from "express";
import bodyParser from "body-parser";
import path from "path";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";

const app = express();
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());

app.use(bodyParser.json());

app.use("/auth", authRoutes);

app.listen(5000);
