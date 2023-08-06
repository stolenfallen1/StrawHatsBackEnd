// Description: This file is the entry point of the application.
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import postRoutes from "./routes/Posts.js";

// Create an express application.
const app = express();

// Load environment variables from .env file.
dotenv.config();

// Parse incoming requests with JSON payloads.
app.use(express.json());

// Enable CORS for the server.
app.use(cors());

/* 
Add the postRoutes middleware with the /forums path prefix 
if we want to access api routes from postRoutes middle we have to call it like this:
example (
  /forums/getPost
  /forums/addPost
)
*/
app.use("/forums", postRoutes);

// Start the server and listen for the incoming requests.
app.listen(process.env.PORT || 3000, () => {
  console.log("Server started");
});
