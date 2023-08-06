import { firebaseApp } from "../firebaseConnection.js";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";

const db = getFirestore(firebaseApp); // Initialize the firestore database using the firebaseApp object
const Posts = collection(db, "posts"); // Get a reference to the "posts" collection in the firestore database

// Define an asynchronous function to get all posts from the "posts" collection
export async function getPosts() {
  const postsSnapshot = await getDocs(Posts);
  const posts = postsSnapshot.docs.map((doc) => doc.data());
  return posts;
}

// Define an asynchronous function to add a new post to the "posts" collection
export async function addPosts(req) {
  try {
    const { title, content } = req.body;
    const createdAt = new Date().toLocaleString();
    const newPost = { title, content, createdAt };
    const docRef = await addDoc(Posts, newPost);
    const postId = docRef.id;
    return { id: postId, ...newPost };
  } catch (error) {
    console.error(error);
    throw new Error("Error adding post");
  }
}
