import "../Vidrecomm/Vidrecomm.scss";
import Comments from "../Comments/Comments";
function VideoRecomm({ videos, setSelectedVideo, selectedVideo }) {
  //  get d comments
  const comments = selectedVideo.comments || [];
  return (
    <section className="video__container">
      <Comments comments={comments} />

      <h3 className="video__header">NEXT VIDEOS</h3>
      {videos
        .filter((video) => video.id !== selectedVideo.id)
        .map((video) => (
          <div
            className="video"
            key={video.id}
            onClick={() => {
              console.log(video);
              setSelectedVideo(video); // Update selected video on click
            }}
          >
            <img className="video__image" src={video.image} alt={video.title} />
            <div className="video__textwrapper">
              <h3 className="video__title">{video.title}</h3>
              <p>{video.channel}</p>
            </div>
          </div>
        ))}
    </section>
  );
}

export default VideoRecomm;
