import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import VideoUpload from "./pages/VideoUpload/VideoUpload";
import Header from "./Components/Header/Header";
import React, { useState, useEffect } from "react";
import axios from "axios";

import "./App.scss";

function App() {
  const [videos, setVideos] = useState([]);

  const addVideo = (newVideo) => {
    setVideos([...videos, newVideo]);
  };

  //axios get
  const getVideos = async () => {
    try {
      const response = await axios.get(
        `https://unit-3-project-api-0a5620414506.herokuapp.com/videos?api_key=8d145847-4906-4f86-94d0-2880fd6b568c`
      );
      setVideos(response.data);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  //  video details by ID
  // const getVideoById = async (id) => {
  //   try {
  //     const response = await axios.get(
  //       `https://unit-3-project-api-0a5620414506.herokuapp.com/videos/${id}?api_key=8d145847-4906-4f86-94d0-2880fd6b568c`
  //     );
  //     setSelectedVideo(response.data); // Update selected video state with detailed video data
  //   } catch (error) {
  //     console.error("Error fetching video details:", error);
  //   }
  // };

  useEffect(() => {
    getVideos();
  }, []);

  // if (!videos)
  //   return <div>loading videos <div>

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage videos={videos} />} />
        <Route path="/videos/:id" element={<HomePage videos={videos} />} />
        <Route path="/upload" element={<VideoUpload addVideo={addVideo} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
