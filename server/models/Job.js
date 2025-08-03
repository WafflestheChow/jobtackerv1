import mongoose from "mongoose";

const JobSchema = new mongoose.Schema({
    company: {
        type: String,
        required: true,
        trim: true,
    },
    position: {
        type: String,
        required: true,
        trim: true
    },
    status: {
        type: String,
        enum: ['pending', 'interview', 'declined', 'accepted'],
        default: 'pending',
    },
    appliedDate: {
        type: Date,
        default: Date.now,
    },
    lastUpdated: {
        type: Date,
        default: null,
    },
    comments: {
        type: String,
        trim: true,
        default: '',
    }

});