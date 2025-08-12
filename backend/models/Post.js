import express from 'express';
import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    imgURL: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        required: Date.now,
    },
    vector: {
        type: [Number],
        required: false,
    }
});

const Post = mongoose.model('Post', postSchema);
export default Post;