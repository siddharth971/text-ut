
import React from "react";
import PropTypes from 'prop-types'

function Navbar(props) {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-primary " data-bs-theme="dark">
                <div className="container-fluid mx-5">
                    <a className="navbar-brand" href="/">{props.page}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">{ props.title}</a>
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
                    </div>
                </div>
            </nav>
        </>
    )

}
 
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    page : PropTypes.string.isRequired
}

// Navbar.defaultProps = {
//     title: "this is title",
//     page : "page"
// }

export default Navbar;