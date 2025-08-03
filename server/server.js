import express from 'express';
import mongoose from "mongoose";
import cors from 'cors';
import dotenv from 'dotenv'

import JobRoutes from "./routes/jobRoutes.js";

dotenv.config(); // this will load variables from .env

const app = express()
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/api/jobs', JobRoutes)

app.get('/',(req, res) => {
    res.send('Job Tracker API is running');
});

mongoose.connect(process.env.MONGO_URI || '', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log("Connected to MongoDB");

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    })
})
.catch((err) => {
    console.error("MongoDB connection error:", err);
});