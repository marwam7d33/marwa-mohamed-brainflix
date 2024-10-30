import "./VideoRecomm.scss";

function VideoRecomm({ videos, onVideoSelect, selectedVideo }) {
  return (
    <section className="video__container">
      <h3 className="video__header">NEXT VIDEOS</h3>
      {videos
        .filter((video) => video.id !== selectedVideo?.id) // Filter out the currently selected video
        .map((video) => (
          <div
            className="video"
            key={video.id}
            onClick={() => onVideoSelect(video.id)} // Call the function to fetch video details by ID
          >
            <img className="video__image" src={video.image} alt={video.title} />
            <div className="video__textwrapper">
              <h3 className="video__title">{video.title}</h3>
              <p className="video__text">{video.channel}</p>
            </div>
          </div>
        ))}
    </section>
  );
}

export default VideoRecomm;
