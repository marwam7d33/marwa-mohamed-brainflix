import "../i/Header.scss";
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
          <img
            src=".\src\assets\Images\Mohan-muruge.jpg"
            alt="Profile"
            className="header__avatar"
          />
        </div>

        <button className="header__upload">UPLOAD</button>
      </header>
    </nav>
  );
}

export default Header;
