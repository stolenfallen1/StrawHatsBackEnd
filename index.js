// Description: This file is the entry point of the application.
// Import necessary modules for the application.
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { getPosts } from "./controller/Posts.js";
import { addPosts } from "./controller/Posts.js";

// Create an express application.
const app = express();

// Load environment variables from .env file.
dotenv.config();

// Parse incoming requests with JSON payloads.
app.use(express.json());

// Enable CORS for the server.
app.use(cors());

/*
 *** ALL API ROUTES HERE ***
 */
// Routes for Getting posts
app.get("/getPost", async (req, res) => {
  try {
    const posts = await getPosts();
    res.send(posts);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});
// Route for adding posts
app.post("/addPost", async (req, res) => {
  try {
    const posts = await addPosts(req);
    res.send(posts);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
});

// Start the server and listen for the incoming requests.
app.listen(process.env.PORT || 3000, () => {
  console.log("Server started");
});
