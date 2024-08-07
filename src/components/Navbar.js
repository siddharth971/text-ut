
import React, { useState } from "react";
import PropTypes from 'prop-types'

function Navbar(props) {
    const [bg, setBg] = useState("dark");
    const [title,setitle]= useState("white")

    const lt = ()=> {
        if (bg === "white") {
            setBg("dark");
            setitle("white")

        }
        else {
            setBg("white");
            setitle("black")
        }
    }
    return (
        <>
            <nav className={`navbar navbar-expand-lg bg-${bg} text-${title} `} data-bs-theme={`${bg}`}>
                <div className="container-fluid mx-5 ">
                    <a className="navbar-brand text" href="/">{props.page}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">{props.title}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/">Action</a></li>
                                    <li><a className="dropdown-item" href="/">Another action</a></li>
                                    <li><a className="dropdown-item" href="/">Something else here</a></li>
                                </ul>
                            </li>
                        </ul>
                        <div className={`form-check form-switch `}>
                            <input className="form-check-input" type="checkbox" role="switch" onClick={lt} id="flexSwitchCheckDefault" />
                            <label className={`form-check-label text-${title}`} htmlFor="flexSwitchCheckDefault">{title}</label>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )

}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    page: PropTypes.string.isRequired
}

// Navbar.defaultProps = {
//     title: "this is title",
//     page : "page"
// }

export default Navbar;