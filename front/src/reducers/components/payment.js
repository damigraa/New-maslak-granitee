import { paymentConstants } from "../../actions/constants"


const initialState = {
    payment: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case paymentConstants.GET_PAYMENT_SUCCESS:
            state = {
                ...state,
                payment: action.payload.payment,

            }
            break
    }
    return state
}