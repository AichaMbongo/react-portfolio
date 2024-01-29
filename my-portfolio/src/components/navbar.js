import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-white fixed-top">
      <a className="navbar-brand" href="#carouselExampleCaptions">
        My Portfolio
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#section1">
              About Me <span className="sr-only">(current)</span>
            </a>
          </li>
          {/* Add more list items for other sections */}
          {/* ... */}
          <li className="nav-item">
            <a className="btn btn-danger" href="src/documents/AichaCV.pdf" target="_blank">
              Download CV
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
