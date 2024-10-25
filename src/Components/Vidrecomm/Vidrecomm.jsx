import "../Vidrecomm/Vidrecomm.scss";
import Comments from "../Comments";
function VideoRecomm({ videos }) {
  //  comments are stored separately in a variable
  const comments = videos.length > 0 ? videos[0].comments : [];

  return (
    <section className="video__container">
      <Comments comments={comments} />

      <h3 className="video__header">NEXT VIDEOS</h3>
      {videos.slice(1).map((video) => (
        <div className="video" key={video.id}>
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
