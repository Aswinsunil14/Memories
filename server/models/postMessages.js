import mongoose from 'mongoose';


const postSchema = mongoose.Schema({
    tittle: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
});

const postMessage = mongoose.model('PostMessages', postSchema)

export default postMessage;