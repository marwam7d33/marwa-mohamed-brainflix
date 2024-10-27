import React, { useState, useEffect } from "react";
import Header from "./Components/Header/Header";
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer";
import Videoinfo from "./Components/Videoinfo/Videoinfo";
import Forms from "./Components/Forms/Forms";
import VideoRecomm from "./Components/Vidrecomm/Vidrecomm";
import videos from "./assets/Data/video-details.json";
import Comments from "./Components/Comments/Comments";

import "./App.scss";

function App() {
  const [selectedVideo, setSelectedVideo] = useState(videos[0]);
  const comments = selectedVideo.comments || [];

  return (
    <>
      <Header />
      <VideoPlayer video={selectedVideo} />

      <section className="Desktop">
        <div className="Desktop__section--one">
          <Videoinfo video={selectedVideo} />
          <Forms video={selectedVideo} />
          <Comments comments={comments} />
        </div>

        <div className="Dekstop__section--two">
          <VideoRecomm
            videos={videos}
            setSelectedVideo={setSelectedVideo}
            selectedVideo={selectedVideo}
          />
        </div>
      </section>
    </>
  );
}

export default App;
