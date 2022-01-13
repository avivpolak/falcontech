import React from "react";
import video from "../media/video.webm";
import "./MainSection.css"
export default function MainSection() {
    return (
        <div>
            <section className="showcase">
                <div className="video-container">
                    <video src={video} autoPlay muted loop></video>
                </div>
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
        </div>
    );
}
