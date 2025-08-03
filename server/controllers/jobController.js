import Job from '../models/Job.js';

// GET api/jobs

export const getAllJobs = async (req, res) => {
    try{
        const jobs = await Job.find();
        res.json(jobs);
    } catch (err){
        res.status(500).json({ message: 'Server Error'});
    }
};

// POST /api/jobs

export const createJob = async (req,res) =>{
    try{
        const newJob = new Job(req.body);
        const savedJob = await newJob.save();
        res.status(201).json(savedJob);
    } catch (err){
        res.status(400).json({message: 'Invalid Job Data'});
    }
};