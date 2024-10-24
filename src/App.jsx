import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import VideoPlayer from "./Components/VideoPlayer";
import Videoinfo from "./Components/Videoinfo";
import Forms from "./Components/Forms";
import Comments from "./Components/Comments";
import VideoRecomm from "./Components/Vidrecomm/Vidrecomm";

import videos from "./assets/Data/video-details.json";

import "./App.scss";

function App() {
  return (
    <>
      <Header />
      <VideoPlayer />
      <Videoinfo />
      <Forms />
      <Comments comments={videos} />
      <VideoRecomm videos={videos} />
    </>
  );
}

export default App;
