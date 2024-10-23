import "./VideoPlayer.scss";
function Videoinfo() {
  return (
    <div className="video-info">
      <h1 className="video-info__title">
        The Future of Artificial Intelligence
      </h1>
      <div className="video-info__details">
        <p>By Aiden Thompson</p>
        <p>
          <span>980,544 views</span> | <span>22,479 likes</span>
        </p>
        <p>Uploaded on 8/8/2023</p>
      </div>
      <p className="video-info__description">
        Explore the cutting-edge developments and predictions for Artificial
        Intelligence...
      </p>
    </div>
  );
}

export default Videoinfo;
