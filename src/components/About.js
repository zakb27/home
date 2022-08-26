import React from 'react';
import image from '../images/prof.jpeg'
import './about.css'
const About = () =>{

    return(<div className={'about_container'}>
        <div className="intro">
            <img src={image} alt="Image of myself"/>
            <div className="intro_text">
                <h2>About me</h2>
                <p>Hi, I'm a 20 year old Computer Science Student currently in his third year
                    at the <a href="https://www.uea.ac.uk/">University of East Anglia. </a>
                    Programming is one of my many hobbies that I enjoy and web development
                    is one of the many skills that I have taught myself as it is a useful and valuable
                    skill in todays worlds. I have experience in python and java which have been
                    boosted by the curriculum that I study. In my spare time when I'm not coding
                    I like to watch Formula 1 and Star Wars. </p>
            </div>
            <div className="home__social">
                <div className="icons">
                    <a href="https://discord.com/users/Turbo#5735" target="_blank" className="home__social-icon">
                        <i className="uil uil-discord"></i>
                    </a>
                </div>
                <div className={'icons'}>
                    <a href="https://paypal.me/zakb25?country.x=GB&locale.x=en_GB" target="_blank"
                       className="home__social-icon">
                        <i className="uil uil-paypal"></i>
                    </a></div>
                <div className={'icons'}>
                    <a href="https://github.com/zakb27" target="_blank" className="home__social-icon">
                        <i className="uil uil-github"></i>
                    </a></div>
                <div className={'icons'}>
                    <a href="https://instagram.com/zakb27" target="_blank" className="home__social-icon">
                        <i className="uil uil-instagram"></i>
                    </a></div>
                <div className={'icons'}>
                    <a href="https://www.amazon.co.uk/hz/wishlist/ls/3GXWJX888OOB0?ref_=wl_share" target="_blank"
                       className="home__social-icon">
                        <i className="uil uil-amazon"></i>
                    </a></div>
                <div className={'icons'}>
                    <a href="https://open.spotify.com/user/3okuksz475xnozor7ri3vu5x3?si=b1f4d8c626e94e83"
                       target="_blank"
                       className="home__social-icon">
                        <i className="uil uil-headphones-alt"></i>
                    </a></div>
            </div>

        </div>
        <div className="experience">
            {/*<img src={image2} alt=""/>*/}
        </div>
    </div>)
}

export default About;