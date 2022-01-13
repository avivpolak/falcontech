import React from "react";

export default function AboutSection() {
    return (
        <section id="about">
            <h1>About</h1>
            <p>
                This is a landing page with a full screen video background. Feel
                free to use this landing page in your projects. keep adding
                sections, change the video, content , etc
            </p>

            <h2>Follow Me On Social Media</h2>

            <div className="social">
                <a href="https://twitter.com/traversymedia" target="_blank">
                    <i className="fab fa-twitter fa-3x"></i>
                </a>
                <a href="https://facebook.com/traversymedia" target="_blank">
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
    );
}
