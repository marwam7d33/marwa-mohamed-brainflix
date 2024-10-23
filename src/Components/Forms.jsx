import "./Forms.scss";

export default function Forms() {
  return (
    <section class="forms__container">
      <h2 class="forms__header">Join the Conversation</h2>
      <form class="forms">
        {/* <div class="forms__fieldset"> */}
        <div class="forms__fieldset">
          <img
            src="\src\assets\Images\Mohan-muruge.jpg"
            alt="avatar"
            class="forms__avatar"
          />

          <div class="forms__input-container">
            <textarea
              id="forms__comment"
              class="forms__input"
              placeholder="Add a new comment"
              name="forms__comment"
            ></textarea>
          </div>
        </div>
        <div class="forms__button-outer">
          <button type="submit" class="forms__button">
            COMMENT
          </button>
        </div>
      </form>
    </section>
  );
}
