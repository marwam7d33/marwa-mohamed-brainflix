import "./VideoPlayer.scss";
function VideoPlayer() {
  return (
    <div className="video-player">
      <video
        src="https://unit-3-project-api-0a5620414506.herokuapp.com/stream"
        controls
        className="video-player__content"
      ></video>
    </div>
  );
}

export default VideoPlayer;
