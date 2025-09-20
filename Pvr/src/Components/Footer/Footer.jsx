import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>PVR CINEMAS</h2>
          <p>Find Your Favorite Movie Anytime, Anywhere.</p>
        </div>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#movies">Movies</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-socials">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} PVR Cinemas. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
