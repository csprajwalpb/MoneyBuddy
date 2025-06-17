import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { initDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimitter.js";
import transactionsRoute from "./Routes/transactionsRoute.js"

dotenv.config();

const app = express()
app.use(cors());

//middleware
app.use(rateLimiter);
app.use(express.json());

const PORT = process.env.PORT

app.use("/api/transactions", transactionsRoute);

initDB().then(()=>{
    app.listen(PORT, ()=>{
    console.log("Server is live on PORT :",PORT);
});
})