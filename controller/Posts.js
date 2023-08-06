import { firebaseApp } from "../firebaseConnection.js";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";

const db = getFirestore(firebaseApp);
const Posts = collection(db, "posts");

export async function getPosts() {
  const postsSnapshot = await getDocs(Posts);
  const posts = postsSnapshot.docs.map((doc) => doc.data());
  return posts;
}

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
