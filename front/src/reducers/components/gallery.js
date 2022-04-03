import { galleryConstants } from "../../actions/constants"


const initialState = {
    galleries: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case galleryConstants.GET_GALLERY_SUCCESS:
            state = {
                ...state,
                galleries: action.payload.galleries,
            }
            break
    }
    return state
}
