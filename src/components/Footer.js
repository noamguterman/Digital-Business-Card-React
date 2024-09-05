import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareTwitter } from '@fortawesome/free-brands-svg-icons';
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons';
import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons';
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <div className="footer-container">
            <a href="https://x.com/NoamGuterman" target="_blank">
            <i><FontAwesomeIcon icon={faSquareTwitter} /></i></a>
            <a href="https://www.facebook.com/nowamz" target="_blank">
            <i><FontAwesomeIcon icon={faSquareFacebook} /></i></a>
            <a href="https://www.instagram.com/noamguterman" target="_blank">
            <i><FontAwesomeIcon icon={faSquareInstagram} /></i></a>
            <a href="https://github.com/noamguterman" target="_blank">
            <i><FontAwesomeIcon icon={faSquareGithub} /></i></a>
        </div>
    )
}