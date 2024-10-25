import "./Comments.scss";

function Comments({ comments }) {
  console.log("Comments received:", comments);

  if (!comments || comments.length === 0) {
    return <p>No comments are being received.</p>;
  }

  return (
    <section>
      {comments.map((comment) => (
        <div key={comment.id} className="comment">
          <div className="comment__container--inner">
            <div className="comment__icon"></div>
            <h3 className="comment__name">{comment.name}</h3>
            <p className="comment__date">
              {new Date(comment.timestamp).toLocaleDateString()}
            </p>
          </div>
          <p className="comment__text">{comment.comment}</p>
        </div>
      ))}
    </section>
  );
}

export default Comments;
