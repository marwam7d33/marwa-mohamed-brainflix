import "./Header.scss";
function Header() {
  return (
    <nav>
      <header className="header">
        <img
          src=".\src\assets\Logo\BrainFlix-logo.svg"
          alt="BrainFlix"
          className="header__logo"
        />
        <div className="header__container">
          <input type="text" placeholder="Search" className="header__search" />
          <div className="header__tablet--container"></div>
          <img
            src=".\src\assets\Images\Mohan-muruge.jpg"
            alt="Profile"
            className="header__avatar"
          />
        </div>
        <div className="header__upload--outer">
          <button className="header__upload">
            <p className="header__text">
              <img src="\src\assets\Icons\upload.svg"></img>
              <p className="header__upload--text">UPLOAD</p>
            </p>
          </button>
        </div>
      </header>
    </nav>
  );
}

export default Header;
