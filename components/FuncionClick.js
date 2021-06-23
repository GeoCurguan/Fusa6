import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import {Player1} from "../components/reproductor"

export const AutoClick = ()=>{
    function handleClick(){
        <Player1/>
    }

    return(
        <div>
            <button onClick={handleClick}>Autos</button>
        </div>
    )
};

export const PersonaClick = ()=>{
    function handleClick(){
        console.log('personas')
    }

    return(
        <div>
            <button onClick={handleClick}>Personas</button>
        </div>
    )
};

export const AnimalClick = ()=>{
    function handleClick(){
        console.log('animales')
    }

    return(
        <div>
            <button onClick={handleClick}>Animales</button>
        </div>
    )
};

