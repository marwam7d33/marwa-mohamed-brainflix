import "./Videoinfo.scss";
function Videoinfo({ video }) {
  return (
    <div className="video-info">
      <h1 className="video-info__title">{video.title}</h1>
      <div className="video-info__details">
        <span className="video-info__firstdetails">
          <p className="video-info__text">By {video.channel}</p>
          <p className="video-info__views">
            <img
              src="/src/assets/Icons/views.svg"
              alt=""
              className="video-info__views--icon"
            />
            {video.views.toLocaleString()}
          </p>
          <div className="video-info__date--tabview">
            <p>{new Date(video.timestamp).toLocaleDateString("en-US")}</p>
          </div>
        </span>

        <span className="video-info__seconddetails">
          <div className="video-info__views--tabview">
            <p>
              <img
                src="/src/assets/Icons/views.svg"
                alt=""
                className="video-info__views--icon"
              />
              {video.views.toLocaleString()}
            </p>
          </div>
          <p className="video-info__date">
            {new Date(video.timestamp).toLocaleDateString("en-US")}
          </p>
          <p className="video-info__like">
            <img
              src="/src/assets/Icons/likes.svg"
              alt=""
              className="video-info__like--icon"
            />
            {video.likes.toLocaleString()}
          </p>
        </span>
      </div>

      <p className="video-info__description">{video.description}</p>
      <p className="video-info__counter">{video.comments.length} comments</p>
    </div>
  );
}

export default Videoinfo;
