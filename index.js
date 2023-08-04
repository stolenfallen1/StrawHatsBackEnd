// Description: This file is the entry point of the application.
// Import necessary modules for the application.
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

// Create an express application.
const app = express();

// Load environment variables from .env file.
dotenv.config();

// Enable CORS for the server.
app.use(cors());

// Parse incoming requests with JSON payloads.
app.use(express.json());

// Start the server and listen for the incoming requests.
app.listen(process.env.PORT || 3000, () => {
  console.log("Server started");
});
