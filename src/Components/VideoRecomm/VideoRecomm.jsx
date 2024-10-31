import "./VideoRecomm.scss";

import { NavLink } from "react-router-dom";

function VideoRecomm({ videos, selectedVideo }) {
  return (
    <section className="video__container">
      <h3 className="video__header">NEXT VIDEOS</h3>
      {videos
        .filter((video) => video.id !== selectedVideo?.id)
        .map((video) => (
          <NavLink
            to={`/videos/${video.id}`}
            className="video"
            classnameactive="video--active"
            key={video.id}
          >
            <img className="video__image" src={video.image} alt={video.title} />
            <div className="video__textwrapper">
              <h3 className="video__title">{video.title}</h3>
              <p className="video__text">{video.channel}</p>
            </div>
          </NavLink>
        ))}
    </section>
  );
}

export default VideoRecomm;
