import { useState } from "react";
import PostCard from "../components/PostCard";

export default function HomePage() {
  const [posts] = useState([
    { id: 1, title: "XSS Attack Explained", author: "Alice", date: "2025-09-10" },
    { id: 2, title: "SQL Injection Basics", author: "Bob", date: "2025-09-09" },
    { id: 3, title: "Defensive Security 101", author: "Charlie", date: "2025-09-08" },
  ]);

  return (
    <div>
      <h2>Latest Posts</h2>
      {posts.map(post => (
        <PostCard key={post.id} {...post} />
      ))}
    </div>
  );
}
