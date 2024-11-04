import { useParams } from "react-router-dom";
import VideoPlayer from "../../Components/VideoPlayer/VideoPlayer";
import Videoinfo from "../../Components/Videoinfo/Videoinfo";
import VideoRecomm from "../../Components/VideoRecomm/VideoRecomm";
import Comments from "../../Components/Comments/Comments";
import Forms from "../../Components/Forms/Forms";
import React, { useEffect, useState } from "react";
import axios from "axios";

const HomePage = ({ videos }) => {
  const { id } = useParams(); //
  const [selectedVideo, setSelectedVideo] = useState(null);

  //  video details by ID
  const getVideoById = async (id) => {
    try {
      const response = await axios.get(
        `https://unit-3-project-api-0a5620414506.herokuapp.com/videos/${id}?api_key=8d145847-4906-4f86-94d0-2880fd6b568c`
      );
      setSelectedVideo(response.data);
      window.scroll(0, 0);
    } catch (error) {
      console.error("Error fetching video details:", error);
    }
  };

  useEffect(() => {
    if (videos.length > 0) {
      const firstVideoId = id || videos[0].id;
      getVideoById(firstVideoId);
    }
  }, [id, videos]);

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
              <Comments comments={selectedVideo.comments || []} />
            </>
          ) : (
            <div>Loading video information...</div>
          )}
        </div>
        <div className="Desktop__section--two">
          <VideoRecomm videos={videos} selectedVideo={selectedVideo} />
        </div>
      </section>
    </>
  );
};

export default HomePage;
