import React, {useRef, useState} from "react";
import './navbar.css'
import {Link, NavLink} from "react-router-dom";
import {HashLink} from 'react-router-hash-link';
import jolteon from "../images/jolteon.gif";
import ChangeLight from "../utils/ChangeLight";
const Nav = () =>{

    const [light,changeLight] = useState(false);
    const [burgerOpen,changeBurger] = useState(false);
    const burgerRef = useRef(null);
    const onBurgerClick = () =>{
        changeBurger(!burgerOpen);
    }


    return(
        <nav>

            <ul className={'navbar'}>
                <ChangeLight />
                <h1>Zak Brook</h1>
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
                <li><HashLink to="#about">About</HashLink><div className="underline"></div></li>
                <li><HashLink to="#projects">Projects</HashLink><div className="underline"></div></li>
                <li><HashLink to="#contact">Contact</HashLink></li>


                <div className={`menu-btn ${burgerOpen ? 'open' :''}`} ref={burgerRef} onClick={onBurgerClick}>
                    <div className="menu-btn_burger"></div>

                </div>

            </ul>

            <ul className={`${burgerOpen ? 'slide_container' :'none'}`} onClick={onBurgerClick}>
                <li> <Link
                    as={NavLink}
                    to={'/'}
                    className={'go_back'}
                >
                    Home
                </Link><div className="underline"></div></li>
                <li><HashLink to="#about">About</HashLink></li>
                <li><HashLink to="#projects">Projects</HashLink></li>
                <li><HashLink to="#contact">Contact</HashLink></li>

            </ul>



        </nav>)
}

export default Nav;