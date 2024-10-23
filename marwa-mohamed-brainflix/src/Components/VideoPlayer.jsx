import "./VideoPlayer.scss";
function VideoPlayer() {
  return (
    <div className="video-player">
      <video src="video.mp4" controls className="video-player__content"></video>
    </div>
  );
}

export default VideoPlayer;
