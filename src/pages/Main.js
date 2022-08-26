import React,{useState} from "react";
import {NavLink,Link} from "react-router-dom";
import Nav from '../components/Nav'
import About from '../components/About'
import Project from "../components/Project";
import Contact from "../components/Contact";
const Main = () =>{


    return (
        <div>
            <header>
                <Nav />
            </header>
            <main>
                <section id={'about'}>
                    <About />

                </section>
                <section id={'projects'}>
                    <Project />
                </section>
                <section id={'contact'}>
                    <Contact />
                </section>

            </main>
        </div>)
}

export default Main;