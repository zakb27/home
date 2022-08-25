import React from "react";
import './navbar.css'
import {Link, NavLink} from "react-router-dom";
const Nav = () =>{

    return(<ul>
        <li><Link
            as={NavLink}
            to={'/'}
            className={'go_back'}
        >
            Home
        </Link></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>)
}

export default Nav;