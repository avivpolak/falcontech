import React from "react";
import video from "../media/video.webm";
import Navbar from "./Navbar";
export default function MainSection() {
    return (
        <div>
            <section className="showcase">
                <div className="video-container">
                    <video src={video} autoplay muted loop></video>
                </div>
                {/* <Navbar /> */}
                <div className="navbar">
                    <a href="#home" className="navbarItem">
                        home
                    </a>
                    <a href="#about" className="navbarItem">
                        about
                    </a>
                    <a href="#technology" className="navbarItem">
                        technology
                    </a>
                    <a href="#contact" className="navbarItem">
                        contact
                    </a>
                </div>
                <div className="content">
                    <h1>FALCON TECH</h1>
                    <h3>build the smart future</h3>
                    <a href="#about" className="btn">
                        Read More
                    </a>
                </div>
            </section>

            <section id="about">
                <h1>About</h1>
                <p>
                    This is a landing page with a full screen video background.
                    Feel free to use this landing page in your projects. keep
                    adding sections, change the video, content , etc
                </p>

                <h2>Follow Me On Social Media</h2>

                <div className="social">
                    <a href="https://twitter.com/traversymedia" target="_blank">
                        <i className="fab fa-twitter fa-3x"></i>
                    </a>
                    <a
                        href="https://facebook.com/traversymedia"
                        target="_blank"
                    >
                        <i className="fab fa-facebook fa-3x"></i>
                    </a>
                    <a href="https://github.com/bradtraversy" target="_blank">
                        <i className="fab fa-github fa-3x"></i>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/bradtraversy"
                        target="_blank"
                    >
                        <i className="fab fa-linkedin fa-3x"></i>
                    </a>
                </div>
            </section>
        </div>
    );
}
