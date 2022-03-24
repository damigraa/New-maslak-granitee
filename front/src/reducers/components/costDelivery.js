import { costDeliveryConstants } from "../../actions/constants"


const initialState = {
    costDelivery: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case costDeliveryConstants.GET_COST_DELIVERY_SUCCESS:
            state = {
                ...state,
                costDelivery: action.payload.costDelivery,
            }
            break
    }
    return state
}