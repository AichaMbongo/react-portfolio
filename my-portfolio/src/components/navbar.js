import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

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
          <li class="nav-item">
                <a class="nav-link" href="#section2">Education</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#section3">Projects</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#section4">Work Experience</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#section5">Skills</a>
            </li>

            <li class="nav-item">
                <a class="nav-link" href="#section6">References</a>
            </li>

            <li class="nav-item">
                <a class="nav-link" href="#section7">Hobbies</a>
            </li>

            <li class="nav-item">
                <a class="nav-link" href="#section8">Contacts</a>
            </li>

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
