import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './style.css';


function Navbar() {

    return (
        <nav className="navbar sticky-top navbar-expand-md navbar-dark bg-dark">
                           <Link className="navbar-brand" to="/">
                    Portfolio
                </Link> 
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink
                                to="/"
                                end
                                className={({ isActive }) =>
                                    isActive ? 'nav-link active' : 'nav-link'
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="Projects"
                                end
                                className={({ isActive }) =>
                                    isActive ? 'nav-link active' : 'nav-link'
                                }
                            >
                                Projects
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="Contact"
                                end
                                className={({ isActive }) =>
                                    isActive ? 'nav-link active' : 'nav-link'
                                }
                            >
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            </nav>
    );
}

export default Navbar;