import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div>
                <title>Editorial by HTML5 UP</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
                <link rel="stylesheet" href="assets/css/main.css" />
                {/* Wrapper */}
                <div id="wrapper">
                    {/* Main */}
                    <div id="main">
                        <div className="inner">
                            {/* Header */}
                            <header id="header">
                                {/* <a href="index.html" class="logo"><strong>Editorial</strong> by HTML5 UP</a> */}
                                <ul className="icons">
                                    <li><a href="https://twitter.com/ElizaIrwin18" className="icon brands fa-twitter"><span className="label">Twitter</span></a></li>
                                    <li><a href="https://www.facebook.com/eliza.irwin.1" className="icon brands fa-facebook-f"><span className="label">Facebook</span></a></li>
                                    <li><a href="https://www.instagram.com/elizabethgrace4/" className="icon brands fa-instagram"><span className="label">Instagram</span></a></li>
                                    <li><a href="https://www.linkedin.com/in/elizairwin/" className="icon brands fa-linkedin"><span className="label">Medium</span></a></li>
                                    <li><a href="https://github.com/elizairwin" className="icon brands fa-github"><span className="label">Medium</span></a></li>
                                </ul>
                            </header>
                            {/* Banner */}
                            <section id="banner">
                                <div className="content">
                                    <header>
                                        <h1>Hi there, <br /> I’m Eliza Irwin</h1>
                                        <p>Full-stack web developer</p>
                                    </header>
                                    <p>A results-driven e-commerce buyer turned certified full-stack developer with strong problem-solving abilities and a commitment to learning new skills. Well versed in completing high-intensity, high-volume group and individual work. Passionate about combining design and tech to create user-friendly platforms. Recognized amongst peers for outstanding frontend developer abilities.</p>
                                    <ul className="contact">
                                        <li className="icon solid fa-envelope"><a href="mailto:elizairwin@gmail.com">elizairwin@gmail.com</a></li>
                                        <li className="icon solid fa-phone">(614) 257-7877</li>
                                    </ul>
                                    <article>
                                        <ul className="actions">
                                            <li><a href="https://drive.google.com/open?id=1g0kRxUHg5sQ_yon_FvVMicZx4p9qKCXM" className="button">View Resume</a></li>
                                        </ul>
                                    </article>
                                    <article>
                                        <article>
                                            <ul className="actions">
                                                <li><a href="https://drive.google.com/open?id=1sa-aBeml85ghSnrC2aZsximisb6vp8Aq" className="button">View Cover Letter</a></li>
                                            </ul>
                                            <article>
                                                <ul className="actions">
                                                    <li><a href="https://drive.google.com/open?id=1VBW2T5jAVw7X2LIHwvz_Q0K0WBv4dfR4" className="button">View References</a></li>
                                                </ul>
                                            </article>
                                        </article></article></div>
                                <span className="image object" id="eliza">
                                    <img src="images/eliza.jpg" alt="Eliza" />
                                </span>
                            </section></div></div></div></div>
        );
    }
};