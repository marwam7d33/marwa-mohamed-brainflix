import "./VideoPlayer.scss";
function VideoPlayer({ video }) {
  return (
    <div className="video-player">
      <video
        src={video.videoUrl}
        controls
        className="video-player__content"
      ></video>
    </div>
  );
}

export default VideoPlayer;
