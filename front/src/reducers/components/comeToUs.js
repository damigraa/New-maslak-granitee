import { comeToUsConstants } from "../../actions/constants"



const initialState = {
    comeToUs: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case comeToUsConstants.GET_COME_TO_US_SUCCESS:
            state = {
                ...state,
                comeToUs: action.payload.comeToUs
            }
            break
    }
    return state
}