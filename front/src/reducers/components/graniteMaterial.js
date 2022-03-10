import { graniteMaterialConstants } from "../../actions/constants"


const initialState = {
    graniteMaterial: [],
}


export default (state = initialState, action) => {
    switch (action.type) {
        case graniteMaterialConstants.GET_GRANITE_MATERIAL_SUCCESS:
            state = {
                ...state,
                graniteMaterial: action.payload.graniteMaterial,
            }
            break

    }
    return state
}