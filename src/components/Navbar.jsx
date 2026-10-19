import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg bx-static">
      <div className="container">
        <div className="nav-sec padding-b-50">
          <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container-fluid">
              <a className="navbar-brand" href="#home">
                <img src="/assets/img/logo/image-removebg-preview.png" alt="logo" />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                onClick={() => setIsOpen(!isOpen)}
              >
                <i className="fa fa-bars" aria-hidden="true"></i>
              </button>
              <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
                <ul className="navbar-nav" id="top-menu">
                  <li className="nav-item active">
                    <a className="nav-link bx-nav" href="#home">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link bx-nav" href="#about">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link bx-nav" href="#experience">Resume</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link bx-nav" href="#portfolio">Portfolio</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link bx-nav" href="#contact">Contact</a>
                  </li>
                </ul>
              </div>
              <a className="custom-btn bx-btn m-r-5px" href="#contact">Get a quote</a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}