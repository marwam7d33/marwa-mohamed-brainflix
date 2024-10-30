import { Link } from "react-router-dom";

import "./Header.scss";
function Header() {
  return (
    <nav>
      <header className="header">
        <div className="header__img-container">
          <Link to="/">
            <img
              src="./src/assets/Logo/BrainFlix-logo.svg"
              alt="BrainFlix"
              className="header__logo"
            />
          </Link>
        </div>
        <div className="header__container">
          <div className="header__search--outer">
            <input
              type="text"
              placeholder="Search"
              className="header__search"
            />
            {/* <img
              className="header__search--icon"
              src="\src\assets\Icons\search.svg"
            ></img> */}
          </div>
          <img
            src=".\src\assets\Images\Mohan-muruge.jpg"
            alt="Profile"
            className="header__avatar"
          />
        </div>
        <div className="header__upload--outer">
          <Link to="/upload">
            <button className="header__upload">
              <p className="header__text">
                <img src="./src/assets/Icons/upload.svg" alt="Upload icon" />
                <span className="header__upload--text">UPLOAD</span>
              </p>
            </button>
          </Link>
        </div>
        <img
          src=".\src\assets\Images\Mohan-muruge.jpg"
          alt="Profile"
          className="header__avatar header__avatar--tablet"
        />
      </header>
    </nav>
  );
}

export default Header;
