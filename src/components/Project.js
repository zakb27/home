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
    const ref  = useRef(null);
    let q = gsap.utils.selector(ref);


    useEffect(()=>{

        gsap.fromTo(
            q('.anim_right'),{
                x:-300,
            },
            {
                x:0,
                scrollTrigger: {

                    trigger: q(".anim_right"),
                    scrub:true
                }
            }
        );

        gsap.fromTo(
            q('.anim_left'),{
                x:300,
            },
            {
                x:-0,
                scrollTrigger: {

                    trigger: q(".anim_left"),
                    scrub:true
                }
            }
        );

        gsap.fromTo(
            q('.sub_project'),{
                y:100,
                opacity:0,
            },
            {
                opacity:1,
                y:0,
                scrollTrigger: {
                    trigger: q(".sub_project"),
                    scrub:1,
                }
            }
        );
    },[]);


    return(<div className={'project_container'} ref={ref}>
        <h1>Projects</h1>
        <div className="all_projects" >
            <div className={'project anim_left'}>
                <div className="project_text">
                    <h3>Where's Wally</h3>
                    <button className={'btn-96'}><span><a href="https://github.com/zakb27/wheres-wally" target="_blank">Repository</a></span></button>
                </div>
                <img src={image} alt="Where's wally"/>
            </div>
            <div className="project anim_right">
                <div className="project_text">
                    <h3>Local Search Engine</h3>
                    <button className={'btn-96'}><span><a href="https://github.com/zakb27/Local-Search-Engine" target="_blank">Repository</a></span></button>
                </div>
                <img src={image2} alt=""/>
            </div>
            <div className="project anim_left">
                <div className="project_text">
                    <h3>Weather app</h3>
                    <button className={'btn-96'}><span><a href="https://github.com/zakb27/weather-app" target="_blank">Repository</a></span></button>
                </div>
                <img src={image3} alt=""/>
            </div>
            <div className="project anim_right">
                <div className="project_text">
                    <h3>Parking management app</h3>
                    <button className={'btn-96'}><span><a href="https://github.com/zakb27/Parkarino" target="_blank">Repository</a></span></button>
                </div>
                <img src={image4} alt=""/>
            </div>

        </div>
        <h2 className={'smaller_title'}>Smaller projects</h2>
        <div className="sub_projects_container">

            <div className="sub_project">
                <div className="sub_project_text">
                    <h5>Book shop</h5>
                    <button className={'btn-96'}><span><a href="https://github.com/zakb27/bookerino" target="_blank">Repository</a></span></button>
                </div>
                <img src={bookerino} alt=""/>
            </div>
            <div className="sub_project">
                <div className="sub_project_text">
                    <h5>Battleship</h5>
                    <button className={'btn-96'}><span><a href="https://github.com/zakb27/battleship" target="_blank">Repository</a></span></button>
                </div>
                <img src={battleship} alt=""/>
            </div>
            <div className="sub_project">
                <div className="sub_project_text">
                    <h5>Etch-a-Sketch!</h5>
                    <button className={'btn-96'}><span><a href="https://github.com/zakb27/etch-a-sketch" target="_blank">Repository</a></span></button>
                </div>
                <img src={etch} alt=""/>
            </div>
        </div>
    </div>)
}
export default Project;