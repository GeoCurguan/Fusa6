import React, { useReducer } from "react"
import AudioReducer from './AudioReducer'
import AudioContext from './AudioContext'
import axios from 'axios'

const AudioState = (props) => {
    const initialState = {
    //audios: ['../sonido/Autos.wav', '../sonido/Personas.wav', '../sonido/Animales.wav'],
    audios: [],
    selectedAudio: null
    }

    const [state, dispatch] = useReducer(AudioReducer, initialState)

    const getAudios = async () => {
        const res = await axios.get('http://45.79.170.31:8000/audio/%7D')
        console.log(res.data)
        dispatch({
            type: 'GET_AUDIOS',
            payload: res.data
        })
        //console.log(initialState.audios[1])
    }

    const getReproducerAudio = async (id) => {
        console.log(initialState.audios)
        const res = await axios.get('http://45.79.170.31:8000/audio/%7D')
        dispatch({
            type: 'GET_REPRODUCER_AUDIOS',
            payload: res.data[id].data
        })
    }

    return (
        <AudioContext.Provider value={{
            audios: state.audios,
            selectedAudio: state.selectedAudio,
            getAudios,
            getReproducerAudio
        }}>
            {props.children}
        </AudioContext.Provider>
    )
}
export default AudioState;