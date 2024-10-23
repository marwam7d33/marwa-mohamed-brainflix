import "./Videoinfo.scss";
function Videoinfo() {
  return (
    <div className="video-info">
      <h1 className="video-info__title">
        The Future of Artificial Intelligence
      </h1>
      <div className="video-info__details">
        <span className="video-info__firstdetails">
          <p className="video-info__text">By Aiden Thompson</p>
          <p className="video-info__views">980,544 views</p>
        </span>
        <span className="video-info__seconddetails">
          <p className="video-info__date"> 8/8/2023</p>
          <p className="video-info__like">22,479 likes</p>
        </span>
      </div>
      <p className="video-info__description">
        Explore the cutting-edge developments and predictions for Artificial
        Intelligence in the coming years. From revolutionary breakthroughs in
        machine learning to the ethical considerations influencing AI
        advancements, this exploration transcends the boundaries of mere
        speculation. Join us on a journey that navigates the intricate interplay
        between innovation, ethics, and the ever-evolving tech frontier.",
      </p>
    </div>
  );
}

export default Videoinfo;
