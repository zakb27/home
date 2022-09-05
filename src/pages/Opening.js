import React, {useRef} from "react";
import TypedJSHook from "../hooks/TypedJSHook";
import {NavLink,Link} from "react-router-dom";
import pikachu from '../images/prof/pikachu-running.gif'
import pokemon_caught from '../images/prof/sound.mp3'
const Opening = () =>{
    const pokemonRef = useRef(null)
    const soundRef = useRef(null)

    const handlePokemonClick = () =>{
        pokemonRef.current.style='display:none;'
        soundRef.current.play();
    }

    return(
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


                <div className={"running"}  >
                    <img src={pikachu} alt="Pikachu running"onClick={handlePokemonClick} ref={pokemonRef} className={'pikachu'}/>
                    <audio src={pokemon_caught} ref={soundRef}></audio>
                </div>
            </div>

    )
}

export default Opening;