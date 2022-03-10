import { headerConstants } from "../../actions/constants"


const initialState = {
    header: [],
    loading: false
}

export default (state = initialState, action) => {
    switch (action.type) {

        case headerConstants.GET_HEADER_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break
        case headerConstants.GET_HEADER_SUCCESS:
            state = {
                ...state,
                header: action.payload.header,
                loading: false

            }
            break
        case headerConstants.GET_HEADER_FAILURE:
            state = { 
                ...state,
                loading: false
            }
            break
    }
    return state
}
