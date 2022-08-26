import React,{useState} from "react";
import TypedJSHook from "../hooks/TypedJSHook";
import {NavLink,Link} from "react-router-dom";
import pikachu from '../images/pikachu-running.gif'

const Opening = () =>{
    return(<div>
        <div className={'opening'}>
        <div className="typed">
            <h1 className={'part1'}>&nbsp; Hi I'm &nbsp;</h1>
            <TypedJSHook />
        </div>
            <Link
                as={NavLink}
                to={'/main'}
                className="go_to"
            >
                <button className='btn-77'>
            Who am I? → </button></Link>

        {/*    </CSSTransition>*/}
        {/*</TransitionGroup>*/}


    </div>
        <div className="running">
            <img src={pikachu} alt="Pikachu running"/>
        </div>
    </div>)
}

export default Opening;