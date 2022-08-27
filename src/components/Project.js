import React from 'react';
import './project.css'
import image from '../images/wally.png'
import image2 from '../images/wally2.png'
const Project = () =>{

    return(<div className={'project_container'}>
        <h1>Projects</h1>
        <div className="all_projects">
        <div className={'project'}>
            <div className="project_text">
                <h3>Where's Wally</h3>
                <a href="">Repository</a>
                <a href="">Demo</a>
            </div>
            <img src={image} alt="Where's wally"/>

        </div>
        </div>
        </div>)
}
export default Project;