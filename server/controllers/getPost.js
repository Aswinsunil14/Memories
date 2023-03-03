 import mongoose from "mongoose";
import PostMessage from "../models/postMessages.js";
 
 export const getPosts = async (req,res) => {
    try {
        const postMessage = await PostMessage.find();
        console.log("POSTMessage",postMessage)
        res.status(200).json(postMessage)

    } catch (error) {
        res.status(404).json({message: error.message})

    }


}


export const createPost = async (req,res) => {
    
    const post = req.body;
    console.log("post.....", post);

    const newPost = new PostMessage(post);
    
    try {
       await newPost.save()
       res.status(201).json(newPost)
    } catch (error) {
        res.status(409).json({message: error.message})   
    }

    // res.send('post creation');
}

export const updatePost = async (req, res) =>{

    const {id: _id}  = req.params;
    const post = req.body;

    console.log("backend", _id);
    console.log("bakcpost", post);

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with this id');

    const updatePost = await PostMessage.findByIdAndUpdate(_id, { ...post, _id }, {new: true});
     console.log("sucessssssss");
    res.json({updatePost, message:"success"});
}