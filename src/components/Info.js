import React from "react"
import profilePic from '../assets/profile_pic.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Info() {
    return (
        <div className="info">
            <img src={profilePic} alt="Profile-Picture" />
            <h1>Noam Guterman</h1>
            <h3>Frontend Developer</h3>
            <h5><a href="https://www.noamguterman.com" target="_blank" className="website">noamguterman.com</a></h5>
            <div className="btns-container">
                <a href="mailto: noamguterman@gmail.com" target="_blank"><button className="btn-email"><FontAwesomeIcon icon={faEnvelope} /> Email</button></a>
                <a href="https://www.linkedin.com/in/noamguterman/" target="_blank"><button className="btn-linkedin"><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</button></a>
            </div>
        </div>
    )
}