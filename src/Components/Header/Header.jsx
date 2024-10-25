import "./Header.scss";
function Header() {
  return (
    <nav>
      <header className="header">
        <div className="header__img-container">
          <img src=".\src\assets\Logo\BrainFlix-logo.svg" alt="BrainFlix" className="header__logo" />
        </div>
        <div className="header__container">
          <input type="text" placeholder="Search" className="header__search" />
          <img src=".\src\assets\Images\Mohan-muruge.jpg" alt="Profile" className="header__avatar" />
        </div>
        <div className="header__upload--outer">
          <button className="header__upload">
            <p className="header__text">
              <img src="\src\assets\Icons\upload.svg"></img>
              <span className="header__upload--text">UPLOAD</span>
            </p>
          </button>
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
