import React, { useContext } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import AudioContext from '../contexts/AudiosContext/AudioContext';

export const Player = () => {
    const { selectedAudio } = useContext(AudioContext)
    return(
        <>
            {selectedAudio ? (<AudioPlayer autoPlay src={"data:audio/x-wav;base64," + selectedAudio}/>) : (<h1>Audio No seleccionado</h1>)}
        </>
    )
};
