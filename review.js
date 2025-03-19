import React, { useState } from "react";
import "./Navigation.css";
import { useNavigate } from "react-router-dom";
import Union from "../../images/Union.svg";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { useContext } from "react";

function Navigation({ openLoginModal, handleLogOut }) {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
  };


  const handleSavedNews = () => {
    navigate("/savedNews");
  };

  return (
    <div className="navigation__nav">
      <button onClick ={handleHomeClick} type="button" className="navigation__home-btn">
        Home
      </button>
      {!currentUser ? (
        <button
          type="button"
          onClick={openLoginModal}
          className="navigation__signIn-btn"
        >
          Sign In
        </button>
      ) : (
        <div className="navigation__loggedIn-control">
          <button
            onclick={handleSavedNews}
            type="button"
            className="navigation__savedArticle-nav"
          >
            Saved Articles
          </button>

          <div className="navigation__username">
            {currentUser.username}
            <button onClick={handleLogOut} type="button">
              <img src={Union} className="navigation__logout" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navigation;
