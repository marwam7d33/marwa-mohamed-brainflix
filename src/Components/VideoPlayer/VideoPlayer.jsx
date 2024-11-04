import "./VideoPlayer.scss";

function VideoPlayer({ video }) {
  if (!video) {
    return <div>Loading video...</div>;
  }

  return (
    <div className="video-player">
      <video
        src={video.video}
        controls
        poster={video.image || "/path/to/default/poster.jpg"}
        className="video-player__content"
      ></video>
    </div>
  );
}

export default VideoPlayer;
