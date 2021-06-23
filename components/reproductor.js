import React from 'react';
import AudioPlayer from 'react-h5-audio-player';




export const Player = () => {
    return(
    <AudioPlayer
        autoPlay
        src="/sonido/Autos.wav"
    />
    )
};


export const Player1 = () => {
    return(
    <AudioPlayer
        autoPlay
        src="/sonido/Personas.wav"
    />
    )
};
