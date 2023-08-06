import { getPosts } from "../controller/Posts.js";
import { addPosts } from "../controller/Posts.js";
import express from "express";

/* 
Create a new router object using the express.Router() method 
So technically we are creating a middleware because the moment we use this in our 
index.js which is the entry point of our app it will be called a middleware.
*/
const router = express.Router();

// Routes for getting posts
router.get("/getPost", async (req, res) => {
  try {
    const posts = await getPosts();
    res.send(posts);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});
// Route for adding posts
router.post("/addPost", async (req, res) => {
  try {
    const posts = await addPosts(req);
    res.send(posts);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
});

export default router;
