import { engravingConstants } from "../../actions/constants"


const initialState = {
    engraving: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case engravingConstants.GET_ENGRAVING_SUCCESS:
            state = {
                ...state,
                engraving: action.payload.engraving,

            }
            break
    }
    return state
}