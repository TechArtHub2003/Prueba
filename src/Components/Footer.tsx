import React from "react";
import "../index.css";

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="logo">
        <a href="/otra-pagina">
          <img src="/img/tha.png" alt="Logo" />
        </a>
      </div>
      <div className="dots">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/img/Icons/facebook.png" alt="Facebook" />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/img/Icons/instagram.png" alt="Instagram" />
        </a>
        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
          <img src="/img/Icons/tik-tok.png" alt="TikTok" />
        </a>
      </div>
    </footer>
  );
};
