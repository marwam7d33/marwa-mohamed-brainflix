import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./VideoUpload.scss";
import thumbnailImage from "../../assets/Images/Upload-video-preview.jpg";
import publish from "../../assets/Icons/publish.svg";

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
    return title.trim() && description.trim();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isUploadValid()) {
      toast.success("Uploaded successfully", {
        position: "bottom-right",
        autoClose: 2000,
      });

      setTimeout(() => {
        navigate("/");
      }, 3000);
    } else {
      toast.error("Failed to upload, please fill in all fields");
    }
  };

  return (
    <div className="upload-page">
      <h1 className="upload-page__header">Upload Video</h1>
      <form className="upload-page__form" onSubmit={handleSubmit}>
        <section className="upload-page__section--inner">
          <div className="upload-page__thumbnail">
            <h3>VIDEO THUMBNAIL</h3>
            <img
              src={thumbnailImage}
              alt="Video Thumbnail"
              className="upload-page__thumbnail-image"
            />
          </div>

          <div className="upload-page__title-container">
            <label className="upload-page__label">TITLE YOUR VIDEO</label>
            <input
              type="text"
              placeholder="Add a title to your video"
              value={title}
              onChange={handleChangeTitle}
              className="upload-page__input"
            />

            <label className="upload-page__label">
              ADD A VIDEO DESCRIPTION
            </label>
            <textarea
              placeholder="Add a description to your video"
              value={description}
              onChange={handleChangeDescription}
              className="upload-page__textarea"
            />
          </div>
        </section>

        <div className="upload-page__actions">
          <button className="upload-page__button">
            {" "}
            <span>
              {" "}
              <img
                src={publish}
                alt="publish icon"
                className="upload-page__icon"
              />
            </span>
            <p className="upload-page__text">PUBLISH</p>
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
