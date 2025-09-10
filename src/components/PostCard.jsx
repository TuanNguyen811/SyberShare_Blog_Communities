export default function PostCard({ title, author, date }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
      <h3>{title}</h3>
      <p>
        By <b>{author}</b> on {date}
      </p>
    </div>
  );
}
