// import express framework to build web server
import express from 'express';
// import mongoose to interact with mongoDB
import mongoose from "mongoose";
//import cors to allow requests from different origins (e.g. frontend)
import cors from 'cors';
// import dotenv to load environment files
import dotenv from 'dotenv'

dotenv.config(); // this will load variables from .env

const app = express()
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

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
        console.log(`Sever is running on port ${PORT}`);
    })
})
.catch((err) => {
    console.error("MongoDB connection error:", err);
});