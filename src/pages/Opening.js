import React,{useState} from "react";
import TypedJSHook from "../hooks/TypedJSHook";
import {NavLink,Link} from "react-router-dom";
import {TransitionGroup,CSSTransition} from "react-transition-group";

const Opening = () =>{
    return(<div className={'opening'}>
        <TypedJSHook />

        {/*<TransitionGroup>*/}
        {/*    /!**/}
        {/*    This is no different than other usage of*/}
        {/*    <CSSTransition>, just make sure to pass*/}
        {/*    `location` to `Switch` so it can match*/}
        {/*    the old location as it animates out.*/}
        {/*  *!/*/}
        {/*    <CSSTransition*/}
        {/*        key={'t'}*/}
        {/*        classNames="fade"*/}
        {/*        timeout={300}*/}
        {/*    >*/}
            <Link
                as={NavLink}
                to={'/main'}
                className="go_to"
            >
                <button className='btn-77'>
            Who am I? → </button></Link>

        {/*    </CSSTransition>*/}
        {/*</TransitionGroup>*/}
    </div>)
}

export default Opening;