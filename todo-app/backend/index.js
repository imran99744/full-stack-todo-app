import express from "express";
import cors from "cors";
import Routes from "./routes/route.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
const app = express();

dotenv.config();


mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("Database Connected"))
.catch(() => console.log("Database Not Connected"));


app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to my Todo App");
});

app.use("/", Routes);

const PORT = 5000;

app.listen(PORT, () =>
  console.log(`Server is running successfully on PORT ${PORT}`)
);
