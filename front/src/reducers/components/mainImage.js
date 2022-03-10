import { mainImageConstants } from "../../actions/constants"


const initialState = {
    mainImage: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case mainImageConstants.GET_MAIN_IMAGE_SUCCESS:
            state = {
                ...state,
                mainImage: action.payload.mainImage,
            }
            break
    }
    return state
}
