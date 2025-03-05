return (
  <header className = "header">
   
    <Link to = "/">
    <img src={logo} className="header__logo" alt={logo}/>
    </Link>
    <p className="header__date-and-location">{currentDate},{weatherData.city}</p>
    <div className="header_controls">
      <toggleSwitch />
      <button className="header__add-btn" onClick={handleChange}>add button</button>
      <button className="header__user-name" onClick={}></button>
    </div>
   
  </header>
)