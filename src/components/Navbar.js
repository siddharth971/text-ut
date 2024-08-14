import React, { useState } from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'; // Ensure to import Link

function Navbar(props) {
    const [bg, setBg] = useState("dark");
    const [title, setTitle] = useState("white"); // Fixed typo here

    const toggleTheme = () => {
        if (bg === "white") {
            setBg("dark");
            setTitle("white");
            document.title = "Text - Dark Theme"; // Fixed typo in title
        } else {
            setBg("white");
            setTitle("black");
            document.title = "Text - Light Theme"; // Fixed typo in title
        }
    };

    return (
        <nav className={`navbar navbar-expand-lg bg-${bg} text-${title}`} data-bs-theme={bg}>
            <div className="container-fluid mx-5">
                <Link className="navbar-brand text" to="/">{props.page}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">{props.title}</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link> {/* Path should be lowercase for consistency */}
                        </li>
                    </ul>
                    <div className={`form-check form-switch`}>
                        <input className="form-check-input" type="checkbox" role="switch" onClick={toggleTheme} id="flexSwitchCheckDefault" />
                        <label className={`form-check-label text-${title}`} htmlFor="flexSwitchCheckDefault">{title === "white" ? "Dark" : "Light"} Mode</label>
                    </div>
                </div>
            </div>
        </nav>
    );
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    page: PropTypes.string.isRequired
};

// Uncomment if you want to provide default values
// Navbar.defaultProps = {
//     title: "Default Title",
//     page: "Default Page"
// }

export default Navbar;
