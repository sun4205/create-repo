function Header() {
  return (
    <header className="header">
      <img src="" alt="" className="header__logo" />
      <p className="header__date-and-location">date, location</p>
      <button className="header__add-clothes-btn">+add Clothes </button>
      <div className="header__user-container">
        <p className="header__username">name</p>
        <img src="" alt="" className="header__userAvatar" />
      </div>
    </header>
  );
}

export default Header;
