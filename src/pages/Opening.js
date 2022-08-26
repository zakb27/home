import React, {useRef, useState} from "react";
import TypedJSHook from "../hooks/TypedJSHook";
import {NavLink,Link} from "react-router-dom";
import pikachu from '../images/pikachu-running.gif'
import pokemon_caught from '../images/sound.mp3'
import smoke from '../images/smoke.png'
const Opening = () =>{
    const pokemonRef = useRef(null)
    const soundRef = useRef(null)

    const handlePokemonClick = () =>{
        pokemonRef.current.style='display:none;'
        soundRef.current.play();
    }

    return(<div>
            <div className={'opening'}>
                <div className="typed">
                    <h1 className={'part1'}>&nbsp; Hi I'm&nbsp;</h1>
                    <TypedJSHook />
                </div>
                <Link
                    as={NavLink}
                    to={'/main'}
                    className="go_to"
                >
                    <button className='btn-77'>
                        Who am I? → </button></Link>



            </div>
            <div className={"running"}  >
                <img src={pikachu} alt="Pikachu running"onClick={handlePokemonClick} ref={pokemonRef} className={'pikachu'}/>
                <audio src={pokemon_caught} ref={soundRef}></audio>
                <p>Catch him</p>

            </div>

        </div>
    )
}

export default Opening;