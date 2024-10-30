import VideoPlayer from "../../Components/VideoPlayer/VideoPlayer";
import Videoinfo from "../../Components/Videoinfo/Videoinfo";
import VideoRecomm from "../../Components/VideoRecomm/VideoRecomm";
import Comments from "../../Components/Comments/Comments";
import Forms from "../../Components/Comments/Comments";
import React from "react";

const HomePage = ({ videos, selectedVideo, setSelectedVideo }) => {
  const comments = selectedVideo?.comments || []; //  get comments for the selected video

  return (
    <>
      <div>
        {selectedVideo ? (
          <VideoPlayer video={selectedVideo} />
        ) : (
          <div>Loading video...</div>
        )}
      </div>

      <section className="Desktop">
        <div className="Desktop__section--one">
          {selectedVideo ? (
            <>
              <Videoinfo video={selectedVideo} />
              <Forms video={selectedVideo} />
              <Comments comments={comments} />
            </>
          ) : (
            <div>Loading video information...</div>
          )}
        </div>
        <div className="Desktop__section--two">
          <VideoRecomm
            videos={videos}
            onVideoSelect={setSelectedVideo} // Pass the fetch function as a prop
            selectedVideo={selectedVideo}
          />
        </div>
      </section>
    </>
  );
};

export default HomePage;
