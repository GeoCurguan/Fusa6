import { GET_AUDIOS, GET_REPRODUCER_AUDIOS} from "../types";

export default (state, action) => {
    const {payload, type} = action

    switch(type){
        case GET_AUDIOS:
            return{
                ...state,
                audios: payload
            }
        case GET_REPRODUCER_AUDIOS:
            return{
                ...state,
                selectedAudio: payload
            }
        default:
            return state;
    }
}