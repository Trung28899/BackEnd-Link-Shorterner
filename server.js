import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import linkRoutes from "./routes/linkRoutes.js";
import mongoose from "mongoose";

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());

app.use(bodyParser.json());

app.use("/auth", authRoutes);
app.use("/link", linkRoutes);

const CONNECTION_URL =
  "mongodb+srv://trung:trungtrinh38@commerceshopcluster.eskab.mongodb.net/linkshort";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => console.log(err.message));
