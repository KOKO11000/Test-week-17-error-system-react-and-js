import express from "express";
import cors from "cors";
import { config } from "dotenv";
import router from "./routes/routes.js";

config()
const app = express()
const port = process.env.PORT
app.use(express.json())
app.use(cors())

app.use("/",router)

app.listen(port,(()=>{
    console.log(`server run on http://localhost:${port}`);
    
}))