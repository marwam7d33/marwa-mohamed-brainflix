import "./Videoinfo.scss";

function Videoinfo({ video }) {
  if (!video) {
    return <div>Loading video information...</div>;
  }

  const {
    title = "Title not available",
    channel = "Channel not available",
    views = 0,
    timestamp,
    likes = 0,
    description = "Description not available",
    comments = [],
  } = video;

  return (
    <div className="video-info">
      <h1 className="video-info__title">{title}</h1>
      <div className="video-info__details">
        <span className="video-info__firstdetails">
          <p className="video-info__text">By {channel}</p>
          <p className="video-info__views">
            <img
              src="/src/assets/Icons/views.svg"
              alt=""
              className="video-info__views--icon"
            />
            {views.toLocaleString()}
          </p>
          <div className="video-info__date--tabview">
            <p>
              {timestamp
                ? new Date(timestamp).toLocaleDateString("en-US")
                : "Date not available"}
            </p>
          </div>
        </span>
        <span className="video-info__seconddetails">
          <div className="video-info__views--tabview">
            <p>
              <img
                src="https://raw.githubusercontent.com/marwam7d33/marwa-mohamed-brainflix/2a798dd28d34f7670fe0d24905f879e2b7335651/src/assets/Icons/views.svg"
                alt=""
                className="video-info__views--icon"
              />
              {views.toLocaleString()}
            </p>
          </div>
          <p className="video-info__date">
            {timestamp
              ? new Date(timestamp).toLocaleDateString("en-US")
              : "Date not available"}
          </p>
          <p className="video-info__like">
            <img
              src="https://raw.githubusercontent.com/marwam7d33/marwa-mohamed-brainflix/2a798dd28d34f7670fe0d24905f879e2b7335651/src/assets/Icons/likes.svg"
              alt=""
              className="video-info__like--icon"
            />
            {likes.toLocaleString()}
          </p>
        </span>
      </div>
      <p className="video-info__description">{description}</p>
      <p className="video-info__counter">{comments.length} comments</p>
    </div>
  );
}

export default Videoinfo;
