import { manufactureConstants } from "../../actions/constants"


const initialState = {
    manufacture: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case manufactureConstants.GET_MANUFACTURE_SUCCESS:
            state = {
                ...state,
                manufacture: action.payload.manufacture,

            }
            break
    }
    return state
}