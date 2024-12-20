import { Link } from "react-router-dom";
import logo from "../../assets/Logo/BrainFlix-logo.svg";
import mohan from "../../assets/Images/Mohan-muruge.jpg";
import upload from "../../assets/Icons/upload.svg";

import "./Header.scss";
function Header() {
  return (
    <nav>
      <header className="header">
        <div className="header__img-container">
          <Link to="/">
            <img src={logo} alt="BrainFlix" className="header__logo" />
          </Link>
        </div>
        <div className="header__container">
          <div className="header__search--outer">
            <input
              type="text"
              placeholder="Search"
              className="header__search"
            />
          </div>
          <img src={mohan} alt="Profile" className="header__avatar" />
        </div>
        <div className="header__upload--outer">
          <Link to="/upload">
            <button className="header__upload">
              <p className="header__text">
                <img src={upload} alt="Upload icon" />
                <span className="header__upload--text">UPLOAD</span>
              </p>
            </button>
          </Link>
        </div>
        <img
          src={mohan}
          alt="Profile"
          className="header__avatar header__avatar--tablet"
        />
      </header>
    </nav>
  );
}

export default Header;
