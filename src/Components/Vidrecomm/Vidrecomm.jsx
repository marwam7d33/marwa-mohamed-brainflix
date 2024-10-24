function VideoRecomm({ videos }) {
  return (
    <section>
      <h3>NEXT Videos</h3>

      {videos.map((video) => (
        <div key={video.id}>
          <h3>{video.title}</h3>
          <img src={video.image} alt={video.title}></img>
        </div>
      ))}
    </section>
  );
}

export default VideoRecomm;
