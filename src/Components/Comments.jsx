import "./Comments.scss";

function Comments() {
  return (
    <div>
      <div className="comments__section">
        {comments.map((comment) => (
          <div key={comment.id} className="comment">
            <p>
              <strong>{comment.name}</strong> ({comment.timestamp}):
            </p>
            <p>{data.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Comments;
