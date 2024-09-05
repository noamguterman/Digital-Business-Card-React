import React from "react"
import profilePic from '../assets/profile_pic.jpg';

export default function Info() {
    return (
        <div className="info">
            <img src={profilePic} alt="Profile-Picture" />
            <h1>Noam Guterman</h1>
            <h3>Frontend Developer</h3>
            <h5><a href="https://www.noamguterman.com" target="_blank" className="website">noamguterman.com</a></h5>
            <div className="btns-container">
                <a href="mailto: noamguterman@gmail.com" target="_blank"><button className="btn-email"><i className="fa-solid fa-envelope"></i> Email</button></a>
                <a href="https://www.linkedin.com/in/noamguterman/" target="_blank"><button className="btn-linkedin"><i className="fa-brands fa-linkedin"></i> LinkedIn</button></a>
            </div>
        </div>
    )
}