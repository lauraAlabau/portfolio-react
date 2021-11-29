import React from 'react'
import './intro.scss'

const Intro = () => {
    return (
        <div id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/woman.png" alt=""/>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi there, I'm</h2>
                    <h1>Laura Alabau</h1>
                    <h3>Front-end <span> Developer</span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt="" />
                </a>
            </div>
        </div>
    )
}

export default Intro
