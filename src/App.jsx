import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import VideoUploadPage from "./pages/VideoUpload/VideoUpload";
import Header from "./Components/Header/Header";
import React, { useState, useEffect } from "react";
import axios from "axios";

import "./App.scss";

function App() {
  const [videos, setVideos] = useState([]); // Store list of videos
  const [selectedVideo, setSelectedVideo] = useState(null); // Store selected video

  // Fetch videos from the API
  const getVideos = async () => {
    try {
      const response = await axios.get(
        `https://unit-3-project-api-0a5620414506.herokuapp.com/videos?api_key=8d145847-4906-4f86-94d0-2880fd6b568c`
      );
      setVideos(response.data);
      setSelectedVideo(response.data[0]); // Set initial selected video to the first video in the list
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  // Fetch video details by ID
  const getVideoById = async (id) => {
    try {
      const response = await axios.get(
        `https://unit-3-project-api-0a5620414506.herokuapp.com/videos/${id}?api_key=8d145847-4906-4f86-94d0-2880fd6b568c`
      );
      setSelectedVideo(response.data); // Update selected video state with detailed video data
    } catch (error) {
      console.error("Error fetching video details:", error);
    }
  };

  // Call getVideos on component mount
  useEffect(() => {
    getVideos();
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        {/* Home route */}
        <Route
          path="/"
          element={
            <HomePage
              videos={videos}
              selectedVideo={selectedVideo}
              setSelectedVideo={getVideoById} // Pass the function to fetch video details
            />
          }
        />
        {/* Video upload page */}
        <Route path="/upload" element={<VideoUploadPage />} />
      </Routes>
    </Router>
  );
}

export default App;
