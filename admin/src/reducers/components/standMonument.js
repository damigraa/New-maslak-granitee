import { standMonumentConstants } from "../../actions/constants"


const initialState = {
    standMonument: [],
    view: 'list'
}

export default (state = initialState, action) => {
    switch (action.type) {
        case standMonumentConstants.DELETE_STAND_MONUMENT_SUCCESS:
            return state.standMonument.filter((standMonument) => standMonument._id !== action.payload)
        case standMonumentConstants.UPDATE_STAND_MONUMENT_SUCCESS:
            return state.standMonument.map((standMonument) => standMonument._id === action.payload._id ? action.payload : standMonument)


        case standMonumentConstants.GET_STAND_MONUMENT_SUCCESS:
            state = {
                ...state,
                standMonument: action.payload.standMonument,

            }
            break
        case standMonumentConstants.SET_VIEW:
            state = {
                ...state,
                view: action.payload
            }
            break;
    }
    return state
}

export const setFileView = (payload) => ({ type: standMonumentConstants.SET_VIEW, payload })
