import React from 'react'
import {NavLink} from 'react-router-dom'
import image from '../assets/Photo.JPG'

//TODO: Import image avatar
function Navbar() {
    return (
        <div className="Navbar">
            <nav className="nav">
                <div className="profile">
                    <img src={image} alt="This is img" />
                {/*TODO:: import images */}
                </div>
                
                <ul className="nav-items">
                    <li className="nav-item">
                        <NavLink to="/" exact activeClassName="active">
                            Home
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink to="/about" exact activeClassName="active">
                            About
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink to="/skills" exact activeClassName="active">
                            Skills
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink to="/exprience" exact activeClassName="active">
                            Exprience
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink to="/projects" exact activeClassName="active">
                            Projects
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink to="/contact" exact activeClassName="active">
                            Contact
                        </NavLink>
                    </li>
                </ul>

                <footer className="footer">
                <p>
                    @2021
                </p>
                </footer>
            </nav>
        </div>
    )
}

export default Navbar
