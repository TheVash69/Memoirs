import React, { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';
import '../styles/LeftMenu.css';
import logo from "../assets/images/logo.png";

function LeftMenu() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  // Close menu when route changes
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Close on Escape
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') setOpen(false);
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // Prevent background scroll while menu open (mobile)
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <button
        className={`hamburger ${open ? 'is-open' : ''}`}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        onClick={() => setOpen(prev => !prev)}
      >
        <span />
        <span />
        <span />
      </button>

      <div className={`LeftMenu ${open ? 'mobileOpen' : ''}`} role="navigation" aria-hidden={!open && window.innerWidth <= 850}>
        <div className="LogoContainer">
          <img src={logo} alt="Logo" className="App-Logo" />
          <h2>Memoirs</h2>
        </div>
        <hr />
        <nav className="menu-nav">
          <Link to="/" onClick={() => setOpen(false)} className={`menu-item ${location.pathname === '/' ? 'active' : ''}`}>
            <span className="menu-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
            </span>
            <span className="menu-text">Wish</span>
          </Link>

          <Link to="/gallery" onClick={() => setOpen(false)} className={`menu-item ${location.pathname === '/gallery' ? 'active' : ''}`}>
            <span className="menu-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
            </span>
            <span className="menu-text">Fav Pics</span>
          </Link>

          <Link to="/videos" onClick={() => setOpen(false)} className={`menu-item ${location.pathname === '/videos' ? 'active' : ''}`}>
            <span className="menu-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/></svg>
            </span>
            <span className="menu-text">Fav Videos</span>
          </Link>

          <Link to="/sumone" onClick={() => setOpen(false)} className={`menu-item ${location.pathname === '/sumone' ? 'active' : ''}`}>
            <span className="menu-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
            </span>
            <span className="menu-text">Sumone</span>
          </Link>

          <Link to="/letters" onClick={() => setOpen(false)} className={`menu-item ${location.pathname === '/letters' ? 'active' : ''}`}>
            <span className="menu-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
            </span>
            <span className="menu-text">Letters</span>
          </Link>

          <Link to="/hairgrowth" onClick={() => setOpen(false)} className={`menu-item ${location.pathname === '/hairgrowth' ? 'active' : ''}`}>
            <span className="menu-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentColor"><path d="M320 0c17.7 0 32 14.3 32 32V96H472c39.8 0 72 32.2 72 72V440c0 39.8-32.2 72-72 72H168c-39.8 0-72-32.2-72-72V168c0-39.8 32.2-72 72-72H288V32c0-17.7 14.3-32 32-32zM208 384c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H208zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H304zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H400zM264 256a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm152 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80zM48 224H64V416H48c-26.5 0-48-21.5-48-48V272c0-26.5 21.5-48 48-48zm544 0c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H576V224h16z"/></svg>
            </span>
            <span className="menu-text">Hair Growth</span>
          </Link>
        </nav>
      </div>

      {open && <div className="LeftMenu-overlay" onClick={() => setOpen(false)} aria-hidden="true" />}
    </>
  );
}

export { LeftMenu };