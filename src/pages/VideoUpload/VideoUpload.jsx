import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./VideoUpload.scss";

function VideoUpload() {
  // const [thumbnail, setThumbnail] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  //   setThumbnail(event.target.value);
  // };

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleChangeDescription = (event) => {
    setDescription(event.target.value);
  };

  const isUploadValid = () => {
    return title && description;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && description) {
      toast.success("Uploaded successfully", {
        position: "bottom-right",
      });
    } else {
      toast.error("Failed to upload, please fill in all fields");
    }
  };

  return (
    <div className="upload-page">
      <h1 className="upload-page__header">Upload Video</h1>
      <form className="upload-page__form" onSubmit={handleSubmit}>
        <div className="upload-page__thumbnail">
          <h3>VIDEO THUMBNAIL</h3>
          <img
            src=".\src\assets\Images\Upload-video-preview.jpg"
            alt="Video Thumbnail"
            className="upload-page__thumbnail-image"
          />
        </div>

        <label className="upload-page__label">TITLE YOUR VIDEO</label>
        <input
          type="text"
          placeholder="Add a title to your video"
          value={title}
          onChange={handleChangeTitle}
          className="upload-page__input"
        />

        <label className="upload-page__label">ADD A VIDEO DESCRIPTION</label>
        <textarea
          placeholder="Add a description to your video"
          value={description}
          onChange={handleChangeDescription}
          className="upload-page__textarea"
        />

        <div className="upload-page__actions">
          <button type="submit" className="upload-page__button">
            {" "}
            PUBLISH
          </button>
          <button
            type="button"
            className="upload-page__cancel"
            onClick={() => navigate("/")}
          >
            CANCEL
          </button>
        </div>
        <ToastContainer />
      </form>
    </div>
  );
}

export default VideoUpload;
