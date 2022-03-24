import { standMonumentConstants } from "../../actions/constants"


const initialState = {
    standMonument: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case standMonumentConstants.GET_STAND_MONUMENT_SUCCESS:
            state = {
                ...state,
                standMonument: action.payload.standMonument,
            }
            break
    }
    return state
}