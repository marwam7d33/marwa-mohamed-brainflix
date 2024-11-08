import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import VideoUpload from "./pages/VideoUpload/VideoUpload";
import Header from "./Components/Header/Header";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.scss";

const BASE_URL = import.meta.env.VITE_API_URL;

function App() {
  const [server, setServer] = useState("");

  // server condition
  const serverStatus = async () => {
    try {
      const { data } = await axios.get(`${BASE_URL}`);
      setServer(data);
    } catch (error) {
      console.error("Your server is down");
    }
  };

  useEffect(() => {
    serverStatus();
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/videos/:id" element={<HomePage />} />
        <Route path="/upload" element={<VideoUpload />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
