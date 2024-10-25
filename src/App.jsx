import React, { useState, useEffect } from "react";
import Header from "./Components/Header/Header";
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer";
import Videoinfo from "./Components/Videoinfo/Videoinfo";
import Forms from "./Components/Forms/Forms";
import VideoRecomm from "./Components/Vidrecomm/Vidrecomm";

import videos from "./assets/Data/video-details.json";

import "./App.scss";

function App() {
  const [selectedVideo, setSelectedVideo] = useState(videos[0]);

  return (
    <>
      <Header />
      <VideoPlayer video={selectedVideo} />
      <Videoinfo video={selectedVideo} />
      <Forms video={selectedVideo} />
      <VideoRecomm
        videos={videos}
        setSelectedVideo={setSelectedVideo}
        selectedVideo={selectedVideo}
      />
    </>
  );
}

export default App;
