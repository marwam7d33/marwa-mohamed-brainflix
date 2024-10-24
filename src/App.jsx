import "./App.scss";
import Header from "./Components/Header";
import VideoPlayer from "./Components/VideoPlayer";
import Videoinfo from "./Components/Videoinfo";
import Forms from "./Components/Forms";
import Comments from "./Components/Comments";
import Datas from "./assets/Data/video-details.json";

// import React, { useState, useEffect } from "react";

function App() {
  return (
    <>
      <Header />
      <VideoPlayer />
      <Videoinfo />
      <Forms />
      <Comments comments={Datas.videos} />
      <VideoRecomm videos={Datas.videos} />
    </>
  );
}

export default App;
