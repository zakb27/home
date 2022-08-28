import React, {useRef,useEffect} from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './project.css'
import image from '../images/wally.png'
import image2 from '../images/search.png'
import image3 from '../images/weather.png'
import image4 from '../images/parkerino.png'

import etch from '../images/etch.png'
import bookerino from '../images/bookerino.png'
import battleship from '../images/battleship.png'


const Project = () =>{
    gsap.registerPlugin(ScrollTrigger);
    const ref  = useRef(null)

    useEffect(()=>{
        const element  = ref.current;

        gsap.fromTo(
            element.querySelectorAll('.project'),{
                opacity:0,
                x:100
            },
            {
                opacity:1,
                x:0,
                scrollTrigger: {
                    trigger: element.querySelectorAll(".project"),
                    scrub:true
                }
            }
        );
    },[]);


    return(<div className={'project_container'} ref={ref}>
        <h1>Projects</h1>
        <div className="all_projects" >
            <div className={'project'}>
                <div className="project_text">
                    <h3>Where's Wally</h3>
                    <a href="">Repository</a>
                    <a href="">Demo</a>
                </div>
                <img src={image} alt="Where's wally"/>
            </div>
            <div className="project">
                <div className="project_text">
                    <h3>Local Search Engine</h3>
                    <a href="">Repository</a>
                </div>
                <img src={image2} alt=""/>
            </div>
            <div className="project">
                <div className="project_text">
                    <h3>Weather app</h3>
                    <a href="">Repository</a>
                </div>
                <img src={image3} alt=""/>
            </div>
            <div className="project">
                <div className="project_text">
                    <h3>Parking management app</h3>
                    <a href="">Repository</a>
                </div>
                <img src={image4} alt=""/>
            </div>

        </div>

        <div className="sub_projects_container">
            <div className="sub_project">
                <div className="sub_project_text">
                    <h5>Book shop</h5>
                    <a href="">Repository</a>
                </div>
                <img src={bookerino} alt=""/>
            </div>
            <div className="sub_project">
                <div className="sub_project_text">
                    <h5>Battleship</h5>
                    <a href="">Repository</a>
                </div>
                <img src={battleship} alt=""/>
            </div>
            <div className="sub_project">
                <div className="sub_project_text">
                    <h5>Etch-a-Sketch!</h5>
                    <a href="">Repository</a>
                </div>
                <img src={etch} alt=""/>
            </div>
        </div>
    </div>)
}
export default Project;