import { footerConstants } from "../../actions/constants"


const initialState = {
    footer: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case footerConstants.GET_FOOTER_SUCCESS:
            state = {
                ...state,
                footer: action.payload.footer,
            }
            break
    }
    return state
}
