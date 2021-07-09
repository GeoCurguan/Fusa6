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
        const res = await axios.get('http://45.79.170.31:8000/audios?max_files=10&max_duration=80&max_size=1323044&min_timestamp=1000000000&max_timestamp=2000000000&min_latitude=-90&max_latitude=90&min_longitude=-180&max_longitude=180',
                {headers:{'X-Api-Key': 'RXXceb89Vv30H3FhGaCg'}})
        console.log(res.data.data)
        dispatch({
            type: 'GET_AUDIOS',
            payload: res.data.data
        })
    }

    const getReproducerAudio = async (id) => {
        //console.log(initialState.audios)
        const res = await axios.get('http://45.79.170.31:8000/audios?max_files=10&max_duration=80&max_size=1323044&min_timestamp=1000000000&max_timestamp=2000000000&min_latitude=-90&max_latitude=90&min_longitude=-180&max_longitude=180',
                {headers:{'X-Api-Key': 'RXXceb89Vv30H3FhGaCg'}})
        console.log(res.data.data[1].data)
        dispatch({
            type: 'GET_REPRODUCER_AUDIOS',
            payload: res.data.data[1].data
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