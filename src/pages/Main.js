import React,{useState} from "react";
import {NavLink,Link} from "react-router-dom";
import Nav from '../components/Nav'
const Main = () =>{


    return (
        <main>
            <header>
                <Nav />
            </header>
        <div><Link
        as={NavLink}
        to={'/'}
        className={'go_back'}
    >
        <button className={'btn-77'}>Go back</button>
    </Link></div>
        </main>)
}

export default Main;