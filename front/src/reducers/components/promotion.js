import { promotionConstants } from "../../actions/constants"


const initialState = {
    promotion: [],
}


export default (state = initialState, action) => {
    switch (action.type) {
        case promotionConstants.GET_PROMOTION_SUCCESS:
            state = {
                ...state, 
                promotion: action.payload.promotion,
            }
            break

    }
    return state
}