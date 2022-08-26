import React, {useRef, useState} from "react";
import './navbar.css'
import {Link, NavLink} from "react-router-dom";
import jolteon from "../images/jolteon.gif";
const Nav = () =>{

        const [burgerOpen,changeBurger] = useState(false);
        const burgerRef = useRef(null);
        const onBurgerClick = () =>{
            changeBurger(!burgerOpen);
        }


    return(
        <nav>

            <ul className={'navbar'}>
                {burgerOpen &&
                <div className={'running-left'}>
                    <img src={jolteon} alt="Jolteon running" />
                </div>
                }

                <li><Link
                    as={NavLink}
                    to={'/'}
                    className={'go_back'}
                >
                    Home
                </Link><div className="underline"></div></li>
                <li><a href="#about">About</a><div className="underline"></div></li>
                <li><a href="#projects">Projects</a><div className="underline"></div></li>
                <li><a href="#contact">Contact</a></li>


                <div className={`menu-btn ${burgerOpen ? 'open' :''}`} ref={burgerRef} onClick={onBurgerClick}>
                    <div className="menu-btn_burger"></div>

                </div>

            </ul>

            <ul className={`${burgerOpen ? 'slide_container' :'none'}`}>
                <li> <Link
                    as={NavLink}
                    to={'/'}
                    className={'go_back'}
                >
                    Home
                </Link><div className="underline"></div></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>


            </ul>



        </nav>)
}

export default Nav;