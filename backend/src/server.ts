import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/", (req, res) => {
  res.send("E-commerce backend is running");
});

export default app;
