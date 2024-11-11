import { useState } from "react";
import "./Forms.scss";

export default function Forms({ addComment }) {
  const [commentText, setCommentText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (commentText.trim()) {
      addComment(commentText);
      setCommentText("");
    }
  };

  return (
    <section className="forms__container">
      <h2 className="forms__header">JOIN THE CONVERSATION</h2>
      <form className="forms" onSubmit={handleSubmit}>
        <div className="forms__fieldset">
          <img
            src="\src\assets\Images\Mohan-muruge.jpg"
            alt="avatar"
            className="forms__avatar"
          />
          <div className="forms__input-container">
            <textarea
              id="forms__comment"
              className="forms__input"
              placeholder="Add a new comment"
              name="forms__comment"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
            ></textarea>
          </div>
        </div>
        <div className="forms__button-outer">
          <button type="submit" className="forms__button">
            COMMENT
            <img
              className="forms__button--icon"
              src="\src\assets\Icons\add_comment.svg"
              alt="comment icon"
            />
          </button>
        </div>
      </form>
    </section>
  );
}
