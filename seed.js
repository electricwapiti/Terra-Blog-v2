// Add test data to terra_blog database and posts collection by connecting to Atlas cluster and inserting blog posts.

import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

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
        default: Date.now,
    },
    vector: {
        type: [Number],
        required: false,
    }
});

const Post = mongoose.model('Post', postSchema);

// Sample data for blog posts
const samplePosts = [
  {
    title: "The Rise of AI in Modern Art",
    content: "Exploring how artificial intelligence is changing the creative process for artists around the world. From generative art to new tools for digital artists, AI is opening new doors.",
    author: "Alex Chen",
    imgURL: "https://example.com/images/ai-art.jpg",
  },
  {
    title: "Mastering the Art of Digital Photography",
    content: "A comprehensive guide for beginners and intermediates on improving their digital photography skills. Learn about composition, lighting, and post-processing techniques.",
    author: "Sam Rivera",
    imgURL: "https://example.com/images/photography-guide.jpg",
  },
  {
    title: "The Best Hiking Trails in the Pacific Northwest",
    content: "Discover breathtaking landscapes and hidden gems with our curated list of the best hiking trails in the Pacific Northwest. Gear up and explore the great outdoors!",
    author: "Jessica Lee",
    imgURL: "https://example.com/images/hiking-trails.jpg",
  },
  {
    title: "Understanding Mongoose Schemas and Models",
    content: "A deep dive into the core concepts of Mongoose, explaining how schemas define your data structure and how models are used to interact with your MongoDB collection.",
    author: "Jordan Blake",
    imgURL: "https://example.com/images/mongoose-guide.jpg",
  },
  {
    title: "The Future of Web Development: A Look at WebAssembly",
    content: "WebAssembly is poised to revolutionize web development. Learn what it is, how it works, and why it's becoming a crucial technology for high-performance web applications.",
    author: "Chris Evans",
    imgURL: "https://example.com/images/webassembly.jpg",
  }
];

const seedDatabase = async () => {
    try {
        await mongoose.connect(process.env.ATLAS_CONNECTION_STRING);
        console.log("Connected to MongoDB Atlas!");

        // Clear existing data (optional, but good for clean testing)
        await Post.deleteMany({});
        console.log("Existing posts deleted.");

        // Insert the sample posts
        await Post.insertMany(samplePosts);
        console.log("Sample posts inserted successfully!");

    } catch (err) {
        console.error("Error seeding database:", err);
    } finally {
        // Disconnect from the database
        await mongoose.disconnect();
        console.log("Disconnected from MongoDB.");
    }
};

seedDatabase();