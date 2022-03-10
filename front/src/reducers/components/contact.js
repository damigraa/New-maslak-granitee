import { contactConstants } from "../../actions/constants"


const initialState = {
    contact: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case contactConstants.GET_CONTACT_SUCCESS:
            state = {
                ...state,
                contact: action.payload.contact,
            }
            break
    }
    return state
}
