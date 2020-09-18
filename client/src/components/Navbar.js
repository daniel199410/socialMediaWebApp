import React from "react";
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="white">
            <div className="nav-wrapper">
                <Link to="/" className="brand-logo black-text">Distagram</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link className="black-text" to="/signIn">Sign in</Link></li>
                    <li><Link className="black-text" to="/signup">Signup</Link></li>
                    <li><Link className="black-text" to="/profile">Profile</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;
