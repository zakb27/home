import React,{useState} from "react";
import Nav from '../components/Nav'
import Home from '../components/Home'
import Project from "../components/Project";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import About from "../components/About";
const Main = () =>{


    return (
        <div>
            <header>
                <Nav />
            </header>
            <main>
                <section id={'home'}>
                    <Home />
                </section>
                <section id={'projects'}>
                    <Project />
                </section>
                <section id={'about'}>
                    <About />
                </section>
                <section id={'contact'}>
                    <Contact />
                </section>

            </main>
            <footer>
                <Footer />
            </footer>
        </div>)
}

export default Main;