import React from 'react'
import {faFacebook,faGithub,faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Hi, I am 
                    <span> Pranav Dnyaneshwar Mohol</span>
                </h1>
                <p className="h-sub-text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Necessitatibus aliquam eveniet itaque ipsum voluptatum blanditiis repellendus. 
                    Iure consequuntur cum officia voluptates distinctio enim perspiciatis? 
                    Perspiciatis voluptatibus dignissimos tempora porro voluptas!
                </p>
                <div className="icons">
                    <Link to="/" className="icon-holder">
                        <FontAwesomeIcon icon={faFacebook} className="icon fb"/>
                    </Link>
                    <Link to="/" className="icon-holder">
                        <FontAwesomeIcon icon={faGithub} className="icon gh"/>
                    </Link>
                    <Link to="/" className="icon-holder">
                        <FontAwesomeIcon icon={faLinkedin} className="icon ld"/>
                    </Link>
                </div>
            </header>
        </div>
    )
}

export default Home
