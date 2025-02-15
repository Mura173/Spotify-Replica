// JavaScript Assincrono
// await async
// FullFilled
import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://Mura173:KU95E5zXC4FRY7nv@cluster.eb0w6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster";

const client = new MongoClient(URI);

export const db = client.db("spotifyProject");
// const songCollection = await db.collection("songs").find({}).toArray();

// console.log(songCollection);
