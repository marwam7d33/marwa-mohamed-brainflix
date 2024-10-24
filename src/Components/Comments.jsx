import "./Comments.scss";

function Comments({ comments }) {
  return (
    <div>
      <h2>Comments</h2>
      {comments.map((comment) => (
        <div key={comment.id}>
          <p>
            <strong>{comment.author}:</strong> {comment.text}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Comments;
