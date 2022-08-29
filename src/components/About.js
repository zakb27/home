import React, {useRef, useEffect} from 'react';
import image from '../images/prof.png'
import './about.css'
import {ReactComponent as Css_logo} from "../images/css-logo.svg";
import {ReactComponent as Express_logo} from "../images/express.svg";
import {ReactComponent as Firebase_logo} from "../images/firebase.svg";
import {ReactComponent as Git_logo} from "../images/git.svg";
import {ReactComponent as Html_logo} from "../images/html.svg";
import {ReactComponent as Jest_logo} from "../images/jest.svg";
import {ReactComponent as Js_logo} from "../images/js.svg";
import {ReactComponent as Node_logo} from "../images/node.svg";
import {ReactComponent as React_logo} from "../images/react.svg";
import {ReactComponent as Java_logo} from "../images/java.svg";
import {ReactComponent as Python_logo} from "../images/python_logo.svg";
import {ReactComponent as Web_logo} from "../images/webpack.svg";
import {ReactComponent as Postgres_logo} from "../images/Postgresql.svg";
import {ReactComponent as SQL_logo} from "../images/sql.svg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


const About = () =>{
    gsap.registerPlugin(ScrollTrigger);
    const ref  = useRef(null)

    useEffect(() =>{
        const element  = ref.current;

        gsap.fromTo(
            element.querySelector('.intro_body'),{
                y:100,
                opacity:0
            },
            {
                opacity:1,
                y:0,
                duration: 3
            }
        );
        gsap.fromTo(
            element.querySelector('.experience_container'),{
                x:100,
                opacity:0

            },
            {
                opacity:1,
                x:0,
                duration: 3

            }
        );
        gsap.fromTo(
            element.querySelector('.image_container'),{
                y:-100,
                opacity:0

            },
            {
                opacity:1,
                y:0,
                duration: 3

            }
        );
        gsap.fromTo(
            element.querySelector('.intro_title'),{
                x:-100,
                opacity:0

            },
            {
                opacity:1,
                x:0,
                duration: 3

            }
        );

    },[]);

    return(<div className={'about_container'} ref={ref}>

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
                </a>
            </div>
            <div className={'icons'}>
                <a href="https://www.linkedin.com/in/zak-brook-15bbb8248/"
                   target="_blank"
                   className="home__social-icon">
                    <i className="uil uil-linkedin"></i>
                </a>
            </div>
        </div>


        <div className="intro">
            <div className={'image_container'}>
                <img src={image} alt="Image of myself"/>
            </div>

            <div className="intro_text">
                <h1 className={'intro_title'}>Me</h1>
                <p className={'intro_body'}>Hi, my name is Zak I'm a 20 year old Computer Science Student currently in his third year
                    at the <a href="https://www.uea.ac.uk/">University of East Anglia. </a>
                    Programming is one of my many hobbies that I enjoy and web development
                    is one of the many skills that I have taught myself as it is a useful and valuable
                    skill in todays worlds. I have experience in python and java which have been
                    boosted by the curriculum that I study. In my spare time when I'm not coding
                    I like to watch Formula 1 and Star Wars. </p>
            </div>


        </div>
        <div className="experience_container">
            <h1>Experience: </h1>
        <div className="experience">
            <div>
                <Css_logo />
                <p>CSS</p>
            </div>
            <div>
                <Express_logo />
                <p>Express</p>
            </div>
            <div>
                <Firebase_logo />
                <p>Firebase</p>
            </div>
            <div>
                <Git_logo />
                <p>Git</p>
            </div>
            <div>
                <Html_logo />
                <p>HTML</p>
            </div>
            <div>
                <Java_logo />
                <p>Java</p>
            </div>
            <div>
                <Jest_logo />
                <p>Jest</p>
            </div>
            <div>
                <Js_logo />
                <p>JS</p>
            </div>
            <div>
                <Node_logo />
                <p>Node</p>
            </div>
            <div>
                <React_logo />
                <p>React</p>
            </div>
            <div>
                <Python_logo />
                <p>Python</p>
            </div>
            <div>
                <Web_logo />
                <p>Webpack</p>
            </div>
            <div>
                <SQL_logo />
                <p>SQL</p>
            </div>
            <div>
                <Postgres_logo />
                <p>PostgreSQL</p>
            </div>

        </div>
        </div>
    </div>)
}

export default About;