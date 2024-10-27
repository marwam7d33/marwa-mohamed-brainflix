import "./Forms.scss";

export default function Forms() {
  return (
    <section className="forms__container">
      <h2 className="forms__header">JOIN THE CONVERSATION</h2>
      <form className="forms" onSubmit={(event) => event.preventDefault()}>
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
            ></textarea>
          </div>
        </div>
        <div className="forms__button-outer">
          <button type="submit" className="forms__button">
            COMMENT
          </button>
        </div>
      </form>
    </section>
  );
}
