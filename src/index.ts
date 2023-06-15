import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

// import routers
import { router as productRouter } from "./routes/product-route";

// set up
const app = express();
const PORT = process.env.PORT || 8080;
app.use(bodyParser.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(cors());

// connect to database
const MONGO_URL: any = process.env.MONGO_DB_URL;
mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);

mongoose.connection.on("error", (err: any) => {
  console.log(`MongoDB connection error: ${err}`);
});
mongoose.connection.once("connected", () => {
  console.log("MongoDB connected");
});

// routes
app.use("/products", productRouter);

// help
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
