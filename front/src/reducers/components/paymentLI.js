import { paymentLIConstants } from "../../actions/constants"


const initialState = {
    paymentLI: [],
}


export default (state = initialState, action) => {
    switch (action.type) {
        case paymentLIConstants.GET_PAYMENT_LI_SUCCESS:
            state = {
                ...state,
                paymentLI: action.payload.paymentLI,
            }
            break

    }
    return state
}