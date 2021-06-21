import React from 'react';
import AudioPlayer from 'react-h5-audio-player';



export const Player = () => {
    return(
    <AudioPlayer
        autoPlay
        src="/sonido/testsound.wav"
    />
    )
};
