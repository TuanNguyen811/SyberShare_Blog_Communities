import { useState } from "react";

export default function WritePage() {
  const [post, setPost] = useState({ title: "", content: "" });

  const change = (e) => setPost({ ...post, [e.target.name]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    console.log("Draft post:", post);
    alert("Created draft (mock).");
  };

  return (
    <div>
      <h2>Write a Post</h2>
      <form onSubmit={submit}>
        <div>
          <label>Title: </label>
          <input name="title" value={post.title} onChange={change} />
        </div>
        <div>
          <label>Content: </label>
          <textarea name="content" rows={8} value={post.content} onChange={change} />
        </div>
        <button type="submit">Publish (mock)</button>
      </form>
    </div>
  );
}
